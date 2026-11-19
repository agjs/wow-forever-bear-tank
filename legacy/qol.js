/* "Make the game easier" content for the Setup tab (researched Nov 9 2026). */
window.QOL = {
  bars: {
    intro: "The game's own bars only switch bar 1 when you change form. An action-bar addon can make every bar switch. Install only one of these, because they fight over the same buttons.",
    steps: [
      "Install Bartender4 (the version marked for WoW: Forever).",
      "Type /bt in chat to open its settings.",
      "Pick a bar on the left, for example Bar 2, then open State Configuration.",
      "Next to Bear Form, Cat Form and Travel Form, choose which page the bar shows. A form set to \"Don't Page\" won't switch.",
      "Repeat for every bar you want to switch, then put your bear buttons and cat buttons on their pages.",
      "Shift into each form once to check that every bar switches."
    ],
    alt: "Dominos does the same thing through each bar's paging settings. ActionBarPaging is a lighter option that adds paging to the game's own bars (its author tested it on the Forever beta). No source has confirmed that druid form paging is perfect in Forever yet, so test it once."
  },
  settings: [
    ["Auto loot", "Press Esc, open Options, then Controls, and turn on Auto Loot. Saves a click on every kill, and you'll loot and skin a lot."],
    ["Target of target", "Turn on the target-of-target frame in the interface options. It shows who your enemy is hitting. If it isn't you, use Growl."],
    ["Enemy health bars", "Press V to show health bars above enemies. You see every enemy in a pull and which ones are hurt."],
    ["Form bar visible", "Keep the small form bar (stance bar) on screen. It shows which form you're in, and its order is the stance number your macros use."],
    ["Built-in tools first", "Forever has a built-in damage meter and a screen layout editor (Edit Mode). Try them before installing addons that do the same thing."]
  ],
  habits: [
    ["Eat cooked food", "In Forever almost every cooked food gives the Well Fed buff, which adds 5% experience from kills for 15 minutes. Cook what you skin and fish."],
    ["Keep your buffs up", "Mark of the Wild and Thorns fall off all the time. Quality of Life Forever and Enhance QoL can remind you when a buff is missing."],
    ["Set your hearthstone ahead", "Before you leave a town, set your hearthstone at the next quest town on your route, not the one you're leaving."],
    ["Grab every flight path", "Talk to the flight master in every new town, even if you don't fly yet. It saves long runs later."],
    ["Use rested experience", "Log out in an inn or next to your Camp Tent. Rested experience doubles the experience from kills until it runs out."],
    ["Only buy ranks you use", "Skip the optional caster spells at the trainer. The Trainer tab marks them."],
    ["Sell grey items", "Grey items are only worth vendor gold. Sell them every time you're in town to keep bag space free."]
  ],
  checklist: ["Skinning Knife in your bags", "Fishing pole and lures", "Food and water", "At least 4 free bag slots", "Mark of the Wild and Thorns on", "Hearthstone set to your next town"],
  sources: [
    ["Bartender4 for WoW Forever (mmonster)", "https://mmonster.co/wow-forever/guides/addons/bartender4"],
    ["Bartender4 vs Dominos for Forever", "https://wowforeveraddons.com/compare/bartender4-vs-dominos"],
    ["ActionBarPaging Forever (Warperia)", "https://warperia.com/addon-forever/actionbarpaging/"],
    ["Quality of Life Forever (CurseForge)", "https://www.curseforge.com/wow/addons/quality-of-life-forever"],
    ["Best Forever addons (Leprestore)", "https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-best-addons/"],
    ["Method: Feral tank interface and addons", "https://www.method.gg/wow-forever/class-guides/feral-tank-druid/interface-addons-and-macros"]
  ]
};
/* One-button-per-form macros. Stance numbers follow the order you learned your forms (usually 1 Bear, 2 Aquatic, 3 Cat, 4 Travel). */
(window.MACROS || []).unshift(
  { name: "One button: Maul / Claw / Wrath", why: "Maul in Bear Form, Claw in Cat Form, Wrath in caster form. Put it on the same key as your main attack and it does the right thing in every form.", body: "#showtooltip\n/cast [stance:1] Maul; [stance:3] Claw; Wrath", tested: false },
  { name: "One button: Swipe / Rake / Moonfire", why: "Swipe in Bear Form (several enemies), Rake in Cat Form (bleed), Moonfire in caster form.", body: "#showtooltip\n/cast [stance:1] Swipe; [stance:3] Rake; Moonfire", tested: false },
  { name: "One button: Frenzied Regeneration / Dash / Rejuvenation", why: "Your \"get out of trouble\" key: a self-heal in Bear Form (from level 36), a sprint in Cat Form (from 26), a heal in caster form.", body: "#showtooltip\n/cast [stance:1] Frenzied Regeneration; [stance:3] Dash; Rejuvenation", tested: false }
);
(window.ADDONS || []).unshift(
  { name: "Bartender4 or Dominos", why: "Action bars that switch with your form, so every bar changes when you shift, not just bar 1. Pick one, not both.", forever: true },
  { name: "Quality of Life Forever or Enhance QoL", why: "Many small comfort features, all off until you turn them on. Turn on the missing-buff reminder for Mark of the Wild and Thorns.", forever: true }
);
