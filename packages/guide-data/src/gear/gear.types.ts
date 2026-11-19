// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { ItemConfidence, LevelRange, Source, TitledText } from "../common/index.ts";

export interface GearItem {
  readonly name: string;
  readonly itemId: number;
  readonly confidence: ItemConfidence;
  readonly slot: string;
  readonly level: number;
  readonly itemLevel: number;
  readonly stats: string;
  readonly source: string;
  readonly icon: string;
  readonly quality: number;
  readonly levelEstimated: boolean;
}

export interface EnchantPlan {
  readonly rules: readonly TitledText[];
  readonly bands: readonly EnchantBand[];
  readonly sources: readonly Source[];
}

export interface EnchantBand {
  readonly levels: LevelRange;
  readonly choices: readonly EnchantChoice[];
}

export interface EnchantChoice {
  readonly slot: string;
  readonly name: string;
  readonly spellId?: number;
  readonly effect: string;
  readonly materials?: string;
  readonly skill?: number;
  readonly alternative?: string;
  readonly armorKit?: boolean;
  readonly howToGet?: string;
  readonly itemId?: number;
  readonly rareFormula?: boolean;
}

export interface SlotEnchant {
  readonly slot: string;
  readonly text: string;
}

export interface Consumable {
  readonly name: string;
  readonly text: string;
}
