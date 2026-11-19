-- Init: wires everything once the addon and its SavedVariables are loaded.
local _, ns = ...
local Events = ns.module("Core.Events")
local Store = ns.module("Core.Store")
local Text = ns.module("Core.Text")

Events.on("ADDON_LOADED", function(_, name)
  if name ~= ns.name then
    return
  end
  Store.load()
  -- /btq first, so the command exists even if a later step fails
  ns.module("Commands.Slash").init()
  ns.module("Services.State").init()
  ns.module("UI.Window").init()
  ns.module("QuestTags").init()
  Text.say("version " .. ns.version .. " loaded. Type /btq to open, /btq help for more.")
end)
