/* Camps, Waylaid Crates and Craftsman's Writs: Forever systems, for Leatherworking + Skinning + Cooking + Fishing.
   Item effects, reagents, skills and blueprint drops from Wowhead Forever tooltips (Nov 19 2026). Crate and writ numbers from Wowhead's
   Durotar Supply and Logistics guide (updated Nov 15) and Conquest Capped (Nov 13-15). */
window.CAMPS = {
  camp_steps: [
    "Make a campfire. With Cooking 220 or more, use the Expert Campfire Kit: it holds 10 camp items. Kits have a 5 minute cooldown.",
    "Sit at the fire for 1 minute. You then get the buff from every camp item placed there, and it lasts 1 hour after you leave.",
    "Place your own camp item next to the fire. You can place only one per hour: all camp items share one 1 hour cooldown, whichever profession they come from.",
    "Other players can sit at your fire and add their own items. They don't need your professions to get the buffs."
  ],
  fires: [
    { n: "Basic Campfire Kit", it: 279981, slots: 3, how: "Cooking 20, from your Cooking trainer. Made from 1 Simple Wood (sold by trade goods vendors)." },
    { n: "Journeyman Campfire Kit", it: 279961, slots: 5, how: "Cooking 90. Made from 1 Star Wood. The blueprint drops from Lord Serpentis in Wailing Caverns." },
    { n: "Expert Campfire Kit", it: 279974, slots: 10, how: "Usable at Cooking 220. Made from 1 Thick Logs. The blueprint drops from Slavecrusher Grox." }
  ],
  pick: [
    ["Before a dungeon or a hard fight", "Fish Bowl: 8% more of every stat for an hour. It's the biggest buff you can make."],
    ["Before you log out or stop for a while", "Camp Tent: fills your rested experience up to 5% of a level."],
    ["Fishing", "Fishing Hut (or Fishing Rack): lets you catch rare fish for an hour and gives fishing lures."],
    ["Good to know", "Each upgraded item also gives its first item's buff. A Fishing Hut gives the Fish Bowl's stats, and a Tanning Rack fills rested experience like the Camp Tent. An upgrade can be placed on top of the older item without using another slot."]
  ],
  profs: [
    { prof: "Leatherworking", items: [
      { sk: 20, n: "Camp Tent", it: 279978, does: "Fills rested experience up to 5% of a level, for you and anyone sitting nearby. Does nothing if you already have more.", mats: "5 Light Leather", from: "Your Leatherworking trainer." },
      { sk: 125, n: "Tanning Rack", it: 279941, does: "Lets you make certain reagents there. Also gives the Camp Tent's rested experience.", mats: "5 Medium Leather, 3 Fine Thread, 2 Simple Wood", from: "Blueprint: Tanning Rack drops from Razorclaw the Butcher in Shadowfang Keep." },
      { sk: 300, n: "Sewing Machine", it: 279945, does: "Needed for recipes that require it. Also gives the Camp Tent's rested experience.", mats: "1 Undeath Engine, 5 Rugged Leather, 1 Rune Thread", from: "Blueprint: Sewing Machine drops from Vectus in Scholomance." }
    ]},
    { prof: "Skinning", items: [
      { sk: 20, n: "Camp Chair", it: 279979, does: "2% more critical strike chance with spells and attacks for everyone sitting nearby. Doesn't stack with Moonkin Aura.", mats: "3 Light Leather, 2 Simple Wood", from: "Your Skinning trainer." },
      { sk: 140, n: "Field Guide", it: 279969, does: "Players can read it to learn Track Beasts. Also gives the Camp Chair's crit.", mats: "3 Medium Leather, 2 Slimy Murloc Scale, 1 Fine Thread", from: "Blueprint: Field Guide drops from Lady Anacondra in Wailing Caverns." },
      { sk: 300, n: "Trapper's Workbench", it: 279938, does: "A workbench with one trap. Also gives the Camp Chair's crit.", mats: "2 Simple Wood, 4 Heavy Leather, 1 Iron Bar", from: "Blueprint: Trapper's Workbench drops from Houndmaster Loksey (Scarlet Monastery Library) or The Beast (Upper Blackrock Spire)." }
    ]},
    { prof: "Fishing", items: [
      { sk: 20, n: "Fish Bowl", it: 279967, does: "8% more of every stat for everyone sitting nearby. Doesn't stack with Blessing of Kings.", mats: "1 Raw Brilliant Smallfish, 1 Empty Vial", from: "Your Fishing trainer." },
      { sk: 140, n: "Fishing Rack", it: 279965, does: "You can catch uncommon fish for 1 hour, and it gives fishing lures. Also gives the Fish Bowl's stats.", mats: "2 Simple Wood, 1 Crystal Vial, 2 Raw Mithril Head Trout", from: "Blueprint: Fishing Rack drops from Gelihast in Blackfathom Deeps." },
      { sk: 300, n: "Fishing Hut", it: 279966, does: "You can catch rare fish for 1 hour, and it gives fishing lures. Also gives the Fish Bowl's stats.", mats: "5 Simple Wood, 2 Bolt of Runecloth, 1 Seasonal Fish Steaks", from: "Blueprint: Fishing Hut drops from Jammal'an the Prophet in the Sunken Temple." }
    ]},
    { prof: "Cooking", items: [
      { sk: 140, n: "Cookie's Feast", it: 279957, does: "Stamina food for everyone at the camp.", mats: "2 Mystery Meat, 1 Heavy Kodo Meat, 1 Soothing Spices", from: "Blueprint: Cookie's Feast drops from Cookie in The Deadmines." },
      { sk: 300, n: "Iron Oven", it: 279982, does: "Needed for the most advanced cooking recipes.", mats: "10 Simple Flour, 5 Refreshing Spring Water, 4 Soothing Spices", from: "Blueprint: Iron Oven drops from Quartermaster Zigris in Lower Blackrock Spire." }
    ]}
  ],
  crate_steps: [
    "Waylaid Crates drop from enemies and dungeon bosses from level 10 on. Unfilled crates are also sold at the Auction House.",
    "Right-click a crate to read its label. That decides which materials it wants.",
    "The crate lists a few bundles. Fill any one of them by right-clicking the crate with the materials in your bags. You can fill it a bit at a time.",
    "A full crate becomes a Sealed Crate. Hand it in to Dokimi at the Durotar Supply and Logistics camp just outside the Crossroads in The Barrens (50.0, 29.2).",
    "Your first crate also gives a Shipping Label quest: 50 Merchant's Favor, 2,000 reputation and 660 experience. After that, crates give Merchant's Favor and a little silver, but no reputation.",
    "Crates you don't want: sell them unfilled at the Auction House. They aren't bound to you until filled."
  ],
  crates_you: [
    ["Fabrics (cheapest for you)", "Apprentice: 2 Cured Light Hide. Journeyman: 2 Cured Medium Hide. Expert: 2 Cured Heavy Hide. Artisan: 2 Cured Thick Hide. Cured hides are made with Leatherworking."],
    ["Textiles", "Apprentice: 20 Light Leather. Journeyman: 20 Medium Leather. Expert: 20 Heavy Leather. Artisan: 20 Thick Leather or 20 Rugged Leather."],
    ["Crate levels", "Apprentice and Journeyman crates need level 10, Expert 20, Artisan 35."],
    ["Favor per crate", "Apprentice 5 (white crate) or 10 (green crate). Journeyman 10 or 20. Players report about 30 for Expert and 40 for Artisan."]
  ],
  writ_steps: [
    "Sealed Craftsman's Writs (Journeyman, Expert, Artisan) drop from enemies and treasure chests from level 10 on. You can also buy them at the Auction House.",
    "Open one to get a named order: one specific crafted item to deliver to a customer somewhere in the world.",
    "Make or buy the item, keep the writ and the item in your bags, and hand them to that customer.",
    "Reputation per delivery: Journeyman 75, Expert 125, Artisan 200, plus some silver. Each order can be done once per day, but different orders don't share that limit.",
    "Faster to Honored: at Friendly, buy a Forged Delivery Receipt (15 Merchant's Favor) from Kurvelk Shadowhoof at the camp. Put it on any empty Waylaid Crate and hand it to Dokimi for 50 reputation."
  ],
  rep: "Friendly needs 3,000 reputation, Honored 6,000 more, Revered 12,000 more and Exalted 21,000 more. Reputation is never spent. It only unlocks what you can buy with Merchant's Favor.",
  buy: [
    { n: "Pattern: Warden's Leather Gloves", it: 252839, what: "Tank gloves: Strength, Stamina, bonus armor. Wear at level 35.", cost: "60 Favor, Friendly, Leatherworking 175" },
    { n: "Pattern: Warden's Leather Shoulders", it: 252850, what: "Tank shoulders: Strength, Agility, Stamina, bonus armor. Wear at level 42.", cost: "60 Favor, Friendly, Leatherworking 210" },
    { n: "Pattern: Forceful Thick Armor Kit", it: 252834, what: "+32 armor and +8 Attack Power on chest, legs, hands or feet (level 40).", cost: "60 Favor, Friendly, Leatherworking 185" },
    { n: "Pattern: Warden's Leather Bracers", it: 252855, what: "Tank bracers. Wear at level 45.", cost: "90 Favor, Honored, Leatherworking 225" },
    { n: "Pattern: Warden's Leather Boots", it: 252862, what: "Tank boots: Strength, Stamina, 93 bonus armor. Wear at level 47.", cost: "90 Favor, Honored, Leatherworking 235" },
    { n: "Pattern: Warden's Leather Waistguard", it: 252874, what: "Tank belt: Strength, Stamina, 102 bonus armor. Wear at level 50.", cost: "90 Favor, Honored, Leatherworking 250" },
    { n: "Leatherworking Certification", what: "Gives the title \"the Leatherworker\".", cost: "1,000 Favor, Leatherworking 300" },
    { n: "Reins of the Pack Kodo", what: "A kodo mount, sold by Okamache.", cost: "6,000 Favor, Exalted" },
    { n: "Packmule Treat", what: "Teaches the Minimule pet.", cost: "1,500 Favor, Revered" }
  ],
  plan: [
    "Hand in your first crate of any kind to get the Shipping Label bonus: 2,000 reputation and 50 Favor.",
    "Fill Fabrics crates with cured hides and Textiles crates with leather you skin. Hand them in for Favor.",
    "Do Craftsman's Writs until Friendly, then buy Warden's Leather Gloves and Shoulders and the Forceful Thick Armor Kit.",
    "For Honored (Warden's Bracers, Boots and Waistguard), keep doing writs or use Forged Delivery Receipts."
  ],
  sources: [
    { title: "Wowhead: Durotar Supply and Logistics guide", url: "https://www.wowhead.com/forever/guide/durotar-supply-and-logistics-reputation-professions" },
    { title: "Conquest Capped: Merchant's Favor and crates", url: "https://conquestcapped.com/guides/wow-forever/wow-forever-merchants-favor/" },
    { title: "Conquest Capped: Craftsman's Writs", url: "https://conquestcapped.com/guides/wow-forever/wow-forever-craftsmans-writs/" },
    { title: "Method: crate list", url: "https://www.method.gg/wow-forever/how-to-get-waylaid-crates-and-merchants-favor-in-wow-forever" },
    { title: "wow-professions.com: camping guide", url: "https://www.wow-professions.com/forever/camping-guide" },
    { title: "Blizzard: Gather Around the Campfire", url: "https://news.blizzard.com/en-us/article/24301516" }
  ]
};
window.CAMP_LINKS = { "Cured Light Hide": "item=4231", "Cured Medium Hide": "item=4233", "Cured Heavy Hide": "item=4236", "Cured Thick Hide": "item=8172", "Fish Bowl": "item=279967", "Camp Tent": "item=279978", "Camp Chair": "item=279979", "Fishing Hut": "item=279966", "Fishing Rack": "item=279965", "Tanning Rack": "item=279941", "Expert Campfire Kit": "item=279974", "Merchant's Favor": "currency=3402", "Dokimi": "npc=256386", "Kurvelk Shadowhoof": "npc=256672", "Okamache": "npc=256400", "Lord Serpentis": "npc=3673",
  "Simple Wood": "item=4470", "Star Wood": "item=11291", "Thick Logs": "item=272941", "Waylaid Crate": "item=248549" };
