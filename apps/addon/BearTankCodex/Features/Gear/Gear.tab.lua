local _, ns = ...
local Selectors = ns.module("Gear.selectors")

ns.module("UI.Tabs").register({
  id = "gear",
  label = "Gear",
  icon = "inv_chest_leather_04",
  group = "Your bear",
  order = 12,
  topics = { "player", "gear", "bags" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data)
  end,
})
