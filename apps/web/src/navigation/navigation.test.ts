import { describe, expect, it } from "vitest";
import { SECTIONS } from "./navigation.constants.ts";
import { pageHref, sectionForLegacyHash } from "./navigation.utils.ts";

describe("navigation", () => {
  it("builds page URLs under the site base with a trailing slash", () => {
    expect(pageHref("/wow-forever-bear-tank", "")).toBe("/wow-forever-bear-tank/");
    expect(pageHref("/wow-forever-bear-tank/", "dungeons", "st")).toBe("/wow-forever-bear-tank/dungeons/#st");
  });

  it("maps every tab of the original site to a page", () => {
    expect(sectionForLegacyHash("#dq")?.slug).toBe("dungeon-quests");
    expect(sectionForLegacyHash("deep")?.slug).toBe("deep-dive");
    expect(new Set(SECTIONS.map((s) => s.legacyHash)).size).toBe(SECTIONS.length);
  });
});
