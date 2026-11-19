local _, ns = ...
local Selectors = ns.module("Talents.selectors")

ns.module("UI.Tabs").register({
  id = "talents",
  label = "Talents",
  icon = "ability_druid_catform",
  group = "Your bear",
  order = 10,
  topics = { "player" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data)
  end,
})
