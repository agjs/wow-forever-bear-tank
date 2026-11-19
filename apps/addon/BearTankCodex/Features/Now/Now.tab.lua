local _, ns = ...
local Selectors = ns.module("Now.selectors")
local Dungeons = ns.module("Dungeons.selectors")

ns.module("UI.Tabs").register({
  id = "now",
  label = "Now",
  order = 1,
  topics = { "player", "spells", "quests" },
  build = function(ctx)
    return Selectors.rows(ctx, ns.data, Dungeons.counts)
  end,
})
