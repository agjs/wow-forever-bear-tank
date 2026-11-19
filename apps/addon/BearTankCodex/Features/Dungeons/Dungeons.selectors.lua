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

-- A place as { place, zone, x, y, inside } from a stop, a chain step or a quest's pickup.
local function placeOf(t)
  local place = t.place or t.title
  return { place = place, zone = t.zone, x = t.x, y = t.y, inside = t.inside or place == "inside" }
end

-- Where a quest stands, read live from the game, and what to do next for it:
--   done | inLog              the quest itself
--   step | stepInLog          a chain step still to pick up, or one in your log (step, index, total)
--   pickup                    nothing in the way: pick the quest up (place)
function Selectors.progress(ctx, quest, stop)
  local s = ctx.questStatus(quest.id)
  if s == DONE then
    return { kind = "done" }
  end
  if s == IN_LOG then
    return { kind = "inLog" }
  end
  if quest.chain then
    for i, step in ipairs(quest.chain) do
      local stepStatus = ctx.questStatus(step.id)
      if stepStatus ~= DONE then
        return {
          kind = stepStatus == IN_LOG and "stepInLog" or "step",
          step = step,
          index = i,
          total = #quest.chain,
          place = placeOf(step),
        }
      end
    end
    return { kind = "pickup", place = placeOf(quest.pickup or stop) }
  end
  return { kind = "pickup", place = placeOf(stop) }
end

-- Places to visit now, in stop order, each with the quest names to pick up there.
local function placesToVisit(ctx, dungeon)
  local out, byPlace = {}, {}
  for _, stop in ipairs(dungeon.stops) do
    for _, q in ipairs(stop.quests) do
      local p = Selectors.progress(ctx, q, stop)
      if (p.kind == "step" or p.kind == "pickup") and not p.place.inside then
        local entry = byPlace[p.place.place]
        if not entry then
          entry = { place = p.place, names = {} }
          byPlace[p.place.place] = entry
          out[#out + 1] = entry
        end
        entry.names[#entry.names + 1] = p.kind == "step" and p.step.name or q.name
      end
    end
  end
  return out
end

-- Chain steps in your log, still to finish before their dungeon quest unlocks.
local function stepsInLog(ctx, dungeon)
  local out = {}
  for _, stop in ipairs(dungeon.stops) do
    for _, q in ipairs(stop.quests) do
      local p = Selectors.progress(ctx, q, stop)
      if p.kind == "stepInLog" then
        out[#out + 1] = p.step
      end
    end
  end
  return out
end

function Selectors.nextStep(ctx, dungeon)
  local visit = placesToVisit(ctx, dungeon)
  if #visit > 0 then
    local first = visit[1]
    local more = #visit > 1 and (" Then " .. Text.plural(#visit - 1, "more stop") .. ".") or ""
    return "Go to " .. Text.color("white", first.place.place) .. " and pick up " .. Text.list(first.names) .. "." .. more
  end
  local working = stepsInLog(ctx, dungeon)
  if #working > 0 then
    local names = {}
    for _, step in ipairs(working) do
      names[#names + 1] = step.name
    end
    return "Finish " .. Text.list(names) .. " (in your quest log). That unlocks the next quest in the chain."
  end
  local c = Selectors.counts(ctx, dungeon)
  if c.done == c.total then
    return Text.color("green", "All quests done.") .. " Use the arrows to pick the next dungeon."
  end
  return "You have everything you can pick up outside. Run "
    .. dungeon.name
    .. " and finish the "
    .. Text.plural(c.inLog, "quest")
    .. " in your log."
end

local function pinFor(place, title)
  if place and place.x and not place.inside then
    return { type = "waypoint", zone = place.zone, x = place.x, y = place.y, title = title or place.place }
  end
end

-- The chain at a glance: each step with its status icon.
local function chainLine(ctx, quest)
  local parts = {}
  for _, step in ipairs(quest.chain) do
    local s = ctx.questStatus(step.id)
    local name = s == DONE and Text.color("dim", step.name) or step.name
    parts[#parts + 1] = STATUS[s].icon .. " " .. name
  end
  parts[#parts + 1] = Text.ICONS.todo .. " " .. quest.name
  return Text.color("muted", "Chain: ") .. table.concat(parts, Text.color("muted", "  >  "))
end

-- Detail rows under a quest that isn't done: what to do next and where.
local function questDetails(ctx, quest, stop, p)
  local rows = {}
  if quest.chain and (p.kind == "step" or p.kind == "stepInLog" or p.kind == "pickup") then
    rows[#rows + 1] = { kind = "note", indent = 2, text = chainLine(ctx, quest) }
  end
  if p.kind == "step" then
    local step = p.step
    rows[#rows + 1] = {
      kind = "note",
      indent = 2,
      text = Text.color("gold", "Step " .. p.index .. " of " .. p.total .. ": ")
        .. Text.color("white", step.name)
        .. Text.color("muted", ". Get it from " .. step.giver .. ", " .. step.place .. ". " .. step.task),
      hint = step.x and string.format("%s (%.1f, %.1f), click for a map pin", step.zone or "", step.x, step.y) or nil,
      action = pinFor(p.place, step.giver),
      tooltip = { quest = step.id },
    }
  elseif p.kind == "stepInLog" then
    local step = p.step
    rows[#rows + 1] = {
      kind = "note",
      indent = 2,
      text = Text.color("gold", "Step " .. p.index .. " of " .. p.total .. " (in your log): ")
        .. Text.color("white", step.name)
        .. Text.color("muted", ". " .. step.task),
      tooltip = { quest = step.id },
    }
  elseif p.kind == "pickup" and quest.chain then
    rows[#rows + 1] = {
      kind = "note",
      indent = 2,
      text = Text.color("green", "Chain done. ")
        .. Text.color("muted", "Pick it up from " .. quest.giver .. ", " .. p.place.place .. "."),
      action = pinFor(p.place, quest.giver),
    }
  else
    local from = "From " .. quest.giver .. (quest.where and (" (" .. quest.where .. ")") or "") .. "."
    rows[#rows + 1] =
      { kind = "note", indent = 2, text = Text.color("muted", from .. (quest.note and (" " .. quest.note) or "")) }
  end
  return rows
end

local DONE_COLOR = { 0.36, 0.77, 0.42, 1 }
local LOG_COLOR = { 0.95, 0.77, 0.43, 1 }

local function questRows(ctx, stop, rows)
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
      text = status.icon .. " " .. name .. tags,
      right = status.label,
      tooltip = { quest = q.id },
    }
    if s ~= DONE then
      for _, row in ipairs(questDetails(ctx, q, stop, Selectors.progress(ctx, q, stop))) do
        row.indent = nil
        rows[#rows + 1] = row
      end
    end
  end
end

function Selectors.rows(ctx, list, key)
  local dungeon = Selectors.find(list, key) or list[1]
  local c = Selectors.counts(ctx, dungeon)
  local rows = {
    {
      kind = "pager",
      text = dungeon.name,
      sub = "Levels " .. dungeon.lo .. "-" .. dungeon.hi .. ". Use the arrows for other dungeons.",
      prev = { type = "dungeon", delta = -1 },
      next = { type = "dungeon", delta = 1 },
    },
    {
      kind = "bar",
      text = Text.color("white", c.done .. " of " .. c.total .. " quests done"),
      right = Text.color("yellow", c.inLog .. " in your log") .. Text.color("muted", "   ") .. Text.color(
        "red",
        c.todo .. " to pick up"
      ),
      max = c.total,
      segments = { { value = c.done, color = DONE_COLOR }, { value = c.inLog, color = LOG_COLOR } },
    },
    {
      kind = "card",
      title = "Next step",
      rows = { { kind = "line", text = Selectors.nextStep(ctx, dungeon) } },
    },
  }
  local n = 0
  for _, stop in ipairs(dungeon.stops) do
    local title
    if stop.inside then
      title = stop.title
    else
      n = n + 1
      title = n .. ". " .. stop.title
    end
    local cardRows = {}
    if stop.x then
      cardRows[#cardRows + 1] = {
        kind = "note",
        text = Text.color("gold", "Set a map pin") .. Text.color("muted", string.format("  %s (%.1f, %.1f)", stop.zone or "", stop.x, stop.y)),
        action = { type = "waypoint", zone = stop.zone, x = stop.x, y = stop.y, title = stop.title },
      }
    elseif stop.inside then
      cardRows[#cardRows + 1] = { kind = "note", text = Text.color("muted", "Picked up or dropped inside the dungeon.") }
    end
    questRows(ctx, stop, cardRows)
    rows[#rows + 1] = { kind = "card", title = title, rows = cardRows }
  end
  return rows, dungeon.key
end
