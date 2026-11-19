// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Source } from "../common/index.ts";

export interface Talent {
  readonly key: string;
  readonly name: string;
  readonly spellId: number;
  readonly tree: "balance" | "feral" | "restoration";
  readonly row: number;
  readonly column: number;
  readonly maxRank: number;
  readonly rankOneText: string;
  readonly maxRankText?: string;
  readonly effects: readonly TalentEffect[];
  readonly tankValue: number;
  readonly why: string;
  readonly requiredLevel?: number;
  readonly requires?: string;
}

export interface TalentEffect {
  readonly spell: string;
  readonly stat: string;
  readonly value: number | string;
}

export interface TalentTreeNames {
  readonly balance: string;
  readonly feral: string;
  readonly restoration: string;
}

export interface TalentTree {
  readonly balance: readonly TalentNode[];
  readonly feral: readonly TalentNode[];
  readonly restoration: readonly TalentNode[];
}

export interface TalentNode {
  readonly key: string;
  readonly name: string;
  readonly spellId: number;
  readonly row: number;
  readonly column: number;
  readonly icon: string;
  readonly maxRank: number;
  readonly descriptions: readonly string[];
  readonly requires?: string;
}

export interface SecondSpec {
  readonly dualSpecNotes: readonly string[];
  readonly cat: SecondSpecBuild;
  readonly balance: SecondSpecBuild;
  readonly dualSpecSources: readonly Source[];
}

export interface SecondSpecBuild {
  readonly title: string;
  readonly pointSplit: string;
  readonly why: string;
  readonly order: readonly string[];
  readonly notes: readonly string[];
  readonly rotation: readonly string[];
  readonly stats: string;
  readonly sources: readonly Source[];
}
