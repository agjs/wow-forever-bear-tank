local ns = loadAddon({ "Core/Namespace.lua", "Core/Text.lua", "Features/Gear/Gear.selectors.lua" })
local Selectors = ns.module("Gear.selectors")
local Text = ns.module("Core.Text")

local item = function(id, name, slot, level, ilvl)
  return { itemId = id, name = name, slot = slot, level = level, ilvl = ilvl, stats = "", source = "Somewhere", icon = "x", quality = 2 }
end
local GEAR = {
  item(1, "Old helm", "Head", 20, 25),
  item(2, "Good helm", "Head", 30, 35),
  item(3, "Weak helm", "Head", 40, 30),
  item(4, "Great helm", "Head", 45, 50),
  item(5, "Ring A", "Ring", 20, 25),
  item(6, "Ring B", "Ring", 22, 27),
}

describe("Gear selectors", function()
  it("wears the best item you can use and skips upgrades that aren't better", function()
    local plan = Selectors.slotPlan(GEAR, "Head", 41)
    expect(plan.now[1].name).toBe("Good helm")
    expect(plan.next.name).toBe("Great helm")
  end)

  it("fills both ring slots", function()
    local plan = Selectors.slotPlan(GEAR, "Ring", 30)
    expect(#plan.now).toBe(2)
  end)

  it("says whether you wear an item or have it in your bags", function()
    local ctx = {
      level = 41,
      isEquipped = function(id)
        return id == 2
      end,
      itemCount = function(id)
        return id == 6 and 1 or 0
      end,
    }
    local text = Text.plain(rowsText(Selectors.rows(ctx, { gear = GEAR, enchants = {} })))
    expect(text).toContain("Head  Good helm  wearing it")
    expect(text).toContain("Ring  Ring B  in your bags")
    expect(text).toContain("Head  Great helm  level 45")
  end)
end)
