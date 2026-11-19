-- Api: the only file that calls WoW game functions. Every call is guarded, so a missing or renamed API in a
-- future patch degrades one feature instead of breaking the addon. Verified against the Forever 1.60.1 export.
local _, ns = ...
local Api = ns.module("Services.Api")

local QL = C_QuestLog or {}
local questDone = QL.IsQuestFlaggedCompleted or IsQuestFlaggedCompleted
local questLogIndex = QL.GetLogIndexForQuestID

Api.QUEST_NOT_STARTED, Api.QUEST_IN_LOG, Api.QUEST_DONE = 0, 1, 2

function Api.level()
  return UnitLevel("player") or 1
end

function Api.zone()
  return GetRealZoneText and GetRealZoneText() or ""
end

function Api.money()
  return GetMoney and GetMoney() or 0
end

function Api.questStatus(id)
  if questDone and questDone(id) then
    return Api.QUEST_DONE
  end
  local i = questLogIndex and questLogIndex(id)
  if i and i > 0 then
    return Api.QUEST_IN_LOG
  end
  return Api.QUEST_NOT_STARTED
end

function Api.questTitle(id)
  return QL.GetTitleForQuestID and QL.GetTitleForQuestID(id) or nil
end

function Api.isSpellKnown(id)
  if IsPlayerSpell and IsPlayerSpell(id) then
    return true
  end
  local book = C_SpellBook
  return book and book.IsSpellKnown and book.IsSpellKnown(id) or false
end

local SPELL_BANK_PLAYER = Enum and Enum.SpellBookSpellBank and Enum.SpellBookSpellBank.Player or 0
local FUTURE_SPELL = Enum and Enum.SpellBookItemType and Enum.SpellBookItemType.FutureSpell or 2

-- Highest rank of every spell in your spellbook, by name: { ["Maul"] = 6, ["Bear Form"] = 1 }.
-- Unranked spells count as rank 1. Spells the book shows but you haven't learned yet are skipped.
-- Matching by name and rank doesn't depend on every rank's spell ID being right.
function Api.spellRanks()
  local out = {}
  local book = C_SpellBook
  if not (book and book.GetNumSpellBookSkillLines and book.GetSpellBookSkillLineInfo and book.GetSpellBookItemInfo) then
    return out
  end
  for line = 1, book.GetNumSpellBookSkillLines() or 0 do
    local info = book.GetSpellBookSkillLineInfo(line)
    local offset, count = info and info.itemIndexOffset or 0, info and info.numSpellBookItems or 0
    for slot = offset + 1, offset + count do
      local item = book.GetSpellBookItemInfo(slot, SPELL_BANK_PLAYER)
      if item and item.name and item.itemType ~= FUTURE_SPELL then
        local rank = tonumber((item.subName or ""):match("(%d+)")) or 1
        if rank > (out[item.name] or 0) then
          out[item.name] = rank
        end
      end
    end
  end
  return out
end

-- { ["Leatherworking"] = { rank = 187, max = 225 }, ... } for every skill line the character has.
function Api.skills()
  local out = {}
  local info = C_SkillInfo
  if info and info.GetNumSkillLines and info.GetSkillLineInfo then
    for i = 1, info.GetNumSkillLines() or 0 do
      local s = info.GetSkillLineInfo(i)
      if s and s.name and not s.isHeader then
        out[s.name] = { rank = s.rank or 0, max = s.maxRank or 0 }
      end
    end
  elseif GetNumSkillLines and GetSkillLineInfo then
    for i = 1, GetNumSkillLines() do
      local name, isHeader, _, rank, _, _, max = GetSkillLineInfo(i)
      if name and not isHeader then
        out[name] = { rank = rank or 0, max = max or 0 }
      end
    end
  end
  return out
end

-- Count of an item in your bags (not the bank).
-- Whether you're wearing this item right now.
function Api.isEquipped(id)
  local item = C_Item
  return item and item.IsEquippedItem and item.IsEquippedItem(id) == true or false
end

-- Icon texture of an item (file ID), or nil if the client doesn't know the item yet.
function Api.itemIcon(id)
  local item = C_Item
  return item and item.GetItemIconByID and item.GetItemIconByID(id) or nil
end

function Api.itemCount(id)
  local item = C_Item
  if item and item.GetItemCount then
    return item.GetItemCount(id) or 0
  end
  return 0
end

-- ---------- map pins ----------

local zoneMaps

local function buildZoneMaps()
  zoneMaps = {}
  pcall(function()
    local m = C_Map.GetBestMapForUnit("player")
    local root = m
    while m do
      local info = C_Map.GetMapInfo(m)
      if not info or not info.parentMapID or info.parentMapID == 0 then
        break
      end
      root, m = info.parentMapID, info.parentMapID
    end
    for _, top in ipairs({ root, 947, 1414, 1415 }) do
      for _, k in ipairs(top and C_Map.GetMapChildrenInfo(top, nil, true) or {}) do
        if k.name and not zoneMaps[k.name] then
          zoneMaps[k.name] = k.mapID
        end
      end
    end
  end)
end

-- Sets the game's own waypoint (and a TomTom arrow if TomTom is installed). Returns true when a pin was placed.
function Api.setWaypoint(zone, x, y, title)
  if not zoneMaps then
    buildZoneMaps()
  end
  local id = zoneMaps[zone]
  if not id or not x then
    return false
  end
  local placed = false
  if TomTom and TomTom.AddWaypoint then
    placed = pcall(TomTom.AddWaypoint, TomTom, id, x / 100, y / 100, { title = title }) or placed
  end
  pcall(function()
    if C_Map.CanSetUserWaypointOnMap(id) and UiMapPoint then
      C_Map.SetUserWaypoint(UiMapPoint.CreateFromCoordinates(id, x / 100, y / 100))
      if C_SuperTrack and C_SuperTrack.SetSuperTrackedUserWaypoint then
        C_SuperTrack.SetSuperTrackedUserWaypoint(true)
      end
      placed = true
    end
  end)
  return placed
end
