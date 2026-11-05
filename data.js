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
    tank: 4, why: "−5 on a 15-rage Maul is −33%, and on 20-rage Swipe/PB it's −25%. It's the best rage talent while leveling, when incoming damage is low. At 60, rage on damage taken is calculated as if you had 40% DR, so you have rage to spare and this matters less." },
  furor: { name: "Furor", id: 17056, tree: "F", row: 0, col: 2, max: 5,
    r1: "20% chance: +10 Rage on Bear shift; Cat shift restores 20% of stored Energy (+2/s outside bear, cap 20).", rmax: "100% / 100% / +10 per s, cap 100.",
    fx: [["Rage gen","rage","10 on shift @5/5"],["Cat energy","energy","shift restore"]],
    tank: 1, why: "Nerfed. Bears rarely shift mid-pull, and Forever's rage formula already floods you. It's a cat talent. Skip it." },
  feralSwiftness: { name: "Feral Swiftness", id: 17002, tree: "F", row: 1, col: 0, max: 2,
    r1: "+15% Cat move speed, +2% Dodge.", rmax: "+30% Cat speed, +4% Dodge.",
    fx: [["Dodge","dodge",2],["Movement","move","+15% cat"]],
    tank: 4, why: "4% dodge applies in every form, and cat speed is the best leveling QoL talent there is. Wowhead says to take it as soon as you have Cat Form." },
  feralInstinct: { name: "Feral Instinct", id: 16947, tree: "F", row: 1, col: 1, max: 3,
    r1: "Swipe damage +10%.", rmax: "Swipe damage +30%.",
    fx: [["Swipe","dmg%",10]],
    tank: 4, why: "Swipe scales with AP in Forever, so +30% Swipe is +30% AoE threat on every trash pack." },
  brutalImpact: { name: "Brutal Impact", id: 16940, tree: "F", row: 1, col: 2, max: 2,
    r1: "Bash/Pounce stun +0.5s, Bash CD −15s.", rmax: "+1s stun, Bash CD −30s.",
    fx: [["Bash","cd",-15]],
    tank: 1, why: "Most bosses are stun-immune, so it's a PvP talent." },
  thickHide: { name: "Thick Hide", id: 16929, tree: "F", row: 1, col: 3, max: 3,
    r1: "In forms: +3 × level base Armor (180 @60) and +0.67 Armor per Defense skill above 5×level. Multiplied by form armor mods.", rmax: "Same flat part, +2.00 Armor per excess Defense point.",
    fx: [["Armor","armor","3×lvl base ×form mult"]],
    tank: 4, why: "The tooltip shows the same flat 3×level part at every rank, and the base armor gets the form multiplier (×4.6 in Dire Bear) → ≈ +828 armor at 60. Ranks 2–3 only scale with Defense from gear. For dungeons, Wowhead suggests moving points from here into Blood Frenzy. Check your character sheet after each rank." },
  feralCharge: { name: "Feral Charge", id: 1238122, tree: "F", row: 2, col: 2, max: 1, lvl: 20,
    r1: "Bear: 5 Rage, 8–25yd charge, 4s immobilize + interrupt, 15s CD. Cat: leap behind target, 30s CD.",
    fx: [["Utility","util","interrupt + gap close"]],
    tank: 4, why: "Gap closer and interrupt, and it puts the first threat on a pull. It's a gateway point in row 3." },
  shreddingAttacks: { name: "Shredding Attacks", id: 16966, tree: "F", row: 2, col: 0, max: 3,
    r1: "Shred −6 Energy, Lacerate −1 Rage.", rmax: "Shred −18 Energy, Lacerate −3 Rage.",
    fx: [["Lacerate","cost",-1],["Shred","cost",-6]],
    tank: 1, why: "Only −3 on Lacerate. Cat-only value." },
  savageFury: { name: "Savage Fury", id: 16998, tree: "F", row: 2, col: 1, max: 2,
    r1: "+5% damage: Claw, Rake, Shred, Maul, Swipe.", rmax: "+10%.",
    fx: [["Maul","dmg%",5],["Swipe","dmg%",5],["Claw/Rake","dmg%",5],["Shred","dmg%",5]],
    tank: 4, why: "+10% on both bear spenders. Also the prerequisite for Lacerate." },
  sharpenedClaws: { name: "Sharpened Claws", id: 16942, tree: "F", row: 2, col: 3, max: 2,
    r1: "+3% crit in Bear/Cat.", rmax: "+6% crit.",
    fx: [["Crit","crit",3]],
    tank: 5, why: "6% crit for 2 points. It feeds Blood Frenzy rage and Natural Instinct crit damage." },
  predatoryStrikes: { name: "Predatory Strikes", id: 16972, tree: "F", row: 3, col: 0, max: 3,
    r1: "+50% of level as AP in forms.", rmax: "+150% of level (= +90 AP @60).",
    fx: [["AP","ap","0.5×lvl"]],
    tank: 4, why: "+90 AP at 60. 14 AP = 1 weapon DPS, and paw damage = weapon DPS × 2.5. Prerequisite for Rend and Tear." },
  lacerate: { name: "Lacerate", id: 1328617, tree: "F", row: 3, col: 1, max: 1, lvl: 25, req: "savageFury",
    r1: "15 Rage: bleed 20 over 15s (R5: 75) + 10% weapon dmg per existing stack. High threat. Stacks to 5. Ranks trained up to R5 at 58.",
    fx: [["Lacerate","grant","new ability"],["Bleed uptime","util","enables Rend and Tear"]],
    tank: 5, why: "This is the core single-target tool. Its bleed keeps Rend and Tear active, and its threat coefficient is high." },
  predatoryDiscipline: { name: "Predatory Discipline", id: 1328613, tree: "F", row: 3, col: 2, max: 1,
    r1: "Ferocious Bite keeps the excess-energy damage but no longer consumes the extra Energy.",
    fx: [["Ferocious Bite","util","no energy dump"]],
    tank: 0, why: "Cat only. It's needed for Shifting Power." },
  bloodFrenzy: { name: "Blood Frenzy", id: 16958, tree: "F", row: 3, col: 3, max: 2,
    r1: "50%: +5 Rage on Bear crit; Cat CP-generator crits 50% extra CP.", rmax: "100% / 100%.",
    fx: [["Rage gen","rage","+5 per crit"],["Crit","synergy","needs crit"]],
    tank: 3, why: "Mono-Bear takes 1/2. With roughly 20–25% crit, 2/2 is a meaningful rage source in dungeons, where you take less damage than on raid bosses." },
  leaderOfThePack: { name: "Leader of the Pack", id: 17007, tree: "F", row: 4, col: 1, max: 1,
    r1: "In forms: +3% crit to party/raid within 45yd (not with Moonkin Aura).",
    fx: [["Crit","crit",3],["Raid buff","util","+3% party crit"]],
    tank: 5, why: "A raid buff plus 3% crit for you. Prerequisite for Primal Bite." },
  naturalInstinct: { name: "Natural Instinct", id: 1223242, tree: "F", row: 4, col: 3, max: 2,
    r1: "Melee ability crit damage bonus +10%; spell healing +12% of Int.", rmax: "+20% crit bonus; +25% of Int as healing.",
    fx: [["Crit dmg","critdmg",10]],
    tank: 4, why: "Crit damage bonus 100% → 120% (2.0× → 2.2×) on Maul, Swipe, PB and Lacerate hits. It scales with all the crit you stack." },
  rendAndTear: { name: "Rend and Tear", id: 1223246, tree: "F", row: 5, col: 0, max: 5, req: "predatoryStrikes",
    r1: "+3% melee ability damage vs Bleeding targets.", rmax: "+15%.",
    fx: [["Maul","dmg%",3],["Swipe","dmg%",3],["Primal Bite","dmg%",3],["Lacerate","dmg%",3]],
    tank: 5, why: "Lacerate means your single target is always bleeding, so this is close to a flat +15% on every hit. On AoE it applies only to targets carrying a bleed." },
  naturalReaction: { name: "Natural Reaction", id: 417051, tree: "F", row: 5, col: 3, max: 5,
    r1: "+1% Dodge; 20% chance for +5 Rage on dodge.", rmax: "+5% Dodge; 100% +5 Rage on dodge.",
    fx: [["Dodge","dodge",1],["Rage gen","rage","+5 per dodge"]],
    tank: 3, why: "The 5% dodge is real. L0uki skips it because rage is plentiful, while community testers like it for dungeons. Use it as a flex option instead of Rend and Tear ranks if you're dying." },
  primalBite: { name: "Primal Bite", id: 407995, tree: "F", row: 6, col: 1, max: 1, lvl: 40, req: "leaderOfThePack",
    r1: "20 Rage, 6s CD: 100% weapon damage + 42 (R3 @60: +77). High threat. Ranks trained at 40/50/60.",
    fx: [["Primal Bite","grant","new ability"]],
    tank: 5, why: "This is the 41-point capstone and your top-priority button. Keep it on cooldown, and never let Maul spending leave you unable to cast it." },
  shiftingPower: { name: "Shifting Power", id: 1322605, tree: "F", row: 6, col: 2, max: 1, req: "predatoryDiscipline",
    r1: "Cat: convert 55% base mana → 40 Energy, 8s CD. Cost reduced by shapeshift-cost effects.",
    fx: [["Cat energy","energy",40]],
    tank: 0, why: "Cat capstone. Irrelevant for tanking." },

  // ---------------- RESTORATION ----------------
  naturesFocus: { name: "Nature's Focus", id: 17063, tree: "R", row: 0, col: 1, max: 5,
    r1: "14% chance Nature/Arcane spells don't get pushback.", rmax: "70%.", fx: [], tank: 0, why: "Caster talent." },
  heartOfTheWild: { name: "Heart of the Wild", id: 17003, tree: "R", row: 0, col: 2, max: 5,
    r1: "+2% Int; Bear +4% Stamina; Cat +2% Strength.", rmax: "+10% Int; Bear +20% Stamina; Cat +10% Str.",
    fx: [["Stamina","sta",4],["Intellect","int",2]],
    tank: 5, why: "+20% Stamina is the biggest effective-health talent in the game. It moved to Restoration row 1, so you need 5 points there to open Naturalist." },
  naturalist: { name: "Naturalist", id: 17069, tree: "R", row: 1, col: 0, max: 5,
    r1: "+2% all damage; HT/Wild Growth −0.1s cast.", rmax: "+10% ALL damage.",
    fx: [["All damage","dmg%",2],["Maul","dmg%",2],["Swipe","dmg%",2],["Primal Bite","dmg%",2],["Lacerate","dmg%",2]],
    tank: 5, why: "+10% to everything, including autos and Thorns. Its tree position hides how strong it is." },
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
    tank: 2, why: "Boosts the Lacerate bleed by 10%. Mostly it's the 5-point gate to the row-2 talents below." },
  naturesMajesty: { name: "Nature's Majesty", id: 1223082, tree: "B", row: 1, col: 2, max: 2,
    r1: "+2% spell & melee crit.", rmax: "+4%.", fx: [["Crit","crit",2]], tank: 4, why: "4% crit for 2 points." },
  naturesReach: { name: "Nature's Reach", id: 16819, tree: "B", row: 1, col: 3, max: 2,
    r1: "+2% hit; +10% Balance range.", rmax: "+4% hit.", fx: [["Hit","hit",2]], tank: 5, why: "Hit and spell hit are unified in Forever and the cap is 8%, so this covers half of it." },
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
  18: "Feral Instinct: Swipe threat for dungeon packs (WC/SFK).",
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
  [10,"Bear Form","Class quest: Strength and Mercy (Skyborne).", "core"],
  [10,"Growl","Taunt, 8s CD.","core"],
  [12,"Enrage","+10 Rage, +20 over 10s; −16% base armor in Dire Bear. Use pre-pull.","core"],
  [14,"Cure Poison","Quest for NE/Tauren. Skyborne: trainer.","util"],
  [16,"Swipe","3 targets. Ranks 16/24/34/44/54. Main AoE threat.","core"],
  [18,"Faerie Fire","−505 armor at R4, 30yd. Pull tool. Ranks 18/30/42/54.","core"],
  [20,"Cat Form","Quest: Blessings of the Great Windborne Cat Spirit.","core"],
  [20,"Feral Charge (Bear)","Trainable at 20 (also talent row 3).","core"],
  [20,"Omen of Clarity","Now trainable. Free Maul/Swipe procs.","core"],
  [24,"Remove Curse","Caster form utility.","util"],
  [24,"Tiger's Fury","Changed level.","cat"],
  [25,"Lacerate (talent)","Ranks trained up to R5 at 58.","core"],
  [28,"Challenging Roar","AoE taunt, 6s, 10 min CD.","core"],
  [30,"Travel Form","40% outdoor speed.","util"],
  [32,"Poised","NEW passive: at max Energy OOC, next ability −10 Energy.","cat"],
  [36,"Frenzied Regeneration","Changed level. 10 Rage/s → 10% HP/s, 10s, 3 min CD.","core"],
  [40,"Dire Bear Form","+360% item armor (×4.6 total), +1560 HP @R2, +210 AP.","core"],
  [40,"Primal Bite (talent)","Ranks 40/50/60.","core"],
  [40,"Innervate","+400% regen 20s, 6 min CD.","util"],
  [40,"Feline Grace","Passive fall damage reduction.","util"],
  [44,"Barkskin","−20% physical taken 15s, 1 min CD. Usable in forms in Forever.","core"],
  [46,"Bash R3","4s stun.","util"],
  [52,"Demoralizing Roar R5","−207 melee AP, 30s.","core"],
  [54,"Faerie Fire R4 / Swipe R5","Max ranks.","core"],
  [58,"Maul R7 / Lacerate R5","Max ranks.","core"],
  [60,"Primal Bite R3","+77 bonus damage.","core"],
];

/* ---------- CHECKPOINTS 13 → 60 (Horde) ----------
   items: [name, wowhead item id or null, source, flag]  flag: "v" verified in Forever DB, "c" Classic data/unverified, "q" quest  */
const CHECKPOINTS = [
  { lv: "13–16", title: "Ragefire Chasm",
    where: "Ragefire Chasm in Orgrimmar. (Hall of Thanes, the new 13–18 dungeon, is inside Ironforge, so it is effectively Alliance-only.) Grab the quests first and clear once.",
    talents: "Ferocity 4/5 (14), Thick Hide 1 (15), Feral Swiftness 1 (16)",
    train: "Enrage (12), Swipe (16). Pick up Cooking, First Aid and Fishing now (Camping: Fish Bowl gives +8% stats).",
    items: [],
    tips: [
      "Before 20, Wowhead finds caster-form melee often equals bear. Swipe and Maul base values barely scale, and Thorns snapshots Spell Power. Tank in bear for the armor and rage tools, but don't expect damage.",
      "Professions: Leatherworking + Skinning (Camp Tent gives Rested XP; armor kits). Engineering can wait until 60.",
      "Legacy points: Thrill of Adventure first (0–5), then Well Rested > Talented.",
    ],
    done: "Ferocity 4 + Furor 1, Swipe trained, Fishing/Cooking/First Aid started" },
  { lv: "17–22", title: "Wailing Caverns",
    where: "WC (Barrens). It's the Horde dungeon for this range, and the Fang set drops here. Deadmines/RoL are optional.",
    talents: "Feral Swiftness 2, Feral Instinct 1–2, Savage Fury 1–2 (20–21), Feral Charge (22)",
    train: "Faerie Fire (18), CAT FORM quest at 20, Feral Charge (Bear), Omen of Clarity (20)",
    items: [
      ["Armor of the Fang",6473,"Lord Pythas (WC)","v"],["Leggings of the Fang",10410,"Lord Cobrahn (WC)","v"],
      ["Gloves of the Fang",10413,"Druid of the Fang (WC)","v"],["Belt of the Fang",10412,"Lady Anacondra (WC)","v"],
      ["Footpads of the Fang",10411,"Lord Serpentis (WC)","v"],["Serpent's Shoulders",5404,"Lady Anacondra (WC)","v"],
      ["Sporid Cape",6629,"Verdan the Everliving (WC)","v"],["Hammerbone",270018,"Quest: Leaders of the Fang","q"],
      ["Crescent Staff",6505,"Quest: Leaders of the Fang","q"],["Segmented Spider Leg",271203,"Witherfang (Ruins of Lordaeron)","v"],
    ],
    tips: [
      "Embrace of the Viper (Fang set) turns Cat Form into a snake. Its stats are good too.",
      "Feral Charge has a range of 8–25 yd. Open with it so it lands threat and interrupts the first caster.",
    ],
    done: "3+ Fang pieces, Cat Form, Savage Fury 2/2" },
  { lv: "22–27", title: "Shadowfang Keep & Blackfathom Deeps",
    where: "SFK (Silverpine), BFD (Ashenvale). NEW option: Excavation Site: Wetlands (24–29).",
    talents: "Sharpened Claws 2 (23–24), LACERATE (25), Predatory Strikes 1–2",
    train: "Remove Curse (24), Swipe R2 (24), Tiger's Fury (24, cat)",
    items: [
      ["Seal of Sylvanas",6414,"Quest: Arugal Must Die (SFK)","q"],["Deepgrave Trousers",279900,"Quest: An Ancient Grudge","q"],
      ["Catacomb Cloak",279899,"Quest: An Ancient Grudge","q"],["Grave Shroud",279865,"Quest: Abominable Creatures / Unending Torment","q"],
      ["Tarnished Locket",279870,"Quest: Remember That I Love You","q"],["Rugged Spaulders",5254,"Rethilgore (SFK)","v"],
      ["Gloomshroud Armor",1489,"SFK zone drop","v"],["Cultist's Armguards",270032,"Quest: Blackfathom Villainy (BFD)","q"],
      ["Band of the Fist",17694,"Quest: Allegiance to the Old Gods (BFD)","q"],
    ],
    tips: [
      "From 25, apply a Lacerate stack to the kill target, then Maul/Swipe. Rend and Tear doesn't exist yet, so stacking to 5 only pays off on long fights.",
      "Collect every zone quest for a dungeon before you zone in. Dungeon mobs give reduced XP, so do one quest-complete clear per dungeon.",
    ],
    done: "Lacerate learned, Seal of Sylvanas, SFK quest gear" },
  { lv: "27–32", title: "Razorfen Kraul & Gnomeregan",
    where: "RFK (Barrens), Gnomeregan (long Horde walk, worth it for the Pummeler). NEW option: City of Dalaran (28–33, Alterac).",
    talents: "Predatory Strikes 3 (28), Feral Instinct 3 (29), LEADER OF THE PACK (30), Natural Instinct 1–2",
    train: "Challenging Roar (28), Travel Form (30), Faerie Fire R2 (30)",
    items: [
      ["Manual Crowd Pummeler",9449,"Crowd Pummeler 9-60 (Gnomer). Best 2H to ~40; +50% attack speed use","v"],
      ["Ferine Leggings",6690,"Agathelos the Raging (RFK). 26 AP","v"],["Thorncursed Grips",274159,"Aggem Thorncurse (RFK)","v"],
      ["Wolfclaw Gloves",1978,"RFK zone drop","v"],["Skullduggery Belt",274042,"Grubbis (Gnomer)","v"],
      ["Monkey Ring",6748,"Quest: Willix the Importer (RFK)","q"],["Triprunner Dungarees",9624,"Quest: The Grand Betrayal (Horde, Gnomer)","q"],
      ["Tiger Hunter Gloves",4107,"Quest: Tiger Mastery (STV)","q"],["Charged Leather Bracers",270055,"Quest: Power Stones","q"],
      ["Heavy Earthen Gloves",7359,"Leatherworking / AH. 16 AP","v"],["Raptor Hide Harness",4455,"Leatherworking / AH. +13 Sta","v"],
    ],
    tips: [
      "Crowd Pummeler: weapon DPS × 2.5 = paw damage (Method), so a 29 DPS 2H at 29 is a huge threat spike. Weapon speed doesn't matter.",
      "Wowhead's level-30 build skips Shredding Attacks here because those points are wasted while tanking.",
    ],
    done: "Pummeler, LotP, Travel Form" },
  { lv: "30–40", title: "Scarlet Monastery",
    where: "Scarlet Monastery wings in order: GY → Lib → Arm → Cath (Tirisfal). NEW option: The Drowned City (35–40).",
    talents: "Natural Instinct 2 (32), Blood Frenzy 1 (33), Thick Hide 2 (34), Rend and Tear 1–5 (35–39)",
    train: "Frenzied Regeneration (36), Swipe R3 (34), Rake (34, cat)",
    items: [
      ["Ghostshard Talisman",7731,"Azshir the Sleepless (SM GY). 14 AP / 9 Sta","v"],["Ironspine's Eye",7686,"Ironspine (SM GY)","v"],
      ["Ebon Vise",7690,"Fallen Champion (SM GY)","v"],["Dog Whistle",3456,"Houndmaster Loksey (SM Lib)","v"],
      ["Mograine's Might",7723,"Scarlet Commander Mograine (SM Cath). Classic 2H mace","c"],
      ["Vorrel's Boots",7751,"Quest: Vorrel's Revenge","q"],["Explorer's League Dustcover",271716,"Quest: Prehistoric Prism","q"],
      ["Watchman Pauldrons",7727,"Quest/drop (community pick). +3 Str +11 Sta","v"],["Barbaric Shoulders",5964,"Leatherworking","v"],
      ["Nightscape Tunic",8175,"Leatherworking / AH. +15 Agi +6 Sta","v"],["Nightscape Headband",8176,"Leatherworking / AH. +12 Agi +11 Sta","v"],
      ["Nightscape Shoulders",8192,"Leatherworking / AH","v"],["Barbaric Harness",5739,"Leatherworking / AH. Str/Agi/Sta","v"],
      ["Shadowskin Gloves",18238,"Leatherworking / AH. 1% crit","v"],
    ],
    tips: [
      "Rend and Tear ranks only work while Lacerate is ticking. Keep 1+ stacks on every target you want burst on.",
      "Frenzied Regen at 36 converts 10 rage/s into 10% HP/s (up to 100% HP). It's the panic button for dungeon pulls and best started early, before you're low.",
    ],
    done: "Rend and Tear 5/5 by 39, SM Cath cleared" },
  { lv: "40", title: "Level 40 power spike",
    where: "Trainer (Teleport: Moonglade is free). Buy the mount if you can. Travel Form is fine if you can't.",
    talents: "PRIMAL BITE (40), Thick Hide 3 (41) → Feral 32 complete",
    train: "Dire Bear Form, Primal Bite R1, Innervate, Feline Grace",
    items: [
      ["Wolfshead Helm",8345,"Leatherworking. Forever: +5 Rage from Enrage, +5 Energy from Shifting Power","v"],
    ],
    tips: [
      "Dire Bear: item armor ×4.6 (+360%), and that multiplier also applies to Thick Hide's base armor. Re-check your gear: high-armor leather now beats stat sticks.",
      "Rotation becomes: Primal Bite on CD → Lacerate to 5 / refresh → Maul at 35+ rage. Don't Maul yourself out of rage for PB.",
      "Wolfshead Helm: pre-pull Enrage nets +15 rage. Wowhead/Method suggest swapping it in for the pre-pull, then swapping back.",
    ],
    done: "Dire Bear Form, Primal Bite, mount" },
  { lv: "40–46", title: "Razorfen Downs & Uldaman",
    where: "Razorfen Downs → Uldaman (Badlands). NEW option: Krol'dok Stronghold (40–45, Riverglades).",
    talents: "Heart of the Wild 1–5 (42–46): +20% Stamina in bear",
    train: "Barkskin (44, usable in form), Swipe R4 (44), Faerie Fire R3 (42)",
    items: [
      ["Ironshod Bludgeon",9408,"Archaedas (Uldaman). 37.2 DPS staff, +20 Sta","v"],
      ["Nightscape Pants",8193,"Leatherworking / AH. +16 Agi","v"],["Nightscape Boots",8197,"Leatherworking / AH","v"],
      ["Wild Leather Vest",8211,"Leatherworking / AH. Random enchant: pick “of the Bear” (Str/Sta) or “of the Monkey” (Agi/Sta)","v"],
      ["Wild Leather Helmet",8214,"Leatherworking / AH. Random enchant, as above","v"],
    ],
    tips: [
      "Barkskin works in bear in Forever: −20% physical for 15s on a 1-minute CD. Use it on every dangerous pull, because the short CD means it's back by the next one.",
      "Wowhead's Forever DB doesn't show most 40–60 dungeon loot yet (items are obfuscated until discovered). Items marked “Classic” use Classic data, and their Forever stats may have been reworked.",
    ],
    done: "HotW 5/5, Barkskin, weapon ≥37 DPS" },
  { lv: "46–52", title: "Zul'Farrak & Maraudon",
    where: "ZF (Tanaris) → Maraudon (Desolace) → Sunken Temple. NEW option: Alcaz Island Prison (48–53, Dustwallow).",
    talents: "Naturalist 1–5 (47–51): +10% all damage",
    train: "Bash R3, Dash R2 (46), Demo Roar R5 (52)",
    items: [
      ["Princess Theradras' Scepter",17766,"Princess Theradras (Maraudon). Classic 2H mace","c"],
      ["Blackstone Ring",17713,"Princess Theradras (Maraudon)","c"],["Embrace of the Lycan",9479,"Chief Ukorz Sandscalp (Zul'Farrak). Leather helm","c"],
      ["Wild Leather Leggings",8212,"Leatherworking / AH. Random enchant","v"],
    ],
    tips: [
      "Start Timbermaw Hold rep now (Felwood) for Warbear Harness/Woolies at LW 300.",
      "Set Demoralizing Roar on every pack. In Forever it's −207 AP, and one roar covers all targets.",
    ],
    done: "Naturalist 5/5, Timbermaw rep started" },
  { lv: "52–58", title: "Blackrock Depths",
    where: "Blackrock Depths (Searing Gorge/Burning Steppes). Huge quest + loot density.",
    talents: "Genesis 1–5 (52–56), Nature's Majesty 1–2 (57–58)",
    train: "Faerie Fire R4, Swipe R5 (54), Maul R7, Lacerate R5 (58)",
    items: [
      ["Warbear Harness",15064,"Leatherworking (Timbermaw). +11 Str +18 Agi +27 Sta","v"],
      ["Warbear Woolies",15065,"Leatherworking (Timbermaw). +28 Str +18 Agi","v"],
      ["Devilsaur Gauntlets",15063,"Leatherworking. 28 AP, 1% crit (set: hit)","v"],
      ["Devilsaur Leggings",15062,"Leatherworking. 46 AP, 1% crit","v"],
      ["Stormshroud Armor",15056,"Leatherworking. 2% crit, 1% dodge","v"],
      ["Dark Iron Pulverizer",11608,"BoE (BRD/AH). 47.4 DPS 2H mace","v"],
      ["Ironfoe",11684,"Emperor Dagran Thaurissan (BRD). Classic","c"],
      ["Hand of Justice",11815,"BRD bosses. Classic trinket","c"],
    ],
    tips: [
      "Method suspects a bug where armor kits get the bear armor multiplier. If confirmed, Rugged Armor Kit becomes your best enchant in most slots. Watch patch notes.",
    ],
    done: "Warbear set or Devilsaur, weapon ≥47 DPS" },
  { lv: "58–60", title: "Endgame dungeons",
    where: "Blackrock Spire, Stratholme, Scholomance, Dire Maul. NEW options: Blackmaw Hold (55–60), Shaper's Terrace (58–60). Start Dungeon Set 1.",
    talents: "Nature's Reach 1–2 (59–60) → 9/32/10 complete",
    train: "Primal Bite R3, all R6–R7 ranks at 60",
    items: [
      ["Shadowcraft Cap",16707,"Dungeon Set 1. +20 Agi +20 Sta","v"],["Shadowcraft Tunic",16721,"Dungeon Set 1","v"],
      ["Shadowcraft Pants",16709,"Dungeon Set 1","v"],["Shadowcraft Spaulders",16708,"Dungeon Set 1","v"],
      ["Blackhand's Breadth",13965,"General Drakkisath (UBRS). Classic crit trinket","c"],
      ["Hammer of the Grand Crusader",18717,"Strat Live. Classic 2H mace","c"],
      ["Cadaverous Armor",14637,"Scholomance. Classic AP chest","c"],
    ],
    tips: [
      "Defense skill soft cap is 440 (crit immunity, Method). Track it once you're 60, because raid bosses are level 63.",
    ],
    done: "Level 60, 9/32/10, D1 pieces" },
  { lv: "60", title: "Pre-raid gear",
    where: "PvP, rep and vendors. Mirrors Wowhead's Phase 1 gear planner.",
    talents: "Final: Mono-Bear 9/32/10. Hybrid 9/32/10 swaps Blood Frenzy for Pred. Discipline/Shifting Power.",
    train: "-",
    items: [
      ["Amulet of the Darkmoon",19491,"Darkmoon Faire (1200 tickets). +10 Str +19 Agi","v"],
      ["Watcher's Signet of Vigilance",275980,"The Watchers – Revered. +8 Def, −1% dodge/parry","v"],
      ["Don Julio's Band",19325,"1% hit, 1% crit, 14 AP","v"],
      ["Howler's Furs",272414,"Pix Xizzix (STV). 1% hit, 28 AP","v"],
      ["Adaptive Combat Assistant",272437,"Pix Xizzix (STV). −2% dodge/parry; 450 absorb","v"],
      ["Cleansed Vilebranch Medallion",270275,"0.7% hit, 14 AP (×3 in forest/grassland)","v"],
      ["Enraged Idol",272428,"Pix Xizzix (STV). Enrage +10 Rage","v"],
      ["The Unstoppable Force",19323,"Alterac Valley (Horde QM). 56.5 DPS, 2% crit","v"],
      ["Rune of the Guard Captain",19120,"Horde quest. 0.7% hit, 14 AP (×3 in forest/grassland)","v"],
      ["Defiler's Leather Shoulders",20194,"The Defilers – Exalted (Arathi Basin). 30 AP, +110 armor","v"],
      ["Premier Beasthide PvP set",272760,"PvP vendor (Horde-named equivalent). 6/6 = +20 Sta, +15% form speed, +40 AP","v"],
    ],
    tips: [
      "Elemental Insight (+5% damage vs Elementals) makes Molten Core a good raid for Skyborne.",
      "The tier set bonuses are datamined placeholders: 2pc +7 Def, 3pc Rebirth castable in bear (−2s cast), 4pc −dodge/parry.",
    ],
    done: "Hit 8% (Reach 4% + gear), Defense toward 440" },
];

/* ---------- ROTATION ---------- */
const ROTATION = {
  prepull: [
    "Buffs: Mark of the Wild, Thorns (snapshots Spell Power, so a spell-power swap set is worth it while leveling).",
    "Shift to Dire Bear ~10s out. Optional: swap to Wolfshead Helm / Enraged Idol.",
    "Enrage (+10 now, +20 over 10s, +15 with WHH, +10 with Enraged Idol). Swap gear back.",
    "Queue Maul for snap threat → Faerie Fire (or Feral Charge) to open.",
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
    ["Bear/Dire Bear","Tanking. Forms cost 55% base mana. Idol of Shifting Tides (lvl 4 Skyborne quest) −40 mana."],
    ["Cat","Solo questing from 20. Hybrid spec: Claw filler, Shred only on Omen procs (no Shredding Attacks)."],
    ["Caster","Innervate, Rebirth, Remove Curse, Abolish Poison, heals between pulls. Each cast exposes you to hits. Do it during tank swaps or after pulls."],
    ["Powershifting","Not a thing for bears. Furor is nerfed, and Forever's damage-taken rage formula already acts as if you had 40% DR."],
    ["Mana","Mana regenerates while you fight in forms (Wowhead). No need to drink after every pull."],
  ],
};

/* ---------- MECHANICS / MATH (Forever vs Classic) ---------- */
const MECHANICS = [
  ["Paw damage","Normalized: weapon DPS × 2.5. Weapon speed and damage range don't matter. 14 AP = 1 weapon DPS.","Method"],
  ["Armor","Dire Bear: item armor +360% (×4.6). Bear: +180% (×2.8). Thick Hide base armor is also multiplied. DR cap 75%.","Tooltip / Method"],
  ["Rage","The rage-on-damage-taken formula always generates rage as if you had 40% DR. In practice rage is close to unlimited on a hitting boss, so rage talents are worth less.","L0uki (Wowhead)"],
  ["Hit","Melee and spell hit are unified. Cap 8%. Expertise soft cap 6.5% (dodge), hard cap 14% (parry). Crit and hit can be fractional.","Method"],
  ["Defense","Soft cap 440 (crit immunity vs 63). 1 Defense = 0.04%. Feral Combat Skill: 1 = 0.04%.","Method"],
  ["Stats","Str = 2 AP. Agi = 0.05% crit, 0.05% dodge, 2 armor. Sta = 10 HP. Int/Spi ≈ 0 for bears.","Method"],
  ["Threat","Bear/Dire Bear threat modifier raised to +115% (from +50% in earlier beta).","Leprestore"],
  ["Combo points","Don't transfer between targets, but no longer drop when you swap targets.","Method"],
  ["Consumables in form","Forever lets you use many items in form (Sapper Charge reportedly works in form). Stones and weightstones now add paw damage.","Method / Wowhead"],
  ["Early leveling","Before 20, shapeshift base damage barely scales. Melee in caster form with Thorns plus spell power can match bear.","Wowhead L20"],
];

const STATS = {
  priority: "Weapon DPS > Strength > Hit (to 8%) ≈ Expertise ≈ Feral Combat Skill > Crit > Agility > Haste",
  defense: "Stamina ≈ Armor > Agility > Dodge. Defense to 440 is unproven but standard for raids.",
  note: "Method: “We don't have enough information to publish stat weights with confidence yet.”",
};

const ENCHANTS = [
  ["Weapon","Crusader / +Strength / Impact"],["Neck","Deflection or Strength (Forever slot)"],
  ["Back","Defense / Agility / Dodge"],["Chest","Wild Leather Armor Kit or +Stamina (Rugged Armor Kit*)"],
  ["Wrist","Deflection / +Stamina / +Strength"],["Hands","Wild Leather Armor Kit / +Strength"],
  ["Legs","Wild Leather / Rugged Armor Kit*"],["Feet","Wild Leather / Speed (Rugged*)"],
  ["Head/Shoulder","TBD (Method)"],
];
const CONSUMABLES = [
  ["Dense Sharpening Stone / Weightstone","Now buffs paw damage"],["Mighty Rage Potion","Rage + 60 Str for 20s (shares potion CD)"],
  ["Greater Stoneshield Potion","Armor for heavy hitters"],["Gift of Arthas","Classic tank staple"],
  ["Dirge's Kickin' Chimaerok Chops","Stamina food"],["Dragonbreath Chili","Threat/damage food"],
  ["Any Well Fed (leveling)","+5% kill XP in Forever. Always have food up"],
];

const RACIALS = [
  ["Wind Blessed","Passive +2% melee/spell haste (down from 3%). More autos → more rage and Maul swings."],
  ["Skysight","Horde. +15% move speed 15s, 2 min CD. At an elemental convergence: Charged (1h) → 30%. Removed when you enter a raid."],
  ["Walk on Air","Glide 10s, 1.5 min CD. Skip pulls, drop off ledges in BRD/UBRS safely."],
  ["Elemental Insight","+5% damage vs Elementals. Good for Molten Core."],
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
