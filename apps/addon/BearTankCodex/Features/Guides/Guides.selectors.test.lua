local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/Guides/Guides.selectors.lua" })
local Selectors = ns.module("Guides.selectors")
local Text = ns.module("Core.Text")

local guide = function(key, lo, hi)
  return {
    key = key,
    name = key,
    lo = lo,
    hi = hi,
    where = "Somewhere",
    note = "",
    route = { "Go left." },
    bosses = { { name = "Boss", tank = "Face him away.", abilities = { "Cleave" } } },
    dangers = { "Pats." },
  }
end
local DATA = { dungeonGuides = { guide("rfc", 13, 18), guide("st", 50, 56), guide("brd", 52, 60) }, dungeonQuests = { { key = "st" } } }

describe("Guides selectors", function()
  it("opens the saved dungeon, else the first for your level", function()
    expect(Selectors.pick(DATA.dungeonGuides, 50, nil).key).toBe("st")
    expect(Selectors.pick(DATA.dungeonGuides, 50, "brd").key).toBe("brd")
    expect(Selectors.pick(DATA.dungeonGuides, 40, nil).key).toBe("st")
  end)

  it("shows bosses, route and dangers, and links to the dungeon's quests", function()
    local rows = Selectors.rows({ level = 50 }, DATA, nil)
    local text = Text.plain(rowsText(rows))
    expect(text).toContain("1.  Boss")
    expect(text).toContain("Face him away.")
    expect(text).toContain("1.  Go left.")
    expect(text).toContain("Open this dungeon's quests")
  end)
end)
