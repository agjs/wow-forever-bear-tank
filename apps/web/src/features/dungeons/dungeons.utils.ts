import { type Dungeon, dungeons } from "@btc/guide-data";

/** Dungeons worth running at a level: from one level before the range starts until it ends. */
export const dungeonsForLevel = (level: number, list: readonly Dungeon[] = dungeons): Dungeon[] =>
  list.filter((d) => level >= d.levels.min - 1 && level <= d.levels.max);

/** Dungeons the Horde can reach (the guide marks a few as meant for the Alliance). */
export const isForHorde = (dungeon: Dungeon): boolean => !/alliance-intended/i.test(dungeon.where);

export const byStartLevel = (list: readonly Dungeon[] = dungeons): Dungeon[] =>
  [...list].sort((a, b) => a.levels.min - b.levels.min);

export const isNewInForever = (dungeon: Dungeon): boolean => /^NEW/i.test(dungeon.foreverNote);
