// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { LevelRange, Origin, Source, TitledText } from "../common/index.ts";

export interface Gold {
  readonly mount: MountNote;
  readonly mountSummary: readonly TitledText[];
  readonly bands: readonly GoldBand[];
  readonly general: readonly GoldTip[];
  readonly sources: readonly Source[];
}

export interface MountNote {
  readonly text: string;
  readonly origin: Origin;
}

export interface GoldBand {
  readonly levels: LevelRange;
  readonly sell: readonly string[];
  readonly farm: readonly string[];
  readonly saveFor: string;
}

export interface GoldTip {
  readonly title: string;
  readonly text: string;
  readonly origin: Origin;
}
