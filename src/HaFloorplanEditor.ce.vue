<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { createPinia, setActivePinia } from 'pinia';
import { useFloorplanStore } from './stores/floorplan';
import CanvasArea from './components/editor/CanvasArea.vue';
import PropertiesPanel from './components/editor/PropertiesPanel.vue';
import type { FloorplanConfig } from './types/floorplan';
import { migrateConfig, needsMigration } from './utils/configMigration';

// Create a local Pinia instance for this custom element
const pinia = createPinia();
setActivePinia(pinia);

const store = useFloorplanStore();

const props = defineProps<{
    config?: any,
    hass?: any
}>();

const canvasRef = ref<InstanceType<typeof CanvasArea> | null>(null);

// Status messages for push-to-HA
const pushStatus = ref('');
const pushError = ref('');
const isLoading = ref(false);
const isPushing = ref(false);

// Dashboard name from card config (user-configurable)
const dashboardId = computed(() => props.config?.dashboard || 'lovelace');
const cardIndex = computed(() => props.config?.card_index ?? null);

function toggleDrawMode() {
    if (canvasRef.value) {
        canvasRef.value.isDrawing = !canvasRef.value.isDrawing;
    }
}

// --- Push to HA via hass.callWS() ---

async function loadFromHA() {
    if (!props.hass) {
        pushError.value = 'No Home Assistant connection available';
        return;
    }

    isLoading.value = true;
    pushStatus.value = '';
    pushError.value = '';

    try {
        const result = await props.hass.callWS({
            type: 'lovelace/config',
            url_path: dashboardId.value === 'lovelace' ? null : dashboardId.value,
        });

        // Find the ha-floorplan-card in the dashboard config
        let foundConfig: FloorplanConfig | null = null;
        let foundViewIndex = -1;
        let foundCardIndex = -1;

        if (result && result.views) {
            for (let vi = 0; vi < result.views.length; vi++) {
                const view = result.views[vi];
                const cards = view.cards || [];
                for (let ci = 0; ci < cards.length; ci++) {
                    const card = cards[ci];
                    if (card.type === 'custom:ha-floorplan-card' && card.config) {
                        // If card_index specified, match on that
                        if (cardIndex.value !== null) {
                            if (ci === cardIndex.value && vi === 0) {
                                foundConfig = card.config;
                                foundViewIndex = vi;
                                foundCardIndex = ci;
                                break;
                            }
                        } else {
                            // Take the first one found
                            foundConfig = card.config;
                            foundViewIndex = vi;
                            foundCardIndex = ci;
                            break;
                        }
                    }
                }
                if (foundConfig) break;
            }
        }

        if (foundConfig) {
            // Strip whitespace from imageBase64
            if (foundConfig.imageBase64) {
                foundConfig.imageBase64 = foundConfig.imageBase64.replace(/\s/g, '');
            }

            // Apply migration if needed
            if (needsMigration(foundConfig)) {
                foundConfig = migrateConfig(foundConfig) as FloorplanConfig;
            }

            store.loadConfig(foundConfig);
            pushStatus.value = `Loaded from dashboard "${dashboardId.value}" (view ${foundViewIndex}, card ${foundCardIndex})`;
        } else {
            pushError.value = `No ha-floorplan-card found in dashboard "${dashboardId.value}"`;
        }
    } catch (err: any) {
        pushError.value = `Failed to load: ${err.message || err}`;
        console.error('Load from HA failed:', err);
    } finally {
        isLoading.value = false;
    }
}

async function pushToHA() {
    if (!props.hass) {
        pushError.value = 'No Home Assistant connection available';
        return;
    }

    isPushing.value = true;
    pushStatus.value = '';
    pushError.value = '';

    try {
        // First, get the current dashboard config
        const urlPath = dashboardId.value === 'lovelace' ? null : dashboardId.value;
        const dashConfig = await props.hass.callWS({
            type: 'lovelace/config',
            url_path: urlPath,
        });

        if (!dashConfig || !dashConfig.views) {
            pushError.value = 'Dashboard has no views';
            return;
        }

        // Find the ha-floorplan-card to replace
        let found = false;
        for (let vi = 0; vi < dashConfig.views.length; vi++) {
            const view = dashConfig.views[vi];
            const cards = view.cards || [];
            for (let ci = 0; ci < cards.length; ci++) {
                const card = cards[ci];
                if (card.type === 'custom:ha-floorplan-card' && card.config) {
                    if (cardIndex.value !== null) {
                        if (ci === cardIndex.value && vi === 0) {
                            cards[ci] = {
                                type: 'custom:ha-floorplan-card',
                                config: JSON.parse(JSON.stringify(store.config))
                            };
                            found = true;
                            break;
                        }
                    } else {
                        cards[ci] = {
                            type: 'custom:ha-floorplan-card',
                            config: JSON.parse(JSON.stringify(store.config))
                        };
                        found = true;
                        break;
                    }
                }
            }
            if (found) break;
        }

        if (!found) {
            pushError.value = 'No ha-floorplan-card found to update. Add one to your dashboard first.';
            return;
        }

        // Save the updated dashboard config
        await props.hass.callWS({
            type: 'lovelace/config/save',
            url_path: urlPath,
            config: dashConfig,
        });

        pushStatus.value = `Pushed to dashboard "${dashboardId.value}" successfully! Refresh the View tab to see changes.`;
    } catch (err: any) {
        pushError.value = `Failed to push: ${err.message || err}`;
        console.error('Push to HA failed:', err);
    } finally {
        isPushing.value = false;
    }
}

// Auto-load on mount if hass is available
onMounted(() => {
    if (props.hass) {
        loadFromHA();
    }
});

// Watch for hass becoming available (HA sets it after initial render)
watch(() => props.hass, (newHass, oldHass) => {
    if (newHass && !oldHass) {
        loadFromHA();
    }
});

console.info(`%c HA Floorplan Editor %c ${__APP_VERSION__} `, 'background: #333; color: #fff', 'background: #10b981; color: #fff');
</script>

<template>
    <ha-card class="editor-card">
        <div class="editor-toolbar">
            <div class="toolbar-left">
                <span class="toolbar-title">Floorplan Editor</span>
            </div>
            <div class="toolbar-actions">
                <button class="toolbar-btn" @click="loadFromHA" :disabled="isLoading || !hass" title="Load config from HA dashboard">
                    {{ isLoading ? 'Loading...' : '📥 Load' }}
                </button>
                <button class="toolbar-btn primary" @click="pushToHA" :disabled="isPushing || !hass" title="Push config to HA dashboard">
                    {{ isPushing ? 'Pushing...' : '📤 Push to HA' }}
                </button>
            </div>
        </div>

        <div v-if="pushStatus" class="status-bar success">{{ pushStatus }}</div>
        <div v-if="pushError" class="status-bar error">{{ pushError }}</div>

        <div class="editor-layout">
            <CanvasArea ref="canvasRef" />
            <PropertiesPanel
                :is-drawing="canvasRef?.isDrawing || false"
                @toggle-draw-mode="toggleDrawMode"
            />
        </div>
    </ha-card>
</template>

<style>
/* Basic reset for the shadow DOM */
:host {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* CSS Custom Properties (same dark theme as standalone editor) */
:host {
    --color-bg-primary: #1e293b;
    --color-bg-secondary: #0f172a;
    --color-text-primary: #e2e8f0;
    --color-text-secondary: #94a3b8;
    --color-text-accent: #38bdf8;
    --color-primary: #0ea5e9;
    --color-danger: #ef4444;
    --color-success: #10b981;
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    color: var(--color-text-primary);
}

ha-card {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background: var(--color-bg-primary) !important;
    box-shadow: none !important;
    border: none !important;
    overflow: hidden;
}

.editor-card {
    display: flex !important;
    flex-direction: column;
    height: 80vh;
    min-height: 500px;
}

.editor-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: var(--color-bg-secondary);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.toolbar-title {
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-text-accent);
}

.toolbar-actions {
    display: flex;
    gap: 0.5rem;
}

.toolbar-btn {
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.05);
    color: var(--color-text-primary);
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.2s;
}

.toolbar-btn:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
}

.toolbar-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.toolbar-btn.primary {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: white;
}

.toolbar-btn.primary:hover:not(:disabled) {
    background: #0284c7;
}

.status-bar {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
}

.status-bar.success {
    background: rgba(16, 185, 129, 0.15);
    color: var(--color-success);
}

.status-bar.error {
    background: rgba(239, 68, 68, 0.15);
    color: var(--color-danger);
}

.editor-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
}

@media (max-width: 768px) {
    .editor-layout {
        flex-direction: column;
    }
}

/* === Editor component styles (needed in shadow DOM) === */

/* CanvasArea styles */
.canvas-area {
    flex: 1;
    background-color: var(--color-bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding: 2rem;
}

.upload-zone {
    width: 100%;
    max-width: 500px;
    height: 300px;
    border: 2px dashed var(--color-text-secondary);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s;
}

.upload-zone:hover {
    border-color: var(--color-primary);
    background: rgba(14, 165, 233, 0.05);
}

.upload-content {
    text-align: center;
    color: var(--color-text-secondary);
}

.upload-content .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.canvas-container {
    box-shadow: var(--shadow-xl);
    border-radius: var(--radius-sm);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.zoom-controls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    padding: 4px;
    border-radius: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: white;
}

.zoom-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
}

.zoom-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.scroll-frame {
    flex: 1;
    overflow: auto;
    position: relative;
    padding: 20px;
}

.image-wrapper {
    position: relative;
    display: inline-block;
    line-height: 0;
    cursor: crosshair;
    transition: transform 0.2s ease;
}

.image-wrapper img {
    max-width: none;
    display: block;
    user-select: none;
    width: 100%;
}

.overlay-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.overlay-layer polygon {
    vector-effect: non-scaling-stroke;
}

.hidden-input {
    display: none;
}

/* PropertiesPanel styles */
.properties-panel {
    width: 300px;
    background-color: var(--color-bg-primary);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 10;
}

@media (max-width: 768px) {
    .properties-panel {
        width: 100%;
        height: 40%;
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
}

.panel-header {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-header h2 {
    margin: 0;
    font-size: 1.25rem;
}

.panel-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
}

.hint {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.hint.small {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.input-group {
    margin-bottom: 1rem;
}

.input-group.inline {
    display: flex;
    gap: 0.5rem;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    margin-bottom: 0.25rem;
}

.input-group.checkbox label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-primary);
    cursor: pointer;
}

.config-actions,
.danger-actions {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
}

.header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.icon-btn.close {
    background: transparent;
    color: var(--color-text-primary);
    padding: 0.5rem;
    font-size: 1.5rem;
}

.icon-btn.danger {
    background: transparent;
    color: var(--color-danger);
    padding: 0.2rem;
}

.icon-btn.danger:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: var(--color-danger);
}

.section-title {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-accent);
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.row {
    display: flex;
    gap: 0.5rem;
}

.color-picker-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.color-picker-row input[type="color"] {
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    background: none;
    cursor: pointer;
}

.io-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.io-actions button {
    flex: 1;
    font-size: 0.85rem;
    padding: 0.5rem;
}

button.active {
    background-color: var(--color-primary);
    color: white;
}

.panel-footer {
    padding: 0.5rem;
    text-align: center;
    font-size: 0.7rem;
    color: var(--color-text-secondary);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;
}

/* Entity overlay styles */
.entity-dot {
    position: absolute;
    cursor: grab;
    z-index: 10;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    touch-action: none;
}

.entity-label {
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 4px;
    font-size: 14px;
    font-size: 1.5cqw;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    line-height: 1.2;
}

/* Generic form styles */
input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 0.5rem;
    border-radius: var(--radius-sm);
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
    color: var(--color-text-primary);
    font-size: 0.9rem;
}

input[type="text"]:focus,
input[type="number"]:focus,
select:focus {
    outline: none;
    border-color: var(--color-primary);
}

button {
    padding: 0.6rem 1rem;
    border-radius: var(--radius-sm);
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.05);
    color: var(--color-text-primary);
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.15s;
}

button:hover {
    background: rgba(255, 255, 255, 0.1);
}

button.secondary {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
}

button.secondary:hover {
    background: rgba(255, 255, 255, 0.05);
}

h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
}
</style>
