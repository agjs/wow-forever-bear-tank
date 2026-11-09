/* Bear Tank Codex — renderer. Content lives in data.js. */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("btc:" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("btc:" + k, JSON.stringify(v)); } catch {} },
  };
  const ICON = n => `https://wow.zamimg.com/images/wow/icons/large/${n}.jpg`;
  const img = (n, cls = "ico", alt = "") => `<img class="${cls}" src="${ICON(n)}" alt="${esc(alt)}" loading="lazy">`;
  const spellLink = (id, txt) => `<a href="https://www.wowhead.com/forever/spell=${id}" target="_blank" rel="noopener">${txt}</a>`;
  const itemLink = (id, n, f) => id ? `<a href="https://www.wowhead.com/${f === "c" ? "classic" : "forever"}/item=${id}" target="_blank" rel="noopener">${esc(n)}</a>` : esc(n);

  /* Auto-link spell and item names in text to Wowhead (tooltips on hover). */
  const LINKS = {};
  const EXTRA_SPELLS = { "Mark of the Wild": 1126, Thorns: 467, "Bear Form": 5487, "Cat Form": 768, "Travel Form": 783, "Aquatic Form": 1066, "Remove Curse": 2782,
    "Abolish Poison": 2893, "Cure Poison": 8946, "Omen of Clarity": 16864, Claw: 1082, Shred: 5221, Rake: 1822, "Tiger's Fury": 5217, Dash: 1850, Bash: 5211,
    "Healing Touch": 5185, Rejuvenation: 774, Regrowth: 8936, Moonfire: 8921, Hibernate: 2637, "Entangling Roots": 339, "Teleport: Moonglade": 18960,
    Prowl: 5215, "Ferocious Bite": 22568, Rip: 1079, "Soothe Animal": 2908, Wrath: 5176, Tranquility: 740, "Feline Grace": 20719, Rebirth: 20484 };
  const EXTRA_ITEMS = { "Wolfshead Helm": 8345, "Enraged Idol": 272428, "Idol of Shifting Tides": 263411, "Rugged Armor Kit": 15564,
    "Greater Stoneshield Potion": 13455, "Elixir of the Mongoose": 13452 };
  function buildLinks() {
    Object.entries(EXTRA_SPELLS).forEach(([n, id]) => LINKS[n] = "spell=" + id);
    Object.entries(SP).forEach(([n, v]) => LINKS[n] = "spell=" + v[1]);
    Object.values(window.TREE || {}).flat().forEach(t => { if (t.max === 1 || ["Lacerate", "Primal Bite"].includes(t.name) || TALENTS[t.k]) LINKS[t.name] = LINKS[t.name] || "spell=" + t.spell; });
    Object.entries(EXTRA_ITEMS).forEach(([n, id]) => LINKS[n] = "item=" + id);
    CHECKPOINTS.forEach(c => c.items.forEach(([n, id, , f]) => { if (id && f !== "c" && !/set$/i.test(n)) LINKS[n] = "item=" + id; }));
    const names = Object.keys(LINKS).sort((a, b) => b.length - a.length).map(n => esc(n).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    LINKS._re = new RegExp("(?<![\\w>])(" + names.join("|") + ")(?![\\w<])", "g");
  }
  const rich = s => { const t = esc(s); if (!LINKS._re) return t; const seen = new Set();
    return t.replace(LINKS._re, m => { if (seen.has(m)) return m; seen.add(m); const n = m.replace(/&#39;/g, "'").replace(/&amp;/g, "&");
      return LINKS[n] ? `<a class="wh" href="https://www.wowhead.com/forever/${LINKS[n]}" target="_blank" rel="noopener">${m}</a>` : m; }); };

  /* Plain-language one-liners + icons per talent */
  const T_UI = {
    ferocity: ["ability_hunter_pet_hyena", "Maul, Swipe and Primal Bite cost 1 less rage per rank"],
    furor: ["spell_holy_blessingofstamina", "20% chance per rank: +10 rage when you shift into bear"],
    feralSwiftness: ["spell_nature_spiritwolf", "4% more dodge, and Cat Form runs much faster"],
    feralInstinct: ["ability_ambush", "Swipe hits 30% harder (more threat on groups)"],
    brutalImpact: ["ability_druid_bash", "Longer Bash stun (mostly for PvP)"],
    thickHide: ["inv_misc_pelt_bear_03", "More armor in bear form"],
    feralCharge: ["ability_hunter_pet_bear", "Jump at an enemy in bear form and interrupt its spell"],
    shreddingAttacks: ["spell_shadow_vampiricaura", "Cheaper Shred (Cat Form only)"],
    savageFury: ["ability_druid_ravage", "Maul and Swipe deal 10% more damage"],
    sharpenedClaws: ["inv_misc_monsterclaw_04", "6% more critical hits in bear and cat form"],
    predatoryStrikes: ["ability_hunter_pet_cat", "More attack power in forms (90 at level 60)"],
    lacerate: ["ability_druid_lacerate", "New button: a bleed that stacks up to 5 times and makes lots of threat"],
    predatoryDiscipline: ["spell_druid_savagery", "Changes a Cat Form finishing move"],
    bloodFrenzy: ["ability_ghoulfrenzy", "Your critical hits give you extra rage"],
    leaderOfThePack: ["spell_nature_unyeildingstamina", "Your whole group gets 3% more critical hits"],
    naturalInstinct: ["ability_druid_predatoryinstincts", "Crits hit harder (2.0× → 2.2×)"],
    rendAndTear: ["ability_druid_primalagression", "+15% damage on bleeding targets"],
    naturalReaction: ["ability_bullrush", "+5% dodge, rage when you dodge"],
    primalBite: ["ability_racial_cannibalize", "NEW BUTTON: big threat bite, 6s cooldown"],
    shiftingPower: ["spell_druid_displacement", "Cat energy button"],
    naturesFocus: ["spell_nature_healingwavegreater", "Caster pushback (skip)"],
    heartOfTheWild: ["spell_holy_blessingofagility", "+20% Stamina in bear"],
    naturalist: ["spell_nature_healingtouch", "+10% to ALL your damage"],
    reflection: ["spell_frost_windwalkon", "Mana regen while casting"],
    naturalShapeshifter: ["spell_nature_wispsplode", "Shifting forms costs less mana"],
    bloom: ["inv_misc_herb_felblossom", "Extra healing when your heal-over-time spells end"],
    genesis: ["spell_arcane_arcane03", "Bleeds 10% stronger (mostly taken to unlock the next row)"],
    naturesMajesty: ["inv_staff_01", "4% more critical hits"],
    naturesReach: ["spell_nature_naturetouchgrow", "4% more chance to hit (you need 8% total)"],
  };
  const SP = { // ability icons + ids
    Lacerate: ["ability_druid_lacerate", 1235827], "Primal Bite": ["ability_racial_cannibalize", 1238070], Maul: ["ability_druid_maul", 9881],
    Swipe: ["inv_misc_monsterclaw_03", 9908], "Demoralizing Roar": ["ability_druid_demoralizingroar", 9898], "Faerie Fire": ["spell_nature_faeriefire", 9907],
    Enrage: ["ability_druid_enrage", 5229], Barkskin: ["spell_nature_stoneclawtotem", 22812], "Frenzied Regeneration": ["ability_bullrush", 22842],
    "Challenging Roar": ["ability_druid_challangingroar", 5209], Growl: ["ability_physical_taunt", 6795], "Feral Charge": ["ability_hunter_pet_bear", 16979],
    Claw: ["ability_druid_rake", 1082], Rake: ["ability_druid_disembowel", 1822], Shred: ["spell_shadow_vampiricaura", 5221], Rip: ["ability_ghoulfrenzy", 1079],
    "Ferocious Bite": ["ability_druid_ferociousbite", 22568], Prowl: ["ability_ambush", 5215], Ravage: ["ability_druid_ravage", 6785], "Tiger's Fury": ["ability_mount_jungletiger", 5217],
    "Dire Bear Form": ["ability_racial_bearform", 9634], Innervate: ["spell_nature_lightning", 29166], Rebirth: ["spell_nature_reincarnation", 20748],
  };
  /* Rotation with unlock requirements: lvl = trained level, t = talent key */
  const ROT = {
    single: [
      ["Lacerate", "Once it has 5 stacks, renew it when 3 seconds or less are left. Don't let it run out.", { t: "lacerate" }],
      ["Faerie Fire", "If the enemy doesn't have it yet. It lowers their armor.", { lvl: 18 }],
      ["Primal Bite", "Every time it's ready. It makes the most threat of anything you have.", { t: "primalBite" }],
      ["Demoralizing Roar", "If the enemy doesn't have it yet. It makes them hit you softer.", { lvl: 10 }],
      ["Lacerate", "When nothing above is needed, use it to build up to 5 stacks.", { t: "lacerate" }],
      ["Swipe", "When nothing above is needed (until you get Lacerate).", { lvl: 16, before: "lacerate" }],
      ["Maul", "Doesn't use up a turn, so press it on top of everything else when you have more than 35 rage. Skip it if Primal Bite is about to be ready and you'd be short on rage for it.", { lvl: 10 }],
    ],
    cleave: [
      ["Faerie Fire", "On your main target.", { lvl: 18 }], ["Primal Bite", "Every time it's ready.", { t: "primalBite" }],
      ["Demoralizing Roar", "Keep it on the enemies.", { lvl: 10 }], ["Lacerate", "If your main target isn't bleeding. Your other attacks hit harder against bleeding enemies.", { t: "lacerate" }],
      ["Swipe", "When nothing above is needed.", { lvl: 16 }], ["Maul", "On top of everything else, when you have more than 35 rage.", { lvl: 10 }],
    ],
    aoe: [
      ["Faerie Fire", "On the main target.", { lvl: 18 }], ["Demoralizing Roar", "Hits every enemy around you.", { lvl: 10 }],
      ["Swipe", "Press it over and over. It hits 3 enemies at once.", { lvl: 16 }], ["Maul", "On top of everything else, when you have more than 35 rage.", { lvl: 10 }],
      ["Challenging Roar", "Emergency only: forces every enemy around you to attack you for 6 seconds. Usable once every 10 minutes.", { lvl: 28 }],
    ],
    cat: [
      ["Prowl", "Before the fight. Prowl is Cat Form's stealth: enemies can't see you, but you move slower. Sneak up behind the enemy.", { lvl: 20 }],
      ["Ravage", "Your first hit from Prowl, standing behind the enemy. A very big hit.", { lvl: 32 }],
      ["Shred", "Your first hit from Prowl before level 32. Also use it any time you're standing behind the enemy, or when Omen of Clarity makes your next ability free.", { lvl: 20 }],
      ["Feral Charge", "In Cat Form, Feral Charge leaps you behind the enemy from 8 to 25 yards away. Follow it with Shred. Usable every 30 seconds.", { t: "feralCharge" }],
      ["Tiger's Fury", "At the start of the fight: 15% more damage for 6 seconds. Usable every 30 seconds.", { lvl: 24 }],
      ["Rake", "If the enemy isn't bleeding from Rake yet. It hits, then keeps hurting over 9 seconds.", { lvl: 24 }],
      ["Ferocious Bite", "At 5 combo points, to finish off the enemy. Most questing enemies die quickly, so this is usually your best finisher.", { lvl: 24 }],
      ["Rip", "At 4 or 5 combo points on an enemy with a lot of health (it hurts over 12 seconds). Before level 32 it's your only finisher, so use it at 3 or more combo points.", { lvl: 20 }],
      ["Claw", "When nothing above applies. Builds 1 combo point. Your main button when you're facing the enemy.", { lvl: 20 }],
    ],
  };
  const DEFS = [
    ["Barkskin", "You take 20% less physical damage for 15 seconds. Ready again after 1 minute. In Forever it works in bear form, so use it often.", 44],
    ["Frenzied Regeneration", "Turns your rage into health for 10 seconds, up to a full heal. Press it before you're low, not when you're almost dead. Ready again after 3 minutes.", 36],
    ["Challenging Roar", "Forces every enemy around you to attack you for 6 seconds. Use it when enemies run off to hit someone else.", 28],
    ["Enrage", "Gives you rage right away, but you take a bit more damage for 10 seconds. Use it before a fight or when you're out of rage.", 12],
  ];
  const MILESTONES = [
    [16, "Swipe", "inv_misc_monsterclaw_03", "Hold several enemies at once"], [20, "Cat Form + Feral Charge", "ability_hunter_pet_bear", "Questing gets much faster"],
    [25, "Lacerate", "ability_druid_lacerate", "Your main single-target button"], [30, "Leader of the Pack + Travel Form", "spell_nature_unyeildingstamina", "Crit bonus for your group, faster travel"],
    [36, "Frenzied Regeneration", "ability_bullrush", "Emergency self-heal"], [40, "Dire Bear Form, Primal Bite and a mount", "ability_racial_cannibalize", "Your biggest upgrade on the way to 60"],
    [44, "Barkskin", "spell_nature_stoneclawtotem", "Take 20% less damage on demand"], [46, "Heart of the Wild done", "spell_holy_blessingofagility", "20% more Stamina in bear"],
    [51, "Naturalist done", "spell_nature_healingtouch", "10% more damage on everything"], [60, "Build complete", "ability_racial_bearform", "Start gearing for raids"],
  ];
  const CHIPS = {
    Maul: f => f[0] === "Maul", Swipe: f => f[0] === "Swipe", Lacerate: f => f[0] === "Lacerate", "Primal Bite": f => f[0] === "Primal Bite",
    "Rage": f => f[1] === "cost" || f[0] === "Rage gen", Crit: f => f[0] === "Crit" || f[0] === "Crit dmg", Hit: f => f[0] === "Hit",
    Dodge: f => f[0] === "Dodge", Armor: f => f[0] === "Armor", Stamina: f => f[0] === "Stamina", "Attack power": f => f[0] === "AP",
  };

  const state = { level: store.get("level", 13), done: store.get("done", {}), tab: store.get("tab", "today"), chip: null, sel: null, rot: "single", prof: store.get("prof", "lw") };
  const ptsAt = L => Math.max(0, Math.min(51, L - 9));
  const ranksAt = n => { const r = {}; ORDER.slice(0, n).forEach(k => r[k] = (r[k] || 0) + 1); return r; };
  const FINAL = ranksAt(51);
  const range = c => { const p = c.lv.split("–").map(Number); return [p[0], p[1] ?? p[0]]; };
  const curCp = L => { const i = CHECKPOINTS.findIndex(c => L <= range(c)[1]); return i < 0 ? CHECKPOINTS.length - 1 : i; };
  const pickAt = L => L >= 10 && L <= 60 ? ORDER[L - 10] : null;
  const rankAt = L => ORDER.slice(0, L - 9).filter(x => x === ORDER[L - 10]).length;
  const unlocked = (req, L, r) => (!req.lvl || L >= req.lvl) && (!req.t || r[req.t]) && (!req.before || !r[req.before]);

  /* ---------------- TRAINER ---------------- */
  const TR = window.TRAINER || [], TI = window.TRAINER_INFO || {};
  const money = c => { const g = Math.floor(c / 10000), s = Math.floor(c % 10000 / 100), k = c % 100; return [g && g + "g", s && s + "s", (k || !c) && k + "c"].filter(Boolean).join(" "); };
  const CAT_L = { bear: "Bear", cat: "Cat", heal: "Self-heal", util: "Utility", skip: "Optional" };
  const trAt = L => TR.filter(t => t[0] === L);
  const trName = t => `${spellLink(t[3], img((TI[t[1]] || [])[1] || "inv_misc_questionmark", "ico", t[1]) + " " + esc(t[1]))}${t[2] ? ` <span class="rk">rank ${t[2]}</span>` : ""}`;
  const trRow = t => { const [c, , d] = TI[t[1]] || ["util", "", ""]; return `<li class="tr-${c}"><div class="tr-n">${trName(t)}<span class="tag tc-${c}">${CAT_L[c]}</span>${t[5] ? `<span class="tag q">Quest</span>` : ""}</div><span class="tr-d">${t[2] > 1 ? "Stronger rank of a spell you already have. " : ""}${esc(d)}</span><span class="tr-c">${t[5] ? "class quest" : money(t[4])}</span></li>`; };
  const trCost = a => a.filter(t => (TI[t[1]] || [])[0] !== "skip" && !t[5]).reduce((x, t) => x + t[4], 0);
  function trainerCard(L) {
    const now = trAt(L), nxt = TR.find(t => t[0] > L), nL = nxt ? nxt[0] : null;
    const list = a => { const need = a.filter(t => (TI[t[1]] || [])[0] !== "skip"), opt = a.filter(t => (TI[t[1]] || [])[0] === "skip");
      return `${need.length ? `<div class="tr-sub">Learn these (${need.length})</div><ul class="trl">${need.map(trRow).join("")}</ul>` : ""}${opt.length ? `<div class="tr-sub">Optional caster spells (${opt.length}): a bear rarely uses them, so skip them if gold is tight</div><ul class="trl">${opt.map(trRow).join("")}</ul>` : ""}`; };
    return `<div class="card"><div class="label">Your trainer at level ${L}</div>${now.length
      ? `<p class="tr-go"><b>Go to your trainer.</b> The trainer has ${now.length} new spell${now.length > 1 ? "s" : ""} at level ${L}${(() => { const o = now.filter(t => (TI[t[1]] || [])[0] === "skip").length; return o ? `: ${now.length - o} to learn and ${o} optional` : ""; })()}. The ones to learn cost <b>${money(trCost(now))}</b>.</p>${list(now)}`
      : `<p class="tr-go"><b>Nothing new at level ${L}.</b> Druid trainers only add spells on even levels. Don't go yet.</p>${nL ? `<div class="label" style="margin-top:16px">Next visit: level ${nL}</div>${list(trAt(nL))}` : ""}`}</div>`;
  }
  function renderTrainer() {
    const L = state.level, lv = [...new Set(TR.map(t => t[0]))].filter(l => l >= 10);
    $("#trainer-list").innerHTML = lv.map(l => { const a = trAt(l), need = a.filter(t => (TI[t[1]] || [])[0] !== "skip"), opt = a.filter(t => (TI[t[1]] || [])[0] === "skip");
      return `<div class="tr-lv${l === L ? " now" : l < L ? " past" : ""}" id="tr-${l}"><div class="tr-h"><b>Level ${l}</b><span>${money(trCost(a))} for the ones you need${l === L ? ` · <em>your level</em>` : ""}</span></div>${need.length ? `<div class="tr-sub">Learn these (${need.length})</div><ul class="trl">${need.map(trRow).join("")}</ul>` : ""}${opt.length ? `<div class="tr-sub">Optional caster spells (${opt.length})</div><ul class="trl">${opt.map(trRow).join("")}</ul>` : ""}</div>`; }).join("");
  }

  /* ---------------- PROFESSIONS ---------------- */
  const PF = () => window.PROF || {};
  const fl = f => f === "forever" ? `<span class="tag v">Forever</span>` : f === "classic" ? `<span class="tag c">Classic</span>` : "";
  const pItem = (n, id, f) => id ? itemLink(id, n, f === "classic" ? "c" : "") : esc(n);
  const lvIn = (lv, L) => { const m = String(lv || "").match(/\d+/g); if (!m) return false; const a = +m[0], b = +(m[1] || m[0]); return L >= a && L <= b; };
  const PTABS = [["lw", "Leatherworking"], ["farm", "Leather farming"], ["cook", "Cooking"], ["fish", "Fishing"]];
  function skillBox(k) { const v = store.get("skill:" + k, k === "lw" ? 150 : 1); return `<label class="skillbox">Your skill <input type="number" min="1" max="300" value="${v}" data-skill="${k}"></label>`; }
  function stepsHtml(k, steps, render) { const sk = store.get("skill:" + k, k === "lw" ? 150 : 1);
    return `<ol class="psteps">${steps.map(st => { const cur = sk >= st.from && sk < st.to, past = sk >= st.to;
      return `<li class="${cur ? "now" : past ? "past" : ""}"><div class="ps-r">${st.from}–${st.to}${cur ? "<em>you are here</em>" : ""}</div><div class="ps-b">${render(st)}</div></li>`; }).join("")}</ol>`; }
  const trainHtml = t => t?.length ? `<div class="card"><div class="label">Rank-ups: when you need to train or do a quest</div><ul class="kv">${t.map(x => `<li><b>Skill ${esc(x.skill)}</b>${esc(x.what)}: ${rich(x.where)}${x.req ? ` <span class="muted">(${esc(x.req)})</span>` : ""} ${fl(x.flag)}</li>`).join("")}</ul></div>` : "";
  const listCard = (title, a) => a?.length ? `<div class="card"><div class="label">${title}</div><ul class="plist">${a.map(x => `<li>${rich(x)}</li>`).join("")}</ul></div>` : "";
  const srcHtml = a => a?.length ? `<p class="small muted psrc">Sources: ${a.map(x => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a>`).join(" · ")}</p>` : "";
  function renderProf() {
    const k = state.prof, d = PF(), L = state.level, el = $("#prof-body");
    $("#prof-seg").innerHTML = PTABS.map(([id, n]) => `<button data-p="${id}" class="${id === k ? "on" : ""}">${n}</button>`).join("");
    $("#prof-seg").querySelectorAll("button").forEach(b => b.onclick = () => { state.prof = b.dataset.p; store.set("prof", state.prof); renderProf(); refreshWH(); });
    let h = "";
    if (k === "lw" && d.lw) { const x = d.lw;
      h = `<div class="ptop"><p class="lead">Leatherworking turns the leather you skin into armor and armor kits. Set your skill below and the guide highlights what to craft now. Each step says how many to make, what it costs in materials and where the recipe comes from.</p>${skillBox("lw")}</div>
        ${listCard("What's different in WoW: Forever", x.changes)}${trainHtml(x.trainers)}
        <h3>What to craft, step by step</h3>${stepsHtml("lw", x.steps, st => `<b>${pItem(st.craft, st.item_id, st.flag)}</b> × ${esc(st.count)} ${fl(st.flag)}<span>Materials: ${rich(st.mats)}</span><span>Recipe: ${rich(st.recipe_from)}</span>${st.note ? `<span class="muted">${rich(st.note)}</span>` : ""}`)}
        <div class="cards2">${listCard("Shopping list for the whole route", x.shopping)}${x.useful_crafts?.length ? `<div class="card"><div class="label">Crafts worth making for your bear</div><ul class="kv">${x.useful_crafts.map(c => `<li><b>${pItem(c.name, c.item_id, c.flag)}</b>Skill ${esc(c.skill)}. ${rich(c.why)} ${fl(c.flag)}</li>`).join("")}</ul></div>` : ""}</div>
        ${listCard("Making gold with Leatherworking", x.gold)}${srcHtml(x.sources)}`;
    } else if (k === "farm" && d.lw) { const f = d.lw.farming || [];
      h = `<p class="lead">Where to skin each type of leather. Rows that fit your level (${L}) are highlighted. Skinning gives the leather; you need a skinning skill of about 5 times the creature's level to skin it.</p>
        <div class="tablewrap"><table class="mx farm"><tr><th>Leather</th><th>Level</th><th>Zone</th><th>Where</th><th>Why</th></tr>${f.map(r => `<tr class="${lvIn(r.lv, L) ? "now" : ""}"><td><b>${rich(r.mat)}</b></td><td class="c">${esc(r.lv)}</td><td>${esc(r.zone)}</td><td>${rich(r.where)}</td><td>${rich(r.note)} ${fl(r.flag)}</td></tr>`).join("")}</table></div>${srcHtml(d.lw.sources)}`;
    } else if (k === "cook" && d.cook) { const x = d.cook;
      h = `<div class="ptop"><p class="lead">Cooking turns meat and fish into food. Some food gives a "Well Fed" buff with extra stamina or other stats, which helps a tank. Set your skill and the guide highlights what to cook now.</p>${skillBox("cook")}</div>
        ${listCard("What's different in WoW: Forever", x.changes)}${trainHtml(x.trainers)}
        <h3>What to cook, step by step</h3>${stepsHtml("cook", x.steps, st => `<b>${pItem(st.craft, st.item_id, st.flag)}</b> × ${esc(st.count)} ${fl(st.flag)}<span>Materials: ${rich(st.mats)}</span>${st.mats_from ? `<span>Where to get it: ${rich(st.mats_from)}</span>` : ""}<span>Recipe: ${rich(st.recipe_from)}</span>${st.note ? `<span class="muted">${rich(st.note)}</span>` : ""}`)}
        ${x.tank_food?.length ? `<h3>Best food for your bear</h3>${x.food_note ? `<p class="small muted">${rich(x.food_note)}</p>` : ""}<div class="tablewrap"><table class="mx farm"><tr><th>Level</th><th>Food</th><th>What it does</th><th>Recipe</th></tr>${x.tank_food.map(r => `<tr class="${lvIn(r.lv, L) ? "now" : ""}"><td class="c">${esc(r.lv)}</td><td><b>${pItem(r.name, r.item_id, r.flag)}</b></td><td>${rich(r.effect)}</td><td>${rich(r.recipe_from)} ${fl(r.flag)}</td></tr>`).join("")}</table></div>` : ""}
        ${listCard("Making gold with Cooking", x.gold)}${srcHtml(x.sources)}`;
    } else if (k === "fish" && d.fish) { const x = d.fish;
      h = `<div class="ptop"><p class="lead">Fishing doesn't use a profession slot. You need a fishing pole equipped. Cast into water, wait for the bobber to splash, then click it. Set your skill and the guide highlights where to fish now.</p>${skillBox("fish")}</div>
        ${listCard("What's different in WoW: Forever", x.changes)}${trainHtml(x.trainers)}
        <h3>Where to fish, step by step</h3>${stepsHtml("fish", x.steps, st => `<b>${esc(st.zone)}</b> ${fl(st.flag)}<span>Where: ${rich(st.where)}</span><span>You catch: ${rich(st.catch)}</span>${st.note ? `<span class="muted">${rich(st.note)}</span>` : ""}`)}
        <div class="cards2">${x.gear?.length ? `<div class="card"><div class="label">Fishing poles and lures</div><ul class="kv">${x.gear.map(g => `<li><b>${pItem(g.name, g.item_id, g.flag)}</b>${rich(g.what)} Where: ${rich(g.where)} ${fl(g.flag)}</li>`).join("")}</ul></div>` : ""}
        ${x.valuable?.length ? `<div class="card"><div class="label">Fish worth catching</div><ul class="kv">${x.valuable.map(g => `<li><b>${rich(g.fish)}</b>${rich(g.use)} Where: ${rich(g.where)} ${fl(g.flag)}</li>`).join("")}</ul></div>` : ""}</div>${srcHtml(x.sources)}`;
    } else h = `<p class="muted">This guide is still being written.</p>`;
    el.innerHTML = h;
    el.querySelectorAll("[data-skill]").forEach(i => i.addEventListener("change", () => { store.set("skill:" + i.dataset.skill, Math.max(1, Math.min(300, +i.value || 1))); renderProf(); refreshWH(); }));
  }

  /* ---------------- TODAY ---------------- */
  function renderToday() {
    const L = state.level, n = ptsAt(L), r = ranksAt(n), cp = CHECKPOINTS[curCp(L)], cur = pickAt(L), nx = pickAt(L + 1);
    const ct = cur ? TALENTS[cur] : null, xt = nx ? TALENTS[nx] : null;
    $("#hero").innerHTML = `<div class="eyebrow">Level ${L} · stop ${curCp(L) + 1} of ${CHECKPOINTS.length}</div>
      <h1>${esc(cp.title)}</h1><p>${rich(cp.where)}</p>
      ${stepFor(L) ? `<p class="goal">Quest in: <b>${esc(stepFor(L).zones)}</b> · ${esc(stepFor(L).hub)}</p>` : ""}
      <p class="goal">Trainer: ${trAt(L).length ? `<b>new spells at level ${L}, go train</b>` : `nothing new until level ${L + 1}`}</p>
      ${ct ? `<p class="goal">Your level ${L} talent: <b>${esc(ct.name)} rank ${rankAt(L)} of ${ct.max}</b></p>` : ""}
      <div class="progress"><i style="width:${(L - 10) / 50 * 100}%"></i></div>
      <div class="progress-l"><span>Talents ${n}/51</span><span>Level ${L} / 60</span></div>`;
    const rot = ROT.single.filter(x => unlocked(x[2], L, r)).filter((x, i, a) => a.findIndex(y => y[0] === x[0]) === i);
    $("#today-cards").innerHTML = `
      <div class="card"><div class="label">Level ${L} talent point</div>${ct ? `<div class="next-t">${img(T_UI[cur][0], "ico lg")}<div><b>${esc(ct.name)} ${rankAt(L)}/${ct.max}</b><span>${esc(T_UI[cur][1])}</span></div></div>` : `<b>No talent points before level 10</b>`}${xt ? `<p class="small muted" style="margin:12px 0 0">Level ${L + 1}: ${esc(xt.name)} ${rankAt(L + 1)}/${xt.max}</p>` : ""}</div>
      <div class="card"><div class="label">Press these, in order</div><div class="btnrow">${rot.map((x, i) => `<div class="b"><em>${i + 1}</em>${spellLink(SP[x[0]][1], img(SP[x[0]][0], "ico lg", x[0]))}${esc(x[0])}</div>`).join("")}</div></div>
      <div class="card"><div class="label">This stop is done when</div><p style="margin:0 0 10px;font-size:17px;font-weight:600">${rich(cp.done)}</p><p class="small muted" style="margin:0">Talents here: ${rich(cp.talents)}</p></div>`;
    const st = stepFor(L), nst = st ? R.route[R.route.indexOf(st) + 1] : null, dg = dungeonsForLevel(L).filter(d => !/alliance-intended/i.test(d.where)).slice(0, 2);
    $("#today-extra").innerHTML = trainerCard(L) + (st ? `<div class="card"><div class="label">Where to quest at level ${L}</div>${zoneHtml(st)}${nst ? `<div class="label" style="margin-top:18px">Then, at level ${rng(nst.lv)[0]}</div>${zoneHtml(nst)}` : ""}</div>` : "")
      + (dg.length ? `<div class="card"><div class="label">Dungeon cheat sheet</div>${dg.map(d => dungeonMini(d)).join("")}</div>` : "");
    $("#today-extra").querySelectorAll(".open-d").forEach(a => a.onclick = e => { e.preventDefault(); state.dsel = a.dataset.k; renderDungeons(); setTab("dungeons"); });
    $("#today-loot").innerHTML = cp.items.length ? `<div class="card loot"><div class="label">Loot to grab here</div>${itemsHtml(cp.items)}</div>` : "";
    const up = MILESTONES.filter(m => m[0] > L).slice(0, 3);
    $("#upcoming").innerHTML = up.map(m => `<div class="mile">${img(m[2])}<div><b>Lv ${m[0]} · ${esc(m[1])}</b><span>${esc(m[3])} · ${m[0] - L} level${m[0] - L > 1 ? "s" : ""} away</span></div></div>`).join("");
  }
  const itemsHtml = items => `<div class="items">${items.map(([n, id, src, f]) => `<div class="item">${itemLink(id, n, f)}<span class="tag ${f}">${{ v: "Confirmed", q: "Quest", c: "Classic" }[f]}</span><small>${rich(src)}</small></div>`).join("")}</div>`;


  /* ---------------- research data (research.js) ---------------- */
  const R = { route: window.ROUTE || [], dungeons: window.DUNGEONS || [], macros: window.MACROS || [], keys: window.KEYBINDS || [], addons: window.ADDONS || [] };
  const rng = s => { const p = String(s).split(/[–-]/).map(Number); return [p[0], p[1] ?? p[0]]; };
  const overlaps = (a, b) => a[0] <= b[1] && b[0] <= a[1];
  const stepFor = L => { const m = R.route.filter(z => { const [a, b] = rng(z.lv); return L >= a && L <= b; }); return m[m.length - 1]; };
  const zoneHtml = z => `<p class="zone"><b>${esc(z.lv)} · ${esc(z.zones)}</b><span class="hub">Quest town: ${esc(z.hub)}</span><span>${rich(z.how)} ${rich(z.notes)}</span>${z.fnote ? `<span class="fz"><span class="tag v">Forever</span> ${rich(z.fnote)}</span>` : ""}</p>`;
  const routeFor = cp => R.route.filter(z => overlaps(rng(z.lv), range(cp)));
  const dungeonsFor = cp => { const t = (cp.title + " " + cp.where).toLowerCase(); return R.dungeons.filter(d => t.includes(d.name.split(":")[0].split(" (")[0].toLowerCase())); };
  const lvStart = d => rng(d.lv)[0];
  const dungeonMini = d => `<div class="dmini"><b>${esc(d.name)}</b> <span class="muted small">${esc(d.lv)} · ${esc(d.where)}</span>
      <div class="bosses">${(d.bosses || []).map((b, i) => `<span><i>${i + 1}</i>${esc(b.name || b)}</span>`).join("")}</div>
      <a href="#dungeons" class="open-d" data-k="${esc(d.key)}">Open tank guide →</a></div>`;
  function dungeonsForLevel(L) { return R.dungeons.filter(d => { const [a, b] = rng(d.lv); return L >= a - 1 && L <= b; }); }
  function renderDungeons() {
    const L = state.level, fit = new Set(dungeonsForLevel(L).map(d => d.key));
    const list = [...R.dungeons].sort((a, b) => lvStart(a) - lvStart(b));
    if (!state.dsel || !list.find(d => d.key === state.dsel)) state.dsel = (list.find(d => fit.has(d.key)) || list[0] || {}).key;
    const d = list.find(x => x.key === state.dsel);
    $("#dgrid").innerHTML = !list.length ? `<p class="muted">Dungeon data not loaded.</p>` : `
      <nav class="dlist">${list.map(x => `<button class="${x.key === state.dsel ? "on" : ""} ${fit.has(x.key) ? "fit" : ""}" data-k="${esc(x.key)}"><span>${esc(x.name)}</span><em>${esc(x.lv)}</em>${/^NEW/i.test(x.forever || "") ? `<i class="new">NEW</i>` : ""}</button>`).join("")}</nav>
      <article class="dview">
        <header><div><h3>${esc(d.name)}</h3><span>${esc(d.where)} · level ${esc(d.lv)}</span></div>${fit.has(d.key) ? `<span class="now-pill">YOUR LEVEL</span>` : ""}</header>
        ${d.forever ? `<p class="fnote"><span class="tag v">Forever</span> ${rich(d.forever)}</p>` : ""}
        ${(d.quests || []).length ? `<h4>Pick up before you go</h4><ul class="dq">${d.quests.map(q => `<li>${rich(q)}</li>`).join("")}</ul>` : ""}
        ${(d.route || []).length ? `<h4>Tank route</h4><ol class="droute">${d.route.map(r => `<li>${rich(r)}</li>`).join("")}</ol>` : ""}
        ${(d.bosses || []).length ? `<h4>Bosses</h4><div class="dbosses">${d.bosses.map((b, i) => `<div class="boss"><div class="bn"><i>${i + 1}</i><b>${esc(b.name || b)}</b></div>
            ${(b.abilities || []).length ? `<div class="abl">${b.abilities.map(a => `<span>${rich(a)}</span>`).join("")}</div>` : ""}
            ${b.tank ? `<p>${rich(b.tank)}</p>` : ""}</div>`).join("")}</div>` : ""}
        ${(d.dangers || []).length ? `<h4>Watch out</h4><ul class="dtips">${d.dangers.map(t => `<li>${rich(t)}</li>`).join("")}</ul>` : ""}
        ${(d.loot || []).length ? `<h4>Notable loot</h4><ul class="dq">${d.loot.map(t => `<li>${rich(t)}</li>`).join("")}</ul>` : ""}
        ${d.confidence && d.confidence !== "high" ? `<p class="small muted" style="margin-top:16px">Confidence: ${esc(d.confidence)}. Early Forever data, so double-check in game.</p>` : ""}
      </article>`;
    $("#dgrid").querySelectorAll(".dlist button").forEach(b => b.onclick = () => { state.dsel = b.dataset.k; renderDungeons(); });
  }
  function renderSetup() {
    $("#macros").innerHTML = R.macros.map((m, i) => `<div class="macro"><div class="mh"><b>${esc(m.name)}</b>${m.tested ? "" : `<span class="tag c" title="Not yet tested in the Forever client">Untested</span>`}<button class="copy" data-i="${i}">Copy</button></div>
      <p>${rich(m.why)}</p><pre>${esc(m.body)}</pre></div>`).join("");
    $("#macros").querySelectorAll(".copy").forEach(b => b.onclick = async () => { try { await navigator.clipboard.writeText(R.macros[b.dataset.i].body); b.textContent = "Copied ✓"; } catch { b.textContent = "Select & copy"; } setTimeout(() => b.textContent = "Copy", 1500); });
    $("#keys").innerHTML = R.keys.map(([k, a]) => `<div class="key-row"><kbd>${esc(k)}</kbd><span>${esc(a)}</span></div>`).join("");
    $("#addons").innerHTML = R.addons.map(a => `<li><b>${esc(a.name)}</b>${rich(a.why)}${a.forever ? ` <span class="tag v">Forever-ready</span>` : ""}</li>`).join("");
  }

  /* ---------------- ROAD ---------------- */
  function renderRoad() {
    const L = state.level, cur = curCp(L);
    $("#timeline").innerHTML = CHECKPOINTS.map((c, i) => {
      const id = "cp" + i, done = !!state.done[id], [lo, hi] = range(c);
      const talents = [...new Set(ORDER.filter((k, j) => j + 10 >= lo && j + 10 <= hi))];
      return `<li class="stop ${i === cur ? "current" : ""} ${done ? "done" : ""}">
        <div class="dot">${lo === hi ? lo : `${lo}<br>${hi}`}</div>
        <details ${i === cur ? "open" : ""}><summary><div class="t"><b>${esc(c.title)}</b><span>${rich(c.where)}</span></div>${i === cur ? `<span class="now-pill">YOU ARE HERE</span>` : ""}<span class="chev">▶</span></summary>
        <div class="body">
          <div>${routeFor(c).length ? `<h4>Where to quest, in order</h4><ul>${routeFor(c).map(z => `<li><b>${esc(z.lv)}</b> ${esc(z.zones)} <span class="muted">(${esc(z.hub)})</span><br><span class="small muted">${rich(z.notes)}</span></li>`).join("")}</ul><br>` : ""}<h4>Do</h4><ul><li>${rich(c.train)}</li>${c.tips.map(t => `<li>${rich(t)}</li>`).join("")}</ul></div>
          <div><h4>Talents</h4>${talents.length ? `<div class="tchips">${talents.map(k => `<span class="tchip">${img(T_UI[k][0], "ico sm")}${esc(TALENTS[k].name)} <small>${ORDER.slice(0, Math.min(51, hi - 9)).filter(x => x === k).length}/${TALENTS[k].max}</small></span>`).join("")}</div>` : "<span class='muted'>None</span>"}
            <h4 style="margin-top:16px">Done when</h4><label class="donebox"><input type="checkbox" data-id="${id}" ${done ? "checked" : ""}> ${rich(c.done)}</label></div>
          ${c.items.length ? `<div class="full"><h4>Loot</h4>${itemsHtml(c.items)}</div>` : ""}
        </div></details></li>`;
    }).join("");
    $("#timeline").querySelectorAll("input[data-id]").forEach(cb => cb.addEventListener("change", () => {
      state.done[cb.dataset.id] = cb.checked; store.set("done", state.done); cb.closest(".stop").classList.toggle("done", cb.checked);
    }));
  }

  /* ---------------- TALENTS ---------------- */
  function renderTalents() {
    const n = ptsAt(state.level), r = ranksAt(n), next = pickAt(state.level);
    $("#chips").innerHTML = `<span class="small muted" style="align-self:center">Show talents that improve:</span>` + Object.keys(CHIPS).map(c => `<button class="chip ${state.chip === c ? "on" : ""}" data-c="${c}">${c}</button>`).join("");
    $("#chips").querySelectorAll(".chip").forEach(b => b.onclick = () => { state.chip = state.chip === b.dataset.c ? null : b.dataset.c; renderTalents(); });
    const match = k => !state.chip || (TALENTS[k] && TALENTS[k].fx.some(CHIPS[state.chip]));
    const TREES = window.TREE || {}, BG = { B: 283, F: 281, R: 282 };
    $("#trees").innerHTML = ["B", "F", "R"].map(tr => {
      const list = TREES[tr] || [], byK = Object.fromEntries(list.map(t => [t.k, t]));
      const have = list.reduce((a, t) => a + (r[t.k] || 0), 0), fin = list.reduce((a, t) => a + (FINAL[t.k] || 0), 0);
      const arrows = list.filter(t => t.req && byK[t.req]).map(t => { const p = byK[t.req], on = (r[t.req] || 0) >= p.max;
        return `<i class="arrow ${on ? "on" : ""}" style="grid-column:${t.col + 1};grid-row:${p.row + 1}/${t.row + 2}"></i>`; }).join("");
      return `<div class="tree" style="--bg:url(https://wow.zamimg.com/images/wow/talents/backgrounds/classic/${BG[tr]}.jpg)"><header><b>${TREE_NAMES[tr]}</b><span>${have} point${have === 1 ? "" : "s"} now · ${fin} at 60</span></header>
        <div class="tgrid">${arrows}
        ${list.map(t => { const k = t.k, n = r[k] || 0, cls = [n >= t.max ? "max" : n ? "have" : "", FINAL[k] ? "plan" : "", k === next ? "next" : "", match(k) ? "" : "dim", state.sel === k ? "sel" : ""].join(" ");
          return `<div class="tn ${cls}" data-k="${k}" style="grid-row:${t.row + 1};grid-column:${t.col + 1}" title="${esc(t.name)}">${img(t.icon, "", t.name)}<span class="pts">${n}/${t.max}</span></div>`; }).join("")}
        </div></div>`;
    }).join("") + `<div class="key" style="grid-column:1/-1"><span><i style="background:var(--green)"></i>Some points spent</span><span><i style="background:var(--gold)"></i>Fully learned</span><span><i class="ring"></i>Gold outline: you'll take it later</span><span>Glowing: the talent for your level</span><span>Numbers: points now / max ranks</span></div>`;
    $("#trees").querySelectorAll(".tn").forEach(el => el.onclick = () => { state.sel = el.dataset.k; renderTalents(); });
    renderDetail(state.sel || next || "primalBite", r);
    $("#order").innerHTML = ORDER.map((k, i) => `<div class="ostep ${i + 10 < state.level ? "past" : i + 10 === state.level ? "now" : ""}"><span class="l">${i + 10}</span>${img(T_UI[k][0], "ico sm")}<div>${esc(TALENTS[k].name)}<br><small>${ORDER.slice(0, i + 1).filter(x => x === k).length}/${TALENTS[k].max}</small></div></div>`).join("");
    const v = validate();
    $("#validator").textContent = v.length ? "⚠ " + v.join(" · ") : "✓ Checked: 51 points, every row unlocked in time, level requirements (Lacerate 25, Primal Bite 40) and prerequisites met.";
  }
  function renderDetail(k, r) {
    const g = Object.values(window.TREE || {}).flat().find(x => x.k === k), t = TALENTS[k] || {};
    if (!g) return;
    const lv = ORDER.map((x, i) => x === k ? i + 10 : 0).filter(Boolean), have = r[k] || 0;
    const affects = TALENTS[k] ? Object.keys(CHIPS).filter(c => t.fx.some(CHIPS[c])) : [];
    const tn = { B: "Balance", F: "Feral Combat", R: "Restoration" }[Object.keys(window.TREE).find(x => window.TREE[x].includes(g))];
    const plain = T_UI[k] ? T_UI[k][1] : "";
    $("#tdetail").innerHTML = `<div class="hd">${img(g.icon, "ico lg")}<div><b>${spellLink(g.spell, esc(g.name))}</b><span>${tn} · ${g.max} rank${g.max > 1 ? "s" : ""}</span></div></div>
      ${plain ? `<p class="big">${esc(plain)}</p>` : ""}
      <div class="gametip"><small>In-game text, rank ${Math.max(1, have)}</small>${esc(g.desc[Math.max(1, have) - 1])}${g.max > 1 && have < g.max ? `<small>At ${g.max}/${g.max}</small>${esc(g.desc[g.max - 1])}` : ""}</div>
      <dl>
        ${t.tank ? `<dt>For a tank</dt><dd><span class="stars">${"★".repeat(t.tank)}${"☆".repeat(5 - t.tank)}</span></dd>` : ""}
        <dt>You have</dt><dd>${have} of ${g.max}${FINAL[k] ? ` · plan: ${FINAL[k]}` : " · not in this build"}</dd>
        ${lv.length ? `<dt>Take at</dt><dd>level ${lv.join(", ")}</dd>` : ""}
        ${affects.length ? `<dt>Improves</dt><dd>${affects.join(", ")}</dd>` : ""}
        ${g.req ? `<dt>Needs</dt><dd>${esc(Object.values(window.TREE).flat().find(x => x.k === g.req).name)} fully learned first</dd>` : ""}
      </dl>${t.why ? `<div class="why">${rich(t.why)}</div>` : ""}`;
  }
  function validate() {
    const e = [], sp = { B: 0, F: 0, R: 0 }, r = {};
    ORDER.forEach((k, i) => { const t = TALENTS[k], l = i + 10;
      if (sp[t.tree] < t.row * 5) e.push(`L${l} ${t.name}: row locked`);
      if ((r[k] || 0) >= t.max) e.push(`L${l} ${t.name}: too many ranks`);
      if (t.lvl && l < t.lvl) e.push(`L${l} ${t.name}: needs level ${t.lvl}`);
      if (t.req && (r[t.req] || 0) < TALENTS[t.req].max) e.push(`L${l} ${t.name}: prerequisite missing`);
      r[k] = (r[k] || 0) + 1; sp[t.tree]++; });
    if (ORDER.length !== 51) e.push("not 51 points");
    return e;
  }

  /* ---------------- ROTATION ---------------- */
  function renderRotation() {
    const L = state.level, r = ranksAt(ptsAt(L));
    $("#rot-lvl").textContent = "level " + L;
    $("#rot-seg").querySelectorAll("button").forEach(b => b.classList.toggle("on", b.dataset.r === state.rot));
    $("#rot-note").innerHTML = state.rot === "cat" ? `<div class="card catnote"><p><b>For questing alone, one enemy at a time.</b> Claw, Shred, Rake and Ravage each give you a combo point (the dots on the enemy's portrait, up to 5). Rip and Ferocious Bite are finishers: they spend all your combo points, and more points means a stronger hit.</p><p>Switch to Bear Form if a second enemy joins, or if you drop below about half health. Your talents are built for bear, so Cat Form hits softer than it would for a damage-focused druid, but it still kills single enemies faster.</p></div>` : "";
    $("#prio").innerHTML = ROT[state.rot].map(([s, d, req]) => { const ok = unlocked(req, L, r);
      if (!ok && req.before) return "";
      return `<li class="${ok ? "" : "locked"}">${spellLink(SP[s][1], img(SP[s][0], "ico lg", s))}<div><b>${esc(s)}</b><span>${rich(d)}${ok ? "" : ` · unlocks at ${req.t ? "level " + (ORDER.indexOf(req.t) + 10) : "level " + req.lvl}`}</span></div></li>`; }).join("");
    $("#prepull").innerHTML = ROTATION.prepull.map(x => `<li>${rich(x)}</li>`).join("");
    $("#defs").innerHTML = DEFS.map(([s, d, lv]) => `<div class="def" style="${L < lv ? "opacity:.4" : ""}">${img(SP[s][0])}<div><b>${esc(s)}${L < lv ? ` <span class="small muted">· level ${lv}</span>` : ""}</b><span>${rich(d)}</span></div></div>`).join("");
    $("#forms").innerHTML = ROTATION.forms.map(([a, b]) => `<div class="form"><b>${esc(a)}</b><span>${rich(b)}</span></div>`).join("");
  }

  /* ---------------- DEEP DIVE ---------------- */
  function renderDerived() {
    const L = state.level, r = ranksAt(ptsAt(L)), g = k => r[k] || 0;
    const pct = x => (x >= 1 ? "+" : "") + ((x - 1) * 100).toFixed(0) + "%";
    const sf = 1 + .05 * g("savageFury"), fi = 1 + .1 * g("feralInstinct"), rt = 1 + .03 * g("rendAndTear"), nat = 1 + .02 * g("naturalist"), gen = 1 + .02 * g("genesis");
    const fm = L >= 40 ? 4.6 : 2.8;
    const S = [
      ["Maul cost", `${15 - g("ferocity")} rage`, "15 − Ferocity"], ["Swipe cost", `${20 - g("ferocity")} rage`, "20 − Ferocity"],
      ["Swipe damage", pct(sf * fi * nat), "Savage Fury × Feral Instinct × Naturalist"], ["Maul damage", pct(sf * rt * nat), "× Rend and Tear on a bleeding target"],
      ["Primal Bite damage", g("primalBite") ? pct(rt * nat) : "lvl 40", "Rend and Tear × Naturalist"], ["Lacerate bleed", g("lacerate") ? pct(gen * nat) : "lvl 25", "Genesis × Naturalist"],
      ["Crit from talents", `+${3 * g("sharpenedClaws") + 2 * g("naturesMajesty") + 3 * g("leaderOfThePack")}%`, "Claws + Majesty + LotP"],
      ["Crit multiplier", `${(2 + .1 * g("naturalInstinct")).toFixed(1)}×`, "Natural Instinct"], ["Dodge from talents", `+${2 * g("feralSwiftness")}%`, "Feral Swiftness"],
      ["Hit from talents", `+${2 * g("naturesReach")}% of 8%`, "Nature's Reach"], ["Bonus AP", `+${Math.round(g("predatoryStrikes") * .5 * L)}`, "Predatory Strikes"],
      ["Bear Stamina", pct(1 + .04 * g("heartOfTheWild")), "Heart of the Wild"], ["Thick Hide armor", g("thickHide") ? `≈ +${Math.round(3 * L * fm)}` : "—", `3 × level × ${fm}, verify on character sheet`],
    ];
    $("#derived").innerHTML = S.map(([k, v, f]) => `<div class="stat"><div class="k">${k}</div><div class="v">${v}</div><div class="f">${f}</div></div>`).join("");
  }
  function renderDeepStatic() {
    $("#mech").innerHTML = `<ul class="kv">${MECHANICS.map(([a, b, c]) => `<li><b>${esc(a)}</b>${rich(b)} <span class="small muted">(${esc(c)})</span></li>`).join("")}</ul>`;
    $("#stats").innerHTML = `<ul class="kv"><li><b>Offense</b>${rich(STATS.priority)}</li><li><b>Defense</b>${rich(STATS.defense)}</li><li class="small muted">${esc(STATS.note)}</li></ul>`;
    const kv = (sel, a) => $(sel).innerHTML = a.map(([k, v]) => `<li><b>${esc(k)}</b>${rich(v)}</li>`).join("");
    kv("#ench", ENCHANTS); kv("#cons", CONSUMABLES); kv("#racials", RACIALS);
    $("#abil").innerHTML = `<tr><th>Lvl</th><th>Ability</th><th>Notes</th></tr>` + ABILITIES.map(([l, n, d]) => `<tr><td>${l}</td><td>${rich(n)}</td><td>${rich(d)}</td></tr>`).join("");
    const cols = ["Maul", "Swipe", "Lacerate", "Primal Bite", "Crit", "Crit dmg", "Hit", "AP", "Stamina", "Armor", "Dodge", "Rage gen"];
    $("#mx").innerHTML = `<tr><th>Talent</th>${cols.map(c => `<th>${c}</th>`).join("")}</tr>` + Object.entries(TALENTS).filter(([k, t]) => FINAL[k] && t.fx.length).map(([k, t]) =>
      `<tr><td>${esc(t.name)} <span class="muted">${FINAL[k]}/${t.max}</span></td>${cols.map(c => { const f = t.fx.find(x => x[0] === c); if (!f) return "<td></td>";
        const v = typeof f[2] === "number" ? `${f[2] > 0 && f[1] !== "cost" ? "+" : ""}${+(f[2] * FINAL[k]).toFixed(1)}${f[1] === "cost" ? "" : "%"}` : f[2]; return `<td class="c">${esc(v)}</td>`; }).join("")}</tr>`).join("");
    $("#src").innerHTML = SOURCES.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${esc(n)}</a></li>`).join("");
    $("#meta-patch").textContent = META.patch; $("#meta-upd").textContent = META.updated;
  }
  function armorCalc() {
    const A = +$("#c-armor").value || 0, agi = +$("#c-agi").value || 0, m = +$("#c-form").value, L = +$("#c-lvl").value || 63;
    const th = $("#c-th").checked && m > 1 ? 180 * m : 0, total = A * m + agi * 2 + th, dr = Math.min(.75, total / (total + 85 * L + 400));
    $("#c-out").innerHTML = `Armor <b>${Math.round(total)}</b> → <b>${(dr * 100).toFixed(1)}%</b> less physical damage vs level ${L}. You can take ×${(1 / (1 - dr)).toFixed(2)} more hits than with no armor.`;
  }

  /* ---------------- wiring ---------------- */
  function refreshWH() { try { window.$WowheadPower && $WowheadPower.refreshLinks(); } catch {} }
  function renderAll() { renderToday(); renderRoad(); renderTalents(); renderRotation(); renderDungeons(); renderTrainer(); renderProf(); renderDerived(); refreshWH(); }
  function setLevel(v) { state.level = Math.max(10, Math.min(60, v || 10)); $("#lvl").value = state.level; store.set("level", state.level); state.sel = null; renderAll(); }
  function setTab(t) {
    state.tab = t; store.set("tab", t);
    document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === t));
    document.querySelectorAll(".panel").forEach(p => p.classList.toggle("on", p.id === t));
    if (location.hash !== "#" + t) history.replaceState(null, "", "#" + t);
    window.scrollTo({ top: 0 });
  }
  function init() {
    $("#lvl").value = state.level;
    $("#lvl").addEventListener("change", e => setLevel(+e.target.value));
    $("#lv-dn").onclick = () => setLevel(state.level - 1);
    $("#lv-up").onclick = () => setLevel(state.level + 1);
    document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => setTab(b.dataset.tab));
    $("#rot-seg").querySelectorAll("button").forEach(b => b.onclick = () => { state.rot = b.dataset.r; renderRotation(); refreshWH(); });
    ["#c-armor", "#c-agi", "#c-form", "#c-lvl", "#c-th"].forEach(s => $(s).addEventListener("input", armorCalc));
    buildLinks(); renderDeepStatic(); renderSetup(); armorCalc(); renderAll();
    window.addEventListener("hashchange", () => { const t = location.hash.slice(1); if (document.getElementById(t)?.classList.contains("panel")) setTab(t); });
    const h = location.hash.slice(1); setTab(["today", "road", "trainer", "prof", "talents", "rotation", "dungeons", "setup", "deep"].includes(h) ? h : state.tab);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
