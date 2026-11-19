import { describe, expect, it } from "vitest";
import { route } from "./leveling.data.ts";

describe("leveling route", () => {
  it("covers every level from its start to 60 without gaps", () => {
    const first = route[0]?.levels.min ?? 0;
    for (let level = first; level <= 60; level++) {
      expect(
        route.some((step) => level >= step.levels.min && level <= step.levels.max),
        `level ${level}`,
      ).toBe(true);
    }
  });

  it("is in level order", () => {
    for (let i = 1; i < route.length; i++) {
      expect(route[i]?.levels.min ?? 0).toBeGreaterThanOrEqual(route[i - 1]?.levels.min ?? 0);
    }
  });
});
