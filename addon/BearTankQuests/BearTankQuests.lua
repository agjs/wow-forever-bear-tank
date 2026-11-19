-- Bear Tank Codex: Dungeon Quests. Type /btq to open.
local ADDON, ns = ...
local DUNGEONS = ns.DUNGEONS

-- ---------- quest status (works with the modern C_QuestLog API and the old globals) ----------
local QL = C_QuestLog or {}
local isDone = QL.IsQuestFlaggedCompleted or IsQuestFlaggedCompleted or function() return false end
local logIndex = QL.GetLogIndexForQuestID or GetQuestLogIndexByID or function() return nil end

local function status(id)
  if isDone(id) then return 2 end
  local i = logIndex(id)
  if i and i > 0 then return 1 end
  return 0
end

local ICON = {
  [0] = "|TInterface\\RaidFrame\\ReadyCheck-NotReady:14:14|t",
  [1] = "|TInterface\\RaidFrame\\ReadyCheck-Waiting:14:14|t",
  [2] = "|TInterface\\RaidFrame\\ReadyCheck-Ready:14:14|t",
}
local LABEL = { [0] = "|cffff7070not picked up|r", [1] = "|cffffd040in your log|r", [2] = "|cff60e070done|r" }

local function counts(d)
  local c = { [0] = 0, [1] = 0, [2] = 0 }
  local total = 0
  for _, s in ipairs(d.stops) do
    for _, q in ipairs(s.q) do c[status(q.id)] = c[status(q.id)] + 1; total = total + 1 end
  end
  return c, total
end

-- ---------- map pins: find a zone's map ID by name, then set the built-in waypoint (and TomTom if installed) ----------
local zoneMaps
local function mapIdFor(zone)
  if not zoneMaps then
    zoneMaps = {}
    local ok = pcall(function()
      local m = C_Map.GetBestMapForUnit("player")
      local rootId = m
      while m do
        local info = C_Map.GetMapInfo(m)
        if not info or not info.parentMapID or info.parentMapID == 0 then break end
        rootId = info.parentMapID
        m = info.parentMapID
      end
      for _, top in ipairs({ rootId, 947, 1414, 1415 }) do
        local kids = top and C_Map.GetMapChildrenInfo(top, nil, true)
        for _, k in ipairs(kids or {}) do
          if k.name and not zoneMaps[k.name] then zoneMaps[k.name] = k.mapID end
        end
      end
    end)
    if not ok then zoneMaps = {} end
  end
  return zoneMaps[zone]
end

local function pin(stop)
  if not stop.x then return end
  local text = ("%s (%.1f, %.1f)"):format(stop.title, stop.x, stop.y)
  local id = mapIdFor(stop.zone)
  local placed = false
  if id then
    if TomTom and TomTom.AddWaypoint then
      placed = pcall(TomTom.AddWaypoint, TomTom, id, stop.x / 100, stop.y / 100, { title = stop.title }) or placed
    end
    pcall(function()
      if C_Map.CanSetUserWaypointOnMap(id) and UiMapPoint then
        C_Map.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(id, stop.x / 100, stop.y / 100))
        if C_SuperTrack and C_SuperTrack.SetSuperTrackedUserWaypoint then C_SuperTrack.SetSuperTrackedUserWaypoint(true) end
        placed = true
      end
    end)
  end
  print("|cfff2c46dBear Tank Codex:|r " .. (placed and "map pin set on " or "go to ") .. text)
end

-- ---------- choosing a dungeon ----------
local function defaultIndex()
  local lvl = UnitLevel("player") or 1
  for i, d in ipairs(DUNGEONS) do
    local c, total = counts(d)
    if d.hi >= lvl and c[2] < total then return i end
  end
  return 1
end

-- ---------- window ----------
local f, scroll, content, header, summary, nextStep, title
local pool, used = {}, 0
local WIDTH = 440

local function makeFrame()
  local ok
  ok, f = pcall(CreateFrame, "Frame", "BearTankQuestsFrame", UIParent, "BasicFrameTemplateWithInset")
  if not ok or not f then
    f = CreateFrame("Frame", "BearTankQuestsFrame", UIParent, "BackdropTemplate")
    f:SetBackdrop({ bgFile = "Interface\\Tooltips\\UI-Tooltip-Background", edgeFile = "Interface\\Tooltips\\UI-Tooltip-Border", edgeSize = 14, insets = { left = 3, right = 3, top = 3, bottom = 3 } })
    f:SetBackdropColor(0, 0, 0, 0.92)
    local close = CreateFrame("Button", nil, f, "UIPanelCloseButton")
    close:SetPoint("TOPRIGHT", 2, 2)
  end
  f:SetSize(WIDTH + 40, 560)
  f:SetFrameStrata("HIGH")
  f:SetMovable(true); f:EnableMouse(true); f:SetClampedToScreen(true)
  f:RegisterForDrag("LeftButton")
  f:SetScript("OnDragStart", f.StartMoving)
  f:SetScript("OnDragStop", function(self)
    self:StopMovingOrSizing()
    local p, _, rp, x, y = self:GetPoint()
    BearTankQuestsDB.pos = { p, rp, x, y }
  end)
  local pos = BearTankQuestsDB.pos
  if pos then f:SetPoint(pos[1], UIParent, pos[2], pos[3], pos[4]) else f:SetPoint("CENTER") end
  tinsert(UISpecialFrames, "BearTankQuestsFrame")

  title = f:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  title:SetPoint("TOP", 0, -5)
  title:SetText("Bear Tank Codex: Dungeon quests")

  local prev = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  prev:SetSize(28, 22); prev:SetPoint("TOPLEFT", 14, -30); prev:SetText("<")
  local nxt = CreateFrame("Button", nil, f, "UIPanelButtonTemplate")
  nxt:SetSize(28, 22); nxt:SetPoint("TOPRIGHT", -14, -30); nxt:SetText(">")
  prev:SetScript("OnClick", function() BearTankQuestsDB.sel = ((BearTankQuestsDB.sel or 1) - 2) % #DUNGEONS + 1; ns.Refresh() end)
  nxt:SetScript("OnClick", function() BearTankQuestsDB.sel = (BearTankQuestsDB.sel or 1) % #DUNGEONS + 1; ns.Refresh() end)

  header = f:CreateFontString(nil, "OVERLAY", "GameFontNormalLarge")
  header:SetPoint("TOP", 0, -33)

  summary = f:CreateFontString(nil, "OVERLAY", "GameFontHighlightSmall")
  summary:SetPoint("TOPLEFT", 18, -60); summary:SetWidth(WIDTH); summary:SetJustifyH("LEFT")

  nextStep = f:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
  nextStep:SetPoint("TOPLEFT", summary, "BOTTOMLEFT", 0, -8); nextStep:SetWidth(WIDTH); nextStep:SetJustifyH("LEFT")
  if nextStep.SetWordWrap then nextStep:SetWordWrap(true) end

  scroll = CreateFrame("ScrollFrame", nil, f)
  scroll:SetPoint("TOPLEFT", 14, -120)
  scroll:SetPoint("BOTTOMRIGHT", -14, 12)
  scroll:EnableMouseWheel(true)
  scroll:SetScript("OnMouseWheel", function(self, delta)
    local max = math.max(0, content:GetHeight() - self:GetHeight())
    self:SetVerticalScroll(math.min(max, math.max(0, self:GetVerticalScroll() - delta * 40)))
  end)
  content = CreateFrame("Frame", nil, scroll)
  content:SetSize(WIDTH, 10)
  scroll:SetScrollChild(content)
  f:Hide()
end

-- simple pool of clickable text lines
local function line()
  used = used + 1
  local b = pool[used]
  if not b then
    b = CreateFrame("Button", nil, content)
    b.text = b:CreateFontString(nil, "OVERLAY", "GameFontHighlight")
    b.text:SetPoint("TOPLEFT"); b.text:SetJustifyH("LEFT")
    if b.text.SetWordWrap then b.text:SetWordWrap(true) end
    b:SetHighlightTexture("Interface\\QuestFrame\\UI-QuestTitleHighlight", "ADD")
    pool[used] = b
  end
  b:Show(); b:SetScript("OnClick", nil); b:EnableMouse(false)
  b:GetHighlightTexture():SetAlpha(0)
  return b
end

local function put(y, indent, text, font, onClick)
  local b = line()
  b.text:SetFontObject(font or "GameFontHighlight")
  b.text:SetWidth(WIDTH - indent)
  b.text:SetText(text)
  local h = math.max(14, b.text:GetStringHeight())
  b:ClearAllPoints(); b:SetPoint("TOPLEFT", indent, -y); b:SetSize(WIDTH - indent, h)
  if onClick then b:EnableMouse(true); b:SetScript("OnClick", onClick); b:GetHighlightTexture():SetAlpha(0.6) end
  return y + h
end

function ns.Refresh()
  if not f or not f:IsShown() then return end
  if not BearTankQuestsDB.sel or not DUNGEONS[BearTankQuestsDB.sel] then BearTankQuestsDB.sel = defaultIndex() end
  local d = DUNGEONS[BearTankQuestsDB.sel]
  local lvl = UnitLevel("player") or 1
  local c, total = counts(d)
  header:SetText(d.name)
  summary:SetText(("Levels %d-%d  |  %s %d done   %s %d in your log   %s %d not picked up"):format(d.lo, d.hi, ICON[2], c[2], ICON[1], c[1], ICON[0], c[0]))

  local first, stopsLeft
  for _, s in ipairs(d.stops) do
    if not s.inside then
      local names = {}
      for _, q in ipairs(s.q) do if status(q.id) == 0 then names[#names + 1] = q.name end end
      if #names > 0 then
        stopsLeft = (stopsLeft or 0) + 1
        if not first then first = { s = s, names = names } end
      end
    end
  end
  if first then
    nextStep:SetText(("|cfff2c46dNext:|r go to |cffffffff%s|r and pick up %s.%s"):format(first.s.title, table.concat(first.names, ", "),
      stopsLeft > 1 and (" Then %d more stop%s below."):format(stopsLeft - 1, stopsLeft > 2 and "s" or "") or ""))
  elseif c[2] == total then
    nextStep:SetText("|cff60e070All quests done.|r Use > to pick the next dungeon.")
  else
    nextStep:SetText(("|cfff2c46dNext:|r you have everything you can pick up outside. Run %s and finish the %d quest%s in your log."):format(d.name, c[1], c[1] == 1 and "" or "s"))
  end

  for i = 1, used do pool[i]:Hide() end
  used = 0
  local y, n = 4, 0
  for _, s in ipairs(d.stops) do
    local left = 0
    for _, q in ipairs(s.q) do if status(q.id) == 0 then left = left + 1 end end
    local head
    if s.inside then
      head = "|cfff2c46d* " .. s.title .. "|r"
    else
      n = n + 1
      head = ("|cfff2c46d%d. %s|r"):format(n, s.title) .. (s.x and ("  |cff9a9a9a(%.1f, %.1f) - click for a map pin|r"):format(s.x, s.y) or "")
      if left == 0 then head = head .. "  |cff60e070nothing left here|r" end
    end
    y = put(y, 0, head, "GameFontNormal", (not s.inside and s.x) and function() pin(s) end or nil) + 4
    for _, q in ipairs(s.q) do
      local st = status(q.id)
      local txt = ICON[st] .. " " .. (st == 2 and "|cff808080" .. q.name .. "|r" or "|cffffffff" .. q.name .. "|r") .. "  " .. LABEL[st]
      if q.horde then txt = txt .. "  |cff8ab8f0Horde|r" end
      if q.req > lvl then txt = txt .. ("  |cffe8954alevel %d|r"):format(q.req) end
      y = put(y, 14, txt, "GameFontHighlight") + 1
      if st ~= 2 then
        local detail = "From " .. q.giver .. (q.where ~= "" and (" (" .. q.where .. ")") or "") .. "." .. (q.note ~= "" and (" " .. q.note) or "")
        y = put(y, 32, "|cffa8a8a8" .. detail .. "|r", "GameFontHighlightSmall") + 6
      else
        y = y + 4
      end
    end
    y = y + 10
  end
  content:SetHeight(y)
end

-- ---------- events and slash command ----------
local ev = CreateFrame("Frame")
ev:RegisterEvent("ADDON_LOADED")
ev:RegisterEvent("QUEST_LOG_UPDATE")
ev:RegisterEvent("QUEST_TURNED_IN")
ev:RegisterEvent("PLAYER_LEVEL_UP")
local pending = false
ev:SetScript("OnEvent", function(_, event, arg1)
  if event == "ADDON_LOADED" then
    if arg1 == ADDON then
      BearTankQuestsDB = BearTankQuestsDB or {}
      print("|cfff2c46dBear Tank Codex:|r dungeon quests loaded. Type |cffffffff/btq|r to open.")
    end
    return
  end
  -- quest events fire in bursts; refresh once on the next frame
  if not pending and f and f:IsShown() then
    pending = true
    C_Timer.After(0.2, function() pending = false; ns.Refresh() end)
  end
end)

SLASH_BEARTANKQUESTS1 = "/btq"
SLASH_BEARTANKQUESTS2 = "/beartank"
SlashCmdList.BEARTANKQUESTS = function(msg)
  msg = (msg or ""):lower():gsub("^%s+", ""):gsub("%s+$", "")
  if not f then makeFrame() end
  if msg ~= "" then
    for i, d in ipairs(DUNGEONS) do
      if d.name:lower():find(msg, 1, true) or d.key == msg then BearTankQuestsDB.sel = i end
    end
    f:Show()
  elseif msg == "" and f:IsShown() then
    f:Hide(); return
  else
    f:Show()
  end
  if msg == "" and not BearTankQuestsDB.sel then BearTankQuestsDB.sel = defaultIndex() end
  ns.Refresh()
end
