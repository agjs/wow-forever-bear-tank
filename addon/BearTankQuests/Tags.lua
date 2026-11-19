-- Marks dungeon quests (and the other steps of their chains) in the quest log and the quest tracker.
-- It never changes any text: longer text overflowed the line the game had already sized. Instead, on quest TITLES only:
--   * the title is colored in the dungeon's color,
--   * a thin colored stripe is drawn left of the title (solid for the dungeon quest, faint for a chain step),
--   * the hover tooltip gets a line "Bear Tank Codex: <dungeon>".
-- The quest list is fixed (Data.lua). Only dungeons you haven't outleveled are marked.
local _, ns = ...

local BYKEY = {}
for _, d in ipairs(ns.DUNGEONS) do BYKEY[d.key] = d end

local OLD_PREFIX = "^|cff%x%x%x%x%x%x%[[^%]]*%]|r "   -- text tag from version 1.1; stripped if a line still has it

local function rgb(hex) return tonumber(hex:sub(1, 2), 16) / 255, tonumber(hex:sub(3, 4), 16) / 255, tonumber(hex:sub(5, 6), 16) / 255 end

local function infoFor(id)
  if BearTankQuestsDB and BearTankQuestsDB.tags == false then return nil end
  local t = id and ns.TAGS[id]
  if not t then return nil end
  local d = BYKEY[t.k]
  if not d or d.hi < (UnitLevel("player") or 1) then return nil end
  return d, t.chain
end

local function paint(owner)
  local fs = owner._btqFS
  if not fs then return end
  local d, chain = infoFor(owner._btqID)
  if not d then
    if owner._btqBar then owner._btqBar:Hide() end
    if owner._btqColored and owner._btqOrig then fs:SetTextColor(unpack(owner._btqOrig)) end
    owner._btqColored = false
    return
  end
  local r, g, b = rgb(d.color)
  if not owner._btqColored then owner._btqOrig = { fs:GetTextColor() } end
  fs:SetTextColor(r, g, b)
  owner._btqColored = true
  if not owner._btqBar then
    owner._btqBar = owner:CreateTexture(nil, "OVERLAY")
    owner._btqBar:SetWidth(3)
  end
  local bar = owner._btqBar
  bar:ClearAllPoints()
  bar:SetPoint("TOPRIGHT", fs, "TOPLEFT", -2, 0)
  bar:SetPoint("BOTTOMRIGHT", fs, "BOTTOMLEFT", -2, 0)
  bar:SetColorTexture(r, g, b, chain and 0.45 or 1)
  bar:Show()
end

local function onEnter(owner)
  local d, chain = infoFor(owner._btqID)
  if not d or not GameTooltip:IsShown() or GameTooltip:GetOwner() ~= owner then return end
  local r, g, b = rgb(d.color)
  GameTooltip:AddLine(("Bear Tank Codex: %s%s"):format(d.name, chain and " (a step in the chain)" or " quest"), r, g, b)
  GameTooltip:Show()
end

local function decorate(owner, fs, id)
  if not fs or not fs.GetText then return end
  local cur = fs:GetText()
  if cur and cur:find(OLD_PREFIX) then fs:SetText((cur:gsub(OLD_PREFIX, ""))) end
  if owner._btqID ~= id then owner._btqColored = false end   -- pooled frame reused for another quest
  owner._btqFS, owner._btqID = fs, id
  if not owner._btqHooked and owner.HookScript then
    owner._btqHooked = true
    pcall(owner.HookScript, owner, "OnLeave", paint)   -- the game recolors titles when the mouse leaves
    pcall(owner.HookScript, owner, "OnEnter", onEnter)
  end
  paint(owner)
end

-- Walk a frame tree a few levels deep. In the quest log, only Buttons are quest titles; objective lines are plain
-- Frames with the same fields, so they're skipped. In the tracker, only quest blocks have a HeaderText.
local function scan(frame, depth, textKey, titlesOnly)
  if not frame or depth < 0 or not frame.GetChildren then return end
  for _, child in ipairs({ frame:GetChildren() }) do
    local id = rawget(child, "questID") or rawget(child, "id")
    local fs = rawget(child, textKey)
    if type(id) == "number" and fs and (not titlesOnly or (child.GetObjectType and child:GetObjectType() == "Button")) then
      decorate(child, fs, id)
    elseif fs and fs.GetText then
      local cur = fs:GetText()   -- clean up text tags left by version 1.1 on any line
      if cur and cur:find(OLD_PREFIX) then fs:SetText((cur:gsub(OLD_PREFIX, ""))) end
    end
    scan(child, depth - 1, textKey, titlesOnly)
  end
end

local function scanLog()
  if QuestScrollFrame then pcall(scan, QuestScrollFrame, 4, "Text", true) end
end

local function scanTracker()
  if ObjectiveTrackerFrame then pcall(scan, ObjectiveTrackerFrame, 5, "HeaderText", false) end
end

function ns.RefreshTags()
  scanLog(); scanTracker()
end

local hooked = {}
local function hook(target, method, fn, key)
  if hooked[key] then return end
  if method then
    if target and type(target[method]) == "function" then hooksecurefunc(target, method, fn); hooked[key] = true end
  elseif type(_G[target]) == "function" then
    hooksecurefunc(target, fn); hooked[key] = true
  end
end

function ns.InstallTagHooks()
  hook("QuestLogQuests_Update", nil, scanLog, "qlq")
  hook("QuestMapFrame_UpdateAll", nil, scanLog, "qmf")
  for _, name in ipairs({ "QuestObjectiveTracker", "CampaignQuestObjectiveTracker" }) do
    hook(_G[name], "Update", scanTracker, name)
  end
  hook(ObjectiveTrackerFrame, "Update", scanTracker, "otf")
  if QuestScrollFrame and not hooked.qsfShow then QuestScrollFrame:HookScript("OnShow", scanLog); hooked.qsfShow = true end
end

local ev = CreateFrame("Frame")
ev:RegisterEvent("PLAYER_LOGIN")
ev:RegisterEvent("ADDON_LOADED")
ev:RegisterEvent("PLAYER_LEVEL_UP")
ev:RegisterEvent("QUEST_LOG_UPDATE")
local queued = false
ev:SetScript("OnEvent", function(_, event)
  if event == "PLAYER_LOGIN" or event == "ADDON_LOADED" then pcall(ns.InstallTagHooks) end
  if not queued then
    queued = true
    C_Timer.After(0.3, function() queued = false; ns.RefreshTags() end)
  end
end)
