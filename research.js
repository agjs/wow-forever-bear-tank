/* Research data: questing route, dungeon cheat sheets, macros, keybinds, addons. */
window.ROUTE = [
 {
  "lv": "13–16",
  "zones": "Durotar → The Barrens (Crossroads)",
  "notes": "After Zephras Isle the skycutter drops you in Thunder Bluff. Run RFC in Orgrimmar and pick up the WC quests at the Crossroads.",
  "forever": false
 },
 {
  "lv": "17–22",
  "zones": "The Barrens · Stonetalon Mountains · Silverpine Forest",
  "notes": "WC in the Barrens. New Forever dungeon Ruins of Lordaeron (Undercity, ~15–22). SFK in Silverpine.",
  "forever": true
 },
 {
  "lv": "22–27",
  "zones": "Ashenvale · Stonetalon · southern Barrens",
  "notes": "BFD (Ashenvale) and RFK (southern Barrens). Forever adds Excavation Site (~24–29).",
  "forever": true
 },
 {
  "lv": "27–32",
  "zones": "Hillsbrad Foothills · Thousand Needles · Alterac Mountains",
  "notes": "New Forever dungeon City of Dalaran (Alterac, 28–33). Gnomeregan is a long walk for Horde.",
  "forever": true
 },
 {
  "lv": "30–40",
  "zones": "Desolace · Arathi Highlands · Stranglethorn Vale",
  "notes": "SM is in Tirisfal. RFD (Barrens) and Uldaman (Badlands) are mid-30s. Forever adds Drowned City (35–40).",
  "forever": true
 },
 {
  "lv": "40",
  "zones": "Tanaris · Riverglades (new, ~35–45)",
  "notes": "Riverglades is a new zone with 150+ quests for both factions. Krol'dok Stronghold is a new dungeon (40–45).",
  "forever": true
 },
 {
  "lv": "40–46",
  "zones": "Feralas · Tanaris · Riverglades",
  "notes": "Zul'Farrak (Tanaris), Maraudon (Desolace).",
  "forever": true
 },
 {
  "lv": "46–52",
  "zones": "Felwood · Un'Goro Crater · Blasted Lands · Dustwallow Marsh",
  "notes": "New Forever dungeon Alcaz Island Prison (Dustwallow, 48–53). Start Timbermaw rep in Felwood.",
  "forever": true
 },
 {
  "lv": "52–58",
  "zones": "Burning Steppes · Eastern Plaguelands · Azshara · Silithus",
  "notes": "BRD/BRS (Searing Gorge / Burning Steppes), Dire Maul (Feralas).",
  "forever": false
 },
 {
  "lv": "58–60",
  "zones": "Winterspring · Plaguelands · Mount Hyjal (new endgame zone)",
  "notes": "New Forever dungeons Blackmaw Hold (Azshara, 55–60) and Shaper's Terrace (Un'Goro, 58–60). Strat and Scholo.",
  "forever": true
 }
];
window.DUNGEONS = [
 {
  "key": "rfc",
  "name": "Ragefire Chasm",
  "lv": "13–18",
  "where": "Orgrimmar (Cleft of Shadow, next to Neeru Fireblade's tent)",
  "route": [
   "Enter from the Cleft of Shadow. Troggs are the first mobs; clear them in pulls of one or two.",
   "Oggleflint sits near the start of the route. Kill him before moving on.",
   "Elemental mobs are next. Pull one or two at a time (they drop Searing Bindings for the Elemental Tampering quest).",
   "Searing Blade Cultists patrol before Taragaman. Kill the patrollers (groups of 2–3) before pulling him.",
   "Taragaman the Hungerer (felguard) is past the cultists. Fight him mid-platform, away from the lava edge.",
   "Jergosh the Invoker is just ahead of Taragaman's position.",
   "Bazzalan is up the adjacent walkway, directly above Jergosh. Finish here.",
   "Exit runs back to the Orgrimmar graveyard are long. Bring a healer for the walk back."
  ],
  "bosses": [
   {
    "name": "Oggleflint",
    "abilities": [
     "Cleave"
    ],
    "tank": "Ability list not verified in research. Pull from the trogg side, keep the group clustered, and use Swipe if several troggs are on you. Growl casters first."
   },
   {
    "name": "Taragaman the Hungerer",
    "abilities": [
     "Uppercut",
     "Fire Nova"
    ],
    "tank": "Uppercut knocks you back, so tank mid-platform to keep the knockback off the lava edge and away from other mobs. Kill the Searing Blade Cultists before the pull. Hits hard, so use Enrage and Frenzied Regeneration to survive burst."
   },
   {
    "name": "Jergosh the Invoker",
    "abilities": [
     "Curse of Weakness",
     "Immolate",
     "Shadow Bolt"
    ],
    "tank": "The Classic ability list was not verified (the wiki page covers the Legion version). Pull him clean. The wiki calls the fight straightforward if no extra mobs are pulled. Feral Charge any add that starts a cast."
   },
   {
    "name": "Bazzalan",
    "abilities": [
     "Poison",
     "Sinister Strike"
    ],
    "tank": "Poison is a Nature DoT that ticks every 3 seconds for 15 seconds. Cure Poison in caster form clears it. He swings fast, so keep Growl and Maul rotating and do not let him reach the second cultist pull."
   }
  ],
  "dangers": [
   "Searing Blade Cultists: patrol in groups of 2–3 and need coordination. Clear them one group at a time before boss pulls.",
   "Lava near the Taragaman platform: Uppercut can knock you or other mobs into it.",
   "All mobs in Ragefire Chasm are elite (Classic wiki), so pull in small groups.",
   "Long run back from the graveyard after a wipe."
  ],
  "quests": [
   "Hidden Enemies (chain start): Thrall, Orgrimmar. Ends with Neeru Fireblade.",
   "Slaying the Beast: Neeru Fireblade, Orgrimmar.",
   "Searching for the Lost Satchel: Rahauro, Thunder Bluff. Ends with Maur Grimtotem inside Ragefire Chasm (turn in the satchel in-instance).",
   "Testing an Enemy's Strength: Rahauro, Thunder Bluff."
  ],
  "forever": "Level range is 13–18 in Forever (warcrafttavern). The Classic wiki lists 15–21. Forever XP rules apply: enemy XP is reduced and dungeon quests give much more XP. The Forever wiki page lists Chasm quests (Animal Control, The Dark Shaman, A New Enemy) that were not verified against Classic and are omitted here.",
  "confidence": "medium"
 },
 {
  "key": "thanes",
  "name": "Hall of Thanes",
  "lv": "13–18",
  "where": "Inside Ironforge, Dun Morogh, at the High Seat entrance. Alliance-intended; wiki says ill-advised for Horde (near the city leader). Horde access not confirmed.",
  "route": [
   "Unknown; no internal route published. Enter from Ironforge High Seat."
  ],
  "bosses": [
   {
    "name": "Faldrim Anvilmar",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game before pulling as bear."
   },
   {
    "name": "Magmatus",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game before pulling as bear."
   },
   {
    "name": "Plunder",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game before pulling as bear."
   },
   {
    "name": "Durgen Dirgehammer (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game before pulling as bear."
   }
  ],
  "dangers": [
   "Dark Iron intruders and ghostly whispers per Blizzard preview (inferred Dark Iron dwarves; unconfirmed)",
   "Horde would be near the Alliance city leader"
  ],
  "quests": [
   "Alliance: main chain starts in Kharanos (Dun Morogh). Outside entrance: A Visitor to Dun Morogh (13), Farsen's Watch (13), Nip 'Em in the Bud (13), Underground Map (15), Old Ironforge Incursion (16, dungeon)",
   "Alliance inside: Important Heirlooms (15), The Restless Dead (15), The Treaty of Understanding (16)",
   "Neutral: An Ancient Grudge (15, inside, from a neutral ghost)",
   "Horde: none listed (almost all quests are Alliance)"
  ],
  "loot": [
   "Aetherwisp Bracers (cloth) — Faldrim Anvilmar",
   "Ephemeral Choker (neck) — Faldrim Anvilmar",
   "Spiritwraith Drape (back) — Faldrim Anvilmar",
   "Fang of Magmatus (dagger) — Magmatus",
   "Flamefist Grips (leather hands) — Magmatus",
   "Kindlegem Girdle (mail waist) — Magmatus",
   "Golemguard Chest (mail) — Plunder",
   "Golemheart Stave (staff) — Plunder",
   "Treads of the Protector Golem (mail feet) — Plunder",
   "Direhammer Leggings (leather legs) — Durgen Dirgehammer",
   "Durgen's Crescent Axe (axe) — Durgen Dirgehammer",
   "Robes of the Disgraced Thane (cloth chest) — Durgen Dirgehammer"
  ],
  "forever": "NEW in Forever: Ironforge-based instance, Patch 1.60.1 per wiki; exclusive to Forever.",
  "confidence": "medium"
 },
 {
  "key": "lordaeron",
  "name": "Ruins of Lordaeron",
  "lv": "15–22",
  "where": "Uninstanced ruins above the Undercity, Tirisfal Glades, near the city entrance from Brill. Horde: easy from Undercity (zeppelin Orgrimmar to Brill if needed). Alliance: long route via Stormwind ship, Auberdine, Menethil/Southshore, Silverpine, Lordamere Lake swim, around the Undercity exterior.",
  "route": [
   "Unknown; no internal route published."
  ],
  "bosses": [
   {
    "name": "Witherfang",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "The Baron",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "Viktor the Vile",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "The Abandoned",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "Bjork",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "Rath'mael (end boss, a necromancer)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   }
  ],
  "dangers": [
   "Undead/necromancer theme; final boss is a necromancer gathering power (per Blizzard preview)",
   "Witherfang, The Baron, etc. listed in wiki order only; kill order not stated"
  ],
  "quests": [
   "Horde: A Frightened Request (Silverpine), Light's Justice (Undercity), The New Plague (Undercity), The Wrath of Rath'mael (Tirisfal), Unending Torment (5-part chain, starts inside)",
   "Alliance: Abominable Creatures, Bloodied Insignia, Remember That I Love You (2-part) — all start inside",
   "Both: Crest of Lordaeron",
   "Most quests need level 16 to start"
  ],
  "loot": [
   "Atrophic Girdle (mail) — Witherfang",
   "Segmented Spider Leg (staff) — Witherfang",
   "Witherbite Bracers (leather wrist) — Witherfang",
   "Abomination Bones (mail chest) — The Baron",
   "Leftover Abomination Skin (cloth chest) — The Baron",
   "Meathook Slicer (dagger) — The Baron",
   "Bloodied Chestwraps (leather chest) — Viktor the Vile",
   "Vileblood Scimitar (sword) — Viktor the Vile",
   "Vilewalkers (mail feet) — Viktor the Vile",
   "Grip of Fear (mail gloves) — The Abandoned",
   "Rotmender's Leggings (cloth legs) — The Abandoned",
   "Scepter of the Abandoned (mace) — The Abandoned",
   "Bonerust Leggings (mail legs) — Bjork",
   "Corpse Chopper (two-hand axe) — Bjork",
   "Tuskwrap Belt (cloth waist) — Bjork",
   "Coldspire Staff (staff) — Rath'mael",
   "Mirror of Rath'mael (shield) — Rath'mael",
   "Rotmender's Treads (cloth feet) — Rath'mael"
  ],
  "forever": "NEW in Forever: Horde-easy undead dungeon above the Undercity; Patch 1.60.1 per wiki; Forever-exclusive.",
  "confidence": "medium",
  "lvnote": "15–22 (wiki); 15–20 (warcrafttavern and others)"
 },
 {
  "key": "wc",
  "name": "Wailing Caverns",
  "lv": "17–24",
  "where": "The Barrens (Northern Barrens, south of Crossroads, north side of Lushwater Oasis)",
  "route": [
   "Enter the Screaming Gully. Lady Anacondra is near the entrance. Kill her escorts first, then focus her.",
   "Jump into the river and head west. Kresh (a non-aggressive turtle, optional) wanders here. Leave him alone unless you want the kill.",
   "Take the path up from Kresh's pool to the big room. Lord Cobrahn is here. Random mobs wander in during the fight, so pull away from them.",
   "Lord Pythas is in the same big room. He is the toughest Leader of the Fang in the instance, with heavy melee and high HP.",
   "Cross to the main room (east, jump off the cliff). Skum (optional) is here with druids, dreadfangs, and oozes. Clear the druids and dreadfangs first. Deviate Faerie Dragon is a rare, optional spawn.",
   "Big room with Verdan the Everliving. Pull Lord Serpentis away from Verdan, kill nearby adds first, then Serpentis. Do not aggro Verdan.",
   "Return to the entrance, speak with Muyoh to start the Naralex event, and escort him through spawns while he wakes Naralex. Waves of serpents and slimes follow. Mutanus the Devourer arrives right after, so use the gap to recover."
  ],
  "bosses": [
   {
    "name": "Lady Anacondra",
    "abilities": [
     "Lightning Bolt",
     "Sleep"
    ],
    "tank": "Ability list not verified. Pull her escorts into a tight group near the entrance and kill adds before her. Feral Charge any cast she starts."
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
    "tank": "Druid's Slumber is interruptible: Feral Charge or Bash the cast. Poison is a Nature DoT that Cure Poison removes in caster form. He turns into a larger snake at low health, which raises his damage."
   },
   {
    "name": "Lord Pythas",
    "abilities": [
     "Thunderclap",
     "Druid's Slumber",
     "Lightning Bolt",
     "Healing Touch"
    ],
    "tank": "Thunderclap hits everything within 10 yards and slows attack and movement, so keep the group out of its radius. If Druid's Slumber puts you to sleep, he swaps to his next target, so interrupt the cast. Kill the elite druid and the elite Deviate Shambler first and off-tank the shambler."
   },
   {
    "name": "Skum (optional)",
    "abilities": [
     "Chained Bolt"
    ],
    "tank": "Thunder lizard. Clear the Fang druids, dreadfangs, and oozes before engaging. Ability list not verified."
   },
   {
    "name": "Lord Serpentis",
    "abilities": [
     "Lightning Bolt",
     "Sleep"
    ],
    "tank": "Standard melee with less HP than Pythas. Kill nearby mobs first and keep him away from Verdan. Ability list not verified."
   },
   {
    "name": "Mutanus the Devourer",
    "abilities": [
     "Naralex's Nightmare",
     "Terrify",
     "Thundercrack"
    ],
    "tank": "Thundercrack stuns nearby enemies for 2.5 seconds, so expect it on the whole group. Naralex's Nightmare sleeps one target for up to 15 seconds and is interruptible. Terrify fears one target for 4 seconds, so keep threat off the healers during fears. He is immune to Shadow."
   }
  ],
  "dangers": [
   "Druids of the Fang: open with Lightning Bolt, shift to cobra form, heal when hurt, and Druid's Slumber a party member. Interrupt the opener and save an interrupt for the final heal.",
   "Deviate Shamblers can regenerate themselves. Purge (or ignore) and kill them while they channel.",
   "Raptors call for help when almost dead. Pull them in small groups.",
   "Random mobs wander into the big rooms during Cobrahn and Pythas. Watch the perimeter."
  ],
  "quests": [
   "Leaders of the Fang [22D]: Nara Wildmane, Elder Rise, Thunder Bluff."
  ],
  "forever": "Forever level range 17–24 (warcrafttavern). Forever XP rules apply: enemy XP is reduced and dungeon quests give substantially more XP. The walkthrough used for the route mixes in patch 4.1.0 layout changes (the Winding Chasm was removed and Pythas and Skum were moved), so the route may not match vanilla exactly.",
  "confidence": "medium"
 },
 {
  "key": "sfk",
  "name": "Shadowfang Keep",
  "lv": "22–30",
  "where": "Silverpine Forest (The Sepulcher, Silverpine Forest)",
  "route": [
   "Enter the Shadowfang Keep courtyard. Trash here includes Fel Steed, Frantic Geist, Haunted Servitor, Mindless Horror, and Shadow Charger.",
   "Work through the Classic boss listing in order (Rethilgore, Razorclaw the Butcher, Baron Silverlaine, Commander Springvale, Odo the Blindwatcher, Fenrus the Devourer, Wolf Master Nandos, Archmage Arugal). The wiki lists these in order but does not state a kill order. Confirm the route in-game.",
   "Odo, Fenrus, and Nandos are the mid-keep bosses. Clear the worgs and ghouls in the keep between pulls.",
   "Archmage Arugal is the final boss. Pull him after the trash pack around him is cleared."
  ],
  "bosses": [
   {
    "name": "Rethilgore",
    "abilities": [],
    "tank": "Classic ability list not verified (the wiki page covers the later version). Pull him away from the courtyard trash."
   },
   {
    "name": "Razorclaw the Butcher",
    "abilities": [],
    "tank": "Ability list not verified. Pull him clean and keep add packs out of range."
   },
   {
    "name": "Baron Silverlaine",
    "abilities": [
     "Veil of Shadow"
    ],
    "tank": "Ability list not verified. Pull him in isolation."
   },
   {
    "name": "Commander Springvale",
    "abilities": [
     "Holy Light",
     "Hammer of Justice"
    ],
    "tank": "Ability list not verified. Interrupt casts where you can and keep adds on Swipe."
   },
   {
    "name": "Odo the Blindwatcher",
    "abilities": [
     "Howling Rage"
    ],
    "tank": "Ability list not verified. Pull in isolation and use Growl to hold him off the group."
   },
   {
    "name": "Fenrus the Devourer",
    "abilities": [
     "Toxic Saliva"
    ],
    "tank": "Toxic Saliva is a 2-minute Nature DoT (17 damage every 6 seconds) that drains mana to Fenrus. Tank him in a position where the healers keep mana up. Kill him quickly."
   },
   {
    "name": "Wolf Master Nandos",
    "abilities": [],
    "tank": "Ability list not verified. Watch the worgs he brings and Swipe them."
   },
   {
    "name": "Archmage Arugal",
    "abilities": [
     "Arugal's Curse (turns a player into a worgen)",
     "Shadow Port",
     "Void Bolt",
     "Thundershock"
    ],
    "tank": "Ability list not verified (the wiki gives only level 21 and 4,640 HP). Pull after the caster trash is cleared, then Growl and interrupt his casts."
   }
  ],
  "dangers": [
   "Haunted Servitor applies a ghost-haunting curse that needs cleansing right away. Remove Curse handles it from caster form.",
   "Wailing Guardsman casts a short area Silence and Undead Silence can leave a tank without healing. Keep healers out of the radius and pull away from Silence casters.",
   "Tormented Officer curses your skills and Fel Steed stuns nearby enemies. Pull the stunners first.",
   "Shadowfang Worgen pulls: Moonwalker casts an Anti-Magic Shield that blocks magic damage for 20 seconds, Darksoul casts Shadow Word: Pain, and Whitescalp casts Frost Armor and is immune to Ice."
  ],
  "quests": [
   "Deathstalkers in Shadowfang [25D]: High Executor Hadrec, The Sepulcher, Silverpine Forest.",
   "The Book of Ur [26D]: Keeper Bel'dugur, Apothecarium, Undercity.",
   "Arugal Must Die [27D]: Dalar Dawnweaver, The Sepulcher, Silverpine Forest."
  ],
  "forever": "Forever level range 20–26 (warcrafttavern). The Classic wiki lists 18–24. Forever XP rules apply: enemy XP is reduced and dungeon quests give substantially more XP.",
  "confidence": "low",
  "lvnote": "20–26"
 },
 {
  "key": "bfd",
  "name": "Blackfathom Deeps",
  "lv": "24–32",
  "where": "Ashenvale (Zoram Strand, next to Je'neu Sancrea)",
  "route": [
   "Enter from Zoram Strand (Ashenvale). Je'neu Sancrea is at the entrance and gives the Classic quests.",
   "Ghamoo-Ra is the first boss. Clear the entrance trash before engaging.",
   "Lady Sarevess is next. Her Frost Nova freezes nearby enemies, so pull her away from the group.",
   "Gelihast and Lorgus Jett follow in the main halls. Murlocs flee at low HP and return to Gelihast, so keep a snare ready.",
   "Baron Aquanis is the quest boss. Old Serra'kis follows.",
   "Twilight Lord Kelris is in the walled-off cultist chamber. Clear the cultists one at a time from the entrance, then light the four candles on the middle altar one at a time (each lighting summons adds).",
   "Aku'mai is the final boss, reached after Kelris."
  ],
  "bosses": [
   {
    "name": "Ghamoo-Ra",
    "abilities": [
     "Trample"
    ],
    "tank": "Classic ability list not verified (the wiki page covers the later version with Shell Shocker and Static Shock). Confirm in-game before pulling."
   },
   {
    "name": "Lady Sarevess",
    "abilities": [
     "Frost Nova"
    ],
    "tank": "Frost Nova deals about 35 Frost damage and freezes nearby enemies for up to 8 seconds. Damage breaks the freeze, so do not attack frozen adds. Pull her clear of the group."
   },
   {
    "name": "Gelihast",
    "abilities": [
     "Net"
    ],
    "tank": "Ability list not verified. Snare any murloc that flees at low health so it does not return to him."
   },
   {
    "name": "Lorgus Jett",
    "abilities": [
     "Lightning Bolt",
     "Lightning Shield"
    ],
    "tank": "Ability list not verified. Pull in isolation."
   },
   {
    "name": "Baron Aquanis",
    "abilities": [
     "Frostbolt",
     "Frost Nova"
    ],
    "tank": "Quest boss. Ability list not verified."
   },
   {
    "name": "Old Serra'kis",
    "abilities": [
     "Thrash"
    ],
    "tank": "Ability list not verified. Pull in isolation."
   },
   {
    "name": "Twilight Lord Kelris",
    "abilities": [
     "Mind Blast",
     "Sleep"
    ],
    "tank": "Clear the cultists in the summoning chamber from the walled-off entrance, one group at a time. Then light the four candles on the middle altar one at a time, since each candle summons adds. Interrupt the cultists' casts with Feral Charge or Bash."
   },
   {
    "name": "Aku'mai",
    "abilities": [
     "Frenzied Rage",
     "Poison Cloud"
    ],
    "tank": "The wiki says a dedicated tank and healer make the fight relatively easy. Ability list not verified. Confirm in-game."
   }
  ],
  "dangers": [
   "Magic-casting naga packs can deal heavy damage. Interrupt or stun the casters with Feral Charge or Bash and pull them from range.",
   "Twilight Cultists come in groups of 2–3 and grow if wanderers join. Pull casters first and break line of sight so they follow you.",
   "Invisible satyrs cannot be seen until you are close enough for them to aggro.",
   "Murlocs (Gelihast's group) flee at low HP and come back. Snare them."
  ],
  "quests": [
   "The Essence of Aku'Mai [22]: Je'neu Sancrea, Zoram Strand, Ashenvale.",
   "Allegiance to the Old Gods [22]: Je'neu Sancrea, Zoram Strand, Ashenvale.",
   "Deep in the Deeps [26]: Zeya, inside Blackfathom Deeps."
  ],
  "forever": "Forever level range 22–28 (warcrafttavern). The Classic wiki lists 24–32. Forever XP rules apply: enemy XP is reduced and dungeon quests give substantially more XP.",
  "confidence": "low",
  "lvnote": "22–28"
 },
 {
  "key": "wetlands",
  "name": "Excavation Site: Wetlands",
  "lv": "24–29",
  "where": "Wetlands, top of Whelgar's Excavation Site. Summoning stone and instance line at 53.4, 65.3. Alliance: Menethil Harbor or Loch Modan route. Horde: via Hillsbrad Foothills, Arathi Highlands, Thandol Span.",
  "route": [
   "Unknown internal route.",
   "Final boss is level 31; do not enter early (per wiki)."
  ],
  "bosses": [
   {
    "name": "Saltspine",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "Shadetooth",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   },
   {
    "name": "Relic Guardian (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   }
  ],
  "dangers": [
   "Titan constructs and dangerous wildlife (per Blizzard preview)",
   "Final boss at level 31; entering early is discouraged"
  ],
  "quests": [
   "Alliance (start Menethil Harbor, Greenwarden's Grove, Lakeshire): Daily Delivery → Young Crocolisk Skins → Highland Hides and Apprentice's Duties; Horrors in the Highland; Lost in the Thicket Things → Heartwoven; Lost Relic Carry → Prehistoric Prism; Songblade Search → Fallen in the Fen",
   "Horde (start Orgrimmar or Hammerfall): Changing Tastes; Elder Knowledge → Earthen Echo; Dragonmaw Rumors → Open the Maw",
   "Both: one quest-starting item from the final boss (Titan Relic)"
  ],
  "loot": [
   "Glinteye Slippers (cloth feet) — Saltspine",
   "Saltscale Girdle (mail waist) — Saltspine",
   "Supple Bellyskin Leggings (leather legs) — Saltspine",
   "Garb of Florid Feathers (leather chest) — Shadetooth",
   "Raptorclaw Greaves (mail feet) — Shadetooth",
   "Raptor's Gaze (off-hand) — Shadetooth",
   "Golemsight Long Gun (gun) — Relic Guardian",
   "Reliquary Mantle (mail shoulder) — Relic Guardian",
   "Ring of Power Regulation (finger) — Relic Guardian",
   "Blueprint: Rock Garden (campsite recipe) — Relic Guardian"
  ],
  "forever": "NEW in Forever: Wetlands titan-ruin dungeon with a level-31 final boss; Patch 1.60.1 per wiki; Forever-exclusive.",
  "confidence": "medium",
  "lvnote": "24–29 (wiki template, warcrafttavern); 26–32 (wiki page; quests start at 24; final boss lv 31)"
 },
 {
  "key": "dalaran",
  "name": "City of Dalaran",
  "lv": "28–33",
  "where": "Western side of Dalaran, Alterac Mountains: sewer grate on the west wall (8, 61). Needs a Dalaran Sewer Key (from Image of Archmage Modera, Silverpine Forest) to pass the wards. Requires attunement; Kirin Tor trust. Both factions.",
  "route": [
   "Unknown internal route. Enter via sewers with a Dalaran Sewer Key.",
   "Multiple paths and encounters (per Blizzard preview)."
  ],
  "bosses": [
   {
    "name": "Atrexis the Grave Knight",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Arcane Anomaly",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Arcanic Enigma",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Unstable Sentinel",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Mana Devourer",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Fel Ancient",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Lyn the Ignored",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Shade of the Archmage (end boss)",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Verify in-game."
   }
  ],
  "dangers": [
   "Backfiring enchantments, wild constructs, magical energy (per Blizzard preview)",
   "Ward/key gating at entrance"
  ],
  "quests": [
   "Alliance: start Stormwind and Southshore. An Alarming Request (33) → Heart of Disruption (33D) → Friend of the Kirin Tor (33); Power Overwhelming (33D); Starving Arcane (33D); A Green Sample (33D)",
   "Horde: start Undercity and Tarren Mill. Prison Break In (34), Key to the City (33), Dalaran Patrols (35), Blood in the Streets (34), Heart of Disruption (33D), Shrewd Negotiations (33); dungeon: Opportunistic Education (33D), Source of Power (33D), The Grave Knight (33D)"
  ],
  "loot": [
   "Bonebinder's Signet, Gravespike Repeater, Graveweave Bindings — Atrexis the Grave Knight",
   "Ephemeral Grips, Mana-Warped Chain Shirt, Runemender's Seal — Arcane Anomaly",
   "Drape of Shifting Energy, Violet Sorcerer's Robes, Wand of Mana Concentration — Arcanic Enigma",
   "Guardian's Dualblade, Refractory Scaleguards, Unstable Crystalline Shoulderpads, Blueprint: Spinning Wheel — Unstable Sentinel",
   "Manascale Treads, Sliterwrap Girdle, Spine of the Devourer — Mana Devourer",
   "Blightleaf Robe, Felbough Arm, Garb of Fallen Felbark — Fel Ancient",
   "Bonepile Gaze, Cartilage Shapers, Tendonscraper Dagger — Lyn the Ignored",
   "Archmagister's Faceted Pendant, Ponderous Orb, Violet Sorcerer's Mantle, Blueprint: Arcane Salvager — Shade of the Archmage"
  ],
  "forever": "NEW in Forever: Alterac Mountains Dalaran dungeon behind an attunement; multi-path with 8 listed bosses; Patch 1.60.1 per wiki page.",
  "confidence": "medium",
  "lvnote": "28–33 (list); 28–34 (wiki page); 20–35 (one text source)"
 },
 {
  "key": "rfk",
  "name": "Razorfen Kraul",
  "lv": "29–38",
  "where": "The Barrens (Razorfen Kraul entrance, Southern Barrens, near Thunder Bluff)",
  "route": [
   "Enter the Razorfen Kraul entrance in the Barrens. Pick up the Horde quests from Thunder Bluff and Undercity before going in.",
   "Roogug is the first boss, then Aggem Thorncurse, Death Speaker Jargba, and Overlord Ramtusk, in that order on the Classic wiki listing.",
   "Earthcaller Halmgar is a rare spawn near the Ramtusk area. Optional.",
   "Agathelos the Raging is the next major boss.",
   "The Blind Hunter is a rare spawn. Optional.",
   "Charlga Razorflank is the final boss. Pull her after clearing the boars and quilboar casters around her."
  ],
  "bosses": [
   {
    "name": "Roogug",
    "abilities": [],
    "tank": "Classic ability list not verified (the wiki page covers the later version). Confirm in-game before pulling."
   },
   {
    "name": "Aggem Thorncurse",
    "abilities": [
     "Chain Heal",
     "Summon Boar"
    ],
    "tank": "Ability list not verified. Pull in isolation from the quilboar packs."
   },
   {
    "name": "Death Speaker Jargba",
    "abilities": [
     "Dominate Mind",
     "Shadow Bolt"
    ],
    "tank": "Ability list not verified. Interrupt the Death's Head casters with Feral Charge or Bash."
   },
   {
    "name": "Overlord Ramtusk",
    "abilities": [],
    "tank": "Ability list not verified. Pull in isolation and keep the boars off healers."
   },
   {
    "name": "Earthcaller Halmgar (rare)",
    "abilities": [],
    "tank": "Optional rare. Ability list not verified."
   },
   {
    "name": "Agathelos the Raging",
    "abilities": [
     "Rampage",
     "Enrage"
    ],
    "tank": "Ability list not verified. Pull in isolation."
   },
   {
    "name": "Blind Hunter (rare)",
    "abilities": [],
    "tank": "Optional rare. Ability list not verified."
   },
   {
    "name": "Charlga Razorflank",
    "abilities": [
     "Chain Bolt",
     "Purity",
     "Renew"
    ],
    "tank": "Final boss. The Classic ability list was not verified (the wiki page covers the later version with Venomous Discharge and Elemental Binding). Confirm in-game."
   }
  ],
  "dangers": [
   "Death's Head Tribe casters (Priests, Adepts, Seers): interrupt with Feral Charge or Bash and pull them out of the quilboar packs.",
   "Razorfen Tribe quilboar packs (Servitors, Warriors, Quilguards, Geomancers, Dustweavers, Beast Trainers): pull one pack at a time and use Swipe on the group.",
   "Kraul Bats and Greater Kraul Bats come in groups. Pull them away from the main packs.",
   "Agam'ar boars: keep them off healers. No mechanic notes were found in research."
  ],
  "quests": [
   "Going, Going, Guano! [33]: Master Apothecary Faranell, Apothecarium, Undercity.",
   "A Vengeful Fate [34]: Auld Stonespire, Thunder Bluff."
  ],
  "forever": "Forever level range 29–38 (warcrafttavern). The Classic wiki lists 29–38 as well. Forever XP rules apply: enemy XP is reduced and dungeon quests give substantially more XP.",
  "confidence": "low"
 },
 {
  "key": "gnomer",
  "name": "Gnomeregan",
  "lv": "29–38",
  "where": "Dun Morogh (Gnomeregan entrance)",
  "route": [
   "Enter Gnomeregan in Dun Morogh. Grubbis is the optional first boss.",
   "Viscous Fallout is the second boss.",
   "Electrocutioner 6000 is the third boss. A boss drops the Workshop Key, which opens the side entrance and skips the first few bosses. Sources do not agree on which boss drops it, so check in-game.",
   "Crowd Pummeler 9-60 is the fourth boss.",
   "Mekgineer Thermaplugg is the final boss.",
   "Dark Iron Ambassador is a rare elite (level 33) and is optional."
  ],
  "bosses": [
   {
    "name": "Grubbis",
    "abilities": [],
    "tank": "Optional first boss (level 32 elite humanoid). Ability list not verified."
   },
   {
    "name": "Viscous Fallout",
    "abilities": [],
    "tank": "Second boss (level 30 elite elemental). Ability list not verified."
   },
   {
    "name": "Electrocutioner 6000",
    "abilities": [
     "Chain Lightning",
     "Shock"
    ],
    "tank": "Third boss (level 32 elite mechanical). Ability list not verified."
   },
   {
    "name": "Crowd Pummeler 9-60",
    "abilities": [
     "Crowd Pummel (AoE knockback)",
     "Mighty Blow"
    ],
    "tank": "Fourth boss. Ability list not verified."
   },
   {
    "name": "Mekgineer Thermaplugg",
    "abilities": [
     "Knock Away",
     "Walking Bombs from the wall vents"
    ],
    "tank": "Final boss. Ability list not verified. The wiki points to a separate tactics page for the Gnomeregan fight."
   }
  ],
  "dangers": [
   "Dark Iron Ambassador is a rare level 33 elite humanoid. Treat any unexpected elite as a rare spawn.",
   "No trash pack mechanics were verified in research."
  ],
  "quests": [],
  "forever": "Forever level range 29–38 per warcrafttavern. Zockify lists recommended level 25 and minimum 19 (Classic-style). Cross-faction is allowed per the Classic wiki, and Horde players can reach the dungeon through a short teleport quest series (quest names not verified). Forever XP and loot rules apply.",
  "confidence": "low"
 },
 {
  "key": "smgy",
  "name": "Scarlet Monastery: Graveyard",
  "lv": "30–37",
  "where": "Tirisfal Glades",
  "route": [
   "Enter through the Graveyard wing, the leftmost portal in the Scarlet Monastery entrance hall.",
   "Pull Interrogator Vishas's Scarlet Crusade adds first and hold them on the bear, then bring Vishas in.",
   "Clear graveyard trash. The rares Ironspine, Fallen Champion and Azshir the Sleepless spawn in this wing; their spawn points and order were not verified.",
   "Pull Ironspine and Azshir away from the group and away from poison clouds and healers before engaging.",
   "Continue to the crypt stairs and clear the crypt trash.",
   "Kill Bloodmage Thalnos at the bottom of the crypt. Scorn only spawns during the Scourge Invasion event after Thalnos dies."
  ],
  "bosses": [
   {
    "name": "Interrogator Vishas",
    "abilities": [
     "Immolate",
     "Shadow Word: Pain"
    ],
    "tank": "Pull the Scarlet Crusade adds out and hold them with Swipe. Immolate and Shadow Word: Pain are damage-over-time effects, so keep Lacerate and Swipe up to hold threat on Vishas."
   },
   {
    "name": "Ironspine (rare)",
    "abilities": [
     "Curse of Weakness (decursable)",
     "poison clouds"
    ],
    "tank": "Pull him away from the group and out of the poison clouds. Ask healers or DPS to remove Curse of Weakness; a druid can only remove curses in caster form, so switch forms if you need to."
   },
   {
    "name": "Fallen Champion (rare)",
    "abilities": [
     "Cleave"
    ],
    "tank": "Tank him facing away from the group so Cleave hits nothing else. It is a tank-and-spank fight."
   },
   {
    "name": "Azshir the Sleepless (rare)",
    "abilities": [
     "Soul Siphon",
     "Call of the Grave",
     "Fear"
    ],
    "tank": "Clear the adds before pulling him and keep him off healers and ranged DPS. Use Bash on Soul Siphon when it is free. Watch for Fear, which can drop you away from the group."
   },
   {
    "name": "Bloodmage Thalnos",
    "abilities": [
     "Flame Spike",
     "Shadow Bolt",
     "Flame Shock"
    ],
    "tank": "Tank him in the crypt with threat maximized. Shadow Bolt cannot be interrupted, so do not spend Bash on it. Melee at low health should step back when he starts Flame Spike, and ranged DPS should stay clear of the fire columns."
   }
  ],
  "dangers": [
   "Scarlet Crusade adds around Vishas must die before the boss, or they overrun the group.",
   "Poison clouds from Ironspine damage anyone standing in them.",
   "Thalnos's Flame Spike places fire columns under the group. Melee should step out when it begins.",
   "Scorn appears only during the Scourge Invasion event and pins you against a wall with Lich Slap knockback."
  ],
  "quests": [
   "Vorrel's Revenge (level 25, shareable). Start from Vorrel Sengutz inside the graveyard next to Vishas.",
   "Hearts of Zeal (level 30 per one source, 33 per another). Start from Master Apothecary Faranell in the Undercity Apothecarium. Requires Going, Going, Guano! from Razorfen Kraul."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "28–38"
 },
 {
  "key": "sml",
  "name": "Scarlet Monastery: Library",
  "lv": "33–40",
  "where": "Tirisfal Glades",
  "route": [
   "Enter the Library wing from the Scarlet Monastery entrance hall.",
   "Clear Huntsman's Cloister trash and pull Houndmaster Loksey with his three Scarlet Tracking Hounds.",
   "Move through the library halls to the Athenaeum.",
   "Clear the Athenaeum trash.",
   "Kill Arcanist Doan. His strongbox drops a Scarlet Key."
  ],
  "bosses": [
   {
    "name": "Houndmaster Loksey",
    "abilities": [
     "Scarlet Tracking Hound (3 pets)"
    ],
    "tank": "Tank Loksey in the Cloister so his three hounds come into your Swipe range. Ability details were not verified, so confirm in game."
   },
   {
    "name": "Arcanist Doan",
    "abilities": [
     "Detonation",
     "Polymorph",
     "Silence",
     "Arcane Bubble"
    ],
    "tank": "Feral Charge or Bash to interrupt Detonation, a 5-second cast that deals heavy fire damage within 30 yards and is cast at half health right after Arcane Bubble. Polymorph and Silence target casters, so keep the group spread. Doan is immune for the 8 seconds of Arcane Bubble, so hold position and do not chase."
   }
  ],
  "dangers": [
   "Doan's Detonation hits the whole group. Interrupt it or have the group out of range.",
   "Doan's Polymorph and Silence can take out healers and casters mid-fight.",
   "Loksey's hounds run ahead of him if the pull is loose. Pull them together."
  ],
  "quests": [
   "The Right Way (Huntsman Markhor, Revantusk Village, The Hinterlands).",
   "Stripping Their Defenses (Dark Ranger Velonara, inside the Library).",
   "Adventurers Wanted: Scarlet Monastery Library (Warchief's Command Board in any capital)."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "32–36"
 },
 {
  "key": "sma",
  "name": "Scarlet Monastery: Armory",
  "lv": "35–42",
  "where": "Tirisfal Glades",
  "route": [
   "Enter the Armory wing from the Scarlet Monastery entrance hall.",
   "Clear Training Grounds trash.",
   "Clear Footman's Armory and Crusader's Armory trash.",
   "Clear the Hall of Champions trash.",
   "Kill Herod in the Hall of Champions. He is the only boss in this wing and has a Scarlet Tracking Hound that follows him."
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
    "tank": "Pull him to a corridor away from the group. Rushing Charge opens with a large first hit after the charge, so pre-position and use Bash or Feral Charge if he goes for a caster. Whirlwind spins for 10 seconds and makes him immune to magic, so keep the group out of melee range and do not spend cooldowns on it."
   }
  ],
  "dangers": [
   "Scarlet Myrmidons hit hard and enrage at low health. Tank them away from the group and use Growl.",
   "Scarlet Conjurors cast Fireball and summon a Fire Elemental pet.",
   "Scarlet Evokers cast Flamestrike and Fire Shield. Kill them early."
  ],
  "quests": [
   "Adventurers Wanted: Scarlet Monastery Armory (Horde, level 34, from the Warchief's Command Board in any capital).",
   "Moving Things Along (level 35, Mystic Yayo'jin, Revantusk Village, The Hinterlands).",
   "Stripping Their Offense (level 36, Dark Ranger Velonara, inside the Armory)."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "32–42 (intended 35–37)"
 },
 {
  "key": "drowned",
  "name": "The Drowned City",
  "lv": "35–40",
  "where": "Underwater off the coast of Stranglethorn Vale, west of Grom'gol. Entrance around 21.4, 27.9. Swim past The Vile Reef to the Sunken Hollow near the water-elemental island; look for a cavern with a large tablet. Faction access not stated.",
  "route": [
   "Swim to entrance at 21.4, 27.9 (past The Vile Reef, Sunken Hollow).",
   "Enter cavern; climb hill to main ruins.",
   "Central area with a pool; side sections hold additional bosses."
  ],
  "bosses": [
   {
    "name": "Zul'Alai",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Var'Taka",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Zin'aka",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Captain Dreadrise",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown. More bosses likely."
   }
  ],
  "dangers": [
   "Open-air/underwater dungeon; storm builds as mist and rain increase (per Blizzard preview)",
   "Trolls and naga roam the city (per Blizzard preview)"
  ],
  "quests": [
   "Alliance (beta): Magics of the Drowned City; Take Two With Water",
   "Horde (beta): Ancient Gurubashi Idol; The Drowned City; The Only Good Brinescale…",
   "More quests possibly above level 30 (unverified)"
  ],
  "loot": [
   "Unknown: no drops published"
  ],
  "forever": "NEW in Forever: underwater troll/naga ruin off Stranglethorn Vale; quest content seen in beta.",
  "confidence": "low",
  "lvnote": "35–40 (most sources); 35–50 (one source)"
 },
 {
  "key": "smc",
  "name": "Scarlet Monastery: Cathedral",
  "lv": "36–45",
  "where": "Tirisfal Glades",
  "route": [
   "Enter the Cathedral from the Scarlet Monastery entrance hall.",
   "Clear the Cathedral trash and kill High Inquisitor Fairbanks mid-wing.",
   "Clear the remaining trash to the Crusader's Chapel.",
   "Pull Scarlet Commander Mograine. High Inquisitor Whitemane comes through a previously locked door after Mograine dies and resurrects him."
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
    "tank": "Fear drops the bear away from the group, so keep Bash for his casts. Do not break Sleep on the group with damage. Power Word: Shield absorbs damage, so burn through it in the first seconds of the fight."
   },
   {
    "name": "Scarlet Commander Mograine",
    "abilities": [
     "Crusader Strike",
     "Divine Shield",
     "Hammer of Justice"
    ],
    "tank": "Tank him in the chapel with Growl and Swipe. Divine Shield makes him immune for 12 seconds, so hold threat and do not burn cooldowns until it fades. Hammer of Justice is a stun, so keep the group out of melee range."
   },
   {
    "name": "High Inquisitor Whitemane",
    "abilities": [
     "Heal",
     "Power Word: Shield",
     "Dominate Mind"
    ],
    "tank": "Mograine dies first, and Whitemane comes through and resurrects him. Bash her casts, and kill her quickly so Mograine cannot be healed back to full. Dominate Mind is a mind-control on a player; a priest or paladin in the group needs to handle it, since druids cannot dispel magic."
   }
  ],
  "dangers": [
   "Fairbanks's Fear can drop the bear or a healer into the wrong group.",
   "Mograine's Hammer of Justice stuns the tank and anyone nearby.",
   "Whitemane's Dominate Mind takes a player out of the fight until it is dispelled or the player is killed."
  ],
  "quests": [
   "Hearts of Zeal (level 33, Master Apothecary Faranell, Undercity Apothecarium).",
   "Enemies Abroad (level 38, Nazeer Bloodpike).",
   "Battle for the Scarlet Monastery (level 39, Dark Ranger Velonara, inside the Cathedral)."
  ],
  "forever": "",
  "confidence": "medium",
  "lvnote": "36–41 (infobox 35–45)"
 },
 {
  "key": "rfd",
  "name": "Razorfen Downs",
  "lv": "37–46",
  "where": "Thousand Needles, Kalimdor",
  "route": [
   "Enter through the arched gap in the outer dome in Thousand Needles.",
   "Clear the Caller's Chamber and kill Aarux.",
   "Clear the Bone Pile and kill Mordresh Fire Eye.",
   "Clear the Spiral of Thorns, then kill Mushlump and Death Speaker Blackthorn.",
   "Kill Amnennar the Coldbringer last at the end of the Spiral."
  ],
  "bosses": [
   {
    "name": "Aarux",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game before pulling."
   },
   {
    "name": "Mordresh Fire Eye",
    "abilities": [
     "Fireball",
     "Fire Nova"
    ],
    "tank": "Ability names were not verified. Check in game before pulling."
   },
   {
    "name": "Mushlump",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game before pulling."
   },
   {
    "name": "Death Speaker Blackthorn",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game before pulling."
   },
   {
    "name": "Amnennar the Coldbringer",
    "abilities": [
     "Frozen Bomb",
     "Soul Leech"
    ],
    "tank": "Frozen Bomb places a frost area under the group, so move out of it. Soul Leech drains health and heals Amnennar, so keep him on the bear and kill him quickly."
   }
  ],
  "dangers": [
   "Amnennar's Frozen Bomb deals 250 Frost damage in its area.",
   "Amnennar's Soul Leech drains health and heals him.",
   "Trash packs in the Caller's Chamber and Bone Pile were not verified. Scout them before pulling."
  ],
  "quests": [
   "Looming Threat (level 15–30, Horde giver Kanati Greycloud, Thousand Needles)."
  ],
  "forever": "Beta notes listed Razorfen Downs at level 25+. Not confirmed for 1.60.1.",
  "confidence": "low",
  "lvnote": "15–30 (current scaling)"
 },
 {
  "key": "kroldok",
  "name": "Krol'dok Stronghold",
  "lv": "40–45",
  "where": "Riverglades. Entrance in a cave west of the fortress gates at 37.5, 37.5 (preliminary). Follow the ogre outrunners' trail. Faction access not stated.",
  "route": [
   "Enter cave west of gates (37.5, 37.5).",
   "Path winds between crude buildings, goes uphill, crosses a large wooden bridge, ends at largest buildings at apex (preliminary)."
  ],
  "bosses": [
   {
    "name": "Overlord Mugg",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: only boss known (from Legacy challenge). No ability data."
   }
  ],
  "dangers": [
   "Guarded interior passages and nighttime chanting (per Blizzard preview)"
  ],
  "quests": [
   "Unknown. Datamined Krol'dok Moulding and Kroul'dok Moulding appear to start quests; faction unknown."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: ogre stronghold in Riverglades; level range corrected to 40–45.",
  "confidence": "low",
  "lvnote": "40–45 (corrected by Blizzard; older sources say 40–55)"
 },
 {
  "key": "uld",
  "name": "Uldaman",
  "lv": "41–51",
  "where": "Badlands",
  "route": [
   "Enter at the Maker's Terrace in the Badlands, west of the old Loch Modan entrance.",
   "Kill Revelosh in the Hall of the Keepers.",
   "Clear Dig Two and kill The Lost Dwarves, then go to the Map Chamber for Ironaya.",
   "Use the side entrance from the cave between Fuselight and the Tomb of the Watchers to reach Echomok Cavern and kill Obsidian Sentinel.",
   "Clear Temple Hall for the Ancient Stone Keeper, then Dig Three for Galgann Firehammer.",
   "Clear the Stone Vault for Grimlok and Jadespine Basilisks.",
   "Kill Archaedas last in Khaz'goroth's Seat. Earthen Custodians, Guardians, Hallshapers and Vault Warders guard him.",
   "Archaedas: click the altar to wake him. Tank him in the center while DPS kills Earthen Guardians as they wake. Near low health he wakes the Vault Warders, so save Barkskin and Challenging Roar for that phase."
  ],
  "bosses": [
   {
    "name": "Revelosh",
    "abilities": [
     "Chain Lightning",
     "Lightning Bolt"
    ],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "The Lost Dwarves",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Ironaya",
    "abilities": [
     "Arcing Smash",
     "Knock Away",
     "War Stomp"
    ],
    "tank": "Knock Away pushes the target back, and War Stomp stuns for 4 seconds. Pick a position where the knockback does not push you into the group or into the Map Chamber's edges, and expect the stun to take a few seconds."
   },
   {
    "name": "Obsidian Sentinel",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Ancient Stone Keeper",
    "abilities": [
     "Sand Storms"
    ],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Galgann Firehammer",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Grimlok",
    "abilities": [
     "Lightning Bolt",
     "Shrink",
     "Bloodlust"
    ],
    "tank": "Pull Grimlok with the Jadespine Basilisks in view and gather them into your Swipe range. Ability names were not verified."
   },
   {
    "name": "Archaedas",
    "abilities": [
     "Ground Tremor",
     "Awaken Earthen Guardians",
     "Awaken Vault Warders"
    ],
    "tank": "Pull the Earthen Custodians, Guardians, Hallshapers and Vault Warders away from the group before Archaedas. Ability names were not verified."
   }
  ],
  "dangers": [
   "Ironaya's War Stomp stuns for 4 seconds and her Knock Away can push a tank out of position.",
   "Grimlok's Jadespine Basilisks pack the Stone Vault. Gather them together before the boss pull.",
   "The Archaedas guard pack (Earthen Custodians, Guardians, Hallshapers, Vault Warders) is large. Pull it in sections."
  ],
  "quests": [
   "Badlands Reagent Run (Jarkal Mossmeld, Kargath).",
   "Uldaman Reagent Run (Patrick Garrett, Undercity).",
   "Necklace Recovery (Dran Droffers, Orgrimmar).",
   "Translating the Journal (Dran Droffers, Orgrimmar)."
  ],
  "forever": "Listed as changed in Forever by games.gg. Details not found.",
  "confidence": "low",
  "lvnote": "15–30 (current scaling)"
 },
 {
  "key": "zf",
  "name": "Zul'Farrak",
  "lv": "44–54",
  "where": "Tanaris",
  "route": [
   "Enter at Sandsorrow Watch in northwestern Tanaris through the outer dome.",
   "Kill Witch Doctor Zum'rah. Destroy the Ward of Zum'rah quickly, since it keeps summoning skeletons.",
   "Kill Gahz'rilla in the pool. He has been present permanently since patch 3.0.8, so there is no summoning gong.",
   "Clear the trash and kill Antu'sul and Theka the Martyr along the way.",
   "Pyramid Battle: kill Nekrum Gutchewer. Open graves one at a time, or the zombies overrun the group.",
   "Kill Chief Ukorz Sandscalp last. He is only reachable after Nekrum at the end of the Pyramid Battle.",
   "Pyramid stairs event: free Sergeant Bly's group from the cages, then hold the TOP of the stairs as troll waves climb. Swipe + Demoralizing Roar, Challenging Roar if the healer gets swarmed. Nekrum and Sezz'ziz come down at the end."
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
    "tank": "Interrupt Healing Wave and Shadow Bolt Volley with Bash or Feral Charge. Kill the Ward of Zum'rah when it spawns, since it creates a Skeleton of Zum'rah every 5 seconds for 20 seconds."
   },
   {
    "name": "Gahz'rilla",
    "abilities": [
     "Icicle",
     "Freeze Solid",
     "Gahz'rilla Slam"
    ],
    "tank": "Freeze Solid is a magic stun with frost damage over 6 seconds, so you cannot break it. Gahz'rilla Slam knocks back nearby enemies, so tank him away from the pool edge."
   },
   {
    "name": "Antu'sul",
    "abilities": [
     "Healing Ward",
     "Earthgrab Totem",
     "Summons Sul'lithuz basilisks"
    ],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Theka the Martyr",
    "abilities": [],
    "tank": "Ability names were not verified. Check in game."
   },
   {
    "name": "Nekrum Gutchewer",
    "abilities": [],
    "tank": "Pull him away from the zombies in the Pyramid Battle. Ability names were not verified."
   },
   {
    "name": "Chief Ukorz Sandscalp",
    "abilities": [
     "Cleave",
     "Wide Slash",
     "Enrage"
    ],
    "tank": "Final boss, reachable only after Nekrum. Ability names were not verified."
   }
  ],
  "dangers": [
   "Opening too many graves in the Pyramid Battle releases zombies that can overrun the group.",
   "Skeletons from Zum'rah's Ward add damage if the Ward is left up.",
   "Gahz'rilla's Slam knocks back nearby enemies at the pool edge."
  ],
  "quests": [
   "The Spider God (level 45, daily, Master Gadrin, Sen'jin Village, Durotar).",
   "Consult Master Gadrin (level 45, group, Master Gadrin, Sen'jin Village, Durotar)."
  ],
  "forever": "Listed as changed in Forever by games.gg. Details not found.",
  "confidence": "low",
  "lvnote": "15–30 (current scaling)"
 },
 {
  "key": "mara",
  "name": "Maraudon (Orange, Purple, Inner)",
  "lv": "46–55",
  "where": "Desolace (Valley of Spears)",
  "route": [
   "Enter from the portals in the Valley of Spears and go through the tunnel to the Zaetar's Choice crossroads.",
   "Orange wing (Foulspore Cavern): kill Noxxion, then Razorlash.",
   "Purple wing (Wicked Grotto): pull the two doorway Putridus Shadowstalkers without aggroing Lord Vyletongue, then pull him.",
   "Tinkerer Gizlock is past Zaetar's Grave on the Purple side. Optional.",
   "Center: kill Celebras, reached from either side, then Landslide in the central cavern.",
   "Princess Theradras in Earth Song Falls, reached through Earth Song Gate. Rotgrip is a bonus crocolisk behind the waterfall after her."
  ],
  "bosses": [
   {
    "name": "Noxxion",
    "abilities": [
     "Toxic Volley",
     "Uppercut",
     "Splits into Noxxion's Spawns"
    ],
    "tank": "Splits into elementals partway through and reforms after they die. Ability names were not verified."
   },
   {
    "name": "Razorlash",
    "abilities": [
     "Puncture",
     "Cleave"
    ],
    "tank": "Plant knockback is the main hazard in this wing. Ability names were not verified."
   },
   {
    "name": "Lord Vyletongue",
    "abilities": [
     "Multi-Shot",
     "Smoke Bomb",
     "Blink"
    ],
    "tank": "Smoke Bomb stuns nearby enemies for 4 seconds, so keep the group away from it. Blink teleports him up to 20 yards, so re-engage quickly. The two linked Shadowstalkers in his room can be pulled with him."
   },
   {
    "name": "Celebras",
    "abilities": [
     "Entangling Roots",
     "Wrath",
     "Twisted Tranquility"
    ],
    "tank": "He keeps summoning non-elites, so AoE is essential. No more mobs spawn once he dies. Ability names were not verified."
   },
   {
    "name": "Landslide",
    "abilities": [
     "Knock Away",
     "Trample",
     "Landslide (summons adds)"
    ],
    "tank": "He summons rock fellows that die when he does, so kill him first. He occasionally stuns with an AoE."
   },
   {
    "name": "Princess Theradras",
    "abilities": [
     "Fear"
    ],
    "tank": "She fears melee and has a large ranged AoE. Stay off the edges, where you can be knocked into the river. Shadow resistance helps the tank against her fear."
   }
  ],
  "dangers": [
   "Creeping Sludge oozes in Foulspore Cavern hit hard and slow. Kite them with ranged DPS.",
   "Lord Vyletongue's room has linked Shadowstalkers. A warlock enslave bug can pull them without aggroing him.",
   "Earth Song Falls edges can knock you into the river during Princess Theradras's fight."
  ],
  "quests": [
   "Vyletongue Corruption (level 47, Vark Battlescar, Shadowprey Village, Desolace). Source is Cataclysm-era, so verify.",
   "Corruption of Earth and Seed (level 51 daily, Selendra, Sar'theris Strand, Desolace). Source is Cataclysm-era, so verify."
  ],
  "forever": "",
  "confidence": "low",
  "lvnote": "10–30 (current scaling)"
 },
 {
  "key": "alcaz",
  "name": "Alcaz Island Prison",
  "lv": "48–53",
  "where": "Basement of a large building on Alcaz Island, off Dustwallow Marsh (portal around 75, 15). Take the hill path left from the dock. Faction access not stated.",
  "route": [
   "Unknown. Guide says the interior has not been seen."
  ],
  "bosses": [
   {
    "name": "Blazeroar",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: only boss known (from Legacy challenge). No ability data."
   }
  ],
  "dangers": [
   "Defias Brotherhood vs naga conflict (per Blizzard preview)",
   "King Varian Wrynn named as a possible prisoner (rumor, unconfirmed)"
  ],
  "quests": [
   "Unknown: no dungeon quests published. Original Alcaz Island quests are not prison quests."
  ],
  "loot": [
   "Unknown: no drops recorded"
  ],
  "forever": "NEW in Forever: prison on Alcaz Island, Dustwallow Marsh; Patch 1.60.1 per wiki listing.",
  "confidence": "low",
  "lvnote": "48–53 (wiki list shows typo '48-43')"
 },
 {
  "key": "st",
  "name": "Sunken Temple",
  "lv": "50–56",
  "where": "Swamp of Sorrows",
  "route": [
   "Enter through the lake center: swim across the Broken Hall, through the Hall of Masks, south exit, left at the fork, past the Den of the Caller (take the mask doorway, not the tablet one), down the Hall of Ritual to the Hall of Bones.",
   "Pull Atal'alarion first from the Pit of Refuse on the entrance level. He is summoned by clicking six shrines in order.",
   "Kill all six troll mini-bosses (Loro, Hukku, Zul'lor, Zolo, Mijan, Gasher). All six must die before Jammal'an can be reached.",
   "Jammal'an the Prophet, with Ogom the Wretched.",
   "Weaver and Dreamscythe spawn when Jammal'an dies. Hazzas and Morphaz spawn after those two die.",
   "Clear all dragonkin, then Shade of Eranikus. He does not need a summon.",
   "Avatar of Hakkar is optional and last. Kill four Hakkari Bloodkeepers and extinguish four braziers. Needs the Ancient Egg questline from Tanaris."
  ],
  "bosses": [
   {
    "name": "Atal'alarion",
    "abilities": [
     "Sweeping Slam (frontal cone)"
    ],
    "tank": "Pull to the center and wall him so the frontal cone hits only the tank. Sweeping Slam is the only ability the source names, so expect limited detail on the rest of the fight. Move him back to the wall if he drifts."
   },
   {
    "name": "Jammal'an the Prophet",
    "abilities": [
     "Flamestrike",
     "Hex of Jammal'an",
     "Shadow Word: Pain",
     "Curse of Weakness"
    ],
    "tank": "Separate Jammal'an from Ogom and the group, then Growl and hold him in a spot the group can spread out from. Use Feral Charge or Bash on casts. Hex of Jammal'an turns a player into a Berserker, so the group needs to spread out."
   },
   {
    "name": "Weaver and Dreamscythe",
    "abilities": [
     "Frontal cone (unnamed in source)",
     "Knockback (unnamed in source)"
    ],
    "tank": "Ranged pull so you get one drake at a time. Tank against a wall facing away from the group. Swipe for the adds."
   },
   {
    "name": "Hazzas and Morphaz",
    "abilities": [
     "Frontal cone (unnamed in source)",
     "Knockback (unnamed in source)"
    ],
    "tank": "These two cannot be pulled separately. Pull into the hallway and tank against a wall facing away from the group. Use Frenzied Regeneration if both hit the bear together."
   },
   {
    "name": "Shade of Eranikus",
    "abilities": [
     "Corrosive Acid Breath",
     "Deep Slumber (hits the highest threat target)",
     "War Stomp"
    ],
    "tank": "Face him away from the group. Deep Slumber targets the highest threat, so swap to a second tank or pet until the first Deep Slumber lands, then take it back. Clear the dragonkin first; Grounding Totem cancels Deep Slumber."
   },
   {
    "name": "Avatar of Hakkar",
    "abilities": [
     "Cause Insanity (mind control)",
     "Shadow Word: Pain",
     "Curse of Tongues"
    ],
    "tank": "Hold threat in the middle of the room. Stun the player under Cause Insanity with Bash. Remove Curse can clear Curse of Tongues."
   }
  ],
  "dangers": [
   "Jumping into the Pit of Refuse from the top hole kills you from fall damage.",
   "Knockbacks and airborne players take fall damage (Atal'alarion, drakes).",
   "Flamestrike and Hex of Jammal'an punish stacking.",
   "Shade of Eranikus pulls all remaining dragonkin if they are not cleared first."
  ],
  "quests": [
   "The Temple of Atal'Hakkar (quest 1445, Fel'zerul, Swamp of Sorrows). Listed as Horde. Not shareable.",
   "Zapper Fuel (quest 4146, Liv Rizzlefix, The Barrens). Listed as Horde. Not shareable.",
   "The Sunken Temple (quest 3380, Witch Doctor Uzer'i, Feralas). Listed as Horde. Shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "35–45 (zockify) or 54+ (warcrafttavern); sources conflict"
 },
 {
  "key": "brd",
  "name": "Blackrock Depths",
  "lv": "52–60",
  "where": "Burning Steppes (Blackrock Mountain)",
  "route": [
   "Enter via the Blackrock Mountain chain to Forgewright's Tomb, down through the Grinding Quarry and the Masonry. The portal is in the far corner.",
   "Detention Block: High Interrogator Gerstahn drops the Prison Cell Key. Lord Roccor patrols the north ring. Shadowforge Key opens locked doors here.",
   "Dark Iron Highway: Bael'Gar at the west end (Shadowforge Gate needs a Key or 250 Lockpicking).",
   "Shadowforge City: Lord Incendius on the central bridge. Then Hall of Crafting, Black Vault (Warder Stilgiss, Verek), Domicile, Shrine of Thaurissan (Pyromancer Loregrain).",
   "Ring of Law from the Detention Block: two waves, then a random boss. A Banner of Provocation spawns Theldren. Completing it opens the East Garrison.",
   "West Garrison (needs the Shadowforge Lock, which needs a Shadowforge Key): General Angerforge. The Manufactory: Golem Lord Argelmach.",
   "The Grim Guzzler (Ribbly Screwspigot, Hurley Blackbreath, Phalanx; Dark Iron Ale Mug opens the bar door), then Chamber of Enchantment (Ambassador Flamelash).",
   "Summoners' Tomb (defeat The Seven to open the door), The Lyceum (Shadowforge Torches from Flame Keepers, light both braziers), The Iron Hall (Magmus).",
   "Imperial Seat: Emperor Dagran Thaurissan, optional Princess Moira Bronzebeard. Reach him via the Lyceum or the lava run over the Molten Bridge."
  ],
  "bosses": [
   {
    "name": "Bael'Gar",
    "abilities": [
     "Magma Splash",
     "Summons adds"
    ],
    "tank": "Tank facing the wall and taunt the adds off DPS. Growl the adds as they spawn."
   },
   {
    "name": "Lord Incendius",
    "abilities": [
     "Mighty Blow",
     "Curse of the Elemental Lord"
    ],
    "tank": "Tank mid-platform, away from the edges, so Mighty Blow knockback does not send you off. Bash on the heavy casts."
   },
   {
    "name": "Warder Stilgiss",
    "abilities": [
     "Frostbolt",
     "Frost Nova",
     "Frost Ward"
    ],
    "tank": "Hold threat on Stilgiss first, then Verek. Interrupt Frostbolt with Feral Charge or Bash."
   },
   {
    "name": "Theldren",
    "abilities": [
     "Mortal Strike",
     "Four gladiator adds"
    ],
    "tank": "Mark a kill order and hold threat on the adds. Frenzied Regeneration through Mortal Strike. A tank death can wipe the group, so keep Barkskin for emergencies."
   },
   {
    "name": "General Angerforge",
    "abilities": [
     "Sunder Armor",
     "Summons adds at low health"
    ],
    "tank": "Ranged pull up the ramp. Use Challenging Roar on the adds phase. Keep Sunder Armor stacked with Faerie Fire."
   },
   {
    "name": "Golem Lord Argelmach",
    "abilities": [
     "Lightning Shield"
    ],
    "tank": "Hold threat on the two constructs first, then Argelmach. Melee DPS should not hit Argelmach while Lightning Shield is up."
   },
   {
    "name": "Ambassador Flamelash",
    "abilities": [
     "None named; adds buff the boss"
    ],
    "tank": "Engage where he stands and kill adds fast. Save cooldowns for the end."
   },
   {
    "name": "The Seven",
    "abilities": [
     "Doom'rel summons demon adds"
    ],
    "tank": "Pull each dwarf to the middle and use interrupts and stuns. Hold threat on the demons with Growl and Swipe."
   },
   {
    "name": "Magmus",
    "abilities": [
     "War Stomp",
     "Fire sweeps"
    ],
    "tank": "Pull to the right and tuck into a corner to avoid the flames. War Stomp hits the whole melee range, so keep Demoralizing Roar up for the room."
   },
   {
    "name": "Emperor Dagran Thaurissan",
    "abilities": [
     "Avatar of Flame (buff, per search snippet)",
     "Stun on the tank (per search snippet)"
    ],
    "tank": "Pull the Emperor away from the group. Stun and high hit on the tank: use Frenzied Regeneration and Barkskin in rotation. If saving Princess Moira, the off-tank handles her casts with interrupts."
   }
  ],
  "dangers": [
   "Lord Incendius Mighty Blow knockback near the platform edge.",
   "Theldren: a tank death can wipe the group.",
   "Emperor: stuns the tank with high burst. Princess Moira is hostile until the Emperor dies.",
   "Ring of Law: random final boss, and Theldren spawns from the Banner of Provocation."
  ],
  "quests": [
   "Listed as Horde by the guide, but the source gives no per-quest faction tags: The Last Element (Vivian Lagrave, Badlands, shareable), Disharmony of Flame (Thunderheart, Badlands, shareable), Lost Thunderbrew Recipe (Vivian Lagrave, Badlands, not shareable), The Princess Saved? (Princess Moira Bronzebeard, not shareable)."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). The brief's level range does not match zockify's 40–48.",
  "confidence": "medium",
  "lvnote": "40–48 (zockify); brief lists 52–60; sources conflict"
 },
 {
  "key": "blackmaw",
  "name": "Blackmaw Hold",
  "lv": "55–60",
  "where": "Azshara: a furbolg tunnel entered at 38.7, 33.4 (behind a long-sealed gate, north Azshara). The portal sits deep in the tunnel (Winterspring map, 66.6, 84.4). Horde/Alliance access not stated.",
  "route": [
   "Unknown. Layout not seen. Multiple routes mentioned (Blizzard preview)."
  ],
  "bosses": [
   {
    "name": "Varrox Bleakhoof",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: only boss named (from Legacy challenge). No ability data."
   }
  ],
  "dangers": [
   "Corruption spreading through groves and tunnels (per Blizzard preview)",
   "Possible path farther below Azeroth (unconfirmed)"
  ],
  "quests": [
   "Unknown: listed as TBA. Datamined: Blackmaw Ritual Totem (quest item); Blackmaw Pouch (Blackmaw tribe reputation)."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: dungeon behind the furbolg gates in Azshara; wiki page for the original hold is not the Forever instance.",
  "confidence": "low"
 },
 {
  "key": "lbrs",
  "name": "Lower Blackrock Spire",
  "lv": "55–60",
  "where": "Searing Gorge (Blackrock Spire)",
  "route": [
   "Enter via the door beside the Blackrock Spire meeting stone (elite pack) or climb the large chain and jump down from Bodley's balcony (avoids mobs).",
   "Burning Felguard (rare, summoned by Scarshield Warlocks).",
   "Spirestone Butcher, Battle Lord, and Lord Magus (rares in the pack before Omokk).",
   "Highlord Omokk, then Shadow Hunter Vosh'gajin, then War Master Voone.",
   "Mor Grayhoof (quest summon in Voone's room), then Bannok Grimaxe (rare).",
   "Mother Smolderweb, then Crystal Fang (rare), Urok Doomhowl (summoned at the Tribute Pile), Quartermaster Zigris.",
   "Halycon, then Gizrul the Slavener, then Ghok Bashguud (rare).",
   "Overlord Wyrmthalak (final boss)."
  ],
  "bosses": [
   {
    "name": "Highlord Omokk",
    "abilities": [
     "Knock Away",
     "Enrage"
    ],
    "tank": "Tank against a wall, away from the group, to avoid Knock Away. CC one or both adds. Use Frenzied Regeneration during his Enrage healing load."
   },
   {
    "name": "Shadow Hunter Vosh'gajin",
    "abilities": [
     "Hex",
     "Curse of Blood"
    ],
    "tank": "Pull him away and CC both adds. If you have only one CC, kill the free add first. Remove Curse clears Curse of Blood."
   },
   {
    "name": "War Master Voone",
    "abilities": [
     "Cleave"
    ],
    "tank": "Tank with your back to a wall so melee DPS avoid Cleave. He hits hard, so Barkskin and Frenzied Regeneration are your defensive rotation."
   },
   {
    "name": "Mor Grayhoof",
    "abilities": [
     "Hurricane",
     "Healing Touch (interrupt)",
     "Rejuvenation (purge)"
    ],
    "tank": "Tank in the middle of the room. Avoid Hurricane and interrupt Healing Touch with Bash or Feral Charge. Hold threat through his form change."
   },
   {
    "name": "Mother Smolderweb",
    "abilities": [
     "Crystallize (stun)",
     "Mother's Milk (poison)"
    ],
    "tank": "Tank facing away from the group, staying behind her at max range. Her two abilities stun, so keep threat high so she does not turn on the group."
   },
   {
    "name": "Urok Doomhowl",
    "abilities": [
     "Intimidating Roar"
    ],
    "tank": "Use the Roughshod Pike on an ogre every 30 seconds. Kill the remaining ogres first, then let the tank take Urok. Intimidating Roar is dispellable."
   },
   {
    "name": "Quartermaster Zigris",
    "abilities": [
     "Stun Bomb"
    ],
    "tank": "Tank-and-spank. Spread the group to avoid Stun Bomb."
   },
   {
    "name": "Gizrul the Slavener",
    "abilities": [
     "Infected Bite (DoT on the tank)",
     "Enrage"
    ],
    "tank": "Use defensive cooldowns during his Enrage. Eat and drink before he engages, since the next fight follows quickly."
   },
   {
    "name": "Ghok Bashguud",
    "abilities": [
     "Two elite adds (unnamed in source)"
    ],
    "tank": "CC the two elite adds and burn Ghok down. Tank-and-spank."
   },
   {
    "name": "Overlord Wyrmthalak",
    "abilities": [
     "Cleave",
     "Sweeping Slam",
     "Summons adds at 50% health"
    ],
    "tank": "Tank against the wall behind his spawn to limit Cleave and Sweeping Slam. Kill the boss first, then the adds. Taunt and hold threat on the adds if you cannot CC them."
   }
  ],
  "dangers": [
   "Omokk's Knock Away.",
   "Smolderweb's stuns (Crystallize, Mother's Milk poison).",
   "Voone's Cleave and Wyrmthalak's Cleave and Sweeping Slam.",
   "Vosh'gajin's Hex and Curse of Blood."
  ],
  "quests": [
   "Warlord's Command (Warlord Goretooth, Badlands). Horde. Not shareable.",
   "Operative Bijou (Lexlort, Badlands). Shareable.",
   "The Pack Mistress (Galamav the Marksman, Badlands). Shareable.",
   "Bijou's Belongings: the guide's faction tag is unclear. Not shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "55+ (warcrafttavern); zockify 44–53; sources conflict"
 },
 {
  "key": "dme",
  "name": "Dire Maul East",
  "lv": "56–60",
  "where": "Feralas",
  "route": [
   "Enter from the east wall of the courtyard or from Eldreth Row. Jump down to the bottom level to skip the top-level trash.",
   "Pusillin (first section): drops the Crescent Key.",
   "Lethtendris (first section).",
   "Hydrospawn (next lower level).",
   "Zevrin Thornhoof, then speak to Old Ironbark to open the Conservatory Door.",
   "Alzzin the Wildshaper: clear the Warpwood Crushers on the ramp first.",
   "Isalien (quest boss) via the Brazier of Beckoning in Alzzin's area."
  ],
  "bosses": [
   {
    "name": "Pusillin",
    "abilities": [
     "Fireball",
     "Blast Wave",
     "Spirit of Runn Tum (spell reflection)"
    ],
    "tank": "Engage and build threat on Pusillin and the four Wildspawn Imps at the start. Then manage Pusillin. The reflection targets casters, so keep ranged DPS in mind."
   },
   {
    "name": "Lethtendris",
    "abilities": [
     "Void Bolt",
     "Shadow Bolt Volley",
     "Immolate"
    ],
    "tank": "Establish threat on Lethtendris and taunt Plimgib (the imp) away from the healer and DPS. Interrupt Void Bolt with Bash."
   },
   {
    "name": "Hydrospawn",
    "abilities": [
     "Hydroling adds (no named boss abilities in source)"
    ],
    "tank": "Agree with DPS whether to kill adds first or focus Hydrospawn. Clear the surrounding adds before pulling."
   },
   {
    "name": "Zevrin Thornhoof",
    "abilities": [
     "Sacrifice (teleports players to his altar)",
     "Intense Pain"
    ],
    "tank": "Hold the primary threat position throughout. Sacrificed players need significant healing."
   },
   {
    "name": "Alzzin the Wildshaper",
    "abilities": [
     "Shapeshift forms (Satyr, Dire Wolf, Treant)",
     "Sunder Armor",
     "Expose Armor"
    ],
    "tank": "Alzzin drops threat on every form change, so use Growl and Maul to regain the top spot. The bear takes the most damage in Dire Wolf form, so use Frenzied Regeneration."
   },
   {
    "name": "Isalien (quest)",
    "abilities": [
     "Hippogryph add"
    ],
    "tank": "Maintain threat on Isalien and pick up the Hippogryph when it spawns. Source calls this one of the easiest bosses in the questline."
   }
  ],
  "dangers": [
   "Jump runs: larger packs can be too strong to solo.",
   "Lethtendris's Void Bolt needs to be interrupted.",
   "Hydroling adds deal heavy damage.",
   "Alzzin: uncleared Warpwood Crushers join the fight and make it much harder."
  ],
  "quests": [
   "Lethtendris's Web (Horde, Talo Thornhoof, Feralas). Shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "55+ (warcrafttavern); zockify lists 52–54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "dmw",
  "name": "Dire Maul West",
  "lv": "57–60",
  "where": "Feralas",
  "route": [
   "Enter from the west wall of the central courtyard. You need the Crescent Key (drops from Pusillin in Dire Maul East).",
   "Capital Gardens: deactivate the first crystal, then fight Tendris Warpwood, then Tsu'zee (rare).",
   "Court of the Highborne: deactivate two crystals upstairs, then Illyanna Ravenoak.",
   "Prison of Immol'thar: deactivate the last two crystals on either side of the doorway, then fight Immol'thar.",
   "Athenaeum: take the tunnel from Immol'thar's prison to Prince Tortheldrin. Lord Hel'nurath (quest) is also here."
  ],
  "bosses": [
   {
    "name": "Tendris Warpwood",
    "abilities": [
     "Trample",
     "Entangle"
    ],
    "tank": "Clear the wandering Ancients in the courtyard first, since Tendris summons them on engage. Hold him away from ranged DPS and the healer."
   },
   {
    "name": "Magister Kalendris",
    "abilities": [
     "Mind Blast",
     "Mind Flay",
     "Dominate Mind"
    ],
    "tank": "Pull him away from the group and interrupt Mind Blast and Mind Flay with Bash. If Dominated, taunt him back as soon as you regain control."
   },
   {
    "name": "Illyanna Ravenoak",
    "abilities": [
     "Immolation Trap",
     "Volley",
     "Hibernate (used on her pet Ferra)"
    ],
    "tank": "Pull Ferra onto Illyanna and hold them stacked together. Keep threat on Illyanna, then switch to Ferra when Illyanna dies. Hibernate is usable as a druid spell on Ferra if needed."
   },
   {
    "name": "Immol'thar",
    "abilities": [
     "Infected Bite",
     "Enrage (50%)",
     "Teleport"
    ],
    "tank": "Tank just off the room center. If teleported to the middle, regain his attention and resume. Save defensive cooldowns for Infected Bite and the 50% Enrage."
   },
   {
    "name": "Prince Tortheldrin",
    "abilities": [
     "Arcane Blast",
     "Whirlwind",
     "Counterspell"
    ],
    "tank": "Position him in a corner to limit knockback. After Arcane Blast resets threat, re-establish aggro before DPS resumes. Bash the heavy casts."
   },
   {
    "name": "Lord Hel'nurath (quest)",
    "abilities": [
     "Dread Guard adds",
     "Banish",
     "Enslave Demon"
    ],
    "tank": "Pick up spawning adds with AoE threat. Hold threat on Hel'nurath while DPS damage him."
   }
  ],
  "dangers": [
   "Tendris's summoned Ancients if the courtyard is not cleared first.",
   "Immol'thar's teleports drop threat on the affected player.",
   "Immolation Trap hits the whole group during the Illyanna fight.",
   "Hel'nurath's Dread Guard adds deal significant damage."
  ],
  "quests": [
   "Elven Legends (quest 7481, Sage Korolusk, Feralas). Horde version listed. Shareable.",
   "The Madness Within (Shen'dralar Ancient, Dire Maul West). Shareable. Faction not specified.",
   "The Treasure of the Shen'dralar (Shen'dralar Ancient, Dire Maul West). Not shareable. Faction not specified."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Dire Maul West and North share an instance linked by the Athenaeum. Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "55+ (warcrafttavern); zockify lists 52–54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "ubrs",
  "name": "Upper Blackrock Spire",
  "lv": "58–60",
  "where": "Searing Gorge (Blackrock Spire)",
  "route": [
   "Enter via the Blackrock Spire meeting stone door (elite pack) or the chain and balcony jump (no mobs).",
   "Lower Blackrock Spire first. Complete the Seal of Ascension quest; at least one group member needs it to open the upstairs door on the left of the entrance.",
   "Pyroguard Emberseer (mandatory): summoned when 3+ players click the Blackrock Altar. Clear the Incarcerator waves with AoE first.",
   "Solakar Flamewreath (Father Flame event only), then Goraluk Anvilcrack (optional).",
   "Warchief Rend Blackhand with Gyth: both must die. Kill Gyth first.",
   "The Beast (The Furnace): clear the adds and stealth assassins first.",
   "General Drakkisath (final boss): kill the two Chromatic Elite Guards in order first. Jed Runewatcher (rare) and Lord Valthalak (quest summon via the Brazier of Beckoning) are optional."
  ],
  "bosses": [
   {
    "name": "Pyroguard Emberseer",
    "abilities": [
     "Fire Nova",
     "Incarcerator waves"
    ],
    "tank": "Hold threat away from the ranged group. Fire Nova hits melee, so keep the bear on high health with Frenzied Regeneration."
   },
   {
    "name": "Warchief Rend Blackhand and Gyth",
    "abilities": [
     "Whirlwind",
     "Thunderclap",
     "Corrosive Acid Breath",
     "Flame Breath"
    ],
    "tank": "Main tank holds Gyth and the off-tank holds Rend. Kill Gyth first. Use Swipe for the adds. Equipping and using the Seal of Ascension summons Vaelstrasz to heal the group."
   },
   {
    "name": "The Beast",
    "abilities": [
     "Flamebreak (AoE and knockback)",
     "Fear",
     "Charge"
    ],
    "tank": "Keep top threat so The Beast returns to tanks after a charge. Stand with your back to a wall to avoid knockback. Fear needs a priest or shaman to dispel."
   },
   {
    "name": "General Drakkisath",
    "abilities": [
     "Conflagration",
     "Flame Breath",
     "Cleave",
     "Thunderclap"
    ],
    "tank": "Off-tank taunts Drakkisath when he casts Conflagration. Face him toward a wall. Bash on casts. Use Barkskin through Conflagration."
   },
   {
    "name": "Lord Valthalak (quest boss)",
    "abilities": [
     "Shadow Bolt Volley (starts at 40%)",
     "Channeled add ability that kills the target if completed"
    ],
    "tank": "Hold the middle of the room. Kill adds immediately. Save defensive cooldowns for the last 20%."
   }
  ],
  "dangers": [
   "The Beast's Flamebreak knockback and Fear.",
   "Drakkisath's Conflagration: taunt when it is cast.",
   "Valthalak's add channel kills the target if completed."
  ],
  "quests": [
   "For The Horde! (Thrall, Orgrimmar). Horde. Not shareable.",
   "The Darkstone Tablet (Shadowmage Vivian Lagrave, Badlands). Shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Listed as a 10-player instance, but the source does not say whether Forever changes that. Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "55+ (warcrafttavern); zockify 48–58; sources conflict"
 },
 {
  "key": "dmn",
  "name": "Dire Maul North",
  "lv": "58–60",
  "where": "Feralas",
  "route": [
   "Enter with the Crescent Key on the north wall of the courtyard (Guard Mol'dar and Stomper Kreeg), or through Dire Maul West's Athenaeum (usually no fight).",
   "Gordok Courtyard Door: open with the Gordok Courtyard Key from Guard Fengus's chest.",
   "Gordok Inner Door: Gordok Inner Door Key from Mol'dar, or 300 Lockpicking, a Powerful Seaforium Charge, or a Truesilver Skeleton Key.",
   "Guard Slip'kik's walkway below the ramps.",
   "Captain Kromcrush's room (Ogre Tannin Baskets are in the room before him).",
   "King Gordok with Cho'Rush the Observer."
  ],
  "bosses": [
   {
    "name": "Guard Mol'dar",
    "abilities": [
     "Knock Away",
     "Shield Charge",
     "Enrage"
    ],
    "tank": "Tank against a wall to avoid knockback. Save defensive cooldowns for the Enrage. Ranged DPS stand at max range."
   },
   {
    "name": "Stomper Kreeg",
    "abilities": [
     "Whirlwind",
     "War Stomp",
     "Booze Spit"
    ],
    "tank": "Hold primary threat and save defensive cooldowns for the Enrage. Booze Spit cuts hit chance by 75%. He can be bypassed when he falls asleep."
   },
   {
    "name": "Captain Kromcrush",
    "abilities": [
     "Mortal Cleave",
     "Intimidating Shout",
     "Gordok Reaver adds (around 50%)"
    ],
    "tank": "Gain threat on the Reaver adds before DPS or healers take heavy damage. Mortal Cleave reduces healing on the target, so use Frenzied Regeneration. DPS should stay behind the boss."
   },
   {
    "name": "King Gordok (with Cho'Rush the Observer)",
    "abilities": [
     "Healing Wave (Cho'Rush)",
     "Mind Blast (Cho'Rush)",
     "Psychic Scream",
     "War Stomp"
    ],
    "tank": "Establish and maintain threat on King Gordok. Interrupt Healing Wave first, then Mind Blast, with Bash or Feral Charge. Psychic Scream causes fear, which the group handles with Fear Ward or Tremor Totem."
   }
  ],
  "dangers": [
   "Knock Away and Shield Charge on the guards.",
   "Booze Spit: 75% hit chance reduction and drunk.",
   "Psychic Scream fear on King Gordok."
  ],
  "quests": [
   "The Gordok Ogre Suit (Knot Thimblejack, Dire Maul North). Shareable.",
   "Unfinished Gordok Business (Captain Kromcrush, Dire Maul North). Not shareable.",
   "No Horde-specific quests identified in the source."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). The Tribute Run is the Forever route that avoids killing five of the six bosses. Level range conflicts across sources.",
  "confidence": "low",
  "lvnote": "55+ (warcrafttavern); zockify lists 52–54 for all of Dire Maul; sources conflict"
 },
 {
  "key": "shapers",
  "name": "Shaper's Terrace",
  "lv": "58–60",
  "where": "Northern hills of Un'Goro Crater, on a hill overlooking Marshal's Refuge (48.1, 6.1, per one source; other sources say unconfirmed). Faction access not stated.",
  "route": [
   "Mostly one open area; tar pit path to central Pillar of Assimilation.",
   "Crystal-filled cave tunnel on east side.",
   "North path to titan building, then waterfall area with a raid portal behind a closed gate."
  ],
  "bosses": [
   {
    "name": "Bolt",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Cinder",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Snowtalon",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown."
   },
   {
    "name": "Nanaya",
    "abilities": [
     "unknown"
    ],
    "tank": "Unknown: no ability data. Kill order unknown. More bosses likely."
   }
  ],
  "dangers": [
   "Tar pits, dinosaurs, titan structures (per Blizzard preview)",
   "Players bring Un'Goro power crystals (Blue, Green, Red, Yellow) to consoles inside the terrace (per Blizzard)"
  ],
  "quests": [
   "Unknown: listed as TBA."
  ],
  "loot": [
   "Unknown"
  ],
  "forever": "NEW in Forever: titan-built terrace in Un'Goro Crater that uses Un'Goro power crystals; boss names from Legacy challenges, one source only.",
  "confidence": "low"
 },
 {
  "key": "strat_live",
  "name": "Stratholme Living",
  "lv": "58–60",
  "where": "Eastern Plaguelands",
  "route": [
   "Enter via the main dungeon entrance in the northwest corner of the Eastern Plaguelands (or Eastwall Gate with the Key to the City).",
   "Skul (rare, near the main gates) and The Unforgiven. DPS clears non-elite adds first.",
   "Hearthsinger Forresten (rare, Market Row or near Fras Siabi).",
   "Postmaster Malown (spawns after the third Postbox is opened).",
   "Timmy the Cruel (runs in after the mobs outside the Scarlet area are cleared).",
   "Crimson Hammersmith (spawns if someone clicks the pattern on the ground).",
   "Cannon Master Willey, then Archivist Galford.",
   "Balnazzar (final encounter), then Jarien and Sothos (summoned in Balnazzar's room for the Tier 0.5 questline)."
  ],
  "bosses": [
   {
    "name": "Hearthsinger Forresten",
    "abilities": [
     "Enchanting Lullaby (sleep, ~8s)",
     "Multi-Shot"
    ],
    "tank": "Tank him where he stands, away from other mobs. Enchanting Lullaby puts the bear to sleep, so regain threat on waking."
   },
   {
    "name": "Postmaster Malown",
    "abilities": [
     "Wailing Dead (from three Undead Postmen)",
     "Fear"
    ],
    "tank": "Pull the boss away from the CC'd adds. Fear must be dispelled quickly by a priest or shaman, especially on the tank. Bear cannot dispel fear."
   },
   {
    "name": "Timmy the Cruel",
    "abilities": [
     "Enrage"
    ],
    "tank": "Tank-and-spank. Keep the tank healthy through his Enrage with Frenzied Regeneration and Barkskin."
   },
   {
    "name": "Cannon Master Willey",
    "abilities": [
     "Spawned adds (unnamed in source)",
     "Cannonballs fired from the room's cannons"
    ],
    "tank": "The tank must pick up spawned adds. CC or burn them down, or use the room cannons."
   },
   {
    "name": "Archivist Galford",
    "abilities": [
     "Burning Winds"
    ],
    "tank": "Burning Winds can target the tank. Regain threat quickly when it expires. Spread the group out, since abilities hit multiple players."
   },
   {
    "name": "Balnazzar",
    "abilities": [
     "Psychic Scream",
     "Deep Sleep"
    ],
    "tank": "Tank in the middle of the room so the group can spread out. Deep Sleep is dispelled by the healers, so the bear cannot remove it. Psychic Scream can be outranged at maximum distance."
   }
  ],
  "dangers": [
   "Enchanting Lullaby (sleep) and Multi-Shot from Hearthsinger Forresten.",
   "Fear on Postmaster Malown.",
   "Burning Winds on Archivist Galford.",
   "Crimson Hammersmith spawns unexpectedly if someone clicks the ground pattern during pulls."
  ],
  "quests": [
   "All five Living quests are faction-neutral: Of Love and Family (not shareable), The Great Ezra Grimm (shareable), The Archivist (shareable), The Truth Comes Crashing Down (not shareable), The Medallion of Faith (shareable), The Restless Souls (not shareable). No Horde-specific quests."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Entry: Scarlet Key from Doan's Strongbox (Scarlet Monastery Library) opens the Bastion Door. Zockify lists 45–55 for Stratholme overall; the brief lists 58–60; sources conflict.",
  "confidence": "medium",
  "lvnote": "58+ (warcrafttavern); zockify lists 45–55; sources conflict"
 },
 {
  "key": "strat_undead",
  "name": "Stratholme Undead",
  "lv": "58–60",
  "where": "Eastern Plaguelands",
  "route": [
   "Enter via Eastwall Gate (Key to the City required). Alternatively, use the main entrance and pass the Living wing to get the key. Opening the Service Gate Entrance makes Magistrate Barthilas run to the back; do not open it early.",
   "Ziggurat 1: Nerub'enkan, at the top of the left ziggurat. Clear the Thuzadin Acolytes inside after the boss.",
   "Ziggurat 2: Baroness Anastari, then clear the Thuzadin Acolytes inside.",
   "Ziggurat 3: Maleki the Pallid, then clear the Thuzadin Acolytes inside.",
   "Gauntlet Gate: opening it with the key starts a 45-minute Baron's Ultimatum timer. Only matters for the Tier 0.5 set quest.",
   "Slaughter Square: portcullis opens after all three ziggurats and their acolytes are dead. Ramstein the Gorger (kill Venom Belchers and Bile Spewers to draw him out).",
   "Slaughter House: after Ramstein dies, clear the Mindless Undead and Bile Slimes. Three Black Guard Sentry elites spawn.",
   "Baron Rivendare (final boss). The door closes once engaged."
  ],
  "bosses": [
   {
    "name": "Nerub'enkan",
    "abilities": [
     "Encasing Webs",
     "Crypt Scarabs",
     "Raise Undead Scarab"
    ],
    "tank": "Tank at the top of the ramp. Use AoE on the adds."
   },
   {
    "name": "Baroness Anastari",
    "abilities": [
     "Possess",
     "Silence",
     "Banshee Curse"
    ],
    "tank": "Tank her atop the ziggurat. Possessed players must be damaged to 50% to break the mind control. Remove Curse decurses Banshee Curse. Retake threat after a possessed player is freed."
   },
   {
    "name": "Maleki the Pallid",
    "abilities": [
     "Drain Life",
     "Frostbolt",
     "Ice Tomb"
    ],
    "tank": "Interrupt casts with Bash when possible. Ice Tomb moves the boss to another target for about 6 seconds. Keep that player alive and re-taunt when freed."
   },
   {
    "name": "Magistrate Barthilas",
    "abilities": [
     "Mighty Blow",
     "Crowd Pummel"
    ],
    "tank": "Position him against a wall so Mighty Blow does not knock players into other mobs. The Key drops from him."
   },
   {
    "name": "Ramstein the Gorger",
    "abilities": [
     "Knockout (switches target to the secondary threat holder)"
    ],
    "tank": "Keep a taunt ready. Growl him back after Knockout switches his target, and heal the DPS he switched to."
   },
   {
    "name": "Baron Rivendare",
    "abilities": [
     "Mortal Strike (reduces tank healing)",
     "Cleave",
     "Unholy Aura",
     "Skeleton summons"
    ],
    "tank": "Tank him at the back right of the room with melee behind him. Frenzied Regeneration through Mortal Strike. Melee prioritize skeletons when they spawn. Swipe handles the skeletons."
   }
  ],
  "dangers": [
   "Possess, Silence, and Banshee Curse during the Anastari fight.",
   "Unholy Aura and Cleave during the Rivendare fight.",
   "Losing threat to Ramstein's Knockout.",
   "Accidentally clicking the Black Guard Swordsmith pattern mid-pull."
  ],
  "quests": [
   "Ramstein quest (Horde-exclusive, from Nathanos Blightcaller, Eastern Plaguelands). Not shareable.",
   "Six faction-neutral quests: Aurius' Reckoning, Menethil's Gift, The Flesh Does Not Lie, The Active Agent, Above and Beyond, Houses of the Holy. Three are shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Level range conflicts across sources. Naxxramas raid portal is inaccessible.",
  "confidence": "medium",
  "lvnote": "58+"
 },
 {
  "key": "scholo",
  "name": "Scholomance",
  "lv": "58–60",
  "where": "Western Plaguelands (Caer Darrow island)",
  "route": [
   "Enter via Caer Darrow island (southeast Western Plaguelands). Opening the door needs the Skeleton Key from a long quest chain in Western Plaguelands.",
   "Great Ossuary: Rattlegore in the basement. His kill drops the Viewing Room Key, required to go deeper.",
   "Viewing Room: Marduk Blackpool and Vectus. Engage only if someone has completed the questline that involves them.",
   "Alchemy Lab: Ras Frostwhisper. Kormok can be summoned in his room with the Brazier of Beckoning (Tier 0.5 questline).",
   "Patio: Kirtonos the Herald is summoned with the Blood of Innocents (drops from the Blood Steward of Kirtonos).",
   "Six wing bosses (Illucia, Alexei, The Ravenian, Polkelt, Krastinov, Malicia).",
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
    "tank": "Tank with your back to a wall. Re-establish threat after each form change. Remove Curse clears the curses."
   },
   {
    "name": "Rattlegore",
    "abilities": [
     "Knock Away",
     "War Stomp"
    ],
    "tank": "Mark and kill the add first, then the boss. Clear the area before pulling. Keep your back to a wall to avoid Knock Away."
   },
   {
    "name": "Marduk Blackpool",
    "abilities": [
     "Shadow Shield",
     "Shadow Bolt Volley",
     "Defiling Aura",
     "Cleave"
    ],
    "tank": "Tank facing away from the group. Melee should avoid hitting him while Shadow Shield is active."
   },
   {
    "name": "Vectus",
    "abilities": [
     "Flamestrike",
     "Blast Wave",
     "Ground fire"
    ],
    "tank": "Tank him away from ranged DPS and healers. Spread out to avoid Flamestrike."
   },
   {
    "name": "Ras Frostwhisper",
    "abilities": [
     "Fear",
     "Chill Nova"
    ],
    "tank": "Clear adds first. Tank near the back without losing line of sight to the healer. Coordinate interrupts with Bash."
   },
   {
    "name": "Lady Illucia Barov",
    "abilities": [
     "Dominate Mind"
    ],
    "tank": "Simple tank-and-spank. CC mind-controlled players."
   },
   {
    "name": "Lord Alexei Barov",
    "abilities": [
     "Unholy Aura",
     "Veil of Shadow",
     "Two linked adds"
    ],
    "tank": "CC the adds and burn Barov first. Priority decurse on Veil of Shadow. Remove Curse handles it if the group has no other decurser."
   },
   {
    "name": "Doctor Theolen Krastinov",
    "abilities": [
     "Enrage at 50% (faster attacks)"
    ],
    "tank": "Use defensive cooldowns after the 50% enrage with Frenzied Regeneration. Keep ranged and healers far away."
   },
   {
    "name": "Darkmaster Gandling (final boss)",
    "abilities": [
     "Periodic teleports to surrounding chambers"
    ],
    "tank": "Tank in the center. Teleported players must kill the adds in their chamber and return. Plan for the tank or healer to be teleported."
   }
  ],
  "dangers": [
   "Knockbacks from Kirtonos, Rattlegore, and the Ravenian can fling players into adds or hazards.",
   "Lady Illucia's Dominate Mind and Alexei's Veil of Shadow need dispels or decurses.",
   "Krastinov becomes lethal at 50% health.",
   "Gandling's teleports separate players from the group."
  ],
  "quests": [
   "The Key to Scholomance (Apothecary Dithers, Tirisfal Glades). Horde. Not shareable.",
   "Barov Family Fortune (Alexi Barov, Tirisfal Glades). Horde. Shareable."
  ],
  "forever": "Guide is Classic-based (instance not accessible in the Forever beta). Level range conflicts across sources.",
  "confidence": "medium",
  "lvnote": "58+ (warcrafttavern); zockify lists 45–57; sources conflict"
 }
];
window.MACROS = [
 {
  "name": "Primal Bite + Maul",
  "why": "Primal Bite when it's ready, then queues Maul on your next swing. The ! stops a second press from un-queuing Maul. Use it only when you have spare rage.",
  "body": "#showtooltip Primal Bite\n/cast [@target,harm,nodead] Primal Bite\n/cast [@target,harm,nodead] !Maul",
  "tested": false
 },
 {
  "name": "Feral Charge, Shift = Bash",
  "why": "Charge in from range. Hold Shift for Bash instead.",
  "body": "#showtooltip\n/cast [mod:shift] Bash; Feral Charge",
  "tested": false
 },
 {
  "name": "Growl: focus > mouseover > target",
  "why": "Taunt without changing targets. Hold Ctrl for Challenging Roar.",
  "body": "#showtooltip\n/cast [mod:ctrl] Challenging Roar; [@focus,harm,nodead] Growl; [@mouseover,harm,nodead] Growl; Growl",
  "tested": false
 },
 {
  "name": "Pre-pull Enrage + Wolfshead",
  "why": "Equips Wolfshead and Enrages (+5 extra rage in Forever). Use it in bear about 10s before the pull. Replace the helm name if you use a different swap.",
  "body": "#showtooltip Enrage\n/equip Wolfshead Helm\n/cast [form:1] Enrage",
  "tested": false
 },
 {
  "name": "Swap back to tank helm",
  "why": "After the pull. Put your real helm's name in.",
  "body": "#showtooltip\n/equip YOUR TANK HELM NAME",
  "tested": false
 },
 {
  "name": "Oh no button",
  "why": "Barkskin (usable in bear in Forever), then Frenzied Regeneration.",
  "body": "#showtooltip Barkskin\n/cast Barkskin\n/cast Frenzied Regeneration",
  "tested": false
 },
 {
  "name": "Rebirth / Innervate (leaves form)",
  "why": "Drops form, then battle-rezzes a dead mouseover, or Innervates the mouseover (or yourself). Press your bear key afterwards.",
  "body": "#showtooltip\n/cancelform [form]\n/cast [@mouseover,help,dead] Rebirth; [@mouseover,help] Innervate; [@player] Innervate",
  "tested": false
 },
 {
  "name": "Bear (never toggles off)",
  "why": "Shifts to Dire Bear only if you aren't already in it, so you can spam it safely.",
  "body": "#showtooltip Dire Bear Form\n/cast [noform:1] Dire Bear Form",
  "tested": false
 },
 {
  "name": "Re-shift: break roots and slows",
  "why": "Leaves form and re-enters bear in one press, clearing movement-impairing effects. Costs mana.",
  "body": "#showtooltip Dire Bear Form\n/cancelform [form:1]\n/cast Dire Bear Form",
  "tested": false
 }
];
window.KEYBINDS = [["1", "Lacerate"], ["2", "Primal Bite + Maul macro"], ["3", "Swipe"], ["4", "Maul"], ["5", "Demoralizing Roar"], ["Q", "Feral Charge / Bash macro"], ["E", "Growl macro (Ctrl = Challenging Roar)"], ["R", "Faerie Fire"], ["F", "Enrage"], ["T", "Barkskin"], ["G", "Oh no button (Barkskin + Frenzied Regen)"], ["Z", "Bear macro"], ["X", "Re-shift macro"], ["Shift-1", "Pre-pull Wolfshead + Enrage"], ["Shift-2", "Swap back helm"], ["Ctrl-1", "Rebirth / Innervate macro"]];
window.ADDONS = [
 {
  "name": "Questie",
  "why": "Quest objectives on your map. A Forever-compatible version is listed.",
  "forever": true
 },
 {
  "name": "QuestieTrace",
  "why": "Companion that records Forever's new quests, which Questie's Classic database doesn't have yet.",
  "forever": true
 },
 {
  "name": "A threat meter (ThreatClassic2 or Details)",
  "why": "Shows your threat lead per mob. Check that a Forever build exists before you install.",
  "forever": false
 },
 {
  "name": "Threat Plates",
  "why": "Nameplates that change color when you lose aggro. Method calls it essential for tanks.",
  "forever": false
 },
 {
  "name": "DBM or BigWigs",
  "why": "Boss warnings, for raids at 60.",
  "forever": false
 },
 {
  "name": "Leatrix Plus",
  "why": "Quality-of-life tweaks.",
  "forever": false
 },
 {
  "name": "WeakAuras",
  "why": "Sources conflict on whether a Forever version exists. Hold off.",
  "forever": false
 }
];
