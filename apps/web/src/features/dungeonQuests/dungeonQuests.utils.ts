import type { DungeonQuestList, QuestStop } from "@btc/guide-data";

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

export type NextStep =
  | {
      readonly kind: "pickup";
      readonly stop: QuestStop;
      readonly questNames: readonly string[];
      readonly moreStops: number;
    }
  | { readonly kind: "run"; readonly inLog: number }
  | { readonly kind: "finished"; readonly total: number };

/** What to do next for a dungeon: the first stop with quests left to pick up, else run it, else it's done. */
export function nextStep(list: DungeonQuestList, stops: readonly QuestStop[], statuses: QuestStatuses): NextStep {
  const [, inLog, done] = progress(list, statuses);
  const toVisit = stops.filter(
    (stop) => !stop.pickup.inside && stop.quests.some((q) => statusOf(statuses, q.id) === 0),
  );
  const [first] = toVisit;
  if (first)
    return {
      kind: "pickup",
      stop: first,
      questNames: first.quests.filter((q) => statusOf(statuses, q.id) === 0).map((q) => q.name),
      moreStops: toVisit.length - 1,
    };
  return done === list.quests.length ? { kind: "finished", total: done } : { kind: "run", inLog };
}
