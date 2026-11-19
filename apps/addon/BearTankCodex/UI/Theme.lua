-- Theme: the addon's look in one place, matching the website. Colors are { r, g, b, a } in 0-1.
-- Fonts are created once as named font objects so every widget shares them.
local _, ns = ...
local Theme = ns.module("UI.Theme")

Theme.COLORS = {
  background = { 0.043, 0.039, 0.035, 0.97 },
  header = { 0.067, 0.059, 0.047, 1 },
  sidebar = { 0.055, 0.05, 0.04, 1 },
  card = { 1, 0.93, 0.78, 0.035 },
  cardBorder = { 1, 0.93, 0.78, 0.08 },
  line = { 1, 0.93, 0.78, 0.09 },
  hover = { 1, 0.85, 0.4, 0.07 },
  selected = { 0.95, 0.77, 0.43, 0.14 },
  gold = { 0.95, 0.77, 0.43, 1 },
  barTrack = { 1, 1, 1, 0.06 },
  barDone = { 0.36, 0.77, 0.42, 1 },
  barActive = { 0.95, 0.77, 0.43, 1 },
  border = { 0.95, 0.77, 0.43, 0.28 },
}

-- Item quality text colors (poor, common, uncommon, rare, epic, legendary).
Theme.QUALITY = { [0] = "9d9d9d", [1] = "ffffff", [2] = "1eff00", [3] = "0070dd", [4] = "a335ee", [5] = "ff8000" }

local FONT = "Fonts\\FRIZQT__.TTF"
Theme.FONTS = {
  title = { 20, "" },
  heading = { 14, "" },
  body = { 12, "" },
  small = { 11, "" },
  label = { 10, "" },
  tile = { 15, "" },
}

local created = {}

-- The shared font object for a style ("title", "heading", ...). Created on first use.
function Theme.font(style)
  local name = "BearTankCodexFont_" .. style
  if not created[style] then
    local spec = Theme.FONTS[style] or Theme.FONTS.body
    local f = CreateFont(name)
    f:SetFont(FONT, spec[1], spec[2])
    f:SetShadowColor(0, 0, 0, 0.9)
    f:SetShadowOffset(1, -1)
    created[style] = f
  end
  return created[style]
end

-- A solid-color texture on `parent` (background fills, borders, bars).
function Theme.fill(parent, color, layer)
  local t = parent:CreateTexture(nil, layer or "BACKGROUND")
  t:SetColorTexture(color[1], color[2], color[3], color[4])
  return t
end

-- A 1px border around `frame`, drawn with four textures.
function Theme.border(frame, color)
  local c = color or Theme.COLORS.cardBorder
  local top = Theme.fill(frame, c, "BORDER")
  top:SetPoint("TOPLEFT")
  top:SetPoint("TOPRIGHT")
  top:SetHeight(1)
  local bottom = Theme.fill(frame, c, "BORDER")
  bottom:SetPoint("BOTTOMLEFT")
  bottom:SetPoint("BOTTOMRIGHT")
  bottom:SetHeight(1)
  local left = Theme.fill(frame, c, "BORDER")
  left:SetPoint("TOPLEFT")
  left:SetPoint("BOTTOMLEFT")
  left:SetWidth(1)
  local right = Theme.fill(frame, c, "BORDER")
  right:SetPoint("TOPRIGHT")
  right:SetPoint("BOTTOMRIGHT")
  right:SetWidth(1)
end
