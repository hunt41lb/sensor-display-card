import { LovelaceCardConfig, ActionConfig } from "custom-card-helpers";

export interface SensorDisplayCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  icon?: string;

  // Entity configurations
  light_entity: string;
  temp_sensor?: string;
  humidity_sensor?: string;
  power_sensor?: string;
  motion_sensor?: string;

  // Action configurations
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;

  // Layout configurations
  grid_area?: string;
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

  interface HTMLElementTagNameMap {
    "sensor-display-card": SensorDisplayCard;
    "sensor-display-card-editor": SensorDisplayCardEditor;
  }
}

// Forward declarations for the card classes
export type SensorDisplayCard = HTMLElement;
export type SensorDisplayCardEditor = HTMLElement;
