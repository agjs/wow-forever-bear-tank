import { type EnchantBand, type GearItem, gear } from "@btc/guide-data";
import { inRange } from "../../lib/level/index.ts";

export const SLOTS = [
  "Head",
  "Neck",
  "Shoulder",
  "Back",
  "Chest",
  "Wrist",
  "Hands",
  "Waist",
  "Legs",
  "Feet",
  "Ring",
  "Trinket",
  "Weapon",
  "Idol",
] as const;

/** You wear two rings and two trinkets. */
const wornIn = (slot: string) => (slot === "Ring" || slot === "Trinket" ? 2 : 1);

export interface SlotPlan {
  readonly now: readonly GearItem[];
  readonly next: GearItem | undefined;
}

/** Best items you can wear in a slot (highest item level), and the next upgrade above the weakest of them. */
export function slotPlan(slot: string, level: number, items: readonly GearItem[] = gear): SlotPlan {
  const inSlot = items.filter((item) => item.slot === slot);
  const now = inSlot
    .filter((item) => item.level <= level)
    .sort((a, b) => b.itemLevel - a.itemLevel)
    .slice(0, wornIn(slot));
  const floor = now.length ? Math.min(...now.map((item) => item.itemLevel)) : 0;
  const next = inSlot
    .filter((item) => item.level > level && item.itemLevel > floor)
    .sort((a, b) => a.level - b.level)[0];
  return { now, next };
}

export interface EnchantBands {
  readonly current: EnchantBand;
  readonly later: readonly EnchantBand[];
  readonly earlier: readonly EnchantBand[];
}

/** Splits enchant bands around your level. Past 60 the last band stays current. */
export function enchantBands(bands: readonly EnchantBand[], level: number): EnchantBands | undefined {
  const current = bands.find((band) => inRange(band.levels, level)) ?? bands.at(-1);
  if (!current) return undefined;
  return {
    current,
    later: bands.filter((band) => band.levels.min > current.levels.min),
    earlier: bands.filter((band) => band.levels.max < current.levels.min),
  };
}
