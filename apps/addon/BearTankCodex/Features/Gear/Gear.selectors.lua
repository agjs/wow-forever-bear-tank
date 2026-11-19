-- Gear selectors (pure): for each slot, the best item from the guide you can wear at your level (and whether you
-- already wear it), the next upgrade, and the enchants for your level band.
local _, ns = ...
local Selectors = ns.module("Gear.selectors")
local Text = ns.module("Core.Text")

Selectors.SLOTS = {
  "Head",
  "Neck",
  "Shoulder",
  "Back",
  "Chest",
  "Wrist",
  "Hands",
  "Waist",
  "Legs",
  "Feet",
  "Ring",
  "Trinket",
  "Weapon",
  "Idol",
}

-- Item quality text colors (poor .. legendary), like the game's.
local QUALITY = { [0] = "9d9d9d", [1] = "ffffff", [2] = "1eff00", [3] = "0070dd", [4] = "a335ee", [5] = "ff8000" }

-- You wear two rings and two trinkets.
local function wornIn(slot)
  return (slot == "Ring" or slot == "Trinket") and 2 or 1
end

-- { now = { items you can wear, best first }, next = the next upgrade above the weakest of them }
function Selectors.slotPlan(gear, slot, level)
  local usable, later = {}, {}
  for _, g in ipairs(gear) do
    if g.slot == slot then
      if g.level <= level then
        usable[#usable + 1] = g
      else
        later[#later + 1] = g
      end
    end
  end
  table.sort(usable, function(a, b)
    return a.ilvl > b.ilvl
  end)
  local now = {}
  for i = 1, math.min(wornIn(slot), #usable) do
    now[i] = usable[i]
  end
  local floor = now[#now] and now[#now].ilvl or 0
  table.sort(later, function(a, b)
    return a.level < b.level
  end)
  local nextItem
  for _, g in ipairs(later) do
    if g.ilvl > floor then
      nextItem = g
      break
    end
  end
  return { now = now, next = nextItem }
end

function Selectors.enchantBand(bands, level)
  for _, band in ipairs(bands) do
    if level >= band.lo and level <= band.hi then
      return band
    end
  end
  return bands[#bands]
end

local function itemName(g)
  return Text.color(QUALITY[g.quality] or "ffffff", g.name)
end

local function wornStatus(ctx, g)
  if ctx.isEquipped and ctx.isEquipped(g.itemId) then
    return Text.color("green", "wearing it")
  end
  if ctx.itemCount and ctx.itemCount(g.itemId) > 0 then
    return Text.color("yellow", "in your bags")
  end
  return Text.color("muted", "item level " .. g.ilvl)
end

function Selectors.rows(ctx, data)
  local wearing, total = 0, 0
  local now, upgrades = {}, {}
  for _, slot in ipairs(Selectors.SLOTS) do
    local plan = Selectors.slotPlan(data.gear, slot, ctx.level)
    if #plan.now == 0 then
      now[#now + 1] = {
        kind = "line",
        text = Text.color("muted", slot .. ": nothing from this guide yet. Wear your best quest reward."),
      }
    end
    for _, g in ipairs(plan.now) do
      total = total + 1
      if ctx.isEquipped and ctx.isEquipped(g.itemId) then
        wearing = wearing + 1
      end
      now[#now + 1] = {
        kind = "line",
        icon = Text.icon(g.icon),
        iconSize = 26,
        text = Text.color("muted", slot .. "  ") .. itemName(g),
        hint = (g.stats ~= "" and (g.stats .. ". ") or "") .. g.source,
        right = wornStatus(ctx, g),
        tooltip = { item = g.itemId },
      }
    end
    if plan.next then
      local g = plan.next
      upgrades[#upgrades + 1] = {
        kind = "line",
        icon = Text.icon(g.icon),
        iconSize = 26,
        text = Text.color("muted", slot .. "  ") .. itemName(g),
        hint = g.source,
        right = Text.color("gold", "level " .. g.level),
        tooltip = { item = g.itemId },
      }
    end
  end

  local rows = {
    {
      kind = "title",
      text = "Gear",
      sub = "The best item from this guide for each slot at your level. Hover an item to see it.",
    },
    {
      kind = "tiles",
      tiles = {
        {
          label = "Wearing",
          value = wearing .. " of " .. total,
          sub = "of the guide's best items for your level",
          icon = Text.icon("inv_chest_leather_04"),
        },
        {
          label = "Upgrades ahead",
          value = Text.plural(#upgrades, "slot"),
          sub = "with a better item at a later level",
          icon = Text.icon("inv_misc_bag_10"),
        },
      },
    },
    { kind = "card", title = "Wear now", rows = now },
  }
  if #upgrades > 0 then
    rows[#rows + 1] = { kind = "card", title = "Next upgrades", rows = upgrades }
  end

  local band = Selectors.enchantBand(data.enchants or {}, ctx.level)
  if band then
    local enchants = {}
    for _, e in ipairs(band.choices) do
      enchants[#enchants + 1] = {
        kind = "line",
        text = Text.color("muted", e.slot .. "  ") .. Text.color("white", e.name) .. (e.kit and Text.color("blue", "  armor kit") or ""),
        hint = e.effect .. ". " .. e.how,
        tooltip = (e.spellId and { spell = e.spellId }) or (e.itemId and { item = e.itemId }) or nil,
      }
    end
    rows[#rows + 1] = { kind = "card", title = "Enchants for levels " .. band.lo .. "-" .. band.hi, rows = enchants }
  end
  return rows
end
