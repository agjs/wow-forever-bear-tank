// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Source, TitledText } from "../common/index.ts";

export interface Camps {
  readonly campSteps: readonly string[];
  readonly campfireKits: readonly CampfireKit[];
  readonly whichItemToPlace: readonly TitledText[];
  readonly professionItems: readonly ProfessionCampItems[];
  readonly crateSteps: readonly string[];
  readonly cratesYouCanFill: readonly TitledText[];
  readonly writSteps: readonly string[];
  readonly reputationNote: string;
  readonly merchantFavorRewards: readonly MerchantFavorReward[];
  readonly plan: readonly string[];
  readonly sources: readonly Source[];
}

export interface CampfireKit {
  readonly name: string;
  readonly itemId: number;
  readonly slots: number;
  readonly howToGet: string;
}

export interface ProfessionCampItems {
  readonly profession: string;
  readonly items: readonly CampItem[];
}

export interface CampItem {
  readonly skill: number;
  readonly name: string;
  readonly itemId: number;
  readonly effect: string;
  readonly materials: string;
  readonly source: string;
}

export interface MerchantFavorReward {
  readonly name: string;
  readonly itemId?: number;
  readonly effect: string;
  readonly cost: string;
}
