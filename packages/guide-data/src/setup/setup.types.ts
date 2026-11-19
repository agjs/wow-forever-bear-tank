// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Source, TitledText } from "../common/index.ts";

export interface Addon {
  readonly name: string;
  readonly why: string;
  readonly worksInForever: boolean;
}

export interface QualityOfLife {
  readonly actionBars: ActionBarSetup;
  readonly settings: readonly TitledText[];
  readonly habits: readonly TitledText[];
  readonly checklist: readonly string[];
  readonly sources: readonly Source[];
}

export interface ActionBarSetup {
  readonly intro: string;
  readonly steps: readonly string[];
  readonly alt: string;
}

export interface Racial {
  readonly name: string;
  readonly text: string;
}
