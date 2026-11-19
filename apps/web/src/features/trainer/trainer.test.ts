import type { TrainerSpell } from "@btc/guide-data";
import { describe, expect, it } from "vitest";
import { costOfNeeded, nextTrainerLevel, spellsAt, trainerLevels } from "./trainer.utils.ts";

const spell = (name: string, cost: number, fromQuest = false): TrainerSpell => ({
  level: 20,
  name,
  rank: 1,
  spellId: 1,
  cost,
  fromQuest,
});

describe("trainer utils", () => {
  it("lists trainer levels in order from 10", () => {
    expect(trainerLevels[0]).toBeGreaterThanOrEqual(10);
    expect([...trainerLevels].sort((a, b) => a - b)).toEqual(trainerLevels);
  });

  it("finds the next visit after a level", () => {
    const level = trainerLevels[0] ?? 10;
    expect(nextTrainerLevel(level)).toBe(trainerLevels[1]);
    expect(nextTrainerLevel(60)).toBeUndefined();
  });

  it("only counts spells you need and pay for", () => {
    expect(costOfNeeded([spell("Maul", 100), spell("Bear Form", 0, true)])).toBe(100);
  });

  it("filters spells by level", () => {
    expect(spellsAt(20, [spell("Maul", 1)])).toHaveLength(1);
    expect(spellsAt(22, [spell("Maul", 1)])).toHaveLength(0);
  });
});
