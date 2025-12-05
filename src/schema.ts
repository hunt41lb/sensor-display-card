// src/schema.ts

// ============================================================================
// SCHEMA - Editor schema definition for ha-form
// ============================================================================

/**
 * Editor schema for the visual configuration UI
 * Uses Home Assistant's ha-form with expandable sections
 */
export const EDITOR_SCHEMA = [
  // ---------------------------------------------------------------------------
  // Basic Settings - Always visible at top
  // ---------------------------------------------------------------------------
  {
    name: "name",
    label: "Card Name",
    helper: "Display name shown on the card (optional - uses entity name if blank)",
    selector: { text: {} },
  },
  {
    name: "icon",
    label: "Icon",
    helper: "Main icon displayed in the card",
    selector: { icon: {} },
  },
  {
    name: "entity",
    label: "Primary Entity",
    helper: "Main entity for card state (light, switch, etc.)",
    selector: { entity: {} },
  },

  // ---------------------------------------------------------------------------
  // Layout Mode - NEW
  // ---------------------------------------------------------------------------
  {
    name: "layout",
    label: "Layout Mode",
    helper: "Card layout style",
    selector: {
      select: {
        options: [
          { value: "full", label: "Full (Name + Icon + Sensors)" },
          { value: "icon-only", label: "Icon Only (Centered icon, no text)" },
          { value: "compact", label: "Compact (Name + Centered Icon)" },
        ],
        mode: "dropdown",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // Value Sensors - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Value Sensors",
    icon: "mdi:thermometer",
    schema: [
      {
        name: "temp_sensor",
        label: "Temperature",
        helper: "Displays temperature value with ° symbol",
        selector: { entity: { domain: "sensor", device_class: "temperature" } },
      },
      {
        name: "humidity_sensor",
        label: "Humidity",
        helper: "Displays humidity value with % symbol",
        selector: { entity: { domain: "sensor", device_class: "humidity" } },
      },
      {
        name: "power_sensor",
        label: "Power",
        helper: "Displays power consumption with W symbol",
        selector: { entity: { domain: "sensor", device_class: "power" } },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Binary Sensors - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Binary Sensors",
    icon: "mdi:motion-sensor",
    schema: [
      {
        name: "motion_sensor",
        label: "Motion Sensor",
        helper: "Shows motion-sensor icon when motion detected (also used for icon color)",
        selector: { entity: { domain: "binary_sensor", device_class: "motion" } },
      },
      {
        name: "person_sensor",
        label: "Person Sensor",
        helper: "Shows person icon when person detected",
        selector: { entity: { domain: "binary_sensor", device_class: "occupancy" } },
      },
      {
        name: "pet_sensor",
        label: "Pet Sensor",
        helper: "Shows paw icon when pet detected",
        selector: { entity: { domain: "binary_sensor" } },
      },
      {
        name: "vehicle_sensor",
        label: "Vehicle Sensor",
        helper: "Shows car icon when vehicle detected",
        selector: { entity: { domain: "binary_sensor" } },
      },
      {
        name: "door_sensor",
        label: "Door Sensor",
        helper: "Shows door-open icon when door is open",
        selector: { entity: { domain: "binary_sensor", device_class: "door" } },
      },
      {
        name: "window_sensor",
        label: "Window Sensor",
        helper: "Shows window-open icon when window is open",
        selector: { entity: { domain: "binary_sensor", device_class: "window" } },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lock Entity - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Lock",
    icon: "mdi:shield-lock",
    schema: [
      {
        name: "lock_entity",
        label: "Lock / Deadbolt",
        helper: "Shows lock status with shield icon (always visible when configured)",
        selector: { entity: { domain: "lock" } },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Display Options - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Display Options",
    icon: "mdi:eye-settings",
    schema: [
      {
        name: "show_name",
        label: "Show Name",
        helper: "Display card name (not applicable in icon-only layout)",
        selector: { boolean: {} },
        default: true,
      },
      {
        name: "show_icon",
        label: "Show Icon",
        helper: "Display main icon",
        selector: { boolean: {} },
        default: true,
      },
      {
        name: "show_state",
        label: "Show State Text",
        helper: "Display On/Off state next to name",
        selector: { boolean: {} },
        default: false,
      },
      {
        name: "show_icon_background",
        label: "Show Icon Background",
        helper: "Display circular background behind the icon",
        selector: { boolean: {} },
        default: true,
      },
      {
        name: "icon_activity_animation",
        label: "Animate Icon on Activity",
        helper: "Pulse icon when motion, person, pet, or vehicle is detected",
        selector: { boolean: {} },
        default: true,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Actions - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Actions",
    icon: "mdi:gesture-tap",
    schema: [
      {
        name: "tap_action",
        label: "Tap Action",
        helper: "Action when card is tapped",
        selector: { "ui-action": {} },
      },
      {
        name: "hold_action",
        label: "Hold Action",
        helper: "Action when card is held",
        selector: { "ui-action": {} },
      },
      {
        name: "double_tap_action",
        label: "Double Tap Action",
        helper: "Action when card is double-tapped",
        selector: { "ui-action": {} },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Appearance - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Appearance",
    icon: "mdi:palette",
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "card_height",
            label: "Card Height",
            helper: "e.g., 97px, 70px (default varies by layout)",
            selector: { text: {} },
          },
          {
            name: "card_width",
            label: "Card Width",
            helper: "e.g., auto, 100%, 200px (default: auto)",
            selector: { text: {} },
          },
        ],
      },
      {
        name: "icon_size",
        label: "Icon Size",
        helper: "Size of the main icon",
        selector: {
          select: {
            options: [
              { value: "small", label: "Small" },
              { value: "default", label: "Default" },
              { value: "large", label: "Large" },
            ],
            mode: "dropdown",
          },
        },
      },
      {
        name: "icon_color_source",
        label: "Icon Color Source",
        helper: "What determines the icon color",
        selector: {
          select: {
            options: [
              { value: "default", label: "Default (RGB from lights)" },
              { value: "motion", label: "Motion Sensor (active color when motion)" },
              { value: "entity", label: "Entity State (active color when on)" },
            ],
            mode: "dropdown",
          },
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Advanced - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Advanced",
    icon: "mdi:cog",
    schema: [
      {
        name: "grid_area",
        label: "Grid Area",
        helper: "CSS grid-area for layout positioning (e.g., 'living-room')",
        selector: { text: {} },
      },
    ],
  },
];
