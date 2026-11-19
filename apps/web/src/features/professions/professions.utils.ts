import type { CraftStep, ProfessionRank, Subcraft } from "@btc/guide-data";

export const MAX_SKILL = 300;
/** Each trainer rank raises your skill cap by 75 when the data doesn't give one. */
const RANK_SPAN = 75;

export interface MaterialLine {
  readonly name: string;
  readonly quantity: number;
  readonly itemId?: number;
}

export const clampSkill = (skill: number): number =>
  Number.isFinite(skill) ? Math.max(1, Math.min(MAX_SKILL, Math.round(skill))) : 1;

/** Everything a step needs for all its crafts. */
export const materialsFor = (step: CraftStep): MaterialLine[] =>
  step.reagents.map((r) => ({ name: r.name, quantity: r.quantity * step.count, itemId: r.itemId }));

/** Replaces intermediate crafts (cured hides, ...) with the raw materials they're made from. */
export function expandSubcrafts(lines: readonly MaterialLine[], subcrafts: readonly Subcraft[]): MaterialLine[] {
  return lines.flatMap((line) => {
    const sub = subcrafts.find((s) => s.name === line.name && s.expandInTotals);
    return sub
      ? sub.reagents.map((r) => ({ name: r.name, quantity: line.quantity * r.quantity, itemId: r.itemId }))
      : [line];
  });
}

/** Adds up quantities of the same material, keeping first-seen order. */
export function totalMaterials(lines: readonly MaterialLine[]): MaterialLine[] {
  const totals = new Map<string, MaterialLine>();
  for (const line of lines) {
    const seen = totals.get(line.name);
    const itemId = seen?.itemId ?? line.itemId;
    totals.set(line.name, {
      name: line.name,
      quantity: (seen?.quantity ?? 0) + line.quantity,
      ...(itemId !== undefined ? { itemId } : {}),
    });
  }
  return [...totals.values()];
}

/** Intermediate crafts a list of materials uses, each once. */
export const subcraftsUsed = (lines: readonly MaterialLine[], subcrafts: readonly Subcraft[]): Subcraft[] =>
  subcrafts.filter((s) => s.expandInTotals && lines.some((line) => line.name === s.name));

/** Steps you've already passed and the ones still ahead, by skill. */
export function splitSteps<T extends { readonly to: number }>(steps: readonly T[], skill: number) {
  return { passed: steps.filter((s) => skill >= s.to), left: steps.filter((s) => skill < s.to) };
}

export const rankCap = (rank: ProfessionRank): number => rank.cap || rank.skill + RANK_SPAN;

/** Trainer ranks you still need (first one is next) and the ones behind you. */
export function splitRanks(ranks: readonly ProfessionRank[], skill: number) {
  return { upcoming: ranks.filter((r) => rankCap(r) > skill), done: ranks.filter((r) => rankCap(r) <= skill) };
}
