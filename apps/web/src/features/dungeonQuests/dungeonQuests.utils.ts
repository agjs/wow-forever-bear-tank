import { type ChainStep, type DungeonQuest, type DungeonQuestList, parseWhere, type QuestStop } from "@btc/guide-data";

/** 0 not picked up, 1 in your quest log, 2 done. Same values the original site saved. */
export type QuestStatus = 0 | 1 | 2;
export const STATUS_LABELS: readonly (readonly [QuestStatus, string])[] = [
  [0, "Not picked up"],
  [1, "In my quest log"],
  [2, "Done"],
];

export type QuestStatuses = Readonly<Record<string, QuestStatus>>;

export const isQuestStatus = (value: unknown): value is QuestStatus => value === 0 || value === 1 || value === 2;

export const statusOf = (statuses: QuestStatuses, questId: number): QuestStatus => statuses[questId] ?? 0;

/** Sets one quest's status. "Not picked up" removes the entry to keep storage small. */
export function withStatus(statuses: QuestStatuses, questId: number, status: QuestStatus): QuestStatuses {
  const { [questId]: _removed, ...rest } = statuses;
  return status === 0 ? rest : { ...rest, [questId]: status };
}

/** How many quests of a dungeon are [not picked up, in your log, done]. */
export function progress(list: DungeonQuestList, statuses: QuestStatuses): readonly [number, number, number] {
  const counts: [number, number, number] = [0, 0, 0];
  for (const quest of list.quests) counts[statusOf(statuses, quest.id)] += 1;
  return counts;
}

/** The dungeon to show: the saved choice, else the first not-outleveled one with quests left. */
export function pickDungeon(
  lists: readonly DungeonQuestList[],
  level: number,
  statuses: QuestStatuses,
  saved: string | null,
): DungeonQuestList | undefined {
  const open = lists.filter((list) => list.levels.max >= level);
  return (
    lists.find((list) => list.key === saved) ??
    open.find((list) => progress(list, statuses)[2] < list.quests.length) ??
    open[0] ??
    lists[0]
  );
}

/** Where one quest stands: done, in your log, a chain step to do first, or ready to pick up (and where). */
export type QuestNext =
  | { readonly kind: "done" }
  | { readonly kind: "inLog" }
  | { readonly kind: "step"; readonly step: ChainStep; readonly index: number; readonly total: number }
  | { readonly kind: "pickup"; readonly where: string };

export function questNext(quest: DungeonQuest, statuses: QuestStatuses): QuestNext {
  const status = statusOf(statuses, quest.id);
  if (status === 2) return { kind: "done" };
  if (status === 1) return { kind: "inLog" };
  const chain = quest.chain ?? [];
  const index = chain.findIndex((step) => statusOf(statuses, step.id) !== 2);
  const step = chain[index];
  return step ? { kind: "step", step, index: index + 1, total: chain.length } : { kind: "pickup", where: quest.where };
}

export type NextStep =
  | {
      readonly kind: "visit";
      readonly place: string;
      readonly questNames: readonly string[];
      readonly moreStops: number;
    }
  | { readonly kind: "run"; readonly inLog: number }
  | { readonly kind: "finished"; readonly total: number };

/**
 * What to do next for a dungeon: the first place with something to pick up (a quest, or the next step of its
 * chain), else run the dungeon, else it's done.
 */
export function nextStep(list: DungeonQuestList, stops: readonly QuestStop[], statuses: QuestStatuses): NextStep {
  const [, inLog, done] = progress(list, statuses);
  const visits = new Map<string, string[]>();
  for (const stop of stops)
    for (const quest of stop.quests) {
      const next = questNext(quest, statuses);
      const where = next.kind === "step" ? next.step.where : next.kind === "pickup" ? next.where : undefined;
      const pickup = where === undefined ? undefined : parseWhere(where);
      if (!pickup || pickup.inside) continue;
      const names = visits.get(pickup.place) ?? [];
      names.push(next.kind === "step" ? next.step.name : quest.name);
      visits.set(pickup.place, names);
    }
  const [first] = visits;
  if (first) return { kind: "visit", place: first[0], questNames: first[1], moreStops: visits.size - 1 };
  return done === list.quests.length ? { kind: "finished", total: done } : { kind: "run", inLog };
}
