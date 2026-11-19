import { type DungeonQuestList, questStops } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { nextStep, pickDungeon, progress, withStatus } from "./dungeonQuests.utils.ts";

const quest = (id: number, where: string) => ({
  id,
  name: `Quest ${id}`,
  faction: "horde" as const,
  requiredLevel: 45,
  giver: "Someone",
  where,
});

const list = (key: string, min: number, max: number, firstId = 1): DungeonQuestList => ({
  key,
  name: key,
  levels: { min, max },
  guideId: 1,
  quests: [
    quest(firstId, "Stonard, Swamp of Sorrows (47, 54)"),
    quest(firstId + 1, "Stonard, Swamp of Sorrows (47, 54)"),
    quest(firstId + 2, "inside"),
  ],
});

describe("dungeon quest utils", () => {
  const st = list("st", 50, 56);

  it("stores only quests you've touched", () => {
    const statuses = withStatus(withStatus({}, 1, 2), 2, 1);
    expect(statuses).toEqual({ 1: 2, 2: 1 });
    expect(withStatus(statuses, 1, 0)).toEqual({ 2: 1 });
    expect(progress(st, statuses)).toEqual([1, 1, 1]);
  });

  it("sends you to the first stop with quests left, then into the dungeon", () => {
    const stops = questStops(st);
    expect(nextStep(st, stops, { 1: 1 })).toMatchObject({ kind: "pickup", questNames: ["Quest 2"], moreStops: 0 });
    expect(nextStep(st, stops, { 1: 1, 2: 1 })).toEqual({ kind: "run", inLog: 2 });
    expect(nextStep(st, stops, { 1: 2, 2: 2, 3: 2 })).toEqual({ kind: "finished", total: 3 });
  });

  it("opens the saved dungeon, else the first unfinished one you haven't outleveled", () => {
    const lists = [list("old", 20, 30), st, list("brd", 52, 60, 10)];
    expect(pickDungeon(lists, 50, {}, "brd")?.key).toBe("brd");
    expect(pickDungeon(lists, 50, { 1: 2, 2: 2, 3: 2 }, null)?.key).toBe("brd");
  });
});
