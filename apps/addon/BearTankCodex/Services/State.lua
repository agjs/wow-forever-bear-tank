-- State: cached reads of the character, invalidated by the game event that changes them.
-- Each change emits a topic ("player", "quests", "spells", "skills", "bags") that the UI listens to.
local _, ns = ...
local State = ns.module("Services.State")
local Api = ns.module("Services.Api")
local Events = ns.module("Core.Events")
local Scheduler = ns.module("Core.Scheduler")

local cache = { quests = {}, spells = {}, items = {} }

local TOPICS = {
  player = { "PLAYER_LEVEL_UP", "ZONE_CHANGED_NEW_AREA", "PLAYER_MONEY" },
  quests = { "QUEST_LOG_UPDATE", "QUEST_TURNED_IN", "QUEST_ACCEPTED" },
  spells = { "LEARNED_SPELL_IN_SKILL_LINE", "SPELLS_CHANGED" },
  skills = { "SKILL_LINES_CHANGED", "CHAT_MSG_SKILL" },
  bags = { "BAG_UPDATE_DELAYED" },
}

local RESET = {
  player = function()
    cache.level, cache.zone = nil, nil
  end,
  quests = function()
    cache.quests = {}
  end,
  spells = function()
    cache.spells = {}
  end,
  skills = function()
    cache.skills = nil
  end,
  bags = function()
    cache.items = {}
  end,
}

function State.init()
  for topic, events in pairs(TOPICS) do
    for _, event in ipairs(events) do
      Events.on(event, function()
        RESET[topic]()
        -- events come in bursts (looting, quest log updates); tell listeners once
        Scheduler.debounce("state:" .. topic, 0.15, function()
          Events.emit(topic)
        end)
      end)
    end
  end
end

-- ---------- cached reads ----------

local function questStatus(id)
  local v = cache.quests[id]
  if v == nil then
    v = Api.questStatus(id)
    cache.quests[id] = v
  end
  return v
end

local function isSpellKnown(id)
  local v = cache.spells[id]
  if v == nil then
    v = Api.isSpellKnown(id)
    cache.spells[id] = v
  end
  return v
end

local function skill(name)
  if not cache.skills then
    cache.skills = Api.skills()
  end
  return cache.skills[name]
end

local function itemCount(id)
  local v = cache.items[id]
  if v == nil then
    v = Api.itemCount(id)
    cache.items[id] = v
  end
  return v
end

-- The context every selector receives: plain values plus lookup functions. Tests build their own.
function State.context()
  if not cache.level then
    cache.level, cache.zone = Api.level(), Api.zone()
  end
  return {
    level = cache.level,
    zone = cache.zone,
    questStatus = questStatus,
    isSpellKnown = isSpellKnown,
    skill = skill,
    itemCount = itemCount,
  }
end
