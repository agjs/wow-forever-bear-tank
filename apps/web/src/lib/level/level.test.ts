import { describe, expect, it } from "vitest";
import {
  clampLevel,
  isUnlocked,
  levelsTaking,
  parseLevelText,
  ranksAfter,
  rankTakenAt,
  talentPointsAt,
  talentTakenAt,
} from "./level.utils.ts";

const ORDER = ["ferocity", "ferocity", "thickHide", "ferocity"];

describe("level utils", () => {
  it("keeps levels between 10 and 60", () => {
    expect([clampLevel(3), clampLevel(61), clampLevel(Number.NaN), clampLevel(42.4)]).toEqual([10, 60, 10, 42]);
  });

  it("gives one talent point per level from 10 to 60", () => {
    expect([talentPointsAt(9), talentPointsAt(10), talentPointsAt(60)]).toEqual([0, 1, 51]);
  });

  it("counts ranks and finds the talent and rank taken at a level", () => {
    expect(ranksAfter(ORDER, 3)).toEqual({ ferocity: 2, thickHide: 1 });
    expect(talentTakenAt(ORDER, 13)).toBe("ferocity");
    expect(rankTakenAt(ORDER, 13)).toBe(3);
    expect(levelsTaking(ORDER, "ferocity")).toEqual([10, 11, 13]);
  });

  it("reads level text like the guide writes it", () => {
    expect(parseLevelText("40–45")).toEqual({ min: 40, max: 45 });
    expect(parseLevelText("60")).toEqual({ min: 60, max: 60 });
    expect(parseLevelText("any")).toBeUndefined();
  });

  it("unlocks buttons by level, talent, and until a talent replaces them", () => {
    expect(isUnlocked({ level: 16 }, 15, {})).toBe(false);
    expect(isUnlocked({ talent: "lacerate" }, 30, { lacerate: 1 })).toBe(true);
    expect(isUnlocked({ level: 16, onlyBefore: "lacerate" }, 30, { lacerate: 1 })).toBe(false);
  });
});
