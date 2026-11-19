local ns = loadAddon({
  "Core/Namespace.lua",
  "Core/Text.lua",
  "Features/Talents/Talents.selectors.lua",
  "Features/Rotation/Rotation.selectors.lua",
})
local Selectors = ns.module("Rotation.selectors")
local Text = ns.module("Core.Text")

local step = function(spell, unlock)
  local s = { spell = spell, icon = "x", spellId = 1, text = spell .. " text" }
  for k, v in pairs(unlock or {}) do
    s[k] = v
  end
  return s
end

local DATA = {
  talentOrder = { "ferocity", "lacerate" },
  rotation = {
    single = { step("Lacerate", { talent = "lacerate" }), step("Swipe", { level = 16, onlyBefore = "lacerate" }), step("Maul", { level = 10 }) },
    cleave = {},
    aoe = { step("Swipe", { level = 16 }) },
    cat = { step("Claw", { level = 20 }) },
    prePull = { "Cast Mark of the Wild." },
    catNote = { "Questing alone." },
    emergency = { { spell = "Barkskin", icon = "x", spellId = 2, text = "Less damage.", level = 44 } },
  },
}

describe("Rotation selectors", function()
  it("fades buttons you don't have yet, with the level they unlock", function()
    local text = Text.plain(rowsText(Selectors.rows({ level = 10 }, DATA, "single")))
    expect(text).toContain("1.  Lacerate  at level 11")
    expect(text).toContain("Barkskin  at level 44")
  end)

  it("drops a button once the talent that replaces it is taken", function()
    local text = Text.plain(rowsText(Selectors.rows({ level = 20 }, DATA, "single")))
    expect(text:find("Swipe", 1, true)).toBe(nil)
    expect(text).toContain("2.  Maul")
  end)

  it("switches lists and shows the Cat Form note", function()
    local text = Text.plain(rowsText(Selectors.rows({ level = 30 }, DATA, "cat")))
    expect(text).toContain("Questing alone.")
    expect(text).toContain("1.  Claw")
  end)
end)
