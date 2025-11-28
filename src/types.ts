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
  motion_sensor?: string;

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
