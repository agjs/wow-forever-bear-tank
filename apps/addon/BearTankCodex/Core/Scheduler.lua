-- Scheduler: coalesce bursts of events into one call. No OnUpdate; uses C_Timer.
local _, ns = ...
local Scheduler = ns.module("Core.Scheduler")

local pending = {}

-- debounce("render", 0.1, fn): many calls within 0.1s run fn once, after the last call settles.
function Scheduler.debounce(key, delay, fn)
  local token = (pending[key] or 0) + 1
  pending[key] = token
  C_Timer.After(delay, function()
    if pending[key] == token then
      pending[key] = nil
      fn()
    end
  end)
end
