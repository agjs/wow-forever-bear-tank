/* Enchants and armor kits by level for a bear tank. All values from Wowhead's WoW: Forever database (spell and item tooltips), Nov 18 2026.
   sp = enchant spell id, it = item id. skill = Enchanting (or Leatherworking for kits) skill needed to make it.
   rare = the formula drops from enemies, so fewer enchanters have it. */
window.ENCH = {
  rules: [
    ["One enchant per item", "Each piece of gear holds one enchant. Armor kits and the head and leg Arcanums count as enchants, so a new one replaces the old one. On chest, legs, hands and feet you choose between an enchant and an armor kit."],
    ["You don't need Enchanting", "Buy the materials at the Auction House, then ask in trade chat for an enchanter and tip them. Each line below lists the materials and the Enchanting skill the enchanter needs. Formulas marked \"rare\" drop from enemies, so fewer enchanters can do them."],
    ["What's worth paying for while leveling", "Enchant your weapon every time you get a new one: it's cheap and it's the biggest gain. Put armor kits you make yourself on legs and hands. Only pay for other enchants on pieces you'll keep for about 10 levels."],
    ["Weapon enchants work in Bear Form", "In Forever your bear attacks use your weapon's damage, and weapon enchants and sharpening stones or weightstones now apply in forms. Two-handed weapon enchants are bigger than one-handed ones, and most weapons in this guide are two-handed."],
    ["Armor kits got better in Forever", "Every armor kit now also adds Stamina, and Forever added Forceful kits that add Attack Power instead. As a leatherworker you can make these yourself."]
  ],
  bands: [
    { lv: [10, 19], rows: [
      { slot: "Weapon", n: "Enchant 2H Weapon - Minor Impact", sp: 7745, what: "+4 weapon damage", mats: "1 Strange Dust, 1 Small Glimmering Shard", skill: 100, alt: "One-handed weapon: Enchant Weapon - Minor Striking (+1 damage)." },
      { slot: "Chest", n: "Enchant Chest - Lesser Stamina", sp: 7748, what: "+3 Stamina", mats: "1 Strange Dust, 1 Lesser Magic Essence", skill: 60 },
      { slot: "Wrist", n: "Enchant Bracer - Minor Stamina", sp: 7457, what: "+3 Stamina", mats: "2 Strange Dust", skill: 50 },
      { slot: "Back", n: "Enchant Cloak - Lesser Protection", sp: 13421, what: "+20 armor", mats: "3 Strange Dust, 1 Small Glimmering Shard", skill: 115 },
      { slot: "Feet", n: "Enchant Boots - Minor Stamina", sp: 7863, what: "+3 Stamina", mats: "4 Strange Dust", skill: 125 },
      { slot: "Legs, hands", kit: true, n: "Medium Armor Kit", it: 2313, what: "+16 armor, +2 Stamina (from level 5)", mats: "4 Medium Leather, 1 Coarse Thread", skill: 75, how: "Leatherworking 75, from your trainer." },
      { slot: "Legs, hands", kit: true, n: "Forceful Medium Armor Kit", it: 252437, what: "+16 armor, +4 Attack Power (from level 15). New in Forever.", mats: "1 Medium Armor Kit, 2 Strange Dust, 2 Elixir of Minor Strength", skill: 80, how: "Leatherworking 80. Pattern sold by Tamar in Orgrimmar and Mahu in Thunder Bluff for about 5 silver." }
    ]},
    { lv: [20, 29], rows: [
      { slot: "Weapon", n: "Enchant 2H Weapon - Lesser Impact", sp: 13529, what: "+5 weapon damage", mats: "1 Soul Dust, 1 Large Glimmering Shard", skill: 145, alt: "One-handed: Enchant Weapon - Lesser Striking (+2 damage)." },
      { slot: "Chest", n: "Enchant Chest - Greater Stamina", sp: 13640, what: "+6 Stamina", mats: "2 Soul Dust", skill: 160 },
      { slot: "Wrist", n: "Enchant Bracer - Lesser Stamina", sp: 13501, what: "+4 Stamina", mats: "1 Soul Dust", skill: 130, alt: "Enchant Bracer - Stamina (+5 Stamina, 3 Soul Dust, skill 170)." },
      { slot: "Back", n: "Enchant Cloak - Defense", sp: 13635, what: "+30 armor", mats: "1 Small Glowing Shard, 1 Soul Dust", skill: 155 },
      { slot: "Feet", n: "Enchant Boots - Lesser Stamina", sp: 13644, what: "+4 Stamina", mats: "2 Soul Dust", skill: 170, alt: "Enchant Boots - Lesser Agility (+4 Agility, 1 Soul Dust, skill 160)." },
      { slot: "Legs, hands", kit: true, n: "Heavy Armor Kit", it: 4265, what: "+24 armor, +3 Stamina (from level 20, items of item level 15 or higher)", mats: "5 Heavy Leather, 1 Fine Thread", skill: 125, how: "Leatherworking 125, from your trainer." }
    ]},
    { lv: [30, 39], rows: [
      { slot: "Weapon", n: "Enchant 2H Weapon - Impact", sp: 13695, what: "+6 weapon damage", mats: "2 Vision Dust, 1 Large Glowing Shard", skill: 200, alt: "One-handed: Enchant Weapon - Striking (+3 damage)." },
      { slot: "Chest", n: "Enchant Chest - Superior Stamina", sp: 13858, what: "+8 Stamina", mats: "3 Vision Dust", skill: 220 },
      { slot: "Wrist", n: "Enchant Bracer - Stamina", sp: 13648, what: "+5 Stamina", mats: "3 Soul Dust", skill: 170, alt: "Enchant Bracer - Agility (+5 Agility, 1 Vision Dust, skill 190)." },
      { slot: "Back", n: "Enchant Cloak - Greater Defense", sp: 13746, what: "+60 armor", mats: "1 Vision Dust", skill: 205 },
      { slot: "Hands", n: "Enchant Gloves - Agility", sp: 13815, what: "+7 Agility", mats: "1 Vision Dust", skill: 210, alt: "Or keep an armor kit on your gloves." },
      { slot: "Feet", n: "Enchant Boots - Stamina", sp: 13836, what: "+5 Stamina", mats: "2 Vision Dust", skill: 215 },
      { slot: "Legs", kit: true, n: "Thick Armor Kit", it: 8173, what: "+32 armor, +4 Stamina (from level 30, items of item level 25 or higher)", mats: "5 Thick Leather, 1 Silken Thread", skill: 175, how: "Leatherworking 175, from your trainer." },
      { slot: "Legs", kit: true, n: "Forceful Heavy Armor Kit", it: 252453, what: "+24 armor, +6 Attack Power (from level 30). Pick this one for more damage and threat, Thick for more survival.", mats: "1 Heavy Armor Kit, 2 Soul Dust, 2 Elixir of Giant Growth", skill: 135, how: "Leatherworking 135. Pattern sold by Mahu in Thunder Bluff and Jangdor Swiftstrider in Camp Mojache, Feralas, for about 21 silver." }
    ]},
    { lv: [40, 49], rows: [
      { slot: "Weapon", n: "Enchant 2H Weapon - Lesser Agility", sp: 1248510, rare: true, what: "+15 Agility (armor, dodge and crit). New in Forever.", mats: "2 Vision Dust, 1 Large Glowing Shard, 1 Lesser Nether Essence", skill: 210, alt: "If no enchanter has it: Enchant 2H Weapon - Greater Impact (+7 damage, 1 Large Radiant Shard, 1 Dream Dust, skill 240). One-handed: Enchant Weapon - Greater Striking (+4 damage)." },
      { slot: "Chest", n: "Enchant Chest - Stats", sp: 13941, what: "+3 to all stats", mats: "1 Large Radiant Shard, 1 Dream Dust, 1 Greater Nether Essence", skill: 245, alt: "Cheaper: Enchant Chest - Superior Stamina (+8 Stamina)." },
      { slot: "Wrist", n: "Enchant Bracer - Greater Stamina", sp: 13945, rare: true, what: "+7 Stamina", mats: "3 Dream Dust", skill: 245, alt: "Enchant Bracer - Deflection (+7 Defense, 2 Lesser Nether Essence, 1 Dream Dust, skill 235)." },
      { slot: "Back", n: "Enchant Cloak - Greater Defense", sp: 13746, what: "+60 armor", mats: "1 Vision Dust", skill: 205 },
      { slot: "Hands", n: "Enchant Gloves - Agility", sp: 13815, what: "+7 Agility", mats: "1 Vision Dust", skill: 210 },
      { slot: "Feet", n: "Enchant Boots - Greater Stamina", sp: 20020, rare: true, what: "+7 Stamina", mats: "6 Dream Dust", skill: 260, alt: "For questing: Enchant Boots - Minor Speed (4% faster running, 1 Small Radiant Shard, 1 Aquamarine, 1 Lesser Nether Essence, skill 225)." },
      { slot: "Neck", n: "Enchant Necklace - Agility", sp: 1249059, what: "+5 Agility. Forever lets you enchant necklaces. Expensive, so wait for a necklace you'll keep.", mats: "2 Greater Nether Essence, 8 Large Radiant Shard, 6 Dream Dust, 4 Sulfuric Acid, 4 Magenta Dye", skill: 210, alt: "Enchant Necklace - Deflection (+5 Defense) or Enchant Necklace - Strength (+5 Strength)." },
      { slot: "Legs", kit: true, n: "Rugged Armor Kit", it: 15564, what: "+40 armor, +5 Stamina (from level 40, items of item level 35 or higher)", mats: "5 Rugged Leather", skill: 225, how: "Leatherworking 225, from your trainer." },
      { slot: "Legs", kit: true, n: "Forceful Thick Armor Kit", it: 252463, what: "+32 armor, +8 Attack Power (from level 40)", mats: "1 Thick Armor Kit, 2 Vision Dust, 2 Elixir of Ogre Strength", skill: 185, how: "Leatherworking 185. Pattern from Pawani in The Barrens (49.6, 29.6, near the Crossroads) for 60 Merchant's Favor, at Friendly with Durotar Supply and Logistics." }
    ]},
    { lv: [50, 60], rows: [
      { slot: "Weapon", n: "Enchant 2H Weapon - Agility", sp: 27837, what: "+25 Agility, the best for survival", mats: "10 Large Brilliant Shard, 6 Greater Eternal Essence, 14 Illusion Dust, 4 Essence of Air", skill: 290, alt: "For more threat: Enchant Weapon - Crusader (rare; sometimes heals you and gives +100 Strength for 15 seconds; 4 Large Brilliant Shard, 2 Righteous Orb) or Enchant 2H Weapon - Strength (rare; +25 Strength)." },
      { slot: "Chest", n: "Enchant Chest - Greater Stats", sp: 20025, rare: true, what: "+4 to all stats", mats: "4 Large Brilliant Shard, 15 Illusion Dust, 10 Greater Eternal Essence", skill: 300, alt: "Cheaper: Enchant Chest - Major Stamina (rare; +10 Stamina, 6 Illusion Dust, 1 Small Brilliant Shard)." },
      { slot: "Wrist", n: "Enchant Bracer - Superior Stamina", sp: 20011, rare: true, what: "+9 Stamina", mats: "15 Illusion Dust", skill: 300, alt: "Enchant Bracer - Superior Deflection (+9 Defense, 3 Large Brilliant Shard) or Enchant Bracer - Superior Agility (rare; +9 Agility)." },
      { slot: "Back", n: "Enchant Cloak - Superior Defense", sp: 20015, what: "+70 armor", mats: "8 Illusion Dust", skill: 285, alt: "Enchant Cloak - Dodge (rare; +1% dodge, 3 Nexus Crystal, 8 Large Brilliant Shard, 8 Guardian Stone)." },
      { slot: "Hands", n: "Enchant Gloves - Greater Agility", sp: 20012, rare: true, what: "+10 Agility", mats: "2 Lesser Eternal Essence, 2 Illusion Dust", skill: 270, alt: "Enchant Gloves - Threat (+2% threat; 4 Nexus Crystal, 6 Large Brilliant Shard, 8 Larval Acid) or Enchant Gloves - Superior Agility (+15 Agility; 3 Nexus Crystal, 8 Large Brilliant Shard, 4 Essence of Air)." },
      { slot: "Feet", n: "Enchant Boots - Greater Agility", sp: 20023, rare: true, what: "+7 Agility", mats: "8 Greater Eternal Essence", skill: 295, alt: "Enchant Boots - Greater Stamina (+7 Stamina) or Enchant Boots - Speed (8% faster running)." },
      { slot: "Neck", n: "Enchant Necklace - Agility", sp: 1249059, what: "+5 Agility", mats: "2 Greater Nether Essence, 8 Large Radiant Shard, 6 Dream Dust, 4 Sulfuric Acid, 4 Magenta Dye", skill: 210, alt: "Enchant Necklace - Deflection (+5 Defense)." },
      { slot: "Head and legs", n: "Lesser Arcanum of Voracity", it: 11646, what: "+8 Stamina, Agility or Strength (you pick when you finish the quest)", how: "Quest Libram of Voracity from Mathredis Firestar in the Burning Steppes. Bring a Libram of Voracity, 1 Black Diamond, 4 Whipper Root Tuber, 4 Crystal Force and 30 gold. The Libram is a rare drop from level 50+ enemies, so look for it at the Auction House." },
      { slot: "Head and legs", n: "Lesser Arcanum of Constitution", it: 11642, what: "+100 health", how: "Quest Libram of Constitution from Mathredis Firestar in the Burning Steppes. Bring a Libram of Constitution, 1 Black Diamond, 1 Lung Juice Cocktail, 4 Night Dragon's Breath and 30 gold." },
      { slot: "Head and legs", n: "Arcanum of Protection", it: 18331, what: "+1% dodge", how: "From Lorekeeper Lydros in Dire Maul. Bring a Libram of Protection, 1 Pristine Black Diamond, 2 Large Brilliant Shard and 1 Frayed Abomination Stitching." },
      { slot: "Shoulders", n: "Zandalar Signet of Might", it: 20077, what: "+30 Attack Power", how: "Needs Exalted with the Zandalar Tribe (Zul'Gurub raid reputation). Costs 15 Zandalar Honor Tokens from Rin'wosho the Trader." },
      { slot: "Legs (if no Arcanum)", kit: true, n: "Forceful Rugged Armor Kit", it: 252488, what: "+40 armor, +10 Attack Power (from level 50)", mats: "1 Rugged Armor Kit, 2 Dream Dust, 2 Elixir of Greater Strength, 1 Pristine Scale, 1 Fel Hide", skill: 235, how: "Leatherworking 235. Pattern sold by Jangdor Swiftstrider in Camp Mojache, Feralas, for about 58 silver." },
      { slot: "Legs (if no Arcanum)", kit: true, n: "Wild Leather Armor Kit", it: 279258, what: "+4 Defense, +10 Stamina (level 60, items of item level 45 or higher). New in Forever.", mats: "22 Fel Leather, 3 Enchanted Leather", skill: 300, how: "Leatherworking 300." }
    ]}
  ],
  sources: [
    { title: "Wowhead Forever: Enchanting spells", url: "https://www.wowhead.com/forever/spells/professions/enchanting" },
    { title: "Wowhead Forever: Leatherworking spells", url: "https://www.wowhead.com/forever/spells/professions/leatherworking" },
    { title: "Kami Labs: feral weapons, enchants and oils in Forever", url: "https://kami-labs.fr/en/wow-forever/armes-druide-farouche-wow-forever/" }
  ]
};
