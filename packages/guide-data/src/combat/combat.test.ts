import { describe, expect, it } from "vitest";
import { talents } from "../talents/index.ts";
import { emergencyButtons, priorityLists, spells } from "./combat.data.ts";

describe("rotation priority lists", () => {
  const steps = Object.values(priorityLists).flat();

  it("only name spells with an icon and spell ID", () => {
    for (const step of [...steps, ...emergencyButtons]) expect(spells[step.spell], step.spell).toBeDefined();
  });

  it("only unlock through talents that exist", () => {
    for (const { unlock } of steps)
      for (const key of [unlock.talent, unlock.onlyBefore]) if (key) expect(talents[key], key).toBeDefined();
  });
});
