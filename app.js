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
  const itemLink = (id, n) => id ? `<a href="https://www.wowhead.com/forever/item=${id}" target="_blank" rel="noopener">${esc(n)}</a>` : esc(n);

  /* Plain-language one-liners + icons per talent */
  const T_UI = {
    ferocity: ["ability_hunter_pet_hyena", "Maul, Swipe and Primal Bite cost 1 less rage per rank"],
    furor: ["spell_holy_blessingofstamina", "20% chance per rank: +10 rage when you shift into bear"],
    feralSwiftness: ["spell_nature_spiritwolf", "+4% dodge, much faster Cat Form"],
    feralInstinct: ["ability_ambush", "Swipe hits 30% harder (AoE threat)"],
    brutalImpact: ["ability_druid_bash", "Longer Bash stun (PvP)"],
    thickHide: ["inv_misc_pelt_bear_03", "More armor in bear"],
    feralCharge: ["ability_hunter_pet_bear", "Charge in bear: gap close + interrupt"],
    shreddingAttacks: ["spell_shadow_vampiricaura", "Cheaper Shred (cat)"],
    savageFury: ["ability_druid_ravage", "Maul and Swipe +10% damage"],
    sharpenedClaws: ["inv_misc_monsterclaw_04", "+6% crit in forms"],
    predatoryStrikes: ["ability_hunter_pet_cat", "+90 attack power at level 60"],
    lacerate: ["ability_druid_lacerate", "NEW BUTTON: stacking bleed with huge threat"],
    predatoryDiscipline: ["spell_druid_savagery", "Cat finisher tweak"],
    bloodFrenzy: ["ability_ghoulfrenzy", "Your crits give extra rage"],
    leaderOfThePack: ["spell_nature_unyeildingstamina", "+3% crit for your whole group"],
    naturalInstinct: ["ability_druid_predatoryinstincts", "Crits hit harder (2.0× → 2.2×)"],
    rendAndTear: ["ability_druid_primalagression", "+15% damage on bleeding targets"],
    naturalReaction: ["ability_bullrush", "+5% dodge, rage when you dodge"],
    primalBite: ["ability_racial_cannibalize", "NEW BUTTON: big threat bite, 6s cooldown"],
    shiftingPower: ["spell_druid_displacement", "Cat energy button"],
    naturesFocus: ["spell_nature_healingwavegreater", "Caster pushback (skip)"],
    heartOfTheWild: ["spell_holy_blessingofagility", "+20% Stamina in bear"],
    naturalist: ["spell_nature_healingtouch", "+10% to ALL your damage"],
    reflection: ["spell_frost_windwalkon", "Mana regen while casting"],
    naturalShapeshifter: ["spell_nature_wispsplode", "Cheaper shapeshifting"],
    bloom: ["inv_misc_herb_felblossom", "Heal-over-time bonus"],
    genesis: ["spell_arcane_arcane03", "+10% bleed damage (mostly a gate)"],
    naturesMajesty: ["inv_staff_01", "+4% crit"],
    naturesReach: ["spell_nature_naturetouchgrow", "+4% hit (cap is 8%)"],
  };
  const SP = { // ability icons + ids
    Lacerate: ["ability_druid_lacerate", 1235827], "Primal Bite": ["ability_racial_cannibalize", 1238070], Maul: ["ability_druid_maul", 9881],
    Swipe: ["inv_misc_monsterclaw_03", 9908], "Demoralizing Roar": ["ability_druid_demoralizingroar", 9898], "Faerie Fire": ["spell_nature_faeriefire", 9907],
    Enrage: ["ability_druid_enrage", 5229], Barkskin: ["spell_nature_stoneclawtotem", 22812], "Frenzied Regeneration": ["ability_bullrush", 22842],
    "Challenging Roar": ["ability_druid_challangingroar", 5209], Growl: ["ability_physical_taunt", 6795], "Feral Charge": ["ability_hunter_pet_bear", 16979],
    "Dire Bear Form": ["ability_racial_bearform", 9634], Innervate: ["spell_nature_lightning", 29166], Rebirth: ["spell_nature_reincarnation", 20748],
  };
  /* Rotation with unlock requirements: lvl = trained level, t = talent key */
  const ROT = {
    single: [
      ["Lacerate", "Refresh when at 5 stacks and ≤ 3s left. Never let it fall off.", { t: "lacerate" }],
      ["Faerie Fire", "If the target has no armor debuff.", { lvl: 18 }],
      ["Primal Bite", "Whenever it's off cooldown. Your #1 threat button.", { t: "primalBite" }],
      ["Demoralizing Roar", "If the target has no attack-power debuff.", { lvl: 10 }],
      ["Lacerate", "Filler: stack it up to 5.", { t: "lacerate" }],
      ["Swipe", "Filler before Lacerate exists.", { lvl: 16, before: "lacerate" }],
      ["Maul", "Off the GCD. Queue it when you have over 35 rage, but not if you'd be short for Primal Bite.", { lvl: 10 }],
    ],
    cleave: [
      ["Faerie Fire", "On your main target.", { lvl: 18 }], ["Primal Bite", "On cooldown.", { t: "primalBite" }],
      ["Demoralizing Roar", "Keep it up.", { lvl: 10 }], ["Lacerate", "If the main target isn't bleeding (for the Rend and Tear bonus).", { t: "lacerate" }],
      ["Swipe", "Filler.", { lvl: 16 }], ["Maul", "Over 35 rage.", { lvl: 10 }],
    ],
    aoe: [
      ["Faerie Fire", "On the main target.", { lvl: 18 }], ["Demoralizing Roar", "Hits every enemy around you.", { lvl: 10 }],
      ["Swipe", "Spam it. Hits 3 targets.", { lvl: 16 }], ["Maul", "Over 35 rage.", { lvl: 10 }],
      ["Challenging Roar", "Emergency only: 6s AoE taunt, 10 min cooldown.", { lvl: 28 }],
    ],
  };
  const DEFS = [
    ["Barkskin", "−20% physical damage for 15s. 1 min cooldown. Works in bear in Forever, so use it often.", 44],
    ["Frenzied Regeneration", "Turns rage into health: up to 100% HP over 10s. Start it early. 3 min cooldown.", 36],
    ["Challenging Roar", "Taunts everything for 6s. Use it when adds peel off.", 28],
    ["Enrage", "Pre-pull or when starved: +30 rage over 10s, at the cost of some armor.", 12],
  ];
  const MILESTONES = [
    [16, "Swipe", "inv_misc_monsterclaw_03", "Real AoE threat"], [20, "Cat Form + Feral Charge", "ability_hunter_pet_bear", "Questing gets fast"],
    [25, "Lacerate", "ability_druid_lacerate", "Single-target rotation begins"], [30, "Leader of the Pack + Travel Form", "spell_nature_unyeildingstamina", "Group crit buff"],
    [36, "Frenzied Regeneration", "ability_bullrush", "Self-heal button"], [40, "Dire Bear + Primal Bite + mount", "ability_racial_cannibalize", "The big power spike"],
    [44, "Barkskin", "spell_nature_stoneclawtotem", "Damage reduction in bear"], [46, "Heart of the Wild done", "spell_holy_blessingofagility", "+20% Stamina"],
    [51, "Naturalist done", "spell_nature_healingtouch", "+10% all damage"], [60, "Build complete", "ability_racial_bearform", "Pre-raid gearing"],
  ];
  const CHIPS = {
    Maul: f => f[0] === "Maul", Swipe: f => f[0] === "Swipe", Lacerate: f => f[0] === "Lacerate", "Primal Bite": f => f[0] === "Primal Bite",
    "Rage": f => f[1] === "cost" || f[0] === "Rage gen", Crit: f => f[0] === "Crit" || f[0] === "Crit dmg", Hit: f => f[0] === "Hit",
    Dodge: f => f[0] === "Dodge", Armor: f => f[0] === "Armor", Stamina: f => f[0] === "Stamina", "Attack power": f => f[0] === "AP",
  };

  const state = { level: store.get("level", 13), done: store.get("done", {}), tab: store.get("tab", "today"), chip: null, sel: null, rot: "single" };
  const ptsAt = L => Math.max(0, Math.min(51, L - 9));
  const ranksAt = n => { const r = {}; ORDER.slice(0, n).forEach(k => r[k] = (r[k] || 0) + 1); return r; };
  const FINAL = ranksAt(51);
  const range = c => { const p = c.lv.split("–").map(Number); return [p[0], p[1] ?? p[0]]; };
  const curCp = L => { const i = CHECKPOINTS.findIndex(c => L <= range(c)[1]); return i < 0 ? CHECKPOINTS.length - 1 : i; };
  const unlocked = (req, L, r) => (!req.lvl || L >= req.lvl) && (!req.t || r[req.t]) && (!req.before || !r[req.before]);

  /* ---------------- TODAY ---------------- */
  function renderToday() {
    const L = state.level, n = ptsAt(L), r = ranksAt(n), cp = CHECKPOINTS[curCp(L)], next = ORDER[n];
    const nt = next ? TALENTS[next] : null;
    $("#hero").innerHTML = `<div class="eyebrow">Level ${L} · stop ${curCp(L) + 1} of ${CHECKPOINTS.length}</div>
      <h1>${esc(cp.title)}</h1><p>${esc(cp.where)}</p>
      ${nt ? `<p class="goal">Next talent: <b>${esc(nt.name)} rank ${ORDER.slice(0, n + 1).filter(x => x === next).length} of ${nt.max}</b> at level ${n + 10}</p>` : ""}
      <div class="progress"><i style="width:${(L - 10) / 50 * 100}%"></i></div>
      <div class="progress-l"><span>Talents ${n}/51</span><span>Level ${L} / 60</span></div>`;
    const rot = ROT.single.filter(x => unlocked(x[2], L, r)).filter((x, i, a) => a.findIndex(y => y[0] === x[0]) === i);
    $("#today-cards").innerHTML = `
      <div class="card"><div class="label">Next talent point</div>${nt ? `<div class="next-t">${img(T_UI[next][0], "ico lg")}<div><b>${esc(nt.name)}</b><span>${esc(T_UI[next][1])}</span><br><span class="muted">at level ${n + 10}</span></div></div>` : `<b>Build complete 🎉</b>`}</div>
      <div class="card"><div class="label">Press these, in order</div><div class="btnrow">${rot.map((x, i) => `<div class="b"><em>${i + 1}</em>${spellLink(SP[x[0]][1], img(SP[x[0]][0], "ico lg", x[0]))}${esc(x[0])}</div>`).join("")}</div></div>
      <div class="card"><div class="label">This stop is done when</div><p style="margin:0 0 10px;font-size:17px;font-weight:600">${esc(cp.done)}</p><p class="small muted" style="margin:0">Talents here: ${esc(cp.talents)}</p></div>`;
    const rt = routeFor(cp), dg = dungeonsForLevel(L).filter(d => !/alliance-intended/i.test(d.where)).slice(0, 2);
    $("#today-extra").innerHTML = (rt.length ? `<div class="card"><div class="label">Quest here between runs</div>${rt.map(z => `<p class="zone"><b>${esc(z.lv)} · ${esc(z.zones)}</b><span>${esc(z.notes)}</span></p>`).join("")}</div>` : "")
      + (dg.length ? `<div class="card"><div class="label">Dungeon cheat sheet</div>${dg.map(d => dungeonMini(d)).join("")}</div>` : "");
    $("#today-extra").querySelectorAll(".open-d").forEach(a => a.onclick = e => { e.preventDefault(); state.dsel = a.dataset.k; renderDungeons(); setTab("dungeons"); });
    $("#today-loot").innerHTML = cp.items.length ? `<div class="card loot"><div class="label">Loot to grab here</div>${itemsHtml(cp.items)}</div>` : "";
    const up = MILESTONES.filter(m => m[0] > L).slice(0, 3);
    $("#upcoming").innerHTML = up.map(m => `<div class="mile">${img(m[2])}<div><b>Lv ${m[0]} · ${esc(m[1])}</b><span>${esc(m[3])} · ${m[0] - L} level${m[0] - L > 1 ? "s" : ""} away</span></div></div>`).join("");
  }
  const itemsHtml = items => `<div class="items">${items.map(([n, id, src, f]) => `<div class="item">${itemLink(id, n)}<span class="tag ${f}">${{ v: "Confirmed", q: "Quest", c: "Classic" }[f]}</span><small>${esc(src)}</small></div>`).join("")}</div>`;


  /* ---------------- research data (research.js) ---------------- */
  const R = { route: window.ROUTE || [], dungeons: window.DUNGEONS || [], macros: window.MACROS || [], keys: window.KEYBINDS || [], addons: window.ADDONS || [] };
  const rng = s => { const p = String(s).split(/[–-]/).map(Number); return [p[0], p[1] ?? p[0]]; };
  const overlaps = (a, b) => a[0] <= b[1] && b[0] <= a[1];
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
        ${d.forever ? `<p class="fnote"><span class="tag v">Forever</span> ${esc(d.forever)}</p>` : ""}
        ${(d.quests || []).length ? `<h4>Pick up before you go</h4><ul class="dq">${d.quests.map(q => `<li>${esc(q)}</li>`).join("")}</ul>` : ""}
        ${(d.route || []).length ? `<h4>Tank route</h4><ol class="droute">${d.route.map(r => `<li>${esc(r)}</li>`).join("")}</ol>` : ""}
        ${(d.bosses || []).length ? `<h4>Bosses</h4><div class="dbosses">${d.bosses.map((b, i) => `<div class="boss"><div class="bn"><i>${i + 1}</i><b>${esc(b.name || b)}</b></div>
            ${(b.abilities || []).length ? `<div class="abl">${b.abilities.map(a => `<span>${esc(a)}</span>`).join("")}</div>` : ""}
            ${b.tank ? `<p>${esc(b.tank)}</p>` : ""}</div>`).join("")}</div>` : ""}
        ${(d.dangers || []).length ? `<h4>Watch out</h4><ul class="dtips">${d.dangers.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${(d.loot || []).length ? `<h4>Notable loot</h4><ul class="dq">${d.loot.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${d.confidence && d.confidence !== "high" ? `<p class="small muted" style="margin-top:16px">Confidence: ${esc(d.confidence)}. Early Forever data, so double-check in game.</p>` : ""}
      </article>`;
    $("#dgrid").querySelectorAll(".dlist button").forEach(b => b.onclick = () => { state.dsel = b.dataset.k; renderDungeons(); });
  }
  function renderSetup() {
    $("#macros").innerHTML = R.macros.map((m, i) => `<div class="macro"><div class="mh"><b>${esc(m.name)}</b>${m.tested ? "" : `<span class="tag c" title="Not yet tested in the Forever client">Untested</span>`}<button class="copy" data-i="${i}">Copy</button></div>
      <p>${esc(m.why)}</p><pre>${esc(m.body)}</pre></div>`).join("");
    $("#macros").querySelectorAll(".copy").forEach(b => b.onclick = async () => { try { await navigator.clipboard.writeText(R.macros[b.dataset.i].body); b.textContent = "Copied ✓"; } catch { b.textContent = "Select & copy"; } setTimeout(() => b.textContent = "Copy", 1500); });
    $("#keys").innerHTML = R.keys.map(([k, a]) => `<div class="key-row"><kbd>${esc(k)}</kbd><span>${esc(a)}</span></div>`).join("");
    $("#addons").innerHTML = R.addons.map(a => `<li><b>${esc(a.name)}</b>${esc(a.why)}${a.forever ? ` <span class="tag v">Forever-ready</span>` : ""}</li>`).join("");
  }

  /* ---------------- ROAD ---------------- */
  function renderRoad() {
    const L = state.level, cur = curCp(L);
    $("#timeline").innerHTML = CHECKPOINTS.map((c, i) => {
      const id = "cp" + i, done = !!state.done[id], [lo, hi] = range(c);
      const talents = [...new Set(ORDER.filter((k, j) => j + 10 >= lo && j + 10 <= hi))];
      return `<li class="stop ${i === cur ? "current" : ""} ${done ? "done" : ""}">
        <div class="dot">${lo === hi ? lo : `${lo}<br>${hi}`}</div>
        <details ${i === cur ? "open" : ""}><summary><div class="t"><b>${esc(c.title)}</b><span>${esc(c.where)}</span></div>${i === cur ? `<span class="now-pill">YOU ARE HERE</span>` : ""}<span class="chev">▶</span></summary>
        <div class="body">
          <div>${routeFor(c).length ? `<h4>Quest in</h4><ul>${routeFor(c).map(z => `<li><b>${esc(z.lv)}</b> ${esc(z.zones)}</li>`).join("")}</ul><br>` : ""}<h4>Do</h4><ul><li>${esc(c.train)}</li>${c.tips.map(t => `<li>${esc(t)}</li>`).join("")}</ul></div>
          <div><h4>Talents</h4>${talents.length ? `<div class="tchips">${talents.map(k => `<span class="tchip">${img(T_UI[k][0], "ico sm")}${esc(TALENTS[k].name)} <small>${ORDER.slice(0, Math.min(51, hi - 9)).filter(x => x === k).length}/${TALENTS[k].max}</small></span>`).join("")}</div>` : "<span class='muted'>None</span>"}
            <h4 style="margin-top:16px">Done when</h4><label class="donebox"><input type="checkbox" data-id="${id}" ${done ? "checked" : ""}> ${esc(c.done)}</label></div>
          ${c.items.length ? `<div class="full"><h4>Loot</h4>${itemsHtml(c.items)}</div>` : ""}
        </div></details></li>`;
    }).join("");
    $("#timeline").querySelectorAll("input[data-id]").forEach(cb => cb.addEventListener("change", () => {
      state.done[cb.dataset.id] = cb.checked; store.set("done", state.done); cb.closest(".stop").classList.toggle("done", cb.checked);
    }));
  }

  /* ---------------- TALENTS ---------------- */
  function renderTalents() {
    const n = ptsAt(state.level), r = ranksAt(n), next = ORDER[n];
    $("#chips").innerHTML = `<span class="small muted" style="align-self:center">Improves →</span>` + Object.keys(CHIPS).map(c => `<button class="chip ${state.chip === c ? "on" : ""}" data-c="${c}">${c}</button>`).join("");
    $("#chips").querySelectorAll(".chip").forEach(b => b.onclick = () => { state.chip = state.chip === b.dataset.c ? null : b.dataset.c; renderTalents(); });
    const match = k => !state.chip || TALENTS[k].fx.some(CHIPS[state.chip]);
    $("#trees").innerHTML = ["F", "R", "B"].map(tr => {
      const list = Object.entries(TALENTS).filter(([, t]) => t.tree === tr);
      const rows = Math.max(...list.map(([, t]) => t.row)) + 1;
      const have = list.reduce((a, [k]) => a + (r[k] || 0), 0), fin = list.reduce((a, [k]) => a + (FINAL[k] || 0), 0);
      const arrows = list.filter(([, t]) => t.req).map(([, t]) => { const p = TALENTS[t.req];
        return `<line x1="${(p.col + .5) * 25}" y1="${(p.row + .5) / rows * 100 + 4}" x2="${(t.col + .5) * 25}" y2="${(t.row + .5) / rows * 100 - 4}" stroke="#f0c06088" stroke-width="1.2" vector-effect="non-scaling-stroke"/>`; }).join("");
      return `<div class="tree"><header><b>${TREE_NAMES[tr]}</b><span>${have} / ${fin}</span></header>
        <div class="tgrid" style="grid-template-rows:repeat(${rows},auto)"><svg viewBox="0 0 100 100" preserveAspectRatio="none">${arrows}</svg>
        ${list.map(([k, t]) => { const cls = [r[k] ? "have" : FINAL[k] ? "plan" : "", k === next ? "next" : "", match(k) ? "" : "dim", state.sel === k ? "sel" : ""].join(" ");
          return `<div class="tn ${cls}" data-k="${k}" style="grid-row:${t.row + 1};grid-column:${t.col + 1}" title="${esc(t.name)}">${img(T_UI[k][0], "", t.name)}<span class="pts">${r[k] || 0}/${FINAL[k] || 0}</span></div>`; }).join("")}
        </div></div>`;
    }).join("") + `<div class="key" style="grid-column:1/-1"><span><i style="background:var(--green)"></i>Have now</span><span><i style="background:var(--gold)"></i>Planned</span><span><i style="background:#444"></i>Not taken</span><span>Glowing = next point · Numbers = now / planned</span></div>`;
    $("#trees").querySelectorAll(".tn").forEach(el => el.onclick = () => { state.sel = el.dataset.k; renderTalents(); });
    renderDetail(state.sel || next || "primalBite", r);
    $("#order").innerHTML = ORDER.map((k, i) => `<div class="ostep ${i < n ? "past" : i === n ? "now" : ""}"><span class="l">${i + 10}</span>${img(T_UI[k][0], "ico sm")}<div>${esc(TALENTS[k].name)}<br><small>${ORDER.slice(0, i + 1).filter(x => x === k).length}/${TALENTS[k].max}</small></div></div>`).join("");
    const v = validate();
    $("#validator").textContent = v.length ? "⚠ " + v.join(" · ") : "✓ Checked: 51 points, every row unlocked in time, level requirements (Lacerate 25, Primal Bite 40) and prerequisites met.";
  }
  function renderDetail(k, r) {
    const t = TALENTS[k], lv = ORDER.map((x, i) => x === k ? i + 10 : 0).filter(Boolean);
    const affects = Object.keys(CHIPS).filter(c => t.fx.some(CHIPS[c]));
    $("#tdetail").innerHTML = `<div class="hd">${img(T_UI[k][0], "ico lg")}<div><b>${spellLink(t.id, esc(t.name))}</b><span>${TREE_NAMES[t.tree]} · ${t.max} rank${t.max > 1 ? "s" : ""}</span></div></div>
      <p class="big">${esc(T_UI[k][1])}</p>
      <dl>
        <dt>Value</dt><dd><span class="stars">${"★".repeat(t.tank)}${"☆".repeat(5 - t.tank)}</span></dd>
        <dt>You have</dt><dd>${r[k] || 0} / ${FINAL[k] || 0} planned</dd>
        <dt>Take at</dt><dd>${lv.length ? "level " + lv.join(", ") : "not in this build"}</dd>
        ${affects.length ? `<dt>Improves</dt><dd>${affects.join(", ")}</dd>` : ""}
        <dt>Rank 1</dt><dd>${esc(t.r1)}</dd>${t.rmax ? `<dt>Max</dt><dd>${esc(t.rmax)}</dd>` : ""}
        ${t.req ? `<dt>Needs</dt><dd>${esc(TALENTS[t.req].name)} maxed</dd>` : ""}
      </dl><div class="why">${esc(t.why)}</div>`;
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
    $("#prio").innerHTML = ROT[state.rot].map(([s, d, req]) => { const ok = unlocked(req, L, r);
      if (!ok && req.before) return "";
      return `<li class="${ok ? "" : "locked"}">${spellLink(SP[s][1], img(SP[s][0], "ico lg", s))}<div><b>${esc(s)}</b><span>${esc(d)}${ok ? "" : ` · unlocks at ${req.t ? "level " + (TALENTS[req.t].lvl || "?") : "level " + req.lvl}`}</span></div></li>`; }).join("");
    $("#prepull").innerHTML = ROTATION.prepull.map(x => `<li>${esc(x)}</li>`).join("");
    $("#defs").innerHTML = DEFS.map(([s, d, lv]) => `<div class="def" style="${L < lv ? "opacity:.4" : ""}">${img(SP[s][0])}<div><b>${esc(s)}${L < lv ? ` <span class="small muted">· level ${lv}</span>` : ""}</b><span>${esc(d)}</span></div></div>`).join("");
    $("#forms").innerHTML = ROTATION.forms.map(([a, b]) => `<div class="form"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("");
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
    $("#mech").innerHTML = `<ul class="kv">${MECHANICS.map(([a, b, c]) => `<li><b>${esc(a)}</b>${esc(b)} <span class="small muted">(${esc(c)})</span></li>`).join("")}</ul>`;
    $("#stats").innerHTML = `<ul class="kv"><li><b>Offense</b>${esc(STATS.priority)}</li><li><b>Defense</b>${esc(STATS.defense)}</li><li class="small muted">${esc(STATS.note)}</li></ul>`;
    const kv = (sel, a) => $(sel).innerHTML = a.map(([k, v]) => `<li><b>${esc(k)}</b>${esc(v)}</li>`).join("");
    kv("#ench", ENCHANTS); kv("#cons", CONSUMABLES); kv("#racials", RACIALS);
    $("#abil").innerHTML = `<tr><th>Lvl</th><th>Ability</th><th>Notes</th></tr>` + ABILITIES.map(([l, n, d]) => `<tr><td>${l}</td><td>${esc(n)}</td><td>${esc(d)}</td></tr>`).join("");
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
  function renderAll() { renderToday(); renderRoad(); renderTalents(); renderRotation(); renderDungeons(); renderDerived(); refreshWH(); }
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
    renderDeepStatic(); renderSetup(); armorCalc(); renderAll();
    window.addEventListener("hashchange", () => { const t = location.hash.slice(1); if (document.getElementById(t)?.classList.contains("panel")) setTab(t); });
    const h = location.hash.slice(1); setTab(["today", "road", "talents", "rotation", "dungeons", "setup", "deep"].includes(h) ? h : state.tab);
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
