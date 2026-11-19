import type { LevelRange, Unlock } from "@btc/guide-data";

export const MIN_LEVEL = 10;
export const MAX_LEVEL = 60;
export const TALENT_POINTS_AT_60 = 51;

export const clampLevel = (level: number): number =>
  Number.isFinite(level) ? Math.max(MIN_LEVEL, Math.min(MAX_LEVEL, Math.round(level))) : MIN_LEVEL;

/** Talent points you have at a level: the first comes at 10, the last at 60. */
export const talentPointsAt = (level: number): number => Math.max(0, Math.min(TALENT_POINTS_AT_60, level - 9));

/** Ranks per talent after spending the first `points` of an order. */
export function ranksAfter(order: readonly string[], points: number): Readonly<Record<string, number>> {
  const ranks: Record<string, number> = {};
  for (const key of order.slice(0, points)) ranks[key] = (ranks[key] ?? 0) + 1;
  return ranks;
}

/** The talent an order takes at a level (one point per level from 10). */
export const talentTakenAt = (order: readonly string[], level: number): string | undefined =>
  level >= MIN_LEVEL && level <= MAX_LEVEL ? order[level - MIN_LEVEL] : undefined;

/** Which rank of its talent the point at this level is. */
export function rankTakenAt(order: readonly string[], level: number): number {
  const key = talentTakenAt(order, level);
  return key ? order.slice(0, level - 9).filter((k) => k === key).length : 0;
}

/** Levels at which an order takes a talent. */
export const levelsTaking = (order: readonly string[], key: string): number[] =>
  order.flatMap((k, i) => (k === key ? [i + MIN_LEVEL] : []));

export const inRange = (range: LevelRange, level: number): boolean => level >= range.min && level <= range.max;

/** "40–45", "45-50" or "60" -> a level range. Text without a number gives undefined. */
export function parseLevelText(text: string): LevelRange | undefined {
  const numbers = text.match(/\d+/g)?.map(Number);
  const [min, max = min] = numbers ?? [];
  return min === undefined || max === undefined ? undefined : { min, max };
}

export const levelTextIncludes = (text: string, level: number): boolean => {
  const range = parseLevelText(text);
  return range !== undefined && inRange(range, level);
};

export const formatRange = (range: LevelRange): string =>
  range.min === range.max ? String(range.min) : `${range.min}–${range.max}`;

/** Whether a button is available at a level with these talent ranks. */
export const isUnlocked = (unlock: Unlock, level: number, ranks: Readonly<Record<string, number>>): boolean =>
  (unlock.level === undefined || level >= unlock.level) &&
  (unlock.talent === undefined || (ranks[unlock.talent] ?? 0) > 0) &&
  (unlock.onlyBefore === undefined || (ranks[unlock.onlyBefore] ?? 0) === 0);

export const plural = (count: number, word: string, many = `${word}s`): string => (count === 1 ? word : many);
