-- QuestTags utils (pure): decide whether a quest log line is a quest title and how to mark it.
local _, ns = ...
local Utils = ns.module("QuestTags.utils")
local Text = ns.module("Core.Text")

-- A line is the quest's title when its visible text equals the game's title for that quest, optionally with a
-- level in front ("[53] Yuka Screwspigot"). Objective lines like "Speak with Yuka Screwspigot" don't match.
function Utils.isTitle(lineText, questTitle)
  if not lineText or not questTitle then
    return false
  end
  local visible = Text.plain(lineText):gsub("^%s+", ""):gsub("^%[[^%]]*%]%s*", ""):gsub("%s+$", "")
  return visible == questTitle
end

-- The dungeon a quest belongs to, if it should be marked: tags on, quest known, dungeon not outleveled.
-- tags: { [questId] = { dungeonKey, isChainStep } }, byKey: { [key] = dungeon }
function Utils.markFor(tags, byKey, id, level, enabled)
  if not enabled then
    return nil
  end
  local tag = tags[id]
  local dungeon = tag and byKey[tag[1]]
  if not dungeon or dungeon.hi < level then
    return nil
  end
  return { dungeon = dungeon, chain = tag[2] == true }
end

-- Re-color a line's text in the dungeon color. Color codes take no space, so the line keeps its size.
function Utils.recolor(lineText, hex)
  return "|cff" .. hex .. Text.plain(lineText) .. "|r"
end

function Utils.rgb(hex)
  return tonumber(hex:sub(1, 2), 16) / 255, tonumber(hex:sub(3, 4), 16) / 255, tonumber(hex:sub(5, 6), 16) / 255
end
