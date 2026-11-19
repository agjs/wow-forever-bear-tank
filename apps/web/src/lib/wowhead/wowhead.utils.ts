import type { ItemConfidence } from "@btc/guide-data";

const WOWHEAD = "https://www.wowhead.com";
const ICONS = "https://wow.zamimg.com/images/wow/icons";

/** "item=123" -> the Forever database page (or the Classic one for Classic-only data). */
export const wowheadUrl = (path: string, database: "forever" | "classic" = "forever"): string =>
  `${WOWHEAD}/${database}/${path}`;

export const iconUrl = (icon: string, size: "medium" | "large" = "large"): string => `${ICONS}/${size}/${icon}.jpg`;

/** Classic-sourced items link to the Classic database, everything else to Forever's. */
export const itemDatabase = (confidence: ItemConfidence | "forever" | "classic" | undefined) =>
  confidence === "classic" ? "classic" : "forever";

export const classIcon = (className: string): string => `classicon_${className.toLowerCase().replace(/[^a-z]/g, "")}`;
