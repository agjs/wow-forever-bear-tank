/* Second spec (dual specialization) builds. Researched Nov 18 2026.
   order = talent keys in the order to spend points after a respec; the first (level - 9) entries are what you can afford. */
window.SPEC2 = {
  dual: [
    "Dual spec (called Secondary Talents in game) is bought from your class trainer in a major city from level 40. Players report it costs 50 gold.",
    "You can switch between your two specs anywhere, out of combat. Changing the talents inside a spec still needs the trainer.",
    "Both specs can use the Feral tree: dual spec saves two talent setups, not two different trees. Method's Balance guide even assumes two builds in the same tree.",
    "Switching specs does not swap your gear. A Feral cat spec uses the same Agility leather as your bear, so you can switch without changing gear.",
    "A Nov 13 hotfix stopped action bars resetting at logout for players with dual spec. If your bars still clear when you switch, the addon ActionBarSaver: Reloaded can save and restore them."
  ],
  cat: {
    title: "Feral cat DPS (recommended second spec)",
    total: "0 / 41 / 10",
    why: "This uses the same gear as your bear (Agility, Strength, Attack Power, leather), so it costs nothing extra. It kills faster while questing, deals damage in groups that already have a tank, and is the strongest feral setup for PvP.",
    order: [
      "ferocity","ferocity","ferocity","ferocity","ferocity",
      "furor","furor","furor","furor","furor",
      "feralSwiftness","feralSwiftness","thickHide","thickHide","thickHide",
      "shreddingAttacks","shreddingAttacks","shreddingAttacks","savageFury","savageFury","sharpenedClaws","sharpenedClaws","feralCharge",
      "predatoryStrikes","predatoryStrikes","predatoryStrikes","predatoryDiscipline","bloodFrenzy","bloodFrenzy",
      "leaderOfThePack","naturalInstinct","naturalInstinct",
      "rendAndTear","rendAndTear","rendAndTear","rendAndTear","rendAndTear",
      "shiftingPower",
      "heartOfTheWild","heartOfTheWild","heartOfTheWild","heartOfTheWild","heartOfTheWild",
      "naturalist","naturalist","naturalist","naturalist","naturalist",
      "brutalImpact","brutalImpact","feralInstinct"
    ],
    notes: [
      "Skips the tank talents Lacerate, Primal Bite and Natural Reaction.",
      "Shredding Attacks makes Shred cheap, so Shred is your main attack. Blood Frenzy gives an extra combo point when a combo-point attack crits.",
      "Predatory Discipline makes Ferocious Bite deal its bonus damage without spending your extra Energy. Shifting Power (needs Predatory Discipline) turns Mana into 40 Energy.",
      "Furor 5/5: going back into Cat Form gives back the Energy you had, plus 10 per second spent out of Bear Form, so shifting out to heal costs you nothing.",
      "Thick Hide also works in Cat Form, and Feral Swiftness gives 30 percent run speed in Cat Form. Both help a lot in PvP and while questing."
    ],
    rotation: [
      "Open from Prowl with Pounce (stun) or Ravage, or just Rake.",
      "Keep Rake on the target. Rend and Tear adds 15 percent damage to everything while it bleeds.",
      "Build combo points with Shred from behind. Use Claw when you can't get behind.",
      "At 5 combo points: Rip if the target will live 10 more seconds or more, otherwise Ferocious Bite.",
      "When Energy runs low, use Shifting Power, and Tiger's Fury before big hits."
    ],
    stats: "Weapon damage first (it sets the damage of every cat attack), then enough Hit, then Agility, then Strength and Crit.",
    sources: [
      { title: "LePrestore Feral guide (cat 0/41/10)", url: "https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-feral-druid-guide-best-builds-rotation-tanking-race-professions/" },
      { title: "Method Feral DPS talents", url: "https://www.method.gg/wow-forever/class-guides/feral-dps-druid/talents" },
      { title: "LFCarry Feral PvE guide", url: "https://lfcarry.com/guides/wow-forever-feral-druid-pve" }
    ]
  },
  balance: {
    title: "Balance (only if you collect a caster gear set)",
    total: "41 / 0 / 10",
    why: "Balance is a real caster spec in Forever. Wrath costs much less mana, Starfire hits about 40 percent harder than in Classic, and the new Eclipse talent makes Wrath speed up your next Starfires. But it needs Spell Power, Intellect and Spell Hit, and your bear gear has none of these. Without a second gear set it does very little damage and runs out of mana.",
    order: [
      "improvedWrath","improvedWrath","improvedWrath","improvedWrath","improvedWrath",
      "genesis","genesis","genesis","genesis","genesis",
      "moonglow","moonglow","moonglow","improvedMoonfire","improvedMoonfire","naturesMajesty","naturesMajesty","naturesReach","naturesReach",
      "naturesSplendor",
      "insectSwarm","improvedStarfire","improvedStarfire","improvedStarfire","improvedStarfire","improvedStarfire",
      "naturesGrace","eclipse","eclipse","eclipse",
      "moonkinForm",
      "moonfury","moonfury","moonfury","moonfury","moonfury",
      "vengeance","vengeance","vengeance","vengeance","vengeance",
      "naturesFocus","naturesFocus","naturesFocus","naturesFocus","naturesFocus",
      "naturalist","naturalist","naturalist","naturalist","naturalist"
    ],
    notes: [
      "Moonkin Form gives 3 percent crit to your group (it can't stack with Leader of the Pack), doubles the Omen of Clarity proc chance and multiplies armor from items by 4.6. You can't cast heals in it, and shifting into it costs 35 percent of your base mana.",
      "Omen of Clarity is baseline in Forever and can proc from spells, but Wrath doesn't use up the free cast.",
      "Insect Swarm moved to the Balance tree. It damages over time and lowers the target's chance to hit.",
      "Mana is the limit. Method keeps Genesis at 2 of 5 and takes Reflection instead if you run out of mana."
    ],
    rotation: [
      "Keep Moonfire and Insect Swarm on targets that live long enough.",
      "Cast Wrath to build Eclipse charges, then spend them on fast Starfires while you can stand still.",
      "Use Moonfire while moving. Entangling Roots works indoors in Forever."
    ],
    stats: "Spell Power first, then enough Spell Hit, then Intellect for mana, then Crit.",
    sources: [
      { title: "LePrestore Balance guide", url: "https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-balance-druid-guide-best-builds-rotation-race-professions-leveling/" },
      { title: "The Forever Era: Balance", url: "https://theforeverera.com/en/classes/druid/balance/" },
      { title: "Method Balance talents", url: "https://www.method.gg/wow-forever/class-guides/balance-druid/talents" }
    ]
  },
  dual_sources: [
    { title: "wow.gg: Dual Specialization", url: "https://wow.gg/guides/wow-forever-dual-specialization" },
    { title: "games.gg: respec cost and dual spec", url: "https://games.gg/world-of-warcraft/guides/wow-forever-respec-cost-how-to-reset-talents-and-get-dual-spec/" },
    { title: "timesaver.gg: dual spec and the Nov 13 action bar fix", url: "https://timesaver.gg/blog/wow-forever-dual-spec-respec-cost" }
  ]
};
