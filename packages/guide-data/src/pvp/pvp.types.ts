// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Origin, Source } from "../common/index.ts";

export interface Pvp {
  readonly basics: readonly string[];
  readonly feral: FeralPvp;
  readonly classes: readonly PvpClass[];
  readonly allianceRaces: readonly AllianceRace[];
  readonly general: readonly PvpTip[];
  readonly sources: readonly Source[];
}

export interface FeralPvp {
  readonly summary: string;
  readonly tips: readonly PvpTip[];
  readonly byLevel: readonly PvpLevelNote[];
  readonly talents: string;
}

export interface PvpTip {
  readonly title: string;
  readonly text: string;
  readonly origin: Origin;
}

export interface PvpLevelNote {
  readonly levels: string;
  readonly text: string;
}

export interface PvpClass {
  readonly className: string;
  readonly danger: number;
  readonly threats: readonly string[];
  readonly plan: readonly string[];
  readonly counters: readonly string[];
  readonly byLevel: string;
  readonly foreverNote: string;
  readonly origin: Origin;
}

export interface AllianceRace {
  readonly race: string;
  readonly racials: string;
  readonly origin: Origin;
}
