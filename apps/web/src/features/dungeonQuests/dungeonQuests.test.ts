import { type DungeonQuestList, questStops } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { nextStep, pickDungeon, progress, questNext, withStatus } from "./dungeonQuests.utils.ts";

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
    expect(nextStep(st, stops, { 1: 1 })).toEqual({
      kind: "visit",
      place: "Stonard, Swamp of Sorrows",
      questNames: ["Quest 2"],
      moreStops: 0,
    });
    expect(nextStep(st, stops, { 1: 1, 2: 1 })).toEqual({ kind: "run", inLog: 2 });
    expect(nextStep(st, stops, { 1: 2, 2: 2, 3: 2 })).toEqual({ kind: "finished", total: 3 });
  });

  it("opens the saved dungeon, else the first unfinished one you haven't outleveled", () => {
    const lists = [list("old", 20, 30), st, list("brd", 52, 60, 10)];
    expect(pickDungeon(lists, 50, {}, "brd")?.key).toBe("brd");
    expect(pickDungeon(lists, 50, { 1: 2, 2: 2, 3: 2 }, null)?.key).toBe("brd");
  });
});

describe("quest chains", () => {
  const zapper = {
    ...quest(4146, "Ratchet, The Barrens (62.2, 38.4)"),
    chain: [
      {
        id: 4145,
        name: "Larion and Muigin",
        giver: "Larion",
        where: "Marshal's Refuge, Un'Goro Crater (45.4, 8.4)",
        task: "",
      },
      {
        id: 4147,
        name: "Marvon's Workshop",
        giver: "Larion",
        where: "Marshal's Refuge, Un'Goro Crater (45.4, 8.4)",
        task: "",
      },
    ],
  };
  const st: DungeonQuestList = {
    key: "st",
    name: "Sunken Temple",
    levels: { min: 50, max: 56 },
    guideId: 1,
    quests: [zapper],
  };

  it("works through the chain's steps in order, then the quest itself", () => {
    expect(questNext(zapper, {})).toMatchObject({ kind: "step", index: 1, total: 2 });
    expect(questNext(zapper, { 4145: 2 })).toMatchObject({ kind: "step", index: 2 });
    expect(questNext(zapper, { 4145: 2, 4147: 2 })).toEqual({
      kind: "pickup",
      where: "Ratchet, The Barrens (62.2, 38.4)",
    });
  });

  it("sends you to the next step's giver, then to the quest giver", () => {
    const stops = questStops(st);
    expect(nextStep(st, stops, {})).toMatchObject({
      place: "Marshal's Refuge, Un'Goro Crater",
      questNames: ["Larion and Muigin"],
    });
    expect(nextStep(st, stops, { 4145: 2, 4147: 2 })).toMatchObject({
      place: "Ratchet, The Barrens",
      questNames: ["Quest 4146"],
    });
  });
});
