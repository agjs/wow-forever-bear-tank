-- Dungeons selectors (pure): which dungeon to show, quest progress, the next step, and the rows to render.
local _, ns = ...
local Selectors = ns.module("Dungeons.selectors")
local Text = ns.module("Core.Text")

local NOT_STARTED, IN_LOG, DONE = 0, 1, 2

local STATUS = {
  [NOT_STARTED] = { icon = Text.ICONS.todo, label = Text.color("red", "not picked up") },
  [IN_LOG] = { icon = Text.ICONS.active, label = Text.color("yellow", "in your log") },
  [DONE] = { icon = Text.ICONS.done, label = Text.color("green", "done") },
}

function Selectors.counts(ctx, dungeon)
  local c = { [NOT_STARTED] = 0, [IN_LOG] = 0, [DONE] = 0 }
  local total = 0
  for _, stop in ipairs(dungeon.stops) do
    for _, q in ipairs(stop.quests) do
      local s = ctx.questStatus(q.id)
      c[s] = c[s] + 1
      total = total + 1
    end
  end
  return { todo = c[NOT_STARTED], inLog = c[IN_LOG], done = c[DONE], total = total }
end

-- First dungeon you haven't outleveled that still has quests left; otherwise the first one.
function Selectors.defaultKey(ctx, list)
  for _, d in ipairs(list) do
    local c = Selectors.counts(ctx, d)
    if d.hi >= ctx.level and c.done < c.total then
      return d.key
    end
  end
  return list[1] and list[1].key
end

function Selectors.find(list, key)
  for i, d in ipairs(list) do
    if d.key == key then
      return d, i
    end
  end
end

-- Stops outside the dungeon that still have quests to pick up, each with the names left there.
local function openStops(ctx, dungeon)
  local out = {}
  for _, stop in ipairs(dungeon.stops) do
    if not stop.inside then
      local names = {}
      for _, q in ipairs(stop.quests) do
        if ctx.questStatus(q.id) == NOT_STARTED then
          names[#names + 1] = q.name
        end
      end
      if #names > 0 then
        out[#out + 1] = { stop = stop, names = names }
      end
    end
  end
  return out
end

function Selectors.nextStep(ctx, dungeon)
  local open = openStops(ctx, dungeon)
  local c = Selectors.counts(ctx, dungeon)
  if #open > 0 then
    local first = open[1]
    local more = #open > 1 and (" Then " .. Text.plural(#open - 1, "more stop") .. " below.") or ""
    return "Go to " .. Text.color("white", first.stop.title) .. " and pick up " .. Text.list(first.names) .. "." .. more
  end
  if c.done == c.total then
    return Text.color("green", "All quests done.") .. " Use the arrows to pick the next dungeon."
  end
  return "You have everything you can pick up outside. Run "
    .. dungeon.name
    .. " and finish the "
    .. Text.plural(c.inLog, "quest")
    .. " in your log."
end

function Selectors.rows(ctx, list, key)
  local dungeon = Selectors.find(list, key) or list[1]
  local c = Selectors.counts(ctx, dungeon)
  local rows = {
    {
      kind = "pager",
      text = dungeon.name,
      prev = { type = "dungeon", delta = -1 },
      next = { type = "dungeon", delta = 1 },
    },
    {
      kind = "note",
      text = string.format(
        "Levels %d-%d   %s %d done   %s %d in your log   %s %d not picked up",
        dungeon.lo,
        dungeon.hi,
        Text.ICONS.done,
        c.done,
        Text.ICONS.active,
        c.inLog,
        Text.ICONS.todo,
        c.todo
      ),
    },
    { kind = "callout", text = Text.color("gold", "Next: ") .. Selectors.nextStep(ctx, dungeon) },
  }
  local n = 0
  for _, stop in ipairs(dungeon.stops) do
    local left = 0
    for _, q in ipairs(stop.quests) do
      if ctx.questStatus(q.id) == NOT_STARTED then
        left = left + 1
      end
    end
    local title
    if stop.inside then
      title = "* " .. stop.title
    else
      n = n + 1
      title = n .. ". " .. stop.title
    end
    rows[#rows + 1] = {
      kind = "heading",
      text = title,
      hint = (stop.x and string.format("(%.1f, %.1f) click for a map pin", stop.x, stop.y) or nil),
      done = (not stop.inside and left == 0) or nil,
      action = (stop.x and { type = "waypoint", zone = stop.zone, x = stop.x, y = stop.y, title = stop.title }) or nil,
    }
    for _, q in ipairs(stop.quests) do
      local s = ctx.questStatus(q.id)
      local status = STATUS[s]
      local name = s == DONE and Text.color("dim", q.name) or Text.color("white", q.name)
      local tags = ""
      if q.horde then
        tags = tags .. "  " .. Text.color("blue", "Horde")
      end
      if q.req > ctx.level then
        tags = tags .. "  " .. Text.color("orange", "level " .. q.req)
      end
      rows[#rows + 1] = {
        kind = "line",
        indent = 1,
        text = status.icon .. " " .. name .. tags,
        right = status.label,
        tooltip = { quest = q.id },
      }
      if s ~= DONE then
        local from = "From " .. q.giver .. (q.where and (" (" .. q.where .. ")") or "") .. "."
        rows[#rows + 1] =
          { kind = "note", indent = 2, text = Text.color("muted", from .. (q.note and (" " .. q.note) or "")) }
      end
    end
    rows[#rows + 1] = { kind = "gap" }
  end
  return rows, dungeon.key
end
