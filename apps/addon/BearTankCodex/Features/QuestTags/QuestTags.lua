-- QuestTags: colors dungeon quests (and their chain steps) in the quest log and quest tracker, adds a thin
-- stripe beside the title and a tooltip line. Runs after Blizzard redraws (hooksecurefunc) and never changes the
-- visible text, so line sizes stay exactly what the game set.
local _, ns = ...
local QuestTags = ns.module("QuestTags")
local Utils = ns.module("QuestTags.utils")
local Api = ns.module("Services.Api")
local Store = ns.module("Core.Store")
local Events = ns.module("Core.Events")
local Scheduler = ns.module("Core.Scheduler")

local byKey = {}
local stats = {}
local hooked = {}
local TEXT_KEYS = { "Text", "HeaderText", "Title", "TitleText" }

local function markFor(id)
  return Utils.markFor(ns.data.questTags, byKey, id, Api.level(), Store.get("questTags") ~= false)
end

local function paint(owner)
  local fs = owner._btcText
  local text = fs and fs:GetText()
  if not text or text == "" then
    return
  end
  local mark = markFor(owner._btcQuest)
  if not mark then
    if owner._btcBar then
      owner._btcBar:Hide()
    end
    return
  end
  local colored = Utils.recolor(text, mark.dungeon.color)
  if colored ~= text then
    fs:SetText(colored)
  end
  if not owner._btcBar and owner.CreateTexture then
    owner._btcBar = owner:CreateTexture(nil, "OVERLAY")
    owner._btcBar:SetWidth(3)
  end
  local bar = owner._btcBar
  if bar then
    local r, g, b = Utils.rgb(mark.dungeon.color)
    bar:ClearAllPoints()
    bar:SetPoint("TOPRIGHT", fs, "TOPLEFT", -2, 0)
    bar:SetPoint("BOTTOMRIGHT", fs, "BOTTOMLEFT", -2, 0)
    bar:SetColorTexture(r, g, b, mark.chain and 0.45 or 1)
    bar:Show()
  end
end

local function addTooltipLine(owner)
  local mark = markFor(owner._btcQuest)
  if not mark or not GameTooltip:IsShown() or GameTooltip:GetOwner() ~= owner then
    return
  end
  local r, g, b = Utils.rgb(mark.dungeon.color)
  GameTooltip:AddLine("Bear Tank Codex: " .. mark.dungeon.name .. (mark.chain and " (a step in the chain)" or " quest"), r, g, b)
  GameTooltip:Show()
end

local function decorate(owner, fs, id)
  owner._btcText, owner._btcQuest = fs, id
  if not owner._btcHooked and owner.HookScript then
    owner._btcHooked = true
    pcall(owner.HookScript, owner, "OnLeave", paint) -- the game recolors titles when the mouse leaves
    pcall(owner.HookScript, owner, "OnEnter", addTooltipLine)
  end
  paint(owner)
end

local function scan(frame, depth, where)
  if not frame or depth < 0 or not frame.GetChildren then
    return
  end
  local children = { frame:GetChildren() }
  for i = 1, #children do
    local child = children[i]
    local id = rawget(child, "questID") or rawget(child, "id")
    if type(id) == "number" then
      local s = stats[where]
      s.withId = s.withId + 1
      local title = Api.questTitle(id)
      for _, key in ipairs(TEXT_KEYS) do
        local fs = rawget(child, key)
        if type(fs) == "table" and fs.GetText and Utils.isTitle(fs:GetText(), title) then
          s.titles = s.titles + 1
          if ns.data.questTags[id] then
            s.tagged = s.tagged + 1
          end
          decorate(child, fs, id)
        end
      end
    end
    scan(child, depth - 1, where)
  end
end

local function run(where, root, depth)
  stats[where] = { withId = 0, titles = 0, tagged = 0, found = root ~= nil }
  if root then
    local ok, err = pcall(scan, root, depth, where)
    if not ok then
      stats[where].err = err
    end
  end
end

local function scanLog()
  run("quest log", QuestScrollFrame, 6)
end

local function scanTracker()
  run("tracker", ObjectiveTrackerFrame, 7)
end

function QuestTags.refresh()
  scanLog()
  scanTracker()
end

local function hook(target, method, fn, key)
  if hooked[key] then
    return
  end
  if method then
    if target and type(target[method]) == "function" then
      hooksecurefunc(target, method, fn)
      hooked[key] = true
    end
  elseif type(_G[target]) == "function" then
    hooksecurefunc(target, fn)
    hooked[key] = true
  end
end

local function installHooks()
  hook("QuestLogQuests_Update", nil, scanLog, "QuestLogQuests_Update")
  hook("QuestMapFrame_UpdateAll", nil, scanLog, "QuestMapFrame_UpdateAll")
  hook(QuestObjectiveTracker, "Update", scanTracker, "QuestObjectiveTracker")
  hook(CampaignQuestObjectiveTracker, "Update", scanTracker, "CampaignQuestObjectiveTracker")
  hook(ObjectiveTrackerFrame, "Update", scanTracker, "ObjectiveTrackerFrame")
  if QuestScrollFrame and not hooked.QuestScrollFrameShow then
    QuestScrollFrame:HookScript("OnShow", scanLog)
    hooked.QuestScrollFrameShow = true
  end
end

function QuestTags.debugLines()
  QuestTags.refresh()
  local names = {}
  for k in pairs(hooked) do
    names[#names + 1] = k
  end
  table.sort(names)
  local lines = {
    "quest tags " .. (Store.get("questTags") ~= false and "on" or "off") .. ", hooks: " .. (#names > 0 and table.concat(names, ", ") or "none"),
  }
  for _, where in ipairs({ "quest log", "tracker" }) do
    local s = stats[where] or {}
    lines[#lines + 1] = string.format(
      "%s: window %s, lines with a quest id %d, titles %d, dungeon quests %d%s",
      where,
      s.found and "found" or "NOT found",
      s.withId or 0,
      s.titles or 0,
      s.tagged or 0,
      s.err and (", error: " .. tostring(s.err)) or ""
    )
  end
  return lines
end

function QuestTags.init()
  for _, d in ipairs(ns.data.dungeonQuests) do
    byKey[d.key] = d
  end
  local function onChange()
    pcall(installHooks) -- Blizzard's quest UI can load later; try again on each change
    Scheduler.debounce("questTags", 0.3, QuestTags.refresh)
  end
  Events.on("ADDON_LOADED", onChange)
  Events.subscribe("quests", onChange)
  Events.subscribe("player", onChange)
  onChange()
end
