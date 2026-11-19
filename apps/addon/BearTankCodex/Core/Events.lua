-- Events: one frame for game events, plus internal topics ("quests", "bags", ...) for state changes.
local _, ns = ...
local Events = ns.module("Core.Events")

local gameHandlers = {}
local topicHandlers = {}
local frame = CreateFrame("Frame")

frame:SetScript("OnEvent", function(_, event, ...)
  local list = gameHandlers[event]
  if list then
    for i = 1, #list do
      list[i](event, ...)
    end
  end
end)

-- Listen to a game event. Registers the event on first use.
function Events.on(event, fn)
  local list = gameHandlers[event]
  if not list then
    list = {}
    gameHandlers[event] = list
    -- An event the client doesn't have must not break the rest of the addon's setup.
    local ok, err = pcall(frame.RegisterEvent, frame, event)
    if not ok then
      geterrorhandler()(err)
    end
  end
  list[#list + 1] = fn
end

-- Internal pub/sub between State and the UI.
function Events.subscribe(topic, fn)
  local list = topicHandlers[topic]
  if not list then
    list = {}
    topicHandlers[topic] = list
  end
  list[#list + 1] = fn
end

function Events.emit(topic)
  local list = topicHandlers[topic]
  if list then
    for i = 1, #list do
      list[i](topic)
    end
  end
end
