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
  /** Quests to finish first, in order. */
  readonly chain?: readonly AddonChainStep[];
  /** Chained quests only: where the quest itself is picked up once the chain is done. */
  readonly pickup?: AddonPlace;
}

export interface AddonPlace {
  readonly place: string;
  readonly zone?: string;
  readonly x?: number;
  readonly y?: number;
}

export interface AddonChainStep {
  readonly id: number;
  readonly name: string;
  readonly giver: string;
  /** "Marshal's Refuge, Un'Goro Crater", or "inside" for a step done in the dungeon. */
  readonly place: string;
  readonly zone?: string;
  readonly x?: number;
  readonly y?: number;
  readonly task: string;
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
  /** Icon file name under Interface\\Icons. */
  readonly icon: string;
  /** A caster spell a bear rarely uses: shown, but not counted as "to learn". */
  readonly optional: boolean;
  /** Learned from a class quest, not bought from the trainer. */
  readonly quest: boolean;
}

export interface AddonTalent {
  readonly name: string;
  readonly max: number;
  readonly summary: string;
  readonly tree: "balance" | "feral" | "restoration";
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

// ---------- website sections ----------

export interface AddonGearItem {
  readonly name: string;
  readonly itemId: number;
  readonly slot: string;
  /** Level you can wear it from. */
  readonly level: number;
  readonly ilvl: number;
  readonly stats: string;
  readonly source: string;
  readonly icon: string;
  /** 0 poor .. 5 legendary. */
  readonly quality: number;
}

export interface AddonEnchant {
  readonly slot: string;
  readonly name: string;
  readonly effect: string;
  readonly spellId?: number;
  readonly itemId?: number;
  /** An armor kit, not an enchant. */
  readonly kit: boolean;
  /** How to get it, in one sentence. */
  readonly how: string;
  readonly materials?: string;
}

export interface AddonEnchantBand {
  readonly lo: number;
  readonly hi: number;
  readonly choices: readonly AddonEnchant[];
}

export interface AddonPriorityStep {
  readonly spell: string;
  readonly icon: string;
  readonly spellId: number;
  readonly text: string;
  /** Trained at this level. */
  readonly level?: number;
  /** Needs this talent. */
  readonly talent?: string;
  /** Only until this talent replaces it. */
  readonly onlyBefore?: string;
}

export interface AddonEmergency {
  readonly spell: string;
  readonly icon: string;
  readonly spellId: number;
  readonly text: string;
  readonly level: number;
}

export interface AddonRotation {
  readonly single: readonly AddonPriorityStep[];
  readonly cleave: readonly AddonPriorityStep[];
  readonly aoe: readonly AddonPriorityStep[];
  readonly cat: readonly AddonPriorityStep[];
  readonly prePull: readonly string[];
  readonly catNote: readonly string[];
  readonly emergency: readonly AddonEmergency[];
}

export interface AddonMilestone {
  readonly level: number;
  readonly title: string;
  readonly icon: string;
  readonly text: string;
}

export interface AddonCheckpoint {
  readonly lo: number;
  readonly hi: number;
  readonly title: string;
  readonly where: string;
  readonly doneWhen: string;
  readonly tips: readonly string[];
  readonly items: readonly { readonly name: string; readonly itemId: number; readonly source: string }[];
}

export interface AddonDungeonGuide {
  readonly key: string;
  readonly name: string;
  readonly lo: number;
  readonly hi: number;
  readonly where: string;
  readonly note: string;
  readonly route: readonly string[];
  readonly bosses: readonly { readonly name: string; readonly tank: string; readonly abilities: readonly string[] }[];
  readonly dangers: readonly string[];
}

/** One generated Lua file: its name and the `ns.data.*` entries in it. */
export interface AddonDataFile {
  readonly file: string;
  readonly entries: Readonly<Record<string, unknown>>;
}
