local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/Professions/Professions.selectors.lua" })
local Selectors = ns.module("Professions.selectors")
local Text = ns.module("Core.Text")

local LW = {
  key = "lw",
  name = "Leatherworking",
  trainers = {
    { skill = 50, cap = 150, what = "Journeyman Leatherworking", where = "Karolek in Orgrimmar." },
    { skill = 125, cap = 225, what = "Expert Leatherworking", where = "Una in Thunder Bluff." },
    { skill = 200, cap = 300, what = "Artisan Leatherworking", where = "Hahrana Ironhide in Camp Mojache." },
  },
  steps = {
    {
      from = 185,
      to = 195,
      craft = "Thick Armor Kit",
      count = 10,
      reagents = { { qty = 5, name = "Thick Leather", itemId = 4304 }, { qty = 1, name = "Silken Thread", itemId = 4291 } },
    },
  },
}

local function ctx(skills, bags)
  return {
    skill = function(name)
      return skills[name]
    end,
    itemCount = function(id)
      return bags[id] or 0
    end,
  }
end

describe("Professions selectors", function()
  it("finds the next rank above your current cap", function()
    expect(Selectors.nextRank(LW.trainers, 225).what).toBe("Artisan Leatherworking")
    expect(Selectors.nextRank(LW.trainers, 300)).toBe(nil)
  end)

  it("scales crafts left from the guide's estimate", function()
    expect(Selectors.craftsLeft(LW.steps[1], 185)).toBe(10)
    expect(Selectors.craftsLeft(LW.steps[1], 190)).toBe(5)
    expect(Selectors.craftsLeft(LW.steps[1], 194)).toBe(1)
  end)

  it("compares materials needed with your bags", function()
    local mats = Selectors.materials(ctx({}, { [4304] = 12 }), LW.steps[1], 5)
    expect(mats[1]).toEqual({ name = "Thick Leather", itemId = 4304, need = 25, have = 12 })
    expect(mats[2].have).toBe(0)
  end)

  it("tells you to learn the next rank when you hit the cap", function()
    local rows = Selectors.rows(ctx({ Leatherworking = { rank = 225, max = 225 } }, {}), { LW })
    local all = {}
    for _, r in ipairs(rows) do
      all[#all + 1] = Text.plain(r.text or "")
    end
    expect(table.concat(all, "\n")).toContain("Learn the next rank now: Artisan Leatherworking (up to 300)")
  end)

  it("shows the current craft with materials", function()
    local rows = Selectors.rows(ctx({ Leatherworking = { rank = 190, max = 225 } }, { [4304] = 30 }), { LW })
    local all = {}
    for _, r in ipairs(rows) do
      all[#all + 1] = Text.plain(r.text or "")
    end
    local text = table.concat(all, "\n")
    expect(text).toContain("Make Thick Armor Kit until 195, about 5 more")
    expect(text).toContain("Thick Leather  30 / 25")
  end)

  it("skips professions you don't have and says so when you have none", function()
    local rows = Selectors.rows(ctx({}, {}), { LW })
    expect(Text.plain(rows[#rows].text)).toContain("None of the guide's professions")
  end)
end)
