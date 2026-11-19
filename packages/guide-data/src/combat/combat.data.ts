// Bear Tank Codex guide data. The website and the addon are both built from this package.
import type {
  EmergencyButton,
  Keybind,
  Macro,
  Mechanic,
  PriorityListKey,
  PriorityStep,
  Rotation,
  SpellInfo,
  StatPriority,
} from "./combat.types.ts";

export const rotation: Rotation = {
  prePull: [
    "Cast Mark of the Wild and Thorns on yourself.",
    "Shift into Bear Form. (At level 40 the trainer teaches you Dire Bear Form. It's the same bear, just stronger, and it replaces Bear Form.)",
    "Press Enrage. It gives you some rage right away, so you can start making threat from your first hit.",
    "Press Maul. It doesn't fire right away. It waits and replaces your next normal swing with a harder hit.",
    "Start the fight with Faerie Fire. It works from range and pulls the enemy to you. From level 22 (when you take the Feral Charge talent) you can charge in instead.",
  ],
  singleTarget: [
    {
      action: "Lacerate",
      when: "if 5 stacks AND ≤3s remaining → refresh (never let it drop)",
    },
    {
      action: "Faerie Fire",
      when: "if no armor debuff on target",
    },
    {
      action: "Primal Bite",
      when: "off cooldown (6s). TOP PRIORITY for threat",
    },
    {
      action: "Demoralizing Roar",
      when: "if no AP-reduction debuff",
    },
    {
      action: "Lacerate",
      when: "filler (stack to 5)",
    },
    {
      action: "Maul",
      when: "off-GCD, rage > 35, unless that would starve Primal Bite",
    },
  ],
  cleave: [
    {
      action: "Faerie Fire",
      when: "primary",
    },
    {
      action: "Primal Bite",
      when: "on CD",
    },
    {
      action: "Demoralizing Roar",
      when: "maintain",
    },
    {
      action: "Lacerate",
      when: "if no bleed on primary (Rend and Tear uptime)",
    },
    {
      action: "Swipe",
      when: "filler",
    },
    {
      action: "Maul",
      when: "rage > 35",
    },
  ],
  aoe: [
    {
      action: "Faerie Fire",
      when: "primary target",
    },
    {
      action: "Demoralizing Roar",
      when: "all",
    },
    {
      action: "Swipe",
      when: "spam (3 targets, +30% FI, +10% SF)",
    },
    {
      action: "Maul",
      when: "rage > 35",
    },
    {
      action: "Challenging Roar",
      when: "emergency: 6s, 10 min CD",
    },
  ],
  defensive: [
    {
      action: "Barkskin",
      when: "−20% physical, 15s / 1 min. Usable in form (Forever change). Use proactively.",
    },
    {
      action: "Frenzied Regeneration",
      when: "10 rage/s → 10% HP/s for 10s (up to 100% HP), 3 min. Start before you're low.",
    },
    {
      action: "Greater Stoneshield Potion",
      when: "hard-hitting bosses (shares potion CD)",
    },
    {
      action: "Challenging Roar",
      when: "threat recovery, not a permanent threat lead",
    },
  ],
  forms: [
    {
      action: "Bear / Dire Bear",
      when: "Use it whenever you're tanking. Shifting costs mana. The Idol of Shifting Tides (Skyborne quest reward at level 4) makes it cheaper.",
    },
    {
      action: "Cat",
      when: "For questing alone from level 20. Use Claw as your main attack. Use Shred only when Omen of Clarity makes it free.",
    },
    {
      action: "Caster",
      when: "Drop out of bear to cast Innervate, Rebirth, Remove Curse, Abolish Poison, or to heal between fights. You take much more damage in caster form, so only do it when nothing is hitting you.",
    },
    {
      action: "Shifting for rage",
      when: "Don't bother. Forever already gives bears plenty of rage when they get hit, so shifting in and out for rage isn't worth it.",
    },
    {
      action: "Mana",
      when: "Your mana comes back while you fight in bear or cat, so you don't need to drink after every fight.",
    },
  ],
};

export const mechanics: readonly Mechanic[] = [
  {
    title: "Bear damage",
    text: "Your bear attacks are based on your weapon's damage per second, times 2.5. Weapon speed doesn't matter. Every 14 attack power adds 1 damage per second.",
    source: "Method.gg",
  },
  {
    title: "Armor",
    text: "Dire Bear Form multiplies the armor on your gear by 4.6. Bear Form multiplies it by 2.8. The bonus armor from Thick Hide is multiplied too. Armor can never reduce damage by more than 75%.",
    source: "Wowhead tooltips / Method.gg",
  },
  {
    title: "Rage",
    text: "Forever gives you more rage when you get hit than Classic did. Against a boss that hits you you'll rarely run out, so talents that give rage are worth less.",
    source: "Wowhead (L0uki)",
  },
  {
    title: "Hit chance",
    text: "Melee and spell hit chance are the same stat in Forever. You need 8% to never miss a boss.",
    source: "Method.gg",
  },
  {
    title: "Defense",
    text: "With 440 Defense skill, level 63 raid bosses can no longer land critical hits on you.",
    source: "Method.gg",
  },
  {
    title: "Stats",
    text: "1 Strength = 2 attack power. Agility gives a little crit, dodge and armor. 1 Stamina = 10 health. Intellect and Spirit do almost nothing for a bear.",
    source: "Method.gg",
  },
  {
    title: "Threat",
    text: "Bear form makes everything you do cause 115% more threat.",
    source: "Leprestore",
  },
  {
    title: "Items in forms",
    text: "In Forever you can use many items without leaving your form. Sharpening stones and weightstones now make your bear attacks stronger.",
    source: "Method.gg / Wowhead",
  },
  {
    title: "Below level 20",
    text: "Bear attacks barely get stronger in the first levels. Hitting things in caster form with Thorns up can do about as much damage.",
    source: "Wowhead",
  },
];

export const statPriority: StatPriority = {
  priority: "Weapon damage per second, then Strength, then hit chance (up to 8%), then crit, then Agility.",
  defense: "Stamina and armor first, then Agility, then dodge. Raids may also need 440 Defense.",
  note: "Method.gg says it's too early in Forever to know exact stat values.",
};

export const macros: readonly Macro[] = [
  {
    name: "One button: Maul / Claw / Wrath",
    why: "Maul in Bear Form, Claw in Cat Form, Wrath in caster form. Put it on the same key as your main attack and it does the right thing in every form.",
    body: "#showtooltip\n/cast [stance:1] Maul; [stance:3] Claw; Wrath",
    tested: false,
  },
  {
    name: "One button: Swipe / Rake / Moonfire",
    why: "Swipe in Bear Form (several enemies), Rake in Cat Form (bleed), Moonfire in caster form.",
    body: "#showtooltip\n/cast [stance:1] Swipe; [stance:3] Rake; Moonfire",
    tested: false,
  },
  {
    name: "One button: Frenzied Regeneration / Dash / Rejuvenation",
    why: 'Your "get out of trouble" key: a self-heal in Bear Form (from level 36), a sprint in Cat Form (from 26), a heal in caster form.',
    body: "#showtooltip\n/cast [stance:1] Frenzied Regeneration; [stance:3] Dash; Rejuvenation",
    tested: false,
  },
  {
    name: "Primal Bite + Maul",
    why: "Uses Primal Bite when it is ready, then queues Maul for your next swing. The exclamation mark stops a second press from canceling Maul. Use it only when you have rage to spare.",
    body: "#showtooltip Primal Bite\n/cast [@target,harm,nodead] Primal Bite\n/cast [@target,harm,nodead] !Maul",
    tested: false,
  },
  {
    name: "Feral Charge, Shift = Bash",
    why: "Use Feral Charge to leap at an enemy from range. Hold Shift to use Bash instead.",
    body: "#showtooltip\n/cast [mod:shift] Bash; Feral Charge",
    tested: false,
  },
  {
    name: "Growl: focus > mouseover > target",
    why: "Taunts an enemy without changing your current target. Hold Ctrl to use Challenging Roar instead, which taunts every enemy nearby.",
    body: "#showtooltip\n/cast [mod:ctrl] Challenging Roar; [@focus,harm,nodead] Growl; [@mouseover,harm,nodead] Growl; Growl",
    tested: false,
  },
  {
    name: "Pre-pull Enrage + Wolfshead",
    why: "Equips the Wolfshead Helm (a leatherworking helmet that gives extra rage when you Enrage), then uses Enrage. In Forever, this gives 5 extra rage. Use it in bear form about 10 seconds before the pull. If you use a different helm for this swap, change the helm name in the macro.",
    body: "#showtooltip Enrage\n/equip Wolfshead Helm\n/cast [form:1] Enrage",
    tested: false,
  },
  {
    name: "Swap back to tank helm",
    why: "Use this after the pull. Type the name of your normal tank helm in place of the placeholder.",
    body: "#showtooltip\n/equip YOUR TANK HELM NAME",
    tested: false,
  },
  {
    name: "Oh no button",
    why: "Uses Barkskin, which reduces the damage you take, then Frenzied Regeneration, which heals you over time. In Forever, Barkskin can be used in bear form.",
    body: "#showtooltip Barkskin\n/cast Barkskin\n/cast Frenzied Regeneration",
    tested: false,
  },
  {
    name: "Rebirth / Innervate (leaves form)",
    why: "Leaves your current form. If you are hovering over a dead friendly player, it casts Rebirth (a spell that brings them back to life, even during combat). Otherwise, it casts Innervate (a spell that speeds up mana regeneration) on the friendly player you are hovering over, or on yourself if there is none. Press your bear key afterwards.",
    body: "#showtooltip\n/cancelform [form]\n/cast [@mouseover,help,dead] Rebirth; [@mouseover,help] Innervate; [@player] Innervate",
    tested: false,
  },
  {
    name: "Bear (never toggles off)",
    why: "Changes you into Dire Bear Form only if you are not already in it, so you can press it repeatedly without switching out.",
    body: "#showtooltip Dire Bear Form\n/cast [noform:1] Dire Bear Form",
    tested: false,
  },
  {
    name: "Re-shift: break roots and slows",
    why: "Leaves your current form and re-enters Dire Bear Form with one press. This removes effects that root or slow you. It costs mana.",
    body: "#showtooltip Dire Bear Form\n/cancelform [form:1]\n/cast Dire Bear Form",
    tested: false,
  },
];

export const keybinds: readonly Keybind[] = [
  {
    key: "1",
    action: "Lacerate",
  },
  {
    key: "2",
    action: "Primal Bite + Maul macro",
  },
  {
    key: "3",
    action: "Swipe",
  },
  {
    key: "4",
    action: "Maul",
  },
  {
    key: "5",
    action: "Demoralizing Roar",
  },
  {
    key: "Q",
    action: "Feral Charge / Bash macro",
  },
  {
    key: "E",
    action: "Growl macro (Ctrl = Challenging Roar)",
  },
  {
    key: "R",
    action: "Faerie Fire",
  },
  {
    key: "F",
    action: "Enrage",
  },
  {
    key: "T",
    action: "Barkskin",
  },
  {
    key: "G",
    action: "Oh no button (Barkskin + Frenzied Regen)",
  },
  {
    key: "Z",
    action: "Bear macro",
  },
  {
    key: "X",
    action: "Re-shift macro",
  },
  {
    key: "Shift-1",
    action: "Pre-pull Wolfshead + Enrage",
  },
  {
    key: "Shift-2",
    action: "Swap back helm",
  },
  {
    key: "Ctrl-1",
    action: "Rebirth / Innervate macro",
  },
];

/** Icon and Forever spell ID for every button the rotation, PvP and emergency lists name. */
export const spells: Readonly<Record<string, SpellInfo>> = {
  Lacerate: { icon: "ability_druid_lacerate", spellId: 1235827 },
  "Primal Bite": { icon: "ability_racial_cannibalize", spellId: 1238070 },
  Maul: { icon: "ability_druid_maul", spellId: 9881 },
  Swipe: { icon: "inv_misc_monsterclaw_03", spellId: 9908 },
  "Demoralizing Roar": { icon: "ability_druid_demoralizingroar", spellId: 9898 },
  "Faerie Fire": { icon: "spell_nature_faeriefire", spellId: 9907 },
  Enrage: { icon: "ability_druid_enrage", spellId: 5229 },
  Barkskin: { icon: "spell_nature_stoneclawtotem", spellId: 22812 },
  "Frenzied Regeneration": { icon: "ability_bullrush", spellId: 22842 },
  "Challenging Roar": { icon: "ability_druid_challangingroar", spellId: 5209 },
  Growl: { icon: "ability_physical_taunt", spellId: 6795 },
  "Feral Charge": { icon: "ability_hunter_pet_bear", spellId: 16979 },
  Claw: { icon: "ability_druid_rake", spellId: 1082 },
  Rake: { icon: "ability_druid_disembowel", spellId: 1822 },
  Shred: { icon: "spell_shadow_vampiricaura", spellId: 5221 },
  Rip: { icon: "ability_ghoulfrenzy", spellId: 1079 },
  "Ferocious Bite": { icon: "ability_druid_ferociousbite", spellId: 22568 },
  Prowl: { icon: "ability_ambush", spellId: 5215 },
  Ravage: { icon: "ability_druid_ravage", spellId: 6785 },
  "Tiger's Fury": { icon: "ability_mount_jungletiger", spellId: 5217 },
  "Dire Bear Form": { icon: "ability_racial_bearform", spellId: 9634 },
  Innervate: { icon: "spell_nature_lightning", spellId: 29166 },
  Rebirth: { icon: "spell_nature_reincarnation", spellId: 20748 },
};

/** Press the first button that applies, then start again from the top. */
export const priorityLists: Readonly<Record<PriorityListKey, readonly PriorityStep[]>> = {
  single: [
    {
      spell: "Lacerate",
      text: "Once it has 5 stacks, renew it when 3 seconds or less are left. Don't let it run out.",
      unlock: { talent: "lacerate" },
    },
    { spell: "Faerie Fire", text: "If the enemy doesn't have it yet. It lowers their armor.", unlock: { level: 18 } },
    {
      spell: "Primal Bite",
      text: "Every time it's ready. It makes the most threat of anything you have.",
      unlock: { talent: "primalBite" },
    },
    {
      spell: "Demoralizing Roar",
      text: "If the enemy doesn't have it yet. It makes them hit you softer.",
      unlock: { level: 10 },
    },
    {
      spell: "Lacerate",
      text: "When nothing above is needed, use it to build up to 5 stacks.",
      unlock: { talent: "lacerate" },
    },
    {
      spell: "Swipe",
      text: "When nothing above is needed (until you get Lacerate).",
      unlock: { level: 16, onlyBefore: "lacerate" },
    },
    {
      spell: "Maul",
      text: "Doesn't use up a turn, so press it on top of everything else when you have more than 35 rage. Skip it if Primal Bite is about to be ready and you'd be short on rage for it.",
      unlock: { level: 10 },
    },
  ],
  cleave: [
    { spell: "Faerie Fire", text: "On your main target.", unlock: { level: 18 } },
    { spell: "Primal Bite", text: "Every time it's ready.", unlock: { talent: "primalBite" } },
    { spell: "Demoralizing Roar", text: "Keep it on the enemies.", unlock: { level: 10 } },
    {
      spell: "Lacerate",
      text: "If your main target isn't bleeding. Your other attacks hit harder against bleeding enemies.",
      unlock: { talent: "lacerate" },
    },
    { spell: "Swipe", text: "When nothing above is needed.", unlock: { level: 16 } },
    { spell: "Maul", text: "On top of everything else, when you have more than 35 rage.", unlock: { level: 10 } },
  ],
  aoe: [
    { spell: "Faerie Fire", text: "On the main target.", unlock: { level: 18 } },
    { spell: "Demoralizing Roar", text: "Hits every enemy around you.", unlock: { level: 10 } },
    { spell: "Swipe", text: "Press it over and over. It hits 3 enemies at once.", unlock: { level: 16 } },
    { spell: "Maul", text: "On top of everything else, when you have more than 35 rage.", unlock: { level: 10 } },
    {
      spell: "Challenging Roar",
      text: "Emergency only: forces every enemy around you to attack you for 6 seconds. Usable once every 10 minutes.",
      unlock: { level: 28 },
    },
  ],
  cat: [
    {
      spell: "Prowl",
      text: "Before the fight. Prowl is Cat Form's stealth: enemies can't see you, but you move slower. Sneak up behind the enemy.",
      unlock: { level: 20 },
    },
    {
      spell: "Ravage",
      text: "Your first hit from Prowl, standing behind the enemy. A very big hit.",
      unlock: { level: 32 },
    },
    {
      spell: "Shred",
      text: "Your first hit from Prowl before level 32. Also use it any time you're standing behind the enemy, or when Omen of Clarity makes your next ability free.",
      unlock: { level: 20 },
    },
    {
      spell: "Feral Charge",
      text: "In Cat Form, Feral Charge leaps you behind the enemy from 8 to 25 yards away. Follow it with Shred. Usable every 30 seconds.",
      unlock: { talent: "feralCharge" },
    },
    {
      spell: "Tiger's Fury",
      text: "At the start of the fight: 15% more damage for 6 seconds. Usable every 30 seconds.",
      unlock: { level: 24 },
    },
    {
      spell: "Rake",
      text: "If the enemy isn't bleeding from Rake yet. It hits, then keeps hurting over 9 seconds.",
      unlock: { level: 24 },
    },
    {
      spell: "Ferocious Bite",
      text: "At 5 combo points, to finish off the enemy. Most questing enemies die quickly, so this is usually your best finisher.",
      unlock: { level: 24 },
    },
    {
      spell: "Rip",
      text: "At 4 or 5 combo points on an enemy with a lot of health (it hurts over 12 seconds). Before level 32 it's your only finisher, so use it at 3 or more combo points.",
      unlock: { level: 20 },
    },
    {
      spell: "Claw",
      text: "When nothing above applies. Builds 1 combo point. Your main button when you're facing the enemy.",
      unlock: { level: 20 },
    },
  ],
};

/** Explains combo points and when to leave Cat Form, shown above the cat priority list. */
export const catFormNote: readonly string[] = [
  "For questing alone, one enemy at a time. Claw, Shred, Rake and Ravage each give you a combo point (the dots on the enemy's portrait, up to 5). Rip and Ferocious Bite are finishers: they spend all your combo points, and more points means a stronger hit.",
  "Switch to Bear Form if a second enemy joins, or if you drop below about half health. Your talents are built for bear, so Cat Form hits softer than it would for a damage-focused druid, but it still kills single enemies faster.",
];

export const emergencyButtons: readonly EmergencyButton[] = [
  {
    spell: "Barkskin",
    text: "You take 20% less physical damage for 15 seconds. Ready again after 1 minute. In Forever it works in bear form, so use it often.",
    level: 44,
  },
  {
    spell: "Frenzied Regeneration",
    text: "Turns your rage into health for 10 seconds, up to a full heal. Press it before you're low, not when you're almost dead. Ready again after 3 minutes.",
    level: 36,
  },
  {
    spell: "Challenging Roar",
    text: "Forces every enemy around you to attack you for 6 seconds. Use it when enemies run off to hit someone else.",
    level: 28,
  },
  {
    spell: "Enrage",
    text: "Gives you rage right away, but you take a bit more damage for 10 seconds. Use it before a fight or when you're out of rage.",
    level: 12,
  },
];
