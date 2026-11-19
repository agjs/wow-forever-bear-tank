-- List: renders row specs into pooled frames inside a scroll child. Frames are created once and reused.
-- Row kinds: title, heading, line, note, callout, pager, gap.
-- Optional fields on any row:
--   icon    texture path, drawn at the left
--   right   text aligned to the right edge (costs, levels, counts)
--   hint    small grey text under the row
--   tooltip { spell = id } | { quest = id } | { text = "..." }, shown on hover
--   action  { type = ..., ... }, makes the row clickable
local _, ns = ...
local List = ns.module("UI.List")

local INDENT = 16
local GAP = 12
local ICON_SIZE = 18
local ICON_GAP = 6
local RIGHT_WIDTH = 110

local STYLE = {
  title = { font = "GameFontNormalHuge", after = 10 },
  heading = { font = "GameFontNormalLarge", before = 4, after = 8, rule = true },
  line = { font = "GameFontHighlight", after = 4 },
  note = { font = "GameFontHighlightSmall", after = 6 },
  callout = { font = "GameFontHighlight", after = 12 },
  pager = { font = "GameFontNormalLarge", after = 8 },
}

local function showTooltip(row)
  local tip = row.tooltipSpec
  if not tip then
    return
  end
  GameTooltip:SetOwner(row, "ANCHOR_RIGHT")
  if tip.spell and GameTooltip.SetSpellByID then
    GameTooltip:SetSpellByID(tip.spell)
  elseif tip.quest then
    GameTooltip:SetHyperlink("quest:" .. tip.quest)
  else
    GameTooltip:SetText(tip.text or "", 1, 1, 1, 1, true)
  end
  GameTooltip:Show()
end

local function hideTooltip()
  GameTooltip:Hide()
end

local function createRow(parent)
  local row = CreateFrame("Button", nil, parent)
  row.icon = row:CreateTexture(nil, "ARTWORK")
  row.icon:SetSize(ICON_SIZE, ICON_SIZE)
  row.icon:SetPoint("TOPLEFT", 0, 1)
  row.icon:SetTexCoord(0.07, 0.93, 0.07, 0.93) -- trim the icon's built-in border
  row.text = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  row.text:SetJustifyH("LEFT")
  if row.text.SetWordWrap then
    row.text:SetWordWrap(true)
  end
  row.right = row:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  row.right:SetJustifyH("RIGHT")
  row.right:SetPoint("TOPRIGHT", 0, -1)
  row.right:SetWidth(RIGHT_WIDTH)
  row.hint = row:CreateFontString(nil, "OVERLAY", "GameFontDisableSmall")
  row.hint:SetJustifyH("LEFT")
  row.highlight = row:CreateTexture(nil, "HIGHLIGHT")
  row.highlight:SetPoint("TOPLEFT", -4, 2)
  row.highlight:SetPoint("BOTTOMRIGHT", 4, -2)
  row.highlight:SetColorTexture(1, 0.85, 0.4, 0.08)
  row.rule = row:CreateTexture(nil, "BACKGROUND")
  row.rule:SetHeight(1)
  row.rule:SetPoint("BOTTOMLEFT", 0, -3)
  row.rule:SetPoint("BOTTOMRIGHT", 0, -3)
  row.rule:SetColorTexture(0.95, 0.77, 0.43, 0.25)
  row.prev = CreateFrame("Button", nil, row, "UIPanelButtonTemplate")
  row.prev:SetSize(28, 22)
  row.prev:SetText("<")
  row.next = CreateFrame("Button", nil, row, "UIPanelButtonTemplate")
  row.next:SetSize(28, 22)
  row.next:SetText(">")
  row:SetScript("OnEnter", showTooltip)
  row:SetScript("OnLeave", hideTooltip)
  return row
end

-- state = { content = scrollChild, width = number, pool = {}, onAction = function(action) }
function List.new(content, width, onAction)
  return { content = content, width = width, pool = {}, onAction = onAction }
end

local function resetRow(row)
  row:Hide()
  row:SetScript("OnClick", nil)
  row:EnableMouse(false)
  row.tooltipSpec = nil
  row.highlight:Hide()
  row.rule:Hide()
  row.icon:Hide()
  row.right:SetText("")
  row.hint:SetText("")
  row.prev:Hide()
  row.next:Hide()
  row.text:ClearAllPoints()
  row.hint:ClearAllPoints()
end

function List.render(list, rows)
  local pool, width, y = list.pool, list.width, 0
  for i = 1, #pool do
    resetRow(pool[i])
  end
  local used = 0
  for _, spec in ipairs(rows) do
    if spec.kind == "gap" then
      y = y + GAP
    else
      used = used + 1
      local row = pool[used]
      if not row then
        row = createRow(list.content)
        pool[used] = row
      end
      local style = STYLE[spec.kind] or STYLE.line
      local indent = (spec.indent or 0) * INDENT
      local rowWidth = width - indent
      y = y + (style.before or 0)

      local left = 0
      if spec.icon then
        row.icon:SetTexture(spec.icon)
        row.icon:Show()
        left = ICON_SIZE + ICON_GAP
      end
      local rightWidth = spec.right and RIGHT_WIDTH + 8 or 0
      if spec.right then
        row.right:SetText(spec.right)
      end

      row.text:SetFontObject(style.font)
      row.text:SetWidth(rowWidth - left - rightWidth - (spec.kind == "pager" and 80 or 0))
      row.text:SetText(spec.text or "")
      if spec.kind == "pager" then
        row.text:SetPoint("TOP", 0, -4)
        row.text:SetJustifyH("CENTER")
      else
        row.text:SetPoint("TOPLEFT", left, 0)
        row.text:SetJustifyH("LEFT")
      end

      local height = math.max(spec.icon and ICON_SIZE or 14, row.text:GetStringHeight())
      if spec.hint then
        row.hint:SetPoint("TOPLEFT", row.text, "BOTTOMLEFT", 0, -1)
        row.hint:SetText(spec.hint)
        height = height + 12
      end
      if spec.kind == "pager" then
        height = 28
        row.prev:SetPoint("LEFT", 0, 0)
        row.next:SetPoint("RIGHT", 0, 0)
        row.prev:SetScript("OnClick", function()
          list.onAction(spec.prev)
        end)
        row.next:SetScript("OnClick", function()
          list.onAction(spec.next)
        end)
        row.prev:Show()
        row.next:Show()
      end
      if style.rule then
        row.rule:Show()
      end
      if spec.tooltip then
        row.tooltipSpec = spec.tooltip
        row:EnableMouse(true)
      end
      if spec.action then
        row:EnableMouse(true)
        row.highlight:Show()
        row:SetScript("OnClick", function()
          list.onAction(spec.action)
        end)
      end

      row:ClearAllPoints()
      row:SetPoint("TOPLEFT", indent, -y)
      row:SetSize(rowWidth, height)
      row:Show()
      y = y + height + style.after
    end
  end
  list.content:SetHeight(math.max(1, y))
  return y
end
