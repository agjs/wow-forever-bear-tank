import { type Checkpoint, checkpoints, type LevelRange, type RouteStep, route, talentOrder } from "@btc/guide-data";
import { inRange, MIN_LEVEL } from "../../lib/level/index.ts";

const overlaps = (a: LevelRange, b: LevelRange) => a.min <= b.max && b.min <= a.max;

/** The checkpoint you're in: the first one that hasn't ended below your level. */
export function checkpointIndexAt(level: number, list: readonly Checkpoint[] = checkpoints): number {
  const index = list.findIndex((checkpoint) => level <= checkpoint.levels.max);
  return index < 0 ? list.length - 1 : index;
}

/** Where to quest at a level (the latest matching step when steps overlap). */
export const routeStepAt = (level: number, steps: readonly RouteStep[] = route): RouteStep | undefined =>
  steps.filter((step) => inRange(step.levels, level)).at(-1);

export const nextRouteStep = (step: RouteStep, steps: readonly RouteStep[] = route): RouteStep | undefined =>
  steps[steps.indexOf(step) + 1];

export const routeDuring = (checkpoint: Checkpoint, steps: readonly RouteStep[] = route): RouteStep[] =>
  steps.filter((step) => overlaps(step.levels, checkpoint.levels));

/** Talents the tank order takes during a checkpoint, each once. */
export const talentsDuring = (checkpoint: Checkpoint, order: readonly string[] = talentOrder): string[] => [
  ...new Set(order.filter((_, i) => inRange(checkpoint.levels, i + MIN_LEVEL))),
];
