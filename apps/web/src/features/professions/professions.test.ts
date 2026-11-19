import type { CraftStep, ProfessionRank, Subcraft } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import {
  clampSkill,
  expandSubcrafts,
  materialsFor,
  splitRanks,
  splitSteps,
  subcraftsUsed,
  totalMaterials,
} from "./professions.utils.ts";

const step: CraftStep = {
  from: 100,
  to: 120,
  craft: "Heavy Armor Kit",
  spellId: 1,
  count: 10,
  skillColors: [],
  reagents: [
    { quantity: 5, name: "Medium Leather", itemId: 2319 },
    { quantity: 1, name: "Cured Medium Hide", itemId: 4233 },
  ],
  recipeFrom: "",
  note: "",
  origin: "forever",
};
const curing: Subcraft = {
  name: "Cured Medium Hide",
  spellId: 2,
  reagents: [
    { quantity: 1, name: "Medium Hide", itemId: 4232 },
    { quantity: 1, name: "Salt", itemId: 4289 },
  ],
  note: "",
  expandInTotals: true,
};
const rank = (skill: number, cap: number): ProfessionRank => ({
  skill,
  cap,
  name: `Rank ${skill}`,
  where: "",
  requirement: "",
  origin: "forever",
});

describe("profession utils", () => {
  it("multiplies reagents by the number of crafts", () => {
    expect(materialsFor(step)[0]).toEqual({ name: "Medium Leather", quantity: 50, itemId: 2319 });
  });

  it("counts raw materials for cured hides and adds up totals", () => {
    const raw = expandSubcrafts([...materialsFor(step), ...materialsFor(step)], [curing]);
    expect(totalMaterials(raw)).toEqual([
      { name: "Medium Leather", quantity: 100, itemId: 2319 },
      { name: "Medium Hide", quantity: 20, itemId: 4232 },
      { name: "Salt", quantity: 20, itemId: 4289 },
    ]);
    expect(subcraftsUsed(materialsFor(step), [curing])).toEqual([curing]);
  });

  it("splits steps and trainer ranks by skill", () => {
    expect(splitSteps([step], 120)).toEqual({ passed: [step], left: [] });
    const { upcoming, done } = splitRanks([rank(1, 75), rank(50, 150), rank(125, 0)], 150);
    expect(done.map((r) => r.skill)).toEqual([1, 50]);
    expect(upcoming.map((r) => r.skill)).toEqual([125]);
  });

  it("keeps skill between 1 and 300", () => {
    expect([clampSkill(0), clampSkill(999), clampSkill(Number.NaN)]).toEqual([1, 300, 1]);
  });
});
