import { talentOrder } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { FINAL_RANKS, improves, orderProblems, tankRanksAt } from "./talents.utils.ts";

describe("talent utils", () => {
  it("finds no problems in the tank order", () => {
    expect(orderProblems(talentOrder)).toEqual([]);
  });

  it("reports a talent taken before its row unlocks", () => {
    const problems = orderProblems(["primalBite", ...talentOrder.slice(1)]);
    expect(problems.some((p) => p.includes("row locked"))).toBe(true);
  });

  it("spends all 51 points by 60 and none before 10", () => {
    const total = (ranks: Readonly<Record<string, number>>) => Object.values(ranks).reduce((a, b) => a + b, 0);
    expect(total(FINAL_RANKS)).toBe(51);
    expect(total(tankRanksAt(10))).toBe(1);
  });

  it("names what a talent improves", () => {
    expect(improves("ferocity")).toContain("Maul");
  });
});
