-- Tabs: registry of the window's sections. Each feature registers one in its <Feature>.tab.lua.
-- tab = { id, label, icon, group, order, topics = { "quests", ... }, build = function(ctx) return rows end }
-- Sections show in the sidebar by `order`, under their `group` heading (Play, Your bear, Professions).
local _, ns = ...
local Tabs = ns.module("UI.Tabs")

local list = {}

function Tabs.register(tab)
  list[#list + 1] = tab
  table.sort(list, function(a, b)
    return a.order < b.order
  end)
end

function Tabs.all()
  return list
end

function Tabs.get(id)
  for _, t in ipairs(list) do
    if t.id == id then
      return t
    end
  end
end
