-- List: renders row specs into pooled frames inside a scroll child. Frames are created once per kind and reused.
--
-- Row kinds
--   title     { text, sub }                                   page title and a muted line under it
--   card      { title, right, rows = { ... } }                a panel holding other rows
--   tiles     { tiles = { { label, value, sub, icon, action } } }   2-4 summary boxes side by side
--   heading   { text, right }                                 a bold line inside a card
--   line      { text, right, icon, hint, tooltip, action, dim }
--   note      { text }                                        small muted text
--   bar       { text, right, max, segments = { { value, color } }, action }   a progress bar
--   segment   { options = { { label, action } }, selected }   a row of buttons, one selected
--   pager     { text, prev, next }                            a title with < and > buttons
--   divider, gap
-- Optional on rows: tooltip = { spell = id } | { quest = id } | { item = id } | { text = "..." }
local _, ns = ...
local List = ns.module("UI.List")
local Theme = ns.module("UI.Theme")

local C = Theme.COLORS
local CARD_PAD = 12
local GAP = 12
local ICON = 18
local RIGHT_WIDTH = 120

-- ---------- pools ----------

local function pool(list, kind, create)
  local p = list.pools[kind]
  if not p then
    p = { items = {}, used = 0 }
    list.pools[kind] = p
  end
  p.used = p.used + 1
  local item = p.items[p.used]
  if not item then
    item = create(list.content)
    p.items[p.used] = item
  end
  item:SetFrameLevel(list.content:GetFrameLevel() + (kind == "card" and 1 or 3))
  item:Show()
  return item
end

local function releaseAll(list)
  for _, p in pairs(list.pools) do
    for i = 1, #p.items do
      p.items[i]:Hide()
    end
    p.used = 0
  end
end

-- ---------- tooltips and clicks ----------

local function showTooltip(self)
  local tip = self.tooltipSpec
  if not tip then
    return
  end
  GameTooltip:SetOwner(self, "ANCHOR_RIGHT")
  if tip.spell and GameTooltip.SetSpellByID then
    GameTooltip:SetSpellByID(tip.spell)
  elseif tip.item and GameTooltip.SetItemByID then
    GameTooltip:SetItemByID(tip.item)
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

local function wire(list, frame, spec)
  frame.tooltipSpec = spec.tooltip
  frame:EnableMouse(spec.tooltip ~= nil or spec.action ~= nil)
  if frame.hover then
    frame.hover:SetShown(spec.action ~= nil)
  end
  if spec.action then
    frame:SetScript("OnClick", function()
      list.onAction(spec.action)
    end)
  else
    frame:SetScript("OnClick", nil)
  end
end

-- ---------- widgets ----------

local function newText(parent, style, justify)
  local fs = parent:CreateFontString(nil, "OVERLAY")
  fs:SetFontObject(Theme.font(style))
  fs:SetJustifyH(justify or "LEFT")
  if fs.SetWordWrap then
    fs:SetWordWrap(true)
  end
  return fs
end

local function createRow(parent)
  local row = CreateFrame("Button", nil, parent)
  row.hover = Theme.fill(row, C.hover, "HIGHLIGHT")
  row.hover:SetPoint("TOPLEFT", -6, 3)
  row.hover:SetPoint("BOTTOMRIGHT", 6, -3)
  row.icon = row:CreateTexture(nil, "ARTWORK")
  row.icon:SetTexCoord(0.07, 0.93, 0.07, 0.93) -- trim the icon's built-in border
  row.text = newText(row, "body")
  row.right = newText(row, "small", "RIGHT")
  row.right:SetPoint("TOPRIGHT", 0, -1)
  row.right:SetWidth(RIGHT_WIDTH)
  row.hint = newText(row, "small")
  row:SetScript("OnEnter", showTooltip)
  row:SetScript("OnLeave", hideTooltip)
  return row
end

local TEXT_STYLE = { title = "title", heading = "heading", line = "body", note = "small" }

local function renderRow(list, spec, x, y, width)
  local row = pool(list, "row", createRow)
  local style = TEXT_STYLE[spec.kind] or "body"
  local iconSize = spec.iconSize or (spec.kind == "heading" and 20 or ICON)
  local left = 0
  if spec.icon then
    row.icon:SetTexture(spec.icon)
    row.icon:SetSize(iconSize, iconSize)
    row.icon:ClearAllPoints()
    row.icon:SetPoint("TOPLEFT", 0, 1)
    row.icon:Show()
    left = iconSize + 8
  else
    row.icon:Hide()
  end
  local rightWidth = spec.right and (RIGHT_WIDTH + 8) or 0
  row.right:SetText(spec.right or "")

  row.text:SetFontObject(Theme.font(style))
  row.text:ClearAllPoints()
  row.text:SetPoint("TOPLEFT", left, 0)
  row.text:SetWidth(width - left - rightWidth)
  row.text:SetText(spec.text or "")
  if spec.kind == "title" then
    row.text:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
  else
    row.text:SetTextColor(1, 1, 1)
  end

  local height = math.max(spec.icon and iconSize or 0, row.text:GetStringHeight())
  local sub = spec.hint or spec.sub
  row.hint:ClearAllPoints()
  if sub then
    row.hint:SetPoint("TOPLEFT", row.text, "BOTTOMLEFT", 0, -3)
    row.hint:SetWidth(width - left - rightWidth)
    row.hint:SetText(sub)
    row.hint:SetTextColor(0.62, 0.6, 0.55)
    height = math.max(height, row.text:GetStringHeight() + 3 + row.hint:GetStringHeight())
  else
    row.hint:SetText("")
  end

  row:SetAlpha(spec.dim and 0.45 or 1)
  wire(list, row, spec)
  row:ClearAllPoints()
  row:SetPoint("TOPLEFT", list.content, "TOPLEFT", x, -y)
  row:SetSize(width, height)
  list.rendered[#list.rendered + 1] = (spec.text or "") .. (spec.right and ("  " .. spec.right) or "")
  if sub then
    list.rendered[#list.rendered + 1] = sub
  end
  local after = spec.kind == "title" and 4 or (spec.kind == "heading" and 6 or 5)
  return height + after
end

local function createCard(parent)
  local card = CreateFrame("Frame", nil, parent)
  Theme.fill(card, C.card):SetAllPoints()
  Theme.border(card)
  card.title = newText(card, "label")
  card.title:SetPoint("TOPLEFT", CARD_PAD, -CARD_PAD)
  card.title:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
  card.right = newText(card, "small", "RIGHT")
  card.right:SetPoint("TOPRIGHT", -CARD_PAD, -CARD_PAD)
  return card
end

local function createTile(parent)
  local tile = CreateFrame("Button", nil, parent)
  Theme.fill(tile, C.card):SetAllPoints()
  Theme.border(tile)
  tile.hover = Theme.fill(tile, C.hover, "HIGHLIGHT")
  tile.hover:SetAllPoints()
  tile.icon = tile:CreateTexture(nil, "ARTWORK")
  tile.icon:SetSize(30, 30)
  tile.icon:SetPoint("TOPLEFT", 10, -10)
  tile.icon:SetTexCoord(0.07, 0.93, 0.07, 0.93)
  tile.label = newText(tile, "label")
  tile.label:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
  tile.text = newText(tile, "tile")
  tile.sub = newText(tile, "small")
  tile.sub:SetTextColor(0.62, 0.6, 0.55)
  tile:SetScript("OnEnter", showTooltip)
  tile:SetScript("OnLeave", hideTooltip)
  return tile
end

local function renderTiles(list, spec, x, y, width)
  local count = #spec.tiles
  local gap = 8
  local tileWidth = (width - gap * (count - 1)) / count
  local height = 0
  for i, t in ipairs(spec.tiles) do
    local tile = pool(list, "tile", createTile)
    local left = 10
    if t.icon then
      tile.icon:SetTexture(t.icon)
      tile.icon:Show()
      left = 48
    else
      tile.icon:Hide()
    end
    local inner = tileWidth - left - 10
    tile.label:ClearAllPoints()
    tile.label:SetPoint("TOPLEFT", left, -10)
    tile.label:SetWidth(inner)
    tile.label:SetText(string.upper(t.label or ""))
    tile.text:ClearAllPoints()
    tile.text:SetPoint("TOPLEFT", tile.label, "BOTTOMLEFT", 0, -4)
    tile.text:SetWidth(inner)
    tile.text:SetText(t.value or "")
    tile.sub:ClearAllPoints()
    tile.sub:SetPoint("TOPLEFT", tile.text, "BOTTOMLEFT", 0, -3)
    tile.sub:SetWidth(inner)
    tile.sub:SetText(t.sub or "")
    local h = 10 + tile.label:GetStringHeight() + 4 + tile.text:GetStringHeight() + 3 + tile.sub:GetStringHeight() + 10
    height = math.max(height, h, 52)
    wire(list, tile, t)
    tile:ClearAllPoints()
    tile:SetPoint("TOPLEFT", list.content, "TOPLEFT", x + (i - 1) * (tileWidth + gap), -y)
    tile:SetWidth(tileWidth)
    list.rendered[#list.rendered + 1] = (t.label or "") .. ": " .. (t.value or "") .. " " .. (t.sub or "")
  end
  for i = list.pools.tile.used - count + 1, list.pools.tile.used do
    list.pools.tile.items[i]:SetHeight(height)
  end
  return height + GAP
end

local function createBar(parent)
  local bar = CreateFrame("Button", nil, parent)
  bar.hover = Theme.fill(bar, C.hover, "HIGHLIGHT")
  bar.hover:SetPoint("TOPLEFT", -6, 3)
  bar.hover:SetPoint("BOTTOMRIGHT", 6, -3)
  bar.text = newText(bar, "body")
  bar.text:SetPoint("TOPLEFT")
  bar.right = newText(bar, "small", "RIGHT")
  bar.right:SetPoint("TOPRIGHT")
  bar.right:SetWidth(RIGHT_WIDTH)
  bar.track = Theme.fill(bar, C.barTrack, "ARTWORK")
  bar.track:SetHeight(6)
  bar.fills = {}
  bar:SetScript("OnEnter", showTooltip)
  bar:SetScript("OnLeave", hideTooltip)
  return bar
end

local function renderBar(list, spec, x, y, width)
  local bar = pool(list, "bar", createBar)
  bar.text:SetWidth(width - RIGHT_WIDTH - 8)
  bar.text:SetText(spec.text or "")
  bar.right:SetText(spec.right or "")
  local top = bar.text:GetStringHeight() + 5
  bar.track:ClearAllPoints()
  bar.track:SetPoint("TOPLEFT", 0, -top)
  bar.track:SetWidth(width)
  local max = math.max(1, spec.max or 1)
  local offset = 0
  for i, seg in ipairs(spec.segments or {}) do
    local fill = bar.fills[i]
    if not fill then
      fill = bar:CreateTexture(nil, "OVERLAY")
      fill:SetHeight(6)
      bar.fills[i] = fill
    end
    local w = width * math.min(1, (seg.value or 0) / max)
    local c = seg.color or C.barActive
    fill:SetColorTexture(c[1], c[2], c[3], c[4] or 1)
    fill:ClearAllPoints()
    fill:SetPoint("TOPLEFT", offset, -top)
    fill:SetWidth(math.max(0.01, w))
    fill:SetShown(w > 0)
    offset = offset + w
  end
  for i = #(spec.segments or {}) + 1, #bar.fills do
    bar.fills[i]:Hide()
  end
  wire(list, bar, spec)
  bar:ClearAllPoints()
  bar:SetPoint("TOPLEFT", list.content, "TOPLEFT", x, -y)
  bar:SetSize(width, top + 6)
  list.rendered[#list.rendered + 1] = (spec.text or "") .. (spec.right and ("  " .. spec.right) or "")
  return top + 6 + 10
end

local function createSegmentButton(parent)
  local b = CreateFrame("Button", nil, parent)
  b.bg = Theme.fill(b, C.card)
  b.bg:SetAllPoints()
  Theme.border(b)
  b.hover = Theme.fill(b, C.hover, "HIGHLIGHT")
  b.hover:SetAllPoints()
  b.text = newText(b, "body", "CENTER")
  b.text:SetPoint("CENTER")
  return b
end

local function renderSegment(list, spec, x, y, width)
  local count = #spec.options
  local gap = 6
  local w = (width - gap * (count - 1)) / count
  for i, opt in ipairs(spec.options) do
    local b = pool(list, "segment", createSegmentButton)
    local on = i == spec.selected
    local c = on and C.selected or C.card
    b.bg:SetColorTexture(c[1], c[2], c[3], c[4])
    b.text:SetText(opt.label)
    if on then
      b.text:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
    else
      b.text:SetTextColor(0.8, 0.77, 0.7)
    end
    wire(list, b, opt)
    b:ClearAllPoints()
    b:SetPoint("TOPLEFT", list.content, "TOPLEFT", x + (i - 1) * (w + gap), -y)
    b:SetSize(w, 26)
    list.rendered[#list.rendered + 1] = (on and "[" .. opt.label .. "]") or opt.label
  end
  return 26 + GAP
end

local function createDivider(parent)
  local d = CreateFrame("Frame", nil, parent)
  Theme.fill(d, C.line):SetAllPoints()
  return d
end

local function createPagerButton(parent)
  local b = CreateFrame("Button", nil, parent)
  b.bg = Theme.fill(b, C.card)
  b.bg:SetAllPoints()
  Theme.border(b)
  b.hover = Theme.fill(b, C.hover, "HIGHLIGHT")
  b.hover:SetAllPoints()
  b.text = newText(b, "heading", "CENTER")
  b.text:SetPoint("CENTER", 0, 1)
  return b
end

local renderRows

local function renderPager(list, spec, x, y, width)
  local prev = pool(list, "pagerButton", createPagerButton)
  prev.text:SetText("<")
  wire(list, prev, { action = spec.prev })
  prev:ClearAllPoints()
  prev:SetPoint("TOPLEFT", list.content, "TOPLEFT", x, -y)
  prev:SetSize(30, 30)
  local nextButton = pool(list, "pagerButton", createPagerButton)
  nextButton.text:SetText(">")
  wire(list, nextButton, { action = spec.next })
  nextButton:ClearAllPoints()
  nextButton:SetPoint("TOPLEFT", list.content, "TOPLEFT", x + width - 30, -y)
  nextButton:SetSize(30, 30)
  local used = renderRow(list, { kind = "title", text = spec.text, sub = spec.sub }, x + 40, y + 2, width - 80)
  return math.max(used, 34) + 6
end

local function renderCard(list, spec, x, y, width)
  local card = pool(list, "card", createCard)
  card.title:SetText(spec.title and string.upper(spec.title) or "")
  card.right:SetText(spec.right or "")
  if spec.title then
    list.rendered[#list.rendered + 1] = spec.title .. (spec.right and ("  " .. spec.right) or "")
  end
  local top = spec.title and (CARD_PAD + 20) or CARD_PAD
  local inner = renderRows(list, spec.rows or {}, x + CARD_PAD, y + top, width - CARD_PAD * 2)
  local height = top + inner + CARD_PAD - 4
  card:ClearAllPoints()
  card:SetPoint("TOPLEFT", list.content, "TOPLEFT", x, -y)
  card:SetSize(width, height)
  return height + GAP
end

-- Renders rows top to bottom from y; returns the height used.
renderRows = function(list, rows, x, y, width)
  local start = y
  for _, spec in ipairs(rows) do
    local kind = spec.kind
    if kind == "gap" then
      y = y + GAP
    elseif kind == "card" then
      y = y + renderCard(list, spec, x, y, width)
    elseif kind == "tiles" then
      y = y + renderTiles(list, spec, x, y, width)
    elseif kind == "bar" then
      y = y + renderBar(list, spec, x, y, width)
    elseif kind == "segment" then
      y = y + renderSegment(list, spec, x, y, width)
    elseif kind == "pager" then
      y = y + renderPager(list, spec, x, y, width)
    elseif kind == "divider" then
      local d = pool(list, "divider", createDivider)
      d:ClearAllPoints()
      d:SetPoint("TOPLEFT", list.content, "TOPLEFT", x, -(y + 2))
      d:SetSize(width, 1)
      y = y + 8
    else
      local used = renderRow(list, spec, x, y, width)
      if kind == "title" then
        used = used + 8
      end
      y = y + used
    end
  end
  -- rows inside a card end with their own spacing; trim the last gap
  return y - start
end

-- state = { content = scrollChild, width = number, pools = {}, onAction = function(action) }
function List.new(content, width, onAction)
  return { content = content, width = width, pools = {}, onAction = onAction, rendered = {} }
end

function List.render(list, rows)
  releaseAll(list)
  list.rendered = {}
  local height = renderRows(list, rows, 0, 0, list.width)
  list.content:SetHeight(math.max(1, height))
  return height
end

-- Everything the last render put on screen, top to bottom (for tests and /btq debug).
function List.text(list)
  return table.concat(list.rendered, "\n")
end
