/* Dungeon quests to pick up BEFORE each dungeon, Horde + both-faction only.
   Source: Wowhead Forever dungeon overview guides (quick reference tables), faction and required level checked per quest
   against the Wowhead Forever quest database, Nov 19 2026. Class-only and Blacksmith-only quests left out.
   q: [questId, name, side (H = Horde, B = both), required level, npcId or 0, quest giver, where, extra note] */
window.DQUESTS = [
  { key: "alcaz", name: "Alcaz Island Prison", lv: [48, 53], guide: 35355, forever: true, q: [
    [95283, "The Missing Kor'kron", "H", 48, 3144, "Eitrigg", "Orgrimmar (34.6, 38.6)", "Start here. It sends you to Sergeant Ulka on Alcaz Island, who gives the three quests below."],
    [95309, "No Orc Left Behind", "H", 48, 260383, "Sergeant Ulka", "Alcaz Island, Dustwallow Marsh (33.4, 38.0)", "Leads to The Honor of the Kor'kron."],
    [96332, "A Little Payback", "H", 48, 260383, "Sergeant Ulka", "Alcaz Island, Dustwallow Marsh (33.4, 38.0)", ""],
    [96334, "Blood Red Bandanas", "H", 48, 260383, "Sergeant Ulka", "Alcaz Island, Dustwallow Marsh (33.4, 38.0)", ""],
    [96335, "The Man in the Iron Chains", "B", 48, 264770, "Mason Connery", "inside, after the last boss", "Only offered if The Questioner is still alive."]
  ]},
  { key: "zf", name: "Zul'Farrak", lv: [44, 54], guide: 35196, q: [
    [96775, "Zum'rah's Head", "H", 42, 264074, "Mazu'kon", "Skywatcher Plateau, Mulgore (32, 21)", "New in Forever."],
    [2936, "The Spider God", "H", 40, 3188, "Master Gadrin", "Sen'jin Village, Durotar (56, 74)", "Chain starts with Venom Bottles, from a Venom Bottle in The Hinterlands (23, 58)."],
    [2768, "Divino-matic Rod", "B", 40, 7407, "Chief Engineer Bilgewhizzle", "Gadgetzan, Tanaris (52, 28)", ""],
    [2865, "Scarab Shells", "B", 40, 7876, "Tran'rek", "Gadgetzan, Tanaris (51, 26)", ""],
    [3042, "Troll Temper", "B", 40, 7804, "Trenton Lighthammer", "Gadgetzan, Tanaris (51, 28)", ""],
    [2846, "Tiara of the Deep", "B", 40, 6546, "Tabetha", "north of Stonemaul Ruins, Dustwallow Marsh (46, 57)", ""],
    [2770, "Gahz'rilla", "B", 40, 4453, "Wizzle Brassbolts", "Shimmering Flats, Thousand Needles (78, 77)", "Someone in the group needs the Mallet of Zul'Farrak to summon Gahz'rilla. It drops from Qiaga the Keeper in The Hinterlands."],
    [3527, "The Prophecy of Mosh'aru", "B", 40, 8579, "Yeh'kinya", "Steamwheedle Port, Tanaris (67, 22)", "Comes after Screecher Spirits from the same NPC."]
  ]},
  { key: "mara", name: "Maraudon", lv: [46, 55], guide: 35197, q: [
    [96776, "An'she's Radiance", "H", 43, 268557, "Olana Brighthoof", "Skywatcher Plateau, Mulgore (32.6, 24)", "New in Forever."],
    [7068, "Shadowshard Fragments", "H", 39, 7311, "Uthel'nay", "Valley of Spirits, Orgrimmar (39, 86)", ""],
    [7029, "Vyletongue Corruption", "H", 41, 11823, "Vark Battlescar", "Shadowprey Village, Desolace (23, 70)", ""],
    [7064, "Corruption of Earth and Seed", "H", 45, 13699, "Selendra", "south of Shadowprey Village, Desolace (26, 77)", ""],
    [7028, "Twisted Evils", "B", 41, 13656, "Willow", "south-east of Thunder Axe Fortress, Desolace (62, 39)", ""],
    [7067, "The Pariah's Instructions", "B", 39, 13717, "Centaur Pariah", "south of Mannoroc Coven, Desolace (48.4, 87.0), walks around", ""],
    [93404, "Rot and Regret", "B", 35, 254674, "Woodwyrd", "Shen'dralas (60, 72)", "New in Forever. Starts with Strange Pylons from a Shen'dralar Pylon (44, 34)."],
    [7044, "Legends of Maraudon", "B", 41, 13697, "Cavindra", "outside the Orange entrance of Maraudon", ""],
    [7046, "The Scepter of Celebras", "B", 41, 13716, "Celebras the Redeemed", "inside, Purple side", "After Legends of Maraudon."],
    [7066, "Seed of Life", "B", 39, 12238, "Zaetar's Spirit", "inside, after you kill Princess Theradras", ""]
  ]},
  { key: "st", name: "Sunken Temple", lv: [50, 56], guide: 35200, q: [
    [1445, "The Temple of Atal'Hakkar", "H", 38, 1443, "Fel'zerul", "Stonard, Swamp of Sorrows (47, 54)", "Do 3 quests first, starting with Pool of Tears from the same NPC."],
    [3380, "The Sunken Temple", "H", 46, 7771, "Marvon Rivetseeker", "south of Gadgetzan, Tanaris (52, 45)", "Leads to The Stone Circle, then Into the Depths and Secret of the Circle."],
    [3446, "Into the Depths", "B", 46, 7771, "Marvon Rivetseeker", "south of Gadgetzan, Tanaris (52, 45)", "After The Sunken Temple."],
    [3447, "Secret of the Circle", "B", 46, 7771, "Marvon Rivetseeker", "south of Gadgetzan, Tanaris (52, 45)", "After The Sunken Temple."],
    [4146, "Zapper Fuel", "H", 47, 8496, "Liv Rizzlefix", "Ratchet, The Barrens (62, 38)", "Do 2 quests first, starting with Larion and Muigin."],
    [1446, "Jammal'an the Prophet", "B", 38, 5598, "Atal'ai Exile", "spider area south-west of the Altar of Zul, The Hinterlands (33, 75)", ""],
    [3528, "The God Hakkar", "B", 40, 8579, "Yeh'kinya", "Steamwheedle Port, Tanaris (67, 22)", "Do 3 quests first, starting with Screecher Spirits."],
    [3373, "The Essence of Eranikus", "B", 48, 0, "Essence of Eranikus", "drops from the Shade of Eranikus inside", ""]
  ]},
  { key: "brd", name: "Blackrock Depths", lv: [52, 60], guide: 35206, q: [
    [4081, "KILL ON SIGHT: Dark Iron Dwarves", "H", 48, 0, "WANTED poster", "Kargath, Badlands (4, 47)", ""],
    [4082, "KILL ON SIGHT: High Ranking Dark Iron Officials", "H", 50, 0, "WANTED poster", "Kargath, Badlands (4, 47)", "After the first KILL ON SIGHT."],
    [4132, "Operation: Death to Angerforge", "H", 52, 9077, "Warlord Goretooth", "Kargath, Badlands (6, 47)", "After both KILL ON SIGHT quests and Grark Lorkrub, a long escort."],
    [3906, "Disharmony of Flame", "H", 48, 9084, "Thunderheart", "Kargath, Badlands (3.6, 48.0)", "Then Disharmony of Fire."],
    [3981, "Commander Gor'shak", "H", 48, 9081, "Galamav the Marksman", "Kargath, Badlands (6, 47)", "After Disharmony of Flame. Leads to The Royal Rescue from Thrall, which rewards Thrall's Resolve, a good tank ring."],
    [7201, "The Last Element", "H", 48, 9078, "Shadowmage Vivian Lagrave", "Kargath, Badlands (3, 48)", "After Disharmony of Flame."],
    [4134, "Lost Thunderbrew Recipe", "H", 50, 9078, "Shadowmage Vivian Lagrave", "Kargath, Badlands (3, 48)", "Pick up the Vivian Lagrave breadcrumb from Apothecary Zinge in Undercity for free XP."],
    [4063, "The Rise of the Machines", "H", 52, 2921, "Lotwil Veriatus", "eastern Badlands (25, 44)", "Do 2 quests first, starting with The Rise of the Machines from Hierophant Theodora Mulvadania in Kargath."],
    [4136, "Ribbly Screwspigot", "B", 48, 9544, "Yuka Screwspigot", "Flame Crest, Burning Steppes (66, 21)", "Pick up the breadcrumb Yuka Screwspigot in Steamwheedle Port, Tanaris, for free XP."],
    [4123, "The Heart of the Mountain", "B", 50, 9536, "Maxwort Uberglint", "Flame Crest, Burning Steppes (65, 23)", ""],
    [4024, "A Taste of Flame", "B", 52, 9459, "Cyrus Therepentous", "cave in north-east Burning Steppes (95, 31)", "Long chain first (11 quests, starting with Divine Retribution in Searing Gorge)."],
    [3802, "Dark Iron Legacy", "B", 48, 8888, "Franclorn Forgewright", "Blackrock Mountain, the building in the middle", "Only visible while you're dead. Rewards the Shadowforge Key."],
    [4201, "The Love Potion", "B", 50, 9500, "Mistress Nagmara", "Grim Guzzler bar, inside", "Bring 4 Gromsblood and 10 Giant Silver Vein."],
    [7848, "Attunement to the Core", "B", 55, 14387, "Lothos Riftwaker", "Blackrock Mountain", ""]
  ]},
  { key: "blackmaw", name: "Blackmaw Hold", lv: [55, 60], guide: 35373, forever: true, q: [
    [97198, "Blackmaw Magic", "H", 52, 259118, "Muln Earthfury", "Skywatcher Plateau, Mulgore", ""],
    [92343, "Get to the Roots of It", "H", 45, 5770, "Nara Wildmane", "Elder Rise, Thunder Bluff (76.0, 30.4)", "Starts with Beneath Nordrassil from Jediga in Azshara (22.4, 51.4)."],
    [96246, "Blackmaw Pouches", "B", 55, 235903, "Ekkal", "near the Ruins of Eldarath, Azshara (42.0, 38.8)", ""],
    [92065, "Blackmaw Reclamation", "B", 47, 236573, "Gatekeeper Rageroar", "Timbermaw Hold, Azshara (42.4, 20.2)", "Needs Neutral with Timbermaw Hold. Starts with The Legashi Threat from Ekkal."],
    [92069, "Claws That Rend, Tusks that Gore", "B", 45, 8405, "Ogtinc", "Azshara (41.4, 20.0)", ""],
    [92066, "The Twin Bears", "B", 47, 249853, "Lorekeeper Nok", "Timbermaw Hold, Azshara", ""],
    [92070, "A Lost Memento", "B", 47, 0, "a random drop", "inside", "Only one player can loot it."]
  ]},
  { key: "lbrs", name: "Lower Blackrock Spire", lv: [55, 60], guide: 35271, q: [
    [4903, "Warlord's Command", "H", 55, 9077, "Warlord Goretooth", "Kargath, Badlands (5, 47)", "Unlocks For The Horde! (Upper Blackrock Spire)."],
    [4724, "The Pack Mistress", "H", 55, 9081, "Galamav the Marksman", "Kargath, Badlands (6, 47)", ""],
    [4981, "Operative Bijou", "H", 55, 9080, "Lexlort", "Kargath, Badlands (5, 47)", "Leads to Bijou's Belongings inside."],
    [4862, "En-Ay-Es-Tee-Why", "B", 55, 10260, "Kibler", "Flame Crest, Burning Steppes (65, 21)", ""],
    [4729, "Kibler's Exotic Pets", "B", 55, 10260, "Kibler", "Flame Crest, Burning Steppes (65, 21)", ""],
    [4866, "Mother's Milk", "B", 55, 9563, "Ragged John", "Flame Crest, Burning Steppes (65, 23)", ""],
    [4867, "Urok Doomhowl", "B", 55, 10799, "Warosh", "inside, walks near the start", ""],
    [4742, "Seal of Ascension", "B", 57, 0, "Unadorned Seal of Ascension", "drops inside", "Needed for the Upper Blackrock Spire key."],
    [4788, "The Final Tablets", "B", 40, 10460, "Prospector Ironboot", "Steamwheedle Port, Tanaris (66, 24)", "Do 5 quests first, starting with Screecher Spirits."]
  ]},
  { key: "dme", name: "Dire Maul East", lv: [56, 60], guide: 35224, q: [
    [7489, "Lethtendris's Web", "H", 54, 7776, "Talo Thornhoof", "Camp Mojache, Feralas (76, 43)", ""],
    [7441, "Pusillin and the Elder Azj'Tordin", "B", 54, 14355, "Azj'Tordin", "Lariss Pavilion, Feralas (76, 37)", ""],
    [5526, "Shards of the Felvine", "B", 56, 11801, "Rabine Saturna", "Nighthaven, Moonglade (51, 45)", "Do A Reliquary of Purity first. Teleport: Moonglade gets you there."]
  ]},
  { key: "dmw", name: "Dire Maul West", lv: [57, 60], guide: 35227, q: [
    [7461, "The Madness Within", "B", 56, 14358, "Shen'dralar Ancient", "inside, second floor", ""]
  ]},
  { key: "dmn", name: "Dire Maul North", lv: [58, 60], guide: 35230, q: [
    [7481, "Elven Legends", "H", 54, 14373, "Sage Korolusk", "Camp Mojache, Feralas (74, 43)", "Unlocks the Libram quests for the head and leg Arcanums."],
    [5518, "The Gordok Ogre Suit", "B", 56, 14338, "Knot Thimblejack", "inside", ""],
    [5525, "Free Knot!", "B", 56, 14338, "Knot Thimblejack", "inside", ""],
    [5528, "The Gordok Taste Test", "B", 56, 14322, "Stomper Kreeg", "inside, after a Tribute Run", ""],
    [7703, "Unfinished Gordok Business", "B", 56, 14325, "Captain Kromcrush", "inside, after a Tribute Run", ""]
  ]},
  { key: "strat_live", name: "Stratholme Living", lv: [58, 60], guide: 35323, q: [
    [5214, "The Great Ezra Grimm", "B", 55, 11033, "Smokey LaRue", "Light's Hope Chapel, Eastern Plaguelands (80, 58)", ""],
    [5251, "The Archivist", "B", 55, 11039, "Duke Nicholas Zverenhoff", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", "Then The Truth Comes Crashing Down drops from Balnazzar."],
    [5282, "The Restless Souls", "B", 55, 11140, "Egan", "Terrordale, Eastern Plaguelands (14, 33)", ""],
    [5848, "Of Love and Family", "B", 52, 11936, "Artist Renfray", "Caer Darrow, Western Plaguelands (65, 75)", "Long chain first (7 quests, starting with Blood Tinged Skies, Carrion Grubbage and Demon Dogs)."]
  ]},
  { key: "strat_undead", name: "Stratholme Undead", lv: [58, 60], guide: 35324, q: [
    [6163, "Ramstein", "H", 56, 11878, "Nathanos Blightcaller", "Marris Stead, Eastern Plaguelands (26, 74)", "Do 4 quests first, starting with The Ranger Lord's Behest and To Kill With Purpose."],
    [5243, "Houses of the Holy", "B", 55, 11036, "Leonid Barthalomew the Revered", "Light's Hope Chapel, Eastern Plaguelands (81, 57)", ""],
    [5212, "The Flesh Does Not Lie", "B", 55, 11035, "Betina Bigglezink", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", ""],
    [5213, "The Active Agent", "B", 55, 11035, "Betina Bigglezink", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", "After The Flesh Does Not Lie."],
    [5263, "Above and Beyond", "B", 55, 11039, "Duke Nicholas Zverenhoff", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", "After The Archivist chain (Stratholme Living)."],
    [5122, "The Medallion of Faith", "B", 55, 10917, "Aurius", "inside the chapel at the start", "Then Aurius' Reckoning."],
    [5463, "Menethil's Gift", "B", 57, 11036, "Leonid Barthalomew the Revered", "Light's Hope Chapel, Eastern Plaguelands (81, 57)", "Do 5 quests first, starting with Doctor Theolen Krastinov, the Butcher (Scholomance)."]
  ]},
  { key: "scholo", name: "Scholomance", lv: [58, 60], guide: 35270, q: [
    [5341, "Barov Family Fortune", "H", 52, 11022, "Alexi Barov", "The Bulwark, Tirisfal Glades (83, 71)", "Alexi can be dead from an Alliance quest. He returns after 30 minutes."],
    [5529, "Plagued Hatchlings", "B", 55, 11035, "Betina Bigglezink", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", "Then Healthy Dragon Scale, which drops inside."],
    [5382, "Doctor Theolen Krastinov, the Butcher", "B", 55, 11216, "Eva Sarkhoff", "Caer Darrow, Western Plaguelands (70, 73)", ""],
    [5515, "Krastinov's Bag of Horrors", "B", 55, 11216, "Eva Sarkhoff", "Caer Darrow, Western Plaguelands (70, 73)", "After Doctor Theolen Krastinov."],
    [5384, "Kirtonos the Herald", "B", 55, 11216, "Eva Sarkhoff", "Caer Darrow, Western Plaguelands (70, 73)", "After Krastinov's Bag of Horrors. Keep the Spectral Essence it gives."],
    [5466, "The Lich, Ras Frostwhisper", "B", 57, 11286, "Magistrate Marduke", "Caer Darrow, Western Plaguelands (70, 74)", "Only visible with the Spectral Essence equipped."],
    [4771, "Dawn's Gambit", "B", 57, 11035, "Betina Bigglezink", "Light's Hope Chapel, Eastern Plaguelands (81, 59)", "Long chain first (9 quests, starting with Broodling Essence in Burning Steppes)."]
  ]},
  { key: "ubrs", name: "Upper Blackrock Spire", lv: [58, 60], guide: 35281, q: [
    [4974, "For The Horde!", "H", 55, 4949, "Thrall", "Valley of Wisdom, Orgrimmar (31, 37)", "After Warlord's Command (Lower Blackrock Spire)."],
    [4768, "The Darkstone Tablet", "H", 57, 9078, "Shadowmage Vivian Lagrave", "Kargath, Badlands (3, 48)", "Pick up the breadcrumb in Undercity for free XP."],
    [6602, "Blood of the Black Dragon Champion", "H", 55, 10182, "Rexxar", "walks around Desolace", "The end of a 13-quest chain starting with Warlord's Command."],
    [7761, "Blackhand's Command", "B", 55, 0, "Blackhand's Command", "drops from the Scarshield Quartermaster in Blackrock Mountain", ""],
    [5160, "The Matron Protectorate", "B", 57, 10740, "Awbee", "inside, on a ledge after Blackhand", ""],
    [5047, "Pip Quickwit, At Your Service!", "B", 57, 10776, "Pip Quickwit", "inside", "Only appears after someone with Skinning 300 skins The Beast. That can be you."],
    [4735, "Egg Collection", "B", 57, 10267, "Tinkee Steamboil", "Flame Crest, Burning Steppes (65, 23)", "Do 6 quests first, starting with Egg Freezing and Broodling Essence."],
    [6821, "Eye of the Emberseer", "B", 55, 13278, "Duke Hydraxis", "Azshara (79, 73)", "After Stormers and Rumblers and Poisoned Water."]
  ]}
];
