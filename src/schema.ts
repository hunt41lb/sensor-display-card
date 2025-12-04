// @/src/schema.ts

// ============================================================================
// SCHEMA - Editor schema definition for ha-form
// ============================================================================

/**
 * Editor schema for the visual configuration UI
 * Uses Home Assistant's ha-form with expandable sections
 */
export const EDITOR_SCHEMA = [
  // ---------------------------------------------------------------------------
  // Basic Settings - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Basic Settings",
    icon: "mdi:cog",
    schema: [
      {
        name: "entity",
        label: "Primary Entity",
        helper: "Main entity for the card (controls on/off state and icon color)",
        selector: { entity: {} },
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "name",
            label: "Name",
            helper: "Override the entity's friendly name",
            selector: { text: {} },
          },
          {
            name: "icon",
            label: "Icon",
            helper: "Override the default icon (e.g., mdi:lightbulb)",
            selector: { icon: {} },
          },
        ],
      },
    ],
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
        label: "Temperature Sensor",
        helper: "Displays temperature with ° symbol",
        selector: {
          entity: {
            filter: {
              domain: "sensor",
              device_class: "temperature",
            },
          },
        },
      },
      {
        name: "humidity_sensor",
        label: "Humidity Sensor",
        helper: "Displays humidity with % symbol",
        selector: {
          entity: {
            filter: {
              domain: "sensor",
              device_class: "humidity",
            },
          },
        },
      },
      {
        name: "power_sensor",
        label: "Power Sensor",
        helper: "Displays power with W symbol",
        selector: {
          entity: {
            filter: {
              domain: "sensor",
              device_class: "power",
            },
          },
        },
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
        helper: "Shows motion icon when active (hidden when inactive)",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
              device_class: "motion",
            },
          },
        },
      },
      {
        name: "person_sensor",
        label: "Person Sensor",
        helper: "Shows person/occupancy icon when detected",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
              device_class: "occupancy",
            },
          },
        },
      },
      {
        name: "pet_sensor",
        label: "Pet Sensor",
        helper: "Shows pet icon when detected",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
            },
          },
        },
      },
      {
        name: "vehicle_sensor",
        label: "Vehicle Sensor",
        helper: "Shows vehicle icon when detected",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
            },
          },
        },
      },
      {
        name: "door_sensor",
        label: "Door Sensor",
        helper: "Shows door open/closed icon when open",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
              device_class: "door",
            },
          },
        },
      },
      {
        name: "window_sensor",
        label: "Window Sensor",
        helper: "Shows window open/closed icon when open",
        selector: {
          entity: {
            filter: {
              domain: "binary_sensor",
              device_class: "window",
            },
          },
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Lock - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Lock",
    icon: "mdi:lock",
    schema: [
      {
        name: "lock_entity",
        label: "Lock Entity",
        helper: "Always visible with state-aware icons and colors",
        selector: {
          entity: {
            filter: {
              domain: "lock",
            },
          },
        },
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Display Options - Collapsible
  // ---------------------------------------------------------------------------
  {
    type: "expandable",
    title: "Display Options",
    icon: "mdi:eye",
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "show_name",
            label: "Show Name",
            helper: "Display the entity name",
            selector: { boolean: {} },
          },
          {
            name: "show_icon",
            label: "Show Icon",
            helper: "Display the entity icon",
            selector: { boolean: {} },
          },
          {
            name: "show_state",
            label: "Show State",
            helper: "Display state text next to name",
            selector: { boolean: {} },
          },
        ],
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
        selector: {
          "ui-action": {},
        },
      },
      {
        name: "hold_action",
        label: "Hold Action",
        helper: "Action when card is held",
        selector: {
          "ui-action": {},
        },
      },
      {
        name: "double_tap_action",
        label: "Double Tap Action",
        helper: "Action when card is double-tapped",
        selector: {
          "ui-action": {},
        },
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
            name: "icon_position",
            label: "Icon Position",
            helper: "Horizontal position of the icon",
            selector: {
              select: {
                options: [
                  { value: "left", label: "Left" },
                  { value: "center", label: "Center" },
                  { value: "right", label: "Right" },
                ],
                mode: "dropdown",
              },
            },
          },
          {
            name: "name_position",
            label: "Name Position",
            helper: "Horizontal position of the name",
            selector: {
              select: {
                options: [
                  { value: "left", label: "Left" },
                  { value: "center", label: "Center" },
                  { value: "right", label: "Right" },
                ],
                mode: "dropdown",
              },
            },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "card_height",
            label: "Card Height",
            helper: "e.g., 97px, 120px, 75px (default: 97px)",
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
              { value: "small", label: "Small (25px)" },
              { value: "default", label: "Default (35px)" },
              { value: "large", label: "Large (45px)" },
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
    icon: "mdi:code-braces",
    schema: [
      {
        name: "grid_area",
        label: "Grid Area",
        helper: "For use with layout-card (e.g., 'a' or '1 / 1 / 2 / 3')",
        selector: { text: {} },
      },
    ],
  },
];
