local ns = loadAddon({ "Core/Namespace.lua", "Features/MinimapButton/MinimapButton.utils.lua" })
local Utils = ns.module("MinimapButton.utils")

local function near(a, b)
  return math.abs(a - b) < 0.001
end

describe("MinimapButton utils", function()
  it("places the button on the minimap's edge", function()
    local x, y = Utils.offset(0, 80)
    expect(near(x, 80) and near(y, 0)).toBe(true)
    x, y = Utils.offset(90, 80)
    expect(near(x, 0) and near(y, 80)).toBe(true)
  end)

  it("turns the cursor position into an angle from 0 to 360", function()
    expect(near(Utils.angleTo(0, 0, 10, 0), 0)).toBe(true)
    expect(near(Utils.angleTo(0, 0, 0, 10), 90)).toBe(true)
    expect(near(Utils.angleTo(0, 0, 0, -10), 270)).toBe(true)
  end)

  it("round-trips: the angle of a placed button is the angle it was placed at", function()
    local x, y = Utils.offset(Utils.DEFAULT_ANGLE, 80)
    expect(near(Utils.angleTo(0, 0, x, y), Utils.DEFAULT_ANGLE)).toBe(true)
  end)
end)
