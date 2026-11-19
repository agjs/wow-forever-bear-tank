import type { EnchantBand, GearItem } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { enchantBands, slotPlan } from "./gear.utils.ts";

const item = (name: string, slot: string, level: number, itemLevel: number): GearItem => ({
  name,
  itemId: 1,
  confidence: "confirmed",
  slot,
  level,
  itemLevel,
  stats: "",
  source: "",
  icon: "",
  quality: 2,
  levelEstimated: false,
});

describe("slotPlan", () => {
  const items = [
    item("Old helm", "Head", 20, 25),
    item("Good helm", "Head", 30, 35),
    item("Weak helm", "Head", 40, 30),
    item("Great helm", "Head", 45, 50),
    item("Ring A", "Ring", 20, 25),
    item("Ring B", "Ring", 22, 27),
    item("Ring C", "Ring", 24, 20),
  ];

  it("wears the highest item level you can use and skips upgrades that aren't better", () => {
    const plan = slotPlan("Head", 41, items);
    expect(plan.now.map((i) => i.name)).toEqual(["Good helm"]);
    expect(plan.next?.name).toBe("Great helm");
  });

  it("fills both ring slots", () => {
    expect(slotPlan("Ring", 30, items).now.map((i) => i.name)).toEqual(["Ring B", "Ring A"]);
  });

  it("has nothing to wear before the first item", () => {
    expect(slotPlan("Head", 10, items)).toEqual({ now: [], next: items[0] });
  });
});

describe("enchantBands", () => {
  const band = (min: number, max: number): EnchantBand => ({ levels: { min, max }, choices: [] });
  const bands = [band(10, 29), band(30, 49), band(50, 60)];

  it("splits bands around your level", () => {
    const split = enchantBands(bands, 35);
    expect(split?.current).toBe(bands[1]);
    expect(split?.earlier).toEqual([bands[0]]);
    expect(split?.later).toEqual([bands[2]]);
  });
});
