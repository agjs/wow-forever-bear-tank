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

local function stepRows(ctx, rows, step, rank)
  local crafts = Selectors.craftsLeft(step, rank)
  if step.craft then
    rows[#rows + 1] = {
      kind = "line",
      indent = 1,
      text = "Make " .. Text.color("white", step.craft) .. " until " .. step.to .. (crafts and (", about " .. crafts .. " more") or ""),
    }
  else
    rows[#rows + 1] = { kind = "line", indent = 1, text = "Fish " .. Text.color("white", step.zone or "") .. " until " .. step.to }
  end
  local mats = Selectors.materials(ctx, step, crafts or 0)
  for _, m in ipairs(mats) do
    local enough = m.have >= m.need
    rows[#rows + 1] = {
      kind = "note",
      indent = 2,
      text = (enough and Text.ICONS.done or Text.ICONS.todo)
        .. " "
        .. m.name
        .. "  "
        .. Text.color(enough and "green" or "red", m.have .. " / " .. m.need),
    }
  end
  if step.mats then
    rows[#rows + 1] = { kind = "note", indent = 2, text = Text.color("muted", "You need " .. step.mats .. ".") }
  end
  if step.catch then
    rows[#rows + 1] = { kind = "note", indent = 2, text = Text.color("muted", "You'll catch " .. step.catch .. ".") }
  end
  if step.note then
    rows[#rows + 1] = { kind = "note", indent = 2, text = Text.color("muted", step.note) }
  end
end

function Selectors.rows(ctx, professions)
  local rows = { { kind = "title", text = "Your professions" } }
  local any = false
  for _, p in ipairs(professions) do
    local skill = ctx.skill(p.name)
    if skill then
      any = true
      rows[#rows + 1] = {
        kind = "heading",
        text = p.name .. "  " .. Text.color("white", skill.rank .. " / " .. skill.max),
      }
      if skill.rank >= MAX_SKILL then
        rows[#rows + 1] = { kind = "line", indent = 1, text = Text.ICONS.done .. " Maxed out." }
      else
        local nextRank = Selectors.nextRank(p.trainers, skill.max)
        if nextRank then
          local capped = skill.rank >= skill.max
          local lead = capped and Text.color("orange", "Learn the next rank now: ") or Text.color("muted", "Next rank at skill " .. nextRank.skill .. ": ")
          rows[#rows + 1] = {
            kind = "line",
            indent = 1,
            text = (capped and Text.ICONS.todo .. " " or "") .. lead .. Text.color("white", nextRank.what) .. " (up to " .. nextRank.cap .. ")",
          }
          rows[#rows + 1] = { kind = "note", indent = 2, text = Text.color("muted", nextRank.where) }
        end
        for _, step in ipairs(Selectors.currentSteps(p.steps, skill.rank)) do
          stepRows(ctx, rows, step, skill.rank)
        end
      end
      rows[#rows + 1] = { kind = "gap" }
    end
  end
  if not any then
    rows[#rows + 1] = { kind = "note", text = "None of the guide's professions (Leatherworking, Skinning, Cooking, Fishing) found." }
  end
  return rows
end
