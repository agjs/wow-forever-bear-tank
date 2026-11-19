// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { WowheadLinks } from "../common/index.ts";
import type { Camps } from "./camps.types.ts";

export const camps: Camps = {
  campSteps: [
    "Make a campfire. With Cooking 220 or more, use the Expert Campfire Kit: it holds 10 camp items. Kits have a 5 minute cooldown.",
    "Sit at the fire for 1 minute. You then get the buff from every camp item placed there, and it lasts 1 hour after you leave.",
    "Place your own camp item next to the fire. You can place only one per hour: all camp items share one 1 hour cooldown, whichever profession they come from.",
    "Other players can sit at your fire and add their own items. They don't need your professions to get the buffs.",
  ],
  campfireKits: [
    {
      name: "Basic Campfire Kit",
      itemId: 279981,
      slots: 3,
      howToGet: "Cooking 20, from your Cooking trainer. Made from 1 Simple Wood (sold by trade goods vendors).",
    },
    {
      name: "Journeyman Campfire Kit",
      itemId: 279961,
      slots: 5,
      howToGet: "Cooking 90. Made from 1 Star Wood. The blueprint drops from Lord Serpentis in Wailing Caverns.",
    },
    {
      name: "Expert Campfire Kit",
      itemId: 279974,
      slots: 10,
      howToGet: "Usable at Cooking 220. Made from 1 Thick Logs. The blueprint drops from Slavecrusher Grox.",
    },
  ],
  whichItemToPlace: [
    {
      title: "Before a dungeon or a hard fight",
      text: "Fish Bowl: 8% more of every stat for an hour. It's the biggest buff you can make.",
    },
    {
      title: "Before you log out or stop for a while",
      text: "Camp Tent: fills your rested experience up to 5% of a level.",
    },
    {
      title: "Fishing",
      text: "Fishing Hut (or Fishing Rack): lets you catch rare fish for an hour and gives fishing lures.",
    },
    {
      title: "Good to know",
      text: "Each upgraded item also gives its first item's buff. A Fishing Hut gives the Fish Bowl's stats, and a Tanning Rack fills rested experience like the Camp Tent. An upgrade can be placed on top of the older item without using another slot.",
    },
  ],
  professionItems: [
    {
      profession: "Leatherworking",
      items: [
        {
          skill: 20,
          name: "Camp Tent",
          itemId: 279978,
          effect:
            "Fills rested experience up to 5% of a level, for you and anyone sitting nearby. Does nothing if you already have more.",
          materials: "5 Light Leather",
          source: "Your Leatherworking trainer.",
        },
        {
          skill: 125,
          name: "Tanning Rack",
          itemId: 279941,
          effect: "Lets you make certain reagents there. Also gives the Camp Tent's rested experience.",
          materials: "5 Medium Leather, 3 Fine Thread, 2 Simple Wood",
          source: "Blueprint: Tanning Rack drops from Razorclaw the Butcher in Shadowfang Keep.",
        },
        {
          skill: 300,
          name: "Sewing Machine",
          itemId: 279945,
          effect: "Needed for recipes that require it. Also gives the Camp Tent's rested experience.",
          materials: "1 Undeath Engine, 5 Rugged Leather, 1 Rune Thread",
          source: "Blueprint: Sewing Machine drops from Vectus in Scholomance.",
        },
      ],
    },
    {
      profession: "Skinning",
      items: [
        {
          skill: 20,
          name: "Camp Chair",
          itemId: 279979,
          effect:
            "2% more critical strike chance with spells and attacks for everyone sitting nearby. Doesn't stack with Moonkin Aura.",
          materials: "3 Light Leather, 2 Simple Wood",
          source: "Your Skinning trainer.",
        },
        {
          skill: 140,
          name: "Field Guide",
          itemId: 279969,
          effect: "Players can read it to learn Track Beasts. Also gives the Camp Chair's crit.",
          materials: "3 Medium Leather, 2 Slimy Murloc Scale, 1 Fine Thread",
          source: "Blueprint: Field Guide drops from Lady Anacondra in Wailing Caverns.",
        },
        {
          skill: 300,
          name: "Trapper's Workbench",
          itemId: 279938,
          effect: "A workbench with one trap. Also gives the Camp Chair's crit.",
          materials: "2 Simple Wood, 4 Heavy Leather, 1 Iron Bar",
          source:
            "Blueprint: Trapper's Workbench drops from Houndmaster Loksey (Scarlet Monastery Library) or The Beast (Upper Blackrock Spire).",
        },
      ],
    },
    {
      profession: "Fishing",
      items: [
        {
          skill: 20,
          name: "Fish Bowl",
          itemId: 279967,
          effect: "8% more of every stat for everyone sitting nearby. Doesn't stack with Blessing of Kings.",
          materials: "1 Raw Brilliant Smallfish, 1 Empty Vial",
          source: "Your Fishing trainer.",
        },
        {
          skill: 140,
          name: "Fishing Rack",
          itemId: 279965,
          effect:
            "You can catch uncommon fish for 1 hour, and it gives fishing lures. Also gives the Fish Bowl's stats.",
          materials: "2 Simple Wood, 1 Crystal Vial, 2 Raw Mithril Head Trout",
          source: "Blueprint: Fishing Rack drops from Gelihast in Blackfathom Deeps.",
        },
        {
          skill: 300,
          name: "Fishing Hut",
          itemId: 279966,
          effect: "You can catch rare fish for 1 hour, and it gives fishing lures. Also gives the Fish Bowl's stats.",
          materials: "5 Simple Wood, 2 Bolt of Runecloth, 1 Seasonal Fish Steaks",
          source: "Blueprint: Fishing Hut drops from Jammal'an the Prophet in the Sunken Temple.",
        },
      ],
    },
    {
      profession: "Cooking",
      items: [
        {
          skill: 140,
          name: "Cookie's Feast",
          itemId: 279957,
          effect: "Stamina food for everyone at the camp.",
          materials: "2 Mystery Meat, 1 Heavy Kodo Meat, 1 Soothing Spices",
          source: "Blueprint: Cookie's Feast drops from Cookie in The Deadmines.",
        },
        {
          skill: 300,
          name: "Iron Oven",
          itemId: 279982,
          effect: "Needed for the most advanced cooking recipes.",
          materials: "10 Simple Flour, 5 Refreshing Spring Water, 4 Soothing Spices",
          source: "Blueprint: Iron Oven drops from Quartermaster Zigris in Lower Blackrock Spire.",
        },
      ],
    },
  ],
  crateSteps: [
    "Waylaid Crates drop from enemies and dungeon bosses from level 10 on. Unfilled crates are also sold at the Auction House.",
    "Right-click a crate to read its label. That decides which materials it wants.",
    "The crate lists a few bundles. Fill any one of them by right-clicking the crate with the materials in your bags. You can fill it a bit at a time.",
    "A full crate becomes a Sealed Crate. Hand it in to Dokimi at the Durotar Supply and Logistics camp just outside the Crossroads in The Barrens (50.0, 29.2).",
    "Your first crate also gives a Shipping Label quest: 50 Merchant's Favor, 2,000 reputation and 660 experience. After that, crates give Merchant's Favor and a little silver, but no reputation.",
    "Crates you don't want: sell them unfilled at the Auction House. They aren't bound to you until filled.",
  ],
  cratesYouCanFill: [
    {
      title: "Fabrics (cheapest for you)",
      text: "Apprentice: 2 Cured Light Hide. Journeyman: 2 Cured Medium Hide. Expert: 2 Cured Heavy Hide. Artisan: 2 Cured Thick Hide. Cured hides are made with Leatherworking.",
    },
    {
      title: "Textiles",
      text: "Apprentice: 20 Light Leather. Journeyman: 20 Medium Leather. Expert: 20 Heavy Leather. Artisan: 20 Thick Leather or 20 Rugged Leather.",
    },
    {
      title: "Crate levels",
      text: "Apprentice and Journeyman crates need level 10, Expert 20, Artisan 35.",
    },
    {
      title: "Favor per crate",
      text: "Apprentice 5 (white crate) or 10 (green crate). Journeyman 10 or 20. Players report about 30 for Expert and 40 for Artisan.",
    },
  ],
  writSteps: [
    "Sealed Craftsman's Writs (Journeyman, Expert, Artisan) drop from enemies and treasure chests from level 10 on. You can also buy them at the Auction House.",
    "Open one to get a named order: one specific crafted item to deliver to a customer somewhere in the world.",
    "Make or buy the item, keep the writ and the item in your bags, and hand them to that customer.",
    "Reputation per delivery: Journeyman 75, Expert 125, Artisan 200, plus some silver. Each order can be done once per day, but different orders don't share that limit.",
    "Faster to Honored: at Friendly, buy a Forged Delivery Receipt (15 Merchant's Favor) from Kurvelk Shadowhoof at the camp. Put it on any empty Waylaid Crate and hand it to Dokimi for 50 reputation.",
  ],
  reputationNote:
    "Friendly needs 3,000 reputation, Honored 6,000 more, Revered 12,000 more and Exalted 21,000 more. Reputation is never spent. It only unlocks what you can buy with Merchant's Favor.",
  merchantFavorRewards: [
    {
      name: "Pattern: Warden's Leather Gloves",
      itemId: 252839,
      effect: "Tank gloves: Strength, Stamina, bonus armor. Wear at level 35.",
      cost: "60 Favor, Friendly, Leatherworking 175",
    },
    {
      name: "Pattern: Warden's Leather Shoulders",
      itemId: 252850,
      effect: "Tank shoulders: Strength, Agility, Stamina, bonus armor. Wear at level 42.",
      cost: "60 Favor, Friendly, Leatherworking 210",
    },
    {
      name: "Pattern: Forceful Thick Armor Kit",
      itemId: 252834,
      effect: "+32 armor and +8 Attack Power on chest, legs, hands or feet (level 40).",
      cost: "60 Favor, Friendly, Leatherworking 185",
    },
    {
      name: "Pattern: Warden's Leather Bracers",
      itemId: 252855,
      effect: "Tank bracers. Wear at level 45.",
      cost: "90 Favor, Honored, Leatherworking 225",
    },
    {
      name: "Pattern: Warden's Leather Boots",
      itemId: 252862,
      effect: "Tank boots: Strength, Stamina, 93 bonus armor. Wear at level 47.",
      cost: "90 Favor, Honored, Leatherworking 235",
    },
    {
      name: "Pattern: Warden's Leather Waistguard",
      itemId: 252874,
      effect: "Tank belt: Strength, Stamina, 102 bonus armor. Wear at level 50.",
      cost: "90 Favor, Honored, Leatherworking 250",
    },
    {
      name: "Leatherworking Certification",
      effect: 'Gives the title "the Leatherworker".',
      cost: "1,000 Favor, Leatherworking 300",
    },
    {
      name: "Reins of the Pack Kodo",
      effect: "A kodo mount, sold by Okamache.",
      cost: "6,000 Favor, Exalted",
    },
    {
      name: "Packmule Treat",
      effect: "Teaches the Minimule pet.",
      cost: "1,500 Favor, Revered",
    },
  ],
  plan: [
    "Hand in your first crate of any kind to get the Shipping Label bonus: 2,000 reputation and 50 Favor.",
    "Fill Fabrics crates with cured hides and Textiles crates with leather you skin. Hand them in for Favor.",
    "Do Craftsman's Writs until Friendly, then buy Warden's Leather Gloves and Shoulders and the Forceful Thick Armor Kit.",
    "For Honored (Warden's Bracers, Boots and Waistguard), keep doing writs or use Forged Delivery Receipts.",
  ],
  sources: [
    {
      title: "Wowhead: Durotar Supply and Logistics guide",
      url: "https://www.wowhead.com/forever/guide/durotar-supply-and-logistics-reputation-professions",
    },
    {
      title: "Conquest Capped: Merchant's Favor and crates",
      url: "https://conquestcapped.com/guides/wow-forever/wow-forever-merchants-favor/",
    },
    {
      title: "Conquest Capped: Craftsman's Writs",
      url: "https://conquestcapped.com/guides/wow-forever/wow-forever-craftsmans-writs/",
    },
    {
      title: "Method: crate list",
      url: "https://www.method.gg/wow-forever/how-to-get-waylaid-crates-and-merchants-favor-in-wow-forever",
    },
    {
      title: "wow-professions.com: camping guide",
      url: "https://www.wow-professions.com/forever/camping-guide",
    },
    {
      title: "Blizzard: Gather Around the Campfire",
      url: "https://news.blizzard.com/en-us/article/24301516",
    },
  ],
};

export const campLinks: WowheadLinks = {
  "Cured Light Hide": "item=4231",
  "Cured Medium Hide": "item=4233",
  "Cured Heavy Hide": "item=4236",
  "Cured Thick Hide": "item=8172",
  "Fish Bowl": "item=279967",
  "Camp Tent": "item=279978",
  "Camp Chair": "item=279979",
  "Fishing Hut": "item=279966",
  "Fishing Rack": "item=279965",
  "Tanning Rack": "item=279941",
  "Expert Campfire Kit": "item=279974",
  "Merchant's Favor": "currency=3402",
  Dokimi: "npc=256386",
  "Kurvelk Shadowhoof": "npc=256672",
  Okamache: "npc=256400",
  "Lord Serpentis": "npc=3673",
  "Simple Wood": "item=4470",
  "Star Wood": "item=11291",
  "Thick Logs": "item=272941",
  "Waylaid Crate": "item=248549",
};
