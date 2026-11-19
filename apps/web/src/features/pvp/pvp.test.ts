import { describe, expect, it } from "vitest";
import { counterName, splitThreat } from "./pvp.utils.ts";

describe("pvp utils", () => {
  it("splits threats into ability, note and text", () => {
    expect(splitThreat("Polymorph (level 8): turns you into a sheep")).toEqual({
      ability: "Polymorph",
      note: "level 8",
      text: "turns you into a sheep",
    });
    expect(splitThreat("Frost Nova: roots you")).toEqual({ ability: "Frost Nova", text: "roots you" });
    expect(splitThreat("They kite a lot.")).toEqual({ text: "They kite a lot." });
  });

  it("reads the spell name of a counter", () => {
    expect(counterName("Bash: stun a healer")).toBe("Bash");
    expect(counterName("Faerie Fire (Feral)")).toBe("Faerie Fire");
  });
});
