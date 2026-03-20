import { defineCustomElement } from 'vue';
import HaFloorplanEditor from './HaFloorplanEditor.ce.vue';

// Convert the Vue component into a Web Component
const HaFloorplanEditorElement = defineCustomElement(HaFloorplanEditor);

// Wrap to expose setConfig which HA expects
class HaFloorplanEditorElementWrapped extends HaFloorplanEditorElement {
    setConfig(config: any) {
        // HA calls this method with the card's YAML config
        // @ts-ignore
        this.config = config;
    }

    // Report card size to HA
    getCardSize() {
        return 12; // Large card
    }
}

// Register the custom element
customElements.define('ha-floorplan-editor', HaFloorplanEditorElementWrapped as any);
