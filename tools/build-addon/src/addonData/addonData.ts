/** Maps @btc/guide-data into the addon's data contract (see addonData.types.ts). Pure functions only. */
import type {
  DungeonQuestList,
  Professions,
  QuestRef,
  RouteStep,
  Talent,
  TrainerSpell,
  TrainerSpellInfo,
} from "@btc/guide-data";
import { questStops } from "@btc/guide-data";
import type {
  AddonDataFile,
  AddonDungeon,
  AddonDungeonQuests,
  AddonProfession,
  AddonQuest,
  AddonQuestTags,
  AddonRouteStep,
  AddonStop,
  AddonTalent,
  AddonTrainerSpell,
} from "./addonData.types.ts";

/** Quest log tag and color per dungeon. Dungeons without an entry fall back to their name in gold. */
export const DUNGEON_STYLE: Readonly<Record<string, readonly [short: string, color: string]>> = {
  alcaz: ["Alcaz", "8ab8f0"],
  zf: ["ZF", "e8c070"],
  mara: ["Mara", "9be070"],
  st: ["ST", "60d0c0"],
  brd: ["BRD", "ff8a50"],
  blackmaw: ["BMH", "c0a080"],
  lbrs: ["LBRS", "ff6a6a"],
  ubrs: ["UBRS", "ff4a8a"],
  dme: ["DM:E", "b090ff"],
  dmw: ["DM:W", "a080f0"],
  dmn: ["DM:N", "9070e0"],
  strat_live: ["Strat", "f0e060"],
  strat_undead: ["Strat UD", "d0c050"],
  scholo: ["Scholo", "70e0ff"],
};
const DEFAULT_COLOR = "f2c46d";

// ---------- dungeon quests ----------

/** A dungeon's quests as pickup stops (see questStops in @btc/guide-data), in the addon's shape. */
export function toDungeonQuests(list: DungeonQuestList): AddonDungeonQuests {
  const stops: AddonStop[] = questStops(list).map(({ title, pickup, quests }) => ({
    title,
    ...(pickup.inside
      ? { inside: true }
      : { zone: pickup.zone, ...(pickup.x !== undefined ? { x: pickup.x, y: pickup.y } : {}), inside: false }),
    quests: quests.map(
      (q): AddonQuest => ({
        id: q.id,
        name: q.name,
        horde: q.faction === "horde",
        req: q.requiredLevel,
        giver: q.giver,
        ...(pickup.inside ? { where: q.where } : {}),
        ...(q.note ? { note: q.note } : {}),
      }),
    ),
  }));
  const [short, color] = DUNGEON_STYLE[list.key] ?? [list.name, DEFAULT_COLOR];
  return { key: list.key, name: list.name, short, color, lo: list.levels.min, hi: list.levels.max, stops };
}

/** Every dungeon quest, then every other step of its chain, mapped to its dungeon. The quest itself wins. */
export function toQuestTags(
  lists: readonly DungeonQuestList[],
  chains: Readonly<Record<string, readonly QuestRef[]>>,
): AddonQuestTags {
  const tags: Record<string, readonly [string, boolean]> = {};
  for (const list of lists) for (const q of list.quests) tags[q.id] ??= [list.key, false];
  for (const list of lists)
    for (const q of list.quests) for (const step of chains[String(q.id)] ?? []) tags[step.id] ??= [list.key, true];
  return tags;
}

// ---------- leveling ----------

export const toRoute = (route: readonly RouteStep[]): AddonRouteStep[] =>
  route.map((r) => ({ lo: r.levels.min, hi: r.levels.max, zones: r.zones, hub: r.hub, how: r.how }));

const UNKNOWN_ICON = "inv_misc_questionmark";

export const toTrainer = (
  spells: readonly TrainerSpell[],
  info: Readonly<Record<string, TrainerSpellInfo>>,
): AddonTrainerSpell[] =>
  spells.map(({ level, name, rank, spellId, cost, fromQuest }) => ({
    level,
    name,
    rank,
    spellId,
    cost,
    icon: info[name]?.icon ?? UNKNOWN_ICON,
    optional: info[name]?.category === "skip",
    quest: fromQuest,
  }));

export const toTalents = (talents: Readonly<Record<string, Talent>>): Record<string, AddonTalent> =>
  Object.fromEntries(
    Object.entries(talents).map(([k, t]) => [k, { name: t.name, max: t.maxRank, summary: t.rankOneText }]),
  );

// ---------- professions ----------

const rank = (r: Professions["cooking"]["ranks"][number]) => ({
  skill: r.skill,
  cap: r.cap,
  what: r.name,
  where: r.where,
  req: r.requirement,
});

export function toProfessions(p: Professions): AddonProfession[] {
  return [
    {
      key: "lw",
      name: "Leatherworking",
      trainers: p.leatherworking.ranks.map(rank),
      steps: p.leatherworking.steps.map((s) => ({
        from: s.from,
        to: s.to,
        craft: s.craft,
        count: s.count,
        spellId: s.spellId,
        reagents: s.reagents.map((r) => ({ qty: r.quantity, name: r.name, itemId: r.itemId })),
        recipeFrom: s.recipeFrom,
        note: s.note,
      })),
    },
    { key: "skin", name: "Skinning", trainers: p.leatherworking.skinningRanks.map(rank), steps: [] },
    {
      key: "cook",
      name: "Cooking",
      trainers: p.cooking.ranks.map(rank),
      steps: p.cooking.steps.map((s) => ({
        from: s.from,
        to: s.to,
        craft: s.craft,
        count: s.count,
        mats: s.materials,
        recipeFrom: s.recipeFrom,
      })),
    },
    {
      key: "fish",
      name: "Fishing",
      trainers: p.fishing.ranks.map(rank),
      steps: p.fishing.steps.map((s) => ({ from: s.from, to: s.to, zone: s.zone, catch: s.catch, note: s.note })),
    },
  ];
}

// ---------- all files ----------

export interface GuideInput {
  readonly dungeons: readonly { key: string; name: string; levels: { min: number; max: number } }[];
  readonly dungeonQuests: readonly DungeonQuestList[];
  readonly questChains: Readonly<Record<string, readonly QuestRef[]>>;
  readonly route: readonly RouteStep[];
  readonly trainerSpells: readonly TrainerSpell[];
  readonly trainerSpellInfo: Readonly<Record<string, TrainerSpellInfo>>;
  readonly talentOrder: readonly string[];
  readonly talents: Readonly<Record<string, Talent>>;
  readonly professions: Professions;
}

export function addonDataFiles(guide: GuideInput): AddonDataFile[] {
  const dungeons: AddonDungeon[] = guide.dungeons.map((d) => ({
    key: d.key,
    name: d.name,
    lo: d.levels.min,
    hi: d.levels.max,
  }));
  return [
    {
      file: "Dungeons.lua",
      entries: {
        dungeonQuests: guide.dungeonQuests.map(toDungeonQuests),
        questTags: toQuestTags(guide.dungeonQuests, guide.questChains),
        dungeons,
      },
    },
    { file: "Route.lua", entries: { route: toRoute(guide.route) } },
    { file: "Trainer.lua", entries: { trainer: toTrainer(guide.trainerSpells, guide.trainerSpellInfo) } },
    { file: "Talents.lua", entries: { talentOrder: guide.talentOrder, talents: toTalents(guide.talents) } },
    { file: "Professions.lua", entries: { professions: toProfessions(guide.professions) } },
  ];
}
