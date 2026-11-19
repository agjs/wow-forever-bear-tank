-- Window: the main frame (/btq), styled like the website: a header with your level and zone, a sidebar with every
-- section, and a scrolling content area that re-renders when the state the active section depends on changes.
-- Nothing renders while the window is hidden.
local _, ns = ...
local Window = ns.module("UI.Window")
local Tabs = ns.module("UI.Tabs")
local List = ns.module("UI.List")
local Theme = ns.module("UI.Theme")
local State = ns.module("Services.State")
local Api = ns.module("Services.Api")
local Store = ns.module("Core.Store")
local Events = ns.module("Core.Events")
local Scheduler = ns.module("Core.Scheduler")
local Text = ns.module("Core.Text")

local C = Theme.COLORS
local WIDTH, HEIGHT = 820, 600
local HEADER, SIDEBAR, PAD = 54, 176, 18
local CONTENT_WIDTH = WIDTH - SIDEBAR - PAD * 2 - 8
local ALL_TOPICS = { "player", "quests", "spells", "skills", "bags", "gear" }

local frame, scroll, content, list, subtitle, thumb
local navButtons = {}

local function activeTab()
  return Tabs.get(Store.get("tab")) or Tabs.all()[1]
end

local function updateThumb()
  if not thumb then
    return
  end
  local viewHeight = scroll:GetHeight() or 0
  local total = content:GetHeight() or 0
  if total <= viewHeight + 1 then
    thumb:Hide()
    return
  end
  local size = math.max(24, viewHeight * viewHeight / total)
  local offset = (scroll:GetVerticalScroll() or 0) / (total - viewHeight) * (viewHeight - size)
  thumb:SetHeight(size)
  thumb:ClearAllPoints()
  thumb:SetPoint("TOPRIGHT", scroll, "TOPRIGHT", 10, -offset)
  thumb:Show()
end

function Window.render()
  if not frame or not frame:IsShown() then
    return
  end
  local tab = activeTab()
  local ctx = State.context()
  subtitle:SetText("Level " .. (ctx.level or "?") .. (ctx.zone and ctx.zone ~= "" and ("  ·  " .. ctx.zone) or ""))
  for id, b in pairs(navButtons) do
    local on = id == tab.id
    b.selected:SetShown(on)
    if on then
      b.text:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
    else
      b.text:SetTextColor(0.8, 0.77, 0.7)
    end
  end
  List.render(list, tab.build(ctx))
  updateThumb()
end

-- What the window shows right now, top to bottom (for tests and diagnostics).
function Window.text()
  return list and List.text(list) or ""
end

local function scheduleRender()
  Scheduler.debounce("window", 0.05, Window.render)
end

function Window.selectTab(id)
  Store.set("tab", id)
  scroll:SetVerticalScroll(0)
  Window.render()
end

-- ---------- actions from rows ----------

local function step(listKey, storeKey, delta)
  local all = ns.data[listKey]
  local current = Store.get(storeKey)
  local index = 1
  for i, d in ipairs(all) do
    if d.key == current then
      index = i
    end
  end
  Store.set(storeKey, all[(index - 1 + delta) % #all + 1].key)
end

local ACTIONS = {
  waypoint = function(a)
    local where = string.format("%s (%.1f, %.1f)", a.title, a.x, a.y)
    Text.say((Api.setWaypoint(a.zone, a.x, a.y, a.title) and "Map pin set on " or "Go to ") .. where .. ".")
  end,
  dungeon = function(a)
    step("dungeonQuests", "dungeon", a.delta)
    scroll:SetVerticalScroll(0)
    Window.render()
  end,
  guide = function(a)
    step("dungeonGuides", "guide", a.delta)
    scroll:SetVerticalScroll(0)
    Window.render()
  end,
  openDungeon = function(a)
    Store.set("dungeon", a.key)
    Window.selectTab("dungeons")
  end,
  openGuide = function(a)
    Store.set("guide", a.key)
    Window.selectTab("guides")
  end,
  tab = function(a)
    Window.selectTab(a.id)
  end,
  set = function(a)
    Store.set(a.key, a.value)
    Window.render()
  end,
}

local function onAction(action)
  local fn = action and ACTIONS[action.type]
  if fn then
    fn(action)
  end
end

-- ---------- frame ----------

local function createNav(parent)
  local y = -HEADER - 10
  local group
  for _, tab in ipairs(Tabs.all()) do
    if tab.group ~= group then
      group = tab.group
      local label = parent:CreateFontString(nil, "OVERLAY")
      label:SetFontObject(Theme.font("label"))
      label:SetTextColor(0.55, 0.52, 0.46)
      label:SetPoint("TOPLEFT", 20, y - 8)
      label:SetText(string.upper(group or ""))
      y = y - 26
    end
    local b = CreateFrame("Button", nil, parent)
    b:SetSize(SIDEBAR - 16, 28)
    b:SetPoint("TOPLEFT", 8, y)
    b.selected = Theme.fill(b, C.selected, "BACKGROUND")
    b.selected:SetAllPoints()
    b.selected:Hide()
    local hover = Theme.fill(b, C.hover, "HIGHLIGHT")
    hover:SetAllPoints()
    b.icon = b:CreateTexture(nil, "ARTWORK")
    b.icon:SetSize(18, 18)
    b.icon:SetPoint("LEFT", 10, 0)
    b.icon:SetTexCoord(0.07, 0.93, 0.07, 0.93)
    b.icon:SetTexture(Text.icon(tab.icon))
    b.text = b:CreateFontString(nil, "OVERLAY")
    b.text:SetFontObject(Theme.font("body"))
    b.text:SetPoint("LEFT", b.icon, "RIGHT", 10, 0)
    b.text:SetText(tab.label)
    b:SetScript("OnClick", function()
      Window.selectTab(tab.id)
    end)
    navButtons[tab.id] = b
    y = y - 30
  end
end

local function createFrame()
  local f = CreateFrame("Frame", "BearTankCodexFrame", UIParent)
  f:SetSize(WIDTH, HEIGHT)
  f:SetFrameStrata("HIGH")
  f:SetToplevel(true)
  f:SetMovable(true)
  f:EnableMouse(true)
  f:SetClampedToScreen(true)
  local pos = Store.get("position")
  if pos then
    f:SetPoint(pos[1], UIParent, pos[2], pos[3], pos[4])
  else
    f:SetPoint("CENTER")
  end
  tinsert(UISpecialFrames, "BearTankCodexFrame") -- Escape closes it
  f:SetScript("OnShow", scheduleRender)

  Theme.fill(f, C.background):SetAllPoints()
  Theme.border(f, C.border)

  -- header: drag to move
  local header = CreateFrame("Frame", nil, f)
  header:SetPoint("TOPLEFT", 1, -1)
  header:SetPoint("TOPRIGHT", -1, -1)
  header:SetHeight(HEADER)
  Theme.fill(header, C.header):SetAllPoints()
  local rule = Theme.fill(header, C.line, "BORDER")
  rule:SetPoint("BOTTOMLEFT")
  rule:SetPoint("BOTTOMRIGHT")
  rule:SetHeight(1)
  header:EnableMouse(true)
  header:RegisterForDrag("LeftButton")
  header:SetScript("OnDragStart", function()
    f:StartMoving()
  end)
  header:SetScript("OnDragStop", function()
    f:StopMovingOrSizing()
    local point, _, relativePoint, x, y = f:GetPoint()
    Store.set("position", { point, relativePoint, x, y })
  end)

  local logo = header:CreateTexture(nil, "ARTWORK")
  logo:SetSize(34, 34)
  logo:SetPoint("LEFT", 14, 0)
  logo:SetTexture(Text.icon("ability_racial_bearform"))
  logo:SetTexCoord(0.07, 0.93, 0.07, 0.93)

  local title = header:CreateFontString(nil, "OVERLAY")
  title:SetFontObject(Theme.font("heading"))
  title:SetTextColor(C.gold[1], C.gold[2], C.gold[3])
  title:SetPoint("TOPLEFT", logo, "TOPRIGHT", 12, -1)
  title:SetText("Bear Tank Codex")

  subtitle = header:CreateFontString(nil, "OVERLAY")
  subtitle:SetFontObject(Theme.font("small"))
  subtitle:SetTextColor(0.62, 0.6, 0.55)
  subtitle:SetPoint("TOPLEFT", title, "BOTTOMLEFT", 0, -4)

  local close = CreateFrame("Button", nil, header)
  close:SetSize(28, 28)
  close:SetPoint("RIGHT", -12, 0)
  local closeHover = Theme.fill(close, C.hover, "HIGHLIGHT")
  closeHover:SetAllPoints()
  local x = close:CreateFontString(nil, "OVERLAY")
  x:SetFontObject(Theme.font("title"))
  x:SetPoint("CENTER", 0, 1)
  x:SetText("×")
  x:SetTextColor(0.7, 0.67, 0.6)
  close:SetScript("OnClick", function()
    f:Hide()
  end)

  -- sidebar
  local sidebar = CreateFrame("Frame", nil, f)
  sidebar:SetPoint("TOPLEFT", 1, -HEADER - 1)
  sidebar:SetPoint("BOTTOMLEFT", 1, 1)
  sidebar:SetWidth(SIDEBAR)
  Theme.fill(sidebar, C.sidebar):SetAllPoints()
  local edge = Theme.fill(sidebar, C.line, "BORDER")
  edge:SetPoint("TOPRIGHT")
  edge:SetPoint("BOTTOMRIGHT")
  edge:SetWidth(1)
  createNav(f)

  -- content
  scroll = CreateFrame("ScrollFrame", nil, f)
  scroll:SetPoint("TOPLEFT", SIDEBAR + PAD, -HEADER - PAD)
  scroll:SetPoint("BOTTOMRIGHT", -PAD - 8, PAD)
  scroll:EnableMouseWheel(true)
  content = CreateFrame("Frame", nil, scroll)
  content:SetSize(CONTENT_WIDTH, 1)
  scroll:SetScrollChild(content)
  scroll:SetScript("OnMouseWheel", function(self, delta)
    local max = math.max(0, content:GetHeight() - self:GetHeight())
    self:SetVerticalScroll(math.min(max, math.max(0, self:GetVerticalScroll() - delta * 48)))
    updateThumb()
  end)
  thumb = Theme.fill(f, C.border, "OVERLAY")
  thumb:SetWidth(3)
  thumb:Hide()

  list = List.new(content, CONTENT_WIDTH, onAction)
  f:Hide()
  return f
end

function Window.toggle(tabId)
  if not frame then
    frame = createFrame()
  end
  if tabId then
    Store.set("tab", tabId)
    frame:Show()
    Window.render()
  elseif frame:IsShown() then
    frame:Hide()
  else
    frame:Show()
  end
end

function Window.init()
  for _, topic in ipairs(ALL_TOPICS) do
    Events.subscribe(topic, function()
      if not frame or not frame:IsShown() then
        return
      end
      for _, t in ipairs(activeTab().topics or {}) do
        if t == topic then
          scheduleRender()
          return
        end
      end
    end)
  end
end
