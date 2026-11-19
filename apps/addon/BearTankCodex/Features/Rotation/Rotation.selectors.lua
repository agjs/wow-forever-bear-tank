-- Rotation selectors (pure): which button to press, for one, two or many enemies, or in Cat Form while questing.
-- Buttons you don't have yet at your level are shown faded with the level they unlock at.
local _, ns = ...
local Selectors = ns.module("Rotation.selectors")
local Talents = ns.module("Talents.selectors")
local Text = ns.module("Core.Text")

Selectors.LISTS = {
  { "single", "1 target" },
  { "cleave", "2 targets" },
  { "aoe", "3+ targets" },
  { "cat", "Cat Form" },
}

-- The level a talent is first taken in the guide's order.
local function talentLevel(order, key)
  for i, k in ipairs(order) do
    if k == key then
      return i + Talents.FIRST_LEVEL - 1
    end
  end
end

-- Whether a step is available, and if not, the level it unlocks at. Steps replaced by a talent you have return
-- "hidden".
function Selectors.unlock(step, level, ranks, order)
  if step.onlyBefore and (ranks[step.onlyBefore] or 0) > 0 then
    return "hidden"
  end
  if step.level and level < step.level then
    return "locked", step.level
  end
  if step.talent and (ranks[step.talent] or 0) == 0 then
    return "locked", talentLevel(order, step.talent)
  end
  return "ready"
end

function Selectors.rows(ctx, data, listKey)
  local rotation = data.rotation
  local key = rotation[listKey] and listKey or "single"
  local ranks = Talents.ranksAt(data.talentOrder, ctx.level)
  local options, selected = {}, 1
  for i, l in ipairs(Selectors.LISTS) do
    options[#options + 1] = { label = l[2], action = { type = "set", key = "rotation", value = l[1] } }
    if l[1] == key then
      selected = i
    end
  end
  local rows = {
    {
      kind = "title",
      text = "Rotation",
      sub = "Press the first button that applies, then start again from the top. Set for level " .. ctx.level .. ".",
    },
    { kind = "segment", options = options, selected = selected },
  }
  if key == "cat" then
    local notes = {}
    for _, paragraph in ipairs(rotation.catNote or {}) do
      notes[#notes + 1] = { kind = "line", text = paragraph }
    end
    rows[#rows + 1] = { kind = "card", title = "Cat Form while questing", rows = notes }
  end

  local priority, n = {}, 0
  for _, step in ipairs(rotation[key]) do
    local state, at = Selectors.unlock(step, ctx.level, ranks, data.talentOrder)
    if state ~= "hidden" then
      n = n + 1
      priority[#priority + 1] = {
        kind = "line",
        icon = Text.icon(step.icon),
        iconSize = 28,
        text = Text.color("gold", n .. ".  ") .. Text.color("white", step.spell),
        hint = step.text,
        right = state == "locked" and Text.color("muted", at and ("at level " .. at) or "later") or nil,
        dim = state == "locked",
        tooltip = { spell = step.spellId },
      }
    end
  end
  rows[#rows + 1] = { kind = "card", title = "Priority", rows = priority }

  local prePull = {}
  for i, line in ipairs(rotation.prePull) do
    prePull[#prePull + 1] = { kind = "line", text = Text.color("gold", i .. ".  ") .. line }
  end
  rows[#rows + 1] = { kind = "card", title = "Before the pull", rows = prePull }

  local emergency = {}
  for _, b in ipairs(rotation.emergency) do
    local ready = ctx.level >= b.level
    emergency[#emergency + 1] = {
      kind = "line",
      icon = Text.icon(b.icon),
      iconSize = 28,
      text = Text.color("white", b.spell),
      hint = b.text,
      right = not ready and Text.color("muted", "at level " .. b.level) or nil,
      dim = not ready,
      tooltip = { spell = b.spellId },
    }
  end
  rows[#rows + 1] = { kind = "card", title = "Emergency buttons", rows = emergency }
  return rows
end
