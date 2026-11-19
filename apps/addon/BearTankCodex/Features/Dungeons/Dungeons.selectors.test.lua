local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/Dungeons/Dungeons.selectors.lua" })
local Selectors = ns.module("Dungeons.selectors")
local Text = ns.module("Core.Text")

local LIST = {
  {
    key = "zf",
    name = "Zul'Farrak",
    lo = 44,
    hi = 54,
    stops = {
      { title = "Gadgetzan, Tanaris", zone = "Tanaris", x = 52, y = 28, quests = { { id = 1, name = "Troll Temper", req = 40, giver = "Trenton" } } },
    },
  },
  {
    key = "st",
    name = "Sunken Temple",
    lo = 50,
    hi = 56,
    stops = {
      {
        title = "Stonard, Swamp of Sorrows",
        zone = "Swamp of Sorrows",
        x = 47,
        y = 54,
        quests = { { id = 1445, name = "The Temple of Atal'Hakkar", horde = true, req = 38, giver = "Fel'zerul" } },
      },
      {
        title = "Ratchet, The Barrens",
        zone = "The Barrens",
        x = 62,
        y = 38,
        quests = { { id = 4146, name = "Zapper Fuel", horde = true, req = 47, giver = "Liv Rizzlefix" } },
      },
      {
        title = "Inside Sunken Temple",
        inside = true,
        quests = { { id = 3373, name = "The Essence of Eranikus", req = 48, giver = "Essence of Eranikus", where = "drops inside" } },
      },
    },
  },
}

local function ctx(level, statuses)
  return {
    level = level,
    questStatus = function(id)
      return statuses[id] or 0
    end,
  }
end

describe("Dungeons selectors", function()
  it("counts quest progress", function()
    local c = Selectors.counts(ctx(50, { [1445] = 2, [3373] = 1 }), LIST[2])
    expect(c).toEqual({ todo = 1, inLog = 1, done = 1, total = 3 })
  end)

  it("defaults to the first dungeon you haven't outleveled with quests left", function()
    expect(Selectors.defaultKey(ctx(55, {}), LIST)).toBe("st")
    expect(Selectors.defaultKey(ctx(50, { [1] = 2 }), LIST)).toBe("st")
    expect(Selectors.defaultKey(ctx(50, {}), LIST)).toBe("zf")
  end)

  it("sends you to the first stop with quests left", function()
    local text = Text.plain(Selectors.nextStep(ctx(50, { [1445] = 2 }), LIST[2]))
    expect(text).toBe("Go to Ratchet, The Barrens and pick up Zapper Fuel.")
  end)

  it("says to run the dungeon once everything outside is picked up", function()
    local text = Text.plain(Selectors.nextStep(ctx(50, { [1445] = 1, [4146] = 1 }), LIST[2]))
    expect(text).toContain("Run Sunken Temple and finish the 2 quests in your log")
  end)

  it("renders a pager, stops with map pin actions, and quest lines", function()
    local rows, key = Selectors.rows(ctx(50, {}), LIST, "st")
    expect(key).toBe("st")
    expect(rows[1].kind).toBe("pager")
    expect(rows[1].text).toBe("Sunken Temple")
    local pins, lines = 0, 0
    for _, r in ipairs(rows) do
      if r.action and r.action.type == "waypoint" then
        pins = pins + 1
      end
      if r.kind == "line" then
        lines = lines + 1
      end
    end
    expect(pins).toBe(2)
    expect(lines).toBe(3)
  end)

  it("hides quest details for finished quests", function()
    local rows = Selectors.rows(ctx(50, { [1445] = 2, [4146] = 2, [3373] = 2 }), LIST, "st")
    for _, r in ipairs(rows) do
      if r.kind == "note" and r.indent == 2 then
        error("finished quest still shows details: " .. r.text)
      end
    end
  end)

  it("flags quests above your level", function()
    local rows = Selectors.rows(ctx(45, {}), LIST, "st")
    local found = false
    for _, r in ipairs(rows) do
      if r.kind == "line" and Text.plain(r.text):find("level 47", 1, true) then
        found = true
      end
    end
    expect(found).toBeTruthy()
  end)
end)
