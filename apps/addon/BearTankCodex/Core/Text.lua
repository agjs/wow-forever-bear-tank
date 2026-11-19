-- Text: pure string helpers (colors, money, plurals). No game calls except `say`, which prints to chat.
local _, ns = ...
local Text = ns.module("Core.Text")

Text.COLORS = {
  gold = "f2c46d",
  white = "ffffff",
  muted = "a8a8a8",
  dim = "808080",
  green = "60e070",
  yellow = "ffd040",
  red = "ff7070",
  orange = "e8954a",
  blue = "8ab8f0",
}

-- Inline icons (textures embedded in text), used for quest and task status.
Text.ICONS = {
  todo = "|TInterface\\RaidFrame\\ReadyCheck-NotReady:14:14|t",
  active = "|TInterface\\RaidFrame\\ReadyCheck-Waiting:14:14|t",
  done = "|TInterface\\RaidFrame\\ReadyCheck-Ready:14:14|t",
  warning = "|TInterface\\DialogFrame\\UI-Dialog-Icon-AlertNew:14:14|t",
}

-- color("ff0000", "x") or color("gold", "x")
function Text.color(hex, s)
  return "|cff" .. (Text.COLORS[hex] or hex) .. tostring(s) .. "|r"
end

-- Remove color codes (they take no space on screen, so this is the visible text).
function Text.plain(s)
  return (tostring(s):gsub("|c%x%x%x%x%x%x%x%x", ""):gsub("|r", ""))
end

function Text.plural(n, word, pluralWord)
  return n .. " " .. (n == 1 and word or (pluralWord or word .. "s"))
end

-- 12345 copper -> "1g 23s 45c"; zero parts are left out.
function Text.money(copper)
  copper = math.floor(tonumber(copper) or 0)
  local g, s, c = math.floor(copper / 10000), math.floor(copper / 100) % 100, copper % 100
  local parts = {}
  if g > 0 then
    parts[#parts + 1] = g .. "g"
  end
  if s > 0 then
    parts[#parts + 1] = s .. "s"
  end
  if c > 0 or #parts == 0 then
    parts[#parts + 1] = c .. "c"
  end
  return table.concat(parts, " ")
end

-- Join names as "a", "a and b", "a, b and c".
function Text.list(items)
  local n = #items
  if n == 0 then
    return ""
  end
  if n == 1 then
    return items[1]
  end
  return table.concat(items, ", ", 1, n - 1) .. " and " .. items[n]
end

-- Texture path of a game icon by its file name ("ability_druid_maul").
function Text.icon(name)
  return "Interface\\Icons\\" .. (name or "INV_Misc_QuestionMark")
end

function Text.say(msg)
  print(Text.color("gold", "Bear Tank Codex:") .. " " .. msg)
end
