/** Maps the website's sections (gear, enchants, rotation, talents, leveling, dungeon guides) into addon data. */
import type {
  Checkpoint,
  Dungeon,
  EmergencyButton,
  EnchantPlan,
  GearItem,
  Milestone,
  PriorityListKey,
  PriorityStep,
  SpellInfo,
  TalentSummary,
} from "@btc/guide-data";
import type {
  AddonCheckpoint,
  AddonDungeonGuide,
  AddonEnchantBand,
  AddonGearItem,
  AddonMilestone,
  AddonPriorityStep,
  AddonRotation,
} from "./addonData.types.ts";

const UNKNOWN_ICON = "inv_misc_questionmark";

export const toGear = (items: readonly GearItem[]): AddonGearItem[] =>
  items.map((g) => ({
    name: g.name,
    itemId: g.itemId,
    slot: g.slot,
    level: g.level,
    ilvl: g.itemLevel,
    stats: g.stats,
    source: g.source,
    icon: g.icon || UNKNOWN_ICON,
    quality: g.quality,
  }));

export const toEnchantBands = (plan: EnchantPlan): AddonEnchantBand[] =>
  plan.bands.map((band) => ({
    lo: band.levels.min,
    hi: band.levels.max,
    choices: band.choices.map((c) => ({
      slot: c.slot,
      name: c.name,
      effect: c.effect.replace(/\.$/, ""),
      ...(c.spellId ? { spellId: c.spellId } : {}),
      ...(c.itemId ? { itemId: c.itemId } : {}),
      kit: c.armorKit === true,
      how:
        c.howToGet ??
        `An enchanter with Enchanting ${c.skill ?? "?"}${c.rareFormula ? " and the rare formula" : ""} can make it.`,
      ...(c.materials ? { materials: c.materials } : {}),
    })),
  }));

interface RotationInput {
  readonly priorityLists: Readonly<Record<PriorityListKey, readonly PriorityStep[]>>;
  readonly spells: Readonly<Record<string, SpellInfo>>;
  readonly emergencyButtons: readonly EmergencyButton[];
  readonly prePull: readonly string[];
  readonly catFormNote: readonly string[];
}

export function toRotation({
  priorityLists,
  spells,
  emergencyButtons,
  prePull,
  catFormNote,
}: RotationInput): AddonRotation {
  const step = (s: PriorityStep): AddonPriorityStep => ({
    spell: s.spell,
    icon: spells[s.spell]?.icon ?? UNKNOWN_ICON,
    spellId: spells[s.spell]?.spellId ?? 0,
    text: s.text,
    ...(s.unlock.level !== undefined ? { level: s.unlock.level } : {}),
    ...(s.unlock.talent ? { talent: s.unlock.talent } : {}),
    ...(s.unlock.onlyBefore ? { onlyBefore: s.unlock.onlyBefore } : {}),
  });
  return {
    single: priorityLists.single.map(step),
    cleave: priorityLists.cleave.map(step),
    aoe: priorityLists.aoe.map(step),
    cat: priorityLists.cat.map(step),
    prePull,
    catNote: catFormNote,
    emergency: emergencyButtons.map((b) => ({
      spell: b.spell,
      icon: spells[b.spell]?.icon ?? UNKNOWN_ICON,
      spellId: spells[b.spell]?.spellId ?? 0,
      text: b.text,
      level: b.level,
    })),
  };
}

export const toTalentIcons = (summaries: Readonly<Record<string, TalentSummary>>): Record<string, string> =>
  Object.fromEntries(Object.entries(summaries).map(([key, s]) => [key, s.icon]));

export const toMilestones = (list: readonly Milestone[]): AddonMilestone[] =>
  list.map((m) => ({ level: m.level, title: m.title, icon: m.icon, text: m.text }));

export const toCheckpoints = (list: readonly Checkpoint[]): AddonCheckpoint[] =>
  list.map((c) => ({
    lo: c.levels.min,
    hi: c.levels.max,
    title: c.title,
    where: c.where,
    doneWhen: c.doneWhen,
    tips: c.tips,
    items: c.items.map((i) => ({ name: i.name, itemId: i.itemId, source: i.source })),
  }));

export const toDungeonGuides = (list: readonly Dungeon[]): AddonDungeonGuide[] =>
  [...list]
    .sort((a, b) => a.levels.min - b.levels.min)
    .map((d) => ({
      key: d.key,
      name: d.name,
      lo: d.levels.min,
      hi: d.levels.max,
      where: d.where,
      note: d.foreverNote,
      route: d.route,
      bosses: d.bosses.map((b) => ({ name: b.name, tank: b.tank, abilities: b.abilities })),
      dangers: d.dangers,
    }));
