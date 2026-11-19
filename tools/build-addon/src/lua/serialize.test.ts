import { describe, expect, it } from "vitest";
import { gameText, luaDataFile, luaString, toLua } from "./serialize.ts";

describe("toLua", () => {
  it("writes scalars", () => {
    expect(toLua(1)).toBe("1");
    expect(toLua(true)).toBe("true");
    expect(toLua(null)).toBe("nil");
  });

  it("escapes quotes, backslashes and WoW's pipe escape", () => {
    expect(luaString('a "b" \\ c | d')).toBe('"a \\"b\\" \\\\ c || d"');
  });

  it("keeps flat arrays on one line", () => {
    expect(toLua([1, "a", false])).toBe('{ 1, "a", false }');
  });

  it("writes objects with identifier, numeric and quoted keys, skipping nil values", () => {
    expect(toLua({ name: "x", 12: 3, "with space": 1, missing: undefined })).toBe(
      '{\n  [12] = 3,\n  name = "x",\n  ["with space"] = 1,\n}',
    );
  });

  it("nests and indents", () => {
    expect(toLua({ list: [{ a: 1 }] })).toBe("{\n  list = {\n    {\n      a = 1,\n    },\n  },\n}");
  });

  it("builds a data file that assigns into the addon namespace", () => {
    const file = luaDataFile({ route: [] });
    expect(file).toContain("local _, ns = ...");
    expect(file).toContain("ns.data.route = {}");
  });
});

describe("gameText", () => {
  it("swaps characters the game's fonts can't draw", () => {
    expect(gameText("2.0× → 2.2×, ≤3s, −1 rage")).toBe("2.0× -> 2.2×, <=3s, -1 rage");
    expect(luaString("a → b")).toBe('"a -> b"');
  });
});
