import { describe, expect, it } from "vitest";
import { dungeonQuests, dungeons, questChains } from "./dungeons.data.ts";

const allQuestIds = dungeonQuests.flatMap((d) => d.quests.map((q) => q.id));

describe("dungeon data", () => {
  it("has unique dungeon keys", () => {
    const keys = dungeons.map((d) => d.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("has valid level ranges", () => {
    for (const d of [...dungeons, ...dungeonQuests]) {
      expect(d.levels.min, d.name).toBeLessThanOrEqual(d.levels.max);
      expect(d.levels.max, d.name).toBeLessThanOrEqual(60);
    }
  });

  it("lists each dungeon quest once", () => {
    expect(new Set(allQuestIds).size).toBe(allQuestIds.length);
  });

  it("links every quest list to a known dungeon", () => {
    const known = new Set(dungeons.map((d) => d.key));
    for (const list of dungeonQuests) expect(known.has(list.key), list.key).toBe(true);
  });

  it("only has chains for quests that are in the lists", () => {
    const ids = new Set(allQuestIds.map(String));
    for (const key of Object.keys(questChains)) expect(ids.has(key), key).toBe(true);
  });

  it("gives coordinates as (x, y) within the map", () => {
    for (const q of dungeonQuests.flatMap((d) => d.quests)) {
      const m = q.where.match(/\(([\d.]+),\s*([\d.]+)\)/);
      if (!m) continue;
      expect(Number(m[1]), q.name).toBeLessThanOrEqual(100);
      expect(Number(m[2]), q.name).toBeLessThanOrEqual(100);
    }
  });
});
