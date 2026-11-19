/** Every page of the guide, in sidebar order. `slug` "" is the home page (Today). */
export interface Section {
  readonly slug: string;
  readonly title: string;
  readonly icon: string;
  readonly group: "Play" | "Your bear" | "Professions" | "More";
  /** Page title and description for search engines. */
  readonly heading: string;
  readonly description: string;
  /** The tab id this section had on the original one-page site (#today, #dq, ...). */
  readonly legacyHash: string;
}

export const SECTIONS: readonly Section[] = [
  {
    slug: "",
    title: "Today",
    icon: "inv_misc_pocketwatch_01",
    group: "Play",
    heading: "What to do at your level",
    description:
      "WoW: Forever Feral Druid bear tank: where to quest, what to train and which talent to take at your level.",
    legacyHash: "today",
  },
  {
    slug: "road",
    title: "Road to 60",
    icon: "inv_misc_map_01",
    group: "Play",
    heading: "Road to 60",
    description: "A checkpointed leveling plan for a WoW: Forever bear tank: zones, dungeons, talents and loot.",
    legacyHash: "road",
  },
  {
    slug: "dungeons",
    title: "Dungeons",
    icon: "inv_misc_key_03",
    group: "Play",
    heading: "Dungeon cheat sheets",
    description: "Tank route, bosses and dangers for every WoW: Forever dungeon from Ragefire Chasm to Scholomance.",
    legacyHash: "dungeons",
  },
  {
    slug: "dungeon-quests",
    title: "Dungeon quests",
    icon: "inv_misc_note_01",
    group: "Play",
    heading: "Dungeon quests",
    description: "Every Horde dungeon quest for levels 50–60 in WoW: Forever, grouped by where you pick it up.",
    legacyHash: "dq",
  },
  {
    slug: "talents",
    title: "Talents",
    icon: "ability_druid_catform",
    group: "Your bear",
    heading: "Talents",
    description:
      "Bear tank talent order for every level from 10 to 60 in WoW: Forever, plus cat and balance second specs.",
    legacyHash: "talents",
  },
  {
    slug: "rotation",
    title: "Rotation",
    icon: "ability_druid_maul",
    group: "Your bear",
    heading: "Rotation",
    description: "Which button to press as a WoW: Forever bear tank on one, two or many enemies, and in Cat Form.",
    legacyHash: "rotation",
  },
  {
    slug: "trainer",
    title: "Trainer",
    icon: "inv_misc_book_09",
    group: "Your bear",
    heading: "Trainer: new spells by level",
    description: "Druid trainer spells and class quests by level in WoW: Forever, with costs.",
    legacyHash: "trainer",
  },
  {
    slug: "gear",
    title: "Gear",
    icon: "inv_chest_leather_04",
    group: "Your bear",
    heading: "What to wear",
    description: "Bear tank gear and enchants for every slot and level in WoW: Forever.",
    legacyHash: "gear",
  },
  {
    slug: "professions",
    title: "Professions",
    icon: "trade_leatherworking",
    group: "Professions",
    heading: "Professions",
    description: "Leatherworking, Skinning, Cooking and Fishing 1–300 in WoW: Forever, plus making gold.",
    legacyHash: "prof",
  },
  {
    slug: "camps",
    title: "Camps & Crates",
    icon: "spell_fire_fire",
    group: "Professions",
    heading: "Camps & Crates",
    description: "How WoW: Forever camps, Waylaid Crates, Merchant's Favor and Craftsman's Writs work.",
    legacyHash: "camps",
  },
  {
    slug: "pvp",
    title: "PvP",
    icon: "ability_dualwield",
    group: "More",
    heading: "PvP",
    description: "Feral Druid PvP in WoW: Forever: how to beat every Alliance class.",
    legacyHash: "pvp",
  },
  {
    slug: "setup",
    title: "Setup",
    icon: "inv_misc_gear_01",
    group: "More",
    heading: "Setup",
    description: "Action bars, settings, macros, keybinds and addons for a WoW: Forever bear tank.",
    legacyHash: "setup",
  },
  {
    slug: "deep-dive",
    title: "Deep dive",
    icon: "inv_misc_book_11",
    group: "More",
    heading: "Deep dive",
    description: "Bear tank math for WoW: Forever: armor, talent effects, stat priority and what changed from Classic.",
    legacyHash: "deep",
  },
];

export const SECTION_GROUPS = ["Play", "Your bear", "Professions", "More"] as const;
