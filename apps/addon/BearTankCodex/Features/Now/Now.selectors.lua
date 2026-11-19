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

-- Spells the spellbook drops once a newer one is learned: knowing the newer one counts.
Selectors.REPLACED_BY = { ["Bear Form"] = "Dire Bear Form" }

-- Whether you have this rank of a spell, or a higher one (by spellbook name and rank, then by spell ID).
function Selectors.knows(ctx, spell)
  local need = math.max(spell.rank or 0, 1)
  local names = { spell.name, Selectors.REPLACED_BY[spell.name] }
  for _, name in ipairs(names) do
    local have = ctx.spellRank and ctx.spellRank(name)
    if have and (name ~= spell.name or have >= need) then
      return true
    end
  end
  return ctx.isSpellKnown(spell.spellId) == true
end

-- What to learn: for each spell, only the highest rank your level allows, and only if you don't have it.
-- Optional caster spells are listed apart and not counted. Class-quest spells cost nothing at the trainer.
function Selectors.trainer(ctx, trainer)
  local best, names, nextLevel = {}, {}, nil
  for _, t in ipairs(trainer) do
    if t.level <= ctx.level then
      local current = best[t.name]
      if not current then
        names[#names + 1] = t.name
      end
      if not current or (t.rank or 0) > (current.rank or 0) then
        best[t.name] = t
      end
    elseif not t.optional and (not nextLevel or t.level < nextLevel) then
      nextLevel = t.level
    end
  end
  local now, optional, cost = {}, {}, 0
  for _, name in ipairs(names) do
    local t = best[name]
    if not Selectors.knows(ctx, t) then
      if t.optional then
        optional[#optional + 1] = t
      else
        now[#now + 1] = t
        if not t.quest then
          cost = cost + (t.cost or 0)
        end
      end
    end
  end
  local upcoming = {}
  for _, t in ipairs(trainer) do
    if t.level == nextLevel and not t.optional then
      upcoming[#upcoming + 1] = t
    end
  end
  return { now = now, optional = optional, cost = cost, nextLevel = nextLevel, upcoming = upcoming }
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

local DONE_COLOR = { 0.36, 0.77, 0.42, 1 }
local LOG_COLOR = { 0.95, 0.77, 0.43, 1 }

-- The checkpoint for a level: the first one that doesn't end below it.
function Selectors.checkpointFor(checkpoints, level)
  for _, c in ipairs(checkpoints or {}) do
    if level <= c.hi then
      return c
    end
  end
  return checkpoints and checkpoints[#checkpoints]
end

local function tiles(ctx, data, step, tr, talent)
  local talentIcon = talent and data.talentIcons and data.talentIcons[talent.key]
  return {
    kind = "tiles",
    tiles = {
      {
        label = "Quest",
        value = step and step.zones or "Off the route",
        sub = step and ("Quest town: " .. step.hub) or "",
        icon = Text.icon("inv_misc_map_01"),
      },
      {
        label = "Trainer",
        value = #tr.now > 0 and (Text.plural(#tr.now, "spell") .. " to learn") or "Up to date",
        sub = #tr.now > 0 and Text.money(tr.cost) or (tr.nextLevel and ("Next visit at level " .. tr.nextLevel) or ""),
        icon = Text.icon("inv_misc_book_09"),
      },
      {
        label = "Talent",
        value = talent and (talent.name .. " " .. talent.rank .. "/" .. talent.max) or "None this level",
        sub = talent and talent.summary or "",
        icon = Text.icon(talentIcon or "ability_druid_catform"),
        action = { type = "tab", id = "talents" },
      },
    },
  }
end

local function questCard(step, nextStep, level)
  local rows = {}
  if step then
    rows[#rows + 1] = { kind = "heading", text = step.zones, icon = Text.icon("inv_misc_map_01") }
    rows[#rows + 1] = { kind = "line", text = "Quest town: " .. step.hub .. ". " .. step.how }
    if nextStep then
      rows[#rows + 1] =
        { kind = "note", text = Text.color("muted", "Next, at level " .. nextStep.lo .. ": " .. nextStep.zones .. ".") }
    end
  else
    rows[#rows + 1] = { kind = "line", text = "The guide's route doesn't cover level " .. level .. "." }
  end
  return { kind = "card", title = "Where to quest", rows = rows }
end

local function trainerCard(tr)
  local rows = {}
  if #tr.now == 0 then
    rows[#rows + 1] = { kind = "line", text = Text.ICONS.done .. " You know every spell for your level." }
  end
  for _, t in ipairs(tr.now) do
    rows[#rows + 1] = {
      kind = "line",
      icon = Text.icon(t.icon),
      text = spellName(t),
      right = t.quest and Text.color("muted", "class quest") or Text.color("gold", Text.money(t.cost)),
      tooltip = { spell = t.spellId },
    }
  end
  if #tr.optional > 0 then
    local names = {}
    for _, t in ipairs(tr.optional) do
      names[#names + 1] = t.name
    end
    rows[#rows + 1] = { kind = "divider" }
    rows[#rows + 1] = {
      kind = "note",
      text = Text.color("muted", "Optional caster spells a bear rarely uses: " .. Text.list(names) .. "."),
    }
  end
  if tr.nextLevel then
    local names = {}
    for _, t in ipairs(tr.upcoming) do
      names[#names + 1] = spellName(t)
    end
    rows[#rows + 1] = {
      kind = "note",
      text = Text.color("muted", "Next visit at level " .. tr.nextLevel .. ": " .. Text.list(names) .. "."),
    }
  end
  return {
    kind = "card",
    title = "Druid trainer",
    right = #tr.now > 0 and Text.color("gold", Text.plural(#tr.now, "spell") .. ", " .. Text.money(tr.cost)) or nil,
    rows = rows,
  }
end

local function dungeonCard(ctx, data, counts)
  local ds = Selectors.dungeonsFor(ctx, data.dungeons, data.dungeonQuests, counts)
  if #ds == 0 then
    return nil
  end
  local rows = {}
  for _, d in ipairs(ds) do
    if d.counts then
      local c = d.counts
      local status = c.done == c.total and Text.color("green", "all done")
        or (c.todo > 0 and Text.color("red", c.todo .. " to pick up") or Text.color("yellow", c.inLog .. " in your log"))
      rows[#rows + 1] = {
        kind = "bar",
        text = Text.color("white", d.name) .. Text.color("muted", "  levels " .. d.lo .. "-" .. d.hi),
        right = status,
        max = c.total,
        segments = { { value = c.done, color = DONE_COLOR }, { value = c.inLog, color = LOG_COLOR } },
        action = { type = "openDungeon", key = d.key },
      }
    else
      rows[#rows + 1] = {
        kind = "line",
        text = Text.color("white", d.name) .. Text.color("muted", "  levels " .. d.lo .. "-" .. d.hi),
        right = Text.color("muted", "tank guide"),
        action = { type = "openGuide", key = d.key },
      }
    end
  end
  return { kind = "card", title = "Dungeons for your level", right = Text.color("muted", "click one to open it"), rows = rows }
end

local function lootCard(ctx, data)
  local checkpoint = Selectors.checkpointFor(data.checkpoints, ctx.level)
  if not checkpoint or #checkpoint.items == 0 then
    return nil
  end
  local rows = {}
  for _, item in ipairs(checkpoint.items) do
    local have = (ctx.isEquipped and item.itemId > 0 and ctx.isEquipped(item.itemId))
    rows[#rows + 1] = {
      kind = "line",
      icon = (ctx.itemIcon and item.itemId > 0 and ctx.itemIcon(item.itemId)) or Text.icon(nil),
      text = Text.color("white", item.name),
      hint = item.source,
      right = have and Text.color("green", "wearing it") or nil,
      tooltip = item.itemId > 0 and { item = item.itemId } or nil,
    }
  end
  return { kind = "card", title = "Loot worth grabbing", right = Text.color("muted", checkpoint.title), rows = rows }
end

local MILESTONES_SHOWN = 3

local function comingUpCard(ctx, data)
  local rows = {}
  for _, m in ipairs(data.milestones or {}) do
    if m.level > ctx.level and #rows < MILESTONES_SHOWN then
      local away = m.level - ctx.level
      rows[#rows + 1] = {
        kind = "line",
        icon = Text.icon(m.icon),
        iconSize = 26,
        text = Text.color("white", "Level " .. m.level .. ": " .. m.title),
        hint = m.text,
        right = Text.color("muted", "in " .. Text.plural(away, "level")),
      }
    end
  end
  if #rows == 0 then
    return nil
  end
  return { kind = "card", title = "Coming up", rows = rows }
end

function Selectors.rows(ctx, data, counts)
  local step, nextStep = Selectors.routeFor(data.route, ctx.level)
  local tr = Selectors.trainer(ctx, data.trainer)
  local talent = Selectors.talentAt(data.talentOrder, data.talents, ctx.level)
  local rows = {
    { kind = "title", text = "Level " .. ctx.level .. ": what to do now" },
    tiles(ctx, data, step, tr, talent),
    questCard(step, nextStep, ctx.level),
    trainerCard(tr),
  }
  -- cards with nothing to show return nil, so add them one by one
  rows[#rows + 1] = dungeonCard(ctx, data, counts)
  rows[#rows + 1] = lootCard(ctx, data)
  rows[#rows + 1] = comingUpCard(ctx, data)
  return rows
end
