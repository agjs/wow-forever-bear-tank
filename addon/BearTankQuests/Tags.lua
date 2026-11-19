-- Marks dungeon quests (and the earlier and later steps of their chains) in the quest log and the quest tracker
-- with a colored tag like [ST] or [ST chain]. The quest list is fixed (Data.lua); nothing is looked up from the web.
-- Only dungeons you haven't outleveled are tagged. Blizzard's code always runs first; we only prepend text afterwards.
local _, ns = ...

local BYKEY = {}
for _, d in ipairs(ns.DUNGEONS) do BYKEY[d.key] = d end

local PREFIX = "^|cff%x%x%x%x%x%x%[[^%]]*%]|r "   -- our own tag, so we never add it twice

local function tagFor(id)
  if BearTankQuestsDB and BearTankQuestsDB.tags == false then return nil end
  local t = id and ns.TAGS[id]
  if not t then return nil end
  local d = BYKEY[t.k]
  if not d or d.hi < (UnitLevel("player") or 1) then return nil end
  return ("|cff%s[%s%s]|r "):format(d.color, d.short, t.chain and " chain" or "")
end

local function decorate(fs, id)
  if not fs or not fs.GetText then return end
  local cur = fs:GetText()
  if not cur or cur == "" then return end
  local plain = cur:gsub(PREFIX, "")
  local tag = tagFor(id)
  local want = tag and (tag .. plain) or plain
  if want ~= cur then fs:SetText(want) end
end

-- Walk a frame tree a few levels deep and decorate anything that looks like a quest line.
local function scan(frame, depth, textKey)
  if not frame or depth < 0 or not frame.GetChildren then return end
  for _, child in ipairs({ frame:GetChildren() }) do
    local id = rawget(child, "questID") or rawget(child, "id")
    local fs = rawget(child, textKey)
    if type(id) == "number" and fs then decorate(fs, id) end
    scan(child, depth - 1, textKey)
  end
end

local function scanLog()
  if QuestScrollFrame then pcall(scan, QuestScrollFrame, 4, "Text") end
end

local function scanTracker()
  if ObjectiveTrackerFrame then pcall(scan, ObjectiveTrackerFrame, 5, "HeaderText") end
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
