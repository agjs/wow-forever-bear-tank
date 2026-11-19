import { describe, expect, it } from "vitest";
import { professions } from "./professions.data.ts";

const { leatherworking, cooking, fishing } = professions;

describe("profession data", () => {
  it.each([
    ["leatherworking", leatherworking.ranks],
    ["skinning", leatherworking.skinningRanks],
    ["cooking", cooking.ranks],
    ["fishing", fishing.ranks],
  ])("%s ranks raise the cap in order up to 300", (_, ranks) => {
    const caps = ranks.map((r) => r.cap);
    expect([...caps].sort((a, b) => a - b)).toEqual(caps);
    expect(caps.at(-1)).toBe(300);
  });

  it("leatherworking steps are contiguous", () => {
    for (let i = 1; i < leatherworking.steps.length; i++) {
      expect(leatherworking.steps[i]?.from).toBe(leatherworking.steps[i - 1]?.to);
    }
  });

  it("every leatherworking step lists its materials with item ids", () => {
    for (const step of leatherworking.steps) {
      expect(step.reagents.length, step.craft).toBeGreaterThan(0);
      for (const r of step.reagents) expect(r.itemId, `${step.craft}: ${r.name}`).toBeGreaterThan(0);
    }
  });
});
