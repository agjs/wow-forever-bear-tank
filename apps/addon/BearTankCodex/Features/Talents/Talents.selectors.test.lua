local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/Talents/Talents.selectors.lua" })
local Selectors = ns.module("Talents.selectors")
local Text = ns.module("Core.Text")

local DATA = {
  talentOrder = { "ferocity", "ferocity", "thickHide", "naturalist" },
  talents = {
    ferocity = { name = "Ferocity", max = 5, summary = "Cheaper Maul.", tree = "feral" },
    thickHide = { name = "Thick Hide", max = 3, summary = "More armor.", tree = "feral" },
    naturalist = { name = "Naturalist", max = 5, summary = "More damage.", tree = "restoration" },
  },
  talentIcons = { ferocity = "a", thickHide = "b", naturalist = "c" },
}

describe("Talents selectors", function()
  it("gives one point per level from 10", function()
    expect(Selectors.pointsAt(9)).toBe(0)
    expect(Selectors.pointsAt(12)).toBe(3)
    expect(Selectors.pointsAt(70)).toBe(51)
  end)

  it("counts ranks and points per tree", function()
    local ranks = Selectors.ranksAt(DATA.talentOrder, 13)
    expect(ranks).toEqual({ ferocity = 2, thickHide = 1, naturalist = 1 })
    expect(Selectors.treeTotals(ranks, DATA.talents)).toEqual({ balance = 0, feral = 3, restoration = 1 })
  end)

  it("shows this level's talent and what's next", function()
    local text = Text.plain(rowsText(Selectors.rows({ level = 11 }, DATA)))
    expect(text).toContain("This level: Ferocity 2/5")
    expect(text).toContain("Next level: Thick Hide 1/3")
    expect(text).toContain("Level 11: Ferocity 2/5  now")
  end)
end)
