/** Bear tank math. Pure functions of level and talent ranks. */

export interface DerivedStat {
  readonly name: string;
  readonly value: string;
  readonly formula: string;
}

/** Bear armor multiplier: Dire Bear Form (level 40) ×4.6, Bear Form ×2.8. */
export const formArmorMultiplier = (level: number): number => (level >= 40 ? 4.6 : 2.8);

const percent = (multiplier: number) => `${multiplier >= 1 ? "+" : ""}${((multiplier - 1) * 100).toFixed(0)}%`;

/** Your numbers at a level, from the talents you have by then. Multipliers stack. */
export function derivedStats(level: number, ranks: Readonly<Record<string, number>>): DerivedStat[] {
  const rank = (key: string) => ranks[key] ?? 0;
  const savageFury = 1 + 0.05 * rank("savageFury");
  const feralInstinct = 1 + 0.1 * rank("feralInstinct");
  const rendAndTear = 1 + 0.03 * rank("rendAndTear");
  const naturalist = 1 + 0.02 * rank("naturalist");
  const genesis = 1 + 0.02 * rank("genesis");
  const formMultiplier = formArmorMultiplier(level);
  const crit = 3 * rank("sharpenedClaws") + 2 * rank("naturesMajesty") + 3 * rank("leaderOfThePack");
  return [
    { name: "Maul cost", value: `${15 - rank("ferocity")} rage`, formula: "15 − Ferocity" },
    { name: "Swipe cost", value: `${20 - rank("ferocity")} rage`, formula: "20 − Ferocity" },
    {
      name: "Swipe damage",
      value: percent(savageFury * feralInstinct * naturalist),
      formula: "Savage Fury × Feral Instinct × Naturalist",
    },
    {
      name: "Maul damage",
      value: percent(savageFury * rendAndTear * naturalist),
      formula: "× Rend and Tear on a bleeding target",
    },
    {
      name: "Primal Bite damage",
      value: rank("primalBite") ? percent(rendAndTear * naturalist) : "level 40",
      formula: "Rend and Tear × Naturalist",
    },
    {
      name: "Lacerate bleed",
      value: rank("lacerate") ? percent(genesis * naturalist) : "level 25",
      formula: "Genesis × Naturalist",
    },
    { name: "Crit from talents", value: `+${crit}%`, formula: "Claws + Majesty + Leader of the Pack" },
    {
      name: "Crit multiplier",
      value: `${(2 + 0.1 * rank("naturalInstinct")).toFixed(1)}×`,
      formula: "Natural Instinct",
    },
    { name: "Dodge from talents", value: `+${2 * rank("feralSwiftness")}%`, formula: "Feral Swiftness" },
    { name: "Hit from talents", value: `+${2 * rank("naturesReach")}% of 8%`, formula: "Nature's Reach" },
    {
      name: "Bonus attack power",
      value: `+${Math.round(rank("predatoryStrikes") * 0.5 * level)}`,
      formula: "Predatory Strikes",
    },
    { name: "Bear Stamina", value: percent(1 + 0.04 * rank("heartOfTheWild")), formula: "Heart of the Wild" },
    {
      name: "Thick Hide armor",
      value: rank("thickHide") ? `≈ +${Math.round(3 * level * formMultiplier)}` : "—",
      formula: `3 × level × ${formMultiplier}, check your character sheet`,
    },
  ];
}

export interface ArmorInput {
  /** Armor on your gear, as shown in caster form. */
  readonly gearArmor: number;
  readonly agility: number;
  /** 4.6 Dire Bear, 2.8 Bear, 1 caster. */
  readonly formMultiplier: number;
  readonly enemyLevel: number;
  readonly thickHide: boolean;
}

const ARMOR_CAP = 0.75;
const THICK_HIDE_BASE = 180;

/** Total armor and the share of physical damage it removes against an enemy level (capped at 75%). */
export function armorReduction({ gearArmor, agility, formMultiplier, enemyLevel, thickHide }: ArmorInput) {
  const fromThickHide = thickHide && formMultiplier > 1 ? THICK_HIDE_BASE * formMultiplier : 0;
  const armor = gearArmor * formMultiplier + agility * 2 + fromThickHide;
  const reduction = Math.min(ARMOR_CAP, armor / (armor + 85 * enemyLevel + 400));
  return { armor, reduction, effectiveHealth: 1 / (1 - reduction) };
}
