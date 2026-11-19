local _, ns = ...
local Selectors = ns.module("Professions.selectors")

ns.module("UI.Tabs").register({
  id = "professions",
  label = "Professions",
  icon = "trade_leatherworking",
  group = "Professions",
  order = 20,
  topics = { "skills", "bags" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data.professions)
  end,
})
