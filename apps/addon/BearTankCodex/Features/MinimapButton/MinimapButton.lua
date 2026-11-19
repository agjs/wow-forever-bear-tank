-- MinimapButton: a round bear button on the minimap's edge. Click opens /btq, drag moves it around the edge.
-- /btq minimap hides or shows it. Position and visibility are saved per account.
local _, ns = ...
local MinimapButton = ns.module("MinimapButton")
local Utils = ns.module("MinimapButton.utils")
local Store = ns.module("Core.Store")
local Text = ns.module("Core.Text")

local SIZE = 31
local ICON = "Interface\\Icons\\Ability_Racial_BearForm"

local button

local function radius()
  local width = Minimap.GetWidth and Minimap:GetWidth() or nil
  return (width or 140) / 2 + 10
end

local function place()
  local x, y = Utils.offset(Store.get("minimapAngle") or Utils.DEFAULT_ANGLE, radius())
  button:ClearAllPoints()
  button:SetPoint("CENTER", Minimap, "CENTER", x, y)
end

local function followCursor()
  local mx, my = Minimap:GetCenter()
  local cx, cy = GetCursorPosition()
  local scale = Minimap:GetEffectiveScale()
  Store.set("minimapAngle", Utils.angleTo(mx, my, cx / scale, cy / scale))
  place()
end

local function create()
  local b = CreateFrame("Button", "BearTankCodexMinimapButton", Minimap)
  b:SetSize(SIZE, SIZE)
  b:SetFrameStrata("MEDIUM")
  b:SetFrameLevel(8)
  b:RegisterForClicks("AnyUp")
  b:RegisterForDrag("LeftButton")
  b:SetHighlightTexture("Interface\\Minimap\\UI-Minimap-ZoomButton-Highlight")

  local background = b:CreateTexture(nil, "BACKGROUND")
  background:SetTexture("Interface\\Minimap\\UI-Minimap-Background")
  background:SetSize(20, 20)
  background:SetPoint("TOPLEFT", 7, -5)

  local icon = b:CreateTexture(nil, "ARTWORK")
  icon:SetTexture(ICON)
  icon:SetSize(17, 17)
  icon:SetPoint("TOPLEFT", 7, -6)
  icon:SetTexCoord(0.07, 0.93, 0.07, 0.93)

  local border = b:CreateTexture(nil, "OVERLAY")
  border:SetTexture("Interface\\Minimap\\MiniMap-TrackingBorder")
  border:SetSize(53, 53)
  border:SetPoint("TOPLEFT")

  b:SetScript("OnClick", function()
    ns.module("UI.Window").toggle()
  end)
  b:SetScript("OnDragStart", function(self)
    self:SetScript("OnUpdate", followCursor)
  end)
  b:SetScript("OnDragStop", function(self)
    self:SetScript("OnUpdate", nil)
  end)
  b:SetScript("OnEnter", function(self)
    GameTooltip:SetOwner(self, "ANCHOR_LEFT")
    GameTooltip:SetText("Bear Tank Codex")
    GameTooltip:AddLine("Click to open or close.", 1, 1, 1)
    GameTooltip:AddLine("Drag to move it around the minimap.", 0.66, 0.66, 0.66)
    GameTooltip:Show()
  end)
  b:SetScript("OnLeave", function()
    GameTooltip:Hide()
  end)
  return b
end

function MinimapButton.refresh()
  if not button then
    return
  end
  if Store.get("minimapHidden") then
    button:Hide()
  else
    place()
    button:Show()
  end
end

function MinimapButton.toggle()
  Store.set("minimapHidden", not Store.get("minimapHidden"))
  MinimapButton.refresh()
  Text.say("minimap button " .. (Store.get("minimapHidden") and "hidden. Type /btq minimap to show it." or "shown."))
end

function MinimapButton.init()
  if not Minimap then
    return
  end
  button = create()
  MinimapButton.refresh()
end
