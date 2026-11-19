import { type TrainerSpell, type TrainerSpellInfo, trainerSpellInfo, trainerSpells } from "@btc/guide-data";
import { MIN_LEVEL } from "../../lib/level/index.ts";

const UNKNOWN: TrainerSpellInfo = { category: "util", icon: "inv_misc_questionmark", text: "" };

export const CATEGORY_LABEL: Readonly<Record<TrainerSpellInfo["category"], string>> = {
  bear: "Bear",
  cat: "Cat",
  heal: "Self-heal",
  util: "Utility",
  skip: "Optional",
};

export const spellInfo = (spell: TrainerSpell): TrainerSpellInfo => trainerSpellInfo[spell.name] ?? UNKNOWN;

/** Caster spells a bear rarely uses. */
export const isOptional = (spell: TrainerSpell): boolean => spellInfo(spell).category === "skip";

/** Levels the trainer has something new at, from 10 up. */
export const trainerLevels: readonly number[] = [...new Set(trainerSpells.map((s) => s.level))]
  .filter((level) => level >= MIN_LEVEL)
  .sort((a, b) => a - b);

export const spellsAt = (level: number, spells: readonly TrainerSpell[] = trainerSpells): TrainerSpell[] =>
  spells.filter((s) => s.level === level);

export const nextTrainerLevel = (level: number): number | undefined => trainerLevels.find((l) => l > level);

/** Copper for the spells you need: optional caster spells and class-quest rewards are free of it. */
export const costOfNeeded = (spells: readonly TrainerSpell[]): number =>
  spells.filter((s) => !isOptional(s) && !s.fromQuest).reduce((total, s) => total + s.cost, 0);
