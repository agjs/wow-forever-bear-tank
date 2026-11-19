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

-- strip color codes so we can compare and re-wrap text; escape codes don't take up space on screen
local function plain(t) return (t:gsub("|c%x%x%x%x%x%x%x%x", ""):gsub("|r", "")) end

local function paint(owner)
  local fs = owner._btqFS
  if not fs or not fs.GetText then return end
  local cur = fs:GetText()
  if not cur or cur == "" then return end
  local d, chain = infoFor(owner._btqID)
  if not d then
    if owner._btqBar then owner._btqBar:Hide() end
    if cur:find("^|cff" .. (owner._btqHex or "zzzzzz")) then fs:SetText(owner._btqOrigText or plain(cur)) end
    return
  end
  local wrapped = "|cff" .. d.color .. plain(cur) .. "|r"
  if cur ~= wrapped then owner._btqOrigText = cur; fs:SetText(wrapped) end
  owner._btqHex = d.color
  local r, g, b = rgb(d.color)
  if not owner._btqBar and owner.CreateTexture then
    owner._btqBar = owner:CreateTexture(nil, "OVERLAY")
    owner._btqBar:SetWidth(3)
  end
  local bar = owner._btqBar
  if bar then
    bar:ClearAllPoints()
    bar:SetPoint("TOPRIGHT", fs, "TOPLEFT", -2, 0)
    bar:SetPoint("BOTTOMRIGHT", fs, "BOTTOMLEFT", -2, 0)
    bar:SetColorTexture(r, g, b, chain and 0.45 or 1)
    bar:Show()
  end
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
  owner._btqFS, owner._btqID = fs, id
  if not owner._btqHooked and owner.HookScript then
    owner._btqHooked = true
    pcall(owner.HookScript, owner, "OnLeave", paint)   -- the game recolors titles when the mouse leaves
    pcall(owner.HookScript, owner, "OnEnter", onEnter)
  end
  paint(owner)
end

-- Is this line the quest's title (not one of its objective lines)? Compare against the game's own title text.
local function isTitle(id, fs)
  local t = C_QuestLog and C_QuestLog.GetTitleForQuestID and C_QuestLog.GetTitleForQuestID(id)
  local txt = fs.GetText and fs:GetText()
  if not t or not txt then return false end
  -- the log may put a level like "[53] " in front; objective lines such as "Speak with <name>" don't count
  local p = plain(txt):gsub("^%s+", ""):gsub("^%[[^%]]*%]%s*", ""):gsub("%s+$", "")
  return p == t
end

ns.stats = {}
-- Walk a frame tree a few levels deep and mark quest titles.
local function scan(frame, depth, where)
  if not frame or depth < 0 or not frame.GetChildren then return end
  for _, child in ipairs({ frame:GetChildren() }) do
    local id = rawget(child, "questID") or rawget(child, "id")
    if type(id) == "number" then
      local st = ns.stats[where]; st.withId = st.withId + 1
      for _, key in ipairs({ "Text", "HeaderText", "Title", "TitleText" }) do
        local fs = rawget(child, key)
        if type(fs) == "table" and fs.GetText then
          local cur = fs:GetText()
          if cur and cur:find(OLD_PREFIX) then fs:SetText((cur:gsub(OLD_PREFIX, ""))) end
          if isTitle(id, fs) then
            st.titles = st.titles + 1
            if ns.TAGS[id] then st.tagged = st.tagged + 1 end
            decorate(child, fs, id)
          end
        end
      end
    end
    scan(child, depth - 1, where)
  end
end

local function run(where, root, depth)
  ns.stats[where] = { withId = 0, titles = 0, tagged = 0, found = root ~= nil }
  if root then local ok, err = pcall(scan, root, depth, where); if not ok then ns.stats[where].err = err end end
end

local function scanLog() run("questlog", QuestScrollFrame, 6) end
local function scanTracker() run("tracker", ObjectiveTrackerFrame, 7) end

function ns.DebugTags()
  ns.RefreshTags()
  local hooks = {}
  for k in pairs(ns.hooked) do hooks[#hooks + 1] = k end
  print("|cfff2c46dBear Tank Codex debug:|r tags " .. ((BearTankQuestsDB.tags == false) and "OFF" or "on") .. ", level " .. (UnitLevel("player") or "?") .. ", hooks: " .. (#hooks > 0 and table.concat(hooks, ", ") or "none"))
  for _, w in ipairs({ "questlog", "tracker" }) do
    local s = ns.stats[w] or {}
    print(("  %s: window %s, lines with a quest id %d, quest titles %d, dungeon quests %d%s"):format(w, s.found and "found" or "NOT found", s.withId or 0, s.titles or 0, s.tagged or 0, s.err and (", error: " .. tostring(s.err)) or ""))
  end
end

function ns.RefreshTags()
  scanLog(); scanTracker()
end

local hooked = {}
ns.hooked = hooked
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
