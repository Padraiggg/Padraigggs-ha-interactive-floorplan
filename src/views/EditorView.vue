<script setup lang="ts">
import PropertiesPanel from '../components/editor/PropertiesPanel.vue';
import CanvasArea from '../components/editor/CanvasArea.vue';
import { ref } from 'vue';

const canvasRef = ref<InstanceType<typeof CanvasArea> | null>(null);

function toggleDrawMode() {
    if (canvasRef.value) {
        canvasRef.value.isDrawing = !canvasRef.value.isDrawing;
    }
}

</script>

<template>
  <div class="editor-layout">
    <CanvasArea ref="canvasRef" />
    <PropertiesPanel 
        :is-drawing="canvasRef?.isDrawing || false"
        @toggle-draw-mode="toggleDrawMode"
    />
  </div>
</template>

<style scoped>
.editor-layout {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 768px) {
  .editor-layout {
    flex-direction: column;
  }
}
</style>
