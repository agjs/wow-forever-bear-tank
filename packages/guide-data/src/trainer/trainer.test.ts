import { describe, expect, it } from "vitest";
import { priorityLists, spells } from "../combat/index.ts";
import { abilities, checkpoints } from "../leveling/index.ts";
import { secondSpec } from "../talents/index.ts";
import { removedSpells, trainerSpells } from "./trainer.data.ts";

describe("spells removed from WoW: Forever", () => {
  const removed = removedSpells.map((s) => s.name);

  it("are not taught by the trainer or listed as abilities", () => {
    for (const name of removed) {
      expect(
        trainerSpells.some((s) => s.name === name),
        name,
      ).toBe(false);
      expect(
        abilities.some((a) => a.name === name),
        name,
      ).toBe(false);
      expect(spells[name], name).toBeUndefined();
    }
  });

  it("are not in any rotation or mentioned in guide text", () => {
    const text = JSON.stringify([priorityLists, checkpoints, secondSpec]);
    for (const name of removed) expect(text.includes(name), name).toBe(false);
  });
});
