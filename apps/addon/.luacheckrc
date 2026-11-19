std = "lua51"
max_line_length = 120
exclude_files = { "BearTankCodex/Data/*.lua" }

-- Globals the addon defines
globals = { "BearTankCodexDB", "SLASH_BEARTANKCODEX1", "SLASH_BEARTANKCODEX2", "SlashCmdList" }

-- Game API the addon reads (only Services/Api.lua and UI/ should use these)
read_globals = {
  "CreateFrame", "UIParent", "UISpecialFrames", "GameTooltip", "C_Timer", "C_QuestLog", "C_Map", "C_SuperTrack",
  "C_SkillInfo", "C_Item", "C_SpellBook", "UiMapPoint", "TomTom", "UnitLevel", "GetRealZoneText", "GetMoney",
  "IsPlayerSpell", "geterrorhandler", "GetNumSkillLines", "GetSkillLineInfo", "hooksecurefunc", "QuestScrollFrame",
  "ObjectiveTrackerFrame", "QuestObjectiveTracker", "CampaignQuestObjectiveTracker", "tinsert", "IsQuestFlaggedCompleted",
}

files["**/*.test.lua"] = { globals = { "describe", "it", "expect", "loadAddon", "flatRows", "rowsText" } }
files["tools/*.lua"] = { globals = { "describe", "it", "expect", "loadAddon", "flatRows", "rowsText" }, std = "max" }
