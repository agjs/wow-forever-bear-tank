import {
  abilities,
  consumables,
  enchantsAt60,
  mechanics,
  meta,
  racials,
  sources,
  statPriority,
  talents,
} from "@btc/guide-data";
import { useState } from "react";
import { Rich } from "../../components/Rich/index.ts";
import { useLevel } from "../../lib/level/index.ts";
import { FINAL_RANKS, tankRanksAt } from "../talents/index.ts";
import { armorReduction, derivedStats } from "./deepDive.utils.ts";

/** "Your numbers at this level": an island, it follows the level. */
export function DerivedStats() {
  const [level] = useLevel();
  return (
    <div className="stats">
      {derivedStats(level, tankRanksAt(level)).map((stat) => (
        <div key={stat.name} className="stat">
          <div className="k">{stat.name}</div>
          <div className="v">{stat.value}</div>
          <div className="f">{stat.formula}</div>
        </div>
      ))}
    </div>
  );
}

const FORMS = [
  [4.6, "Dire Bear ×4.6"],
  [2.8, "Bear ×2.8"],
  [1, "Caster"],
] as const;

const numberFrom = (text: string, fallback = 0) => (Number.isFinite(Number(text)) ? Number(text) : fallback);

/** Armor calculator: an island. */
export function ArmorCalculator() {
  const [gearArmor, setGearArmor] = useState("1500");
  const [agility, setAgility] = useState("150");
  const [formMultiplier, setForm] = useState(4.6);
  const [enemyLevel, setEnemyLevel] = useState("63");
  const [thickHide, setThickHide] = useState(true);
  const target = numberFrom(enemyLevel, 63) || 63;
  const { armor, reduction, effectiveHealth } = armorReduction({
    gearArmor: numberFrom(gearArmor),
    agility: numberFrom(agility),
    formMultiplier,
    enemyLevel: target,
    thickHide,
  });

  return (
    <>
      <div className="calc">
        <label>
          Gear armor (caster form)
          <input type="number" value={gearArmor} onChange={(e) => setGearArmor(e.target.value)} />
        </label>
        <label>
          Agility
          <input type="number" value={agility} onChange={(e) => setAgility(e.target.value)} />
        </label>
        <label>
          Form
          <select value={formMultiplier} onChange={(e) => setForm(Number(e.target.value))}>
            {FORMS.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Enemy level
          <input type="number" value={enemyLevel} onChange={(e) => setEnemyLevel(e.target.value)} />
        </label>
        <label className="chk">
          <input type="checkbox" checked={thickHide} onChange={(e) => setThickHide(e.target.checked)} /> Thick Hide
        </label>
      </div>
      <div className="calc-out">
        Armor <b>{Math.round(armor)}</b> → <b>{(reduction * 100).toFixed(1)}%</b> less physical damage against level{" "}
        {target}. You can take ×{effectiveHealth.toFixed(2)} more hits than with no armor.
      </div>
    </>
  );
}

const MATRIX_COLUMNS = [
  "Maul",
  "Swipe",
  "Lacerate",
  "Primal Bite",
  "Crit",
  "Crit dmg",
  "Hit",
  "AP",
  "Stamina",
  "Armor",
  "Dodge",
  "Rage gen",
];

export function TalentMatrix() {
  const rows = Object.entries(talents).filter(([key, t]) => FINAL_RANKS[key] && t.effects.length);
  return (
    <div className="tablewrap">
      <table className="mx">
        <thead>
          <tr>
            <th>Talent</th>
            {MATRIX_COLUMNS.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([key, talent]) => {
            const ranks = FINAL_RANKS[key] ?? 0;
            return (
              <tr key={key}>
                <td>
                  {talent.name}{" "}
                  <span className="muted">
                    {ranks}/{talent.maxRank}
                  </span>
                </td>
                {MATRIX_COLUMNS.map((column) => {
                  const effect = talent.effects.find((e) => e.spell === column);
                  if (!effect) return <td key={column} />;
                  const isCost = effect.stat === "cost";
                  const value =
                    typeof effect.value === "number"
                      ? `${effect.value > 0 && !isCost ? "+" : ""}${+(effect.value * ranks).toFixed(1)}${isCost ? "" : "%"}`
                      : effect.value;
                  return (
                    <td key={column} className="c">
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function KeyValues({ items }: { readonly items: readonly { readonly name: string; readonly text: string }[] }) {
  return (
    <ul className="kv">
      {items.map((item) => (
        <li key={item.name}>
          <b>{item.name}</b>
          <Rich text={item.text} />
        </li>
      ))}
    </ul>
  );
}

export function Mechanics() {
  return (
    <ul className="kv">
      {mechanics.map((m) => (
        <li key={m.title}>
          <b>{m.title}</b>
          <Rich text={m.text} /> <span className="small muted">({m.source})</span>
        </li>
      ))}
    </ul>
  );
}

export function StatPriority() {
  return (
    <ul className="kv">
      <li>
        <b>Offense</b>
        <Rich text={statPriority.priority} />
      </li>
      <li>
        <b>Defense</b>
        <Rich text={statPriority.defense} />
      </li>
      <li className="small muted">{statPriority.note}</li>
    </ul>
  );
}

export function EnchantsAndConsumables() {
  return (
    <div className="cards2">
      <div>
        <h4>Enchants</h4>
        <KeyValues items={enchantsAt60.map((e) => ({ name: e.slot, text: e.text }))} />
      </div>
      <div>
        <h4>Consumables</h4>
        <KeyValues items={consumables} />
      </div>
    </div>
  );
}

export const Racials = () => <KeyValues items={racials} />;

export function Abilities() {
  return (
    <div className="tablewrap">
      <table className="mx">
        <thead>
          <tr>
            <th>Level</th>
            <th>Ability</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {abilities.map((ability) => (
            <tr key={`${ability.level}-${ability.name}`}>
              <td>{ability.level}</td>
              <td>
                <Rich text={ability.name} />
              </td>
              <td>
                <Rich text={ability.text} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Sources() {
  return (
    <>
      <ul>
        {sources.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="small muted">Researched the day after launch. Data updated {meta.updated}.</p>
    </>
  );
}
