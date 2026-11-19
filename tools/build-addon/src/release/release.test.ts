import { describe, expect, it } from "vitest";
import { readTocVersion } from "./release.ts";

describe("readTocVersion", () => {
  it("reads the version line", () => {
    expect(readTocVersion("## Interface: 16001\n## Version: 2.0.0\n## Title: X\n")).toBe("2.0.0");
  });

  it("fails loudly without a version", () => {
    expect(() => readTocVersion("## Title: X\n")).toThrow("no '## Version:' line");
  });
});
