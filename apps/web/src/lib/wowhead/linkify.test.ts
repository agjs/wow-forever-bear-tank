import { describe, expect, it } from "vitest";
import { createLinker, linkify } from "./linkify.ts";
import { guideLinks } from "./wowhead.links.ts";

const linker = createLinker({ "Bear Form": "spell=5487", "Dire Bear Form": "spell=9634", Maul: "spell=9881" });

describe("linkify", () => {
  it("links the longest matching name", () => {
    expect(linkify("Shift to Dire Bear Form.", linker)).toEqual([
      { text: "Shift to " },
      { text: "Dire Bear Form", path: "spell=9634" },
      { text: "." },
    ]);
  });

  it("links only the first mention and only whole words", () => {
    const parts = linkify("Maul, then Maul again. Mauler is not a spell.", linker);
    expect(parts.filter((p) => p.path)).toEqual([{ text: "Maul", path: "spell=9881" }]);
    expect(parts.map((p) => p.text).join("")).toBe("Maul, then Maul again. Mauler is not a spell.");
  });

  it("returns the text unchanged when nothing matches", () => {
    expect(linkify("Nothing here", linker)).toEqual([{ text: "Nothing here" }]);
  });
});

describe("guide links", () => {
  it("cover rotation spells, talents and extra items", () => {
    expect(guideLinks.Maul).toBe("spell=9881");
    expect(guideLinks["Primal Bite"]).toMatch(/^spell=/);
    expect(guideLinks["Wolfshead Helm"]).toBe("item=8345");
  });
});
