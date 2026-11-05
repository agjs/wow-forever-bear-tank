/* =============================================================
   WoW: Forever — Feral Bear Tank data (Patch 1.60.1)
   Edit this file after patches; app.js only renders it.
   Sources: Wowhead Forever talent calc + tooltip DB (scraped 2026-11-05),
   Wowhead L0uki guides (2026-11-04), Method.gg (2026-11-04), Leprestore, wowtbc.gg
   ============================================================= */

const META = {
  patch: "1.60.1",
  updated: "2026-11-05",
  race: "Windshaper Skyborne (Horde)",
  finalBuild: "9 / 32 / 10 (Mono-Bear, with Furor 1 in place of Ferocity rank 5)",
  calcLink: "https://www.wowhead.com/forever/talent-calc/druid/vkndmh050022-5023030212310112501-055_t0",
  hybridLink: "https://www.wowhead.com/forever/talent-calc/druid/vkndmh050022-50230302123110124011-055_t0",
};

/* ---------- TALENTS ----------
   tree: B/F/R ; row/col from the Wowhead calc grid (row r needs 5*r points in that tree)
   req: prerequisite talent key (must be maxed) ; lvl: min character level
   fx: structured effects per rank → drive the correlation matrix + derived stats
   tank: 0-5 value for a bear tank ; why: reasoning                                   */
const TALENTS = {
  // ---------------- FERAL ----------------
  ferocity: { name: "Ferocity", id: 16934, tree: "F", row: 0, col: 1, max: 5,
    r1: "−1 Rage/Energy cost: Maul, Primal Bite, Swipe, Claw, Rake.", rmax: "−5 cost on all five.",
    fx: [["Maul","cost",-1],["Swipe","cost",-1],["Primal Bite","cost",-1],["Claw/Rake","cost",-1]],
    tank: 4, why: "Maul costs 15 rage and Swipe costs 20, so 4 ranks makes them noticeably cheaper. It matters most while leveling, when enemies hit you softly and rage is short. At 60 you get plenty of rage from being hit, so the last rank isn't worth it." },
  furor: { name: "Furor", id: 17056, tree: "F", row: 0, col: 2, max: 5,
    r1: "20% chance: +10 Rage on Bear shift; Cat shift restores 20% of stored Energy (+2/s outside bear, cap 20).", rmax: "100% / 100% / +10 per s, cap 100.",
    fx: [["Rage gen","rage","10 on shift @5/5"],["Cat energy","energy","shift restore"]],
    tank: 1, why: "In Forever this mostly helps Cat Form. Bears rarely shift during a fight, and you get plenty of rage anyway. You already have 1 point here, which still counts toward unlocking the next row, so that's fine. Don't add more." },
  feralSwiftness: { name: "Feral Swiftness", id: 17002, tree: "F", row: 1, col: 0, max: 2,
    r1: "+15% Cat move speed, +2% Dodge.", rmax: "+30% Cat speed, +4% Dodge.",
    fx: [["Dodge","dodge",2],["Movement","move","+15% cat"]],
    tank: 4, why: "4% more dodge in every form, and Cat Form runs much faster while questing. Wowhead says to take it as soon as you have Cat Form." },
  feralInstinct: { name: "Feral Instinct", id: 16947, tree: "F", row: 1, col: 1, max: 3,
    r1: "Swipe damage +10%.", rmax: "Swipe damage +30%.",
    fx: [["Swipe","dmg%",10]],
    tank: 4, why: "Swipe hits every enemy around you. Making it 30% stronger means 30% more threat on every group of enemies." },
  brutalImpact: { name: "Brutal Impact", id: 16940, tree: "F", row: 1, col: 2, max: 2,
    r1: "Bash/Pounce stun +0.5s, Bash CD −15s.", rmax: "+1s stun, Bash CD −30s.",
    fx: [["Bash","cd",-15]],
    tank: 1, why: "Only makes your stuns longer. Most dungeon bosses can't be stunned, so this is a player-versus-player talent." },
  thickHide: { name: "Thick Hide", id: 16929, tree: "F", row: 1, col: 3, max: 3,
    r1: "In forms: +3 × level base Armor (180 @60) and +0.67 Armor per Defense skill above 5×level. Multiplied by form armor mods.", rmax: "Same flat part, +2.00 Armor per excess Defense point.",
    fx: [["Armor","armor","3×lvl base ×form mult"]],
    tank: 4, why: "Gives a big block of extra armor at rank 1, and bear form multiplies it (by 4.6 in Dire Bear Form). Ranks 2 and 3 only add a little, based on Defense from your gear. Check your armor on the character sheet after each rank." },
  feralCharge: { name: "Feral Charge", id: 1238122, tree: "F", row: 2, col: 2, max: 1, lvl: 20,
    r1: "Bear: 5 Rage, 8–25yd charge, 4s immobilize + interrupt, 15s CD. Cat: leap behind target, 30s CD.",
    fx: [["Utility","util","interrupt + gap close"]],
    tank: 4, why: "Lets you jump at an enemy from range in bear form. It gets their attention and interrupts a spell they're casting. You also need a point in this row to go deeper into the tree." },
  shreddingAttacks: { name: "Shredding Attacks", id: 16966, tree: "F", row: 2, col: 0, max: 3,
    r1: "Shred −6 Energy, Lacerate −1 Rage.", rmax: "Shred −18 Energy, Lacerate −3 Rage.",
    fx: [["Lacerate","cost",-1],["Shred","cost",-6]],
    tank: 1, why: "Only reduces Lacerate's rage cost a little. The rest is for Cat Form. Skip it." },
  savageFury: { name: "Savage Fury", id: 16998, tree: "F", row: 2, col: 1, max: 2,
    r1: "+5% damage: Claw, Rake, Shred, Maul, Swipe.", rmax: "+10%.",
    fx: [["Maul","dmg%",5],["Swipe","dmg%",5],["Claw/Rake","dmg%",5],["Shred","dmg%",5]],
    tank: 4, why: "Maul and Swipe deal 10% more damage, which means more threat. You also need it fully learned before you can take Lacerate." },
  sharpenedClaws: { name: "Sharpened Claws", id: 16942, tree: "F", row: 2, col: 3, max: 2,
    r1: "+3% crit in Bear/Cat.", rmax: "+6% crit.",
    fx: [["Crit","crit",3]],
    tank: 5, why: "6% more chance to land critical hits, for only 2 points. Critical hits also give you extra rage (with Blood Frenzy) and extra damage (with Natural Instinct)." },
  predatoryStrikes: { name: "Predatory Strikes", id: 16972, tree: "F", row: 3, col: 0, max: 3,
    r1: "+50% of level as AP in forms.", rmax: "+150% of level (= +90 AP @60).",
    fx: [["AP","ap","0.5×lvl"]],
    tank: 4, why: "Gives extra attack power in bear form (90 at level 60), so every hit gets stronger. You also need it fully learned before you can take Rend and Tear." },
  lacerate: { name: "Lacerate", id: 1328617, tree: "F", row: 3, col: 1, max: 1, lvl: 25, req: "savageFury",
    r1: "15 Rage: bleed 20 over 15s (R5: 75) + 10% weapon dmg per existing stack. High threat. Stacks to 5. Ranks trained up to R5 at 58.",
    fx: [["Lacerate","grant","new ability"],["Bleed uptime","util","enables Rend and Tear"]],
    tank: 5, why: "Your main single-target button from level 25. It's a bleed that stacks up to 5 times, makes a lot of threat, and keeps the enemy bleeding so Rend and Tear works." },
  predatoryDiscipline: { name: "Predatory Discipline", id: 1328613, tree: "F", row: 3, col: 2, max: 1,
    r1: "Ferocious Bite keeps the excess-energy damage but no longer consumes the extra Energy.",
    fx: [["Ferocious Bite","util","no energy dump"]],
    tank: 0, why: "Only changes Ferocious Bite, a Cat Form finishing move. Not useful for a bear." },
  bloodFrenzy: { name: "Blood Frenzy", id: 16958, tree: "F", row: 3, col: 3, max: 2,
    r1: "50%: +5 Rage on Bear crit; Cat CP-generator crits 50% extra CP.", rmax: "100% / 100%.",
    fx: [["Rage gen","rage","+5 per crit"],["Crit","synergy","needs crit"]],
    tank: 3, why: "Gives you 5 rage every time you land a critical hit in bear form. Useful in dungeons, where enemies hit you less hard and rage can run low." },
  leaderOfThePack: { name: "Leader of the Pack", id: 17007, tree: "F", row: 4, col: 1, max: 1,
    r1: "In forms: +3% crit to party/raid within 45yd (not with Moonkin Aura).",
    fx: [["Crit","crit",3],["Raid buff","util","+3% party crit"]],
    tank: 5, why: "In bear form, you and everyone in your group get 3% more chance to land critical hits. You also need it before you can take Primal Bite." },
  naturalInstinct: { name: "Natural Instinct", id: 1223242, tree: "F", row: 4, col: 3, max: 2,
    r1: "Melee ability crit damage bonus +10%; spell healing +12% of Int.", rmax: "+20% crit bonus; +25% of Int as healing.",
    fx: [["Crit dmg","critdmg",10]],
    tank: 4, why: "Your critical hits deal more damage: 2.2 times normal instead of 2 times. Works on Maul, Swipe, Primal Bite and Lacerate." },
  rendAndTear: { name: "Rend and Tear", id: 1223246, tree: "F", row: 5, col: 0, max: 5, req: "predatoryStrikes",
    r1: "+3% melee ability damage vs Bleeding targets.", rmax: "+15%.",
    fx: [["Maul","dmg%",3],["Swipe","dmg%",3],["Primal Bite","dmg%",3],["Lacerate","dmg%",3]],
    tank: 5, why: "Your attacks deal 15% more damage to an enemy that is bleeding. Lacerate keeps your main target bleeding, so this is almost always active." },
  naturalReaction: { name: "Natural Reaction", id: 417051, tree: "F", row: 5, col: 3, max: 5,
    r1: "+1% Dodge; 20% chance for +5 Rage on dodge.", rmax: "+5% Dodge; 100% +5 Rage on dodge.",
    fx: [["Dodge","dodge",1],["Rage gen","rage","+5 per dodge"]],
    tank: 3, why: "5% more dodge, plus rage when you dodge. Not in this build, but a good swap for Rend and Tear points if you keep dying." },
  primalBite: { name: "Primal Bite", id: 407995, tree: "F", row: 6, col: 1, max: 1, lvl: 40, req: "leaderOfThePack",
    r1: "20 Rage, 6s CD: 100% weapon damage + 42 (R3 @60: +77). High threat. Ranks trained at 40/50/60.",
    fx: [["Primal Bite","grant","new ability"]],
    tank: 5, why: "The last talent in the Feral tree and your strongest threat button from level 40. Press it every time it's ready, and always keep 20 rage for it." },
  shiftingPower: { name: "Shifting Power", id: 1322605, tree: "F", row: 6, col: 2, max: 1, req: "predatoryDiscipline",
    r1: "Cat: convert 55% base mana → 40 Energy, 8s CD. Cost reduced by shapeshift-cost effects.",
    fx: [["Cat energy","energy",40]],
    tank: 0, why: "Cat Form only. Not useful for tanking." },

  // ---------------- RESTORATION ----------------
  naturesFocus: { name: "Nature's Focus", id: 17063, tree: "R", row: 0, col: 1, max: 5,
    r1: "14% chance Nature/Arcane spells don't get pushback.", rmax: "70%.", fx: [], tank: 0, why: "Caster talent." },
  heartOfTheWild: { name: "Heart of the Wild", id: 17003, tree: "R", row: 0, col: 2, max: 5,
    r1: "+2% Int; Bear +4% Stamina; Cat +2% Strength.", rmax: "+10% Int; Bear +20% Stamina; Cat +10% Str.",
    fx: [["Stamina","sta",4],["Intellect","int",2]],
    tank: 5, why: "20% more Stamina (so more health) in bear form. It's in the Restoration tree, and its 5 points also unlock Naturalist." },
  naturalist: { name: "Naturalist", id: 17069, tree: "R", row: 1, col: 0, max: 5,
    r1: "+2% all damage; HT/Wild Growth −0.1s cast.", rmax: "+10% ALL damage.",
    fx: [["All damage","dmg%",2],["Maul","dmg%",2],["Swipe","dmg%",2],["Primal Bite","dmg%",2],["Lacerate","dmg%",2]],
    tank: 5, why: "Everything you do deals 10% more damage, including normal swings and Thorns. Much better for a bear than its place in the Restoration tree suggests." },
  reflection: { name: "Reflection", id: 17106, tree: "R", row: 1, col: 1, max: 3,
    r1: "17% mana regen while casting.", rmax: "50%.", fx: [["Mana","mana","regen"]], tank: 1, why: "A leveling-sustain talent (Wowhead's open-world build)." },
  naturalShapeshifter: { name: "Natural Shapeshifter", id: 16833, tree: "R", row: 1, col: 2, max: 3,
    r1: "−10% shapeshift mana cost.", rmax: "−30%.", fx: [["Mana","mana","shift cost"]], tank: 1, why: "Leveling QoL when you shift often. It also lowers Shifting Power's cost." },
  bloom: { name: "Bloom", id: 1328621, tree: "R", row: 2, col: 3, max: 1,
    r1: "Rejuv/Regrowth expiring heals for 100% of Spirit (50% if dispelled).", fx: [], tank: 0, why: "Experimental open-world pick." },

  // ---------------- BALANCE ----------------
  genesis: { name: "Genesis", id: 1223081, tree: "B", row: 0, col: 2, max: 5,
    r1: "+2% periodic damage & healing.", rmax: "+10%.",
    fx: [["Lacerate","dot%",2],["Periodic","dot%",2]],
    tank: 2, why: "Makes Lacerate's bleed 10% stronger, but mostly you take it because you need 5 points in Balance to reach the next row." },
  naturesMajesty: { name: "Nature's Majesty", id: 1223082, tree: "B", row: 1, col: 2, max: 2,
    r1: "+2% spell & melee crit.", rmax: "+4%.", fx: [["Crit","crit",2]], tank: 4, why: "4% more chance to land critical hits, for 2 points." },
  naturesReach: { name: "Nature's Reach", id: 16819, tree: "B", row: 1, col: 3, max: 2,
    r1: "+2% hit; +10% Balance range.", rmax: "+4% hit.", fx: [["Hit","hit",2]], tank: 5, why: "4% more chance to hit. In Forever you need 8% to never miss a boss, so this covers half of it." },
};

/* Tree layout for the grid render (only talents we model are drawn; others shown as dim slots) */
const TREE_NAMES = { B: "Balance", F: "Feral Combat", R: "Restoration" };

/* ---------- LEVELING ORDER (Mono-Bear endpoint) ----------
   index 0 = level 10 point, index 50 = level 60 point.
   Validated at runtime: tier gates, max ranks, level reqs, prereqs.            */
const ORDER = [
  "ferocity","ferocity","ferocity","furor","ferocity",             // 10–14 (your actual picks: Ferocity 4 + Furor 1)
  "thickHide",                                                     // 15
  "feralSwiftness","feralSwiftness",                               // 16–17
  "feralInstinct","feralInstinct",                                 // 18–19 (row 3 opens)
  "savageFury","savageFury",                                       // 20–21
  "feralCharge",                                                   // 22
  "sharpenedClaws","sharpenedClaws",                               // 23–24 (row 4 opens)
  "lacerate",                                                      // 25
  "predatoryStrikes","predatoryStrikes","predatoryStrikes",        // 26–28
  "feralInstinct",                                                 // 29 (20 pts → row 5)
  "leaderOfThePack",                                               // 30
  "naturalInstinct","naturalInstinct",                             // 31–32
  "bloodFrenzy",                                                   // 33
  "thickHide",                                                     // 34 (25 pts → row 6)
  "rendAndTear","rendAndTear","rendAndTear","rendAndTear","rendAndTear", // 35–39 (30 pts)
  "primalBite",                                                    // 40
  "thickHide",                                                     // 41  → Feral 32 done
  "heartOfTheWild","heartOfTheWild","heartOfTheWild","heartOfTheWild","heartOfTheWild", // 42–46
  "naturalist","naturalist","naturalist","naturalist","naturalist",// 47–51
  "genesis","genesis","genesis","genesis","genesis",               // 52–56
  "naturesMajesty","naturesMajesty",                               // 57–58
  "naturesReach","naturesReach",                                   // 59–60
];

const ORDER_NOTES = {
  10: "Ferocity first. Each rank is −1 rage on Maul/Swipe/Primal Bite.",
  13: "Furor 1 (already spent): 20% chance for +10 rage when you shift into bear. It still counts toward the 5 points that unlock row 2.",
  14: "Ferocity 4/5. Row 2 unlocks. At 60 you skip the 5th rank, because rage is plentiful there.",
  15: "Thick Hide 1: the flat 3×level base armor is in rank 1. Ranks 2–3 only scale off excess Defense.",
  16: "Feral Swiftness: +4% dodge in bear now, +30% cat speed for questing at 20.",
  18: "Feral Instinct: Swipe makes more threat on groups of enemies.",
  20: "Cat Form quest “Blessings of the Great Windborne Cat Spirit” (Skyborne). Train Feral Charge (Bear) + Omen of Clarity.",
  25: "LACERATE. Your single-target rotation starts here.",
  30: "Leader of the Pack: party crit buff, and the gate to Primal Bite.",
  35: "Rend and Tear ×5: Lacerate keeps the target bleeding, so this works out to about +15% on every hit.",
  40: "PRIMAL BITE + Dire Bear Form + mount. The biggest power spike on the way to 60.",
  42: "Feral done (32). Heart of the Wild: +20% Stamina in bear.",
  47: "Naturalist: +10% to ALL damage.",
  52: "Genesis ×5 is mostly a gate. It does add +10% to the Lacerate bleed.",
  57: "Nature's Majesty: +4% crit.",
  59: "Nature's Reach: +4% hit (half of the 8% cap).",
};

/* ---------- ABILITY TRAINING (Wowhead, Forever trainer levels) ---------- */
const ABILITIES = [
  [10,"Bear Form","Your tanking form. Skyborne druids get it from the class quest Strength and Mercy.", "core"],
  [10,"Growl","Taunt: forces one enemy to attack you. Usable every 8 seconds.","core"],
  [12,"Enrage","Gives you rage right away and more over 10 seconds, but you have less armor while it lasts. Use it before a fight.","core"],
  [14,"Cure Poison","Removes a poison. Skyborne learn it from the trainer.","util"],
  [16,"Swipe","Hits up to 3 enemies in front of you. Your main way to hold several enemies.","core"],
  [18,"Faerie Fire","Lowers an enemy's armor. Works from 30 yards, so it's also how you start fights from range.","core"],
  [20,"Cat Form","Your damage form for questing alone. You get it from a class quest at level 20.","core"],
  [20,"Feral Charge","Jump at an enemy from 8 to 25 yards in bear form. Learnable from the trainer at 20.","core"],
  [20,"Omen of Clarity","Your attacks sometimes make your next ability free.","core"],
  [24,"Remove Curse","Removes a curse. Cast it in normal (caster) form.","util"],
  [24,"Tiger's Fury","A Cat Form damage boost.","cat"],
  [25,"Lacerate","A stacking bleed with high threat. Comes from talents.","core"],
  [28,"Challenging Roar","Forces every enemy around you to attack you for 6 seconds. Usable once every 10 minutes.","core"],
  [30,"Travel Form","Run 40% faster outdoors.","util"],
  [32,"Poised","New in Forever, Cat Form only: your first ability after resting at full energy costs less.","cat"],
  [36,"Frenzied Regeneration","Turns your rage into health over 10 seconds. Usable every 3 minutes.","core"],
  [40,"Dire Bear Form","Replaces Bear Form. Same bear, with much more armor, health and attack power.","core"],
  [40,"Primal Bite","A big bite with very high threat. Usable every 6 seconds. Comes from talents.","core"],
  [40,"Innervate","Cast on yourself or a healer to restore mana much faster for 20 seconds.","util"],
  [40,"Feline Grace","Passive: you take less falling damage.","util"],
  [44,"Barkskin","You take 20% less physical damage for 15 seconds. Works in bear form in Forever.","core"],
  [46,"Bash","Stuns an enemy for 4 seconds at this rank.","util"],
  [52,"Demoralizing Roar","Its strongest rank: enemies around you hit you much softer for 30 seconds.","core"],
  [54,"Faerie Fire / Swipe","Their strongest ranks.","core"],
  [58,"Maul / Lacerate","Their strongest ranks.","core"],
  [60,"Primal Bite","Its strongest rank.","core"],
];

/* ---------- CHECKPOINTS 13 → 60 (Horde) ----------
   items: [name, wowhead item id or null, source, flag]  flag: "v" verified in Forever DB, "c" Classic data/unverified, "q" quest  */
const CHECKPOINTS = [
  { lv: "13–16", title: "Ragefire Chasm",
    where: "Ragefire Chasm is the dungeon inside Orgrimmar. Pick up its quests in Orgrimmar first, then run it once with the quests. (Forever also added a new dungeon for this level, Hall of Thanes, but its entrance is inside the Alliance city of Ironforge, so Horde players can't really reach it.)",
    talents: "Ferocity rank 4 at level 14, Thick Hide rank 1 at 15, Feral Swiftness rank 1 at 16",
    train: "Visit your druid trainer: Enrage at level 12 and Swipe at level 16. Also learn Cooking, First Aid and Fishing now. They're cheap and you'll want them later.",
    items: [],
    tips: [
      "Below level 20 your bear attacks are weak, and Wowhead found that hitting things in normal caster form does about the same damage. Still tank in Bear Form: you get much more armor and the rage you need for Maul and Swipe.",
      "Good main professions for leveling: Leatherworking and Skinning. You can skin the animals you kill and turn the leather into armor upgrades.",
      "Legacy points are Forever's account-wide bonuses. Wowhead suggests spending your first 5 on Thrill of Adventure, then Well Rested, then Talented.",
    ],
    done: "You have Ferocity 4 and Furor 1, you've learned Swipe, and you've started Fishing, Cooking and First Aid" },
  { lv: "17–22", title: "Wailing Caverns",
    where: "Wailing Caverns, in the Northern Barrens. It's the main Horde dungeon for these levels, and it drops the Fang set: five leather pieces that are great for a druid. (Deadmines is a similar Alliance-side dungeon. You can skip it.)",
    talents: "Feral Swiftness rank 2, Feral Instinct ranks 1 and 2, Savage Fury ranks 1 and 2 (levels 20 and 21), Feral Charge (level 22)",
    train: "Faerie Fire at level 18. At level 20 your trainer gives you a quest for Cat Form, and teaches you Feral Charge and Omen of Clarity.",
    items: [
      ["Armor of the Fang",6473,"Lord Pythas (Wailing Caverns)","v"],["Leggings of the Fang",10410,"Lord Cobrahn (Wailing Caverns)","v"],
      ["Gloves of the Fang",10413,"Druid of the Fang (Wailing Caverns)","v"],["Belt of the Fang",10412,"Lady Anacondra (Wailing Caverns)","v"],
      ["Footpads of the Fang",10411,"Lord Serpentis (Wailing Caverns)","v"],["Serpent's Shoulders",5404,"Lady Anacondra (Wailing Caverns)","v"],
      ["Sporid Cape",6629,"Verdan the Everliving (Wailing Caverns)","v"],["Hammerbone",270018,"Quest: Leaders of the Fang","q"],
      ["Crescent Staff",6505,"Quest: Leaders of the Fang","q"],["Segmented Spider Leg",271203,"Witherfang (Ruins of Lordaeron)","v"],
    ],
    tips: [
      "If you wear enough Fang set pieces, the set bonus (Embrace of the Viper) gives extra stats.",
      "Feral Charge makes you run at an enemy from 8 to 25 yards away. Start fights with it: it gets the enemy's attention and stops a spell they're casting.",
    ],
    done: "You have at least 3 Fang set pieces, Cat Form, and Savage Fury 2 of 2" },
  { lv: "22–27", title: "Shadowfang Keep & Blackfathom Deeps",
    where: "Shadowfang Keep (a castle in Silverpine Forest) and Blackfathom Deeps (an underwater cave on the coast of Ashenvale). Forever also added a new dungeon for these levels: Excavation Site in the Wetlands (levels 24 to 29).",
    talents: "Sharpened Claws ranks 1 and 2 (levels 23 and 24), Lacerate (level 25), Predatory Strikes ranks 1 and 2",
    train: "At level 24: Remove Curse, a stronger rank of Swipe, and Tiger's Fury (a Cat Form ability).",
    items: [
      ["Seal of Sylvanas",6414,"Quest: Arugal Must Die (Shadowfang Keep)","q"],["Deepgrave Trousers",279900,"Quest: An Ancient Grudge","q"],
      ["Catacomb Cloak",279899,"Quest: An Ancient Grudge","q"],["Grave Shroud",279865,"Quest: Abominable Creatures / Unending Torment","q"],
      ["Tarnished Locket",279870,"Quest: Remember That I Love You","q"],["Rugged Spaulders",5254,"Rethilgore (Shadowfang Keep)","v"],
      ["Gloomshroud Armor",1489,"Random drop in Shadowfang Keep","v"],["Cultist's Armguards",270032,"Quest: Blackfathom Villainy (Blackfathom Deeps)","q"],
      ["Band of the Fist",17694,"Quest: Allegiance to the Old Gods (Blackfathom Deeps)","q"],
    ],
    tips: [
      "Lacerate is a new talent button at level 25: a bleed that you can stack on an enemy up to 5 times. For now, put one stack on the enemy you're killing, then use Maul and Swipe. Stacking all 5 is only worth it on long boss fights.",
      "Before you enter a dungeon, pick up every quest for it (they're spread around the nearby zones). Enemies inside give less experience than quests do, so the quest rewards are where most of the value is.",
    ],
    done: "You've learned Lacerate and have the Seal of Sylvanas ring plus Shadowfang Keep quest gear" },
  { lv: "27–32", title: "Razorfen Kraul & Gnomeregan",
    where: "Razorfen Kraul (in the Southern Barrens) and Gnomeregan (in Dun Morogh, a long trip for Horde but worth it for the Manual Crowd Pummeler weapon). Forever also added a new dungeon: City of Dalaran in the Alterac Mountains (levels 28 to 33).",
    talents: "Predatory Strikes rank 3 (level 28), Feral Instinct rank 3 (29), Leader of the Pack (30), Natural Instinct ranks 1 and 2",
    train: "Challenging Roar at level 28. Travel Form (a faster outdoor form) and a stronger Faerie Fire at level 30.",
    items: [
      ["Manual Crowd Pummeler",9449,"Crowd Pummeler 9-60 (a boss in Gnomeregan). Your best weapon until about level 40","v"],
      ["Ferine Leggings",6690,"Agathelos the Raging (Razorfen Kraul)","v"],["Thorncursed Grips",274159,"Aggem Thorncurse (Razorfen Kraul)","v"],
      ["Wolfclaw Gloves",1978,"Random drop in Razorfen Kraul","v"],["Skullduggery Belt",274042,"Grubbis (Gnomeregan)","v"],
      ["Monkey Ring",6748,"Quest: Willix the Importer (Razorfen Kraul)","q"],["Triprunner Dungarees",9624,"Quest: The Grand Betrayal (Horde, Gnomeregan)","q"],
      ["Tiger Hunter Gloves",4107,"Quest: Tiger Mastery (Stranglethorn Vale)","q"],["Charged Leather Bracers",270055,"Quest: Power Stones","q"],
      ["Heavy Earthen Gloves",7359,"Made by leatherworkers, or buy it at the Auction House","v"],["Raptor Hide Harness",4455,"Made by leatherworkers, or buy it at the Auction House","v"],
    ],
    tips: [
      "In bear form your hits are based on your weapon's damage per second (the DPS number on the weapon), times 2.5. Weapon speed doesn't matter. That's why the Manual Crowd Pummeler, a two-handed mace with high DPS for its level, is such a big upgrade.",
      "Skip Shredding Attacks. It only helps Cat Form and does almost nothing for a bear.",
    ],
    done: "You have the Manual Crowd Pummeler, Leader of the Pack and Travel Form" },
  { lv: "30–40", title: "Scarlet Monastery",
    where: "Scarlet Monastery, in Tirisfal Glades near Undercity. It has four separate parts (called wings). Do them in this order as you level: Graveyard, Library, Armory, Cathedral. Forever also added a new dungeon: The Drowned City (levels 35 to 40).",
    talents: "Natural Instinct rank 2 (level 32), Blood Frenzy rank 1 (33), Thick Hide rank 2 (34), Rend and Tear ranks 1 to 5 (levels 35 to 39)",
    train: "A stronger Swipe and Rake (a Cat Form ability) at level 34. Frenzied Regeneration at level 36.",
    items: [
      ["Ghostshard Talisman",7731,"Azshir the Sleepless (Scarlet Monastery Graveyard, a rare boss)","v"],["Ironspine's Eye",7686,"Ironspine (Scarlet Monastery Graveyard, a rare boss)","v"],
      ["Ebon Vise",7690,"Fallen Champion (Scarlet Monastery Graveyard, a rare boss)","v"],["Dog Whistle",3456,"Houndmaster Loksey (Scarlet Monastery Library)","v"],
      ["Mograine's Might",7723,"Scarlet Commander Mograine (Scarlet Monastery Cathedral). Two-handed mace","c"],
      ["Vorrel's Boots",7751,"Quest: Vorrel's Revenge","q"],["Explorer's League Dustcover",271716,"Quest: Prehistoric Prism","q"],
      ["Watchman Pauldrons",7727,"Quest reward or drop (recommended by players)","v"],["Barbaric Shoulders",5964,"Made by leatherworkers","v"],
      ["Nightscape Tunic",8175,"Made by leatherworkers, or buy it at the Auction House","v"],["Nightscape Headband",8176,"Made by leatherworkers, or buy it at the Auction House","v"],
      ["Nightscape Shoulders",8192,"Made by leatherworkers, or buy it at the Auction House","v"],["Barbaric Harness",5739,"Made by leatherworkers, or buy it at the Auction House","v"],
      ["Shadowskin Gloves",18238,"Made by leatherworkers, or buy it at the Auction House","v"],
    ],
    tips: [
      "Rend and Tear makes all your attacks hit harder, but only against an enemy that is bleeding. Lacerate is what makes them bleed, so keep at least one Lacerate stack on the enemy you're fighting.",
      "Frenzied Regeneration (level 36) turns your rage into health over 10 seconds. It can heal you all the way to full. It's your emergency heal, and it works best if you press it before you're low.",
    ],
    done: "You have Rend and Tear 5 of 5 by level 39 and have cleared the Scarlet Monastery Cathedral" },
  { lv: "40", title: "Level 40 power spike",
    where: "Go to your druid trainer. (Teleport: Moonglade takes you to the druid town of Moonglade for free.) Level 40 also lets you buy your first mount. If you can't afford it yet, Travel Form is almost as fast outdoors.",
    talents: "Primal Bite (level 40), Thick Hide rank 3 (41). That finishes the 32 points in Feral Combat.",
    train: "Dire Bear Form (an upgrade that replaces Bear Form: same bear, more armor and health), Primal Bite, Innervate, Feline Grace",
    items: [
      ["Wolfshead Helm",8345,"Made by leatherworkers (usable from level 45). Gives extra rage when you press Enrage","v"],
    ],
    tips: [
      "Dire Bear Form multiplies the armor on your gear by 4.6. Because of that, gear with a high armor number gets much better for you. Compare armor, not just stats, when you pick upgrades.",
      "Your buttons from now on: press Primal Bite every time it's ready, keep Lacerate at 5 stacks, and press Maul when you have more than 35 rage. Don't spend so much rage on Maul that you can't afford Primal Bite.",
      "Wolfshead Helm is a leather helmet that leatherworkers can make. When you press Enrage while wearing it, you get extra rage. Some players wear it just before a fight to start with more rage, then swap back to their normal helmet.",
    ],
    done: "You have Dire Bear Form, Primal Bite and a mount" },
  { lv: "40–46", title: "Razorfen Downs & Uldaman",
    where: "Razorfen Downs (in the Southern Barrens), then Uldaman (in the Badlands). Forever also added a new dungeon: Krol'dok Stronghold in the Riverglades (levels 40 to 45).",
    talents: "Heart of the Wild ranks 1 to 5 (levels 42 to 46). It gives you 20% more Stamina in bear form.",
    train: "A stronger Faerie Fire at level 42. Barkskin and a stronger Swipe at level 44.",
    items: [
      ["Ironshod Bludgeon",9408,"Archaedas, the last boss of Uldaman. A staff","v"],
      ["Nightscape Pants",8193,"Made by leatherworkers, or buy it at the Auction House","v"],["Nightscape Boots",8197,"Made by leatherworkers, or buy it at the Auction House","v"],
      ["Wild Leather Vest",8211,"Made by leatherworkers, or buy it at the Auction House. Its bonus stats are random: look for “of the Bear” or “of the Monkey” in the name","v"],
      ["Wild Leather Helmet",8214,"Made by leatherworkers, or buy it at the Auction House. Look for “of the Bear” or “of the Monkey”","v"],
    ],
    tips: [
      "Barkskin makes you take 20% less physical damage for 15 seconds. In Forever you can use it in bear form, and it's ready again after 1 minute, so use it on every dangerous fight.",
      "Wowhead doesn't show most dungeon loot for levels 40 to 60 yet, because Forever hides items until players find them. Items marked “Classic” use their original Classic stats, which Forever may have changed.",
    ],
    done: "You have Heart of the Wild 5 of 5, Barkskin, and a weapon with at least 37 damage per second" },
  { lv: "46–52", title: "Zul'Farrak & Maraudon",
    where: "Zul'Farrak (in the Tanaris desert), then Maraudon (in Desolace), then Sunken Temple (in the Swamp of Sorrows). Forever also added a new dungeon: Alcaz Island Prison in Dustwallow Marsh (levels 48 to 53).",
    talents: "Naturalist ranks 1 to 5 (levels 47 to 51). It makes everything you do 10% stronger.",
    train: "Stronger ranks of Bash and Dash at level 46, and of Demoralizing Roar at level 52.",
    items: [
      ["Princess Theradras' Scepter",17766,"Princess Theradras, the last boss of Maraudon. Two-handed mace","c"],
      ["Blackstone Ring",17713,"Princess Theradras (Maraudon)","c"],["Embrace of the Lycan",9479,"Chief Ukorz Sandscalp (Zul'Farrak). Leather helmet","c"],
      ["Wild Leather Leggings",8212,"Made by leatherworkers, or buy it at the Auction House. Look for “of the Bear” or “of the Monkey”","v"],
    ],
    tips: [
      "Start earning reputation with Timbermaw Hold (a friendly furbolg faction in Felwood) by killing the furbolgs there. At high enough reputation, leatherworkers can learn the Warbear Harness and Warbear Woolies, two of the best bear chest and leg pieces.",
      "Use Demoralizing Roar on every group of enemies. It makes all of them hit you softer, and one roar covers everyone around you.",
    ],
    done: "You have Naturalist 5 of 5 and have started Timbermaw Hold reputation" },
  { lv: "52–58", title: "Blackrock Depths",
    where: "Blackrock Depths, inside Blackrock Mountain between the Searing Gorge and the Burning Steppes. It's a huge dungeon with lots of quests and good loot, so you'll run it many times.",
    talents: "Genesis ranks 1 to 5 (levels 52 to 56), Nature's Majesty ranks 1 and 2 (57 and 58)",
    train: "The strongest ranks of Faerie Fire and Swipe at level 54, and of Maul and Lacerate at level 58.",
    items: [
      ["Warbear Harness",15064,"Made by leatherworkers who have the pattern from Timbermaw Hold reputation","v"],
      ["Warbear Woolies",15065,"Made by leatherworkers who have the pattern from Timbermaw Hold reputation","v"],
      ["Devilsaur Gauntlets",15063,"Made by leatherworkers","v"],
      ["Devilsaur Leggings",15062,"Made by leatherworkers","v"],
      ["Stormshroud Armor",15056,"Made by leatherworkers","v"],
      ["Dark Iron Pulverizer",11608,"Random drop in Blackrock Depths, often sold at the Auction House. Two-handed mace","v"],
      ["Ironfoe",11684,"Emperor Dagran Thaurissan, the last boss of Blackrock Depths","c"],
      ["Hand of Justice",11815,"Bosses in Blackrock Depths. A trinket","c"],
    ],
    tips: [
      "Armor kits are leatherworking items you apply to your gear for extra armor. Method.gg thinks there may be a bug where bear form multiplies the armor from kits too. If that's true, the Rugged Armor Kit becomes your best upgrade in most slots. Keep an eye on patch notes.",
    ],
    done: "You have the Warbear or Devilsaur pieces and a weapon with at least 47 damage per second" },
  { lv: "58–60", title: "Endgame dungeons",
    where: "The level 60 dungeons: Blackrock Spire, Stratholme, Scholomance and Dire Maul. Forever also added Blackmaw Hold (levels 55 to 60) and Shaper's Terrace (58 to 60). Start collecting Dungeon Set 1, the druid armor set that drops in these dungeons.",
    talents: "Nature's Reach ranks 1 and 2 (levels 59 and 60). That completes the build: 9 Balance, 32 Feral Combat, 10 Restoration.",
    train: "The strongest rank of Primal Bite and the final ranks of your other abilities at level 60.",
    items: [
      ["Shadowcraft Cap",16707,"Part of Dungeon Set 1 (level 60 dungeons)","v"],["Shadowcraft Tunic",16721,"Part of Dungeon Set 1 (level 60 dungeons)","v"],
      ["Shadowcraft Pants",16709,"Part of Dungeon Set 1 (level 60 dungeons)","v"],["Shadowcraft Spaulders",16708,"Part of Dungeon Set 1 (level 60 dungeons)","v"],
      ["Blackhand's Breadth",13965,"General Drakkisath, the last boss of Upper Blackrock Spire. A trinket","c"],
      ["Hammer of the Grand Crusader",18717,"Stratholme (the living side). Two-handed mace","c"],
      ["Cadaverous Armor",14637,"Scholomance. Chest armor","c"],
    ],
    tips: [
      "Raid bosses are level 63, and Method.gg says you need 440 Defense skill (shown on your character sheet) before they can no longer land critical hits on you. Start tracking it once you hit 60.",
    ],
    done: "You're level 60, have the full talent build, and own some Dungeon Set 1 pieces" },
  { lv: "60", title: "Pre-raid gear",
    where: "The best gear before raiding, from PvP, reputation and vendors. This list follows Wowhead's Phase 1 best-in-slot guide.",
    talents: "Final build: 9 Balance, 32 Feral Combat, 10 Restoration (Wowhead calls it “Mono-Bear”). If you also want to play Cat Form, Wowhead's “Hybrid” version swaps Blood Frenzy for Predatory Discipline and Shifting Power.",
    train: "-",
    items: [
      ["Amulet of the Darkmoon",19491,"Darkmoon Faire (a traveling fair), bought with 1200 prize tickets","v"],
      ["Watcher's Signet of Vigilance",275980,"Reputation with The Watchers (at Revered)","v"],
      ["Don Julio's Band",19325,"A ring","v"],
      ["Howler's Furs",272414,"Sold by Pix Xizzix, a vendor in Stranglethorn Vale","v"],
      ["Adaptive Combat Assistant",272437,"Sold by Pix Xizzix, a vendor in Stranglethorn Vale. A trinket","v"],
      ["Cleansed Vilebranch Medallion",270275,"A trinket that gets 3 times stronger in forest and grassland areas","v"],
      ["Enraged Idol",272428,"Sold by Pix Xizzix, a vendor in Stranglethorn Vale. An idol (druid relic slot) that gives extra rage when you press Enrage","v"],
      ["The Unstoppable Force",19323,"Alterac Valley battleground reward (Horde quartermaster). Two-handed mace","v"],
      ["Rune of the Guard Captain",19120,"Horde quest reward. A trinket that gets 3 times stronger in forest and grassland areas","v"],
      ["Defiler's Leather Shoulders",20194,"Reputation with The Defilers (Arathi Basin battleground), at Exalted","v"],
      ["Premier Beasthide PvP set",272760,"PvP vendor. Wearing all 6 pieces gives extra Stamina, attack power and form speed","v"],
    ],
    tips: [
      "Your Skyborne racial Elemental Insight gives you 5% more damage against elementals. Molten Core, the first raid, is full of them.",
      "The druid tier set bonuses on Wowhead were found in the game files and may still change.",
    ],
    done: "You have 8% hit chance (4% from Nature's Reach plus 4% from gear) and are working toward 440 Defense" },
];

/* ---------- ROTATION ---------- */
const ROTATION = {
  prepull: [
    "Cast Mark of the Wild and Thorns on yourself.",
    "Shift into Bear Form. (At level 40 the trainer teaches you Dire Bear Form. It's the same bear, just stronger, and it replaces Bear Form.)",
    "Press Enrage. It gives you some rage right away, so you can start making threat from your first hit.",
    "Press Maul. It doesn't fire right away. It waits and replaces your next normal swing with a harder hit.",
    "Start the fight with Faerie Fire. It works from range and pulls the enemy to you. From level 20 you can use Feral Charge to jump in instead.",
  ],
  single: [
    ["Lacerate","if 5 stacks AND ≤3s remaining → refresh (never let it drop)"],
    ["Faerie Fire","if no armor debuff on target"],
    ["Primal Bite","off cooldown (6s). TOP PRIORITY for threat"],
    ["Demoralizing Roar","if no AP-reduction debuff"],
    ["Lacerate","filler (stack to 5)"],
    ["Maul","off-GCD, rage > 35, unless that would starve Primal Bite"],
  ],
  cleave: [
    ["Faerie Fire","primary"],["Primal Bite","on CD"],["Demoralizing Roar","maintain"],
    ["Lacerate","if no bleed on primary (Rend and Tear uptime)"],["Swipe","filler"],["Maul","rage > 35"],
  ],
  aoe: [
    ["Faerie Fire","primary target"],["Demoralizing Roar","all"],["Swipe","spam (3 targets, +30% FI, +10% SF)"],
    ["Maul","rage > 35"],["Challenging Roar","emergency: 6s, 10 min CD"],
  ],
  defensive: [
    ["Barkskin","−20% physical, 15s / 1 min. Usable in form (Forever change). Use proactively."],
    ["Frenzied Regeneration","10 rage/s → 10% HP/s for 10s (up to 100% HP), 3 min. Start before you're low."],
    ["Greater Stoneshield Potion","hard-hitting bosses (shares potion CD)"],
    ["Challenging Roar","threat recovery, not a permanent threat lead"],
  ],
  forms: [
    ["Bear / Dire Bear","Use it whenever you're tanking. Shifting costs mana. The Idol of Shifting Tides (Skyborne quest reward at level 4) makes it cheaper."],
    ["Cat","For questing alone from level 20. Use Claw as your main attack. Use Shred only when Omen of Clarity makes it free."],
    ["Caster","Drop out of bear to cast Innervate, Rebirth, Remove Curse, Abolish Poison, or to heal between fights. You take much more damage in caster form, so only do it when nothing is hitting you."],
    ["Shifting for rage","Don't bother. Forever already gives bears plenty of rage when they get hit, so shifting in and out for rage isn't worth it."],
    ["Mana","Your mana comes back while you fight in bear or cat, so you don't need to drink after every fight."],
  ],
};

/* ---------- MECHANICS / MATH (Forever vs Classic) ---------- */
const MECHANICS = [
  ["Bear damage","Your bear attacks are based on your weapon's damage per second, times 2.5. Weapon speed doesn't matter. Every 14 attack power adds 1 damage per second.","Method.gg"],
  ["Armor","Dire Bear Form multiplies the armor on your gear by 4.6. Bear Form multiplies it by 2.8. The bonus armor from Thick Hide is multiplied too. Armor can never reduce damage by more than 75%.","Wowhead tooltips / Method.gg"],
  ["Rage","Forever gives you more rage when you get hit than Classic did. Against a boss that hits you you'll rarely run out, so talents that give rage are worth less.","Wowhead (L0uki)"],
  ["Hit chance","Melee and spell hit chance are the same stat in Forever. You need 8% to never miss a boss.","Method.gg"],
  ["Defense","With 440 Defense skill, level 63 raid bosses can no longer land critical hits on you.","Method.gg"],
  ["Stats","1 Strength = 2 attack power. Agility gives a little crit, dodge and armor. 1 Stamina = 10 health. Intellect and Spirit do almost nothing for a bear.","Method.gg"],
  ["Threat","Bear form makes everything you do cause 115% more threat.","Leprestore"],
  ["Items in forms","In Forever you can use many items without leaving your form. Sharpening stones and weightstones now make your bear attacks stronger.","Method.gg / Wowhead"],
  ["Below level 20","Bear attacks barely get stronger in the first levels. Hitting things in caster form with Thorns up can do about as much damage.","Wowhead"],
];

const STATS = {
  priority: "Weapon damage per second, then Strength, then hit chance (up to 8%), then crit, then Agility.",
  defense: "Stamina and armor first, then Agility, then dodge. Raids may also need 440 Defense.",
  note: "Method.gg says it's too early in Forever to know exact stat values.",
};

const ENCHANTS = [
  ["Weapon","Crusader, +Strength, or Impact"],["Neck","Deflection or Strength (necks can be enchanted in Forever)"],
  ["Back","Defense, Agility or Dodge"],["Chest","Wild Leather Armor Kit or +Stamina (Rugged Armor Kit*)"],
  ["Wrist","Deflection, +Stamina or +Strength"],["Hands","Wild Leather Armor Kit or +Strength"],
  ["Legs","Wild Leather or Rugged Armor Kit*"],["Feet","Wild Leather, run speed, or Rugged Armor Kit*"],
  ["Head and shoulders","Not known yet"],
];
const CONSUMABLES = [
  ["Dense Sharpening Stone or Weightstone","Now makes your bear attacks stronger"],["Mighty Rage Potion","Gives rage and Strength for 20 seconds"],
  ["Greater Stoneshield Potion","A lot of extra armor, for bosses that hit hard"],["Gift of Arthas","A classic tank buff food"],
  ["Dirge's Kickin' Chimaerok Chops","Food that gives Stamina"],["Dragonbreath Chili","Food that deals extra damage, so more threat"],
  ["Any food buff while leveling","In Forever, being Well Fed gives 5% more experience from kills. Keep a food buff up."],
];

const RACIALS = [
  ["Wind Blessed","Passive: you attack 2% faster. More swings means more rage."],
  ["Skysight","Run 15% faster for 15 seconds, usable every 2 minutes. Doesn't work inside raids."],
  ["Walk on Air","Glide for 10 seconds, usable every 90 seconds. Lets you safely jump off ledges, for example in Blackrock Depths."],
  ["Elemental Insight","5% more damage against elementals. Good for Molten Core, the first raid."],
];

const SOURCES = [
  ["Wowhead: Feral Tank Leveling (L0uki, 2026-11-04)","https://www.wowhead.com/forever/guide/classes/druid/feral/tank-leveling-tips"],
  ["Wowhead: Talent Builds","https://www.wowhead.com/forever/guide/classes/druid/feral/talent-builds-pve-tank"],
  ["Wowhead: Rotation & Cooldowns","https://www.wowhead.com/forever/guide/classes/druid/feral/rotation-cooldowns-pve-tank"],
  ["Wowhead: Level 20 / 30 gearing","https://www.wowhead.com/forever/guide/classes/druid/feral/level-30-tank-overview"],
  ["Wowhead: Phase 1 BiS","https://www.wowhead.com/forever/guide/classes/druid/feral/bis-gear-tank"],
  ["Wowhead Forever Talent Calculator","https://www.wowhead.com/forever/talent-calc/druid"],
  ["Method: Feral Tank Druid","https://www.method.gg/wow-forever/class-guides/feral-tank-druid"],
  ["Leprestore: Feral Druid Guide","https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-feral-druid-guide-best-builds-rotation-tanking-race-professions/"],
  ["wowtbc.gg: Feral Tank BiS","https://wowtbc.gg/warcraftforever/bis-list/feral-tank-druid/"],
];
