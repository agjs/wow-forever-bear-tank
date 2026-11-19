// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type { Addon, QualityOfLife, Racial } from "./setup.types.ts";

export const addons: readonly Addon[] = [
  {
    name: "Bartender4 or Dominos",
    why: "Action bars that switch with your form, so every bar changes when you shift, not just bar 1. Pick one, not both.",
    worksInForever: true,
  },
  {
    name: "Quality of Life Forever or Enhance QoL",
    why: "Many small comfort features, all off until you turn them on. Turn on the missing-buff reminder for Mark of the Wild and Thorns.",
    worksInForever: true,
  },
  {
    name: "Questie",
    why: "Shows quest objectives on your map. A version that works with Forever is listed.",
    worksInForever: true,
  },
  {
    name: "QuestieTrace",
    why: "A companion addon that records Forever's new quests, which the Questie database for Classic does not have yet.",
    worksInForever: true,
  },
  {
    name: "A threat meter (ThreatClassic2 or Details)",
    why: "Shows how far ahead you are on threat for each enemy. Threat is how much an enemy wants to attack you. Check that a version for Forever exists before you install it.",
    worksInForever: false,
  },
  {
    name: "Threat Plates",
    why: "Name tags above enemies that change color when you lose aggro (when an enemy stops attacking you). Method calls it essential for tanks.",
    worksInForever: false,
  },
  {
    name: "DBM or BigWigs",
    why: "Warning addons for boss fights, used in raids at level 60. Raids are large group dungeons.",
    worksInForever: false,
  },
  {
    name: "Leatrix Plus",
    why: "Small tweaks that make the game more convenient.",
    worksInForever: false,
  },
  {
    name: "WeakAuras",
    why: "Sources disagree on whether a version for Forever exists. Wait before installing it.",
    worksInForever: false,
  },
];

export const qualityOfLife: QualityOfLife = {
  actionBars: {
    intro:
      "The game's own bars only switch bar 1 when you change form. An action-bar addon can make every bar switch. Install only one of these, because they fight over the same buttons.",
    steps: [
      "Install Bartender4 (the version marked for WoW: Forever).",
      "Type /bt in chat to open its settings.",
      "Pick a bar on the left, for example Bar 2, then open State Configuration.",
      "Next to Bear Form, Cat Form and Travel Form, choose which page the bar shows. A form set to \"Don't Page\" won't switch.",
      "Repeat for every bar you want to switch, then put your bear buttons and cat buttons on their pages.",
      "Shift into each form once to check that every bar switches.",
    ],
    alt: "Dominos does the same thing through each bar's paging settings. ActionBarPaging is a lighter option that adds paging to the game's own bars (its author tested it on the Forever beta). No source has confirmed that druid form paging is perfect in Forever yet, so test it once.",
  },
  settings: [
    {
      title: "Auto loot",
      text: "Press Esc, open Options, then Controls, and turn on Auto Loot. Saves a click on every kill, and you'll loot and skin a lot.",
    },
    {
      title: "Target of target",
      text: "Turn on the target-of-target frame in the interface options. It shows who your enemy is hitting. If it isn't you, use Growl.",
    },
    {
      title: "Enemy health bars",
      text: "Press V to show health bars above enemies. You see every enemy in a pull and which ones are hurt.",
    },
    {
      title: "Form bar visible",
      text: "Keep the small form bar (stance bar) on screen. It shows which form you're in, and its order is the stance number your macros use.",
    },
    {
      title: "Built-in tools first",
      text: "Forever has a built-in damage meter and a screen layout editor (Edit Mode). Try them before installing addons that do the same thing.",
    },
  ],
  habits: [
    {
      title: "Eat cooked food",
      text: "In Forever almost every cooked food gives the Well Fed buff, which adds 5% experience from kills for 15 minutes. Cook what you skin and fish.",
    },
    {
      title: "Keep your buffs up",
      text: "Mark of the Wild and Thorns fall off all the time. Quality of Life Forever and Enhance QoL can remind you when a buff is missing.",
    },
    {
      title: "Set your hearthstone ahead",
      text: "Before you leave a town, set your hearthstone at the next quest town on your route, not the one you're leaving.",
    },
    {
      title: "Grab every flight path",
      text: "Talk to the flight master in every new town, even if you don't fly yet. It saves long runs later.",
    },
    {
      title: "Use rested experience",
      text: "Log out in an inn or next to your Camp Tent. Rested experience doubles the experience from kills until it runs out.",
    },
    {
      title: "Only buy ranks you use",
      text: "Skip the optional caster spells at the trainer. The Trainer tab marks them.",
    },
    {
      title: "Sell grey items",
      text: "Grey items are only worth vendor gold. Sell them every time you're in town to keep bag space free.",
    },
  ],
  checklist: [
    "Skinning Knife in your bags",
    "Fishing pole and lures",
    "Food and water",
    "At least 4 free bag slots",
    "Mark of the Wild and Thorns on",
    "Hearthstone set to your next town",
  ],
  sources: [
    {
      title: "Bartender4 for WoW Forever (mmonster)",
      url: "https://mmonster.co/wow-forever/guides/addons/bartender4",
    },
    {
      title: "Bartender4 vs Dominos for Forever",
      url: "https://wowforeveraddons.com/compare/bartender4-vs-dominos",
    },
    {
      title: "ActionBarPaging Forever (Warperia)",
      url: "https://warperia.com/addon-forever/actionbarpaging/",
    },
    {
      title: "Quality of Life Forever (CurseForge)",
      url: "https://www.curseforge.com/wow/addons/quality-of-life-forever",
    },
    {
      title: "Best Forever addons (Leprestore)",
      url: "https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-best-addons/",
    },
    {
      title: "Method: Feral tank interface and addons",
      url: "https://www.method.gg/wow-forever/class-guides/feral-tank-druid/interface-addons-and-macros",
    },
  ],
};

export const racials: readonly Racial[] = [
  {
    name: "Wind Blessed",
    text: "Passive: you attack 2% faster. More swings means more rage.",
  },
  {
    name: "Skysight",
    text: "Run 15% faster for 15 seconds, usable every 2 minutes. Doesn't work inside raids.",
  },
  {
    name: "Walk on Air",
    text: "Glide for 10 seconds, usable every 90 seconds. Lets you safely jump off ledges, for example in Blackrock Depths.",
  },
  {
    name: "Elemental Insight",
    text: "5% more damage against elementals. Good for Molten Core, the first raid.",
  },
];
