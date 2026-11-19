// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Origin, Reagent, Source } from "../common/index.ts";

export interface Professions {
  readonly leatherworking: Leatherworking;
  readonly cooking: Cooking;
  readonly fishing: Fishing;
}

export interface Leatherworking {
  readonly changes: readonly string[];
  readonly ranks: readonly ProfessionRank[];
  readonly skinningRanks: readonly ProfessionRank[];
  readonly steps: readonly CraftStep[];
  readonly subcrafts: readonly Subcraft[];
  readonly farming: readonly FarmingSpot[];
  readonly usefulCrafts: readonly UsefulCraft[];
  readonly gold: readonly string[];
  readonly sources: readonly Source[];
}

export interface ProfessionRank {
  readonly skill: number;
  readonly cap: number;
  readonly name: string;
  readonly where: string;
  readonly requirement: string;
  readonly origin: Origin;
}

export interface CraftStep {
  readonly from: number;
  readonly to: number;
  readonly craft: string;
  readonly spellId: number;
  readonly count: number;
  readonly skillColors: readonly number[];
  readonly reagents: readonly Reagent[];
  readonly recipeFrom: string;
  readonly note: string;
  readonly origin: Origin;
}

export interface Subcraft {
  readonly name: string;
  readonly spellId: number;
  readonly reagents: readonly Reagent[];
  readonly note: string;
  readonly expandInTotals: boolean;
}

export interface FarmingSpot {
  readonly material: string;
  readonly levels: string;
  readonly zone: string;
  readonly where: string;
  readonly note: string;
  readonly origin: Origin;
}

export interface UsefulCraft {
  readonly name: string;
  readonly skill: number;
  readonly why: string;
  readonly itemId: number;
  readonly origin: Origin;
}

export interface Cooking {
  readonly changes: readonly string[];
  readonly ranks: readonly ProfessionRank[];
  readonly steps: readonly CookingStep[];
  readonly tankFood: readonly TankFood[];
  readonly gold: readonly string[];
  readonly sources: readonly Source[];
  readonly foodNote: string;
}

export interface CookingStep {
  readonly from: number;
  readonly to: number;
  readonly craft: string;
  readonly count: number;
  readonly materials: string;
  readonly recipeFrom: string;
  readonly materialsFrom: string;
  readonly note: string;
  readonly origin: Origin;
}

export interface TankFood {
  readonly levels: string;
  readonly name: string;
  readonly effect: string;
  readonly recipeFrom: string;
  readonly itemId?: number;
  readonly origin: Origin;
}

export interface Fishing {
  readonly changes: readonly string[];
  readonly ranks: readonly ProfessionRank[];
  readonly steps: readonly FishingStep[];
  readonly gear: readonly FishingGear[];
  readonly valuable: readonly ValuableFish[];
  readonly sources: readonly Source[];
}

export interface FishingStep {
  readonly from: number;
  readonly to: number;
  readonly zone: string;
  readonly where: string;
  readonly catch: string;
  readonly note: string;
  readonly origin: Origin;
}

export interface FishingGear {
  readonly name: string;
  readonly what: string;
  readonly where: string;
  readonly itemId?: number;
  readonly origin: Origin;
}

export interface ValuableFish {
  readonly fish: string;
  readonly use: string;
  readonly where: string;
  readonly origin: Origin;
}
