import { type TalentEffect, type TalentNode, talentOrder, talents, talentTree } from "@btc/guide-data";
import { MIN_LEVEL, ranksAfter, TALENT_POINTS_AT_60, talentPointsAt } from "../../lib/level/index.ts";

export const TREES = ["balance", "feral", "restoration"] as const;
export type TreeKey = (typeof TREES)[number];

/** Wowhead's Classic talent tree background images. */
export const TREE_BACKGROUND: Readonly<Record<TreeKey, number>> = { balance: 283, feral: 281, restoration: 282 };

const POINTS_PER_ROW = 5;

export const allNodes: readonly (TalentNode & { readonly tree: TreeKey })[] = TREES.flatMap((tree) =>
  talentTree[tree].map((node) => ({ ...node, tree })),
);
export const nodeByKey = (key: string) => allNodes.find((node) => node.key === key);

export const tankRanksAt = (level: number) => ranksAfter(talentOrder, talentPointsAt(level));
export const FINAL_RANKS = ranksAfter(talentOrder, TALENT_POINTS_AT_60);

/** Filters on the talent page: "show talents that improve ..." */
export const EFFECT_FILTERS: Readonly<Record<string, (effect: TalentEffect) => boolean>> = {
  Maul: (e) => e.spell === "Maul",
  Swipe: (e) => e.spell === "Swipe",
  Lacerate: (e) => e.spell === "Lacerate",
  "Primal Bite": (e) => e.spell === "Primal Bite",
  Rage: (e) => e.stat === "cost" || e.spell === "Rage gen",
  Crit: (e) => e.spell === "Crit" || e.spell === "Crit dmg",
  Hit: (e) => e.spell === "Hit",
  Dodge: (e) => e.spell === "Dodge",
  Armor: (e) => e.spell === "Armor",
  Stamina: (e) => e.spell === "Stamina",
  "Attack power": (e) => e.spell === "AP",
};

export const improves = (key: string): string[] => {
  const effects = talents[key]?.effects ?? [];
  return Object.entries(EFFECT_FILTERS)
    .filter(([, matches]) => effects.some(matches))
    .map(([name]) => name);
};

/** Every rule a spend order breaks: row gates, max ranks, level requirements, prerequisites. */
export function orderProblems(order: readonly string[]): string[] {
  const problems: string[] = [];
  const spent: Record<TreeKey, number> = { balance: 0, feral: 0, restoration: 0 };
  const ranks: Record<string, number> = {};
  order.forEach((key, index) => {
    const level = index + MIN_LEVEL;
    const node = nodeByKey(key);
    if (!node) {
      problems.push(`level ${level}: unknown talent ${key}`);
      return;
    }
    const required = talents[key]?.requiredLevel;
    if (spent[node.tree] < node.row * POINTS_PER_ROW) problems.push(`level ${level} ${node.name}: row locked`);
    if ((ranks[key] ?? 0) >= node.maxRank) problems.push(`level ${level} ${node.name}: too many ranks`);
    if (required !== undefined && level < required)
      problems.push(`level ${level} ${node.name}: needs level ${required}`);
    if (node.requires) {
      const prerequisite = nodeByKey(node.requires);
      if (!prerequisite || (ranks[node.requires] ?? 0) < prerequisite.maxRank)
        problems.push(`level ${level} ${node.name}: prerequisite missing`);
    }
    ranks[key] = (ranks[key] ?? 0) + 1;
    spent[node.tree] += 1;
  });
  if (order.length !== TALENT_POINTS_AT_60) problems.push(`${order.length} points instead of ${TALENT_POINTS_AT_60}`);
  return problems;
}
