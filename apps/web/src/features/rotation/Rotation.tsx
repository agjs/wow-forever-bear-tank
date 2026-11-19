import {
  catFormNote,
  emergencyButtons,
  type PriorityListKey,
  priorityLists,
  rotation,
  spells,
  talentOrder,
} from "@btc/guide-data";
import { useState } from "react";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { Segmented } from "../../components/Segmented/index.ts";
import { Steps } from "../../components/TextLists/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { isUnlocked, levelsTaking, useLevel } from "../../lib/level/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { tankRanksAt } from "../talents/index.ts";

const LISTS: readonly (readonly [PriorityListKey, string])[] = [
  ["single", "Bear: 1 target"],
  ["cleave", "Bear: 2 targets"],
  ["aoe", "Bear: 3+ targets"],
  ["cat", "Cat (questing)"],
];

/** The level a button unlocks at, for "unlocks at level N". */
const unlockLevel = (talent: string | undefined, level: number | undefined) =>
  talent ? levelsTaking(talentOrder, talent)[0] : level;

export function Rotation() {
  const [level] = useLevel();
  const [list, setList] = useState<PriorityListKey>("single");
  useWowheadRefresh();
  const ranks = tankRanksAt(level);

  return (
    <>
      <p className="lead">
        Press the first button that applies, then start again from the top. Set for <b>level {level}</b>.
      </p>
      <Segmented label="Situation" options={LISTS} value={list} onChange={setList} />
      {list === "cat" && (
        <div className="card catnote">
          {catFormNote.map((paragraph) => (
            <p key={paragraph}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>
      )}
      <ol className="prio">
        {priorityLists[list].map((step) => {
          const unlocked = isUnlocked(step.unlock, level, ranks);
          if (!unlocked && step.unlock.onlyBefore) return null;
          const spell = spells[step.spell];
          const at = unlockLevel(step.unlock.talent, step.unlock.level);
          return (
            <li key={`${step.spell}-${step.text}`} className={unlocked ? "" : "locked"}>
              {spell && (
                <WowLink path={`spell=${spell.spellId}`}>
                  <Icon name={spell.icon} className="ico lg" alt={step.spell} />
                </WowLink>
              )}
              <div>
                <b>{step.spell}</b>
                <span>
                  <Rich text={step.text} />
                  {!unlocked && at !== undefined && ` · unlocks at level ${at}`}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="cards2">
        <div className="card">
          <h3>Before the pull</h3>
          <Steps items={rotation.prePull} />
        </div>
        <div className="card">
          <h3>Emergency buttons</h3>
          {emergencyButtons.map((button) => {
            const ready = level >= button.level;
            const spell = spells[button.spell];
            return (
              <div key={button.spell} className="def" style={ready ? undefined : { opacity: 0.4 }}>
                {spell && <Icon name={spell.icon} />}
                <div>
                  <b>
                    {button.spell}
                    {!ready && <span className="small muted"> · level {button.level}</span>}
                  </b>
                  <span>
                    <Rich text={button.text} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card">
        <h3>When to change form</h3>
        <div className="forms">
          {rotation.forms.map((form) => (
            <div key={form.action} className="form">
              <b>{form.action}</b>
              <span>
                <Rich text={form.when} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
