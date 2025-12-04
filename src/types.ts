// src/types.ts

// ============================================================================
// TYPES - TypeScript interfaces for the card
// ============================================================================

import { ActionConfig } from "custom-card-helpers";

/**
 * Icon size options
 */
export type IconSize = "small" | "default" | "large";

/**
 * Main card configuration interface
 */
export interface SensorDisplayCardConfig {
  type: string;

  // Basic settings
  name?: string;
  icon?: string;
  entity?: string;

  // Value sensor configurations
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
  icon_size?: IconSize;

  // Display toggles
  show_name?: boolean;
  show_icon?: boolean;
  show_state?: boolean;

  // Actions
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;

  // Layout support
  grid_area?: string;
  view_layout?: {
    "grid-area"?: string;
    [key: string]: unknown;
  };
}

/**
 * Card registration info for Home Assistant
 */
export interface CardInfo {
  type: string;
  name: string;
  description: string;
  preview: boolean;
  documentationURL: string;
}

/**
 * Icon size configuration
 */
export interface IconSizeConfig {
  iconSize: string;
  containerSize: string;
}

/**
 * Declare customCards on window for HA card registration
 */
declare global {
  interface Window {
    customCards?: CardInfo[];
  }
}
