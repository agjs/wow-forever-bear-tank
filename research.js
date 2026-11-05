/* Research data: questing route, dungeon cheat sheets, macros, keybinds, addons. */
window.ROUTE = [
 {
  "lv": "13–16",
  "zones": "Durotar, then The Barrens (Crossroads)",
  "notes": "After Zephras Isle, a skycutter (a flying transport) drops you off in Thunder Bluff. Do the Ragefire Chasm dungeon in Orgrimmar, and pick up the Wailing Caverns quests at the Crossroads.",
  "forever": false
 },
 {
  "lv": "17–22",
  "zones": "The Barrens, Stonetalon Mountains, Silverpine Forest",
  "notes": "Do the Wailing Caverns dungeon in The Barrens. There is a new Forever dungeon, Ruins of Lordaeron, in Undercity (about level 15 to 22). Shadowfang Keep is in Silverpine Forest.",
  "forever": true
 },
 {
  "lv": "22–27",
  "zones": "Ashenvale, Stonetalon Mountains, southern Barrens",
  "notes": "Blackfathom Deeps (in Ashenvale) and Razorfen Kraul (in the southern Barrens). Forever also includes Excavation Site (about level 24 to 29).",
  "forever": true
 },
 {
  "lv": "27–32",
  "zones": "Hillsbrad Foothills, Thousand Needles, Alterac Mountains",
  "notes": "There is a new Forever dungeon, City of Dalaran, in the Alterac Mountains (about level 28 to 33). Gnomeregan is a long walk for Horde players.",
  "forever": true
 },
 {
  "lv": "30–40",
  "zones": "Desolace, Arathi Highlands, Stranglethorn Vale",
  "notes": "Scarlet Monastery is in Tirisfal Glades. Razorfen Downs (in The Barrens) and Uldaman (in the Badlands) are both in the mid-30s. Forever also includes The Drowned City (about level 35 to 40).",
  "forever": true
 },
 {
  "lv": "40",
  "zones": "Tanaris, Riverglades (new, about level 35–45)",
  "notes": "Riverglades is a new zone with more than 150 quests for both factions. Krol'dok Stronghold is a new dungeon (level 40 to 45).",
  "forever": true
 },
 {
  "lv": "40–46",
  "zones": "Feralas, Tanaris, Riverglades",
  "notes": "Zul'Farrak (in Tanaris) and Maraudon (in Desolace).",
  "forever": true
 },
 {
  "lv": "46–52",
  "zones": "Felwood, Un'Goro Crater, Blasted Lands, Dustwallow Marsh",
  "notes": "There is a new Forever dungeon, Alcaz Island Prison, in Dustwallow Marsh (about level 48 to 53). Start your Timbermaw reputation (your standing with the Timbermaw tribe) in Felwood.",
  "forever": true
 },
 {
  "lv": "52–58",
  "zones": "Burning Steppes, Eastern Plaguelands, Azshara, Silithus",
  "notes": "Blackrock Depths and Lower Blackrock Spire (in Searing Gorge and the Burning Steppes), and Dire Maul (in Feralas).",
  "forever": false
 },
 {
  "lv": "58–60",
  "zones": "Winterspring, Plaguelands, Mount Hyjal (new end-game zone)",
  "notes": "New Forever dungeons: Blackmaw Hold (in Azshara, level 55 to 60) and Shaper's Terrace (in Un'Goro Crater, level 58 to 60). Also Stratholme and Scholomance.",
  "forever": true
 }
];
window.DUNGEONS = [
 {
  "key": "rfc",
  "name": "Ragefire Chasm",
  "lv": "13–18",
  "where": "In Orgrimmar, in the Cleft of Shadow, next to Neeru Fireblade's tent.",
  "route": [
   "Enter from the Cleft of Shadow. The first enemies are Troggs (cave-dwelling enemies). Pull them in groups of one or two.",
   "Oggleflint is near the start of the route. Kill him before moving on.",
   "Elemental enemies come next. Pull one or two at a time. They drop Searing Bindings, which you need for the Elemental Tampering quest.",
   "Searing Blade Cultists patrol before Taragaman. Kill the patrolling groups of two or three before you pull him.",
   "Taragaman the Hungerer, a felguard (a demon guard), is past the cultists. Fight him in the middle of the platform, away from the lava edge.",
   "Jergosh the Invoker is just ahead of Taragaman's position.",
   "Bazzalan is up the walkway next to Jergosh, directly above him. Finish the dungeon here.",
   "Walking back from the exit to the Orgrimmar graveyard is long. Bring a healer for the walk."
  ],
  "bosses": [
   {
    "name": "Oggleflint",
    "abilities": [
     "Cleave"
    ],
    "tank": "The ability list has not been checked. Pull him from the Trogg side and keep the group close together. Use Swipe (an attack that hits every enemy around you) if several Troggs are on you. Use Growl (a taunt that makes an enemy attack you) on the casters first."
   },
   {
    "name": "Taragaman the Hungerer",
    "abilities": [
     "Uppercut",
     "Fire Nova"
    ],
    "tank": "Uppercut knocks you back, so tank him in the middle of the platform. That keeps the knockback away from the lava edge and other enemies. Kill the Searing Blade Cultists before the pull. He hits hard, so use Enrage (a bear form ability that gives you rage) and Frenzied Regeneration (a bear healing ability) to survive bursts of damage."
   },
   {
    "name": "Jergosh the Invoker",
    "abilities": [
     "Curse of Weakness",
     "Immolate",
     "Shadow Bolt"
    ],
    "tank": "The Classic ability list has not been checked, because the wiki page covers the Legion version. Pull him alone, with no other enemies. The wiki says the fight is straightforward if no extra enemies are pulled. Use Feral Charge (a leap that stuns) on any extra enemy that starts casting a spell."
   },
   {
    "name": "Bazzalan",
    "abilities": [
     "Poison",
     "Sinister Strike"
    ],
    "tank": "Poison is a nature damage over time effect. It ticks every 3 seconds for 15 seconds. Cure Poison, cast while you are not in bear form, removes it. He attacks fast, so keep using Growl and Maul in turn, and do not let him reach the second cultist group."
   }
  ],
  "dangers": [
   "Searing Blade Cultists patrol in groups of two or three and work together. Clear them one group at a time before pulling the bosses.",
   "Lava near the Taragaman platform: Uppercut can knock you or other enemies into it.",
   "According to the Classic wiki, every enemy in Ragefire Chasm is elite (a tougher enemy), so pull in small groups.",
   "The walk back from the graveyard after a wipe (when the whole group dies) is long."
  ],
  "quests": [
   "Hidden Enemies (the start of a quest chain): Thrall in Orgrimmar. It ends with Neeru Fireblade.",
   "Slaying the Beast: Neeru Fireblade in Orgrimmar.",
   "Searching for the Lost Satchel: Rahauro in Thunder Bluff. It ends with Maur Grimtotem inside Ragefire Chasm. Turn in the satchel inside the dungeon.",
   "Testing an Enemy's Strength: Rahauro in Thunder Bluff."
  ],
  "forever": "The level range is 13 to 18 in Forever (according to the warcrafttavern guide). The Classic wiki lists 15 to 21. Forever's experience point (XP) rules apply: enemies give less XP, and dungeon quests give much more. The Forever wiki page lists Chasm quests (Animal Control, The Dark Shaman, A New Enemy). They have not been checked against Classic, so they are left out here.",
  "confidence": "medium"
 },
 {
  "key": "thanes",
  "name": "Hall of Thanes",
  "lv": "13–18",
  "where": "Inside Ironforge in Dun Morogh, at the High Seat entrance. It is meant for Alliance players. The wiki says it is risky for Horde players because it is near the city leader. It is not confirmed that Horde players can enter.",
  "route": [
   "Unknown. No internal route has been published. Enter from the Ironforge High Seat."
  ],
  "bosses": [
   {
    "name": "Faldrim Anvilmar",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game before pulling as a bear."
   },
   {
    "name": "Magmatus",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game before pulling as a bear."
   },
   {
    "name": "Plunder",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game before pulling as a bear."
   },
   {
    "name": "Durgen Dirgehammer (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game before pulling as a bear."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, there are Dark Iron intruders and ghostly whispers. These are probably Dark Iron dwarves, but this is not confirmed.",
   "Horde players would be near the Alliance city leader."
  ],
  "quests": [
   "Alliance: the main quest chain starts in Kharanos, Dun Morogh. The quests outside the entrance are A Visitor to Dun Morogh (level 13), Farsen's Watch (level 13), Nip 'Em in the Bud (level 13), Underground Map (level 15), and Old Ironforge Incursion (level 16, a dungeon quest).",
   "Alliance, inside the dungeon: Important Heirlooms (level 15), The Restless Dead (level 15), and The Treaty of Understanding (level 16).",
   "Neutral: An Ancient Grudge (level 15, inside the dungeon, from a neutral ghost).",
   "Horde: none are listed. Almost all of the quests are for the Alliance."
  ],
  "loot": [
   "Aetherwisp Bracers (cloth armor for the wrists), from Faldrim Anvilmar",
   "Ephemeral Choker (neck item), from Faldrim Anvilmar",
   "Spiritwraith Drape (cloak), from Faldrim Anvilmar",
   "Fang of Magmatus (dagger), from Magmatus",
   "Flamefist Grips (leather armor for the hands), from Magmatus",
   "Kindlegem Girdle (mail armor for the waist), from Magmatus",
   "Golemguard Chest (mail armor for the chest), from Plunder",
   "Golemheart Stave (staff), from Plunder",
   "Treads of the Protector Golem (mail armor for the feet), from Plunder",
   "Direhammer Leggings (leather armor for the legs), from Durgen Dirgehammer",
   "Durgen's Crescent Axe (axe), from Durgen Dirgehammer",
   "Robes of the Disgraced Thane (cloth armor for the chest), from Durgen Dirgehammer"
  ],
  "forever": "NEW in Forever: an Ironforge dungeon, added in Patch 1.60.1 according to the wiki. It is only in Forever.",
  "confidence": "medium"
 },
 {
  "key": "lordaeron",
  "name": "Ruins of Lordaeron",
  "lv": "15–22",
  "where": "Open ruins above the Undercity in Tirisfal Glades, near the city entrance from Brill. Horde players can reach it easily from Undercity. If needed, take the zeppelin from Orgrimmar to Brill. Alliance players have a long route: take the ship from Stormwind, go through Auberdine, Menethil Harbor or Southshore, and Silverpine Forest, swim across Lordamere Lake, and walk around the outside of the Undercity.",
  "route": [
   "Unknown. No internal route has been published."
  ],
  "bosses": [
   {
    "name": "Witherfang",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "The Baron",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "Viktor the Vile",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "The Abandoned",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "Bjork",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "Rath'mael (end boss, a necromancer)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   }
  ],
  "dangers": [
   "The dungeon has an undead and necromancer theme. According to the Blizzard preview, the final boss is a necromancer who is gathering power.",
   "The wiki lists Witherfang, The Baron, and the other bosses in one order, but it does not say what order to kill them in."
  ],
  "quests": [
   "Horde: A Frightened Request (Silverpine Forest), Light's Justice (Undercity), The New Plague (Undercity), The Wrath of Rath'mael (Tirisfal Glades), and Unending Torment (a five-part chain that starts inside the ruins).",
   "Alliance: Abominable Creatures, Bloodied Insignia, and Remember That I Love You (a two-part quest). All of them start inside the ruins.",
   "Both factions: Crest of Lordaeron.",
   "Most quests need you to be level 16 to start."
  ],
  "loot": [
   "Atrophic Girdle (mail armor for the waist), from Witherfang",
   "Segmented Spider Leg (staff), from Witherfang",
   "Witherbite Bracers (leather armor for the wrists), from Witherfang",
   "Abomination Bones (mail armor for the chest), from The Baron",
   "Leftover Abomination Skin (cloth armor for the chest), from The Baron",
   "Meathook Slicer (dagger), from The Baron",
   "Bloodied Chestwraps (leather armor for the chest), from Viktor the Vile",
   "Vileblood Scimitar (sword), from Viktor the Vile",
   "Vilewalkers (mail armor for the feet), from Viktor the Vile",
   "Grip of Fear (mail armor for the hands), from The Abandoned",
   "Rotmender's Leggings (cloth armor for the legs), from The Abandoned",
   "Scepter of the Abandoned (mace), from The Abandoned",
   "Bonerust Leggings (mail armor for the legs), from Bjork",
   "Corpse Chopper (two-handed axe), from Bjork",
   "Tuskwrap Belt (cloth armor for the waist), from Bjork",
   "Coldspire Staff (staff), from Rath'mael",
   "Mirror of Rath'mael (shield), from Rath'mael",
   "Rotmender's Treads (cloth armor for the feet), from Rath'mael"
  ],
  "forever": "NEW in Forever: a dungeon above the Undercity that is easy for Horde players to reach. It was added in Patch 1.60.1 according to the wiki, and it is only in Forever.",
  "confidence": "medium",
  "lvnote": "15 to 22 (wiki); 15 to 20 (warcrafttavern and others)"
 },
 {
  "key": "wc",
  "name": "Wailing Caverns",
  "lv": "17–24",
  "where": "In the Northern Barrens, south of Crossroads, on the north side of Lushwater Oasis.",
  "route": [
   "Enter the Screaming Gully. Lady Anacondra is near the entrance. Kill her escorts (the enemies with her) first, then focus on her.",
   "Jump into the river and head west. Kresh is a turtle who is not aggressive. He wanders here. He is optional, so leave him alone unless you want to kill him.",
   "Take the path up from Kresh's pool to the big room. Lord Cobrahn is here. Random enemies wander in during the fight, so pull away from them.",
   "Lord Pythas is in the same big room. He is the toughest Leader of the Fang in the dungeon, with heavy melee attacks and lots of health.",
   "Cross to the main room by jumping off the cliff to the east. Skum is optional. He is here with druids, dreadfangs, and oozes. Clear the druids and dreadfangs first. Deviate Faerie Dragon is a rare, optional enemy that appears only sometimes.",
   "The big room has Verdan the Everliving. Pull Lord Serpentis away from Verdan, kill the nearby extra enemies first, then fight Serpentis. Do not start a fight with Verdan.",
   "Return to the entrance and speak with Muyoh to start the Naralex event. Escort him through the spawns while he wakes Naralex. Waves of serpents and slimes follow. Mutanus the Devourer arrives right after, so use the gap to recover."
  ],
  "bosses": [
   {
    "name": "Lady Anacondra",
    "abilities": [
     "Lightning Bolt",
     "Sleep"
    ],
    "tank": "The ability list has not been checked. Pull her escorts into a tight group near the entrance, and kill the extra enemies before her. Use Feral Charge (a leap that stuns) on any spell she starts casting."
   },
   {
    "name": "Lord Cobrahn",
    "abilities": [
     "Druid's Slumber",
     "Lightning Bolt",
     "Healing Touch",
     "Poison",
     "Cobrahn Serpent Form"
    ],
    "tank": "Druid's Slumber can be interrupted (stopped mid-cast), so use Feral Charge or Bash (a short stun) to stop the spell. Poison is a nature damage over time effect. Cure Poison, cast while you are not in bear form, removes it. At low health he turns into a larger snake, which raises his damage."
   },
   {
    "name": "Lord Pythas",
    "abilities": [
     "Thunderclap",
     "Druid's Slumber",
     "Lightning Bolt",
     "Healing Touch"
    ],
    "tank": "Thunderclap hits everyone within 10 yards and slows attack speed and movement, so keep your group out of its range. If Druid's Slumber puts you to sleep, he switches to his next target, so interrupt the spell. Kill the elite druid and the elite Deviate Shambler first, and have a second tank hold the Deviate Shambler."
   },
   {
    "name": "Skum (optional)",
    "abilities": [
     "Chained Bolt"
    ],
    "tank": "He is a thunder lizard. Clear the Fang druids, dreadfangs, and oozes before you engage him. The ability list has not been checked."
   },
   {
    "name": "Lord Serpentis",
    "abilities": [
     "Lightning Bolt",
     "Sleep"
    ],
    "tank": "A regular melee fight, with less health than Pythas. Kill the nearby enemies first, and keep him away from Verdan. The ability list has not been checked."
   },
   {
    "name": "Mutanus the Devourer",
    "abilities": [
     "Naralex's Nightmare",
     "Terrify",
     "Thundercrack"
    ],
    "tank": "Thundercrack stuns nearby enemies for 2.5 seconds, so expect it to hit your whole group. Naralex's Nightmare puts one target to sleep for up to 15 seconds, and it can be interrupted. Terrify makes one target flee in fear for 4 seconds. During a fear, make sure the enemy stays on you and not on the healers. He is immune to Shadow damage."
   }
  ],
  "dangers": [
   "Druids of the Fang open with Lightning Bolt, change into cobra form, heal when hurt, and use Druid's Slumber to put a party member to sleep. Interrupt the opening spell, and save one interrupt for the final heal.",
   "Deviate Shamblers can heal themselves. Purge them (a spell that removes a helpful effect from an enemy), or ignore them, and kill them while they channel (cast a long, steady spell).",
   "Raptors call for help when they are almost dead. Pull them in small groups.",
   "Random enemies wander into the big rooms during the Cobrahn and Pythas fights. Watch the edges of the room."
  ],
  "quests": [
   "Leaders of the Fang (level 22, dungeon quest): Nara Wildmane in Elder Rise, Thunder Bluff."
  ],
  "forever": "The Forever level range is 17 to 24 (according to warcrafttavern). Forever's experience point (XP) rules apply: enemies give less XP, and dungeon quests give much more. The walkthrough used for this route includes changes from patch 4.1.0. The Winding Chasm was removed, and Pythas and Skum were moved. The route may not match the original game exactly.",
  "confidence": "medium"
 },
 {
  "key": "sfk",
  "name": "Shadowfang Keep",
  "lv": "22–30",
  "where": "In Silverpine Forest, at The Sepulcher.",
  "route": [
   "Enter the Shadowfang Keep courtyard. The regular enemies here include Fel Steeds, Frantic Geists, Haunted Servitors, Mindless Horrors, and Shadow Chargers.",
   "Work through the Classic boss list in this order: Rethilgore, Razorclaw the Butcher, Baron Silverlaine, Commander Springvale, Odo the Blindwatcher, Fenrus the Devourer, Wolf Master Nandos, and Archmage Arugal. The wiki lists them in this order but does not say the kill order is required. Check the order in the game.",
   "Odo, Fenrus, and Nandos are the middle bosses of the keep. Clear the worgs (wolf-like enemies) and ghouls in the keep between pulls.",
   "Archmage Arugal is the final boss. Pull him only after clearing the group of regular enemies around him."
  ],
  "bosses": [
   {
    "name": "Rethilgore",
    "abilities": [],
    "tank": "The Classic ability list has not been checked. The wiki page covers a later version. Pull him away from the courtyard enemies."
   },
   {
    "name": "Razorclaw the Butcher",
    "abilities": [],
    "tank": "The ability list has not been checked. Pull him alone, and keep extra enemy groups out of range."
   },
   {
    "name": "Baron Silverlaine",
    "abilities": [
     "Veil of Shadow"
    ],
    "tank": "Pull him alone. The ability list has not been checked."
   },
   {
    "name": "Commander Springvale",
    "abilities": [
     "Holy Light",
     "Hammer of Justice"
    ],
    "tank": "The ability list has not been checked. Interrupt his casts when you can, and use Swipe on the extra enemies that join the fight."
   },
   {
    "name": "Odo the Blindwatcher",
    "abilities": [
     "Howling Rage"
    ],
    "tank": "The ability list has not been checked. Pull him alone, and use Growl (a taunt) to hold him away from the group."
   },
   {
    "name": "Fenrus the Devourer",
    "abilities": [
     "Toxic Saliva"
    ],
    "tank": "Toxic Saliva is a 2-minute nature damage over time effect. It deals 17 damage every 6 seconds and drains mana, which Fenrus gains. Fight him where the healers can keep their mana up. Kill him quickly."
   },
   {
    "name": "Wolf Master Nandos",
    "abilities": [],
    "tank": "The ability list has not been checked. Watch for the worgs he brings, and use Swipe on them."
   },
   {
    "name": "Archmage Arugal",
    "abilities": [
     "Arugal's Curse (turns a player into a worgen)",
     "Shadow Port",
     "Void Bolt",
     "Thundershock"
    ],
    "tank": "The ability list has not been checked. The wiki gives only his level, 21, and his health, 4,640. Pull him after the caster group is cleared. Then keep Growl on him, and interrupt his casts."
   }
  ],
  "dangers": [
   "Haunted Servitors put a ghostly curse on you that must be removed right away. Remove Curse can do this, but only while you are not in bear form.",
   "Wailing Guardsmen cast a short area Silence, which stops spellcasting. Undead Silence can leave a tank unable to heal. Keep healers out of the area, and pull away from the Silence casters.",
   "Tormented Officers curse your skills, and Fel Steeds stun nearby enemies. Pull the stunners first.",
   "Shadowfang Worgen pulls: Moonwalkers cast an Anti-Magic Shield that blocks magic damage for 20 seconds. Darksouls cast Shadow Word: Pain. Whitescalps cast Frost Armor and are immune to Ice."
  ],
  "quests": [
   "Deathstalkers in Shadowfang (level 25, dungeon quest): High Executor Hadrec at The Sepulcher, Silverpine Forest.",
   "The Book of Ur (level 26, dungeon quest): Keeper Bel'dugur at the Apothecarium, Undercity.",
   "Arugal Must Die (level 27, dungeon quest): Dalar Dawnweaver at The Sepulcher, Silverpine Forest."
  ],
  "forever": "The Forever level range is 20 to 26 (according to warcrafttavern). The Classic wiki lists 18 to 24. Forever's experience point (XP) rules apply: enemies give less XP, and dungeon quests give much more.",
  "confidence": "low",
  "lvnote": "20 to 26"
 },
 {
  "key": "bfd",
  "name": "Blackfathom Deeps",
  "lv": "24–32",
  "where": "In Ashenvale, at Zoram Strand, next to Je'neu Sancrea.",
  "route": [
   "Enter from Zoram Strand in Ashenvale. Je'neu Sancrea is at the entrance and gives the Classic quests.",
   "Ghamoo-Ra is the first boss. Clear the regular enemies at the entrance before you start the fight.",
   "Lady Sarevess is next. Her Frost Nova freezes nearby enemies, so pull her away from the group.",
   "Gelihast and Lorgus Jett follow in the main halls. Murlocs (fish-like enemies) run away at low health and come back to Gelihast, so keep a slowing spell ready.",
   "Baron Aquanis is the quest boss. Old Serra'kis comes after him.",
   "Twilight Lord Kelris is in the walled-off cultist chamber. Clear the cultists one at a time from the entrance. Then light the four candles on the middle altar one at a time, since each candle summons extra enemies.",
   "Aku'mai is the final boss. You reach him after Kelris."
  ],
  "bosses": [
   {
    "name": "Ghamoo-Ra",
    "abilities": [
     "Trample"
    ],
    "tank": "The Classic ability list has not been checked. The wiki page covers a later version that has Shell Shocker and Static Shock. Check the abilities in the game before pulling."
   },
   {
    "name": "Lady Sarevess",
    "abilities": [
     "Frost Nova"
    ],
    "tank": "Frost Nova deals about 35 frost damage and freezes nearby enemies for up to 8 seconds. Damage breaks the freeze, so do not attack frozen extra enemies. Pull her away from the group."
   },
   {
    "name": "Gelihast",
    "abilities": [
     "Net"
    ],
    "tank": "The ability list has not been checked. Slow any murloc that flees at low health, so it cannot return to him."
   },
   {
    "name": "Lorgus Jett",
    "abilities": [
     "Lightning Bolt",
     "Lightning Shield"
    ],
    "tank": "The ability list has not been checked. Pull him alone."
   },
   {
    "name": "Baron Aquanis",
    "abilities": [
     "Frostbolt",
     "Frost Nova"
    ],
    "tank": "This is the quest boss. The ability list has not been checked."
   },
   {
    "name": "Old Serra'kis",
    "abilities": [
     "Thrash"
    ],
    "tank": "The ability list has not been checked. Pull him alone."
   },
   {
    "name": "Twilight Lord Kelris",
    "abilities": [
     "Mind Blast",
     "Sleep"
    ],
    "tank": "Clear the cultists in the summoning chamber from the walled-off entrance, one group at a time. Then light the four candles on the middle altar one at a time, since each candle summons extra enemies. Interrupt the cultists' spells with Feral Charge or Bash."
   },
   {
    "name": "Aku'mai",
    "abilities": [
     "Frenzied Rage",
     "Poison Cloud"
    ],
    "tank": "The wiki says a dedicated tank and healer make this fight fairly easy. The ability list has not been checked. Check the abilities in the game."
   }
  ],
  "dangers": [
   "Naga groups that cast magic (snake-like enemies) can deal heavy damage. Interrupt or stun the casters with Feral Charge or Bash, and pull them from range.",
   "Twilight Cultists come in groups of two or three, and they grow if wandering enemies join them. Pull the casters first, and break line of sight (move out of their view) so they follow you.",
   "Invisible satyrs cannot be seen until you are close enough for them to attack.",
   "Murlocs in Gelihast's group run away at low health and come back. Slow them down."
  ],
  "quests": [
   "The Essence of Aku'Mai (level 22): Je'neu Sancrea in Zoram Strand, Ashenvale.",
   "Allegiance to the Old Gods (level 22): Je'neu Sancrea in Zoram Strand, Ashenvale.",
   "Deep in the Deeps (level 26): Zeya, inside Blackfathom Deeps."
  ],
  "forever": "The Forever level range is 22 to 28 (according to warcrafttavern). The Classic wiki lists 24 to 32. Forever's experience point (XP) rules apply: enemies give less XP, and dungeon quests give much more.",
  "confidence": "low",
  "lvnote": "22 to 28"
 },
 {
  "key": "wetlands",
  "name": "Excavation Site: Wetlands",
  "lv": "24–29",
  "where": "In the Wetlands, at the top of Whelgar's Excavation Site. The summoning stone and the instance entrance are at 53.4, 65.3. Alliance players can reach it from Menethil Harbor or along the Loch Modan route. Horde players travel through Hillsbrad Foothills, Arathi Highlands, and Thandol Span.",
  "route": [
   "Unknown. There is no internal route.",
   "According to the wiki, the final boss is level 31, so do not enter early."
  ],
  "bosses": [
   {
    "name": "Saltspine",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "Shadetooth",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   },
   {
    "name": "Relic Guardian (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, there are titan constructs and dangerous wildlife.",
   "The final boss is level 31, so entering early is not recommended."
  ],
  "quests": [
   "Alliance (start in Menethil Harbor, Greenwarden's Grove, or Lakeshire): Daily Delivery leads to Young Crocolisk Skins, which leads to Highland Hides and Apprentice's Duties. Horrors in the Highland. Lost in the Thicket Things leads to Heartwoven. Lost Relic Carry leads to Prehistoric Prism. Songblade Search leads to Fallen in the Fen.",
   "Horde (start in Orgrimmar or Hammerfall): Changing Tastes. Elder Knowledge leads to Earthen Echo. Dragonmaw Rumors leads to Open the Maw.",
   "Both factions: one quest-starting item dropped by the final boss (the Titan Relic)."
  ],
  "loot": [
   "Glinteye Slippers (cloth armor for the feet), from Saltspine",
   "Saltscale Girdle (mail armor for the waist), from Saltspine",
   "Supple Bellyskin Leggings (leather armor for the legs), from Saltspine",
   "Garb of Florid Feathers (leather armor for the chest), from Shadetooth",
   "Raptorclaw Greaves (mail armor for the feet), from Shadetooth",
   "Raptor's Gaze (off-hand item), from Shadetooth",
   "Golemsight Long Gun (gun), from Relic Guardian",
   "Reliquary Mantle (mail armor for the shoulders), from Relic Guardian",
   "Ring of Power Regulation (ring), from Relic Guardian",
   "Blueprint: Rock Garden (campsite recipe), from Relic Guardian"
  ],
  "forever": "NEW in Forever: a titan-ruin dungeon in the Wetlands with a level 31 final boss. It was added in Patch 1.60.1 according to the wiki, and it is only in Forever.",
  "confidence": "medium",
  "lvnote": "24 to 29 (wiki template and warcrafttavern); 26 to 32 (wiki page; quests start at level 24; final boss is level 31)"
 },
 {
  "key": "dalaran",
  "name": "City of Dalaran",
  "lv": "28–33",
  "where": "On the western side of Dalaran in the Alterac Mountains. There is a sewer grate on the west wall at 8, 61. You need a Dalaran Sewer Key to get past the wards (magical barriers). The key comes from the Image of Archmage Modera in Silverpine Forest. You need an attunement (a quest chain that unlocks entry) and trust with the Kirin Tor. It is open to both factions.",
  "route": [
   "Unknown. Enter through the sewers with a Dalaran Sewer Key.",
   "According to the Blizzard preview, there are several paths and encounters."
  ],
  "bosses": [
   {
    "name": "Atrexis the Grave Knight",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Arcane Anomaly",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Arcanic Enigma",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Unstable Sentinel",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Mana Devourer",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Fel Ancient",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Lyn the Ignored",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Shade of the Archmage (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. Check in the game."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, there are backfiring enchantments, wild constructs, and magical energy.",
   "The entrance is gated by wards, so you need the key to get in."
  ],
  "quests": [
   "Alliance (start in Stormwind and Southshore): An Alarming Request (level 33) leads to Heart of Disruption (level 33, dungeon quest), which leads to Friend of the Kirin Tor (level 33). Power Overwhelming, Starving Arcane, and A Green Sample are also level 33 dungeon quests.",
   "Horde (start in Undercity and Tarren Mill): Prison Break In (level 34), Key to the City (level 33), Dalaran Patrols (level 35), Blood in the Streets (level 34), Heart of Disruption (level 33, dungeon quest), and Shrewd Negotiations (level 33). Dungeon quests: Opportunistic Education, Source of Power, and The Grave Knight, all level 33."
  ],
  "loot": [
   "Bonebinder's Signet, Gravespike Repeater, and Graveweave Bindings, from Atrexis the Grave Knight",
   "Ephemeral Grips, Mana-Warped Chain Shirt, and Runemender's Seal, from Arcane Anomaly",
   "Drape of Shifting Energy, Violet Sorcerer's Robes, and Wand of Mana Concentration, from Arcanic Enigma",
   "Guardian's Dualblade, Refractory Scaleguards, Unstable Crystalline Shoulderpads, and Blueprint: Spinning Wheel, from Unstable Sentinel",
   "Manascale Treads, Sliterwrap Girdle, and Spine of the Devourer, from Mana Devourer",
   "Blightleaf Robe, Felbough Arm, and Garb of Fallen Felbark, from Fel Ancient",
   "Bonepile Gaze, Cartilage Shapers, and Tendonscraper Dagger, from Lyn the Ignored",
   "Archmagister's Faceted Pendant, Ponderous Orb, Violet Sorcerer's Mantle, and Blueprint: Arcane Salvager, from Shade of the Archmage"
  ],
  "forever": "NEW in Forever: a Dalaran dungeon in the Alterac Mountains, behind an attunement. It has several paths and eight listed bosses. It was added in Patch 1.60.1 according to the wiki page.",
  "confidence": "medium",
  "lvnote": "28 to 33 (list); 28 to 34 (wiki page); 20 to 35 (one text source)"
 },
 {
  "key": "rfk",
  "name": "Razorfen Kraul",
  "lv": "29–38",
  "where": "In The Barrens, at the Razorfen Kraul entrance in the Southern Barrens, near Thunder Bluff.",
  "route": [
   "Enter at the Razorfen Kraul entrance in The Barrens. Pick up the Horde quests from Thunder Bluff and Undercity before going in.",
   "Roogug is the first boss. Then come Aggem Thorncurse, Death Speaker Jargba, and Overlord Ramtusk, in that order on the Classic wiki list.",
   "Earthcaller Halmgar is a rare enemy near the Ramtusk area. He is optional.",
   "Agathelos the Raging is the next major boss.",
   "The Blind Hunter is a rare enemy. He is optional.",
   "Charlga Razorflank is the final boss. Pull her after clearing the boars and quilboar casters around her."
  ],
  "bosses": [
   {
    "name": "Roogug",
    "abilities": [],
    "tank": "The Classic ability list has not been checked. The wiki page covers a later version. Check in the game before pulling."
   },
   {
    "name": "Aggem Thorncurse",
    "abilities": [
     "Chain Heal",
     "Summon Boar"
    ],
    "tank": "The ability list has not been checked. Pull him away from the quilboar packs."
   },
   {
    "name": "Death Speaker Jargba",
    "abilities": [
     "Dominate Mind",
     "Shadow Bolt"
    ],
    "tank": "The ability list has not been checked. Interrupt the Death's Head casters with Feral Charge or Bash."
   },
   {
    "name": "Overlord Ramtusk",
    "abilities": [],
    "tank": "The ability list has not been checked. Pull him alone, and keep the boars away from the healers."
   },
   {
    "name": "Earthcaller Halmgar (rare)",
    "abilities": [],
    "tank": "Optional rare enemy. The ability list has not been checked."
   },
   {
    "name": "Agathelos the Raging",
    "abilities": [
     "Rampage",
     "Enrage"
    ],
    "tank": "The ability list has not been checked. Pull him alone."
   },
   {
    "name": "Blind Hunter (rare)",
    "abilities": [],
    "tank": "Optional rare enemy. The ability list has not been checked."
   },
   {
    "name": "Charlga Razorflank",
    "abilities": [
     "Chain Bolt",
     "Purity",
     "Renew"
    ],
    "tank": "This is the final boss. The Classic ability list has not been checked. The wiki page covers a later version that has Venomous Discharge and Elemental Binding. Check in the game."
   }
  ],
  "dangers": [
   "Death's Head Tribe casters (Priests, Adepts, and Seers): interrupt them with Feral Charge or Bash, and pull them out of the quilboar packs.",
   "Razorfen Tribe quilboar packs (spiky, pig-like enemies: Servitors, Warriors, Quilguards, Geomancers, Dustweavers, and Beast Trainers): pull one pack at a time, and use Swipe on the group.",
   "Kraul Bats and Greater Kraul Bats come in groups. Pull them away from the main packs.",
   "Agam'ar boars: keep them away from the healers. No special notes are available for them yet."
  ],
  "quests": [
   "Going, Going, Guano! (level 33): Master Apothecary Faranell at the Apothecarium, Undercity.",
   "A Vengeful Fate (level 34): Auld Stonespire in Thunder Bluff."
  ],
  "forever": "The Forever level range is 29 to 38 (according to warcrafttavern). The Classic wiki also lists 29 to 38. Forever's experience point (XP) rules apply: enemies give less XP, and dungeon quests give much more.",
  "confidence": "low"
 },
 {
  "key": "gnomer",
  "name": "Gnomeregan",
  "lv": "29–38",
  "where": "In Dun Morogh, at the Gnomeregan entrance.",
  "route": [
   "Enter Gnomeregan in Dun Morogh. Grubbis is an optional first boss.",
   "Viscous Fallout is the second boss.",
   "Electrocutioner 6000 is the third boss. One boss drops the Workshop Key, which opens a side entrance that skips the first few bosses. Sources disagree on which boss drops it, so check in the game.",
   "Crowd Pummeler 9-60 is the fourth boss.",
   "Mekgineer Thermaplugg is the final boss.",
   "Dark Iron Ambassador is a rare elite (level 33). He is optional."
  ],
  "bosses": [
   {
    "name": "Grubbis",
    "abilities": [],
    "tank": "Optional first boss (a level 32 elite humanoid). The ability list has not been checked."
   },
   {
    "name": "Viscous Fallout",
    "abilities": [],
    "tank": "Second boss (a level 30 elite elemental). The ability list has not been checked."
   },
   {
    "name": "Electrocutioner 6000",
    "abilities": [
     "Chain Lightning",
     "Shock"
    ],
    "tank": "Third boss (a level 32 elite mechanical enemy). The ability list has not been checked."
   },
   {
    "name": "Crowd Pummeler 9-60",
    "abilities": [
     "Crowd Pummel (a hit that knocks back everyone nearby)",
     "Mighty Blow"
    ],
    "tank": "Fourth boss. The ability list has not been checked."
   },
   {
    "name": "Mekgineer Thermaplugg",
    "abilities": [
     "Knock Away",
     "Walking Bombs from the wall vents"
    ],
    "tank": "Final boss. The ability list has not been checked. The wiki points to a separate tactics page for this fight."
   }
  ],
  "dangers": [
   "Dark Iron Ambassador is a rare, level 33 elite humanoid. Treat any surprise elite enemy as a rare spawn (an enemy that appears on its own, not as part of a group).",
   "No ordinary enemy pack mechanics have been checked."
  ],
  "quests": [],
  "forever": "Forever's level range is 29 to 38 according to warcrafttavern. Zockify lists a recommended level of 25 and a minimum of 19, like Classic. According to the Classic wiki, players from either faction can enter. Horde players can reach the dungeon through a short series of teleport quests (the quest names have not been checked). Forever's XP and loot rules apply.",
  "confidence": "low"
 },
 {
  "key": "smgy",
  "name": "Scarlet Monastery: Graveyard",
  "lv": "30–37",
  "where": "In Tirisfal Glades.",
  "route": [
   "Enter through the Graveyard wing, the leftmost portal in the Scarlet Monastery entrance hall.",
   "Pull Interrogator Vishas's Scarlet Crusade enemies first, and keep them attacking you while you are in bear form. Then bring in Vishas.",
   "Clear the graveyard's regular enemies. The rares Ironspine, Fallen Champion, and Azshir the Sleepless spawn in this wing. Their spawn points and order have not been verified.",
   "Pull Ironspine and Azshir away from the group, and away from poison clouds and healers, before you start the fight.",
   "Continue to the crypt stairs and clear the crypt's regular enemies.",
   "Kill Bloodmage Thalnos at the bottom of the crypt. Scorn only appears during the Scourge Invasion event, which starts after Thalnos dies."
  ],
  "bosses": [
   {
    "name": "Interrogator Vishas",
    "abilities": [
     "Immolate",
     "Shadow Word: Pain"
    ],
    "tank": "Pull the Scarlet Crusade extra enemies out, and hold them with Swipe. Immolate and Shadow Word: Pain are damage over time effects. Keep using Lacerate (a bear attack that causes bleeding damage over time) and Swipe to keep Vishas focused on you."
   },
   {
    "name": "Ironspine (rare)",
    "abilities": [
     "Curse of Weakness (can be removed)",
     "Poison clouds"
    ],
    "tank": "Pull him away from the group and out of the poison clouds. Ask healers or damage dealers to remove Curse of Weakness. A druid can only remove curses in caster form (not bear form), so switch forms if you need to."
   },
   {
    "name": "Fallen Champion (rare)",
    "abilities": [
     "Cleave"
    ],
    "tank": "Tank him while facing away from the group, so Cleave hits no one else. This is a simple fight: tank him and let everyone damage him."
   },
   {
    "name": "Azshir the Sleepless (rare)",
    "abilities": [
     "Soul Siphon",
     "Call of the Grave",
     "Fear"
    ],
    "tank": "Clear the extra enemies before you pull him. Keep him away from healers and ranged damage dealers. Use Bash on Soul Siphon when it is available. Watch for Fear, which can make you run away from the group."
   },
   {
    "name": "Bloodmage Thalnos",
    "abilities": [
     "Flame Spike",
     "Shadow Bolt",
     "Flame Shock"
    ],
    "tank": "Tank him in the crypt, and keep his attention on you as much as possible. Shadow Bolt cannot be interrupted, so do not use Bash on it. Melee players at low health should step back when he starts Flame Spike, and ranged damage dealers should stay clear of the fire columns."
   }
  ],
  "dangers": [
   "The Scarlet Crusade enemies around Vishas must die before the boss, or they will overwhelm the group.",
   "Poison clouds from Ironspine damage anyone standing in them.",
   "Thalnos's Flame Spike creates fire columns under the group. Melee players should step out when it starts.",
   "Scorn only appears during the Scourge Invasion event. It pins you against a wall with a knockback called Lich Slap."
  ],
  "quests": [
   "Vorrel's Revenge (level 25, can be shared with your group): start from Vorrel Sengutz inside the graveyard, next to Vishas.",
   "Hearts of Zeal (level 30 according to one source, 33 according to another): start from Master Apothecary Faranell in the Undercity Apothecarium. You need Going, Going, Guano! from Razorfen Kraul first."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "28 to 38"
 },
 {
  "key": "sml",
  "name": "Scarlet Monastery: Library",
  "lv": "33–40",
  "where": "In Tirisfal Glades.",
  "route": [
   "Enter the Library wing from the Scarlet Monastery entrance hall.",
   "Clear the Huntsman's Cloister enemies, and pull Houndmaster Loksey with his three Scarlet Tracking Hounds.",
   "Move through the library halls to the Athenaeum.",
   "Clear the Athenaeum's regular enemies.",
   "Kill Arcanist Doan. His strongbox drops a Scarlet Key."
  ],
  "bosses": [
   {
    "name": "Houndmaster Loksey",
    "abilities": [
     "Scarlet Tracking Hound (three pets)"
    ],
    "tank": "Tank Loksey in the Cloister, so his three hounds come into your Swipe range. The ability details have not been checked, so confirm them in the game."
   },
   {
    "name": "Arcanist Doan",
    "abilities": [
     "Detonation",
     "Polymorph",
     "Silence",
     "Arcane Bubble"
    ],
    "tank": "Use Feral Charge or Bash to interrupt Detonation. It is a 5-second cast that deals heavy fire damage within 30 yards, and he casts it at half health right after Arcane Bubble. Polymorph and Silence target casters, so keep the group spread out. Doan is immune for the 8 seconds of Arcane Bubble, so hold your position and do not chase him."
   }
  ],
  "dangers": [
   "Doan's Detonation hits the whole group. Interrupt it, or have the group stay out of range.",
   "Doan's Polymorph (which turns a target into a sheep) and Silence can take healers and casters out of the fight in the middle of it.",
   "Loksey's hounds run ahead of him if the pull is loose. Pull them together."
  ],
  "quests": [
   "The Right Way: Huntsman Markhor in Revantusk Village, The Hinterlands.",
   "Stripping Their Defenses: Dark Ranger Velonara, inside the Library.",
   "Adventurers Wanted: Scarlet Monastery Library. Get it from the Warchief's Command Board in any capital city."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "32 to 36"
 },
 {
  "key": "sma",
  "name": "Scarlet Monastery: Armory",
  "lv": "35–42",
  "where": "In Tirisfal Glades.",
  "route": [
   "Enter the Armory wing from the Scarlet Monastery entrance hall.",
   "Clear the Training Grounds enemies.",
   "Clear the Footman's Armory and Crusader's Armory enemies.",
   "Clear the Hall of Champions enemies.",
   "Kill Herod in the Hall of Champions. He is the only boss in this wing, and a Scarlet Tracking Hound follows him."
  ],
  "bosses": [
   {
    "name": "Herod",
    "abilities": [
     "Whirlwind",
     "Cleave",
     "Frenzy",
     "Rushing Charge"
    ],
    "tank": "Pull him into a corridor, away from the group. Rushing Charge opens with a large first hit after the charge, so get into position first. If he goes for a caster, use Bash or Feral Charge. Whirlwind spins for 10 seconds and makes him immune to magic. Keep the group out of melee range, and do not spend cooldowns on it."
   }
  ],
  "dangers": [
   "Scarlet Myrmidons hit hard and enrage at low health. Tank them away from the group, and use Growl on them.",
   "Scarlet Conjurors cast Fireball and summon a Fire Elemental pet.",
   "Scarlet Evokers cast Flamestrike and Fire Shield. Kill them early."
  ],
  "quests": [
   "Adventurers Wanted: Scarlet Monastery Armory (Horde, level 34). Get it from the Warchief's Command Board in any capital city.",
   "Moving Things Along (level 35): Mystic Yayo'jin in Revantusk Village, The Hinterlands.",
   "Stripping Their Offense (level 36): Dark Ranger Velonara, inside the Armory."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "32 to 42 (intended 35 to 37)"
 },
 {
  "key": "drowned",
  "name": "The Drowned City",
  "lv": "35–40",
  "where": "Underwater, off the coast of Stranglethorn Vale, west of Grom'gol. The entrance is around 21.4, 27.9. Swim past The Vile Reef to the Sunken Hollow near the water elemental island. Look for a cavern with a large tablet. It is not stated which faction can enter.",
  "route": [
   "Swim to the entrance at 21.4, 27.9, past The Vile Reef and the Sunken Hollow.",
   "Enter the cavern, and climb the hill to the main ruins.",
   "The central area has a pool. Side sections hold extra bosses."
  ],
  "bosses": [
   {
    "name": "Zul'Alai",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Var'Taka",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Zin'aka",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Captain Dreadrise",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown. More bosses are likely."
   }
  ],
  "dangers": [
   "This dungeon is partly open-air and partly underwater. According to the Blizzard preview, a storm builds as the mist and rain increase.",
   "According to the Blizzard preview, trolls and naga (snake-like enemies) roam the city."
  ],
  "quests": [
   "Alliance (beta): Magics of the Drowned City, and Take Two With Water.",
   "Horde (beta): Ancient Gurubashi Idol, The Drowned City, and The Only Good Brinescale...",
   "There may be more quests above level 30. This is not verified."
  ],
  "loot": [
   "Unknown. No drops have been published."
  ],
  "forever": "NEW in Forever: an underwater ruin of trolls and naga, off Stranglethorn Vale. Its quest content was seen in the beta.",
  "confidence": "low",
  "lvnote": "35 to 40 (most sources); 35 to 50 (one source)"
 },
 {
  "key": "smc",
  "name": "Scarlet Monastery: Cathedral",
  "lv": "36–45",
  "where": "In Tirisfal Glades.",
  "route": [
   "Enter the Cathedral from the Scarlet Monastery entrance hall.",
   "Clear the Cathedral's regular enemies, and kill High Inquisitor Fairbanks in the middle of the wing.",
   "Clear the remaining enemies up to the Crusader's Chapel.",
   "Pull Scarlet Commander Mograine. After Mograine dies, High Inquisitor Whitemane comes through a door that was locked before, and she resurrects him."
  ],
  "bosses": [
   {
    "name": "High Inquisitor Fairbanks",
    "abilities": [
     "Fear",
     "Sleep",
     "Power Word: Shield",
     "Curse of Blood"
    ],
    "tank": "Fear makes the bear run away from the group, so keep Bash ready for his casts. Do not break Sleep on the group with damage. Power Word: Shield absorbs damage, so deal damage quickly in the first few seconds to break through it."
   },
   {
    "name": "Scarlet Commander Mograine",
    "abilities": [
     "Crusader Strike",
     "Divine Shield",
     "Hammer of Justice"
    ],
    "tank": "Tank him in the chapel with Growl and Swipe. Divine Shield makes him immune for 12 seconds, so keep his attention, and do not use cooldowns until it fades. Hammer of Justice is a stun, so keep the group out of melee range."
   },
   {
    "name": "High Inquisitor Whitemane",
    "abilities": [
     "Heal",
     "Power Word: Shield",
     "Dominate Mind"
    ],
    "tank": "Mograine dies first. Then Whitemane comes in and resurrects him. Bash her casts, and kill her quickly so Mograine cannot be healed back to full. Dominate Mind is mind control on a player. A priest or paladin in the group needs to remove it, since druids cannot remove magic effects."
   }
  ],
  "dangers": [
   "Fairbanks's Fear can make the bear or a healer run into the wrong group of enemies.",
   "Mograine's Hammer of Justice stuns the tank and anyone nearby.",
   "Whitemane's Dominate Mind takes a player out of the fight until it is removed or the player dies."
  ],
  "quests": [
   "Hearts of Zeal (level 33): Master Apothecary Faranell at the Undercity Apothecarium.",
   "Enemies Abroad (level 38): Nazeer Bloodpike.",
   "Battle for the Scarlet Monastery (level 39): Dark Ranger Velonara, inside the Cathedral."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "36 to 41 (infobox 35 to 45)"
 },
 {
  "key": "rfd",
  "name": "Razorfen Downs",
  "lv": "37–46",
  "where": "In Thousand Needles, Kalimdor.",
  "route": [
   "Enter through the arched gap in the outer dome in Thousand Needles.",
   "Clear the Caller's Chamber, and kill Aarux.",
   "Clear the Bone Pile, and kill Mordresh Fire Eye.",
   "Clear the Spiral of Thorns, then kill Mushlump and Death Speaker Blackthorn.",
   "Kill Amnennar the Coldbringer last, at the end of the Spiral."
  ],
  "bosses": [
   {
    "name": "Aarux",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game before pulling."
   },
   {
    "name": "Mordresh Fire Eye",
    "abilities": [
     "Fireball",
     "Fire Nova"
    ],
    "tank": "The ability names have not been checked. Check in the game before pulling."
   },
   {
    "name": "Mushlump",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game before pulling."
   },
   {
    "name": "Death Speaker Blackthorn",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game before pulling."
   },
   {
    "name": "Amnennar the Coldbringer",
    "abilities": [
     "Frozen Bomb",
     "Soul Leech"
    ],
    "tank": "Frozen Bomb creates a frost area under the group, so move out of it. Soul Leech drains health and heals Amnennar. Keep him attacking the bear, and kill him quickly."
   }
  ],
  "dangers": [
   "Amnennar's Frozen Bomb deals 250 frost damage in its area.",
   "Amnennar's Soul Leech drains health and heals him.",
   "The regular enemy groups in the Caller's Chamber and Bone Pile have not been checked. Scout them before pulling."
  ],
  "quests": [
   "Looming Threat (levels 15 to 30): Kanati Greycloud, a Horde quest giver in Thousand Needles."
  ],
  "forever": "Beta notes listed Razorfen Downs at level 25 and up. This has not been confirmed for Patch 1.60.1.",
  "confidence": "low",
  "lvnote": "15 to 30 under current level scaling"
 },
 {
  "key": "kroldok",
  "name": "Krol'dok Stronghold",
  "lv": "40–45",
  "where": "In Riverglades. The entrance is in a cave west of the fortress gates, at 37.5, 37.5 (preliminary). Follow the trail left by the ogre outrunners. It is not stated which faction can enter.",
  "route": [
   "Enter the cave west of the gates at 37.5, 37.5.",
   "The path winds between crude buildings, goes uphill, crosses a large wooden bridge, and ends at the largest buildings at the top (preliminary)."
  ],
  "bosses": [
   {
    "name": "Overlord Mugg",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. He is the only boss known, from a Legacy challenge. There is no ability data."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, there are guarded interior passages and nighttime chanting."
  ],
  "quests": [
   "Unknown. Krol'dok Moulding and Kroul'dok Moulding were found in the game files, and they appear to start quests. The faction is unknown."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: an ogre stronghold in Riverglades. Blizzard corrected its level range to 40 to 45.",
  "confidence": "low",
  "lvnote": "40 to 45 (corrected by Blizzard; older sources say 40 to 55)"
 },
 {
  "key": "uld",
  "name": "Uldaman",
  "lv": "41–51",
  "where": "In the Badlands.",
  "route": [
   "Enter at Maker's Terrace in the Badlands, west of the old Loch Modan entrance.",
   "Kill Revelosh in the Hall of the Keepers.",
   "Clear Dig Two and kill The Lost Dwarves. Then go to the Map Chamber for Ironaya.",
   "Use the side entrance from the cave between Fuselight and the Tomb of the Watchers to reach Echomok Cavern. Kill Obsidian Sentinel there.",
   "Clear Temple Hall for the Ancient Stone Keeper. Then go to Dig Three for Galgann Firehammer.",
   "Clear the Stone Vault for Grimlok and the Jadespine Basilisks.",
   "Kill Archaedas last, in Khaz'goroth's Seat. Earthen Custodians, Guardians, Hallshapers, and Vault Warders guard him.",
   "To wake Archaedas, click the altar. Tank him in the center while damage dealers kill the Earthen Guardians as they wake. Near low health he wakes the Vault Warders, so save Barkskin and Challenging Roar for that phase."
  ],
  "bosses": [
   {
    "name": "Revelosh",
    "abilities": [
     "Chain Lightning",
     "Lightning Bolt"
    ],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "The Lost Dwarves",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Ironaya",
    "abilities": [
     "Arcing Smash",
     "Knock Away",
     "War Stomp"
    ],
    "tank": "Knock Away pushes the target back, and War Stomp stuns for 4 seconds. Choose a spot where the knockback will not push you into the group or off the edges of the Map Chamber. Expect the stun to last a few seconds."
   },
   {
    "name": "Obsidian Sentinel",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Ancient Stone Keeper",
    "abilities": [
     "Sand Storms"
    ],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Galgann Firehammer",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Grimlok",
    "abilities": [
     "Lightning Bolt",
     "Shrink",
     "Bloodlust"
    ],
    "tank": "Pull Grimlok with the Jadespine Basilisks in view, and gather them into your Swipe range. The ability names have not been checked."
   },
   {
    "name": "Archaedas",
    "abilities": [
     "Ground Tremor",
     "Awaken Earthen Guardians",
     "Awaken Vault Warders"
    ],
    "tank": "Pull the Earthen Custodians, Guardians, Hallshapers, and Vault Warders away from the group before you pull Archaedas. The ability names have not been checked."
   }
  ],
  "dangers": [
   "Ironaya's War Stomp stuns for 4 seconds, and her Knock Away can push a tank out of position.",
   "Grimlok's Jadespine Basilisks fill the Stone Vault. Gather them together before the boss pull.",
   "The Archaedas guard group (Earthen Custodians, Guardians, Hallshapers, and Vault Warders) is large. Pull it in sections."
  ],
  "quests": [
   "Badlands Reagent Run (quest givers Jarkal Mossmeld and Kargath).",
   "Uldaman Reagent Run: Patrick Garrett in Undercity.",
   "Necklace Recovery: Dran Droffers in Orgrimmar.",
   "Translating the Journal: Dran Droffers in Orgrimmar."
  ],
  "forever": "The source games.gg lists Uldaman as changed in Forever. The details were not found.",
  "confidence": "low",
  "lvnote": "15 to 30 under current level scaling"
 },
 {
  "key": "zf",
  "name": "Zul'Farrak",
  "lv": "44–54",
  "where": "In Tanaris.",
  "route": [
   "Enter at Sandsorrow Watch in northwestern Tanaris, through the outer dome.",
   "Kill Witch Doctor Zum'rah. Destroy the Ward of Zum'rah quickly, since it keeps summoning skeletons.",
   "Kill Gahz'rilla in the pool. He has been there permanently since patch 3.0.8, so there is no summoning gong.",
   "Clear the regular enemies, and kill Antu'sul and Theka the Martyr along the way.",
   "Pyramid Battle: kill Nekrum Gutchewer. Open the graves one at a time, or the zombies will overwhelm the group.",
   "Kill Chief Ukorz Sandscalp last. He can only be reached after Nekrum, at the end of the Pyramid Battle.",
   "Pyramid stairs event: free Sergeant Bly's group from the cages, then hold the top of the stairs as troll waves climb. Use Swipe and Demoralizing Roar (which lowers the attack power of nearby enemies). Use Challenging Roar if the healer gets swarmed. Nekrum and Sezz'ziz come down at the end."
  ],
  "bosses": [
   {
    "name": "Witch Doctor Zum'rah",
    "abilities": [
     "Healing Wave",
     "Shadow Bolt Volley",
     "Ward of Zum'rah",
     "Awaken Zul'farrak Zombie"
    ],
    "tank": "Interrupt Healing Wave and Shadow Bolt Volley with Bash or Feral Charge. Kill the Ward of Zum'rah as soon as it spawns, since it creates a Skeleton of Zum'rah every 5 seconds for 20 seconds."
   },
   {
    "name": "Gahz'rilla",
    "abilities": [
     "Icicle",
     "Freeze Solid",
     "Gahz'rilla Slam"
    ],
    "tank": "Freeze Solid is a magic stun with frost damage over 6 seconds, and you cannot break it. Gahz'rilla Slam knocks back nearby enemies, so tank him away from the edge of the pool."
   },
   {
    "name": "Antu'sul",
    "abilities": [
     "Healing Ward",
     "Earthgrab Totem",
     "Summons Sul'lithuz basilisks"
    ],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Theka the Martyr",
    "abilities": [],
    "tank": "The ability names have not been checked. Check in the game."
   },
   {
    "name": "Nekrum Gutchewer",
    "abilities": [],
    "tank": "Pull him away from the zombies in the Pyramid Battle. The ability names have not been checked."
   },
   {
    "name": "Chief Ukorz Sandscalp",
    "abilities": [
     "Cleave",
     "Wide Slash",
     "Enrage"
    ],
    "tank": "He is the final boss, and he can only be reached after Nekrum. The ability names have not been checked."
   }
  ],
  "dangers": [
   "Opening too many graves in the Pyramid Battle releases zombies that can overwhelm the group.",
   "Skeletons from Zum'rah's Ward deal damage if the Ward is left standing.",
   "Gahz'rilla's Slam knocks back nearby enemies at the pool's edge."
  ],
  "quests": [
   "The Spider God (level 45, daily quest): Master Gadrin in Sen'jin Village, Durotar.",
   "Consult Master Gadrin (level 45, group quest): Master Gadrin in Sen'jin Village, Durotar."
  ],
  "forever": "The source games.gg lists Zul'Farrak as changed in Forever. The details were not found.",
  "confidence": "low",
  "lvnote": "15 to 30 under current level scaling"
 },
 {
  "key": "mara",
  "name": "Maraudon (Orange, Purple, Inner)",
  "lv": "46–55",
  "where": "In Desolace, in the Valley of Spears.",
  "route": [
   "Enter from the portals in the Valley of Spears, then go through the tunnel to the Zaetar's Choice crossroads.",
   "Orange wing (Foulspore Cavern): kill Noxxion, then Razorlash.",
   "Purple wing (Wicked Grotto): pull the two Putridus Shadowstalkers at the doorway without alerting Lord Vyletongue. Then pull him.",
   "Tinkerer Gizlock is past Zaetar's Grave on the Purple side. He is optional.",
   "Center: kill Celebras, who can be reached from either side. Then kill Landslide in the central cavern.",
   "Princess Theradras is in Earth Song Falls, reached through Earth Song Gate. Rotgrip is a bonus crocolisk (a crocodile enemy) behind the waterfall, after her."
  ],
  "bosses": [
   {
    "name": "Noxxion",
    "abilities": [
     "Toxic Volley",
     "Uppercut",
     "Splits into Noxxion's Spawns"
    ],
    "tank": "He splits into elementals partway through the fight, and he reforms after they die. The ability names have not been checked."
   },
   {
    "name": "Razorlash",
    "abilities": [
     "Puncture",
     "Cleave"
    ],
    "tank": "The plant knockback is the main danger in this wing. The ability names have not been checked."
   },
   {
    "name": "Lord Vyletongue",
    "abilities": [
     "Multi-Shot",
     "Smoke Bomb",
     "Blink"
    ],
    "tank": "Smoke Bomb stuns nearby enemies for 4 seconds, so keep the group away from it. Blink teleports him up to 20 yards away, so re-engage him quickly. The two linked Shadowstalkers in his room can be pulled along with him."
   },
   {
    "name": "Celebras",
    "abilities": [
     "Entangling Roots",
     "Wrath",
     "Twisted Tranquility"
    ],
    "tank": "He keeps summoning regular enemies, so attacks that hit several enemies at once are essential. No more enemies spawn once he dies. The ability names have not been checked."
   },
   {
    "name": "Landslide",
    "abilities": [
     "Knock Away",
     "Trample",
     "Landslide (summons extra enemies)"
    ],
    "tank": "He summons rock fellows that die when he does, so kill him first. He occasionally stuns with an area attack."
   },
   {
    "name": "Princess Theradras",
    "abilities": [
     "Fear"
    ],
    "tank": "She makes melee players flee in fear, and she has a large ranged area attack. Stay off the edges, where you can be knocked into the river. Shadow resistance helps the tank against her fear."
   }
  ],
  "dangers": [
   "Creeping Sludge oozes in Foulspore Cavern hit hard and slow you. Have ranged damage dealers keep their distance while attacking them.",
   "Lord Vyletongue's room has linked Shadowstalkers. A known warlock bug with Enslave Demon can pull them without alerting him.",
   "The edges of Earth Song Falls can knock you into the river during Princess Theradras's fight."
  ],
  "quests": [
   "Vyletongue Corruption (level 47): Vark Battlescar in Shadowprey Village, Desolace. This information comes from the Cataclysm era, so verify it.",
   "Corruption of Earth and Seed (level 51, daily): Selendra in Sar'theris Strand, Desolace. This information comes from the Cataclysm era, so verify it."
  ],
  "forever": "",
  "confidence": "low",
  "lvnote": "10 to 30 under current level scaling"
 },
 {
  "key": "alcaz",
  "name": "Alcaz Island Prison",
  "lv": "48–53",
  "where": "In the basement of a large building on Alcaz Island, off Dustwallow Marsh. The portal is at about 75, 15. Take the hill path to the left from the dock. It is not stated which faction can enter.",
  "route": [
   "Unknown. The guide says the interior has not been seen."
  ],
  "bosses": [
   {
    "name": "Blazeroar",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. He is the only boss known, from a Legacy challenge. There is no ability data."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, the Defias Brotherhood and the naga are in conflict.",
   "A rumor, not confirmed, says King Varian Wrynn may be a prisoner."
  ],
  "quests": [
   "Unknown. No dungeon quests have been published. The original Alcaz Island quests are not prison quests."
  ],
  "loot": [
   "Unknown. No drops have been recorded."
  ],
  "forever": "NEW in Forever: a prison on Alcaz Island in Dustwallow Marsh. The Patch 1.60.1 listing on the wiki includes it.",
  "confidence": "low",
  "lvnote": "48 to 53 (the wiki list has a typo, '48-43')"
 },
 {
  "key": "st",
  "name": "Sunken Temple",
  "lv": "50–56",
  "where": "In the Swamp of Sorrows.",
  "route": [
   "Enter through the center of the lake. Swim across the Broken Hall, through the Hall of Masks, out the south exit, left at the fork, and past the Den of the Caller. Take the mask doorway, not the tablet doorway. Then go down the Hall of Ritual to the Hall of Bones.",
   "Pull Atal'alarion first, from the Pit of Refuse on the entrance level. He is summoned by clicking six shrines in order.",
   "Kill all six troll mini-bosses: Loro, Hukku, Zul'lor, Zolo, Mijan, and Gasher. All six must die before you can reach Jammal'an.",
   "Fight Jammal'an the Prophet, with Ogom the Wretched.",
   "Weaver and Dreamscythe spawn when Jammal'an dies. Hazzas and Morphaz spawn after those two die.",
   "Clear all the dragonkin, then fight the Shade of Eranikus. He does not need to be summoned.",
   "The Avatar of Hakkar is optional and comes last. Kill four Hakkari Bloodkeepers and put out four braziers (fire bowls). You need the Ancient Egg quest line from Tanaris."
  ],
  "bosses": [
   {
    "name": "Atal'alarion",
    "abilities": [
     "Sweeping Slam (a cone-shaped attack in front of him)"
    ],
    "tank": "Pull him to the center and push him against a wall, so the cone hits only the tank. Sweeping Slam is the only ability the source names, so there is limited detail on the rest of the fight. Move him back to the wall if he drifts away."
   },
   {
    "name": "Jammal'an the Prophet",
    "abilities": [
     "Flamestrike",
     "Hex of Jammal'an",
     "Shadow Word: Pain",
     "Curse of Weakness"
    ],
    "tank": "Separate Jammal'an from Ogom and the group. Then use Growl, and hold him in a spot where the group can spread out. Use Feral Charge or Bash on his casts. Hex of Jammal'an turns a player into a Berserker, so the group needs to spread out."
   },
   {
    "name": "Weaver and Dreamscythe",
    "abilities": [
     "Frontal cone (not named in the source)",
     "Knockback (not named in the source)"
    ],
    "tank": "Use a ranged pull so you get one drake at a time. Tank against a wall, facing away from the group. Use Swipe on the extra enemies."
   },
   {
    "name": "Hazzas and Morphaz",
    "abilities": [
     "Frontal cone (not named in the source)",
     "Knockback (not named in the source)"
    ],
    "tank": "These two cannot be pulled separately. Pull them into the hallway, and tank them against a wall, facing away from the group. Use Frenzied Regeneration if both hit the bear at the same time."
   },
   {
    "name": "Shade of Eranikus",
    "abilities": [
     "Corrosive Acid Breath",
     "Deep Slumber (hits the highest threat target)",
     "War Stomp"
    ],
    "tank": "Face him away from the group. Deep Slumber targets the player with the most threat, so swap to a second tank or pet until the first Deep Slumber has landed, then take him back. Clear the dragonkin first. Grounding Totem cancels Deep Slumber."
   },
   {
    "name": "Avatar of Hakkar",
    "abilities": [
     "Cause Insanity (mind control)",
     "Shadow Word: Pain",
     "Curse of Tongues"
    ],
    "tank": "Hold threat in the middle of the room. Stun the player under Cause Insanity with Bash. Remove Curse can remove Curse of Tongues."
   }
  ],
  "dangers": [
   "Jumping into the Pit of Refuse through the top hole kills you with fall damage.",
   "Knockbacks and airborne players take fall damage (from Atal'alarion and the drakes).",
   "Flamestrike and Hex of Jammal'an punish groups that stand bunched together.",
   "Shade of Eranikus pulls all remaining dragonkin if they are not cleared first."
  ],
  "quests": [
   "The Temple of Atal'Hakkar (quest 1445, from Fel'zerul in Swamp of Sorrows). Listed as Horde. It cannot be shared.",
   "Zapper Fuel (quest 4146, from Liv Rizzlefix in The Barrens). Listed as Horde. It cannot be shared.",
   "The Sunken Temple (quest 3380, from Witch Doctor Uzer'i in Feralas). Listed as Horde. It can be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "35 to 45 (zockify) or 54 and up (warcrafttavern); sources conflict"
 },
 {
  "key": "brd",
  "name": "Blackrock Depths",
  "lv": "52–60",
  "where": "In the Burning Steppes, inside Blackrock Mountain.",
  "route": [
   "Enter through the Blackrock Mountain chain to Forgewright's Tomb. Go down through the Grinding Quarry and the Masonry. The portal is in the far corner.",
   "Detention Block: High Interrogator Gerstahn drops the Prison Cell Key. Lord Roccor patrols the north ring. The Shadowforge Key opens locked doors here.",
   "Dark Iron Highway: Bael'Gar is at the west end. The Shadowforge Gate needs a key or 250 Lockpicking skill.",
   "Shadowforge City: Lord Incendius is on the central bridge. Then come the Hall of Crafting, the Black Vault (Warder Stilgiss and Verek), the Domicile, and the Shrine of Thaurissan (Pyromancer Loregrain).",
   "Ring of Law from the Detention Block: two waves, then a random boss. A Banner of Provocation summons Theldren. Finishing it opens the East Garrison.",
   "West Garrison (needs the Shadowforge Lock, which needs a Shadowforge Key): General Angerforge. The Manufactory: Golem Lord Argelmach.",
   "The Grim Guzzler (Ribbly Screwspigot, Hurley Blackbreath, and Phalanx; the Dark Iron Ale Mug opens the bar door), then the Chamber of Enchantment (Ambassador Flamelash).",
   "Summoners' Tomb: defeat The Seven to open the door. The Lyceum: get Shadowforge Torches from the Flame Keepers and light both braziers. The Iron Hall: Magmus.",
   "Imperial Seat: Emperor Dagran Thaurissan, plus the optional Princess Moira Bronzebeard. Reach him through the Lyceum, or by the lava run over the Molten Bridge."
  ],
  "bosses": [
   {
    "name": "Bael'Gar",
    "abilities": [
     "Magma Splash",
     "Summons extra enemies"
    ],
    "tank": "Tank him while facing the wall, and taunt the extra enemies away from the damage dealers. Growl the extra enemies as they spawn."
   },
   {
    "name": "Lord Incendius",
    "abilities": [
     "Mighty Blow",
     "Curse of the Elemental Lord"
    ],
    "tank": "Tank him in the middle of the platform, away from the edges, so Mighty Blow's knockback does not send you off. Use Bash on his heavy casts."
   },
   {
    "name": "Warder Stilgiss",
    "abilities": [
     "Frostbolt",
     "Frost Nova",
     "Frost Ward"
    ],
    "tank": "Hold threat on Stilgiss first, then on Verek. Interrupt Frostbolt with Feral Charge or Bash."
   },
   {
    "name": "Theldren",
    "abilities": [
     "Mortal Strike",
     "Four extra gladiator enemies"
    ],
    "tank": "Decide the kill order and mark it. Hold threat on the extra enemies. Use Frenzied Regeneration through Mortal Strike. If the tank dies, the group can wipe, so keep Barkskin ready for emergencies."
   },
   {
    "name": "General Angerforge",
    "abilities": [
     "Sunder Armor",
     "Summons extra enemies at low health"
    ],
    "tank": "Pull him from range, up the ramp. Use Challenging Roar during the phase with extra enemies. Keep Sunder Armor (a spell that lowers the target's armor) stacked with Faerie Fire."
   },
   {
    "name": "Golem Lord Argelmach",
    "abilities": [
     "Lightning Shield"
    ],
    "tank": "Hold threat on the two constructs first, then on Argelmach. Melee damage dealers should not hit Argelmach while Lightning Shield is up."
   },
   {
    "name": "Ambassador Flamelash",
    "abilities": [
     "None named. Extra enemies boost the boss."
    ],
    "tank": "Engage him where he stands, and kill the extra enemies quickly. Save cooldowns for the end."
   },
   {
    "name": "The Seven",
    "abilities": [
     "Doom'rel summons demon enemies"
    ],
    "tank": "Pull each dwarf to the middle. Use interrupts and stuns. Hold threat on the demons with Growl and Swipe."
   },
   {
    "name": "Magmus",
    "abilities": [
     "War Stomp",
     "Fire sweeps"
    ],
    "tank": "Pull him to the right, and tuck into a corner to avoid the flames. War Stomp hits everyone in melee range, so keep Demoralizing Roar up for the room."
   },
   {
    "name": "Emperor Dagran Thaurissan",
    "abilities": [
     "Avatar of Flame (a buff, from a search result)",
     "Stun on the tank (from a search result)"
    ],
    "tank": "Pull the Emperor away from the group. He stuns the tank and hits hard, so use Frenzied Regeneration and Barkskin in turns. If you are saving Princess Moira, the second tank handles her casts with interrupts."
   }
  ],
  "dangers": [
   "Lord Incendius's Mighty Blow knocks players back near the platform edge.",
   "Theldren: if the tank dies, the group can wipe.",
   "The Emperor stuns the tank and deals high burst damage. Princess Moira is hostile until the Emperor dies.",
   "Ring of Law: a random final boss. Theldren spawns from the Banner of Provocation."
  ],
  "quests": [
   "The guide lists this as Horde, but the source gives no faction tag for each quest. The Last Element (Vivian Lagrave, Badlands, can be shared). Disharmony of Flame (Thunderheart, Badlands, can be shared). Lost Thunderbrew Recipe (Vivian Lagrave, Badlands, cannot be shared). The Princess Saved? (Princess Moira Bronzebeard, cannot be shared)."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. The level range listed here does not match the 40 to 48 that zockify gives.",
  "confidence": "medium",
  "lvnote": "40 to 48 (zockify); the listed range is 52 to 60; sources conflict"
 },
 {
  "key": "blackmaw",
  "name": "Blackmaw Hold",
  "lv": "55–60",
  "where": "In Azshara: a furbolg (bear-like enemy) tunnel entered at 38.7, 33.4, behind a long-sealed gate in northern Azshara. The portal is deep in the tunnel (Winterspring map, 66.6, 84.4). It is not stated whether Horde or Alliance players can enter.",
  "route": [
   "Unknown. The layout has not been seen. The Blizzard preview mentions multiple routes."
  ],
  "bosses": [
   {
    "name": "Varrox Bleakhoof",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. He is the only boss named, from a Legacy challenge. There is no ability data."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, corruption is spreading through the groves and tunnels.",
   "There may be a path farther below Azeroth, but this is not confirmed."
  ],
  "quests": [
   "Unknown. Listed as to be announced. The game files show the Blackmaw Ritual Totem (a quest item) and the Blackmaw Pouch (for the Blackmaw tribe reputation)."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: a dungeon behind the furbolg gates in Azshara. The wiki page is about the original hold, not the Forever dungeon.",
  "confidence": "low"
 },
 {
  "key": "lbrs",
  "name": "Lower Blackrock Spire",
  "lv": "55–60",
  "where": "In Searing Gorge, inside Blackrock Spire.",
  "route": [
   "Enter through the door beside the Blackrock Spire meeting stone, which has an elite pack. Or climb the large chain and jump down from Bodley's balcony, which avoids enemies.",
   "Burning Felguard (rare, summoned by Scarshield Warlocks).",
   "Spirestone Butcher, Battle Lord, and Lord Magus (rare enemies in the group before Omokk).",
   "Highlord Omokk, then Shadow Hunter Vosh'gajin, then War Master Voone.",
   "Mor Grayhoof (a quest summon in Voone's room), then Bannok Grimaxe (rare).",
   "Mother Smolderweb, then Crystal Fang (rare), Urok Doomhowl (summoned at the Tribute Pile), and Quartermaster Zigris.",
   "Halycon, then Gizrul the Slavener, then Ghok Bashguud (rare).",
   "Overlord Wyrmthalak is the final boss."
  ],
  "bosses": [
   {
    "name": "Highlord Omokk",
    "abilities": [
     "Knock Away",
     "Enrage"
    ],
    "tank": "Tank him against a wall, away from the group, to avoid Knock Away. Stun or sleep one or both of the extra enemies. Use Frenzied Regeneration while he is enraged, since the group will need heavy healing."
   },
   {
    "name": "Shadow Hunter Vosh'gajin",
    "abilities": [
     "Hex",
     "Curse of Blood"
    ],
    "tank": "Pull him away, and stun or sleep both extra enemies. If you can only stun one, kill the free extra enemy first. Remove Curse removes Curse of Blood."
   },
   {
    "name": "War Master Voone",
    "abilities": [
     "Cleave"
    ],
    "tank": "Tank him with your back to a wall, so melee damage dealers avoid Cleave. He hits hard, so your defensive rotation is Barkskin and Frenzied Regeneration."
   },
   {
    "name": "Mor Grayhoof",
    "abilities": [
     "Hurricane",
     "Healing Touch (interrupt it)",
     "Rejuvenation (can be removed with Purge)"
    ],
    "tank": "Tank him in the middle of the room. Avoid Hurricane, and interrupt Healing Touch with Bash or Feral Charge. Keep his attention through his form change."
   },
   {
    "name": "Mother Smolderweb",
    "abilities": [
     "Crystallize (a stun)",
     "Mother's Milk (poison)"
    ],
    "tank": "Tank her while facing away from the group, staying behind her at maximum range. Both of her abilities stun, so keep threat high so she does not turn on the group."
   },
   {
    "name": "Urok Doomhowl",
    "abilities": [
     "Intimidating Roar"
    ],
    "tank": "Use the Roughshod Pike on an ogre every 30 seconds. Kill the remaining ogres first, then let the tank take Urok. Intimidating Roar can be removed by a class that can remove magic effects."
   },
   {
    "name": "Quartermaster Zigris",
    "abilities": [
     "Stun Bomb"
    ],
    "tank": "This is a simple fight: tank him while everyone damages him. Spread out to avoid Stun Bomb."
   },
   {
    "name": "Gizrul the Slavener",
    "abilities": [
     "Infected Bite (damage over time on the tank)",
     "Enrage"
    ],
    "tank": "Use defensive cooldowns (abilities that reduce the damage you take) during his Enrage. Eat and drink before he engages, since the next fight follows quickly."
   },
   {
    "name": "Ghok Bashguud",
    "abilities": [
     "Two elite extra enemies (not named in the source)"
    ],
    "tank": "Stun or sleep the two elite extra enemies, and kill Ghok quickly. This is a simple fight: tank him while everyone damages him."
   },
   {
    "name": "Overlord Wyrmthalak",
    "abilities": [
     "Cleave",
     "Sweeping Slam",
     "Summons extra enemies at 50% health"
    ],
    "tank": "Tank him against the wall behind his spawn to limit Cleave and Sweeping Slam. Kill the boss first, then the extra enemies. Taunt and hold threat on the extra enemies if you cannot stun them."
   }
  ],
  "dangers": [
   "Omokk's Knock Away.",
   "Smolderweb's stuns (Crystallize and Mother's Milk poison).",
   "Voone's Cleave, plus Wyrmthalak's Cleave and Sweeping Slam.",
   "Vosh'gajin's Hex and Curse of Blood."
  ],
  "quests": [
   "Warlord's Command (from Warlord Goretooth in the Badlands). Horde. It cannot be shared.",
   "Operative Bijou (from Lexlort in the Badlands). It can be shared.",
   "The Pack Mistress (from Galamav the Marksman in the Badlands). It can be shared.",
   "Bijou's Belongings: the guide's faction tag is unclear. It cannot be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "55 and up (warcrafttavern); 44 to 53 (zockify); sources conflict"
 },
 {
  "key": "dme",
  "name": "Dire Maul East",
  "lv": "56–60",
  "where": "In Feralas.",
  "route": [
   "Enter from the east wall of the courtyard, or from Eldreth Row. Jump down to the bottom level to skip the top-level regular enemies.",
   "Pusillin (first section): drops the Crescent Key.",
   "Lethtendris (first section).",
   "Hydrospawn (on the next lower level).",
   "Zevrin Thornhoof. Then speak to Old Ironbark to open the Conservatory Door.",
   "Alzzin the Wildshaper: clear the Warpwood Crushers on the ramp first.",
   "Isalien is the quest boss. Reach him through the Brazier of Beckoning in Alzzin's area."
  ],
  "bosses": [
   {
    "name": "Pusillin",
    "abilities": [
     "Fireball",
     "Blast Wave",
     "Spirit of Runn Tum (reflects spells back at casters)"
    ],
    "tank": "Engage Pusillin and the four Wildspawn Imps at the start, and build threat on all of them. Then keep Pusillin focused on you. The reflection targets casters, so keep ranged damage dealers in mind."
   },
   {
    "name": "Lethtendris",
    "abilities": [
     "Void Bolt",
     "Shadow Bolt Volley",
     "Immolate"
    ],
    "tank": "Build threat on Lethtendris, and taunt Plimgib (the imp) away from the healers and damage dealers. Interrupt Void Bolt with Bash."
   },
   {
    "name": "Hydrospawn",
    "abilities": [
     "Hydroling extra enemies (no named boss abilities in the source)"
    ],
    "tank": "Agree with the damage dealers on whether to kill the extra enemies first or focus Hydrospawn. Clear the surrounding extra enemies before you pull."
   },
   {
    "name": "Zevrin Thornhoof",
    "abilities": [
     "Sacrifice (teleports players to his altar)",
     "Intense Pain"
    ],
    "tank": "Hold the main threat position the whole time. Players who are sacrificed need significant healing."
   },
   {
    "name": "Alzzin the Wildshaper",
    "abilities": [
     "Shapeshift forms (Satyr, Dire Wolf, Treant)",
     "Sunder Armor",
     "Expose Armor"
    ],
    "tank": "Alzzin loses threat on every form change, so use Growl and Maul to take back the top spot. The bear takes the most damage in Dire Wolf form, so use Frenzied Regeneration."
   },
   {
    "name": "Isalien (quest)",
    "abilities": [
     "Hippogryph extra enemy"
    ],
    "tank": "Keep threat on Isalien, and pick up the hippogryph (a winged creature) when it spawns. The source calls this one of the easiest bosses in the questline."
   }
  ],
  "dangers": [
   "Jump runs (skipping ahead past groups): larger packs can be too strong to take on alone.",
   "Lethtendris's Void Bolt must be interrupted.",
   "Hydroling extra enemies deal heavy damage.",
   "Alzzin: if you leave the Warpwood Crushers uncleared, they join the fight and make it much harder."
  ],
  "quests": [
   "Lethtendris's Web (Horde, from Talo Thornhoof in Feralas). It can be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "55 and up (warcrafttavern); zockify lists 52 to 54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "dmw",
  "name": "Dire Maul West",
  "lv": "57–60",
  "where": "In Feralas.",
  "route": [
   "Enter from the west wall of the central courtyard. You need the Crescent Key, which drops from Pusillin in Dire Maul East.",
   "Capital Gardens: deactivate the first crystal, then fight Tendris Warpwood, then Tsu'zee (a rare enemy).",
   "Court of the Highborne: deactivate two crystals upstairs, then fight Illyanna Ravenoak.",
   "Prison of Immol'thar: deactivate the last two crystals on either side of the doorway, then fight Immol'thar.",
   "Athenaeum: take the tunnel from Immol'thar's prison to Prince Tortheldrin. Lord Hel'nurath (a quest boss) is also here."
  ],
  "bosses": [
   {
    "name": "Tendris Warpwood",
    "abilities": [
     "Trample",
     "Entangle"
    ],
    "tank": "Clear the wandering Ancients in the courtyard first, since Tendris summons them when the fight starts. Hold him away from ranged damage dealers and the healer."
   },
   {
    "name": "Magister Kalendris",
    "abilities": [
     "Mind Blast",
     "Mind Flay",
     "Dominate Mind"
    ],
    "tank": "Pull him away from the group, and interrupt Mind Blast and Mind Flay with Bash. If Dominate Mind takes control of you, taunt him again as soon as you regain control."
   },
   {
    "name": "Illyanna Ravenoak",
    "abilities": [
     "Immolation Trap",
     "Volley",
     "Hibernate (used on her pet Ferra)"
    ],
    "tank": "Pull Ferra onto Illyanna, and hold them stacked together. Keep threat on Illyanna, then switch to Ferra when Illyanna dies. Hibernate is a druid spell you can use on Ferra if needed."
   },
   {
    "name": "Immol'thar",
    "abilities": [
     "Infected Bite",
     "Enrage (50%)",
     "Teleport"
    ],
    "tank": "Tank him just off the center of the room. If he is teleported to the middle, get his attention back and resume. Save defensive cooldowns for Infected Bite and his 50% Enrage."
   },
   {
    "name": "Prince Tortheldrin",
    "abilities": [
     "Arcane Blast",
     "Whirlwind",
     "Counterspell"
    ],
    "tank": "Position him in a corner to limit knockback. After Arcane Blast resets threat, get his attention back before the damage dealers resume. Use Bash on his heavy casts."
   },
   {
    "name": "Lord Hel'nurath (quest)",
    "abilities": [
     "Dread Guard extra enemies",
     "Banish",
     "Enslave Demon"
    ],
    "tank": "Pick up the extra enemies as they spawn, using an area attack that builds threat on several enemies at once. Keep threat on Hel'nurath while the damage dealers attack him."
   }
  ],
  "dangers": [
   "Tendris's summoned Ancients appear if the courtyard is not cleared first.",
   "Immol'thar's teleports make the teleported player lose threat.",
   "Immolation Trap hits the whole group during the Illyanna fight.",
   "Hel'nurath's Dread Guard extra enemies deal heavy damage."
  ],
  "quests": [
   "Elven Legends (quest 7481, from Sage Korolusk in Feralas). The Horde version is listed. It can be shared.",
   "The Madness Within (from a Shen'dralar Ancient in Dire Maul West). It can be shared. The faction is not specified.",
   "The Treasure of the Shen'dralar (from a Shen'dralar Ancient in Dire Maul West). It cannot be shared. The faction is not specified."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Dire Maul West and Dire Maul North share an instance, linked by the Athenaeum. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "55 and up (warcrafttavern); zockify lists 52 to 54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "ubrs",
  "name": "Upper Blackrock Spire",
  "lv": "58–60",
  "where": "In Searing Gorge, inside Blackrock Spire.",
  "route": [
   "Enter through the Blackrock Spire meeting stone door, which has an elite pack. Or use the chain and balcony jump, which has no enemies.",
   "Do Lower Blackrock Spire first. Complete the Seal of Ascension quest. At least one group member needs it to open the upstairs door on the left of the entrance.",
   "Pyroguard Emberseer (mandatory): summoned when three or more players click the Blackrock Altar. Clear the Incarcerator waves with area attacks first.",
   "Solakar Flamewreath (only during the Father Flame event), then Goraluk Anvilcrack (optional).",
   "Warchief Rend Blackhand with Gyth: both must die. Kill Gyth first.",
   "The Beast, in The Furnace: clear the extra enemies and the stealth assassins first.",
   "General Drakkisath is the final boss. Kill the two Chromatic Elite Guards first, in order. Jed Runewatcher (rare) and Lord Valthalak (a quest boss summoned at the Brazier of Beckoning) are optional."
  ],
  "bosses": [
   {
    "name": "Pyroguard Emberseer",
    "abilities": [
     "Fire Nova",
     "Incarcerator waves"
    ],
    "tank": "Keep threat away from the ranged group. Fire Nova hits melee players, so keep the bear's health high with Frenzied Regeneration."
   },
   {
    "name": "Warchief Rend Blackhand and Gyth",
    "abilities": [
     "Whirlwind",
     "Thunderclap",
     "Corrosive Acid Breath",
     "Flame Breath"
    ],
    "tank": "The main tank holds Gyth, and the second tank holds Rend. Kill Gyth first. Use Swipe on the extra enemies. Equipping and using the Seal of Ascension summons Vaelstrasz to heal the group."
   },
   {
    "name": "The Beast",
    "abilities": [
     "Flamebreak (area attack and knockback)",
     "Fear",
     "Charge"
    ],
    "tank": "Keep top threat, so The Beast returns to the tanks after a charge. Stand with your back to a wall to avoid knockback. Fear needs a priest or shaman to remove it."
   },
   {
    "name": "General Drakkisath",
    "abilities": [
     "Conflagration",
     "Flame Breath",
     "Cleave",
     "Thunderclap"
    ],
    "tank": "The second tank taunts Drakkisath when he casts Conflagration. Face him toward a wall. Use Bash on casts. Use Barkskin through Conflagration."
   },
   {
    "name": "Lord Valthalak (quest boss)",
    "abilities": [
     "Shadow Bolt Volley (starts at 40%)",
     "A channeled ability from an extra enemy that kills the target if it finishes"
    ],
    "tank": "Hold the middle of the room. Kill the extra enemies immediately. Save defensive cooldowns for the last 20% of his health."
   }
  ],
  "dangers": [
   "The Beast's Flamebreak knockback and Fear.",
   "Drakkisath's Conflagration: taunt him when he casts it.",
   "Valthalak's extra-enemy channel kills the target if it finishes."
  ],
  "quests": [
   "For The Horde! (from Thrall in Orgrimmar). Horde. It cannot be shared.",
   "The Darkstone Tablet (from Shadowmage Vivian Lagrave in the Badlands). It can be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is listed as a 10-player instance, but the source does not say whether Forever changes that. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "55 and up (warcrafttavern); zockify 48 to 58; sources conflict"
 },
 {
  "key": "dmn",
  "name": "Dire Maul North",
  "lv": "58–60",
  "where": "In Feralas.",
  "route": [
   "Enter with the Crescent Key on the north wall of the courtyard (guards Mol'dar and Stomper Kreeg). Or go through Dire Maul West's Athenaeum, which usually has no fight.",
   "Gordok Courtyard Door: open it with the Gordok Courtyard Key from Guard Fengus's chest.",
   "Gordok Inner Door: use the Gordok Inner Door Key from Mol'dar, or 300 Lockpicking skill, a Powerful Seaforium Charge, or a Truesilver Skeleton Key.",
   "Guard Slip'kik's walkway is below the ramps.",
   "Captain Kromcrush's room. The Ogre Tannin Baskets are in the room before him.",
   "King Gordok, with Cho'Rush the Observer."
  ],
  "bosses": [
   {
    "name": "Guard Mol'dar",
    "abilities": [
     "Knock Away",
     "Shield Charge",
     "Enrage"
    ],
    "tank": "Tank him against a wall to avoid knockback. Save defensive cooldowns for his Enrage. Ranged damage dealers should stand at maximum range."
   },
   {
    "name": "Stomper Kreeg",
    "abilities": [
     "Whirlwind",
     "War Stomp",
     "Booze Spit"
    ],
    "tank": "Hold primary threat, and save defensive cooldowns for his Enrage. Booze Spit cuts hit chance by 75%. He can be bypassed when he falls asleep."
   },
   {
    "name": "Captain Kromcrush",
    "abilities": [
     "Mortal Cleave",
     "Intimidating Shout",
     "Gordok Reaver extra enemies (around 50%)"
    ],
    "tank": "Gain threat on the Reaver extra enemies before the damage dealers or healers take heavy damage. Mortal Cleave reduces healing on the target, so use Frenzied Regeneration. Damage dealers should stay behind the boss."
   },
   {
    "name": "King Gordok (with Cho'Rush the Observer)",
    "abilities": [
     "Healing Wave (Cho'Rush)",
     "Mind Blast (Cho'Rush)",
     "Psychic Scream",
     "War Stomp"
    ],
    "tank": "Build and hold threat on King Gordok. Interrupt Cho'Rush's Healing Wave first, then Mind Blast, with Bash or Feral Charge. Psychic Scream causes fear, which the group handles with Fear Ward or Tremor Totem."
   }
  ],
  "dangers": [
   "Knock Away and Shield Charge from the guards.",
   "Booze Spit: a 75% reduction in hit chance, and the target gets drunk.",
   "King Gordok's Psychic Scream causes fear."
  ],
  "quests": [
   "The Gordok Ogre Suit (from Knot Thimblejack in Dire Maul North). It can be shared.",
   "Unfinished Gordok Business (from Captain Kromcrush in Dire Maul North). It cannot be shared.",
   "The source lists no Horde-specific quests."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. The Tribute Run is the Forever route that avoids killing five of the six bosses. Level ranges conflict across sources.",
  "confidence": "low",
  "lvnote": "55 and up (warcrafttavern); zockify lists 52 to 54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "shapers",
  "name": "Shaper's Terrace",
  "lv": "58–60",
  "where": "In the northern hills of Un'Goro Crater, on a hill overlooking Marshal's Refuge (at 48.1, 6.1, according to one source; other sources say this is not confirmed). It is not stated which faction can enter.",
  "route": [
   "Mostly one open area. A tar pit path leads to the central Pillar of Assimilation.",
   "A tunnel through crystal-filled caves runs along the east side.",
   "The north path leads to a titan building, then to a waterfall area with a portal to a raid behind a closed gate."
  ],
  "bosses": [
   {
    "name": "Bolt",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Cinder",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Snowtalon",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown."
   },
   {
    "name": "Nanaya",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown. There is no ability data. The kill order is unknown. More bosses are likely."
   }
  ],
  "dangers": [
   "According to the Blizzard preview, there are tar pits, dinosaurs, and titan structures.",
   "According to Blizzard, players bring Un'Goro power crystals (blue, green, red, and yellow) to consoles inside the terrace."
  ],
  "quests": [
   "Unknown. Listed as to be announced."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: a titan-built terrace in Un'Goro Crater that uses Un'Goro power crystals. The boss names come from Legacy challenges, and only one source lists them.",
  "confidence": "low"
 },
 {
  "key": "strat_live",
  "name": "Stratholme Living",
  "lv": "58–60",
  "where": "In the Eastern Plaguelands.",
  "route": [
   "Enter through the main dungeon entrance in the northwest corner of the Eastern Plaguelands. You can also use Eastwall Gate with the Key to the City.",
   "Skul (rare, near the main gates) and The Unforgiven. Damage dealers should clear the non-elite extra enemies first.",
   "Hearthsinger Forresten (rare, at Market Row or near Fras Siabi).",
   "Postmaster Malown spawns after the third Postbox is opened.",
   "Timmy the Cruel runs in after the enemies outside the Scarlet area are cleared.",
   "Crimson Hammersmith spawns if someone clicks the pattern on the ground.",
   "Cannon Master Willey, then Archivist Galford.",
   "Balnazzar is the final encounter. Then Jarien and Sothos are summoned in Balnazzar's room for the Tier 0.5 questline."
  ],
  "bosses": [
   {
    "name": "Hearthsinger Forresten",
    "abilities": [
     "Enchanting Lullaby (sleep, about 8 seconds)",
     "Multi-Shot"
    ],
    "tank": "Tank him where he stands, away from other enemies. Enchanting Lullaby puts the bear to sleep, so take his attention back when you wake up."
   },
   {
    "name": "Postmaster Malown",
    "abilities": [
     "Wailing Dead (from three Undead Postmen)",
     "Fear"
    ],
    "tank": "Pull him away from the extra enemies you have stunned or put to sleep. Fear must be removed quickly by a priest or shaman, especially on the tank. A bear cannot remove fear."
   },
   {
    "name": "Timmy the Cruel",
    "abilities": [
     "Enrage"
    ],
    "tank": "This is a simple fight: tank him while everyone damages him. Keep the tank healthy through his Enrage with Frenzied Regeneration and Barkskin."
   },
   {
    "name": "Cannon Master Willey",
    "abilities": [
     "Spawned extra enemies (not named in the source)",
     "Cannonballs fired from the room's cannons"
    ],
    "tank": "The tank must pick up the extra enemies that spawn. Stun or sleep them, burn them down quickly, or use the room's cannons."
   },
   {
    "name": "Archivist Galford",
    "abilities": [
     "Burning Winds"
    ],
    "tank": "Burning Winds can target the tank. Take back threat quickly when it wears off. Spread the group out, since its effects hit multiple players."
   },
   {
    "name": "Balnazzar",
    "abilities": [
     "Psychic Scream",
     "Deep Sleep"
    ],
    "tank": "Tank him in the middle of the room, so the group can spread out. Healers can remove Deep Sleep, but a bear cannot. Psychic Scream can be avoided by staying at maximum range."
   }
  ],
  "dangers": [
   "Enchanting Lullaby (sleep) and Multi-Shot from Hearthsinger Forresten.",
   "Fear from Postmaster Malown.",
   "Burning Winds from Archivist Galford.",
   "Crimson Hammersmith spawns unexpectedly if someone clicks the ground pattern during pulls."
  ],
  "quests": [
   "The Living quests are open to both factions: Of Love and Family (cannot be shared), The Great Ezra Grimm (can be shared), The Archivist (can be shared), The Truth Comes Crashing Down (cannot be shared), The Medallion of Faith (can be shared), and The Restless Souls (cannot be shared). There are no Horde-only quests."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. You enter with a Scarlet Key from Doan's Strongbox in the Scarlet Monastery Library, which opens the Bastion Door. Zockify lists 45 to 55 for Stratholme overall. The level range listed here is 58 to 60. Sources conflict.",
  "confidence": "medium",
  "lvnote": "58 and up (warcrafttavern); zockify lists 45 to 55; sources conflict"
 },
 {
  "key": "strat_undead",
  "name": "Stratholme Undead",
  "lv": "58–60",
  "where": "In the Eastern Plaguelands.",
  "route": [
   "Enter through Eastwall Gate, which needs the Key to the City. Or use the main entrance and go through the Living wing to get the key. If you open the Service Gate Entrance early, Magistrate Barthilas runs to the back, so do not open it early.",
   "Ziggurat 1: Nerub'enkan, at the top of the left ziggurat. Clear the Thuzadin Acolytes inside after the boss.",
   "Ziggurat 2: Baroness Anastari. Then clear the Thuzadin Acolytes inside.",
   "Ziggurat 3: Maleki the Pallid. Then clear the Thuzadin Acolytes inside.",
   "Gauntlet Gate: opening it with the key starts a 45-minute Baron's Ultimatum timer. This only matters for the Tier 0.5 set quest.",
   "Slaughter Square: the portcullis opens after all three ziggurats and their acolytes are dead. Fight Ramstein the Gorger. Kill the Venom Belchers and Bile Spewers to draw him out.",
   "Slaughter House: after Ramstein dies, clear the Mindless Undead and Bile Slimes. Three Black Guard Sentry elites spawn.",
   "Baron Rivendare is the final boss. The door closes once the fight starts."
  ],
  "bosses": [
   {
    "name": "Nerub'enkan",
    "abilities": [
     "Encasing Webs",
     "Crypt Scarabs",
     "Raise Undead Scarab"
    ],
    "tank": "Tank him at the top of the ramp. Use area attacks on the extra enemies."
   },
   {
    "name": "Baroness Anastari",
    "abilities": [
     "Possess",
     "Silence",
     "Banshee Curse"
    ],
    "tank": "Tank her on top of the ziggurat. A possessed player must be damaged to 50% health to break the mind control. Remove Curse removes Banshee Curse. Take back threat after a possessed player is freed."
   },
   {
    "name": "Maleki the Pallid",
    "abilities": [
     "Drain Life",
     "Frostbolt",
     "Ice Tomb"
    ],
    "tank": "Interrupt his casts with Bash when possible. Ice Tomb moves the boss to another target for about 6 seconds. Keep that player alive, and taunt him again when the player is freed."
   },
   {
    "name": "Magistrate Barthilas",
    "abilities": [
     "Mighty Blow",
     "Crowd Pummel"
    ],
    "tank": "Position him against a wall, so Mighty Blow does not knock players into other enemies. The Key drops from him."
   },
   {
    "name": "Ramstein the Gorger",
    "abilities": [
     "Knockout (switches his target to the player with the second-highest threat)"
    ],
    "tank": "Keep a taunt ready. Growl him back after Knockout switches his target, and heal the damage dealer he switched to."
   },
   {
    "name": "Baron Rivendare",
    "abilities": [
     "Mortal Strike (reduces tank healing)",
     "Cleave",
     "Unholy Aura",
     "Skeleton summons"
    ],
    "tank": "Tank him at the back right of the room, with melee players behind him. Use Frenzied Regeneration through Mortal Strike. Melee players should attack the skeletons first when they spawn. Swipe handles the skeletons."
   }
  ],
  "dangers": [
   "Possess, Silence, and Banshee Curse during the Anastari fight.",
   "Unholy Aura and Cleave during the Rivendare fight.",
   "Losing threat to Ramstein's Knockout.",
   "Clicking the Black Guard Swordsmith pattern by accident in the middle of a pull."
  ],
  "quests": [
   "The Ramstein quest (Horde only, from Nathanos Blightcaller in the Eastern Plaguelands). It cannot be shared.",
   "Six quests are open to both factions: Aurius' Reckoning, Menethil's Gift, The Flesh Does Not Lie, The Active Agent, Above and Beyond, and Houses of the Holy. Three of them can be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Level ranges conflict across sources. The Naxxramas raid portal cannot be accessed.",
  "confidence": "medium",
  "lvnote": "58 and up"
 },
 {
  "key": "scholo",
  "name": "Scholomance",
  "lv": "58–60",
  "where": "In the Western Plaguelands, on Caer Darrow island.",
  "route": [
   "Enter via Caer Darrow island, in the southeast of the Western Plaguelands. Opening the door needs the Skeleton Key, which comes from a long quest chain in the Western Plaguelands.",
   "Great Ossuary: Rattlegore is in the basement. His kill drops the Viewing Room Key, which you need to go deeper.",
   "Viewing Room: Marduk Blackpool and Vectus. Engage only if someone has completed the questline that involves them.",
   "Alchemy Lab: Ras Frostwhisper. Kormok can be summoned in his room with the Brazier of Beckoning (Tier 0.5 questline).",
   "Patio: Kirtonos the Herald is summoned with the Blood of Innocents, which drops from the Blood Steward of Kirtonos.",
   "Six wing bosses: Illucia, Alexei, The Ravenian, Polkelt, Krastinov, and Malicia.",
   "Barov Family Vault: Darkmaster Gandling spawns after the six wing bosses die."
  ],
  "bosses": [
   {
    "name": "Kirtonos the Herald (summoned)",
    "abilities": [
     "Knockback",
     "Swoop (stun)",
     "Curses in human form"
    ],
    "tank": "Tank him with your back to a wall. Take back threat after each form change. Remove Curse removes the curses."
   },
   {
    "name": "Rattlegore",
    "abilities": [
     "Knock Away",
     "War Stomp"
    ],
    "tank": "Mark the extra enemy and kill it first, then kill the boss. Clear the area before you pull. Keep your back to a wall to avoid Knock Away."
   },
   {
    "name": "Marduk Blackpool",
    "abilities": [
     "Shadow Shield",
     "Shadow Bolt Volley",
     "Defiling Aura",
     "Cleave"
    ],
    "tank": "Tank him while facing away from the group. Melee players should not attack him while Shadow Shield is active."
   },
   {
    "name": "Vectus",
    "abilities": [
     "Flamestrike",
     "Blast Wave",
     "Ground fire"
    ],
    "tank": "Tank him away from ranged damage dealers and healers. Spread out to avoid Flamestrike."
   },
   {
    "name": "Ras Frostwhisper",
    "abilities": [
     "Fear",
     "Chill Nova"
    ],
    "tank": "Clear the extra enemies first. Tank him near the back, but stay in view of the healer. Coordinate interrupts with Bash."
   },
   {
    "name": "Lady Illucia Barov",
    "abilities": [
     "Dominate Mind"
    ],
    "tank": "This is a simple fight: tank her while everyone damages her. Stun or sleep players who are mind-controlled."
   },
   {
    "name": "Lord Alexei Barov",
    "abilities": [
     "Unholy Aura",
     "Veil of Shadow",
     "Two linked extra enemies"
    ],
    "tank": "Stun or sleep the extra enemies, and kill Barov first. Remove the Veil of Shadow curse first, as a priority. Remove Curse handles it if the group has no other player who can remove curses."
   },
   {
    "name": "Doctor Theolen Krastinov",
    "abilities": [
     "Enrage at 50% (faster attacks)"
    ],
    "tank": "Use defensive cooldowns after he enrages at 50% health, and use Frenzied Regeneration. Keep ranged damage dealers and healers far away."
   },
   {
    "name": "Darkmaster Gandling (final boss)",
    "abilities": [
     "Periodic teleports to surrounding chambers"
    ],
    "tank": "Tank him in the center. Players who are teleported must kill the extra enemies in their chamber, then return. Plan for the tank or a healer to be teleported."
   }
  ],
  "dangers": [
   "Knockbacks from Kirtonos, Rattlegore, and the Ravenian can fling players into extra enemies or hazards.",
   "Lady Illucia's Dominate Mind and Alexei's Veil of Shadow need to be removed by a player who can remove magic or curses.",
   "Krastinov becomes deadly at 50% health.",
   "Gandling's teleports separate players from the group."
  ],
  "quests": [
   "The Key to Scholomance (from Apothecary Dithers in Tirisfal Glades). Horde. It cannot be shared.",
   "Barov Family Fortune (from Alexi Barov in Tirisfal Glades). Horde. It can be shared."
  ],
  "forever": "This guide is based on Classic. The dungeon is not accessible in the Forever beta. Level ranges conflict across sources.",
  "confidence": "medium",
  "lvnote": "58 and up (warcrafttavern); zockify lists 45 to 57; sources conflict"
 }
];
window.MACROS = [
 {
  "name": "Primal Bite + Maul",
  "why": "Uses Primal Bite when it is ready, then queues Maul for your next swing. The exclamation mark stops a second press from canceling Maul. Use it only when you have rage to spare.",
  "body": "#showtooltip Primal Bite\n/cast [@target,harm,nodead] Primal Bite\n/cast [@target,harm,nodead] !Maul",
  "tested": false
 },
 {
  "name": "Feral Charge, Shift = Bash",
  "why": "Use Feral Charge to leap at an enemy from range. Hold Shift to use Bash instead.",
  "body": "#showtooltip\n/cast [mod:shift] Bash; Feral Charge",
  "tested": false
 },
 {
  "name": "Growl: focus > mouseover > target",
  "why": "Taunts an enemy without changing your current target. Hold Ctrl to use Challenging Roar instead, which taunts every enemy nearby.",
  "body": "#showtooltip\n/cast [mod:ctrl] Challenging Roar; [@focus,harm,nodead] Growl; [@mouseover,harm,nodead] Growl; Growl",
  "tested": false
 },
 {
  "name": "Pre-pull Enrage + Wolfshead",
  "why": "Equips the Wolfshead Helm (a leatherworking helmet that gives extra rage when you Enrage), then uses Enrage. In Forever, this gives 5 extra rage. Use it in bear form about 10 seconds before the pull. If you use a different helm for this swap, change the helm name in the macro.",
  "body": "#showtooltip Enrage\n/equip Wolfshead Helm\n/cast [form:1] Enrage",
  "tested": false
 },
 {
  "name": "Swap back to tank helm",
  "why": "Use this after the pull. Type the name of your normal tank helm in place of the placeholder.",
  "body": "#showtooltip\n/equip YOUR TANK HELM NAME",
  "tested": false
 },
 {
  "name": "Oh no button",
  "why": "Uses Barkskin, which reduces the damage you take, then Frenzied Regeneration, which heals you over time. In Forever, Barkskin can be used in bear form.",
  "body": "#showtooltip Barkskin\n/cast Barkskin\n/cast Frenzied Regeneration",
  "tested": false
 },
 {
  "name": "Rebirth / Innervate (leaves form)",
  "why": "Leaves your current form. If you are hovering over a dead friendly player, it casts Rebirth (a spell that brings them back to life, even during combat). Otherwise, it casts Innervate (a spell that speeds up mana regeneration) on the friendly player you are hovering over, or on yourself if there is none. Press your bear key afterwards.",
  "body": "#showtooltip\n/cancelform [form]\n/cast [@mouseover,help,dead] Rebirth; [@mouseover,help] Innervate; [@player] Innervate",
  "tested": false
 },
 {
  "name": "Bear (never toggles off)",
  "why": "Changes you into Dire Bear Form only if you are not already in it, so you can press it repeatedly without switching out.",
  "body": "#showtooltip Dire Bear Form\n/cast [noform:1] Dire Bear Form",
  "tested": false
 },
 {
  "name": "Re-shift: break roots and slows",
  "why": "Leaves your current form and re-enters Dire Bear Form with one press. This removes effects that root or slow you. It costs mana.",
  "body": "#showtooltip Dire Bear Form\n/cancelform [form:1]\n/cast Dire Bear Form",
  "tested": false
 }
];
window.KEYBINDS = [["1", "Lacerate"], ["2", "Primal Bite + Maul macro"], ["3", "Swipe"], ["4", "Maul"], ["5", "Demoralizing Roar"], ["Q", "Feral Charge / Bash macro"], ["E", "Growl macro (Ctrl = Challenging Roar)"], ["R", "Faerie Fire"], ["F", "Enrage"], ["T", "Barkskin"], ["G", "Oh no button (Barkskin + Frenzied Regen)"], ["Z", "Bear macro"], ["X", "Re-shift macro"], ["Shift-1", "Pre-pull Wolfshead + Enrage"], ["Shift-2", "Swap back helm"], ["Ctrl-1", "Rebirth / Innervate macro"]];
window.ADDONS = [
 {
  "name": "Questie",
  "why": "Shows quest objectives on your map. A version that works with Forever is listed.",
  "forever": true
 },
 {
  "name": "QuestieTrace",
  "why": "A companion addon that records Forever's new quests, which the Questie database for Classic does not have yet.",
  "forever": true
 },
 {
  "name": "A threat meter (ThreatClassic2 or Details)",
  "why": "Shows how far ahead you are on threat for each enemy. Threat is how much an enemy wants to attack you. Check that a version for Forever exists before you install it.",
  "forever": false
 },
 {
  "name": "Threat Plates",
  "why": "Name tags above enemies that change color when you lose aggro (when an enemy stops attacking you). Method calls it essential for tanks.",
  "forever": false
 },
 {
  "name": "DBM or BigWigs",
  "why": "Warning addons for boss fights, used in raids at level 60. Raids are large group dungeons.",
  "forever": false
 },
 {
  "name": "Leatrix Plus",
  "why": "Small tweaks that make the game more convenient.",
  "forever": false
 },
 {
  "name": "WeakAuras",
  "why": "Sources disagree on whether a version for Forever exists. Wait before installing it.",
  "forever": false
 }
];
