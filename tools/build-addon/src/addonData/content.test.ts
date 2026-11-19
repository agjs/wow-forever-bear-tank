import * as guide from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { toDungeonGuides, toEnchantBands, toGear, toRotation } from "./content.ts";

describe("website content for the addon", () => {
  it("keeps every gear item with an icon and quality", () => {
    const gear = toGear(guide.gear);
    expect(gear).toHaveLength(guide.gear.length);
    for (const item of gear) {
      expect(item.icon.length, item.name).toBeGreaterThan(0);
      expect(item.quality, item.name).toBeGreaterThanOrEqual(0);
    }
  });

  it("explains how to get every enchant", () => {
    for (const band of toEnchantBands(guide.enchantPlan))
      for (const choice of band.choices) expect(choice.how, choice.name).not.toContain("Enchanting ?");
  });

  it("gives every rotation button an icon and spell ID", () => {
    const rotation = toRotation({
      priorityLists: guide.priorityLists,
      spells: guide.spells,
      emergencyButtons: guide.emergencyButtons,
      prePull: guide.rotation.prePull,
      catFormNote: guide.catFormNote,
    });
    for (const step of [
      ...rotation.single,
      ...rotation.cleave,
      ...rotation.aoe,
      ...rotation.cat,
      ...rotation.emergency,
    ])
      expect(step.spellId, step.spell).toBeGreaterThan(0);
  });

  it("sorts dungeon guides by level", () => {
    const levels = toDungeonGuides(guide.dungeons).map((d) => d.lo);
    expect(levels).toEqual([...levels].sort((a, b) => a - b));
  });
});
