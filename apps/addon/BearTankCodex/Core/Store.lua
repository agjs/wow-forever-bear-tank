-- Store: SavedVariables (BearTankCodexDB) with defaults filled in on load.
local _, ns = ...
local Store = ns.module("Core.Store")

Store.DEFAULTS = {
  tab = "now",
  dungeon = nil, -- selected dungeon key; nil = pick the first one for your level
  questTags = true, -- color dungeon quests in the quest log and tracker
  position = nil, -- { point, relativePoint, x, y }
  minimapAngle = nil, -- degrees around the minimap; nil = default spot
  minimapHidden = false,
}

local function fill(target, defaults)
  for k, v in pairs(defaults) do
    if target[k] == nil and v ~= nil then
      target[k] = v
    end
  end
  return target
end

function Store.load()
  BearTankCodexDB = fill(BearTankCodexDB or {}, Store.DEFAULTS)
  Store.db = BearTankCodexDB
  return Store.db
end

function Store.get(key)
  return Store.db and Store.db[key]
end

function Store.set(key, value)
  if Store.db then
    Store.db[key] = value
  end
end
