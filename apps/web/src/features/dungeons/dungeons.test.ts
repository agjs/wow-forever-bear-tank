import type { Dungeon } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { byStartLevel, dungeonsForLevel, isForHorde } from "./dungeons.utils.ts";

const dungeon = (key: string, min: number, max: number, where = "Orgrimmar"): Dungeon => ({
  key,
  name: key,
  levels: { min, max },
  where,
  route: [],
  bosses: [],
  dangers: [],
  questNotes: [],
  foreverNote: "",
  confidence: "medium",
});

describe("dungeon utils", () => {
  const list = [dungeon("b", 30, 40), dungeon("a", 13, 18)];

  it("includes dungeons from one level before their range", () => {
    expect(dungeonsForLevel(12, list).map((d) => d.key)).toEqual(["a"]);
    expect(dungeonsForLevel(19, list)).toEqual([]);
  });

  it("sorts by starting level", () => {
    expect(byStartLevel(list).map((d) => d.key)).toEqual(["a", "b"]);
  });

  it("drops dungeons meant for the Alliance", () => {
    expect(isForHorde(dungeon("x", 1, 2, "Stormwind (Alliance-intended)"))).toBe(false);
  });
});
