-- Talents selectors (pure): the guide's tank build at your level. One point per level from 10 to 60.
local _, ns = ...
local Selectors = ns.module("Talents.selectors")
local Text = ns.module("Core.Text")

Selectors.FIRST_LEVEL = 10
Selectors.POINTS_AT_60 = 51
local UPCOMING = 10
local TREES = { { "balance", "Balance" }, { "feral", "Feral Combat" }, { "restoration", "Restoration" } }

function Selectors.pointsAt(level)
  return math.max(0, math.min(Selectors.POINTS_AT_60, level - Selectors.FIRST_LEVEL + 1))
end

-- Ranks per talent after the guide's first `points` points.
function Selectors.ranksAfter(order, points)
  local ranks = {}
  for i = 1, math.min(points, #order) do
    local key = order[i]
    ranks[key] = (ranks[key] or 0) + 1
  end
  return ranks
end

function Selectors.ranksAt(order, level)
  return Selectors.ranksAfter(order, Selectors.pointsAt(level))
end

-- Points per tree for a set of ranks.
function Selectors.treeTotals(ranks, talents)
  local totals = { balance = 0, feral = 0, restoration = 0 }
  for key, rank in pairs(ranks) do
    local t = talents[key]
    if t and totals[t.tree] then
      totals[t.tree] = totals[t.tree] + rank
    end
  end
  return totals
end

local function pickAt(order, talents, level)
  local index = level - Selectors.FIRST_LEVEL + 1
  local key = order[index]
  if not key then
    return nil
  end
  local rank = 0
  for i = 1, index do
    if order[i] == key then
      rank = rank + 1
    end
  end
  local t = talents[key] or { name = key, max = rank, summary = "" }
  return { key = key, name = t.name, rank = rank, max = t.max, summary = t.summary }
end

local function totalsText(totals)
  local parts = {}
  for _, tree in ipairs(TREES) do
    parts[#parts + 1] = totals[tree[1]] .. " " .. tree[2]
  end
  return table.concat(parts, ", ")
end

function Selectors.rows(ctx, data)
  local order, talents, icons = data.talentOrder, data.talents, data.talentIcons or {}
  local level = ctx.level
  local points = Selectors.pointsAt(level)
  local now, nextPick = pickAt(order, talents, level), pickAt(order, talents, level + 1)
  local final = Selectors.treeTotals(Selectors.ranksAfter(order, Selectors.POINTS_AT_60), talents)
  local rows = {
    {
      kind = "title",
      text = "Talents",
      sub = "The guide's tank build. At 60 it's " .. totalsText(final) .. ".",
    },
    {
      kind = "tiles",
      tiles = {
        {
          label = "Points spent",
          value = points .. " of " .. Selectors.POINTS_AT_60,
          sub = totalsText(Selectors.treeTotals(Selectors.ranksAt(order, level), talents)),
          icon = Text.icon("ability_druid_catform"),
        },
        {
          label = "This level",
          value = now and (now.name .. " " .. now.rank .. "/" .. now.max) or "No point",
          sub = now and now.summary or "Your first point comes at level 10.",
          icon = Text.icon(now and icons[now.key]),
        },
        {
          label = "Next level",
          value = nextPick and (nextPick.name .. " " .. nextPick.rank .. "/" .. nextPick.max) or "Build complete",
          sub = nextPick and nextPick.summary or "",
          icon = Text.icon(nextPick and icons[nextPick.key] or "ability_racial_bearform"),
        },
      },
    },
  }

  local upcoming = {}
  for l = math.max(level, Selectors.FIRST_LEVEL), math.min(60, level + UPCOMING - 1) do
    local p = pickAt(order, talents, l)
    if p then
      upcoming[#upcoming + 1] = {
        kind = "line",
        icon = Text.icon(icons[p.key]),
        text = Text.color(l == level and "gold" or "white", "Level " .. l .. ": " .. p.name .. " " .. p.rank .. "/" .. p.max),
        hint = p.summary,
        right = l == level and Text.color("gold", "now") or nil,
      }
    end
  end
  if #upcoming > 0 then
    rows[#rows + 1] = { kind = "card", title = "Your next talents", rows = upcoming }
  end

  local have = Selectors.ranksAt(order, level)
  local taken = {}
  local seen = {}
  for i = 1, points do
    local key = order[i]
    if key and not seen[key] then
      seen[key] = true
      local t = talents[key] or { name = key, max = have[key] }
      taken[#taken + 1] = t.name .. " " .. have[key] .. "/" .. t.max
    end
  end
  if #taken > 0 then
    rows[#rows + 1] = {
      kind = "card",
      title = "You should have",
      rows = { { kind = "line", text = Text.list(taken) .. "." } },
    }
  end
  return rows
end
