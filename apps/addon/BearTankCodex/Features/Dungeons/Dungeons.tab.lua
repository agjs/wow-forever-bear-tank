local _, ns = ...
local Selectors = ns.module("Dungeons.selectors")
local Store = ns.module("Core.Store")

ns.module("UI.Tabs").register({
  id = "dungeons",
  label = "Dungeon quests",
  order = 2,
  topics = { "player", "quests" },
  build = function(ctx)
    local list = ns.data.dungeonQuests
    local key = Store.get("dungeon") or Selectors.defaultKey(ctx, list)
    local rows, shown = Selectors.rows(ctx, list, key)
    Store.set("dungeon", shown)
    return rows
  end,
})
