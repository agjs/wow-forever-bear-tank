-- /btq: open the window, jump to a tab or dungeon, toggle quest log colors, or print diagnostics.
local _, ns = ...
local Slash = ns.module("Commands.Slash")
local Window = ns.module("UI.Window")
local Store = ns.module("Core.Store")
local Text = ns.module("Core.Text")
local QuestTags = ns.module("QuestTags")
local Api = ns.module("Services.Api")

local TAB_ALIASES = { now = "now", dungeons = "dungeons", dq = "dungeons", prof = "professions", professions = "professions" }

local COMMANDS = {
  tags = function()
    local on = Store.get("questTags") == false
    Store.set("questTags", on)
    QuestTags.refresh()
    Text.say("quest log colors " .. (on and "on" or "off") .. ".")
  end,
  debug = function()
    Text.say("version " .. ns.version)
    local spells = 0
    for _ in pairs(Api.spellRanks()) do
      spells = spells + 1
    end
    print("  spellbook: " .. spells .. " spells read")
    for _, line in ipairs(QuestTags.debugLines()) do
      print("  " .. line)
    end
  end,
  help = function()
    Text.say("/btq opens the window. /btq now, /btq dungeons, /btq prof jump to a tab.")
    print("  /btq sunken (any part of a dungeon name) opens that dungeon's quests.")
    print("  /btq tags turns quest log colors on or off. /btq debug prints diagnostics.")
  end,
}

function Slash.handle(msg)
  msg = (msg or ""):lower():gsub("^%s+", ""):gsub("%s+$", "")
  if msg == "" then
    Window.toggle()
    return
  end
  if COMMANDS[msg] then
    COMMANDS[msg]()
    return
  end
  if TAB_ALIASES[msg] then
    Window.toggle(TAB_ALIASES[msg])
    return
  end
  for _, d in ipairs(ns.data.dungeonQuests) do
    if d.key == msg or d.name:lower():find(msg, 1, true) then
      Store.set("dungeon", d.key)
      Window.toggle("dungeons")
      return
    end
  end
  COMMANDS.help()
end

function Slash.init()
  SLASH_BEARTANKCODEX1 = "/btq"
  SLASH_BEARTANKCODEX2 = "/beartank"
  SlashCmdList.BEARTANKCODEX = Slash.handle
end
