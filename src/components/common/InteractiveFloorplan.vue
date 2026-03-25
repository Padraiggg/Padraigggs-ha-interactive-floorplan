<script setup lang="ts">
import type { FloorplanConfig, EntityState, CameraColors, BinaryColors } from '../../types/floorplan';
import { computed, ref } from 'vue';

const props = defineProps<{
    config: FloorplanConfig,
    entityStates: Record<string, EntityState>,
}>();

const emit = defineEmits<{
    (e: 'entity-click', entityId: string, type: string): void
    (e: 'entity-long-press', entityId: string): void
}>();

const imageSrc = computed(() => props.config.imageBase64 || props.config.imageUrl || '');
const hasImage = computed(() => !!imageSrc.value);

// Long Press Logic
const longPressTimer = ref<number | null>(null);
const isLongPress = ref(false);
const pointerStart = ref({ x: 0, y: 0 });

function handlePointerDown(event: PointerEvent, entity: any) {
    if (event.button !== 0) return; // Only left click
    isLongPress.value = false;
    pointerStart.value = { x: event.clientX, y: event.clientY };

    longPressTimer.value = window.setTimeout(() => {
        isLongPress.value = true;
        emit('entity-long-press', entity.entityId);
    }, 500); // 500ms threshold
}

function handlePointerUp(event: PointerEvent, entity: any) {
    if (longPressTimer.value) {
        clearTimeout(longPressTimer.value);
        longPressTimer.value = null;
    }

    if (!isLongPress.value) {
        // Check if moved significantly (drag check)
        const dx = Math.abs(event.clientX - pointerStart.value.x);
        const dy = Math.abs(event.clientY - pointerStart.value.y);
        if (dx < 10 && dy < 10) {
            emit('entity-click', entity.entityId, entity.type);
        }
    }
    isLongPress.value = false;
}

function handlePointerLeave() {
    if (longPressTimer.value) {
        clearTimeout(longPressTimer.value);
        longPressTimer.value = null;
    }
}

function getEntityValues(entity: any) {
    const state = props.entityStates[entity.entityId] || { state: 'off' };
    const { style } = entity;

    // Handle camera entities with state-specific colors
    if (entity.type === 'camera') {
        let color: string;
        const colors = style.colors as CameraColors;
        const defaultIdleColor = '#6b7280'; // Gray
        const defaultRecordingColor = '#ef4444'; // Red
        const defaultStreamingColor = '#3b82f6'; // Blue

        if (state.state === 'recording') {
            color = colors.recordingColor || defaultRecordingColor;
        } else if (state.state === 'streaming') {
            color = colors.streamingColor || defaultStreamingColor;
        } else {
            color = colors.idleColor || defaultIdleColor;
        }

        return {
            color,
            opacity: style.onOpacity
        };
    }

    // Handle other entity types
    const colors = style.colors as BinaryColors;
    if (state.state == 'off') {
        return {
            color: colors.offColor,
            opacity: style.offOpacity
        };
    }

    let color = state.color || colors.onColor;
    let opacity = style.onOpacity;

    if (state.brightness !== undefined) {
        // Map brightness 0-255 to 0-1, multiplied by the configured max opacity
        opacity = (state.brightness / 255) * style.onOpacity;
    }

    return { color, opacity };
}

function getEntityPositionStyle(entity: any) {
    const { style, x, y } = entity;
    return {
        left: `${x}%`,
        top: `${y}%`,
        width: `${style.width}%`,
        height: `${style.height}%`,
        transform: `translate(-50%, -50%) rotate(${style.rotation}deg)`,
        position: 'absolute' as const,
        zIndex: 1
    };
}

function getEntityVisualStyle(entity: any) {
    const { color, opacity } = getEntityValues(entity);
    const { shape } = entity;
    const state = props.entityStates[entity.entityId] || { state: 'off' };

    // Ensure minimum visibility for low brightness if ON
    // If Opacity is 0.8, and brightness is 1/255, we want at least say 0.1 or 0.2
    let effectiveOpacity = opacity;
    if (state.state == 'on' && state.brightness !== undefined) {
        // Map 0-255 brightness to range [0.3, style.onOpacity]
        const minOpacity = 0.3;
        const maxOpacity = entity.style.onOpacity;
        const brightnessFactor = state.brightness / 255;
        effectiveOpacity = minOpacity + (brightnessFactor * (maxOpacity - minOpacity));
    }

    // Allow hiding the dot via dotOpacity:0 in style config
    // If explicitly set to 0, always use 0 (invisible click area)
    const dotOpacity = (entity.style.dotOpacity !== undefined && entity.style.dotOpacity !== null)
      ? entity.style.dotOpacity
      : effectiveOpacity;

    return {
      width: '100%',
      height: '100%',
      backgroundColor: dotOpacity === 0 ? 'transparent' : color,
      opacity: dotOpacity,
      borderRadius: shape === 'circle' ? '50%' : '4px',
      cursor: 'pointer',
      boxShadow: (dotOpacity === 0 || state.state !== 'on') ? 'none' : `0 0 15px ${color}`,
      transition: 'all 0.3s ease'
    };
}

function getLabelStyle(entity: any) {
    const { offsetX, offsetY, color } = entity.labelConfig || {};
    return {
        transform: `translate(-50%, -50%) translate(${offsetX || 0}%, ${offsetY || 0}%)`,
        color: color || '#ffffff',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
    };
}

function getPointsString(points?: { x: number, y: number }[]) {
    if (!points) return '';
    return points.map(p => `${p.x} ${p.y}`).join(',');
}

function isRecording(entity: any) {
    const state = props.entityStates[entity.entityId];
    return entity.type === 'camera' && state?.state === 'recording';
}

</script>

<template>
    <div class="viewer-area">
        <div v-if="!hasImage" class="empty-state">
            <p>No floorplan loaded. Go to Editor to set up.</p>
        </div>

        <div v-else class="canvas-container">
            <div class="image-wrapper">
                <img :src="imageSrc" alt="Floorplan Base" draggable="false" />

                <svg class="overlay-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient v-for="entity in props.config.entities" :key="'grad-' + entity.id"
                            :id="'grad-' + entity.id" gradientUnits="userSpaceOnUse" :cx="entity.x" :cy="entity.y"
                            :r="entity.style.gradientRadius">
                            <stop offset="0%" :stop-color="getEntityValues(entity).color"
                                :stop-opacity="Math.max(0.3, getEntityValues(entity).opacity)" />
                            <stop offset="100%" :stop-color="getEntityValues(entity).color" stop-opacity="0" />
                        </radialGradient>
                        <!-- Edge blur filters for softer light gradients -->
                        <template v-for="entity in props.config.entities" :key="'blur-' + entity.id">
                            <filter v-if="entity.style.edgeBlur && entity.style.edgeBlur > 0"
                                :id="'blur-' + entity.id">
                                <feGaussianBlur :stdDeviation="entity.style.edgeBlur" />
                            </filter>
                        </template>
                    </defs>
                    <polygon v-for="entity in props.config.entities" :key="'poly-' + entity.id"
                        :points="getPointsString(entity.points)"
                        :fill="props.entityStates[entity.entityId]?.shouldLightUp ? `url(#grad-${entity.id})` : 'transparent'"
                        :filter="entity.style.edgeBlur && entity.style.edgeBlur > 0 ? `url(#blur-${entity.id})` : undefined"
                        stroke="none"
                        :class="{ clickable: true }"
                        style="pointer-events: all; transition: fill-opacity 0.3s ease;"
                        @pointerdown="handlePointerDown($event, entity)"
                        @pointerup="handlePointerUp($event, entity)"
                        @pointerleave="handlePointerLeave()" />
                </svg>

                <div v-for="entity in props.config.entities" :key="entity.id" class="interactive-entity"
                    :style="getEntityPositionStyle(entity)" @pointerdown="handlePointerDown($event, entity)"
                    @pointerup="handlePointerUp($event, entity)" @pointerleave="handlePointerLeave()"
                    :title="entity.label">
                    <div class="entity-shape" :class="{ 'camera-recording': isRecording(entity) }"
                        :style="getEntityVisualStyle(entity)"></div>
                    <div v-if="entity.labelConfig.show" class="entity-label" :style="getLabelStyle(entity)"
                        @pointerdown.stop="handlePointerDown($event, entity)"
                        @pointerup.stop="handlePointerUp($event, entity)" @pointerleave.stop="handlePointerLeave()">
                        {{ entity.label }}
                    </div>
                </div>

                <!-- Overlay images (e.g. decorative plants placed on top of the floorplan) -->
                <img v-for="(overlay, idx) in (props.config.overlayImages || [])" :key="'overlay-' + idx"
                    :src="overlay.url || overlay.src" class="fp-overlay-img"
                    :style="{
                        left: overlay.x + '%',
                        top: overlay.y + '%',
                        width: overlay.width + '%',
                        height: overlay.height + '%',
                        transform: `rotate(${overlay.rotation || 0}deg)`,
                        opacity: overlay.opacity ?? 1
                    }"
                    draggable="false" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Styles moved to parent component to ensure Shadow DOM injection in CE mode */
</style>
