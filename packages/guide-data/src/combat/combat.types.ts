// Bear Tank Codex guide data. The website and the addon are both built from this package.

export interface Rotation {
  readonly prePull: readonly string[];
  readonly singleTarget: readonly RotationStep[];
  readonly cleave: readonly RotationStep[];
  readonly aoe: readonly RotationStep[];
  readonly defensive: readonly RotationStep[];
  readonly forms: readonly RotationStep[];
}

export interface RotationStep {
  readonly action: string;
  readonly when: string;
}

export interface Mechanic {
  readonly title: string;
  readonly text: string;
  readonly source: string;
}

export interface StatPriority {
  readonly priority: string;
  readonly defense: string;
  readonly note: string;
}

export interface Macro {
  readonly name: string;
  readonly why: string;
  readonly body: string;
  readonly tested: boolean;
}

export interface Keybind {
  readonly key: string;
  readonly action: string;
}
