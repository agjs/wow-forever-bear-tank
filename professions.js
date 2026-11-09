/* Profession guides for WoW: Forever, researched Nov 9 2026 from Forever guides (see sources in each). flag: forever = from a Forever source, classic = Classic data that may differ. */
window.PROF = {
 "lw": {
  "changes": [
   "Most Forever profession guides were written during the beta, so treat counts and skill numbers here as a good starting point and check them in game.",
   "Trainer breakpoints conflict between sources. Method and WoW Professions say the Expert Leatherworking trainer is learned at skill 125 (character level 20, costs 50 silver) and the Artisan trainer at skill 200 (character level 35). Rankedboost and Metabot say you must visit the Expert trainer at skill 150 and the Artisan trainer at skill 225. The likely reading is that you learn the trainer's rank at 125 and 200, but must visit the trainer by 150 and 225 to keep leveling. Confirm in game before relying on either.",
   "Skinning breakpoints per Rankedboost: Journeyman Skinning at 75, Expert Skinning at 150, Artisan Skinning at 225. These match the Classic pattern, so treat them as unconfirmed for Forever.",
   "Recipes turn grey about 25 skill points earlier in Forever than in Classic Era, according to a Forever beta guide. This changes when a recipe stops giving skill-ups.",
   "Forever has its own Leatherworking pattern list (the Warcraft Wiki calls these exclusive to Forever). It includes armor kits in tiers (Light, Medium, Heavy, Thick, Rugged) plus Forceful and Mystic kit variants sold by vendors, and Wild Leather Armor Kit and Core Armor Kit at 300. Meaning for a bear tank: the Forceful and Mystic variants are upgraded versions of the same kits and may be worth checking as stat options.",
   "Beta sources report roughly 480 to 600 Leatherworking recipes in total, with a large share new to Forever (one source says 239 of them). The totals disagree (510 in one source, 595 in another), so do not quote a specific number.",
   "New camping objects reported by beta guides: a Tanning Rack unlocks advanced Leatherworking patterns, and a Camp Chair is a new Skinning-related recipe that needs Light Leather and Simple Wood. These could not be confirmed on a Forever-specific source with a full recipe list.",
   "Bear-tank relevant leather: the Warbear Harness (skill 250, drop), Warbear Woolies (skill 260, vendor), Devilsaur Gauntlets (skill 265, vendor), Devilsaur Leggings (skill 290, drop), Devilcore Gauntlets (skill 290, drop) and Warbear Helm (skill 300) appear in the Warcraft Wiki's Forever list. The Wolfshead Helm (skill 225) appears there too, but its source is unknown. The wiki page did not include Forever reagent lists, so the materials for these are unverified.",
   "Rankedboost lists 'Light Armor Kit' at skill 1 to 50, a Forever route entry. No source named a Forever-specific bear-tank leather set beyond the items above.",
   "Gold making: no source gave Forever-specific auction house profit figures for Leatherworking. Materials are priced from base item values until auction data exists after launch, according to Method."
  ],
  "trainers": [
   {
    "skill": "50 (Journeyman)",
    "what": "Journeyman Leatherworking",
    "where": "Horde trainers: Karolek (Orgrimmar), Arthur Moore (Undercity), Tarn (Thunder Bluff)",
    "req": "Character level 10",
    "flag": "forever"
   },
   {
    "skill": "125 (Expert)",
    "what": "Expert Leatherworking",
    "where": "Una, Thunder Bluff (Horde). Armorers building on the middle rise.",
    "req": "Skill 125 to learn, character level 20, costs 50 silver. Conflicting sources say visit at skill 150.",
    "flag": "forever"
   },
   {
    "skill": "200 (Artisan)",
    "what": "Artisan Leatherworking",
    "where": "Hahrana Ironhide, Camp Mojache, Feralas (Horde)",
    "req": "Skill 200 to learn, character level 35. Conflicting sources say visit at skill 225.",
    "flag": "forever"
   }
  ],
  "steps": [
   {
    "from": 150,
    "to": 155,
    "craft": "Heavy Armor Kit",
    "count": 8,
    "mats": "5 Heavy Leather, 1 Fine Thread each",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Skill-ups yellow until 155. Total for this step: 40 Heavy Leather and 8 Fine Thread.",
    "flag": "forever"
   },
   {
    "from": 155,
    "to": 170,
    "craft": "Green Leather Belt",
    "count": 27,
    "mats": "5 Heavy Leather, 1 Fine Thread, 1 Green Dye, 1 Iron Buckle, plus 1 Cured Heavy Hide each (the cured hide is made from Heavy Hide and Salt)",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Green at 165. Total: 135 Heavy Leather, 27 Fine Thread, 27 Green Dye, 27 Iron Buckle.",
    "flag": "forever"
   },
   {
    "from": 170,
    "to": 175,
    "craft": "Barbaric Shoulders",
    "count": 6,
    "mats": "8 Heavy Leather, 2 Fine Thread each, plus Cured Heavy Hide (from Heavy Hide and Salt)",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Total: 48 Heavy Leather and 12 Fine Thread.",
    "flag": "forever"
   },
   {
    "from": 175,
    "to": 185,
    "craft": "Green Leather Bracers",
    "count": 14,
    "mats": "6 Heavy Leather, 1 Green Dye, 1 Fine Thread each, plus Cured Heavy Hide",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Total: 84 Heavy Leather, 14 Green Dye, 14 Fine Thread.",
    "flag": "forever"
   },
   {
    "from": 185,
    "to": 195,
    "craft": "Guardian Gloves",
    "count": 14,
    "mats": "4 Heavy Leather, 1 Silken Thread, plus Cured Heavy Hide each",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Total: 56 Heavy Leather and 14 Silken Thread. Cure Heavy Hide with Salt first.",
    "flag": "forever"
   },
   {
    "from": 195,
    "to": 200,
    "craft": "Thick Armor Kit",
    "count": 6,
    "mats": "5 Thick Leather, 1 Silken Thread each",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Total: 30 Thick Leather and 6 Silken Thread.",
    "flag": "forever"
   },
   {
    "from": 200,
    "to": 215,
    "craft": "Nightscape Headband",
    "count": 27,
    "mats": "5 Thick Leather, 2 Silken Thread each",
    "recipe_from": "Leatherworking trainer (Expert range)",
    "item_id": null,
    "note": "Green at 210. Total: 135 Thick Leather and 54 Silken Thread.",
    "flag": "forever"
   },
   {
    "from": 215,
    "to": 225,
    "craft": "Nightscape Cloak",
    "count": 10,
    "mats": "12 Thick Leather, 4 Silken Thread each",
    "recipe_from": "Recipe item, source not confirmed by any source. Usable from 205. Fallback: Turtle Scale Breastplate (215 to 220, about 13 crafts), then Thick Leather Ammo Pouch (220 to 225, about 6 crafts).",
    "item_id": null,
    "note": "Orange until 225. Total: 120 Thick Leather and 40 Silken Thread.",
    "flag": "forever"
   },
   {
    "from": 225,
    "to": 240,
    "craft": "Rugged Armor Kit",
    "count": 27,
    "mats": "5 Rugged Leather each",
    "recipe_from": "Artisan trainer (Hahrana Ironhide, Feralas, or the Artisan trainer for this rank)",
    "item_id": null,
    "note": "Yellow and green at 235. Total: 135 Rugged Leather. Rugged Leather comes from skinning in the 200 to 250 zones.",
    "flag": "forever"
   },
   {
    "from": 240,
    "to": 262,
    "craft": "Blue Suede Gloves",
    "count": 23,
    "mats": "8 Rugged Leather, 1 Rune Thread, 1 Blue Dye each",
    "recipe_from": "Recipe item, source not confirmed. Usable from 240. Alternative 240 to 250: Nightscape Boots (about 59 crafts).",
    "item_id": null,
    "note": "Orange and yellow at 260. Total: 184 Rugged Leather, 23 Rune Thread, 23 Blue Dye. Rune Thread and Blue Dye are bought from vendors, and the guide does not name them.",
    "flag": "forever"
   },
   {
    "from": 262,
    "to": 275,
    "craft": "Supple Scorpid Bracers",
    "count": 14,
    "mats": "7 Rugged Leather, 2 Heavy Scorpid Scale, 1 Rune Thread each",
    "recipe_from": "Recipe item, source not confirmed. Usable from 250.",
    "item_id": null,
    "note": "Orange and yellow at 270. Total: 98 Rugged Leather, 28 Heavy Scorpid Scale, 14 Rune Thread. No trainer recipe gives skill-ups from 262 to 275.",
    "flag": "forever"
   },
   {
    "from": 275,
    "to": 300,
    "craft": "Blue Suede Bracers",
    "count": 26,
    "mats": "10 Rugged Leather, 1 Rune Thread, 1 Blue Dye each",
    "recipe_from": "Recipe item, source not confirmed. Usable from 275. Alternative 285 to 295: Gordok Ogre Suit (about 30 crafts).",
    "item_id": null,
    "note": "Orange and yellow at 295. Total: 260 Rugged Leather, 26 Rune Thread, 26 Blue Dye. The Rankedboost 225 to 300 route is an estimate.",
    "flag": "forever"
   }
  ],
  "shopping": [
   "About 363 Heavy Leather (Expert range, from the steps above, not counting the Heavy Hide for cured hides)",
   "About 285 Thick Leather (Expert and Artisan range)",
   "About 677 Rugged Leather (Artisan range, from 225 to 300)",
   "About 40 Heavy Hide and matching Salt, for the cured hides needed in the Expert steps (exact count depends on how many cured hides you make)",
   "About 81 Fine Thread",
   "About 114 Silken Thread",
   "About 41 Green Dye and 27 Iron Buckle",
   "About 49 Blue Dye",
   "About 63 Rune Thread",
   "28 Heavy Scorpid Scale",
   "Plus Light Leather and Medium Leather for the early cured hides if you do not already have them (not covered by the 150 to 300 route)"
  ],
  "farming": [
   {
    "mat": "Light Leather",
    "lv": "1-15",
    "zone": "Durotar, Mulgore, Tirisfal Glades",
    "where": "Durotar: Elder Mottled Boar, Dire Mottled Boar, Clattering Scorpid, Armored Scorpid. Mulgore: Prairie Stalker, Prairie Wolf, Flatland Prowler. Tirisfal Glades: Vampiric Duskbat, Greater Duskbat, Mangy Duskbat, Worg.",
    "note": "Durotar is the best Horde spot for this range. Creature levels are estimates from the source.",
    "flag": "forever"
   },
   {
    "mat": "Medium Leather",
    "lv": "15-20",
    "zone": "The Barrens",
    "where": "Hecklefang Hyena, Ornery Plainstrider, Sunscale Scytheclaw, Barrens Giraffe",
    "note": "Best Horde zone for the 50 to 100 skinning range. Journeyman Skinning at 75 is required to go past 75.",
    "flag": "forever"
   },
   {
    "mat": "Heavy Leather",
    "lv": "20-30",
    "zone": "The Barrens (best), Hillsbrad Foothills, Ashenvale",
    "where": "The Barrens: Thunderhead, Stormhide, Hecklefang Stalker, Zhevra Courser, best near Camp Taurajo. Hillsbrad Foothills: Elder Gray Bear, Vicious Gray Bear, Gray Bear, Starving Mountain Lion. Ashenvale: Ashenvale Bear, Elder Shadowhorn Stag, Shadowhorn Stag, Elder Ashenvale Bear.",
    "note": "Creature levels about 20 to 27. Hillsbrad and Ashenvale are contested zones, so expect player contact.",
    "flag": "forever"
   },
   {
    "mat": "Heavy Leather",
    "lv": "30-40",
    "zone": "Thousand Needles (best), Arathi Highlands, Desolace",
    "where": "Thousand Needles: Saltstone Crystalhide, Scorpid Reaver, Sparkleshell Snapper, Sparkleshell Tortoise (about level 30 to 35). Arathi Highlands: Highland Strider, Highland Thrasher, Giant Plains Creeper, Highland Fleshstalker (about level 30 to 37). Desolace: Gritjaw Basilisk, Raging Thunder Lizard, Scorpashi Snapper (about level 30 to 36).",
    "note": "Arathi Highlands is a contested zone. Uldaman (level about 35, Badlands dungeon) is a classic-era option with about 35 leathers per clear.",
    "flag": "forever"
   },
   {
    "mat": "Heavy Leather",
    "lv": "30-35",
    "zone": "Uldaman (Badlands dungeon)",
    "where": "Bats, scorpions, basilisks",
    "note": "Classic-era guide: about 35 leather per clear, about 10 runs per hour, suggested player level about 35. Horde safety not stated.",
    "flag": "classic"
   },
   {
    "mat": "Thick Leather",
    "lv": "37-41",
    "zone": "Stranglethorn Vale, Dustwallow Marsh",
    "where": "Stranglethorn Vale: Shadowmaw Panther, Stranglethorn Tigress, Jungle Stalker, Jungle Thunderer. Dustwallow Marsh: Drywallow Daggermaw, Mottled Drywallow Crocolisk, Drywallow Snapper, Young Murk Thresher.",
    "note": "Both are contested zones. Thick Leather is a drop here, but the Forever source gives no drop rate. Contested zones mean player contact.",
    "flag": "forever"
   },
   {
    "mat": "Thick Leather",
    "lv": "40-50",
    "zone": "Feralas (best, near Camp Mojache), The Hinterlands, Tanaris",
    "where": "Feralas: Longtooth Runner, Ironfur Bear, Longtooth Howler, Groddoc Thunderer (level 40 to 50). The Hinterlands: Saltwater Snapjaw, Silvermane Stalker, Silvermane Wolf, Mangy Silvermane (level 41 to 50). Tanaris: Blisterpaw Hyena, Glasshide Gazer, Surf Glider, Scorpid Dunestalker (level 44 to 50).",
    "note": "Every zone in the 200 to 250 range is contested. Feralas is also where the Artisan trainer is. Feralas yetis drop Heavy Leather almost exclusively, and Thick Leather only rarely.",
    "flag": "forever"
   },
   {
    "mat": "Thick Leather",
    "lv": "40-50",
    "zone": "Badlands (near New Kargath)",
    "where": "Nyxondra's Broodling",
    "note": "Classic-era guide: drops Thick Leather about 90 percent of the time.",
    "flag": "classic"
   },
   {
    "mat": "Rugged Leather",
    "lv": "40-50",
    "zone": "Sunken Temple (Temple of Atal'Hakkar)",
    "where": "Dungeon mobs, suggested player level 40",
    "note": "Classic-era guide: about 60 leather per 4 to 5 minute run, about half of it Rugged Leather. Horde safety not stated.",
    "flag": "classic"
   },
   {
    "mat": "Rugged Leather",
    "lv": "50+",
    "zone": "Blackrock Depths",
    "where": "Bloodhounds",
    "note": "Classic-era guide: best spot found, recommended player level 45 or higher, about 50 leather per 6 to 7 minute round at level 50. Rugged Leather for the 250 to 300 range is not covered by a Forever source.",
    "flag": "classic"
   }
  ],
  "useful_crafts": [
   {
    "name": "Rugged Armor Kit",
    "skill": 225,
    "why": "Starts the Artisan range and is the base for the 225 to 300 route. Armor kits add armor to leather pieces, and Forever has upgraded variants (Forceful and Mystic) sold by vendors.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Warbear Harness",
    "skill": 250,
    "why": "Warbear-themed leather armor from the Warcraft Wiki Forever list. Drops from mobs. Source and stats not confirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Warbear Woolies",
    "skill": 260,
    "why": "Warbear-themed leather legs listed in the Warcraft Wiki Forever list, vendor-sold. Vendor location not confirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Devilsaur Gauntlets",
    "skill": 265,
    "why": "Devilsaur-themed leather gloves from the Warcraft Wiki Forever list, vendor-sold. Vendor location not confirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Devilsaur Leggings",
    "skill": 290,
    "why": "Devilsaur-themed leather legs from the Warcraft Wiki Forever list, dropped by mobs. Source location not confirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Devilcore Gauntlets",
    "skill": 290,
    "why": "Gloves from the Warcraft Wiki Forever list, dropped by mobs. Source location not confirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Wolfshead Helm",
    "skill": 225,
    "why": "Head piece from the Warcraft Wiki Forever list. Source is listed as unknown, so the route to get it is unconfirmed.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Warbear Helm",
    "skill": 300,
    "why": "Head piece for the top of the range. Source listed as unknown.",
    "item_id": null,
    "flag": "forever"
   }
  ],
  "gold": [
   "No guide has real Forever auction house prices for Leatherworking yet. Check the auction house after the first week before you buy leather in bulk.",
   "Method says that materials are priced at base item values for now because no auction data exists before launch. Check the auction house after the first week before buying in bulk.",
   "Rugged Leather is the largest single material need for the 225 to 300 range (about 677 total), so its price will shape the cost of every Artisan-range craft."
  ],
  "sources": [
   {
    "title": "WoW Forever Leatherworking Leveling Guide 1-300 (Rankedboost)",
    "url": "https://rankedboost.com/world-of-warcraft/forever/professions/leatherworking-leveling/"
   },
   {
    "title": "Leatherworking Leveling Guide (WoW Professions, Forever)",
    "url": "https://www.wow-professions.com/forever/leatherworking-leveling-guide"
   },
   {
    "title": "Leatherworking in WoW Forever: Leveling Guide and Trainers (Method)",
    "url": "https://www.method.gg/wow-forever/leatherworking-in-wow-forever-leveling-guide-and-trainers"
   },
   {
    "title": "Leatherworking profession (Metabot, Forever)",
    "url": "https://metabot.gg/en/wow-forever/professions/leatherworking"
   },
   {
    "title": "Forever leatherworking patterns (Warcraft Wiki)",
    "url": "https://warcraft.wiki.gg/wiki/Forever_leatherworking_patterns"
   },
   {
    "title": "Una, Expert Leatherworking trainer (WoW Professions, Forever)",
    "url": "https://www.wow-professions.com/forever/npc/una"
   },
   {
    "title": "WoW Forever Skinning Leveling Guide 1-300 (Rankedboost)",
    "url": "https://rankedboost.com/world-of-warcraft/forever/professions/skinning-leveling/"
   },
   {
    "title": "Heavy Leather Farming (WoW Professions, Classic-era)",
    "url": "https://www.wow-professions.com/farming/heavy-leather-farming"
   },
   {
    "title": "Thick Leather Farming (WoW Professions, Classic-era)",
    "url": "https://www.wow-professions.com/farming/thick-leather-farming"
   },
   {
    "title": "WoW Forever Leatherworking Recipes (Seemeta, beta-era, search result only)",
    "url": "https://seemeta.com/en/wow-forever/professions/leatherworking"
   },
   {
    "title": "WoW Forever all new profession changes (Mobalytics, search result only)",
    "url": "https://mobalytics.gg/wow-forever/guides/wow-forever-all-new-profession-changes"
   }
  ]
 },
 "cook": {
  "changes": [
   "Almost every cooked food in WoW Forever gives the Well Fed buff, and Well Fed adds 5 percent more experience from kills for its duration. This was confirmed on the item pages for Smoked Desert Dumplings, Grilled Squid, Dirge's Kickin' Chimaerok Chops and Tender Wolf Steak. The duration is 15 minutes on those items.",
   "Cookie's Stirring Rod makes cooking 25 percent faster (single source: Conquest Capped).",
   "Some high-level recipes need an Iron Oven, which requires Cooking 300. The blueprint for the Iron Oven has no known source yet (Conquest Capped).",
   "Campfires: sources disagree. WoW-Professions says the Basic Campfire Kit is an item you place from your bags, and that other players can add camp items to your fire. Conquest Capped says the Journeyman Campfire Kit gives 5 camp feature slots, with its drop rate unconfirmed. Warcraft Tavern names a Cooking Fire upgrade path and Cookie's Feast and Iron Oven camp objects. Treat the exact campfire tiers as unverified.",
   "The claim of more than 600 new cooking recipes is not supported by any source found. Sources report about 125 to 130 Cooking recipes in total, with about 42 to 44 of them new. Treat any larger number as unverified.",
   "Some search summaries say Forever adds 12 new drinks, six teas and six smoothies. Wicked Smoothie (20 Spirit, bought with Merchant's Favor) is the only one confirmed (Conquest Capped). The rest is unverified.",
   "Plated Armorfish gives 150 Armor, needs Cooking 225, and its recipe source is unknown (Conquest Capped). Armor matters for a bear tank, so this is worth finding in-game.",
   "Conflicting rank ranges: WoW-Professions and Conquest Capped say Journeyman Cooking requires Cooking 50 and character level 10, and that you must learn it before skill 75, or your skill stops rising at 75. RankedBoost gives the same warning. Learn Journeyman at skill 50.",
   "Artisan Cooking is unlocked by the quest 'Clamlette Surprise' from Dirge Quikcleave in Gadgetzan (Tanaris). It needs Cooking 225 and character level 35. Horde players start with a lead-in quest from Zamja in Orgrimmar. Conquest Capped and WoW-Professions agree on this. The Forever route for Artisan was only tested in beta according to WoW-Professions.",
   "Both guides that list routes disagree on fish and meat recipes after skill 150. Use the WoW-Professions route for recipe order and the RankedBoost route only for farming ideas, and check each step in-game. RankedBoost says its route is based on the original game."
  ],
  "trainers": [
   {
    "skill": "1",
    "what": "Apprentice Cooking",
    "where": "Cooking trainer Zamja in Orgrimmar (Horde capital city). Other Horde trainers are listed as Aska Mistrunner in Thunder Bluff, Cook Torka at Razor Hill, Duhng at The Crossroads, Eunice Burch in Undercity, Mudduk at Grom'gol Base Camp, Pyall Silentstride at Bloodhoof Village, and William Pickman in Brill.",
    "req": "None",
    "flag": "forever"
   },
   {
    "skill": "50",
    "what": "Journeyman Cooking",
    "where": "Any Horde Cooking trainer, such as Zamja in Orgrimmar or Aska Mistrunner in Thunder Bluff. Learn it before skill 75, because skill stops rising at 75 until you do.",
    "req": "Cooking 50 and character level 10",
    "flag": "forever"
   },
   {
    "skill": "125",
    "what": "Expert Cookbook (book, not a trainer)",
    "where": "Wulan at Shadowprey Village, Desolace (Horde). The book costs about 1 gold and can be traded, so you can also buy it on the auction house.",
    "req": "Cooking 125 to buy. It is needed to go past skill 150.",
    "flag": "forever"
   },
   {
    "skill": "225",
    "what": "Artisan Cooking (learned by quest, not a trainer)",
    "where": "Start with the Horde lead-in quest from Zamja in Orgrimmar. Finish the quest 'Clamlette Surprise' with Dirge Quikcleave in Gadgetzan, Tanaris. Buy the Artisan recipes from Gikkix in Steamwheedle Port, Tanaris.",
    "req": "Cooking 225 and character level 35",
    "flag": "forever"
   }
  ],
  "steps": [
   {
    "from": 1,
    "to": 50,
    "craft": "Brilliant Smallfish",
    "count": 55,
    "mats": "55 Raw Brilliant Smallfish (a raw fish you catch by fishing), plus any cheap vendor water if the recipe asks for it",
    "recipe_from": "Recipe sellers for Horde include Sewa Mistrunner in Thunder Bluff, Martine Tramblay in Tirisfal Glades, Lizbeth Cromwell in Undercity, and Harn Longcast in Mulgore. These sellers sell the recipe, they do not teach it.",
    "mats_from": "Fishing. The source does not name a fishing zone for this fish. Other recipes in the same range, such as Slitherskin Mackerel, Charred Wolf Meat and Roasted Boar Meat, can be used instead.",
    "item_id": null,
    "note": "Five recipes share this range at about 55 crafts each: Brilliant Smallfish, Slitherskin Mackerel, Charred Wolf Meat, Roasted Boar Meat and Herb Baked Egg. Switch to the next one as soon as the current one stops giving skill points. Buy Mild Spices and Refreshing Spring Water from cooking supply vendors near your trainer, not from the auction house.",
    "flag": "forever"
   },
   {
    "from": 50,
    "to": 100,
    "craft": "Longjaw Mud Snapper",
    "count": 55,
    "mats": "55 Raw Longjaw Mud Snapper (a raw fish you catch by fishing)",
    "recipe_from": "Horde recipe sellers include Harn Longcast in Mulgore, Killian Sanatha in Silverpine Forest, Naal Mistrunner in Thunder Bluff, and Lizbeth Cromwell in Undercity.",
    "mats_from": "Fishing. Horde-accessible fishing zones listed in the source are Silverpine Forest, Mulgore, Thunder Bluff, Tirisfal Glades and Undercity (classic data).",
    "item_id": null,
    "note": "Alternatives in this range: Rainbow Fin Albacore (55 crafts, raw fish from fishing), Boiled Clams (55 crafts, needs Clam Meat and a vendor water), Smoked Bear Meat (65 to 75 crafts, made from Bear Meat that you loot from bears you kill while leveling; the Horde recipe seller is Andrew Hilbert in Silverpine Forest). Smoked Bear Meat turns grey sooner, so make a few extra.",
    "flag": "forever"
   },
   {
    "from": 100,
    "to": 130,
    "craft": "Crab Cake",
    "count": 40,
    "mats": "40 Crawler Meat (dropped by crawlers) and 40 Mild Spices (vendor)",
    "recipe_from": "Cooking trainer (any trainer that teaches Journeyman recipes).",
    "mats_from": "Crawler Meat is listed for Horde in Ashenvale near the Zoram Strand, a contested zone with no farming route in the source. Mild Spices come from a cooking supply vendor.",
    "item_id": null,
    "note": "Alternative in this range: Dry Pork Ribs (35 crafts, needs 35 Boar Ribs from boars, plus 35 Mild Spices). Bristle Whisker Catfish (30 crafts, see next step) also works here.",
    "flag": "forever"
   },
   {
    "from": 100,
    "to": 130,
    "craft": "Bristle Whisker Catfish",
    "count": 30,
    "mats": "30 Raw Bristle Whisker Catfish (a raw fish you catch by fishing)",
    "recipe_from": "Horde recipe sellers include Naal Mistrunner and Sewa Mistrunner in Thunder Bluff.",
    "mats_from": "Fishing. Buy about 55 total across this step and the next, because you will need 25 more from 130 to 150.",
    "item_id": null,
    "note": "Eat level for the cooked version is 15. Cook about 55 total across both steps.",
    "flag": "forever"
   },
   {
    "from": 130,
    "to": 150,
    "craft": "Bristle Whisker Catfish",
    "count": 25,
    "mats": "25 Raw Bristle Whisker Catfish (fishing)",
    "recipe_from": "Same Horde sellers as above (Naal Mistrunner and Sewa Mistrunner in Thunder Bluff).",
    "mats_from": "Fishing.",
    "item_id": null,
    "note": "Alternative in this range: Hot Lion Chops (25 crafts, Lion Meat and Hot Spices), with the recipe from Zargh in The Barrens (Horde only). Lion Meat source is not named in the sources. Goblin Deviled Clams (25 crafts) is a trainer recipe that uses Tangy Clam Meat. Learn Expert before 150.",
    "flag": "forever"
   },
   {
    "from": 150,
    "to": 175,
    "craft": "Curiously Tasty Omelet",
    "count": 25,
    "mats": "25 Raptor Egg and 25 Hot Spices (vendor)",
    "recipe_from": "Keena in Arathi Highlands (Horde).",
    "mats_from": "Raptor Egg source is not named in the sources. Hot Spices come from a cooking supply vendor.",
    "item_id": null,
    "note": "Alternative: Hot Lion Chops (25 crafts). Curiously Tasty Omelet turns grey at skill 170. Requires the Expert Cookbook from Wulan in Desolace.",
    "flag": "forever"
   },
   {
    "from": 175,
    "to": 225,
    "craft": "Mithril Headed Trout",
    "count": 50,
    "mats": "50 Raw Mithril Head Trout (fishing)",
    "recipe_from": "Horde recipe sellers include Lizbeth Cromwell in Undercity, Shankys in Orgrimmar, Wik'Tar in Ashenvale, and Wulan in Desolace.",
    "mats_from": "Fishing. The sources list many zones, and Stranglethorn Vale, Dustwallow Marsh and Desolace are the common ones.",
    "item_id": null,
    "note": "Alternatives in this range: Roast Raptor (50 crafts, Raptor Flesh plus Hot Spices, recipe from Keena in Arathi Highlands or Ogg'marr in Dustwallow Marsh) and Soothing Turtle Bisque (50 crafts, Turtle Meat plus Soothing Spices, recipe is a quest reward from Christoph Jeffcoat in Hillsbrad Foothills). All three turn grey near skill 215.",
    "flag": "forever"
   },
   {
    "from": 225,
    "to": 275,
    "craft": "Spotted Yellowtail",
    "count": 65,
    "mats": "65 Raw Spotted Yellowtail (fishing)",
    "recipe_from": "Gikkix in Steamwheedle Port, Tanaris.",
    "mats_from": "Fishing. The source lists Tanaris, Stranglethorn Vale, Azshara, Desolace, Dustwallow Marsh and Arathi Highlands.",
    "item_id": null,
    "note": "Eat level for the cooked version is 35. Alternatives in this range, each about 65 crafts: Filet of Redgill (Raw Redgill, recipe from Kelsey Yance in Stranglethorn Vale), Undermine Clam Chowder (needs 130 Zesty Clam Meat, 65 Hot Spices and 65 Ice Cold Milk from innkeepers, recipe from Jabbey in Tanaris), Monster Omelet (65 Giant Egg and 130 Soothing Spices, recipe from Bale in Felwood, Horde), and Tender Wolf Steak (65 Tender Wolf Meat and 65 Soothing Spices, recipe from Dirge Quikcleave in Tanaris). Tender Wolf Steak is the best tank food in this range; see tank_food.",
    "flag": "forever"
   },
   {
    "from": 275,
    "to": 300,
    "craft": "Poached Sunscale Salmon",
    "count": 35,
    "mats": "35 Raw Sunscale Salmon (fishing)",
    "recipe_from": "Gikkix in Steamwheedle Port, Tanaris.",
    "mats_from": "Fishing. The source does not name the zone.",
    "item_id": null,
    "note": "Alternative in this range: Nightfin Soup (35 crafts, 35 Raw Nightfin Snapper and 35 Refreshing Spring Water, recipe from Gikkix). Smoked Desert Dumplings (15 crafts, 15 Sandworm Meat from Dredge Strikers and Dredge Crushers in Silithus, and 15 Soothing Spices) is the other option. Both the salmon and the soup turn grey near skill 290.",
    "flag": "forever"
   }
  ],
  "tank_food": [
   {
    "lv": "45-60",
    "name": "Dirge's Kickin' Chimaerok Chops",
    "effect": "Well Fed gives +25 Stamina for 15 minutes, and restores 2452 health over 30 seconds. Stamina is the best stat for a bear tank here.",
    "recipe_from": "Cooking 300 required. A search summary says it comes from the Scepter of the Shifting Sands quest chain in Silithus; this source was not fetched, so treat it as unverified.",
    "item_id": 21023,
    "flag": "forever"
   },
   {
    "lv": "45-60",
    "name": "Smoked Desert Dumplings",
    "effect": "Well Fed gives +20 Strength for 15 minutes, and restores 2065 health over 30 seconds. Strength adds attack power, which helps bear threat, but it is not a defense stat.",
    "recipe_from": "Cooking 285. Two Silithus quests, 'Desert Recipe' and 'Sharing the Knowledge', teach it (WoW-Professions). Ingredients are 15 Sandworm Meat and 15 Soothing Spices.",
    "item_id": 20452,
    "flag": "forever"
   },
   {
    "lv": "35-60",
    "name": "Tender Wolf Steak",
    "effect": "Well Fed gives +15 Agility for 15 minutes, and restores 1338 health over 30 seconds. Agility raises dodge, which is a main defense for bears.",
    "recipe_from": "Recipe from Dirge Quikcleave in Gadgetzan, Tanaris. Cooking 225 to 275 range in the WoW-Professions route. Ingredients are 65 Tender Wolf Meat and 65 Soothing Spices, which the route calls for at skill 225 to 275.",
    "item_id": 18045,
    "flag": "forever"
   },
   {
    "lv": "?",
    "name": "Plated Armorfish",
    "effect": "Gives 150 Armor. Armor reduces physical damage and is a strong stat for a bear tank.",
    "recipe_from": "Cooking 225 required. Recipe source is unknown in the sources found.",
    "item_id": null,
    "flag": "forever"
   }
  ],
  "gold": [
   "Expert Cookbook is tradeable and costs about 1 gold, so buying it from Wulan in Desolace or on the auction house is cheap (Conquest Capped).",
   "Buy Mild Spices, Hot Spices, Soothing Spices and Refreshing Spring Water from cooking supply vendors near your trainer, not the auction house. WoW-Professions gives this advice.",
   "Ice Cold Milk is sold by most innkeepers and is needed for Undermine Clam Chowder (WoW-Professions).",
   "The sources found give no verified auction house prices for any cooking ingredient or food. Check prices yourself before buying a large stack of raw fish, Sandworm Meat or Tender Wolf Meat.",
   "Recipes can be bought from vendors or learned from quests. Several Expert and Artisan recipes need specific sellers, so buying the recipe from a cheaper seller in a different city may save time."
  ],
  "sources": [
   {
    "title": "WoW Forever Cooking Leveling Guide 1-300 (WoW-Professions)",
    "url": "https://www.wow-professions.com/forever/cooking-leveling-guide"
   },
   {
    "title": "WoW Forever Cooking Leveling Guide 1-300 (RankedBoost)",
    "url": "https://rankedboost.com/world-of-warcraft/forever/professions/cooking-leveling/"
   },
   {
    "title": "Cooking Overview: Campfires, Recipes and Bonuses (Warcraft Tavern)",
    "url": "https://www.warcrafttavern.com/forever/guides/cooking/"
   },
   {
    "title": "WoW Forever Cooking (Conquest Capped)",
    "url": "https://conquestcapped.com/guides/wow-forever/wow-forever-cooking/"
   },
   {
    "title": "Cooked Food Provides an XP Buff in World of Warcraft Forever (Warcraft Tavern)",
    "url": "https://www.warcrafttavern.com/forever/news/cooked-food-provides-an-xp-buff-in-world-of-warcraft-forever"
   },
   {
    "title": "Feral Druid Guide (Warcraft Tavern, Forever)",
    "url": "https://www.warcrafttavern.com/forever/guides/feral-druid/"
   },
   {
    "title": "Smoked Desert Dumplings item page (Wowhead Forever tooltip)",
    "url": "https://nether.wowhead.com/forever/tooltip/item/20452"
   },
   {
    "title": "Dirge's Kickin' Chimaerok Chops item page (Wowhead Forever tooltip)",
    "url": "https://nether.wowhead.com/forever/tooltip/item/21023"
   },
   {
    "title": "Tender Wolf Steak item page (Wowhead Forever tooltip)",
    "url": "https://nether.wowhead.com/forever/tooltip/item/18045"
   },
   {
    "title": "Grilled Squid item page (Wowhead Forever tooltip)",
    "url": "https://nether.wowhead.com/forever/tooltip/item/13928"
   },
   {
    "title": "Charred Wolf Meat item page (Wowhead Forever tooltip)",
    "url": "https://nether.wowhead.com/forever/tooltip/item/2679"
   }
  ],
  "food_note": "No guide lists a verified stamina or armor food you can eat between levels 22 and 34. Until then, any cooked food is still worth eating: in Forever almost every cooked food gives the Well Fed buff, which adds 5% experience from kills."
 },
 "fish": {
  "changes": [
   "Forever adds three fishing camp objects: the Fish Bowl (learned at Fishing skill 20 from the Camping 101 quest given by Uthan Stillwater in Bloodhoof Village, Mulgore, or from a fishing trainer), which gives nearby seated players an 8 percent bonus to all stats and does not stack with Blessing of Kings; the Fishing Rack (Fishing skill 140), which lets you catch uncommon fish for one hour and provides fishing lures; and the Fishing Hut (Fishing skill 300), which lets you catch rare fish for one hour and provides the Fish Bowl effect.",
   "The Fishing Rack recipe drops from Gelihast in Blackfathom Deeps. The Fishing Rack needs 2 Simple Wood, 1 Crystal Vial and 2 Raw Mithril Head Trout. The Fishing Hut recipe source is not confirmed; one source lists 5 Simple Wood, 2 Bolts of Runecloth and 1 Seasonal Fish Steak as materials.",
   "All camp items share one cooldown of one hour. Placing any camp item puts all camp items on cooldown.",
   "A new Bait and Tackle crafting menu appears for camping gear, with Create and Create All buttons. A Chef's Knife is used to prepare Unique Fish. It is not confirmed whether Bait and Tackle includes the Chef's Knife.",
   "Forever adds schools of fish and floating wreckage along shorelines. Wreckage can yield rare fish, raw materials and 14-slot bags. Open-water fishing with lures and camp buffs can yield bloated fish.",
   "Legacy talents in the professions tree relevant to fishing: Luremaster (a chance to catch an extra fish when using a lure), Working Overtime (a better chance of skill-ups in any profession) and Dedicated Study (a small skill boost to your lowest profession).",
   "The Stranglethorn Vale Fishing Tournament now lets multiple players win. Winners receive the Arcanite Fishing Pole and an Extravagant Extravaganza Coin, which can be turned in for cosmetic and fishing rewards. Surfer Shoes (walk on water) are also a tournament reward.",
   "The Riverglades is a Forever zone with a fishing trainer named Krix in Powderfuse Port, a goblin town on the eastern coast. Ships run from Steamwheedle Port in Tanaris to Powderfuse Port. Sources disagree on the zone's level range (mid-30s to mid-40s versus a mid-level fishing band of skill 135 to 205), so check in-game before relying on either.",
   "The Riverglades trainer and the camp object patch details (Fishing Rack and Fishing Hut) credit Patch 1.60.1, released November 4 2026. Most Forever fishing sources are based on the beta client, so numbers may change.",
   "Journeyman Fishing is taught by every fishing trainer, but it requires Fishing skill 50 and character level 10. Apprentice fishing has no level requirement in Forever.",
   "Expert Fishing (the 150 rank) is learned from the book Expert Fishing - The Bass and You, which requires Fishing skill 125 and character level 20 to read. Old Man Heming sells it in Booty Bay for about 1 gold, and it is tradeable on the Auction House.",
   "Artisan Fishing (the 225 rank) is granted by the quest Nat Pagle, Angler Extreme from Nat Pagle in Dustwallow Marsh, which needs character level 35 and Fishing skill 225.",
   "The Bountiful Harvest claim could not be confirmed as a fishing feature. Commercial gold-selling sites describe it as a Legacy perk that increases scarce materials from Herbalism, Mining and Skinning, not Fishing. Treat it as unverified."
  ],
  "trainers": [
   {
    "skill": "1",
    "what": "Apprentice Fishing",
    "where": "Durotar (Lau'Tiki, south of Sen'jin Village); Mulgore (Uthan Stillwater, Stonebull Lake beside Bloodhoof Village); Tirisfal Glades (Clyde Kellen, Brightwater Lake); Ashenvale (Kil'Hiwana, south of Blackfathom Deeps); Desolace (Lui'Mala, Shadowprey Village); Thunder Bluff (Kah Mistrunner); Orgrimmar (Lumak, Valley of Honor); Undercity (Armand Cromwell, Magic Quarter); The Hinterlands (Katoom the Angler, Revantusk Village)",
    "req": "No level requirement in Forever.",
    "flag": "forever"
   },
   {
    "skill": "75",
    "what": "Journeyman Fishing",
    "where": "Any fishing trainer listed for Apprentice Fishing. Neutral trainers Krix (Powderfuse Port, Riverglades), Baelann Swiftcurrent (Valanaar, Zephras Isle), Fenn Fairweather (Shen'dar Village, Zephras Isle) and Myizz Luckycatch (Booty Bay, Stranglethorn Vale) also teach it.",
    "req": "Fishing skill 50 and character level 10.",
    "flag": "forever"
   },
   {
    "skill": "150",
    "what": "Expert Fishing",
    "where": "No trainer. Buy the book Expert Fishing - The Bass and You from Old Man Heming in Booty Bay, Stranglethorn Vale (bottom of the city near the fishing sign), or from the Auction House.",
    "req": "Book requires Fishing skill 125 and character level 20. The book costs about 1 gold.",
    "flag": "forever"
   },
   {
    "skill": "225",
    "what": "Artisan Fishing",
    "where": "No trainer. Complete the quest Nat Pagle, Angler Extreme from Nat Pagle, Tidefury Cove, Dustwallow Marsh.",
    "req": "Fishing skill 225 and character level 35. The quest requires catching one quest fish from each of four zones: Feralas Ahi (Verdantis River, Feralas), Misty Reed Mahi Mahi (Misty Reed Strand, Swamp of Sorrows), Sar'theris Striker (Sar'theris Strand, Desolace) and Savage Coast Blue Sailfin (Savage Coast, Stranglethorn Vale).",
    "flag": "forever"
   }
  ],
  "steps": [
   {
    "from": 1,
    "to": 75,
    "zone": "Durotar, Mulgore, Tirisfal Glades or Zephras Isle (starting zones)",
    "where": "Durotar: coast south of Sen'jin Village near Lau'Tiki, Horde town Sen'jin Village. Mulgore: Stonebull Lake beside Bloodhoof Village, trainer Uthan Stillwater. Tirisfal Glades: Brightwater Lake east of Brill, trainer Clyde Kellen. Get the Shiny Bauble and a Fishing Pole from the vendors listed in the gear section.",
    "catch": "Raw Brilliant Smallfish, Oily Blackmouth, Firefin Snapper, and early junk items",
    "note": "Buy a Shiny Bauble before you start. Nightcrawlers become useful after you reach Fishing 50 if fish keep escaping. Complete the Camping 101 quest (Fishing skill 20) from Uthan Stillwater in Bloodhoof Village to learn the Fish Bowl.",
    "flag": "forever"
   },
   {
    "from": 75,
    "to": 150,
    "zone": "Capital cities (Orgrimmar, Undercity, Thunder Bluff) and The Barrens, Darkshore, Ironforge, Loch Modan, Silverpine Forest, Westfall, Redridge Mountains (Redridge needs Journeyman and skill 150 for guaranteed catches)",
    "where": "Nearest Horde town for this range: Orgrimmar, Undercity or Thunder Bluff, which have fishing spots in their own water. The Barrens is the closest open-world zone to Thunder Bluff. Exact pool coordinates were not found.",
    "catch": "Raw Longjaw Mud Snapper (cooking skill 75 in Orgrimmar and Thunder Bluff), Oily Blackmouth, Firefin Snapper",
    "note": "Sources list zones only, not exact pools. Undercity water yields many sickly fish, which reduce useful catches. Use Bright Baubles from Old Man Heming in Booty Bay if your Shiny Baubles stop working.",
    "flag": "forever"
   },
   {
    "from": 150,
    "to": 225,
    "zone": "Dustwallow Marsh, plus Stranglethorn Vale, Desolace and Swamp of Sorrows",
    "where": "Dustwallow Marsh is the main spot because Nat Pagle, who gives the Artisan Fishing quest, lives at Tidefury Cove there. The nearest Horde town is Brackenwall Village. Other good coasts: Stranglethorn Vale near Booty Bay (where Old Man Heming sells lures), the Desolace coast near Shadowprey Village, and Misty Reed Strand on the east coast of Swamp of Sorrows.",
    "catch": "Raw Mithril Head Trout (cooking skill 225 in Dustwallow Marsh and Desolace), Stonescale Eel, Oily Blackmouth, Firefin Snapper, Savage Coast Blue Sailfin, Misty Reed Mahi Mahi, Sar'theris Striker",
    "note": "Buy the Expert book before this range. Carry Bright Baubles from Booty Bay. Nat Pagle's Artisan quest needs one quest fish from each of four coastal zones, so plan those catches early.",
    "flag": "forever"
   },
   {
    "from": 225,
    "to": 300,
    "zone": "Felwood, Feralas, The Hinterlands, Tanaris, Un'Goro Crater, Western Plaguelands, and Riverglades (Forever zone with fishing trainer Krix in Powderfuse Port)",
    "where": "Feralas: Verdantis River south-east of Dire Maul, the nearest Horde town is Camp Mojache. The Hinterlands: Revantusk Village pier, Katoom the Angler trainer, Horde town. Tanaris: coast near Steamwheedle Port. Riverglades: Powderfuse Port eastern coast.",
    "catch": "Raw Redgill (cooking skill 300, lakes and rivers in The Hinterlands, Western Plaguelands, Moonglade, Felwood, Un'Goro Crater), Raw Spotted Yellowtail (cooking skill 300, Tanaris and The Hinterlands coast), Stonescale Eel, Feralas Ahi, Firefin Snapper, Raw Deviate Fish (around 15 to 25 percent of open-water catches in some areas)",
    "note": "Use Bright Baubles or Fish Attractors to keep fish from escaping. The Fishing Hut (Fishing skill 300) unlocks rare fish for one hour. Master Fishing rank was not found in any source. Riverglades level data conflicts across sources, so verify before routing there.",
    "flag": "forever"
   }
  ],
  "gear": [
   {
    "name": "Basic Fishing Pole",
    "what": "Starting fishing pole with no fishing bonus.",
    "where": "Fishing vendors in Durotar (Zansoa, Sen'jin Village), Mulgore (Wunna Darkmane, Bloodhoof Village), Tirisfal Glades (Martine Tramblay, Death's Watch Waystation), Zephras Isle (Baelann Swiftcurrent or Belandiel Farflight, Shen'dar Village), and capital cities (Shankys in Orgrimmar, Lizbeth Cromwell in Undercity, Sewa Mistrunner in Thunder Bluff). Also Wik'Tar at Zoram'gar Outpost (Ashenvale) and Katoom the Angler (The Hinterlands).",
    "item_id": 6256,
    "flag": "forever"
   },
   {
    "name": "Strong Fishing Pole",
    "what": "Gives +5 fishing skill. Requires fishing skill 10.",
    "where": "Fishing vendors in Horde starting zones and capital cities (same vendors as the Basic Fishing Pole).",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Big Iron Fishing Pole",
    "what": "Gives +20 fishing skill. Requires fishing skill 100.",
    "where": "Drops at 1 percent from a Shellfish Trap on the south-west coast of Desolace. Trap loot, not a vendor.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Nat Pagle's Extreme Angler FC-5000",
    "what": "Gives +25 fishing skill. Requires fishing skill 100.",
    "where": "Horde quest Snapjaws, Mon! from Revantusk Village, The Hinterlands. Horde only.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Arcanite Fishing Pole",
    "what": "Gives +35 fishing skill. Requires fishing skill 300.",
    "where": "Reward for winning the Stranglethorn Vale Fishing Tournament. Multiple players can now win. Winners also receive the Extravagant Extravaganza Coin.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Shiny Bauble",
    "what": "Lure that gives +25 fishing skill for 10 minutes.",
    "where": "Fishing vendors in Horde starting zones and capital cities.",
    "item_id": 6529,
    "flag": "forever"
   },
   {
    "name": "Nightcrawlers",
    "what": "Lure that gives +50 fishing skill for 10 minutes.",
    "where": "Fishing vendors and occasional drops from undead. Sources list a Fishing 50 requirement to buy.",
    "item_id": 6530,
    "flag": "forever"
   },
   {
    "name": "Bright Baubles",
    "what": "Lure that gives +75 fishing skill for 10 minutes.",
    "where": "Old Man Heming in Booty Bay, Stranglethorn Vale (Horde). Also sold by the Fishing Rack camp object.",
    "item_id": 6532,
    "flag": "forever"
   },
   {
    "name": "Aquadynamic Fish Attractor",
    "what": "Lure that gives +100 fishing skill for 5 minutes.",
    "where": "Vendors and the Engineering profession (craftable). Horde players buy it from fishing vendors or craft it.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Aquadynamic Fish Lens",
    "what": "Lure that gives +50 fishing skill for 10 minutes.",
    "where": "Produced by the Fishing Rack camp object.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Flesh Eating Worm",
    "what": "Lure that gives +75 fishing skill for 10 minutes.",
    "where": "Drops from The Rotted One in Duskwood. Sources say farming it is not worth the time.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Fish Bowl",
    "what": "Camp object that gives nearby seated players an 8 percent bonus to all stats. Does not stack with Blessing of Kings.",
    "where": "Learned at Fishing skill 20 from the Camping 101 quest (Uthan Stillwater, Bloodhoof Village, Mulgore) or from a fishing trainer. Made from 1 Raw Brilliant Smallfish and 1 Empty Vial. Needs a campfire nearby.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Fishing Rack",
    "what": "Camp object that lets you catch uncommon fish for one hour and provides fishing lures.",
    "where": "Blueprint dropped by Gelihast in Blackfathom Deeps (Ashenvale). Needs Fishing skill 140.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Fishing Hut",
    "what": "Camp object that lets you catch rare fish for one hour and provides fishing lures.",
    "where": "Blueprint source not confirmed. Needs Fishing skill 300.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Expert Fishing - The Bass and You",
    "what": "Book that teaches Expert Fishing (the 150 rank).",
    "where": "Old Man Heming, Booty Bay, Stranglethorn Vale, about 1 gold. Also on the Auction House.",
    "item_id": 16083,
    "flag": "forever"
   },
   {
    "name": "Lucky Fishing Hat",
    "what": "Gives +5 fishing skill.",
    "where": "Reward from the Stranglethorn Vale Fishing Tournament.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Nat Pagle's Extreme Anglin' Boots",
    "what": "Gives +5 fishing skill.",
    "where": "Reward from the Stranglethorn Vale Fishing Tournament.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "High Test Eternium Fishing Line",
    "what": "Gives +5 fishing skill when applied to a pole.",
    "where": "Reward from the Stranglethorn Vale Fishing Tournament.",
    "item_id": null,
    "flag": "forever"
   },
   {
    "name": "Enchant Gloves - Fishing",
    "what": "Enchant that gives +2 fishing skill to gloves.",
    "where": "Learned from an Enchanting trainer. Requires the Enchanting profession.",
    "item_id": null,
    "flag": "forever"
   }
  ],
  "valuable": [
   {
    "fish": "Stonescale Eel",
    "use": "Sold on the Auction House. Mostly sold for gold. Price varies by server, often between about 1 and 3 gold in one tracker, but the data is unreliable.",
    "where": "Coastal water in Azshara, Feralas, Tanaris, The Hinterlands and Stranglethorn Vale (Jaguero Isle only). A Forever guide also lists Azshara and Tanaris.",
    "flag": "classic"
   },
   {
    "fish": "Oily Blackmouth",
    "use": "Sold on the Auction House for a small gold amount. Low-level fish that also appears in many cooking-related quests.",
    "where": "Coastal water in most levels 10 to 40 zones, including The Barrens, Wetlands and Stranglethorn Vale coasts.",
    "flag": "classic"
   },
   {
    "fish": "Firefin Snapper",
    "use": "Sold on the Auction House for a small gold amount. Used for some cooking recipes.",
    "where": "Coastal water in most level 20 and up zones, including Wetlands, Tanaris and Stranglethorn Vale coasts.",
    "flag": "classic"
   },
   {
    "fish": "Raw Deviate Fish",
    "use": "Cooks into Savory Deviate Delight, which sells for about 25 silver or more. Sold raw or cooked.",
    "where": "Open water in The Hinterlands, especially the Revantusk Village pier (Horde). Also roughly 15 to 25 percent of open-water catches in some areas.",
    "flag": "classic"
   },
   {
    "fish": "Raw Mithril Head Trout",
    "use": "Cooks at cooking skill 225. Used in the Fishing Rack recipe.",
    "where": "Dustwallow Marsh and Desolace.",
    "flag": "forever"
   },
   {
    "fish": "Raw Redgill",
    "use": "Cooks at cooking skill 300 into Filet of Redgill, which gives an 18-point fishing buff.",
    "where": "Lakes and rivers in The Hinterlands, Western Plaguelands, Moonglade, Felwood and Un'Goro Crater.",
    "flag": "forever"
   },
   {
    "fish": "Raw Spotted Yellowtail",
    "use": "Cooks at cooking skill 300 into a Forever food item.",
    "where": "Coastal water in Tanaris and The Hinterlands.",
    "flag": "forever"
   },
   {
    "fish": "Raw Longjaw Mud Snapper",
    "use": "Cooks at cooking skill 75 into a cooking recipe.",
    "where": "Orgrimmar and Thunder Bluff.",
    "flag": "forever"
   },
   {
    "fish": "Raw Brilliant Smallfish",
    "use": "Cooks at cooking skill 25. Also used to make the Fish Bowl camp object.",
    "where": "Mulgore.",
    "flag": "forever"
   },
   {
    "fish": "Raw Bristle Whisker Catfish",
    "use": "Cooks at cooking skill 150 into a food item that gives an 8-point fishing buff.",
    "where": "Stonetalon Mountains and Ashenvale.",
    "flag": "forever"
   },
   {
    "fish": "Feralas Ahi",
    "use": "Required for Artisan Fishing quest (Nat Pagle, Dustwallow Marsh). Not sold.",
    "where": "Verdantis River, Feralas, south-east of Dire Maul.",
    "flag": "forever"
   },
   {
    "fish": "Misty Reed Mahi Mahi",
    "use": "Required for Artisan Fishing quest. Not sold.",
    "where": "Misty Reed Strand, Swamp of Sorrows east coast.",
    "flag": "forever"
   },
   {
    "fish": "Sar'theris Striker",
    "use": "Required for Artisan Fishing quest. Not sold.",
    "where": "Sar'theris Strand, Desolace west coast.",
    "flag": "forever"
   },
   {
    "fish": "Savage Coast Blue Sailfin",
    "use": "Required for Artisan Fishing quest. Not sold.",
    "where": "Savage Coast, Stranglethorn Vale west shoreline.",
    "flag": "forever"
   }
  ],
  "sources": [
   {
    "title": "WoW Forever Fishing Leveling Guide 1-300 (wow-professions.com)",
    "url": "https://www.wow-professions.com/forever/fishing-leveling-guide"
   },
   {
    "title": "How to Fish in WoW Forever: Trainers, Pole & Lures (wow-professions.com)",
    "url": "https://www.wow-professions.com/forever/how-to-fish"
   },
   {
    "title": "WoW Forever Fishing Trainers (wow-professions.com)",
    "url": "https://www.wow-professions.com/forever/fishing-trainers"
   },
   {
    "title": "WoW Forever Camping Guide: Every Profession Camp Item (wow-professions.com)",
    "url": "https://www.wow-professions.com/forever/camping-guide"
   },
   {
    "title": "Camping 101: Fishing quest (Wowhead Forever)",
    "url": "https://www.wowhead.com/forever/quest=97932/camping-101-fishing"
   },
   {
    "title": "Fishing in WoW Forever leveling guide (Method)",
    "url": "https://www.method.gg/wow-forever/fishing-in-wow-forever-leveling-guide-fishing-items-trainers"
   },
   {
    "title": "Fishing Overview: Equipment, Lures & Bonuses (Warcraft Tavern)",
    "url": "https://www.warcrafttavern.com/forever/guides/fishing/"
   },
   {
    "title": "Fishing Hut (Warcraft Wiki)",
    "url": "https://warcraft.wiki.gg/wiki/Fishing_Hut"
   },
   {
    "title": "Blueprint: Fishing Rack (Warcraft Wiki)",
    "url": "https://warcraft.wiki.gg/wiki/Blueprint:_Fishing_Rack"
   },
   {
    "title": "Powderfuse Port (Warcraft Wiki)",
    "url": "https://warcraft.wiki.gg/wiki/Powderfuse_Port"
   },
   {
    "title": "How to Get to Riverglades in WoW Forever (Overgear)",
    "url": "https://overgear.com/guides/wow-forever/how-to-get-to-riverglades/"
   },
   {
    "title": "Stonescale Eel (Wowpedia mirror)",
    "url": "https://breezewiki.discard.no/wowpedia/wiki/Stonescale_Eel"
   },
   {
    "title": "Classic WoW Horde Fishing Guide 1-300 (Warcraft Tavern, Classic fallback)",
    "url": "https://www.warcrafttavern.com/guides/wow-classic-horde-fishing-guide-1-300/"
   }
  ]
 }
};
