# Sensor Display Card

[![HACS Badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/YOURUSERNAME/sensor-display-card.svg)](https://github.com/YOURUSERNAME/sensor-display-card/releases)

A custom Home Assistant Lovelace card that displays RGB lights with temperature, humidity, power, and motion sensors in a compact, visually appealing format.

## Features

- **RGB Light Support**: Dynamic icon and background colors based on light RGB state
- **Multiple Sensors**: Display temperature, humidity, and power consumption
- **Motion Detection**: Visual indicator when motion is detected
- **Tap Actions**: Configurable tap, hold, and double-tap actions
- **Visual Editor**: Full configuration UI support
- **HACS Compatible**: Easy installation via HACS

## Screenshots

<!-- Add screenshots here -->

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Click on "Frontend"
3. Click the three dots menu and select "Custom repositories"
4. Add `https://github.com/YOURUSERNAME/sensor-display-card` with category "Lovelace"
5. Click "Install"
6. Restart Home Assistant

### Manual Installation

1. Download `sensor-display-card.js` from the [latest release](https://github.com/YOURUSERNAME/sensor-display-card/releases)
2. Copy it to `config/www/sensor-display-card.js`
3. Add the resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/sensor-display-card.js
    type: module
```

## Configuration

### Using the Visual Editor

1. Add a new card to your dashboard
2. Search for "Sensor Display Card"
3. Configure using the visual editor

### YAML Configuration

```yaml
type: custom:sensor-display-card
light_entity: light.living_room
name: Living Room
icon: mdi:lightbulb
temp_sensor: sensor.living_room_temperature
humidity_sensor: sensor.living_room_humidity
power_sensor: sensor.living_room_power
motion_sensor: binary_sensor.living_room_motion
tap_action:
  action: toggle
hold_action:
  action: more-info
double_tap_action:
  action: more-info
```

### Configuration Options

| Option              | Type   | Required | Default          | Description                                |
| ------------------- | ------ | -------- | ---------------- | ------------------------------------------ |
| `type`              | string | Yes      | -                | Must be `custom:sensor-display-card`       |
| `light_entity`      | string | Yes      | -                | Light entity ID                            |
| `name`              | string | No       | Entity name      | Card display name                          |
| `icon`              | string | No       | `mdi:lightbulb`  | Icon to display                            |
| `temp_sensor`       | string | No       | -                | Temperature sensor entity ID               |
| `humidity_sensor`   | string | No       | -                | Humidity sensor entity ID                  |
| `power_sensor`      | string | No       | -                | Power consumption sensor entity ID         |
| `motion_sensor`     | string | No       | -                | Motion binary sensor entity ID             |
| `tap_action`        | object | No       | `action: toggle` | Action on tap                              |
| `hold_action`       | object | No       | `action: more-info` | Action on hold                          |
| `double_tap_action` | object | No       | `action: more-info` | Action on double tap                    |
| `grid_area`         | string | No       | -                | CSS grid area for layout positioning       |

### Action Options

Actions support all standard Home Assistant action types:

```yaml
tap_action:
  action: toggle | more-info | call-service | navigate | url | none
  # For call-service:
  service: light.turn_on
  service_data:
    brightness: 255
  # For navigate:
  navigation_path: /lovelace/lights
  # For url:
  url_path: https://example.com
```

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/YOURUSERNAME/sensor-display-card.git
cd sensor-display-card
npm install
```

### Build

```bash
# Production build
npm run build

# Development with watch mode
npm run watch
```

### Testing Locally

1. Build the card: `npm run build`
2. Copy `dist/sensor-display-card.js` to your Home Assistant `config/www/` directory
3. Add the resource to Lovelace
4. Clear browser cache and reload

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Credits

Based on the [custom-cards/boilerplate-card](https://github.com/custom-cards/boilerplate-card) template.
