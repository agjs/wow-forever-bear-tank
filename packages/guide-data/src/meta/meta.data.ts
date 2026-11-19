// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Source, WowheadLinks } from "../common/index.ts";
import type { Meta } from "./meta.types.ts";

export const meta: Meta = {
  patch: "1.60.1",
  updated: "2026-11-05",
  race: "Windshaper Skyborne (Horde)",
  finalBuild: "9 / 32 / 10 (Mono-Bear, with Furor 1 in place of Ferocity rank 5)",
  talentCalculatorUrl: "https://www.wowhead.com/forever/talent-calc/druid/vkndmh050022-5023030212310112501-055_t0",
  hybridCalculatorUrl: "https://www.wowhead.com/forever/talent-calc/druid/vkndmh050022-50230302123110124011-055_t0",
};

export const sources: readonly Source[] = [
  {
    title: "Wowhead: Feral Tank Leveling (L0uki, 2026-11-04)",
    url: "https://www.wowhead.com/forever/guide/classes/druid/feral/tank-leveling-tips",
  },
  {
    title: "Wowhead: Talent Builds",
    url: "https://www.wowhead.com/forever/guide/classes/druid/feral/talent-builds-pve-tank",
  },
  {
    title: "Wowhead: Rotation & Cooldowns",
    url: "https://www.wowhead.com/forever/guide/classes/druid/feral/rotation-cooldowns-pve-tank",
  },
  {
    title: "Wowhead: Level 20 / 30 gearing",
    url: "https://www.wowhead.com/forever/guide/classes/druid/feral/level-30-tank-overview",
  },
  {
    title: "Wowhead: Phase 1 BiS",
    url: "https://www.wowhead.com/forever/guide/classes/druid/feral/bis-gear-tank",
  },
  {
    title: "Wowhead Forever Talent Calculator",
    url: "https://www.wowhead.com/forever/talent-calc/druid",
  },
  {
    title: "Method: Feral Tank Druid",
    url: "https://www.method.gg/wow-forever/class-guides/feral-tank-druid",
  },
  {
    title: "Leprestore: Feral Druid Guide",
    url: "https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-feral-druid-guide-best-builds-rotation-tanking-race-professions/",
  },
  {
    title: "wowtbc.gg: Feral Tank BiS",
    url: "https://wowtbc.gg/warcraftforever/bis-list/feral-tank-druid/",
  },
];

/** Spells and items named in guide text that no other domain links. Name -> Wowhead path. */
export const extraLinks: WowheadLinks = {
  "Mark of the Wild": "spell=1126",
  Thorns: "spell=467",
  "Bear Form": "spell=5487",
  "Cat Form": "spell=768",
  "Travel Form": "spell=783",
  "Aquatic Form": "spell=1066",
  "Remove Curse": "spell=2782",
  "Abolish Poison": "spell=2893",
  "Cure Poison": "spell=8946",
  "Omen of Clarity": "spell=16864",
  Bash: "spell=5211",
  "Healing Touch": "spell=5185",
  Rejuvenation: "spell=774",
  Regrowth: "spell=8936",
  Moonfire: "spell=8921",
  Hibernate: "spell=2637",
  "Entangling Roots": "spell=339",
  "Teleport: Moonglade": "spell=18960",
  "Soothe Animal": "spell=2908",
  Wrath: "spell=5176",
  Tranquility: "spell=740",
  "Feline Grace": "spell=20719",
  "Wolfshead Helm": "item=8345",
  "Enraged Idol": "item=272428",
  "Idol of Shifting Tides": "item=263411",
  "Rugged Armor Kit": "item=15564",
  "Greater Stoneshield Potion": "item=13455",
  "Elixir of the Mongoose": "item=13452",
};
