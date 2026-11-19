import { describe, expect, it } from "vitest";
import type { DungeonQuestList } from "./dungeons.types.ts";
import { parseWhere, questStops, wayCommand } from "./dungeons.utils.ts";

const quest = (id: number, where: string) => ({
  id,
  name: `Quest ${id}`,
  faction: "both" as const,
  requiredLevel: 50,
  giver: "Someone",
  where,
});

const SUNKEN_TEMPLE: DungeonQuestList = {
  key: "st",
  name: "Sunken Temple",
  levels: { min: 50, max: 56 },
  guideId: 35200,
  quests: [
    quest(3373, "drops from the Shade of Eranikus inside"),
    quest(1445, "Stonard, Swamp of Sorrows (47, 54)"),
    quest(3446, "south of Gadgetzan, Tanaris (52, 45)"),
    quest(3447, "south of Gadgetzan, Tanaris (52, 45)"),
  ],
};

describe("parseWhere", () => {
  it("splits place, zone and coordinates", () => {
    expect(parseWhere("Kargath, Badlands (4, 47)")).toEqual({
      inside: false,
      place: "Kargath, Badlands",
      zone: "Badlands",
      x: 4,
      y: 47,
    });
  });

  it("handles places without coordinates and roaming NPCs", () => {
    expect(parseWhere("walks around Desolace")).toEqual({
      inside: false,
      place: "walks around Desolace",
      zone: "walks around Desolace",
    });
    expect(parseWhere("south of Mannoroc Coven, Desolace (48.4, 87.0), walks around")).toEqual({
      inside: false,
      place: "south of Mannoroc Coven, Desolace",
      zone: "Desolace",
      x: 48.4,
      y: 87,
    });
  });

  it("recognizes quests picked up inside the dungeon", () => {
    expect(parseWhere("inside, second floor")).toEqual({ inside: true });
    expect(parseWhere("a random drop")).toEqual({ inside: true });
  });
});

describe("questStops with chains", () => {
  it("files a chained quest under the place its chain starts", () => {
    const zapper = {
      ...quest(4146, "Ratchet, The Barrens (62.2, 38.4)"),
      chain: [
        {
          id: 4145,
          name: "Larion and Muigin",
          giver: "Larion",
          where: "Marshal's Refuge, Un'Goro Crater (45.4, 8.4)",
          task: "Hunt Bloodpetals.",
        },
      ],
    };
    const stops = questStops({ ...SUNKEN_TEMPLE, quests: [zapper] });
    expect(stops.map((s) => s.title)).toEqual(["Marshal's Refuge, Un'Goro Crater"]);
  });
});

describe("questStops", () => {
  const stops = questStops(SUNKEN_TEMPLE);

  it("groups quests by pickup place and puts the inside stop last", () => {
    expect(stops.map((s) => s.title)).toEqual([
      "Stonard, Swamp of Sorrows",
      "south of Gadgetzan, Tanaris",
      "Inside Sunken Temple",
    ]);
    expect(stops[1]?.quests.map((q) => q.id)).toEqual([3446, 3447]);
  });

  it("builds a TomTom /way command only for stops with coordinates", () => {
    expect(stops[0] && wayCommand(stops[0].pickup)).toBe("/way Swamp of Sorrows 47 54 Stonard, Swamp of Sorrows");
    expect(stops[2] && wayCommand(stops[2].pickup)).toBeUndefined();
  });
});
