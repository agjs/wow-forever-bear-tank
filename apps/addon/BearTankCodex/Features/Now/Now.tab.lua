local _, ns = ...
local Selectors = ns.module("Now.selectors")
local Dungeons = ns.module("Dungeons.selectors")

ns.module("UI.Tabs").register({
  id = "now",
  label = "Now",
  icon = "inv_misc_pocketwatch_01",
  group = "Play",
  order = 1,
  topics = { "player", "spells", "quests", "gear" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data, Dungeons.counts)
  end,
})
