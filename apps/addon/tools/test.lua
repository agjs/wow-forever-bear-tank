-- Dependency-free test runner for the Bear Tank Codex addon.
-- Runs on LuaJIT (Lua 5.1, same dialect as the WoW client). From apps/addon:
--   pnpm test:addon                     run every *.test.lua (from the repo root)
--   luajit tools/test.lua Dungeons      from apps/addon: only test files whose path contains "Dungeons"

local ADDON_DIR = "BearTankCodex/"
local function out(line)
  io.write(line, "\n") -- not print: integration tests replace print with the game's chat mock
end
local ADDON_NAME = "BearTankCodex"
local filter = arg and arg[1]

local results = { passed = 0, failed = 0, failures = {} }
local stack = {}

-- ---------- expectations ----------

local function show(v)
  if type(v) == "string" then
    return string.format("%q", v)
  end
  if type(v) ~= "table" then
    return tostring(v)
  end
  local parts = {}
  for k, x in pairs(v) do
    parts[#parts + 1] = tostring(k) .. "=" .. show(x)
  end
  table.sort(parts)
  return "{" .. table.concat(parts, ", ") .. "}"
end

local function deepEqual(a, b)
  if a == b then
    return true
  end
  if type(a) ~= "table" or type(b) ~= "table" then
    return false
  end
  for k, v in pairs(a) do
    if not deepEqual(v, b[k]) then
      return false
    end
  end
  for k in pairs(b) do
    if a[k] == nil then
      return false
    end
  end
  return true
end

function expect(actual)
  local function fail(msg)
    error(msg, 3)
  end
  return {
    toBe = function(expected)
      if actual ~= expected then
        fail("expected " .. show(expected) .. ", got " .. show(actual))
      end
    end,
    toEqual = function(expected)
      if not deepEqual(actual, expected) then
        fail("expected " .. show(expected) .. ", got " .. show(actual))
      end
    end,
    toBeTruthy = function()
      if not actual then
        fail("expected a truthy value, got " .. show(actual))
      end
    end,
    toBeFalsy = function()
      if actual then
        fail("expected a falsy value, got " .. show(actual))
      end
    end,
    toContain = function(needle)
      if type(actual) == "string" then
        if not actual:find(needle, 1, true) then
          fail(show(actual) .. " does not contain " .. show(needle))
        end
        return
      end
      for _, v in ipairs(actual) do
        if deepEqual(v, needle) then
          return
        end
      end
      fail("list does not contain " .. show(needle))
    end,
  }
end

-- ---------- describe / it ----------

function describe(name, fn)
  stack[#stack + 1] = name
  fn()
  stack[#stack] = nil
end

function it(name, fn)
  local full = table.concat(stack, " > ") .. " > " .. name
  local ok, err = pcall(fn)
  if ok then
    results.passed = results.passed + 1
  else
    results.failed = results.failed + 1
    results.failures[#results.failures + 1] = full .. "\n      " .. tostring(err)
  end
end

-- ---------- loading addon files like the client does ----------

-- loadAddon({ "Core/Namespace.lua", ... }, ns?) runs each file with (addonName, ns) and returns ns.
function loadAddon(files, ns)
  ns = ns or {}
  for _, rel in ipairs(files) do
    local chunk, err = loadfile(ADDON_DIR .. rel)
    if not chunk then
      error("cannot load " .. rel .. ": " .. tostring(err), 2)
    end
    chunk(ADDON_NAME, ns)
  end
  return ns
end

-- ---------- discover and run ----------

local finder = io.popen('find "' .. ADDON_DIR .. '" -name "*.test.lua" | sort')
local files = {}
for path in finder:lines() do
  if not filter or path:find(filter, 1, true) then
    files[#files + 1] = path
  end
end
finder:close()

for _, path in ipairs(files) do
  local chunk, err = loadfile(path)
  if not chunk then
    results.failed = results.failed + 1
    results.failures[#results.failures + 1] = path .. "\n      " .. tostring(err)
  else
    local ok, runErr = pcall(chunk)
    if not ok then
      results.failed = results.failed + 1
      results.failures[#results.failures + 1] = path .. " (load)\n      " .. tostring(runErr)
    end
  end
end

for _, f in ipairs(results.failures) do
  out("FAIL  " .. f)
end
out(string.format("\n%d files, %d passed, %d failed", #files, results.passed, results.failed))
os.exit(results.failed == 0 and 0 or 1)
