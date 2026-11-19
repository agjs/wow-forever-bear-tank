// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Origin, Source } from "../common/index.ts";

export interface TrainerSpell {
  readonly level: number;
  readonly name: string;
  readonly rank: number;
  readonly spellId: number;
  readonly cost: number;
  readonly fromQuest: boolean;
}

export interface TrainerSpellInfo {
  readonly category: "bear" | "cat" | "heal" | "util" | "skip";
  readonly icon: string;
  readonly text: string;
}

export interface ClassQuests {
  readonly quests: readonly ClassQuest[];
  readonly sources: readonly Source[];
}

export interface ClassQuest {
  readonly level: number;
  readonly name: string;
  readonly questId?: number;
  readonly start: string;
  readonly steps: readonly string[];
  readonly reward: string;
  readonly required: boolean;
  readonly note: string;
  readonly origin: Origin;
}
