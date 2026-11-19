import { describe, expect, it } from "vitest";
import { secondSpec, talentOrder, talents, talentTree } from "./talents.data.ts";

const TALENT_POINTS_AT_60 = 51;
const POINTS_PER_ROW = 5;

/** Walk a spend order and return the first rule it breaks, or null. */
function firstViolation(
  order: readonly string[],
  maxRanks: ReadonlyMap<string, { max: number; row: number; tree: string; requires?: string }>,
) {
  const ranks = new Map<string, number>();
  const spentInTree = new Map<string, number>();
  for (const [index, key] of order.entries()) {
    const node = maxRanks.get(key);
    if (!node) return `point ${index + 1}: unknown talent "${key}"`;
    const rank = (ranks.get(key) ?? 0) + 1;
    if (rank > node.max) return `point ${index + 1}: ${key} above max rank ${node.max}`;
    const spent = spentInTree.get(node.tree) ?? 0;
    if (spent < node.row * POINTS_PER_ROW)
      return `point ${index + 1}: ${key} needs ${node.row * POINTS_PER_ROW} points in its tree, has ${spent}`;
    if (node.requires) {
      const required = maxRanks.get(node.requires);
      if (!required || (ranks.get(node.requires) ?? 0) < required.max)
        return `point ${index + 1}: ${key} needs ${node.requires} maxed first`;
    }
    ranks.set(key, rank);
    spentInTree.set(node.tree, spent + 1);
  }
  return null;
}

const TREES = ["balance", "feral", "restoration"] as const;

const nodes = new Map(
  TREES.flatMap((tree) =>
    talentTree[tree].map(
      (n) => [n.key, { max: n.maxRank, row: n.row, tree, ...(n.requires ? { requires: n.requires } : {}) }] as const,
    ),
  ),
);

describe("talent data", () => {
  it("spends exactly 51 points by level 60", () => {
    expect(talentOrder).toHaveLength(TALENT_POINTS_AT_60);
  });

  it("only uses talents that are described", () => {
    for (const key of talentOrder) expect(talents[key], key).toBeDefined();
  });

  it.each([
    ["tank order", talentOrder],
    ["cat second spec", secondSpec.cat.order],
    ["balance second spec", secondSpec.balance.order],
  ])("%s follows tree rules (row gates, max ranks, prerequisites)", (_, order) => {
    expect(firstViolation(order, nodes)).toBeNull();
  });
});
