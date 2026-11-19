// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { ItemConfidence, LevelRange } from "../common/index.ts";

export interface RouteStep {
  readonly levels: LevelRange;
  readonly zones: string;
  readonly hub: string;
  readonly how: string;
  readonly notes: string;
  readonly changedInForever: boolean;
  readonly foreverNote?: string;
}

export interface Checkpoint {
  readonly levels: LevelRange;
  readonly title: string;
  readonly where: string;
  readonly talents: string;
  readonly train: string;
  readonly items: readonly CheckpointItem[];
  readonly tips: readonly string[];
  readonly doneWhen: string;
}

export interface CheckpointItem {
  readonly name: string;
  readonly itemId: number;
  readonly source: string;
  readonly confidence: ItemConfidence;
}

export interface Ability {
  readonly level: number;
  readonly name: string;
  readonly text: string;
  readonly kind: "core" | "util" | "cat";
}
