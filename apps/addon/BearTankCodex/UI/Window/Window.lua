-- Window: the main frame (/btq). Tab bar, scrolling content, and re-rendering of the active tab when the state
-- it depends on changes. Nothing renders while the window is hidden.
local _, ns = ...
local Window = ns.module("UI.Window")
local Tabs = ns.module("UI.Tabs")
local List = ns.module("UI.List")
local State = ns.module("Services.State")
local Api = ns.module("Services.Api")
local Store = ns.module("Core.Store")
local Events = ns.module("Core.Events")
local Scheduler = ns.module("Core.Scheduler")
local Text = ns.module("Core.Text")

local WIDTH, HEIGHT = 470, 580
local CONTENT_WIDTH = WIDTH - 50
local ALL_TOPICS = { "player", "quests", "spells", "skills", "bags" }

local frame, scroll, list, title
local tabButtons = {}

local function activeTab()
  return Tabs.get(Store.get("tab")) or Tabs.all()[1]
end

function Window.render()
  if not frame or not frame:IsShown() then
    return
  end
  local tab = activeTab()
  local ctx = State.context()
  title:SetText("Bear Tank Codex  " .. Text.color("muted", "level " .. (ctx.level or "?")))
  for id, button in pairs(tabButtons) do
    if id == tab.id then
      button:LockHighlight()
    else
      button:UnlockHighlight()
    end
  end
  List.render(list, tab.build(ctx))
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

local function stepDungeon(delta)
  local all = ns.data.dungeonQuests
  local current = Store.get("dungeon")
  local index = 1
  for i, d in ipairs(all) do
    if d.key == current then
      index = i
    end
  end
  Store.set("dungeon", all[(index - 1 + delta) % #all + 1].key)
end

local ACTIONS = {
  waypoint = function(a)
    local where = string.format("%s (%.1f, %.1f)", a.title, a.x, a.y)
    Text.say((Api.setWaypoint(a.zone, a.x, a.y, a.title) and "Map pin set on " or "Go to ") .. where .. ".")
  end,
  dungeon = function(a)
    stepDungeon(a.delta)
    scroll:SetVerticalScroll(0)
    Window.render()
  end,
  openDungeon = function(a)
    Store.set("dungeon", a.key)
    Window.selectTab("dungeons")
  end,
}

local function onAction(action)
  local fn = action and ACTIONS[action.type]
  if fn then
    fn(action)
  end
end

-- ---------- frame ----------

local function createFrame()
  local ok, f = pcall(CreateFrame, "Frame", "BearTankCodexFrame", UIParent, "BasicFrameTemplateWithInset")
  if not ok or not f then
    f = CreateFrame("Frame", "BearTankCodexFrame", UIParent, "BackdropTemplate")
    f:SetBackdrop({
      bgFile = "Interface\\Tooltips\\UI-Tooltip-Background",
      edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border",
      edgeSize = 14,
      insets = { left = 3, right = 3, top = 3, bottom = 3 },
    })
    f:SetBackdropColor(0, 0, 0, 0.92)
    CreateFrame("Button", nil, f, "UIPanelCloseButton"):SetPoint("TOPRIGHT", 2, 2)
  end
  f:SetSize(WIDTH, HEIGHT)
  f:SetFrameStrata("HIGH")
  f:SetMovable(true)
  f:EnableMouse(true)
  f:SetClampedToScreen(true)
  f:RegisterForDrag("LeftButton")
  f:SetScript("OnDragStart", f.StartMoving)
  f:SetScript("OnDragStop", function(self)
    self:StopMovingOrSizing()
    local point, _, relativePoint, x, y = self:GetPoint()
    Store.set("position", { point, relativePoint, x, y })
  end)
  local pos = Store.get("position")
  if pos then
    f:SetPoint(pos[1], UIParent, pos[2], pos[3], pos[4])
  else
    f:SetPoint("CENTER")
  end
  tinsert(UISpecialFrames, "BearTankCodexFrame") -- Escape closes it
  f:SetScript("OnShow", scheduleRender)

  title = f:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  title:SetPoint("TOP", 0, -5)
  title:SetText("Bear Tank Codex")

  local x = 12
  for _, tab in ipairs(Tabs.all()) do
    local b = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
    b:SetText(tab.label)
    b:SetSize(b:GetFontString():GetStringWidth() + 24, 22)
    b:SetPoint("TOPLEFT", x, -28)
    b:SetScript("OnClick", function()
      Window.selectTab(tab.id)
    end)
    x = x + b:GetWidth() + 4
    tabButtons[tab.id] = b
  end

  scroll = CreateFrame("ScrollFrame", nil, f)
  scroll:SetPoint("TOPLEFT", 18, -60)
  scroll:SetPoint("BOTTOMRIGHT", -18, 12)
  scroll:EnableMouseWheel(true)
  local content = CreateFrame("Frame", nil, scroll)
  content:SetSize(CONTENT_WIDTH, 1)
  scroll:SetScrollChild(content)
  scroll:SetScript("OnMouseWheel", function(self, delta)
    local max = math.max(0, content:GetHeight() - self:GetHeight())
    self:SetVerticalScroll(math.min(max, math.max(0, self:GetVerticalScroll() - delta * 40)))
  end)

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
