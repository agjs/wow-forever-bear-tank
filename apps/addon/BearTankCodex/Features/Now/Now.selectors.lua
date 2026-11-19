-- Now selectors (pure): what to do at your level, from the guide's route, trainer list, talent order and dungeons.
local _, ns = ...
local Selectors = ns.module("Now.selectors")
local Text = ns.module("Core.Text")

-- The route step for a level. Steps overlap at the edges; the later one wins, like on the website.
function Selectors.routeFor(route, level)
  local found, nextStep
  for i, r in ipairs(route) do
    if level >= r.lo and level <= r.hi then
      found = r
      nextStep = route[i + 1]
    end
  end
  return found, nextStep
end

-- Trainer spells you can learn now (level reached, not known yet) and the next visit after that.
function Selectors.trainer(ctx, trainer)
  local now, cost, nextLevel = {}, 0, nil
  for _, t in ipairs(trainer) do
    if t.level <= ctx.level then
      if not ctx.isSpellKnown(t.spellId) then
        now[#now + 1] = t
        cost = cost + (t.cost or 0)
      end
    elseif not nextLevel or t.level < nextLevel then
      nextLevel = t.level
    end
  end
  local upcoming = {}
  for _, t in ipairs(trainer) do
    if t.level == nextLevel then
      upcoming[#upcoming + 1] = t
    end
  end
  return { now = now, cost = cost, nextLevel = nextLevel, upcoming = upcoming }
end

-- The talent point the guide spends at a level (first point at 10), and the rank it reaches.
function Selectors.talentAt(order, talents, level)
  local index = level - 9
  local key = index >= 1 and order[index]
  if not key then
    return nil
  end
  local rank = 0
  for i = 1, index do
    if order[i] == key then
      rank = rank + 1
    end
  end
  local t = talents[key] or { name = key, max = rank }
  return { key = key, name = t.name, rank = rank, max = t.max, summary = t.summary }
end

function Selectors.dungeonsFor(ctx, dungeons, dungeonQuests, counts)
  local quests = {}
  for _, d in ipairs(dungeonQuests) do
    quests[d.key] = d
  end
  local out = {}
  for _, d in ipairs(dungeons) do
    if ctx.level >= d.lo - 1 and ctx.level <= d.hi then
      local withQuests = quests[d.key]
      out[#out + 1] = { key = d.key, name = d.name, lo = d.lo, hi = d.hi, counts = withQuests and counts(ctx, withQuests) }
    end
  end
  return out
end

local function spellName(t)
  return t.name .. (t.rank and t.rank > 1 and (" rank " .. t.rank) or "")
end

function Selectors.rows(ctx, data, counts)
  local rows = { { kind = "title", text = "Level " .. ctx.level .. ": what to do now" } }

  -- where to quest
  local step, nextStep = Selectors.routeFor(data.route, ctx.level)
  rows[#rows + 1] = { kind = "heading", text = "Where to quest" }
  if step then
    rows[#rows + 1] = { kind = "line", indent = 1, text = Text.color("white", step.zones) }
    rows[#rows + 1] = { kind = "note", indent = 1, text = "Quest town: " .. step.hub .. ". " .. step.how }
    if nextStep then
      rows[#rows + 1] = {
        kind = "note",
        indent = 1,
        text = Text.color("muted", "Next, at level " .. nextStep.lo .. ": " .. nextStep.zones .. "."),
      }
    end
  else
    rows[#rows + 1] = { kind = "note", indent = 1, text = "The guide's route doesn't cover level " .. ctx.level .. "." }
  end
  rows[#rows + 1] = { kind = "gap" }

  -- trainer
  local tr = Selectors.trainer(ctx, data.trainer)
  rows[#rows + 1] = { kind = "heading", text = "Druid trainer" }
  if #tr.now > 0 then
    local names = {}
    for _, t in ipairs(tr.now) do
      names[#names + 1] = spellName(t)
    end
    rows[#rows + 1] = {
      kind = "line",
      indent = 1,
      text = Text.ICONS.todo .. " " .. Text.color("white", Text.plural(#tr.now, "spell") .. " to learn") .. " (" .. Text.money(tr.cost) .. ")",
    }
    rows[#rows + 1] = { kind = "note", indent = 2, text = Text.list(names) .. "." }
  else
    rows[#rows + 1] = { kind = "line", indent = 1, text = Text.ICONS.done .. " You know everything for your level." }
  end
  if tr.nextLevel then
    local names = {}
    for _, t in ipairs(tr.upcoming) do
      names[#names + 1] = spellName(t)
    end
    rows[#rows + 1] = {
      kind = "note",
      indent = 1,
      text = Text.color("muted", "Next visit at level " .. tr.nextLevel .. ": " .. Text.list(names) .. "."),
    }
  end
  rows[#rows + 1] = { kind = "gap" }

  -- talents
  local now, nextPick = Selectors.talentAt(data.talentOrder, data.talents, ctx.level),
    Selectors.talentAt(data.talentOrder, data.talents, ctx.level + 1)
  if now or nextPick then
    rows[#rows + 1] = { kind = "heading", text = "Talents (the guide's tank order)" }
    if now then
      rows[#rows + 1] = {
        kind = "line",
        indent = 1,
        text = "Level " .. ctx.level .. ": " .. Text.color("white", now.name .. " " .. now.rank .. "/" .. now.max),
      }
      rows[#rows + 1] = { kind = "note", indent = 2, text = Text.color("muted", now.summary or "") }
    end
    if nextPick then
      rows[#rows + 1] = {
        kind = "note",
        indent = 1,
        text = Text.color("muted", "Level " .. (ctx.level + 1) .. ": " .. nextPick.name .. " " .. nextPick.rank .. "/" .. nextPick.max .. "."),
      }
    end
    rows[#rows + 1] = { kind = "gap" }
  end

  -- dungeons
  local ds = Selectors.dungeonsFor(ctx, data.dungeons, data.dungeonQuests, counts)
  if #ds > 0 then
    rows[#rows + 1] = { kind = "heading", text = "Dungeons for your level" }
    for _, d in ipairs(ds) do
      local status = ""
      if d.counts then
        if d.counts.todo > 0 then
          status = "  " .. Text.color("red", d.counts.todo .. " to pick up")
        elseif d.counts.inLog > 0 then
          status = "  " .. Text.color("yellow", d.counts.inLog .. " in your log")
        else
          status = "  " .. Text.color("green", "all quests done")
        end
      end
      rows[#rows + 1] = {
        kind = "line",
        indent = 1,
        text = Text.color("white", d.name) .. Text.color("muted", "  levels " .. d.lo .. "-" .. d.hi) .. status,
        action = d.counts and { type = "openDungeon", key = d.key } or nil,
      }
    end
  end
  return rows
end
