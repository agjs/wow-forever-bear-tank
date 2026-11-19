-- Namespace: module registry shared by every file through the addon's private `ns` table.
local addonName, ns = ...

ns.name = addonName
ns.version = "2.1.0"
ns.data = ns.data or {}

local modules = {}

-- ns.module("Feature.part") returns the same table every time, so files can extend each other.
function ns.module(name)
  local m = modules[name]
  if not m then
    m = {}
    modules[name] = m
  end
  return m
end
