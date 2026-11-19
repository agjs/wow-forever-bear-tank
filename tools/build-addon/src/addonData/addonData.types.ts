/**
 * The data contract between this build tool and the Lua addon (apps/addon/BearTankCodex/Data/*.lua).
 * Field names here are what the Lua selectors read. Change both sides together.
 */

export interface AddonQuest {
  readonly id: number;
  readonly name: string;
  readonly horde: boolean;
  readonly req: number;
  readonly giver: string;
  /** Only for quests picked up inside the dungeon (shown next to the giver). */
  readonly where?: string;
  readonly note?: string;
}

export interface AddonStop {
  readonly title: string;
  readonly zone?: string;
  readonly x?: number;
  readonly y?: number;
  readonly inside: boolean;
  readonly quests: readonly AddonQuest[];
}

export interface AddonDungeonQuests {
  readonly key: string;
  readonly name: string;
  /** Short label used to tag quests in the quest log, e.g. "ST". */
  readonly short: string;
  /** RRGGBB color for that tag. */
  readonly color: string;
  readonly lo: number;
  readonly hi: number;
  readonly stops: readonly AddonStop[];
}

/** questId -> [dungeonKey, isChainStep] */
export type AddonQuestTags = Readonly<Record<string, readonly [string, boolean]>>;

export interface AddonDungeon {
  readonly key: string;
  readonly name: string;
  readonly lo: number;
  readonly hi: number;
}

export interface AddonRouteStep {
  readonly lo: number;
  readonly hi: number;
  readonly zones: string;
  readonly hub: string;
  readonly how: string;
}

export interface AddonTrainerSpell {
  readonly level: number;
  readonly name: string;
  readonly rank: number;
  readonly spellId: number;
  readonly cost: number;
}

export interface AddonTalent {
  readonly name: string;
  readonly max: number;
  readonly summary: string;
}

export interface AddonRank {
  readonly skill: number;
  readonly cap: number;
  readonly what: string;
  readonly where: string;
  readonly req: string;
}

export interface AddonReagent {
  readonly qty: number;
  readonly name: string;
  readonly itemId: number;
}

export interface AddonProfessionStep {
  readonly from: number;
  readonly to: number;
  readonly craft?: string;
  readonly count?: number;
  readonly spellId?: number;
  readonly reagents?: readonly AddonReagent[];
  readonly mats?: string;
  readonly zone?: string;
  readonly catch?: string;
  readonly recipeFrom?: string;
  readonly note?: string;
}

export interface AddonProfession {
  readonly key: string;
  /** The skill line name in game, used to read your rank. */
  readonly name: string;
  readonly trainers: readonly AddonRank[];
  readonly steps: readonly AddonProfessionStep[];
}

/** One generated Lua file: its name and the `ns.data.*` entries in it. */
export interface AddonDataFile {
  readonly file: string;
  readonly entries: Readonly<Record<string, unknown>>;
}
