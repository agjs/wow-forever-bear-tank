-- MinimapButton utils (pure): where the button sits on the minimap's edge.
local _, ns = ...
local Utils = ns.module("MinimapButton.utils")

Utils.DEFAULT_ANGLE = 200 -- degrees, counter-clockwise from the right: lower left of the minimap

-- Offset from the minimap's center for an angle on a circle of `radius`.
function Utils.offset(angle, radius)
  local rad = math.rad(angle)
  return math.cos(rad) * radius, math.sin(rad) * radius
end

-- Angle (0-360) from the minimap's center to the cursor, both in the same scale.
function Utils.angleTo(centerX, centerY, cursorX, cursorY)
  local angle = math.deg(math.atan2(cursorY - centerY, cursorX - centerX))
  return angle < 0 and angle + 360 or angle
end
