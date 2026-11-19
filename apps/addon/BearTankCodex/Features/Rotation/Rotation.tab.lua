local _, ns = ...
local Selectors = ns.module("Rotation.selectors")
local Store = ns.module("Core.Store")

ns.module("UI.Tabs").register({
  id = "rotation",
  label = "Rotation",
  icon = "ability_druid_maul",
  group = "Your bear",
  order = 11,
  topics = { "player" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data, Store.get("rotation"))
  end,
})
