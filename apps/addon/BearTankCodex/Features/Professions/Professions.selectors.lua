-- Professions selectors (pure): for each profession you have, your skill, what to craft now with the materials
-- still missing from your bags, and where to learn the next rank.
local _, ns = ...
local Selectors = ns.module("Professions.selectors")
local Text = ns.module("Core.Text")

local MAX_SKILL = 300

-- The rank to learn next: the first one whose cap is above your current cap.
function Selectors.nextRank(trainers, max)
  for _, t in ipairs(trainers) do
    if (t.cap or 0) > max then
      return t
    end
  end
end

-- Steps covering your skill (cooking can have two options for one range).
function Selectors.currentSteps(steps, rank)
  local out = {}
  for _, s in ipairs(steps) do
    if rank >= s.from and rank < s.to then
      out[#out + 1] = s
    end
  end
  return out
end

-- Crafts left in a step, scaled from the guide's estimate for the whole step.
function Selectors.craftsLeft(step, rank)
  if not step.count then
    return nil
  end
  local span = step.to - step.from
  return math.max(1, math.ceil(step.count * (step.to - rank) / span))
end

-- Materials for the crafts left, with how many are already in your bags.
function Selectors.materials(ctx, step, crafts)
  local out = {}
  for _, r in ipairs(step.reagents or {}) do
    local need = r.qty * crafts
    out[#out + 1] = { name = r.name, itemId = r.itemId, need = need, have = ctx.itemCount(r.itemId) }
  end
  return out
end

local DONE_COLOR = { 0.36, 0.77, 0.42, 1 }
local SKILL_COLOR = { 0.95, 0.77, 0.43, 1 }

local function stepRows(ctx, rows, step, rank)
  local crafts = Selectors.craftsLeft(step, rank)
  if step.craft then
    rows[#rows + 1] = {
      kind = "heading",
      text = "Make " .. Text.color("white", step.craft),
      right = Text.color("gold", "until " .. step.to) .. (crafts and Text.color("muted", ", about " .. crafts .. " more") or ""),
      tooltip = step.spellId and { spell = step.spellId } or nil,
    }
  else
    rows[#rows + 1] = {
      kind = "heading",
      text = "Fish in " .. Text.color("white", step.zone or ""),
      right = Text.color("gold", "until " .. step.to),
    }
  end
  for _, m in ipairs(Selectors.materials(ctx, step, crafts or 0)) do
    local enough = m.have >= m.need
    rows[#rows + 1] = {
      kind = "line",
      icon = (ctx.itemIcon and ctx.itemIcon(m.itemId)) or Text.icon(nil),
      text = m.name,
      right = Text.color(enough and "green" or "red", m.have .. " / " .. m.need) .. Text.color("muted", " in bags"),
      tooltip = { item = m.itemId },
    }
  end
  local function note(text)
    if text and text ~= "" then
      rows[#rows + 1] = { kind = "note", text = Text.color("muted", text) }
    end
  end
  note(step.mats and ("You need " .. step.mats .. "."))
  note(step.catch and ("You'll catch " .. step.catch .. "."))
  note(step.recipeFrom and ("Recipe: " .. step.recipeFrom))
  note(step.note)
end

function Selectors.rows(ctx, professions)
  local rows = { { kind = "title", text = "Professions", sub = "Your skill, what to make next, and what's in your bags." } }
  local any = false
  for _, p in ipairs(professions) do
    local skill = ctx.skill(p.name)
    if skill then
      any = true
      local card = {}
      local maxed = skill.rank >= MAX_SKILL
      card[#card + 1] = {
        kind = "bar",
        text = Text.color("white", skill.rank .. " / " .. skill.max),
        right = maxed and Text.color("green", "maxed out") or Text.color("muted", "max " .. MAX_SKILL),
        max = MAX_SKILL,
        segments = { { value = skill.rank, color = maxed and DONE_COLOR or SKILL_COLOR } },
      }
      if not maxed then
        local nextRank = Selectors.nextRank(p.trainers, skill.max)
        if nextRank then
          local capped = skill.rank >= skill.max
          card[#card + 1] = {
            kind = "line",
            text = (capped and (Text.ICONS.todo .. " " .. Text.color("orange", "Learn the next rank now: ")) or Text.color(
              "muted",
              "Next rank at skill " .. nextRank.skill .. ": "
            )) .. Text.color("white", nextRank.what) .. " (up to " .. nextRank.cap .. ")",
            hint = nextRank.where,
          }
        end
        for _, step in ipairs(Selectors.currentSteps(p.steps, skill.rank)) do
          card[#card + 1] = { kind = "divider" }
          stepRows(ctx, card, step, skill.rank)
        end
      end
      rows[#rows + 1] = { kind = "card", title = p.name, rows = card }
    end
  end
  if not any then
    rows[#rows + 1] = {
      kind = "note",
      text = "None of the guide's professions (Leatherworking, Skinning, Cooking, Fishing) found.",
    }
  end
  return rows
end
