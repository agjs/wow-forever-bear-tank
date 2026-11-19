// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Source } from "../common/index.ts";
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
