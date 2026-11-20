// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Ability, Checkpoint, Milestone, RouteStep } from "./leveling.types.ts";

export const route: readonly RouteStep[] = [
  {
    levels: {
      min: 13,
      max: 16,
    },
    zones: "Durotar, then The Barrens",
    hub: "Razor Hill, then the Crossroads",
    how: "After Zephras Isle, a skycutter (a flying transport) drops you off in Thunder Bluff.",
    notes: "Do the Ragefire Chasm dungeon in Orgrimmar, and pick up the Wailing Caverns quests at the Crossroads.",
    changedInForever: false,
  },
  {
    levels: {
      min: 17,
      max: 20,
    },
    zones: "The Barrens",
    hub: "Crossroads (Horde town in the middle of the Barrens)",
    how: "Walk or fly to the Crossroads.",
    notes: "Quest around the Crossroads and run Wailing Caverns once with its quests.",
    changedInForever: false,
  },
  {
    levels: {
      min: 20,
      max: 21,
    },
    zones: "The Barrens",
    hub: "Crossroads",
    how: "You're already here.",
    notes:
      "Finish only the quests close to the Crossroads, then leave. The rest of the Barrens gives less experience per quest than the next zones, so finishing the whole zone isn't worth it.",
    changedInForever: false,
  },
  {
    levels: {
      min: 21,
      max: 22,
    },
    zones: "Your Cat Form quest",
    hub: "Thunder Bluff / Moonglade",
    how: "Fly from the Crossroads to Thunder Bluff.",
    notes: "Do the Cat Form quest line your trainer gives you at level 20. It's a short chain, not a leveling zone.",
    foreverNote:
      "Forever changed the druid form quests. Guides disagree on which towns the steps are in, so follow your quest log.",
    changedInForever: true,
  },
  {
    levels: {
      min: 22,
      max: 24,
    },
    zones: "Stonetalon Mountains",
    hub: "Sun Rock Retreat",
    how: "Fly to Sun Rock Retreat (or walk north-west from the Barrens).",
    notes: "Work through the Stonetalon quests, then head east into Ashenvale.",
    changedInForever: false,
  },
  {
    levels: {
      min: 24,
      max: 26,
    },
    zones: "Ashenvale",
    hub: "Splintertree Post (Horde camp in eastern Ashenvale), plus Zoram'gar Outpost on the west coast",
    how: "Walk from Stonetalon Mountains, or fly to Splintertree Post.",
    notes:
      "Do the Ashenvale quests. Blackfathom Deeps (dungeon, about level 24 to 32) is on the west coast near Zoram'gar Outpost.",
    changedInForever: false,
  },
  {
    levels: {
      min: 26,
      max: 28,
    },
    zones: "Hillsbrad Foothills",
    hub: "Tarren Mill",
    how: "Take the zeppelin from Orgrimmar to Undercity, then fly to Tarren Mill.",
    notes:
      "Finish the Hillsbrad quests. Shadowfang Keep (dungeon, about level 22 to 30) is nearby in Silverpine Forest.",
    foreverNote: "Forever adds a new dungeon nearby: City of Dalaran in the Alterac Mountains (about level 28 to 33).",
    changedInForever: false,
  },
  {
    levels: {
      min: 28,
      max: 31,
    },
    zones: "Thousand Needles",
    hub: "Freewind Post",
    how: "Fly to Freewind Post.",
    notes:
      "Finish the Thousand Needles quests. Razorfen Kraul (dungeon, about level 29 to 38) is at the south end of the Barrens.",
    changedInForever: false,
  },
  {
    levels: {
      min: 31,
      max: 34,
    },
    zones: "Arathi Highlands",
    hub: "Hammerfall",
    how: "Fly to Hammerfall.",
    notes:
      "Do the Arathi quests around Hammerfall. Scarlet Monastery (dungeon, about level 30 to 45) is in Tirisfal Glades. From level 33 you can also try Riverglades, the new Forever zone (see level 41).",
    changedInForever: false,
  },
  {
    levels: {
      min: 34,
      max: 37,
    },
    zones: "Stranglethorn Vale",
    hub: "Grom'gol Base Camp",
    how: "Take the zeppelin from Orgrimmar to Grom'gol.",
    notes:
      "Quest until most of the zone's quests turn green (too low to be worth it), then move on. You don't need to finish everything.",
    foreverNote: "Forever adds a new dungeon for these levels: The Drowned City (about level 35 to 40).",
    changedInForever: false,
  },
  {
    levels: {
      min: 37,
      max: 39,
    },
    zones: "Desolace",
    hub: "Shadowprey Village",
    how: "Fly to Shadowprey Village on the west coast.",
    notes:
      "Come here late, not at 30. The centaur and demon areas are full of mobs around level 35 to 40, and the new quest chain that starts with Valley of Bones needs level 35. Your trainer teaches Travel Form at 30, which makes getting around much faster.",
    foreverNote:
      "Changed in Forever: the new Gelkis and Magram quests (starting with Valley of Bones) need level 35, up from 30 in the beta. Most guides list Desolace as 30 to 40 using Classic numbers, which is too early in practice.",
    changedInForever: true,
  },
  {
    levels: {
      min: 39,
      max: 40,
    },
    zones: "Badlands",
    hub: "Kargath",
    how: "Fly to Kargath.",
    notes: "Finish the Badlands quests. Uldaman (dungeon, about level 35 to 45) is here.",
    changedInForever: false,
  },
  {
    levels: {
      min: 40,
      max: 41,
    },
    zones: "Tanaris",
    hub: "Gadgetzan",
    how: "Fly to Gadgetzan.",
    notes: "Do the Tanaris quests close to Gadgetzan, then go to Riverglades.",
    changedInForever: false,
  },
  {
    levels: {
      min: 41,
      max: 43,
    },
    zones: "Riverglades",
    hub: "Rog'mar (Horde camp, per one guide)",
    how: "Guides say a boat from Gadgetzan's port goes there. Check in game.",
    notes: "A new zone with more than 150 quests. Move on when its quests turn green.",
    foreverNote:
      "New in Forever. Guides put it at about level 35 to 44 and disagree on how you get there. Krol'dok Stronghold, a new dungeon (level 40 to 45), is here.",
    changedInForever: true,
  },
  {
    levels: {
      min: 43,
      max: 45,
    },
    zones: "Dustwallow Marsh",
    hub: "Brackenwall Village (Horde town in the north of the marsh)",
    how: "Fly to Brackenwall Village.",
    notes: "Do the Dustwallow quests.",
    foreverNote: "Forever adds a new dungeon here: Alcaz Island Prison (about level 48 to 53), for later.",
    changedInForever: false,
  },
  {
    levels: {
      min: 45,
      max: 47,
    },
    zones: "Feralas",
    hub: "Camp Mojache",
    how: "Fly to Camp Mojache.",
    notes:
      "Finish the Feralas quests. Zul'Farrak (in Tanaris) and Maraudon (in Desolace) are the dungeons for these levels.",
    changedInForever: false,
  },
  {
    levels: {
      min: 47,
      max: 49,
    },
    zones: "The Hinterlands",
    hub: "Revantusk Village (Horde troll village on the east coast)",
    how: "Fly to Revantusk Village.",
    notes: "Finish the Hinterlands quests.",
    changedInForever: false,
  },
  {
    levels: {
      min: 49,
      max: 51,
    },
    zones: "Searing Gorge",
    hub: "Thorium Point",
    how: "Fly to Thorium Point (or to Kargath and walk north).",
    notes: "Do the Searing Gorge quests. Blackrock Depths (dungeon, level 52 and up) is next door.",
    changedInForever: false,
  },
  {
    levels: {
      min: 51,
      max: 53,
    },
    zones: "Un'Goro Crater",
    hub: "Marshal's Refuge (neutral camp in the north of the crater)",
    how: "Fly to Marshal's Refuge.",
    notes: "Finish the Un'Goro quests. Great place to skin: the dinosaurs drop Thick and Rugged Leather.",
    changedInForever: false,
  },
  {
    levels: {
      min: 53,
      max: 55,
    },
    zones: "Azshara",
    hub: "Valormok (Horde camp in the west of Azshara)",
    how: "Fly to Valormok.",
    notes:
      "Do the Azshara quests. Felwood (Bloodvenom Post) is a good alternative, and it's where you start Timbermaw Hold reputation.",
    foreverNote: "Forever adds a new dungeon in Azshara: Blackmaw Hold (level 55 to 60).",
    changedInForever: false,
  },
  {
    levels: {
      min: 55,
      max: 57,
    },
    zones: "Burning Steppes",
    hub: "Flame Crest",
    how: "Fly to Flame Crest.",
    notes: "Finish the Burning Steppes quests. Western and Eastern Plaguelands are good alternatives.",
    changedInForever: false,
  },
  {
    levels: {
      min: 57,
      max: 60,
    },
    zones: "Winterspring",
    hub: "Everlook",
    how: "Fly to Everlook.",
    notes: "Quest to level 60. Then head to Mount Hyjal.",
    foreverNote: "Mount Hyjal is the new Forever zone for level 60, per one guide.",
    changedInForever: true,
  },
];

export const checkpoints: readonly Checkpoint[] = [
  {
    levels: {
      min: 13,
      max: 16,
    },
    title: "Ragefire Chasm",
    where:
      "Ragefire Chasm is the dungeon inside Orgrimmar. Pick up its quests in Orgrimmar first, then run it once with the quests. (Forever also added a new dungeon for this level, Hall of Thanes, but its entrance is inside the Alliance city of Ironforge, so Horde players can't really reach it.)",
    talents: "Ferocity rank 4 at level 14, Thick Hide rank 1 at 15, Feral Swiftness rank 1 at 16",
    train:
      "Visit your druid trainer: Enrage at level 12 and Swipe at level 16. Also learn Cooking, First Aid and Fishing now. They're cheap and you'll want them later.",
    items: [],
    tips: [
      "Below level 20 your bear attacks are weak, and Wowhead found that hitting things in normal caster form does about the same damage. Still tank in Bear Form: you get much more armor and the rage you need for Maul and Swipe.",
      "Good main professions for leveling: Leatherworking and Skinning. You can skin the animals you kill and turn the leather into armor upgrades.",
      "Legacy points are Forever's account-wide bonuses. Wowhead suggests spending your first 5 on Thrill of Adventure, then Well Rested, then Talented.",
    ],
    doneWhen:
      "You have Ferocity 4 and Furor 1, you've learned Swipe, and you've started Fishing, Cooking and First Aid",
  },
  {
    levels: {
      min: 17,
      max: 22,
    },
    title: "Wailing Caverns",
    where:
      "Wailing Caverns, in the Northern Barrens. It's the main Horde dungeon for these levels, and it drops the Fang set: five leather pieces that are great for a druid. (Deadmines is a similar Alliance-side dungeon. You can skip it.)",
    talents:
      "Feral Swiftness rank 2, Feral Instinct ranks 1 and 2, Savage Fury ranks 1 and 2 (levels 20 and 21), Feral Charge (level 22)",
    train:
      "Faerie Fire at level 18. At level 20 your trainer gives you a quest for Cat Form and teaches you Omen of Clarity. Feral Charge is a talent you take at level 22.",
    items: [
      {
        name: "Armor of the Fang",
        itemId: 6473,
        source: "Lord Pythas (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Leggings of the Fang",
        itemId: 10410,
        source: "Lord Cobrahn (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Gloves of the Fang",
        itemId: 10413,
        source: "Druid of the Fang (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Belt of the Fang",
        itemId: 10412,
        source: "Lady Anacondra (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Footpads of the Fang",
        itemId: 10411,
        source: "Lord Serpentis (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Serpent's Shoulders",
        itemId: 5404,
        source: "Lady Anacondra (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Sporid Cape",
        itemId: 6629,
        source: "Verdan the Everliving (Wailing Caverns)",
        confidence: "confirmed",
      },
      {
        name: "Hammerbone",
        itemId: 270018,
        source: "Quest: Leaders of the Fang",
        confidence: "quest",
      },
      {
        name: "Crescent Staff",
        itemId: 6505,
        source: "Quest: Leaders of the Fang",
        confidence: "quest",
      },
      {
        name: "Segmented Spider Leg",
        itemId: 271203,
        source: "Witherfang (Ruins of Lordaeron)",
        confidence: "confirmed",
      },
    ],
    tips: [
      "If you wear enough Fang set pieces, the set bonus (Embrace of the Viper) gives extra stats.",
      "Feral Charge (the talent you take at 22) makes you charge an enemy from 8 to 25 yards away, holding it in place and stopping its spell for 4 seconds. Start fights with it.",
    ],
    doneWhen: "You have at least 3 Fang set pieces, Cat Form, and Savage Fury 2 of 2",
  },
  {
    levels: {
      min: 22,
      max: 27,
    },
    title: "Shadowfang Keep & Blackfathom Deeps",
    where:
      "Shadowfang Keep (a castle in Silverpine Forest) and Blackfathom Deeps (an underwater cave on the coast of Ashenvale). Forever also added a new dungeon for these levels: Excavation Site in the Wetlands (levels 24 to 29).",
    talents: "Sharpened Claws ranks 1 and 2 (levels 23 and 24), Lacerate (level 25), Predatory Strikes ranks 1 and 2",
    train: "At level 24: Remove Curse and a stronger rank of Swipe.",
    items: [
      {
        name: "Seal of Sylvanas",
        itemId: 6414,
        source: "Quest: Arugal Must Die (Shadowfang Keep)",
        confidence: "quest",
      },
      {
        name: "Deepgrave Trousers",
        itemId: 279900,
        source: "Quest: An Ancient Grudge",
        confidence: "quest",
      },
      {
        name: "Catacomb Cloak",
        itemId: 279899,
        source: "Quest: An Ancient Grudge",
        confidence: "quest",
      },
      {
        name: "Grave Shroud",
        itemId: 279865,
        source: "Quest: Abominable Creatures / Unending Torment",
        confidence: "quest",
      },
      {
        name: "Tarnished Locket",
        itemId: 279870,
        source: "Quest: Remember That I Love You",
        confidence: "quest",
      },
      {
        name: "Rugged Spaulders",
        itemId: 5254,
        source: "Rethilgore (Shadowfang Keep)",
        confidence: "confirmed",
      },
      {
        name: "Gloomshroud Armor",
        itemId: 1489,
        source: "Random drop in Shadowfang Keep",
        confidence: "confirmed",
      },
      {
        name: "Cultist's Armguards",
        itemId: 270032,
        source: "Quest: Blackfathom Villainy (Blackfathom Deeps)",
        confidence: "quest",
      },
      {
        name: "Band of the Fist",
        itemId: 17694,
        source: "Quest: Allegiance to the Old Gods (Blackfathom Deeps)",
        confidence: "quest",
      },
    ],
    tips: [
      "Lacerate is a new talent button at level 25: a bleed that you can stack on an enemy up to 5 times. For now, put one stack on the enemy you're killing, then use Maul and Swipe. Stacking all 5 is only worth it on long boss fights.",
      "Before you enter a dungeon, pick up every quest for it (they're spread around the nearby zones). Forever halved the bonus experience from dungeon quests but gives 20% more experience for dungeon kills, so a full clear with the quests done is the best experience per hour.",
    ],
    doneWhen: "You've learned Lacerate and have the Seal of Sylvanas ring plus Shadowfang Keep quest gear",
  },
  {
    levels: {
      min: 27,
      max: 32,
    },
    title: "Razorfen Kraul & Gnomeregan",
    where:
      "Razorfen Kraul (in the Southern Barrens) and Gnomeregan (in Dun Morogh, a long trip for Horde but worth it for the Manual Crowd Pummeler weapon). Forever also added a new dungeon: City of Dalaran in the Alterac Mountains (levels 28 to 33).",
    talents:
      "Predatory Strikes rank 3 (level 28), Feral Instinct rank 3 (29), Leader of the Pack (30), Natural Instinct ranks 1 and 2",
    train: "Challenging Roar at level 28. Travel Form (a faster outdoor form) and a stronger Faerie Fire at level 30.",
    items: [
      {
        name: "Manual Crowd Pummeler",
        itemId: 9449,
        source: "Crowd Pummeler 9-60 (a boss in Gnomeregan). Your best weapon until about level 40",
        confidence: "confirmed",
      },
      {
        name: "Ferine Leggings",
        itemId: 6690,
        source: "Agathelos the Raging (Razorfen Kraul)",
        confidence: "confirmed",
      },
      {
        name: "Thorncursed Grips",
        itemId: 274159,
        source: "Aggem Thorncurse (Razorfen Kraul)",
        confidence: "confirmed",
      },
      {
        name: "Wolfclaw Gloves",
        itemId: 1978,
        source: "Random drop in Razorfen Kraul",
        confidence: "confirmed",
      },
      {
        name: "Skullduggery Belt",
        itemId: 274042,
        source: "Grubbis (Gnomeregan)",
        confidence: "confirmed",
      },
      {
        name: "Monkey Ring",
        itemId: 6748,
        source: "Quest: Willix the Importer (Razorfen Kraul)",
        confidence: "quest",
      },
      {
        name: "Triprunner Dungarees",
        itemId: 9624,
        source: "Quest: The Grand Betrayal (Horde, Gnomeregan)",
        confidence: "quest",
      },
      {
        name: "Tiger Hunter Gloves",
        itemId: 4107,
        source: "Quest: Tiger Mastery (Stranglethorn Vale)",
        confidence: "quest",
      },
      {
        name: "Charged Leather Bracers",
        itemId: 270055,
        source: "Quest: Power Stones",
        confidence: "quest",
      },
      {
        name: "Heavy Earthen Gloves",
        itemId: 7359,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Raptor Hide Harness",
        itemId: 4455,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
    ],
    tips: [
      "In bear form your hits are based on your weapon's damage per second (the DPS number on the weapon), times 2.5. Weapon speed doesn't matter. That's why the Manual Crowd Pummeler, a two-handed mace with high DPS for its level, is such a big upgrade.",
      "Skip Shredding Attacks. It only helps Cat Form and does almost nothing for a bear.",
    ],
    doneWhen: "You have the Manual Crowd Pummeler, Leader of the Pack and Travel Form",
  },
  {
    levels: {
      min: 30,
      max: 40,
    },
    title: "Scarlet Monastery",
    where:
      "Scarlet Monastery, in Tirisfal Glades near Undercity. It has four separate parts (called wings). Do them in this order as you level: Graveyard, Library, Armory, Cathedral. Forever also added a new dungeon: The Drowned City (levels 35 to 40).",
    talents:
      "Natural Instinct rank 2 (level 32), Blood Frenzy rank 1 (33), Thick Hide rank 2 (34), Rend and Tear ranks 1 to 5 (levels 35 to 39)",
    train: "A stronger Swipe and Rake (a Cat Form ability) at level 34. Frenzied Regeneration at level 36.",
    items: [
      {
        name: "Ghostshard Talisman",
        itemId: 7731,
        source: "Azshir the Sleepless (Scarlet Monastery Graveyard, a rare boss)",
        confidence: "confirmed",
      },
      {
        name: "Ironspine's Eye",
        itemId: 7686,
        source: "Ironspine (Scarlet Monastery Graveyard, a rare boss)",
        confidence: "confirmed",
      },
      {
        name: "Ebon Vise",
        itemId: 7690,
        source: "Fallen Champion (Scarlet Monastery Graveyard, a rare boss)",
        confidence: "confirmed",
      },
      {
        name: "Dog Whistle",
        itemId: 3456,
        source: "Houndmaster Loksey (Scarlet Monastery Library)",
        confidence: "confirmed",
      },
      {
        name: "Mograine's Might",
        itemId: 7723,
        source: "Scarlet Commander Mograine (Scarlet Monastery Cathedral). Two-handed mace",
        confidence: "classic",
      },
      {
        name: "Vorrel's Boots",
        itemId: 7751,
        source: "Quest: Vorrel's Revenge",
        confidence: "quest",
      },
      {
        name: "Explorer's League Dustcover",
        itemId: 271716,
        source: "Quest: Prehistoric Prism",
        confidence: "quest",
      },
      {
        name: "Watchman Pauldrons",
        itemId: 7727,
        source: "Quest reward or drop (recommended by players)",
        confidence: "confirmed",
      },
      {
        name: "Barbaric Shoulders",
        itemId: 5964,
        source: "Made by leatherworkers",
        confidence: "confirmed",
      },
      {
        name: "Nightscape Tunic",
        itemId: 8175,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Nightscape Headband",
        itemId: 8176,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Nightscape Shoulders",
        itemId: 8192,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Barbaric Harness",
        itemId: 5739,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Shadowskin Gloves",
        itemId: 18238,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
    ],
    tips: [
      "Rend and Tear makes all your attacks hit harder, but only against an enemy that is bleeding. Lacerate is what makes them bleed, so keep at least one Lacerate stack on the enemy you're fighting.",
      "Frenzied Regeneration (level 36) turns your rage into health over 10 seconds. It can heal you all the way to full. It's your emergency heal, and it works best if you press it before you're low.",
    ],
    doneWhen: "You have Rend and Tear 5 of 5 by level 39 and have cleared the Scarlet Monastery Cathedral",
  },
  {
    levels: {
      min: 40,
      max: 40,
    },
    title: "Level 40 power spike",
    where:
      "Go to your druid trainer. (Teleport: Moonglade takes you to the druid town of Moonglade for free.) Level 40 also lets you learn riding: Apprentice Riding costs 100 gold and includes your first mount (Skyborne: Genn Fairweather, Fairweather Stables near Valanaar, Zephras Isle). Until then, Travel Form gives you 40% speed outdoors.",
    talents: "Primal Bite (level 40), Thick Hide rank 3 (41). That finishes the 32 points in Feral Combat.",
    train:
      "Dire Bear Form (an upgrade that replaces Bear Form: same bear, more armor and health), Primal Bite, Innervate, Feline Grace",
    items: [
      {
        name: "Wolfshead Helm",
        itemId: 8345,
        source: "Made by leatherworkers (usable from level 45). Gives extra rage when you press Enrage",
        confidence: "confirmed",
      },
    ],
    tips: [
      "Dire Bear Form multiplies the armor on your gear by 4.6. Because of that, gear with a high armor number gets much better for you. Compare armor, not just stats, when you pick upgrades.",
      "Your buttons from now on: press Primal Bite every time it's ready, keep Lacerate at 5 stacks, and press Maul when you have more than 35 rage. Don't spend so much rage on Maul that you can't afford Primal Bite.",
      "Wolfshead Helm is a leather helmet that leatherworkers can make. When you press Enrage while wearing it, you get extra rage. Some players wear it just before a fight to start with more rage, then swap back to their normal helmet.",
    ],
    doneWhen: "You have Dire Bear Form, Primal Bite and a mount",
  },
  {
    levels: {
      min: 40,
      max: 46,
    },
    title: "Razorfen Downs & Uldaman",
    where:
      "Razorfen Downs (in the Southern Barrens), then Uldaman (in the Badlands). Forever also added a new dungeon: Krol'dok Stronghold in the Riverglades (levels 40 to 45).",
    talents: "Heart of the Wild ranks 1 to 5 (levels 42 to 46). It gives you 20% more Stamina in bear form.",
    train: "A stronger Faerie Fire at level 42. Barkskin and a stronger Swipe at level 44.",
    items: [
      {
        name: "Ironshod Bludgeon",
        itemId: 9408,
        source: "Archaedas, the last boss of Uldaman. A staff",
        confidence: "confirmed",
      },
      {
        name: "Nightscape Pants",
        itemId: 8193,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Nightscape Boots",
        itemId: 8197,
        source: "Made by leatherworkers, or buy it at the Auction House",
        confidence: "confirmed",
      },
      {
        name: "Wild Leather Vest",
        itemId: 8211,
        source:
          "Made by leatherworkers, or buy it at the Auction House. Its bonus stats are random: look for “of the Bear” or “of the Monkey” in the name",
        confidence: "confirmed",
      },
      {
        name: "Wild Leather Helmet",
        itemId: 8214,
        source: "Made by leatherworkers, or buy it at the Auction House. Look for “of the Bear” or “of the Monkey”",
        confidence: "confirmed",
      },
    ],
    tips: [
      "Barkskin makes you take 20% less physical damage for 15 seconds. In Forever you can use it in bear form, and it's ready again after 1 minute, so use it on every dangerous fight.",
      "Wowhead doesn't show most dungeon loot for levels 40 to 60 yet, because Forever hides items until players find them. Items marked “Classic” use their original Classic stats, which Forever may have changed.",
    ],
    doneWhen: "You have Heart of the Wild 5 of 5, Barkskin, and a weapon with at least 37 damage per second",
  },
  {
    levels: {
      min: 46,
      max: 52,
    },
    title: "Zul'Farrak & Maraudon",
    where:
      "Zul'Farrak (in the Tanaris desert), then Maraudon (in Desolace), then Sunken Temple (in the Swamp of Sorrows). Forever also added a new dungeon: Alcaz Island Prison in Dustwallow Marsh (levels 48 to 53).",
    talents: "Naturalist ranks 1 to 5 (levels 47 to 51). It makes everything you do 10% stronger.",
    train: "Stronger ranks of Bash and Dash at level 46, and of Demoralizing Roar at level 52.",
    items: [
      {
        name: "Princess Theradras' Scepter",
        itemId: 17766,
        source: "Princess Theradras, the last boss of Maraudon. Two-handed mace",
        confidence: "classic",
      },
      {
        name: "Blackstone Ring",
        itemId: 17713,
        source: "Princess Theradras (Maraudon)",
        confidence: "classic",
      },
      {
        name: "Embrace of the Lycan",
        itemId: 9479,
        source: "Chief Ukorz Sandscalp (Zul'Farrak). Leather helmet",
        confidence: "classic",
      },
      {
        name: "Wild Leather Leggings",
        itemId: 8212,
        source: "Made by leatherworkers, or buy it at the Auction House. Look for “of the Bear” or “of the Monkey”",
        confidence: "confirmed",
      },
    ],
    tips: [
      "Start earning reputation with Timbermaw Hold (a friendly furbolg faction in Felwood) by killing the furbolgs there. At high enough reputation, leatherworkers can learn the Warbear Harness and Warbear Woolies, two of the best bear chest and leg pieces.",
      "Use Demoralizing Roar on every group of enemies. It makes all of them hit you softer, and one roar covers everyone around you.",
    ],
    doneWhen: "You have Naturalist 5 of 5 and have started Timbermaw Hold reputation",
  },
  {
    levels: {
      min: 52,
      max: 58,
    },
    title: "Blackrock Depths",
    where:
      "Blackrock Depths, inside Blackrock Mountain between the Searing Gorge and the Burning Steppes. It's a huge dungeon with lots of quests and good loot, so you'll run it many times.",
    talents: "Genesis ranks 1 to 5 (levels 52 to 56), Nature's Majesty ranks 1 and 2 (57 and 58)",
    train: "The strongest ranks of Faerie Fire and Swipe at level 54, and of Maul and Lacerate at level 58.",
    items: [
      {
        name: "Warbear Harness",
        itemId: 15064,
        source: "Made by leatherworkers who have the pattern from Timbermaw Hold reputation",
        confidence: "confirmed",
      },
      {
        name: "Warbear Woolies",
        itemId: 15065,
        source: "Made by leatherworkers who have the pattern from Timbermaw Hold reputation",
        confidence: "confirmed",
      },
      {
        name: "Devilsaur Gauntlets",
        itemId: 15063,
        source: "Made by leatherworkers",
        confidence: "confirmed",
      },
      {
        name: "Devilsaur Leggings",
        itemId: 15062,
        source: "Made by leatherworkers",
        confidence: "confirmed",
      },
      {
        name: "Stormshroud Armor",
        itemId: 15056,
        source: "Made by leatherworkers",
        confidence: "confirmed",
      },
      {
        name: "Dark Iron Pulverizer",
        itemId: 11608,
        source: "Random drop in Blackrock Depths, often sold at the Auction House. Two-handed mace",
        confidence: "confirmed",
      },
      {
        name: "Ironfoe",
        itemId: 11684,
        source: "Emperor Dagran Thaurissan, the last boss of Blackrock Depths",
        confidence: "classic",
      },
      {
        name: "Hand of Justice",
        itemId: 11815,
        source: "Bosses in Blackrock Depths. A trinket",
        confidence: "classic",
      },
    ],
    tips: [
      "Armor kits are leatherworking items you apply to your gear for extra armor. Method.gg thinks there may be a bug where bear form multiplies the armor from kits too. If that's true, the Rugged Armor Kit becomes your best upgrade in most slots. Keep an eye on patch notes.",
    ],
    doneWhen: "You have the Warbear or Devilsaur pieces and a weapon with at least 47 damage per second",
  },
  {
    levels: {
      min: 58,
      max: 60,
    },
    title: "Endgame dungeons",
    where:
      "The level 60 dungeons: Blackrock Spire, Stratholme, Scholomance and Dire Maul. Forever also added Blackmaw Hold (levels 55 to 60) and Shaper's Terrace (58 to 60). Start collecting Dungeon Set 1, the druid armor set that drops in these dungeons.",
    talents:
      "Nature's Reach ranks 1 and 2 (levels 59 and 60). That completes the build: 9 Balance, 32 Feral Combat, 10 Restoration.",
    train: "The strongest rank of Primal Bite and the final ranks of your other abilities at level 60.",
    items: [
      {
        name: "Shadowcraft Cap",
        itemId: 16707,
        source: "Part of Dungeon Set 1 (level 60 dungeons)",
        confidence: "confirmed",
      },
      {
        name: "Shadowcraft Tunic",
        itemId: 16721,
        source: "Part of Dungeon Set 1 (level 60 dungeons)",
        confidence: "confirmed",
      },
      {
        name: "Shadowcraft Pants",
        itemId: 16709,
        source: "Part of Dungeon Set 1 (level 60 dungeons)",
        confidence: "confirmed",
      },
      {
        name: "Shadowcraft Spaulders",
        itemId: 16708,
        source: "Part of Dungeon Set 1 (level 60 dungeons)",
        confidence: "confirmed",
      },
      {
        name: "Blackhand's Breadth",
        itemId: 13965,
        source: "General Drakkisath, the last boss of Upper Blackrock Spire. A trinket",
        confidence: "classic",
      },
      {
        name: "Hammer of the Grand Crusader",
        itemId: 18717,
        source: "Stratholme (the living side). Two-handed mace",
        confidence: "classic",
      },
      {
        name: "Cadaverous Armor",
        itemId: 14637,
        source: "Scholomance. Chest armor",
        confidence: "classic",
      },
    ],
    tips: [
      "Raid bosses are level 63, and Method.gg says you need 440 Defense skill (shown on your character sheet) before they can no longer land critical hits on you. Start tracking it once you hit 60.",
    ],
    doneWhen: "You're level 60, have the full talent build, and own some Dungeon Set 1 pieces",
  },
  {
    levels: {
      min: 60,
      max: 60,
    },
    title: "Pre-raid gear",
    where:
      "The best gear before raiding, from PvP, reputation and vendors. This list follows Wowhead's Phase 1 best-in-slot guide.",
    talents:
      "Final build: 9 Balance, 32 Feral Combat, 10 Restoration (Wowhead calls it “Mono-Bear”). If you also want to play Cat Form, Wowhead's “Hybrid” version swaps Blood Frenzy for Predatory Discipline and Shifting Power.",
    train: "-",
    items: [
      {
        name: "Amulet of the Darkmoon",
        itemId: 19491,
        source: "Darkmoon Faire (a traveling fair), bought with 1200 prize tickets",
        confidence: "confirmed",
      },
      {
        name: "Watcher's Signet of Vigilance",
        itemId: 275980,
        source: "Reputation with The Watchers (at Revered)",
        confidence: "confirmed",
      },
      {
        name: "Don Julio's Band",
        itemId: 19325,
        source: "A ring",
        confidence: "confirmed",
      },
      {
        name: "Howler's Furs",
        itemId: 272414,
        source: "Sold by Pix Xizzix, a vendor in Stranglethorn Vale",
        confidence: "confirmed",
      },
      {
        name: "Adaptive Combat Assistant",
        itemId: 272437,
        source: "Sold by Pix Xizzix, a vendor in Stranglethorn Vale. A trinket",
        confidence: "confirmed",
      },
      {
        name: "Cleansed Vilebranch Medallion",
        itemId: 270275,
        source: "A trinket that gets 3 times stronger in forest and grassland areas",
        confidence: "confirmed",
      },
      {
        name: "Enraged Idol",
        itemId: 272428,
        source:
          "Sold by Pix Xizzix, a vendor in Stranglethorn Vale. An idol (druid relic slot) that gives extra rage when you press Enrage",
        confidence: "confirmed",
      },
      {
        name: "The Unstoppable Force",
        itemId: 19323,
        source: "Alterac Valley battleground reward (Horde quartermaster). Two-handed mace",
        confidence: "confirmed",
      },
      {
        name: "Rune of the Guard Captain",
        itemId: 19120,
        source: "Horde quest reward. A trinket that gets 3 times stronger in forest and grassland areas",
        confidence: "confirmed",
      },
      {
        name: "Defiler's Leather Shoulders",
        itemId: 20194,
        source: "Reputation with The Defilers (Arathi Basin battleground), at Exalted",
        confidence: "confirmed",
      },
      {
        name: "Premier Beasthide PvP set",
        itemId: 272760,
        source: "PvP vendor. Wearing all 6 pieces gives extra Stamina, attack power and form speed",
        confidence: "confirmed",
      },
    ],
    tips: [
      "Your Skyborne racial Elemental Insight gives you 5% more damage against elementals. Molten Core, the first raid, is full of them.",
      "The druid tier set bonuses on Wowhead were found in the game files and may still change.",
    ],
    doneWhen: "You have 8% hit chance (4% from Nature's Reach plus 4% from gear) and are working toward 440 Defense",
  },
];

export const abilities: readonly Ability[] = [
  {
    level: 10,
    name: "Bear Form",
    text: "Your tanking form. Skyborne druids get it from the class quest Strength and Mercy.",
    kind: "core",
  },
  {
    level: 10,
    name: "Growl",
    text: "Taunt: forces one enemy to attack you. Usable every 8 seconds.",
    kind: "core",
  },
  {
    level: 12,
    name: "Enrage",
    text: "Gives you rage right away and more over 10 seconds, but you have less armor while it lasts. Use it before a fight.",
    kind: "core",
  },
  {
    level: 14,
    name: "Cure Poison",
    text: "Removes a poison. You get it from a class quest at level 14 (see the Trainer tab).",
    kind: "util",
  },
  {
    level: 16,
    name: "Swipe",
    text: "Hits up to 3 enemies in front of you. Your main way to hold several enemies.",
    kind: "core",
  },
  {
    level: 18,
    name: "Faerie Fire",
    text: "Lowers an enemy's armor. Works from 30 yards, so it's also how you start fights from range.",
    kind: "core",
  },
  {
    level: 20,
    name: "Cat Form",
    text: "Your damage form for questing alone. You get it from a class quest at level 20.",
    kind: "core",
  },
  {
    level: 22,
    name: "Feral Charge",
    text: "A talent, not a trainer spell. In bear form you charge an enemy 8 to 25 yards away, root it and interrupt its spell for 4 seconds. Usable every 15 seconds.",
    kind: "core",
  },
  {
    level: 20,
    name: "Omen of Clarity",
    text: "Your attacks sometimes make your next ability free.",
    kind: "core",
  },
  {
    level: 24,
    name: "Remove Curse",
    text: "Removes a curse. Cast it in normal (caster) form.",
    kind: "util",
  },
  {
    level: 25,
    name: "Lacerate",
    text: "A stacking bleed with high threat. Comes from talents.",
    kind: "core",
  },
  {
    level: 28,
    name: "Challenging Roar",
    text: "Forces every enemy around you to attack you for 6 seconds. Usable once every 10 minutes.",
    kind: "core",
  },
  {
    level: 30,
    name: "Travel Form",
    text: "Run 40% faster outdoors.",
    kind: "util",
  },
  {
    level: 32,
    name: "Poised",
    text: "New in Forever, Cat Form only: your first ability after resting at full energy costs less.",
    kind: "cat",
  },
  {
    level: 36,
    name: "Frenzied Regeneration",
    text: "Turns your rage into health over 10 seconds. Usable every 3 minutes.",
    kind: "core",
  },
  {
    level: 40,
    name: "Dire Bear Form",
    text: "Replaces Bear Form. Same bear, with much more armor, health and attack power.",
    kind: "core",
  },
  {
    level: 40,
    name: "Primal Bite",
    text: "A big bite with very high threat. Usable every 6 seconds. Comes from talents.",
    kind: "core",
  },
  {
    level: 40,
    name: "Innervate",
    text: "Cast on yourself or a healer to restore mana much faster for 20 seconds.",
    kind: "util",
  },
  {
    level: 40,
    name: "Feline Grace",
    text: "Passive: you take less falling damage.",
    kind: "util",
  },
  {
    level: 44,
    name: "Barkskin",
    text: "You take 20% less physical damage for 15 seconds. Works in bear form in Forever.",
    kind: "core",
  },
  {
    level: 46,
    name: "Bash",
    text: "Stuns an enemy for 4 seconds at this rank.",
    kind: "util",
  },
  {
    level: 52,
    name: "Demoralizing Roar",
    text: "Its strongest rank: enemies around you hit you much softer for 30 seconds.",
    kind: "core",
  },
  {
    level: 54,
    name: "Faerie Fire / Swipe",
    text: "Their strongest ranks.",
    kind: "core",
  },
  {
    level: 58,
    name: "Maul / Lacerate",
    text: "Their strongest ranks.",
    kind: "core",
  },
  {
    level: 60,
    name: "Primal Bite",
    text: "Its strongest rank.",
    kind: "core",
  },
];

export const milestones: readonly Milestone[] = [
  { level: 16, title: "Swipe", icon: "inv_misc_monsterclaw_03", text: "Hold several enemies at once" },
  { level: 20, title: "Cat Form + Feral Charge", icon: "ability_hunter_pet_bear", text: "Questing gets much faster" },
  { level: 25, title: "Lacerate", icon: "ability_druid_lacerate", text: "Your main single-target button" },
  {
    level: 30,
    title: "Leader of the Pack + Travel Form",
    icon: "spell_nature_unyeildingstamina",
    text: "Crit bonus for your group, faster travel",
  },
  { level: 36, title: "Frenzied Regeneration", icon: "ability_bullrush", text: "Emergency self-heal" },
  {
    level: 40,
    title: "Dire Bear Form, Primal Bite and a mount",
    icon: "ability_racial_cannibalize",
    text: "Your biggest upgrade on the way to 60",
  },
  { level: 44, title: "Barkskin", icon: "spell_nature_stoneclawtotem", text: "Take 20% less damage on demand" },
  {
    level: 46,
    title: "Heart of the Wild done",
    icon: "spell_holy_blessingofagility",
    text: "20% more Stamina in bear",
  },
  { level: 51, title: "Naturalist done", icon: "spell_nature_healingtouch", text: "10% more damage on everything" },
  { level: 60, title: "Build complete", icon: "ability_racial_bearform", text: "Start gearing for raids" },
];
