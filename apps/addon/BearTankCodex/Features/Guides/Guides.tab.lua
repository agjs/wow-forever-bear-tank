local _, ns = ...
local Selectors = ns.module("Guides.selectors")
local Store = ns.module("Core.Store")

ns.module("UI.Tabs").register({
  id = "guides",
  label = "Dungeon guides",
  icon = "inv_misc_key_03",
  group = "Play",
  order = 3,
  topics = { "player" },
  build = function(ctx)
    local rows, shown = Selectors.rows(ctx, ns.data, Store.get("guide"))
    Store.set("guide", shown)
    return rows
  end,
})
