/* Feral PvP guide for WoW: Forever, researched Nov 9 2026 (sources inside). flag: forever = from a Forever source, classic = Classic behaviour that may differ. */
window.PVP = {
 "basics": [
  "Forever does not use normal realms. Each character picks a ruleset: Normal, PvP, RP (roleplay), or Hardcore. Hardcore arrives after launch with no date. The PvP ruleset is the one where open-world player fights happen. You can only group, run dungeons and raid with players on the same ruleset. (Source: guildorder rulesets page, search snippet only.)",
  "Forever launched November 4, 2026. Most guides are beta-era. Check numbers in the in-game tooltip before trusting them.",
  "Honor is the PvP currency for gear. You earn it by killing enemy players, finishing battlegrounds and doing some PvP quests. Holiday weeks give extra Honor and Rank Points.",
  "Honor buys two PvP gear sets: a blue (rare) set and an epic set. The epic upgrade needs the blue piece plus an Emboldened Seal, and seals are locked behind rank.",
  "The Honor holding cap (most Honor you can carry at once) is not settled. Icy Veins reports 15,000 and EpicCarry reports 25,000. Check the number in game.",
  "Rank Points are a separate track from Honor. They come from battlegrounds and PvP quests, and there is a weekly limit. There are 14 ranks, ending at High Warlord (Horde) or Grand Marshal (Alliance). Rank 2 unlocks your PvP trinket (Icy Veins lists 900 Rank Points for that rank, single source).",
  "Rank rewards: Rank 1 tabard; Rank 2 PvP trinket; Rank 3 cloak; Rank 4 necklace; Rank 5 combat potions; Rank 6 tabard; Rank 7 battle standard; Rank 8 epic bracers or epic belt upgrade token; Rank 9 epic boots token; Rank 10 epic gloves token; Rank 11 mount; Rank 12 epic legs or shoulders token; Rank 13 epic chest or helm token; Rank 14 epic weapons. Your progress shows on the Character pane (press C), Player vs. Player tab.",
  "Seasons: each PvP season has its own weekly tasks that give Honor and Rank Points. Three tasks per season also give Legacy Points.",
  "Battleground unlock levels (single source, Icy Veins search snippet, not directly checked): Warsong Gulch at level 10 (10 vs 10), Arathi Basin at level 20 (15 vs 15), Darkspear Islands at level 30 (new in Forever, modeled on The Burning Crusade's Eye of the Storm, 15 vs 15), Alterac Valley at level 51 (40 vs 40). Warcraft Tavern says Alterac Valley is not in the beta. Confirm in game.",
  "Battlegrounds use level brackets, so you mostly fight players close to your own level.",
  "Crowd control rule (general WoW, not confirmed for Forever): when an enemy repeatedly stuns, fears, roots or sheeps you, each repeat lasts a shorter time, and after a few repeats you are briefly immune to that type.",
  "November 4 changes that matter: roots from proc-based talents (Frostbite, Entrapment, Improved Wing Clip, Counterattack, Improved Hamstring) now follow this shorter-repeat rule. Paladin Stoicism (Protection) cuts stun and charm length by 10 or 20 percent. Priest Dark Sacrifice no longer breaks crowd control.",
  "Berserk, the druid talent that cleared fear and gave fear immunity, was removed in the October 30 hotfixes. No Forever source found says how fear is handled for druids now.",
  "Classes: Forever keeps the nine Classic classes (Warrior, Paladin, Hunter, Rogue, Priest, Shaman, Mage, Warlock, Druid). No new class is confirmed. Race and class pairings differ from Classic. Horde Windshaper Skyborne can be Warrior, Hunter, Rogue, Shaman or Druid. Alliance High Order Skyborne can be Warrior, Hunter, Rogue, Mage or Druid. Alliance Human can be Warrior, Paladin, Rogue, Priest, Mage or Warlock. Alliance Dwarf can be Warrior, Paladin, Hunter, Rogue or Priest. Alliance Night Elf can be Warrior, Hunter, Rogue, Priest or Druid. Alliance Gnome can be Warrior, Rogue, Mage or Warlock.",
  "Corpse camping and ganking: no Forever-specific rule was found. Blizzard's general support wording says game staff generally do not step into player vs player disputes. Assume open-world fights are yours to handle. (Classic and retail wording, unverified for Forever.)",
  "Honor leather is the cheap early PvP gear for a druid: agility for Cat, stamina for Bear (LFCarry promotional guide, unverified)."
 ],
 "feral": {
  "summary": "Feral is a melee druid that changes shape in a fight. Cat form deals damage and opens from stealth. Bear form soaks hits and dodges. Travel form is the fast escape form, unlocked at level 30. Shapeshifting breaks roots and sheep (Polymorph), so druids are harder to hold than most classes. Druids cannot slow or silence in Forever, so your control is Bash, Feral Charge and your root spells.",
  "tips": [
   {
    "title": "Shapeshifting breaks roots and sheep",
    "text": "If a mage sheeps you (Polymorph) or anyone roots you (Frost Nova, Entangling Roots), change form immediately. Forever's druid guide says shapeshifting frees you from Polymorph and movement-impairing effects. Stuns and fears are not broken this way (classic behavior).",
    "flag": "forever"
   },
   {
    "title": "Potions and most items work in form",
    "text": "In Forever you can use most potions, including Rage potions, without dropping form (beta notes, Warcraft Tavern). Most Engineering bombs still cannot be thrown in form. The SAF-T and EZ-Thro recipes can be.",
    "flag": "forever"
   },
   {
    "title": "You cannot slow or silence",
    "text": "Druids cannot snare (slow) or silence in Forever. Warcraft Tavern's Nov 4 notes say druids still cannot snare, silence or interrupt. Entangling Roots (learned at 8) and Nature's Grasp (learned at 10) are roots, and Nature's Grasp works in form and indoors.",
    "flag": "forever"
   },
   {
    "title": "Feral Charge closes the gap",
    "text": "Feral Charge is a talent. In Bear form it charges an enemy 8 to 25 yards away, roots it and interrupts its spell for 4 seconds, every 15 seconds. The Cat version leaps you to the target every 30 seconds. Both checked against the Forever spell tooltip.",
    "flag": "forever"
   },
   {
    "title": "Bash is your stun",
    "text": "Bash (learned at 14) is a stun. Use it when a caster starts a big spell or a melee player commits to a burst. Save it; you rarely get a second one fast.",
    "flag": "classic"
   },
   {
    "title": "Stealth openers",
    "text": "From stealth in Cat form: Ravage (learned at 32, now 435 percent weapon damage) and Pounce (learned at 36, stuns from stealth). Shred (learned at 20, now 200 percent) and Claw (now 140 percent) are your normal Cat attacks.",
    "flag": "forever"
   },
   {
    "title": "Barkskin is late",
    "text": "Barkskin (damage cut usable in any form) is learned at 44. Before then you have no damage-cut button, so play safer in fights at 30 to 43.",
    "flag": "forever"
   },
   {
    "title": "Dash and Travel form",
    "text": "Dash (learned at 26) raises your speed in Cat form. Travel form (learned at 30) is the faster run-away form.",
    "flag": "forever"
   },
   {
    "title": "Faerie Fire costs nothing in form",
    "text": "Faerie Fire (learned at 18) costs no resources in Cat or Bear form, with a 6-second cooldown. It also reveals stealthed enemies (classic behavior). Use it on rogues and stealthed druids.",
    "flag": "forever"
   },
   {
    "title": "Track Humanoids shows enemies",
    "text": "Track Humanoids (learned at 32) shows nearby humanoid enemies on your minimap. Useful for finding players in open-world PvP (classic behavior).",
    "flag": "classic"
   },
   {
    "title": "Racials work in form",
    "text": "Racial abilities such as Shadowmeld, War Stomp and Walk on Air can be used in form (beta notes). Your Windshaper Skyborne racial Skysight is a speed boost, and Walk on Air is an instant glide. Use Skysight to run from chasers. (Single source.)",
    "flag": "forever"
   },
   {
    "title": "Feral Swiftness dodge",
    "text": "Feral Swiftness (talent, row 2) gives dodge that works indoors and in every form. Take it for survival in melee fights.",
    "flag": "forever"
   },
   {
    "title": "Cyclone is not in Forever",
    "text": "Cyclone does not appear in the Forever druid ability list. Do not plan around it. Hibernate (learned at 18) works only on beasts such as hunter pets, not on players.",
    "flag": "forever"
   }
  ],
  "by_level": [
   {
    "lv": "20-29",
    "text": "Tools: Bear form (learned 10), Growl and Demoralizing Roar (10), Nature's Grasp root (10), Entangling Roots root (8), Enrage (12), Bash stun (14), Swipe (16), Hibernate for hunter pets (18), Faerie Fire (18), Cat form, Claw, Rip and Shred (20), Prowl stealth (20), Rebirth (20), Rake and Ferocious Bite (24), Dash (26). Use Cat for burst, Bear to survive, Bash to stop a committed melee player, and roots to stop runners. Feral Charge needs talent points. Travel form is not yet available."
   },
   {
    "lv": "30-39",
    "text": "Tools: Travel form (30), Tranquility (30, group heal, not useful 1 vs 1), Track Humanoids (32), Ravage (32), Poised (32, passive: next Energy ability costs 10 less out of combat at full Energy), Frenzied Regeneration (36), Pounce stealth stun (36). Shifting Power (talent) gives 40 Energy at once. Use Travel form to leave a fight and Pounce to open from stealth."
   },
   {
    "lv": "40-49",
    "text": "Tools: Dire Bear Form (40), Innervate (40, restores your own mana, drops form), Hurricane (40, a Balance spell), Barkskin (44, damage cut in any form), Keep Barkskin for the enemy's big burst. Your toolkit is now mostly complete. Plan fights around Bash, Barkskin and Frenzied Regeneration."
   },
   {
    "lv": "50-60",
    "text": "You have every combat ability by 44. From 50 on, the trainer sells stronger ranks (for example Primal Bite and Lacerate), and the rest of your gains are talent points and PvP gear from Honor and Rank Points."
   }
  ],
  "talents": "Talent positions conflict between Warcraft Tavern's Nov 4 notes and its beta notes, and between sources, so check the in-game calculator. Based on the Nov 4 notes: Lacerate is a 1-point talent in row 4 (not all druids get it). Primal Bite is a 1-point talent in row 7 and replaces Berserk, which was removed. Shifting Power is a 1-point talent in row 7 that needs Predatory Discipline. For PvP, keep Feral Swiftness (dodge that works everywhere), Natural Reaction (dodge gives rage) and Feral Charge (Cat version). Your bear tank build is fine for open-world PvP. Swap Lacerate and Rend and Tear, which are PvE threat talents, for points in Feral Charge or Shifting Power if you plan to duel. No Forever druid PvP build is confirmed."
 },
 "classes": [
  {
   "cls": "Warrior",
   "danger": 3,
   "fear": [
    "Charge (learned 4, Arms): rushes you from range and stuns briefly (classic behavior).",
    "Hamstring (learned 8): slows your movement so the warrior can keep up. Forever's Warrior PvP guide calls staying in melee and slowing the core plan.",
    "Intimidating Shout (learned 22, Fury): fears nearby enemies so you cannot act for several seconds (classic behavior).",
    "Intercept (learned 30): quick dash to a target, then they can keep you in melee.",
    "Pummel (learned 38, Fury): interrupts your cast, so you lose a spell."
   ],
   "plan": [
    "Warriors want to stay in melee with you. Stay in Bear form so you take less damage and can dodge, and let them spend their rage.",
    "Watch for Intimidating Shout (fear). You cannot act while feared. Save your Barkskin for the moment they start a big burst.",
    "When a warrior commits to a big hit or a charge, Bash them to stop the combo.",
    "Use Cat form only for short damage bursts when they are slowed or stuck in your Feral Charge range.",
    "If you are behind on health with no Bash left, run out of melee range with Dash and Travel form and reset."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance, learned via talent)",
    "Barkskin (damage cut, learned 44)",
    "Frenzied Regeneration (heals from rage, learned 36)",
    "Dash (speed, learned 26)"
   ],
   "by_level": "Before 4: no Charge. 4-7: Charge. 8-21: Hamstring slows you. 22-29: Intimidating Shout is a real fear threat. 30+: Intercept. 38+: Pummel interrupts you.",
   "forever": "Nov 4 changes: Defensive Stance threat bonus raised to 80 percent (was 30). Slam cooldown is 15 seconds (was 18). Blood Craze no longer activates while sitting. Improved Whirlwind and Reckless Swings are new talents.",
   "flag": "forever"
  },
  {
   "cls": "Paladin",
   "danger": 2,
   "fear": [
    "Hammer of Justice (learned 8): short range stun. Stunned players cannot act (classic duration about 6 seconds).",
    "Repentance (Retribution talent): incapacitates a target. Check its exact rules in game.",
    "Blessing of Protection (learned 10): paladin can make an ally immune to physical damage for a few seconds. Used on the paladin's own team, so watch for it when you attack an ally.",
    "Divine Shield (learned 34): paladin becomes immune to all damage for several seconds (classic duration). They can use it to escape.",
    "Hammer of Wrath (learned 44): ranged finisher on low-health targets."
   ],
   "plan": [
    "Paladins are sturdy but do not chase far. Stay out of Hammer of Justice range, or step in fast and Bash when they commit.",
    "When they use Divine Shield, stop attacking and reset: you cannot damage them while it is up.",
    "Save Barkskin for their burst at 44 or later.",
    "Feral Charge into a paladin who has used their stun, then keep them in melee.",
    "Paladins heal themselves. Save Bash for when they start a big heal at low health, so the heal never lands."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance, talent)",
    "Dash (speed to leave, learned 26)",
    "Barkskin (damage cut, learned 44)"
   ],
   "by_level": "8-9: Hammer of Justice. 10: Blessing of Protection. 24: Turn Undead (undead only, not a threat to you). 34: Divine Shield. 44: Hammer of Wrath.",
   "forever": "Blessing of Light, Blessing of Salvation, Mass Salvation and Revoke removed. Light's Vigil is friendly-only. Righteous Fury at level 10. Judgement of Fury lasts 3 seconds (was 4). Stoicism (Protection tier 5) cuts stun duration 10 or 20 percent. Paladin Divine Precision reduces silence duration.",
   "flag": "forever"
  },
  {
   "cls": "Hunter",
   "danger": 3,
   "fear": [
    "Freezing Trap (learned 20): places a trap that freezes you when you step on it. Single Mobalytics snippet says Forever has no maximum crowd-control duration on players, unverified.",
    "Wing Clip (learned 12): slows and keeps you in place so the hunter can back off.",
    "Concussive Shot (learned 8): slows your movement.",
    "Frost Trap (learned 28): slowing zone.",
    "Disengage (learned 20): hunter jumps back to get distance. Immolation Trap (learned 16) is fire damage on the ground."
   ],
   "plan": [
    "Hunters want distance. Close in fast and stay in melee range. Hunters can't use their bow when you're right next to them.",
    "Do not step on traps you can see. Hunters place them at your feet, so jump or go around.",
    "Use Dash to outrun Concussive Shot or Wing Clip while you close.",
    "Bear form soaks the hunter's shots and lets you keep up.",
    "Hibernate (learned 18) sleeps the hunter's beast pet, not the hunter. Use it on the pet if it is tanking you."
   ],
   "counter_spells": [
    "Feral Charge (closes distance)",
    "Dash (speed, learned 26)",
    "Bash (stun, learned 14)",
    "Barkskin (damage cut, learned 44)",
    "Hibernate (learned 18, beast pets only)",
    "Entangling Roots (learned 8, root)"
   ],
   "by_level": "6-7: Hunter's Mark. 8-11: Concussive Shot slows you. 12-15: Wing Clip. 16-19: Immolation Trap. 20-27: Freezing Trap and Disengage. 28-29: Frost Trap. 30+: Feign Death and more trap types.",
   "forever": "All traps share one 30-second cooldown (Nov 4). Hunter's Mark can no longer be stacked from different ranks. Pets keep Attack Speed when untrained.",
   "flag": "forever"
  },
  {
   "cls": "Rogue",
   "danger": 4,
   "fear": [
    "Sap (learned 10): knocks out an out-of-combat humanoid. Only usable out of combat, so watch for rogues sneaking up on you while you quest.",
    "Gouge (learned 6): stuns you briefly from the front.",
    "Kick (learned 12): interrupts a cast.",
    "Cheap Shot (learned 26): stuns from behind during stealth. The usual rogue opener.",
    "Kidney Shot (learned 30): finishing stun, longer with more combo points. Blind (learned 34): disables you for a short time (classic behavior)."
   ],
   "plan": [
    "Rogues are the hardest melee threat for a druid because stun chains kill you. Keep them in front of you, since Cheap Shot needs you to be behind.",
    "Use Bear form to block hits and dodge. Save Barkskin for their burst.",
    "Bash their Kidney Shot or Cheap Shot start if you can see it coming. A stun breaks their chain.",
    "Do not run in a straight line. Rogues are fast. Use Feral Charge to re-close if they run.",
    "Before 26, rogues have fewer stuns, so it is the safest time to duel one."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Barkskin (damage cut, learned 44)",
    "Feral Charge (closes distance)",
    "Dash (speed, learned 26)",
    "Frenzied Regeneration (learned 36)"
   ],
   "by_level": "6-9: Gouge only. 10-11: Sap. 12-25: Kick. 26-29: Cheap Shot. 30-33: Kidney Shot. 34+: Blind. Rogues become most dangerous from 26 to 34.",
   "forever": "Shank is new at 24 (5 Energy, 10-second cooldown, cannot miss, generates 15 Energy). Setup has a 15/30/45 percent chance after a dodge or full resist. Ghostly Strike lets the next Ambush or Garrote within 7 seconds skip stealth. Quick Getaway adds targets and movement speed after a sap. Death Mark is a new Subtlety talent.",
   "flag": "forever"
  },
  {
   "cls": "Priest",
   "danger": 3,
   "fear": [
    "Psychic Scream (learned 14): fears you so you cannot act for several seconds (classic behavior).",
    "Mind Control (learned 30): takes control of your character for a while. Forever's exact rules are not confirmed.",
    "Shadow Word: Death (learned 32): heavy damage on a low-health target. In Forever, a failed cast costs the priest 30 percent of max health.",
    "Silence (Shadow talent): stops your spell casting for a few seconds.",
    "Mind Blast (learned 10): burst damage on a cooldown."
   ],
   "plan": [
    "Priests are fragile and do little melee damage. Get into Cat form and kill them quickly.",
    "Feral Charge into a priest, then Bash them as they start a big spell.",
    "Do not waste Barkskin on their Mind Blast. Save it for Psychic Scream or Mind Control windows.",
    "If they use Psychic Scream, you cannot act; plan your Barkskin before they start casting.",
    "Priests cannot root you, so you can always chase them."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance)",
    "Dash (speed, learned 26)",
    "Barkskin (damage cut, learned 44)",
    "Frenzied Regeneration (learned 36)"
   ],
   "by_level": "4-9: Shadow Word: Pain and Power Word: Shield. 10-13: Mind Blast. 14-19: Psychic Scream. 18: Dispel Magic. 20-29: Holy Fire and Fear Ward. 30-31: Mind Control. 32+: Shadow Word: Death.",
   "forever": "Dark Sacrifice no longer breaks crowd control. Shadow Word: Death failure costs 30 percent max health (was 10 percent) and no longer damages the caster on a miss. Binding Heal removed and replaced by Holy Binding.",
   "flag": "forever"
  },
  {
   "cls": "Shaman",
   "danger": 3,
   "fear": [
    "Earth Shock (learned 4): quick damage and interrupts your cast.",
    "Frost Shock (learned 20): slows your movement.",
    "Earthbind Totem (learned 6): slows movement of anything near the totem.",
    "Purge (learned 12): removes a buff from you, such as Barkskin.",
    "Grounding Totem (learned 30): absorbs one spell aimed at its allies. Hex is not found in the Forever list, so its status is unclear."
   ],
   "plan": [
    "Stay out of totem ranges. Totems mostly slow you, so step over or around them.",
    "Shamans hit in bursts. Use Bear form when Stormstrike is up and Cat form when they are slowed.",
    "Save Barkskin for a Purge or Earth Shock combo, so it is not wasted.",
    "Use Dash to leave a slow, and Travel form at 30+ to run away.",
    "Feral Charge to close, then Bash their cast."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance)",
    "Dash (speed, learned 26)",
    "Travel form (learned 30)",
    "Barkskin (damage cut, learned 44)"
   ],
   "by_level": "4-5: Earth Shock. 6-9: Earthbind Totem. 12-19: Purge. 20-29: Frost Shock. 30+: Grounding Totem.",
   "forever": "Stormstrike does 150 percent weapon damage (was 100) with a 6-second cooldown (was 8). Riptide no longer has an initial heal and has a 12-second cooldown (was 6). Totemic Projection renamed Totemic Call, 30-second cooldown.",
   "flag": "forever"
  },
  {
   "cls": "Mage",
   "danger": 4,
   "fear": [
    "Polymorph (learned 8): turns you into a sheep for several seconds. Shapeshift out of it at once, which Forever allows.",
    "Frost Nova (learned 10): roots you in place. Shapeshifting breaks it.",
    "Blink (learned 20): instant escape, so the mage can run from you.",
    "Counterspell (learned 24): interrupts your cast and locks a school of magic for several seconds.",
    "Cone of Cold (learned 26): damage and slow in front of the mage. Ice Block (Frost talent): immune to damage for several seconds, with a 5-minute cooldown per Kami Labs (unverified)."
   ],
   "plan": [
    "Mages are easy to kill but hard to catch. Shapeshift as soon as you are sheeped or rooted.",
    "Close fast with Feral Charge or Dash. Blink is their escape, so Bash them while they are still casting.",
    "When they use Ice Block, stop attacking and reset until it is down.",
    "Do not chase a mage around a corner while they still have Ice Barrier.",
    "Watch for Counterspell when you cast a big spell; time your casts."
   ],
   "counter_spells": [
    "Travel form (learned 30, for escape)",
    "Cat Form (chase)",
    "Dash (speed)",
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance)",
    "Barkskin (damage cut, learned 44)"
   ],
   "by_level": "6: Fire Blast. 8: Polymorph. 10: Frost Nova. 20: Blink. 24: Counterspell. 26: Cone of Cold. Mage control is strongest from 10 to 19 (Frost Nova plus Polymorph).",
   "forever": "Frost Blast removed. Frost Ward now fully negates a spell's damage without being used up. Ice Barrier grants 15 percent Frost damage for 1 minute. Ice Lance and Fire Blast share an 8-second cooldown (Nov 4). Piercing Ice removed.",
   "flag": "forever"
  },
  {
   "cls": "Warlock",
   "danger": 5,
   "fear": [
    "Fear (learned 8): you run around and cannot act for several seconds. Shapeshifting does not clear it (classic behavior; no Forever source says otherwise).",
    "Curse of Tongues (learned 26): slows your casting.",
    "Howl of Terror (learned 40): instant area fear that can hit several players at once.",
    "Death Coil (learned 42): short horror effect, and it heals the warlock.",
    "Spell Lock (learned 36, Felhunter pet): interrupts your cast. Drain Life (learned 14) heals the warlock while it damages you."
   ],
   "plan": [
    "Warlocks are the most annoying matchup. Fear chains stop your attacks, so kill them early before Howl of Terror (40).",
    "Use Barkskin before the fear starts. You cannot cast while feared.",
    "Feral Charge into them when they start a fear, then Bash them mid-cast.",
    "Bear form lets you survive their damage-over-time spells while you wait for the fear to end.",
    "Death Coil will often be used to escape, so do not chase it into a second fear."
   ],
   "counter_spells": [
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance)",
    "Barkskin (pre-cast before a fear)",
    "Frenzied Regeneration (learned 36)",
    "Dash (speed, learned 26)"
   ],
   "by_level": "4-7: Corruption. 8-25: Fear (the big threat). 14: Drain Life. 26: Curse of Tongues. 28: Banish (demons only). 30: Summon Felhunter. 36: Spell Lock. 40: Howl of Terror. 42: Death Coil.",
   "forever": "Warlock pets gain 2 Health per point of Master's Stamina (was 7.5). Drain Soul's Soul Shard chance on damage is greatly reduced. Spellstones only boost Shadow damage.",
   "flag": "forever"
  },
  {
   "cls": "Druid",
   "danger": 3,
   "fear": [
    "Entangling Roots (learned 8): root. Shapeshifting breaks it.",
    "Nature's Grasp (learned 10): root, works in form and indoors. Shapeshifting breaks it.",
    "Bash (learned 14): stun, the main druid stun. Use it to interrupt a casting druid.",
    "Ravage (learned 32) and Pounce (learned 36): stealth openers. Watch for a stealthed druid next to you.",
    "Faerie Fire (learned 18): reveals stealthed enemies, so a stealthed druid cannot hide from it."
   ],
   "plan": [
    "Mirror match: both sides can shapeshift to break roots, so the first stun usually wins.",
    "Use Faerie Fire on a stealthed druid to reveal them before they open.",
    "Bash their Ravage or Pounce start, or your own Bash after they open.",
    "Bear vs bear is slow. Use Feral Charge to re-close, and Frenzied Regeneration to outlast their damage.",
    "Barkskin only when you are at low health and they have burst."
   ],
   "counter_spells": [
    "Faerie Fire (reveals stealth, learned 18)",
    "Bash (stun, learned 14)",
    "Feral Charge (closes distance)",
    "Barkskin (damage cut, learned 44)",
    "Dash (speed, learned 26)"
   ],
   "by_level": "8: roots. 10: Nature's Grasp. 14: Bash. 18: Faerie Fire. 26: Dash. 32: Ravage. 36: Pounce.",
   "forever": "Druids cannot snare or silence. Faerie Fire costs no resources in Cat or Bear form, with a 6-second cooldown. Shadowmeld and War Stomp work in form.",
   "flag": "forever"
  }
 ],
 "alliance_races": [
  {
   "race": "Human (Alliance)",
   "racials": "Every Man for Himself removes stun effects (source unclear, likely classic wording). Perception lets you detect stealthed enemies for 20 seconds. Forever changes: Ruthless gives 1 percent crit (was 2) and Human Spirit gives 10 percent Spirit (was 5).",
   "flag": "classic"
  },
  {
   "race": "Dwarf (Alliance)",
   "racials": "Stoneform gives immunity to poisons, bleeds and diseases, and reduces physical damage for about 8 seconds (one source says it is now a flat 10 percent reduction). Forever changes: Earth Fury removed, Artisan's Precision added (1 percent hit with spells and attacks).",
   "flag": "classic"
  },
  {
   "race": "Gnome (Alliance)",
   "racials": "Escape Artist breaks roots and snares, and makes you immune to them for 5 seconds (sources agree on the 5 seconds, one notes a 2-minute cooldown).",
   "flag": "classic"
  },
  {
   "race": "Night Elf (Alliance)",
   "racials": "Shadowmeld works in combat and can make an enemy drop you as a target mid-cast. It does not break combat like Rogue Vanish (Warcraft Tavern druid guide). Elune's Light gives extra crit for 15 seconds. Quickness raises dodge and speed.",
   "flag": "forever"
  },
  {
   "race": "High Order Skyborne (Alliance, new in Forever)",
   "racials": "Read Ley Line is a health and mana regeneration cooldown. Walk on Air is an instant glide (90-second cooldown per one guide). Elemental Insight and Wind Blessed (haste, 2 percent after Nov 4) are passives. Single-source racial details.",
   "flag": "forever"
  }
 ],
 "general": [
  {
   "title": "Break line of sight to escape casters",
   "text": "Put a wall, pillar or corner between you and a caster who is casting at you. Casters cannot hit you without seeing you, so the cast fails. Use this against mages, warlocks and priests.",
   "flag": "classic"
  },
  {
   "title": "Your PvP trinket",
   "text": "Your PvP trinket is the Rank 2 reward (Icy Veins, Blizzard's progression article). In Classic it was Insignia of the Horde, a level 60 trinket with a 5-minute cooldown. Forever's version may differ, so read the in-game tooltip for cooldown and effect.",
   "flag": "forever"
  },
  {
   "title": "Engineering in form",
   "text": "Most Engineering bombs cannot be thrown in form. The SAF-T and EZ-Thro recipes can be used in form, so they are the Feral choice.",
   "flag": "forever"
  },
  {
   "title": "Keybinds",
   "text": "Bind each shapeshift form to its own key, plus your stun (Bash) and Feral Charge. In a fight you should never hunt through menus. Set Barkskin and your healing to keys you can press without looking.",
   "flag": "classic"
  },
  {
   "title": "Focus target",
   "text": "Set a focus target (a second target you keep in view, usually the healer) so you can stun or interrupt them without changing your main target. Standard WoW practice; check your interface options for the focus binding.",
   "flag": "classic"
  },
  {
   "title": "Addons",
   "text": "No Forever-specific PvP addon was confirmed. Guides mention three general helps: a flag tracker (shows the Warsong Gulch flag carrier's health), a diminishing-returns tracker (shows which stuns are on cooldown for a target) and nameplates (enemy health bars above their heads).",
   "flag": "classic"
  },
  {
   "title": "Escape plan",
   "text": "Run out of range, break line of sight, and shapeshift out of roots and sheep. Use Dash in Cat form (26+) or Travel form (30+). Use Barkskin if you cannot escape. Shapeshift to break stuns that allow it.",
   "flag": "forever"
  },
  {
   "title": "World PvP etiquette",
   "text": "The PvP ruleset is built for open-world fights. Blizzard's Forever notes do not give an official ganking or corpse-camping rule. Expect players to chase you, and do not fight a player much higher level than you while outnumbered.",
   "flag": "classic"
  },
  {
   "title": "Battleground role for Feral",
   "text": "Feral's role is Cat damage on cloth targets, Bear walls when needed, and Travel form to leave a point. Druids do not heal 40-player raids. Healing and flag-room support belong to Restoration. (LFCarry promotional guide.)",
   "flag": "forever"
  },
  {
   "title": "Warsong Gulch flag carrier",
   "text": "Carrying the flag does not stop shapeshifting. Use Travel form at 30+ or Dash in Cat form to run the flag home, and drop Bear form when you need speed. Before 30, Dash in Cat form is your fastest run.",
   "flag": "classic"
  }
 ],
 "sources": [
  {
   "title": "Warcraft Tavern: PvP Progression in WoW Forever (ranks, honor, seasons)",
   "url": "https://www.warcrafttavern.com/forever/news/pvp-progression-in-wow-forever-ranks-honor-seasons/"
  },
  {
   "title": "Warcraft Tavern: WoW Forever Pre-Launch Class Changes and Bug Fixes (Nov 4)",
   "url": "https://www.warcrafttavern.com/forever/news/wow-forever-pre-launch-class-changes-bug-fixes/"
  },
  {
   "title": "Warcraft Tavern: Powershifting is Back (Hunter and Druid Deep Dive)",
   "url": "https://www.warcrafttavern.com/forever/news/powershifting-is-back-sort-of-hunter-druid-deep-dive-for-wow-forever/"
  },
  {
   "title": "Warcraft Tavern: Feral Druid Guide",
   "url": "https://www.warcrafttavern.com/forever/guides/feral-druid/"
  },
  {
   "title": "Warcraft Tavern: Druid Guide",
   "url": "https://www.warcrafttavern.com/forever/guides/druid/"
  },
  {
   "title": "Warcraft Wiki: Druid abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Druid_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Mage abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Mage_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Warlock abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Warlock_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Hunter abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Hunter_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Warrior abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Warrior_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Rogue abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Rogue_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Priest abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Priest_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Shaman abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Shaman_abilities_(Forever)"
  },
  {
   "title": "Warcraft Wiki: Paladin abilities (Forever)",
   "url": "https://warcraft.wiki.gg/wiki/Paladin_abilities_(Forever)"
  },
  {
   "title": "GuildOrder: WoW Forever races and classes",
   "url": "https://guildorder.com/games/wow_forever/racials"
  },
  {
   "title": "GuildOrder: Forever rulesets (search snippet only)",
   "url": "https://guildorder.com/games/wow_forever/wiki/rulesets-and-the-realmless-world"
  },
  {
   "title": "LFCarry: WoW Forever Feral Druid PvP (promotional, use with care)",
   "url": "https://lfcarry.com/guides/wow-forever-feral-druid-pvp"
  },
  {
   "title": "Icy Veins: WoW Forever PvP overview (search snippet only, page blocked)",
   "url": "https://www.icy-veins.com/wow-forever/pvp-overview"
  },
  {
   "title": "Icy Veins: WoW Forever PvP rank system (search snippet only, page blocked)",
   "url": "https://www.icy-veins.com/wow-forever/pvp-rank-system"
  },
  {
   "title": "Mobalytics: WoW Forever Warrior PvP guide (search snippet only)",
   "url": "https://mobalytics.gg/wow-forever/classes/warrior-pvp-guide"
  },
  {
   "title": "Mobalytics: WoW Forever Survival Hunter PvP guide (search snippet only)",
   "url": "https://mobalytics.gg/wow-forever/classes/survival-hunter-pvp-guide"
  },
  {
   "title": "Kami Labs: WoW Forever mage spells and talents modified (search snippet only)",
   "url": "https://kami-labs.fr/en/wow-forever/mage-wow-forever-sorts-et-talents-modifies/"
  }
 ]
};
window.PVP_LINKS = {"Barkskin": "spell=22812", "Bash": "spell=5211", "Blessing of Protection": "spell=1022", "Blind": "spell=2094", "Blink": "spell=1953", "Charge": "spell=11578", "Cheap Shot": "spell=1833", "Concussive Shot": "spell=5116", "Cone of Cold": "spell=10161", "Counterspell": "spell=2139", "Curse of Tongues": "spell=11719", "Dash": "spell=23099", "Death Coil": "spell=17926", "Disengage": "spell=14273", "Divine Shield": "spell=642", "Drain Life": "spell=689", "Earth Shock": "spell=10414", "Earthbind Totem": "spell=2484", "Elune's Light": "spell=1259799", "Entangling Roots": "spell=9853", "Escape Artist": "spell=20589", "Faerie Fire": "spell=9907", "Fear": "spell=5782", "Feral Charge": "spell=1238122", "Feral Swiftness": "spell=17002", "Freezing Trap": "spell=27753", "Frenzied Regeneration": "spell=22842", "Frost Nova": "spell=122", "Frost Shock": "spell=10473", "Frost Trap": "spell=13809", "Gouge": "spell=1776", "Grounding Totem": "spell=8177", "Hammer of Justice": "spell=853", "Hammer of Wrath": "spell=24239", "Hamstring": "spell=1715", "Hibernate": "spell=18658", "Howl of Terror": "spell=17928", "Ice Barrier": "spell=11426", "Ice Block": "spell=11958", "Immolation Trap": "spell=14305", "Insignia of the Horde": "item=18834", "Intercept": "spell=20617", "Intimidating Shout": "spell=5246", "Kick": "spell=1766", "Kidney Shot": "spell=8643", "Mind Blast": "spell=10947", "Mind Control": "spell=10911", "Natural Reaction": "spell=417051", "Nature's Grasp": "spell=17329", "Perception": "spell=20600", "Polymorph": "spell=118", "Pounce": "spell=9827", "Psychic Scream": "spell=8122", "Pummel": "spell=6552", "Purge": "spell=370", "Quickness": "spell=20582", "Ravage": "spell=9867", "Rend and Tear": "spell=1223246", "Repentance": "spell=20066", "Sap": "spell=6770", "Shadow Word: Death": "spell=1309636", "Shadowmeld": "spell=20580", "Shifting Power": "spell=1322605", "Silence": "spell=15487", "Skysight": "spell=1259686", "Spell Lock": "spell=19647", "Stoneform": "spell=20594", "Stormstrike": "spell=17364", "Track Humanoids": "spell=5225", "Travel form": "spell=783", "Vanish": "spell=1856", "Walk on Air": "spell=1259416", "Wing Clip": "spell=14268"};
