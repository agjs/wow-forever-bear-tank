import type { Checkpoint, RouteStep } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { checkpointIndexAt, routeDuring, routeStepAt, talentsDuring } from "./road.utils.ts";

const checkpoint = (min: number, max: number): Checkpoint => ({
  levels: { min, max },
  title: `${min}`,
  where: "",
  talents: "",
  train: "",
  items: [],
  tips: [],
  doneWhen: "",
});
const step = (min: number, max: number, zones: string): RouteStep => ({
  levels: { min, max },
  zones,
  hub: "",
  how: "",
  notes: "",
  changedInForever: false,
});

const CHECKPOINTS = [checkpoint(10, 15), checkpoint(16, 20)];
const ROUTE = [step(10, 14, "Durotar"), step(14, 18, "Barrens"), step(19, 22, "Stonetalon")];

describe("road utils", () => {
  it("finds your checkpoint, and the last one past the end", () => {
    expect(checkpointIndexAt(15, CHECKPOINTS)).toBe(0);
    expect(checkpointIndexAt(16, CHECKPOINTS)).toBe(1);
    expect(checkpointIndexAt(60, CHECKPOINTS)).toBe(1);
  });

  it("picks the later zone where route steps overlap", () => {
    expect(routeStepAt(14, ROUTE)?.zones).toBe("Barrens");
  });

  it("lists route steps overlapping a checkpoint", () => {
    expect(routeDuring(checkpoint(16, 20), ROUTE).map((s) => s.zones)).toEqual(["Barrens", "Stonetalon"]);
  });

  it("lists each talent taken during a checkpoint once", () => {
    expect(talentsDuring(checkpoint(10, 12), ["a", "a", "b", "c"])).toEqual(["a", "b"]);
  });
});
