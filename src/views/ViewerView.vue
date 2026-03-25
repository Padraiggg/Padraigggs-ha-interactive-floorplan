<script setup lang="ts">
import InteractiveFloorplan from '../components/common/InteractiveFloorplan.vue';
import { useFloorplanStore } from '../stores/floorplan';

const store = useFloorplanStore();
</script>

<template>
  <div class="viewer-view">
    <InteractiveFloorplan :config="store.config" :entity-states="store.entityStates"
      @entity-click="(id) => store.toggleEntityState(id, store.config.entities.find(e => e.entityId === id)?.type || 'light')" />
  </div>
</template>

<style>
.viewer-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Blinking animation for camera recording state */
@keyframes camera-recording-blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

.camera-recording {
  animation: camera-recording-blink 2s ease-in-out infinite;
}
</style>
