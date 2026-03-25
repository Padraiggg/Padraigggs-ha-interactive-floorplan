import { defineCustomElement } from 'vue';
import HaFloorplanCard from './HaFloorplanCard.ce.vue';

// Convert the Vue component into a Web Component
const HaFloorplanCardElement = defineCustomElement(HaFloorplanCard);

// Wrap to expose setConfig which HA expects
class HaFloorplanCardElementWrapped extends HaFloorplanCardElement {
    setConfig(config: any) {
        // HA calls this method. We need to map it to the vue prop.
        // Vue 3 custom elements map props to properties on the element.
        // So if we have a prop 'config', we can set 'this.config'.

        if (config.floorplan_config) {
            // @ts-ignore
            this.config = config.floorplan_config;
        } else if (config.config) {
            // Support nested 'config' property (standard HA pattern)
            // @ts-ignore
            this.config = config.config;
        } else {
            // @ts-ignore
            this.config = config;
        }
    }
}

// Register the custom element
customElements.define('ha-floorplan-card', HaFloorplanCardElementWrapped as any);

// Log to console for user verify
console.info(
    '%c HA FLOORPLAN CARD %c v0.0.1 ',
    'color: white; background: #202020; font-weight: 700;',
    'color: #202020; background: #91eb61; font-weight: 700;'
);
