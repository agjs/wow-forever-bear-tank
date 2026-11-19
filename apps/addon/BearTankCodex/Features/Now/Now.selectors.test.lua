local ns = loadAddon({
  "Core/Namespace.lua",
  "Core/Text.lua",
  "Features/Dungeons/Dungeons.selectors.lua",
  "Features/Now/Now.selectors.lua",
})
local Selectors = ns.module("Now.selectors")
local Dungeons = ns.module("Dungeons.selectors")
local Text = ns.module("Core.Text")

local DATA = {
  route = {
    { lo = 45, hi = 47, zones = "Feralas", hub = "Camp Mojache", how = "Fly there." },
    { lo = 47, hi = 49, zones = "The Hinterlands", hub = "Revantusk Village", how = "Fly there." },
    { lo = 49, hi = 51, zones = "Searing Gorge", hub = "Thorium Point", how = "Fly there." },
  },
  trainer = {
    { level = 48, name = "Claw", rank = 4, spellId = 100, cost = 22000 },
    { level = 48, name = "Regrowth", rank = 7, spellId = 101, cost = 22000 },
    { level = 50, name = "Maul", rank = 6, spellId = 102, cost = 23000 },
  },
  talentOrder = { "ferocity", "ferocity", "thickHide" },
  talents = {
    ferocity = { name = "Ferocity", max = 5, summary = "Cheaper Maul." },
    thickHide = { name = "Thick Hide", max = 3, summary = "More armor." },
  },
  dungeons = { { key = "st", name = "Sunken Temple", lo = 50, hi = 56 }, { key = "rfc", name = "Ragefire Chasm", lo = 13, hi = 18 } },
  dungeonQuests = {
    { key = "st", name = "Sunken Temple", lo = 50, hi = 56, stops = { { title = "Stonard", quests = { { id = 1, name = "A", req = 38 } } } } },
  },
}

local function ctx(level, known, statuses)
  return {
    level = level,
    zone = "",
    isSpellKnown = function(id)
      return known[id] == true
    end,
    questStatus = function(id)
      return (statuses or {})[id] or 0
    end,
  }
end

describe("Now selectors", function()
  it("picks the later route step where steps overlap", function()
    local step, nextStep = Selectors.routeFor(DATA.route, 47)
    expect(step.zones).toBe("The Hinterlands")
    expect(nextStep.zones).toBe("Searing Gorge")
  end)

  it("lists trainer spells you can learn and haven't learned", function()
    local tr = Selectors.trainer(ctx(49, { [100] = true }), DATA.trainer)
    expect(#tr.now).toBe(1)
    expect(tr.now[1].name).toBe("Regrowth")
    expect(tr.cost).toBe(22000)
    expect(tr.nextLevel).toBe(50)
  end)

  it("gives the guide's talent point and rank for a level", function()
    expect(Selectors.talentAt(DATA.talentOrder, DATA.talents, 11)).toEqual({
      key = "ferocity",
      name = "Ferocity",
      rank = 2,
      max = 5,
      summary = "Cheaper Maul.",
    })
    expect(Selectors.talentAt(DATA.talentOrder, DATA.talents, 9)).toBe(nil)
  end)

  it("only shows dungeons near your level, with quest progress when known", function()
    local ds = Selectors.dungeonsFor(ctx(50, {}), DATA.dungeons, DATA.dungeonQuests, Dungeons.counts)
    expect(#ds).toBe(1)
    expect(ds[1].counts.todo).toBe(1)
  end)

  it("renders every section with an action to open a dungeon", function()
    local rows = Selectors.rows(ctx(50, {}), DATA, Dungeons.counts)
    local text, opens = {}, 0
    for _, r in ipairs(rows) do
      text[#text + 1] = Text.plain(r.text or "")
      if r.action and r.action.type == "openDungeon" then
        opens = opens + 1
      end
    end
    local all = table.concat(text, "\n")
    expect(all).toContain("Level 50: what to do now")
    expect(all).toContain("Searing Gorge")
    expect(all).toContain("3 spells to learn")
    expect(all).toContain("Sunken Temple")
    expect(opens).toBe(1)
  end)
end)
