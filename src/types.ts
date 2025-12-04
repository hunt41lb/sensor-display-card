import { LovelaceCardConfig, ActionConfig } from "custom-card-helpers";

export interface SensorDisplayCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  icon?: string;

  // Entity configurations - all optional
  entity?: string;
  temp_sensor?: string;
  humidity_sensor?: string;
  power_sensor?: string;
  
  // Binary sensor configurations
  motion_sensor?: string;
  pet_sensor?: string;
  person_sensor?: string;
  vehicle_sensor?: string;
  door_sensor?: string;
  window_sensor?: string;

  // Lock entity configuration
  lock_entity?: string;

  // Appearance options
  card_height?: string;
  card_width?: string;
  icon_size?: "small" | "default" | "large";

  // Display toggles - all default to true
  show_name?: boolean;
  show_icon?: boolean;
  show_state?: boolean;

  // Layout
  grid_area?: string;
  view_layout?: {
    "grid-area"?: string;
    [key: string]: unknown;
  };

  // Action configurations
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface ActionHandlerDetail {
  action: "tap" | "hold" | "double_tap";
}

export interface ActionHandlerOptions {
  hasHold?: boolean;
  hasDoubleClick?: boolean;
  disabled?: boolean;
}

// Extend Window interface for custom card registration
declare global {
  interface Window {
    customCards: Array<{
      type: string;
      name: string;
      description?: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}
