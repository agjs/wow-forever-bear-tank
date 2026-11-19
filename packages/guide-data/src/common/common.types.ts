// Bear Tank Codex guide data. The website and the addon are both built from this package.

/** An inclusive character level range. */
export interface LevelRange {
  readonly min: number;
  readonly max: number;
}

export interface Source {
  readonly title: string;
  readonly url: string;
}

export interface TitledText {
  readonly title: string;
  readonly text: string;
}

export interface QuestRef {
  readonly id: number;
  readonly name: string;
}

export interface Reagent {
  readonly quantity: number;
  readonly name: string;
  readonly itemId: number;
}

/** "forever": confirmed for WoW: Forever. "classic": carried over from Classic and not re-checked. */
export type Origin = "forever" | "classic";

/** How an item's source is known: confirmed drop or vendor, quest reward, or Classic data. */
export type ItemConfidence = "confirmed" | "quest" | "classic";

/** Name -> Wowhead path, for example "item=123", "npc=456" or "quest=789". */
export type WowheadLinks = Readonly<Record<string, string>>;
