/**
 * Combined entry point: registers both ha-floorplan-card and ha-floorplan-editor
 * as custom elements. This ensures HACS only needs to install a single JS file.
 */

// --- Card registration ---
import { defineCustomElement } from 'vue';
import HaFloorplanCard from './HaFloorplanCard.ce.vue';

const HaFloorplanCardElement = defineCustomElement(HaFloorplanCard);

class HaFloorplanCardElementWrapped extends HaFloorplanCardElement {
    setConfig(config: any) {
        if (config.floorplan_config) {
            // @ts-ignore
            this.config = config.floorplan_config;
        } else if (config.config) {
            // @ts-ignore
            this.config = config.config;
        } else {
            // @ts-ignore
            this.config = config;
        }
    }

    // HA calls setHass() to pass live entity states to the card
    setHass(hass: any) {
        // @ts-ignore
        this.hass = hass;
    }

    static getConfigElement() {
        return document.createElement('ha-floorplan-editor');
    }

    static getStubConfig() {
        return {
            type: 'custom:ha-floorplan-card',
            config: {
                id: '',
                name: 'My Floorplan',
                imageBase64: '',
                entities: []
            }
        };
    }

    getCardSize() {
        return 6;
    }
}

customElements.define('ha-floorplan-card', HaFloorplanCardElementWrapped as any);

// --- Register in HA card picker ---
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: 'ha-floorplan-card',
    name: 'HA Interactive Floorplan',
    description: 'Interactive floorplan with clickable lights, cameras, and climate controls',
    preview: true
});

// --- Editor registration ---
import HaFloorplanEditor from './HaFloorplanEditor.ce.vue';

const HaFloorplanEditorElement = defineCustomElement(HaFloorplanEditor);

class HaFloorplanEditorElementWrapped extends HaFloorplanEditorElement {
    setConfig(config: any) {
        // @ts-ignore
        this.config = config;
    }

    // HA calls setHass() to pass live hass object (needed for lovelace/config WS calls)
    setHass(hass: any) {
        // @ts-ignore
        this.hass = hass;
    }

    getCardSize() {
        return 12;
    }
}

customElements.define('ha-floorplan-editor', HaFloorplanEditorElementWrapped as any);

// --- Version banner ---
declare const __APP_VERSION__: string;

console.info(
    '%c HA FLOORPLAN %c Card + Editor %c ' + (typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : 'dev') + ' ',
    'color: white; background: #202020; font-weight: 700;',
    'color: white; background: #555; font-weight: 700;',
    'color: #202020; background: #91eb61; font-weight: 700;'
);
