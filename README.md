# HA Floorplan Card + Editor

[![HACS][hacs-badge]][hacs-url]
[![GitHub Release][release-badge]][release-url]
[![License][license-badge]][license-url]

A powerful, interactive floorplan visualization for [Home Assistant](https://www.home-assistant.io/) — **two Lovelace cards** that work together:

| Card | Purpose |
|------|---------|
| `custom:ha-floorplan-card` | **Viewer** — interactive floorplan with clickable lights, cameras, switches |
| `custom:ha-floorplan-editor` | **Editor** — visual drag & drop editor that pushes config directly to HA |

Upload a photo of your home, place entities on it with the editor, push to your dashboard, and control everything with a single click — lights glow with their real RGB color, cameras blink when recording, and switches toggle instantly.

**No external servers, no tokens, no YAML editing.** The editor runs as a native Lovelace card with full access to your Home Assistant instance.

## ✨ Features

### Viewer Card (`custom:ha-floorplan-card`)
- **Click to toggle** lights, switches, and media players directly from your floorplan
- **Long press** any entity to open the Home Assistant more-info dialog
- **Real-time RGB color** — lights render their actual color and brightness from HA
- **Camera states** with separate colors for idle, streaming, and recording
- **Recording blink animation** — cameras blink when in recording state
- **Overlay images** — decorative elements (plants, furniture) layered on the floorplan
- **Edge blur** — configurable Gaussian blur for softer, more realistic light gradients
- **Smart domain detection** — detects real entity domain from entity ID, preventing service call mismatches (e.g. `switch.*` entities configured as `light` type)
- **Polygon light zones** — custom polygon shapes for realistic light spread
- **Clickable polygons** — the entire light zone is clickable, not just the entity dot
- **Container query responsive** — labels scale with card size using `cqw` units

### Editor Card (`custom:ha-floorplan-editor`)
- **Drag & drop** entity placement on your floorplan image
- **Draw polygon zones** — click to add vertices, drag vertices to reshape
- **Properties panel** — configure entity type, colors, blur, shape, labels, and more
- **Live preview** — toggle entity states to see how they look
- **📥 Load from HA** — automatically loads the current floorplan config from your dashboard
- **📤 Push to HA** — one-click push saves your changes directly to the dashboard (via WebSocket, no external server needed)
- **Export/Import YAML** — backup and restore configs as YAML files
- **Image upload** via drag & drop or file picker
- **Zoom controls** for precise editing

## 📦 Installation

### HACS (Recommended)
1. Open **HACS** in Home Assistant
2. Go to **Frontend** → **⋮** → **Custom repositories**
3. Add this repository URL with category **Lovelace**
4. Search for **"HA Floorplan Card"** and install
5. Restart Home Assistant

### Manual Installation
1. Download `ha-floorplan-card.js` and `ha-floorplan-editor.js` from the [latest release][release-url]
2. Copy both files to `/config/www/`
3. Go to **Settings** → **Dashboards** → **⋮** → **Resources**
4. Add two resources (both as **JavaScript Module**):
   - `/local/ha-floorplan-card.js`
   - `/local/ha-floorplan-editor.js`

## 🎨 Setup

### Recommended: Tabbed Layout (View + Editor)

Use a tabbed card to have both the viewer and editor side by side. This example uses [`custom:tabbed-card`](https://github.com/kinghat/tabbed-card) (install via HACS):

```yaml
type: custom:tabbed-card
tabs:
  - attributes:
      label: View
    card:
      type: custom:ha-floorplan-card
      config:
        id: my-floorplan
        name: Home
        imageBase64: ""
        entities: []
  - attributes:
      label: Editor
    card:
      type: custom:ha-floorplan-editor
      dashboard: lovelace
```

### Editor Card Configuration

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `dashboard` | string | `lovelace` | Dashboard URL path where your floorplan card lives |
| `card_index` | number | *(auto)* | Specific card index to edit (if you have multiple floorplan cards) |

The editor automatically finds and updates the `custom:ha-floorplan-card` in the specified dashboard.

### Quick Start

1. Add both cards to a dashboard (use the tabbed layout above)
2. Switch to the **Editor** tab
3. Upload your floorplan image (drag & drop or click)
4. Add entities and position them on the image
5. Draw polygon light zones for each entity
6. Configure colors, brightness, blur, and labels
7. Click **📤 Push to HA** to save
8. Switch to the **View** tab — your interactive floorplan is live!

### Standalone Cards

You can also use the cards independently:

**Viewer only:**
```yaml
type: custom:ha-floorplan-card
config:
  id: my-floorplan
  name: Home
  imageBase64: data:image/jpeg;base64,...
  entities:
    - id: living-room-light
      entityId: light.living_room
      label: Living Room
      type: light
      x: 45
      y: 60
      shape: circle
      style:
        width: 5
        height: 5
        gradientRadius: 30
        edgeBlur: 0.5
        onOpacity: 0.8
        offOpacity: 0.3
        colors:
          onColor: "#facc15"
          offColor: "#94a3b8"
      points:
        - { x: 30, y: 50 }
        - { x: 60, y: 50 }
        - { x: 60, y: 80 }
        - { x: 30, y: 80 }
      labelConfig:
        show: true
        offsetX: 0
        offsetY: 10
        color: "#ffffff"
```

**Editor only:**
```yaml
type: custom:ha-floorplan-editor
dashboard: my-dashboard
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run the standalone editor in dev mode (with Viewer/Editor tabs)
npm run dev

# Build the HA viewer card → release/ha-floorplan-card.js
npm run build:card

# Build the HA editor card → release/ha-floorplan-editor.js
npm run build:editor

# Build both cards
npm run build:all
```

## 📄 Configuration Reference

### Entity Style Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | number | `5` | Entity dot width (%) |
| `height` | number | `5` | Entity dot height (%) |
| `gradientRadius` | number | `30` | Light spread radius (%) |
| `edgeBlur` | number | `0` | Gaussian blur for softer light edges |
| `onOpacity` | number | `0.8` | Opacity when entity is on |
| `offOpacity` | number | `0.3` | Opacity when entity is off |
| `rotation` | number | `0` | Rotation in degrees |
| `colors` | object | — | On/off colors (light/switch) or idle/recording/streaming (camera) |

### Entity Types

| Type | Service | Behavior |
|------|---------|----------|
| `light` | `light.toggle` | Renders RGB color + brightness from HA state |
| `switch` | `switch.toggle` | Simple on/off with configurable colors |
| `media_player` | `media_player.toggle` | Highlights when playing/paused |
| `camera` | `homeassistant.toggle` | Idle/streaming/recording with blink animation |

### Overlay Images

| Property | Type | Description |
|----------|------|-------------|
| `src` | string | Image URL or base64 data URI |
| `x` | number | Horizontal position (%) |
| `y` | number | Vertical position (%) |
| `width` | number | Width (%) |
| `height` | number | Height (%) |
| `rotation` | number | Rotation in degrees |
| `opacity` | number | Opacity (0-1) |

## 🤝 Credits

Based on [ha-floorplan](https://github.com/kishorviswanathan/ha-floorplan) by [@kishorviswanathan](https://github.com/kishorviswanathan), with significant additions:

- **Editor as Lovelace card** — edit directly inside HA, push via WebSocket
- **Overlay images** — decorative image layers on top of the floorplan
- **Edge blur** — SVG Gaussian blur for softer light gradients
- **Smart domain detection** — prevents service call mismatches for cross-domain entities
- **Clickable polygon zones** — entire light zones are clickable, not just entity dots
- **Switch entity support** — first-class switch type with proper toggle service

## 📝 License

[MIT](LICENSE)

[hacs-badge]: https://img.shields.io/badge/HACS-Custom-orange.svg
[hacs-url]: https://hacs.xyz
[release-badge]: https://img.shields.io/github/v/release/wollies/ha-floorplan-card
[release-url]: https://github.com/wollies/ha-floorplan-card/releases/latest
[license-badge]: https://img.shields.io/github/license/wollies/ha-floorplan-card
[license-url]: https://github.com/wollies/ha-floorplan-card/blob/main/LICENSE
