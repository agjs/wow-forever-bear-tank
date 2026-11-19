-- A small mock of the WoW client for integration tests: frames, font strings, events, timers and the few game
-- functions the addon's Api uses. Frames accept any method call; the ones that matter record state.
local M = {}

local registry = { frames = {}, events = {}, printed = {}, errors = {} }

-- Like the real client, registering an event it doesn't know is an error.
local KNOWN_EVENTS = {}
for _, name in ipairs(require("forever-events")) do
  KNOWN_EVENTS[name] = true
end
M.registry = registry

local function object(kind)
  local o = { _kind = kind, _shown = true, _scripts = {}, _text = nil, _height = 14, _children = {} }
  return setmetatable(o, {
    __index = function(_, key)
      return function() end -- any method we don't model is a no-op
    end,
  })
end

local function fontString()
  local fs = object("FontString")
  function fs:SetText(t)
    self._text = t
  end
  function fs:GetText()
    return self._text
  end
  function fs:GetStringHeight()
    return 14
  end
  function fs:GetStringWidth()
    return 60
  end
  return fs
end

local function frame(kind, name)
  local f = object(kind)
  function f:Show()
    self._shown = true
    if self._scripts.OnShow then
      self._scripts.OnShow(self)
    end
  end
  function f:Hide()
    self._shown = false
  end
  function f:IsShown()
    return self._shown
  end
  function f:SetScript(event, fn)
    self._scripts[event] = fn
  end
  function f:HookScript(event, fn)
    self._scripts[event] = fn
  end
  function f:GetScript(event)
    return self._scripts[event]
  end
  function f:RegisterEvent(event)
    if not KNOWN_EVENTS[event] then
      error('Attempt to register unknown event "' .. tostring(event) .. '"', 2)
    end
    registry.events[event] = registry.events[event] or {}
    table.insert(registry.events[event], self)
  end
  function f:CreateFontString()
    return fontString()
  end
  function f:CreateTexture()
    return object("Texture")
  end
  function f:GetFontString()
    return fontString()
  end
  function f:GetWidth()
    return 80
  end
  function f:SetHeight(h)
    self._height = h
  end
  function f:GetHeight()
    return self._height
  end
  function f:GetVerticalScroll()
    return 0
  end
  function f:GetPoint()
    return "CENTER", nil, "CENTER", 0, 0
  end
  function f:Click()
    if self._scripts.OnClick then
      self._scripts.OnClick(self)
    end
  end
  if name then
    _G[name] = f
  end
  table.insert(registry.frames, f)
  return f
end

function M.install(state)
  state = state or {}
  _G.CreateFrame = function(kind, name)
    return frame(kind, name)
  end
  _G.UIParent = frame("Frame")
  _G.UISpecialFrames = {}
  _G.tinsert = table.insert
  _G.SlashCmdList = {}
  _G.geterrorhandler = function()
    return function(err)
      table.insert(registry.errors, err)
    end
  end
  _G.GameTooltip = object("GameTooltip")
  _G.hooksecurefunc = function() end
  _G.C_Timer = {
    After = function(_, fn)
      fn()
    end,
  }
  _G.print = function(...)
    local parts = {}
    for i = 1, select("#", ...) do
      parts[#parts + 1] = tostring((select(i, ...)))
    end
    table.insert(registry.printed, table.concat(parts, " "))
  end
  _G.UnitLevel = function()
    return state.level or 50
  end
  _G.GetRealZoneText = function()
    return state.zone or "Searing Gorge"
  end
  _G.GetMoney = function()
    return 0
  end
  _G.IsPlayerSpell = function(id)
    return (state.known or {})[id] == true
  end
  _G.C_QuestLog = {
    IsQuestFlaggedCompleted = function(id)
      return (state.quests or {})[id] == 2
    end,
    GetLogIndexForQuestID = function(id)
      return (state.quests or {})[id] == 1 and 1 or nil
    end,
    GetTitleForQuestID = function()
      return nil
    end,
  }
  _G.C_SkillInfo = {
    GetNumSkillLines = function()
      return #(state.skills or {})
    end,
    GetSkillLineInfo = function(i)
      return state.skills[i]
    end,
  }
  _G.C_Item = {
    GetItemCount = function(id)
      return (state.bags or {})[id] or 0
    end,
  }
end

-- Fire a game event on every frame that registered it.
function M.fire(event, ...)
  for _, f in ipairs(registry.events[event] or {}) do
    local fn = f._scripts.OnEvent
    if fn then
      fn(f, event, ...)
    end
  end
end

-- Load the addon in TOC order, exactly like the client.
function M.loadToc(dir, name)
  local ns = {}
  local toc = assert(io.open(dir .. name .. ".toc"))
  for line in toc:lines() do
    if line ~= "" and not line:find("^#") then
      local path = dir .. line:gsub("\\", "/")
      local chunk = assert(loadfile(path))
      chunk(name, ns)
    end
  end
  toc:close()
  return ns
end

-- Visible text of the window's rows, in order (for assertions).
function M.visibleText()
  local out = {}
  for _, f in ipairs(registry.frames) do
    local fs = rawget(f, "text")
    if f._kind == "Button" and f._shown and type(fs) == "table" and fs._text and fs._text ~= "" then
      out[#out + 1] = fs._text
    end
  end
  return table.concat(out, "\n")
end

return M
