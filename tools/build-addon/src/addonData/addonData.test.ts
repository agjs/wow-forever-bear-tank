import type { DungeonQuestList } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { toDungeonQuests, toQuestTags } from "./addonData.ts";

const SUNKEN_TEMPLE: DungeonQuestList = {
  key: "st",
  name: "Sunken Temple",
  levels: { min: 50, max: 56 },
  guideId: 35200,
  quests: [
    {
      id: 3373,
      name: "The Essence of Eranikus",
      faction: "both",
      requiredLevel: 48,
      giver: "Essence of Eranikus",
      where: "drops from the Shade of Eranikus inside",
    },
    {
      id: 1445,
      name: "The Temple of Atal'Hakkar",
      faction: "horde",
      requiredLevel: 38,
      npcId: 1443,
      giver: "Fel'zerul",
      where: "Stonard, Swamp of Sorrows (47, 54)",
    },
    {
      id: 3446,
      name: "Into the Depths",
      faction: "both",
      requiredLevel: 46,
      giver: "Marvon Rivetseeker",
      where: "south of Gadgetzan, Tanaris (52, 45)",
    },
    {
      id: 3447,
      name: "Secret of the Circle",
      faction: "both",
      requiredLevel: 46,
      giver: "Marvon Rivetseeker",
      where: "south of Gadgetzan, Tanaris (52, 45)",
    },
  ],
};

describe("toDungeonQuests", () => {
  const result = toDungeonQuests(SUNKEN_TEMPLE);

  it("groups quests by pickup place and puts the inside stop last", () => {
    expect(result.stops.map((s) => s.title)).toEqual([
      "Stonard, Swamp of Sorrows",
      "south of Gadgetzan, Tanaris",
      "Inside Sunken Temple",
    ]);
    expect(result.stops[1]?.quests.map((q) => q.id)).toEqual([3446, 3447]);
  });

  it("carries tag style and level range", () => {
    expect(result).toMatchObject({ short: "ST", color: "60d0c0", lo: 50, hi: 56 });
  });

  it("keeps the pickup text only for quests found inside", () => {
    expect(result.stops[2]?.quests[0]?.where).toBe("drops from the Shade of Eranikus inside");
    expect(result.stops[0]?.quests[0]?.where).toBeUndefined();
  });
});

describe("toQuestTags", () => {
  it("tags dungeon quests and their chain steps, preferring the dungeon quest", () => {
    const tags = toQuestTags([SUNKEN_TEMPLE], {
      "1445": [
        { id: 1424, name: "Pool of Tears" },
        { id: 3446, name: "Into the Depths" },
      ],
    });
    expect(tags["1445"]).toEqual(["st", false]);
    expect(tags["1424"]).toEqual(["st", true]);
    expect(tags["3446"]).toEqual(["st", false]);
  });
});
