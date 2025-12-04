// src/index.ts

// ============================================================================
// INDEX - Entry point for the Sensor Display Card
// ============================================================================

import {
  CARD_VERSION,
  CARD_TYPE,
  CARD_NAME,
  CARD_DESCRIPTION,
  CARD_DOCUMENTATION_URL,
} from "./constants";

// Import components to trigger their registration via @customElement decorators
import "./editor";
import "./card";

// Print version banner to console
console.info(
  `%c ${CARD_NAME.toUpperCase()} %c v${CARD_VERSION} `,
  "color: white; background: #3498db; font-weight: bold;",
  "color: #3498db; background: white; font-weight: bold;"
);

// Register with Home Assistant's custom card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: CARD_TYPE,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
  preview: true,
  documentationURL: CARD_DOCUMENTATION_URL,
});
