// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { LevelRange } from "../common/index.ts";

export interface Dungeon {
  readonly key: string;
  readonly name: string;
  readonly levels: LevelRange;
  readonly where: string;
  readonly route: readonly string[];
  readonly bosses: readonly Boss[];
  readonly dangers: readonly string[];
  readonly questNotes: readonly string[];
  readonly foreverNote: string;
  readonly confidence: "medium" | "low";
  readonly levelNote?: string;
  readonly loot?: readonly string[];
}

export interface Boss {
  readonly name: string;
  readonly abilities: readonly string[];
  readonly tank: string;
}

export interface DungeonQuestList {
  readonly key: string;
  readonly name: string;
  readonly levels: LevelRange;
  readonly guideId: number;
  readonly newInForever?: boolean;
  readonly quests: readonly DungeonQuest[];
}

export interface DungeonQuest {
  readonly id: number;
  readonly name: string;
  readonly faction: "horde" | "both";
  readonly requiredLevel: number;
  readonly npcId?: number;
  readonly giver: string;
  readonly where: string;
  readonly note?: string;
}
