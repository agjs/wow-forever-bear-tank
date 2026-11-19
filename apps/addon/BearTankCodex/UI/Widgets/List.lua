-- List: renders row specs into pooled frames inside a scroll child. Frames are created once and reused.
-- Row kinds: title, heading, line, note, callout, pager, gap. Rows with `action` are clickable.
local _, ns = ...
local List = ns.module("UI.List")

local INDENT = 16
local GAP = 10

local STYLE = {
  title = { font = "GameFontNormalLarge", after = 8 },
  heading = { font = "GameFontNormal", before = 2, after = 4 },
  line = { font = "GameFontHighlight", after = 2 },
  note = { font = "GameFontHighlightSmall", after = 5 },
  callout = { font = "GameFontHighlight", after = 10 },
  pager = { font = "GameFontNormalLarge", after = 6 },
}

local function createRow(parent)
  local row = CreateFrame("Button", nil, parent)
  row.text = row:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  row.text:SetJustifyH("LEFT")
  if row.text.SetWordWrap then
    row.text:SetWordWrap(true)
  end
  row.hint = row:CreateFontString(nil, "OVERLAY", "GameFontDisableSmall")
  row.hint:SetJustifyH("LEFT")
  row.highlight = row:CreateTexture(nil, "HIGHLIGHT")
  row.highlight:SetAllPoints()
  row.highlight:SetColorTexture(1, 0.85, 0.4, 0.08)
  row.bar = row:CreateTexture(nil, "BACKGROUND")
  row.bar:SetPoint("TOPLEFT", -6, 2)
  row.bar:SetPoint("BOTTOMLEFT", -6, -2)
  row.bar:SetWidth(3)
  row.bar:SetColorTexture(0.95, 0.77, 0.43, 0.9)
  row.prev = CreateFrame("Button", nil, row, "UIPanelButtonTemplate")
  row.prev:SetSize(28, 22)
  row.prev:SetText("<")
  row.next = CreateFrame("Button", nil, row, "UIPanelButtonTemplate")
  row.next:SetSize(28, 22)
  row.next:SetText(">")
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
  row.highlight:Hide()
  row.bar:Hide()
  row.hint:SetText("")
  row.prev:Hide()
  row.next:Hide()
  row.text:ClearAllPoints()
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
      y = y + (style.before or 0)

      row.text:SetFontObject(style.font)
      row.text:SetWidth(width - indent - (spec.kind == "pager" and 80 or 0))
      row.text:SetText(spec.text or "")
      if spec.kind == "pager" then
        row.text:SetPoint("TOP", 0, -4)
        row.text:SetJustifyH("CENTER")
      else
        row.text:SetPoint("TOPLEFT", 0, 0)
        row.text:SetJustifyH("LEFT")
      end

      local height = math.max(14, row.text:GetStringHeight())
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
      if spec.kind == "callout" then
        row.bar:Show()
      end
      if spec.action then
        row:EnableMouse(true)
        row.highlight:Show()
        row:SetScript("OnClick", function()
          list.onAction(spec.action)
        end)
      end

      row:ClearAllPoints()
      row:SetPoint("TOPLEFT", indent + (spec.kind == "callout" and 6 or 0), -y)
      row:SetSize(width - indent, height)
      row:Show()
      y = y + height + style.after
    end
  end
  list.content:SetHeight(math.max(1, y))
  return y
end
