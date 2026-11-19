-- Api.spellRanks against a fake spellbook shaped like the Forever client's C_SpellBook.
local BOOK = {
  { name = "General", items = { { name = "Mark of the Wild", subName = "Rank 6" }, { name = "Bear Form", subName = "" } } },
  {
    name = "Feral Combat",
    items = {
      { name = "Maul", subName = "Rank 5" },
      { name = "Maul", subName = "Rank 6" },
      { name = "Dire Bear Form", subName = "Shapeshift" },
      { name = "Ravage", subName = "Rank 4", itemType = 2 }, -- in the book, not learned yet
    },
  },
}

_G.C_SpellBook = {
  GetNumSpellBookSkillLines = function()
    return #BOOK
  end,
  GetSpellBookSkillLineInfo = function(line)
    local offset = 0
    for i = 1, line - 1 do
      offset = offset + #BOOK[i].items
    end
    return { name = BOOK[line].name, itemIndexOffset = offset, numSpellBookItems = #BOOK[line].items }
  end,
  GetSpellBookItemInfo = function(slot)
    for _, line in ipairs(BOOK) do
      if slot <= #line.items then
        local item = line.items[slot]
        return { name = item.name, subName = item.subName, itemType = item.itemType or 1 }
      end
      slot = slot - #line.items
    end
  end,
}

local ns = loadAddon({ "Core/Namespace.lua", "Services/Api.lua" })
local Api = ns.module("Services.Api")

describe("Api.spellRanks", function()
  local ranks = Api.spellRanks()

  it("keeps the highest rank of each spell across every spellbook tab", function()
    expect(ranks.Maul).toBe(6)
    expect(ranks["Mark of the Wild"]).toBe(6)
  end)

  it("counts unranked spells as rank 1", function()
    expect(ranks["Bear Form"]).toBe(1)
    expect(ranks["Dire Bear Form"]).toBe(1)
  end)

  it("skips spells the book shows but you haven't learned", function()
    expect(ranks.Ravage).toBe(nil)
  end)
end)
