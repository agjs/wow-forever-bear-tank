-- Integration: load the real TOC against the mocked client, then drive it like a player would.
package.path = "./tools/?.lua;" .. package.path
local Mock = require("wow-mock")

local game = {
  level = 50,
  known = {},
  quests = { [3380] = 2, [3446] = 1 },
  skills = {
    { name = "Leatherworking", rank = 190, maxRank = 225 },
    { name = "Cooking", rank = 300, maxRank = 300 },
  },
  bags = { [4304] = 30 },
}
Mock.install(game)

local ns = Mock.loadToc("BearTankCodex/", "BearTankCodex")
local Text = ns.module("Core.Text")

local function plain()
  return Text.plain(Mock.visibleText())
end

describe("Addon integration", function()
  it("loads every file in TOC order and greets the player", function()
    Mock.fire("ADDON_LOADED", "BearTankCodex")
    expect(Mock.registry.printed[#Mock.registry.printed]).toContain("version " .. ns.version .. " loaded")
    expect(type(SlashCmdList.BEARTANKCODEX)).toBe("function")
  end)

  it("sets up without errors (every event it listens to exists in the Forever client)", function()
    expect(#Mock.registry.errors).toBe(0)
  end)

  it("opens the Now tab with route, trainer and dungeons", function()
    SlashCmdList.BEARTANKCODEX("now")
    local text = plain()
    expect(text).toContain("Level 50: what to do now")
    expect(text).toContain("Where to quest")
    expect(text).toContain("Druid trainer")
    expect(text).toContain("Sunken Temple")
  end)

  it("shows professions with materials from the bags", function()
    SlashCmdList.BEARTANKCODEX("prof")
    local text = plain()
    expect(text).toContain("Leatherworking  190 / 225")
    expect(text).toContain("Thick Leather  30 / 25")
    expect(text).toContain("Cooking  300 / 300")
    expect(text).toContain("Maxed out.")
  end)

  it("opens a dungeon by name with live quest status", function()
    SlashCmdList.BEARTANKCODEX("sunken")
    local text = plain()
    expect(text).toContain("Sunken Temple")
    expect(text).toContain("The Sunken Temple  Horde  done")
    expect(text).toContain("Into the Depths  in your log")
  end)

  it("re-renders when quests change", function()
    game.quests[3446] = 2
    Mock.fire("QUEST_TURNED_IN")
    expect(plain()).toContain("Into the Depths  done")
  end)

  it("adds a minimap button that opens the window and can be hidden", function()
    local button = _G.BearTankCodexMinimapButton
    expect(button ~= nil).toBe(true)
    local window = _G.BearTankCodexFrame
    local wasShown = window._shown
    button._scripts.OnClick(button)
    expect(window._shown).toBe(not wasShown)
    SlashCmdList.BEARTANKCODEX("minimap")
    expect(BearTankCodexDB.minimapHidden).toBe(true)
    SlashCmdList.BEARTANKCODEX("minimap")
    expect(BearTankCodexDB.minimapHidden).toBe(false)
  end)

  it("toggles quest log colors", function()
    SlashCmdList.BEARTANKCODEX("tags")
    expect(BearTankCodexDB.questTags).toBe(false)
    SlashCmdList.BEARTANKCODEX("tags")
    expect(BearTankCodexDB.questTags).toBe(true)
  end)
end)
