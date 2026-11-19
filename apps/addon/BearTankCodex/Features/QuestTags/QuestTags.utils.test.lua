local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/QuestTags/QuestTags.utils.lua" })
local Utils = ns.module("QuestTags.utils")

local BY_KEY = { st = { key = "st", hi = 56, color = "60d0c0" }, zf = { key = "zf", hi = 54, color = "e8c070" } }
local TAGS = { [1445] = { "st", false }, [1424] = { "st", true }, [2936] = { "zf", false } }

describe("QuestTags utils", function()
  it("matches titles with or without a level and color", function()
    expect(Utils.isTitle("|cffff8040[53] Yuka Screwspigot|r", "Yuka Screwspigot")).toBeTruthy()
    expect(Utils.isTitle("Yuka Screwspigot", "Yuka Screwspigot")).toBeTruthy()
  end)

  it("does not match objective lines that mention the title", function()
    expect(Utils.isTitle("Speak with Yuka Screwspigot in the Burning Steppes", "Yuka Screwspigot")).toBeFalsy()
    expect(Utils.isTitle("0/5 Bloodpetal Lasher slain", "Larion and Muigin")).toBeFalsy()
  end)

  it("marks dungeon quests and chain steps", function()
    expect(Utils.markFor(TAGS, BY_KEY, 1445, 50, true).chain).toBe(false)
    expect(Utils.markFor(TAGS, BY_KEY, 1424, 50, true).chain).toBe(true)
  end)

  it("skips unknown quests, outleveled dungeons and disabled tags", function()
    expect(Utils.markFor(TAGS, BY_KEY, 999, 50, true)).toBe(nil)
    expect(Utils.markFor(TAGS, BY_KEY, 2936, 55, true)).toBe(nil)
    expect(Utils.markFor(TAGS, BY_KEY, 1445, 50, false)).toBe(nil)
  end)

  it("recolors without changing the visible text", function()
    expect(Utils.recolor("|cffff8040[53] Yuka|r", "60d0c0")).toBe("|cff60d0c0[53] Yuka|r")
  end)
end)
