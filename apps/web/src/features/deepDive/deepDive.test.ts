import { describe, expect, it } from "vitest";
import { armorReduction, derivedStats } from "./deepDive.utils.ts";

describe("derivedStats", () => {
  it("lowers rage costs with Ferocity and waits for Primal Bite", () => {
    const stats = derivedStats(30, { ferocity: 5 });
    const value = (name: string) => stats.find((s) => s.name === name)?.value;
    expect(value("Maul cost")).toBe("10 rage");
    expect(value("Primal Bite damage")).toBe("level 40");
  });
});

describe("armorReduction", () => {
  it("multiplies gear armor by the form and adds agility and Thick Hide", () => {
    const result = armorReduction({
      gearArmor: 1000,
      agility: 100,
      formMultiplier: 4.6,
      enemyLevel: 60,
      thickHide: true,
    });
    expect(result.armor).toBeCloseTo(1000 * 4.6 + 200 + 180 * 4.6);
    expect(result.reduction).toBeCloseTo(result.armor / (result.armor + 85 * 60 + 400));
  });

  it("caps damage reduction at 75%", () => {
    const result = armorReduction({
      gearArmor: 100000,
      agility: 0,
      formMultiplier: 4.6,
      enemyLevel: 60,
      thickHide: false,
    });
    expect(result.reduction).toBe(0.75);
    expect(result.effectiveHealth).toBe(4);
  });

  it("gives no Thick Hide bonus in caster form", () => {
    const result = armorReduction({ gearArmor: 1000, agility: 0, formMultiplier: 1, enemyLevel: 60, thickHide: true });
    expect(result.armor).toBe(1000);
  });
});
