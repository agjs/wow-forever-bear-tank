-- Guides selectors (pure): the tank cheat sheet for a dungeon: bosses and how to tank them, the route, the dangers.
local _, ns = ...
local Selectors = ns.module("Guides.selectors")
local Text = ns.module("Core.Text")

-- The saved dungeon, else the first one for your level, else the first one you haven't outleveled.
function Selectors.pick(guides, level, saved)
  for _, g in ipairs(guides) do
    if g.key == saved then
      return g
    end
  end
  for _, g in ipairs(guides) do
    if level >= g.lo - 1 and level <= g.hi then
      return g
    end
  end
  for _, g in ipairs(guides) do
    if g.hi >= level then
      return g
    end
  end
  return guides[#guides]
end

local function hasQuests(dungeonQuests, key)
  for _, d in ipairs(dungeonQuests or {}) do
    if d.key == key then
      return true
    end
  end
  return false
end

function Selectors.rows(ctx, data, saved)
  local g = Selectors.pick(data.dungeonGuides, ctx.level, saved)
  local fits = ctx.level >= g.lo - 1 and ctx.level <= g.hi
  local rows = {
    {
      kind = "pager",
      text = g.name,
      sub = "Levels " .. g.lo .. "-" .. g.hi .. (fits and Text.color("green", "  your level") or "") .. ". " .. g.where,
      prev = { type = "guide", delta = -1 },
      next = { type = "guide", delta = 1 },
    },
  }
  if g.note and g.note ~= "" then
    rows[#rows + 1] = { kind = "card", title = "In WoW: Forever", rows = { { kind = "line", text = g.note } } }
  end
  if hasQuests(data.dungeonQuests, g.key) then
    rows[#rows + 1] = {
      kind = "line",
      text = Text.color("gold", "Open this dungeon's quests") .. Text.color("muted", "  (pick them up before you go)"),
      action = { type = "openDungeon", key = g.key },
    }
    rows[#rows + 1] = { kind = "gap" }
  end

  if #g.bosses > 0 then
    local bosses = {}
    for i, b in ipairs(g.bosses) do
      if i > 1 then
        bosses[#bosses + 1] = { kind = "divider" }
      end
      bosses[#bosses + 1] = { kind = "heading", text = Text.color("gold", i .. ".  ") .. b.name }
      if #b.abilities > 0 then
        bosses[#bosses + 1] = { kind = "note", text = Text.color("muted", "Abilities: " .. table.concat(b.abilities, ", ") .. ".") }
      end
      bosses[#bosses + 1] = { kind = "line", text = b.tank }
    end
    rows[#rows + 1] = { kind = "card", title = "Bosses", right = Text.color("muted", Text.plural(#g.bosses, "boss", "bosses")), rows = bosses }
  end

  if #g.route > 0 then
    local route = {}
    for i, line in ipairs(g.route) do
      route[#route + 1] = { kind = "line", text = Text.color("gold", i .. ".  ") .. line }
    end
    rows[#rows + 1] = { kind = "card", title = "Tank route", rows = route }
  end

  if #g.dangers > 0 then
    local dangers = {}
    for _, line in ipairs(g.dangers) do
      dangers[#dangers + 1] = { kind = "line", text = Text.ICONS.warning .. " " .. line }
    end
    rows[#rows + 1] = { kind = "card", title = "Watch out", rows = dangers }
  end
  return rows, g.key
end
