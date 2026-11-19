import { type ClassQuest, classQuests, type TrainerSpell } from "@btc/guide-data";
import { HiddenNote } from "../../components/HiddenNote/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { formatMoney } from "../../lib/format/index.ts";
import { useLevel } from "../../lib/level/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { TrainerSpellName } from "./TrainerSpellName.tsx";
import { CATEGORY_LABEL, costOfNeeded, isOptional, spellInfo, spellsAt, trainerLevels } from "./trainer.utils.ts";

function SpellRow({ spell }: { readonly spell: TrainerSpell }) {
  const { category, text } = spellInfo(spell);
  return (
    <li className={`tr-${category}`}>
      <div className="tr-n">
        <TrainerSpellName spell={spell} />
        {category !== "skip" && <span className={`tag tc-${category}`}>{CATEGORY_LABEL[category]}</span>}
        {spell.fromQuest && <span className="tag q">Quest</span>}
      </div>
      {spell.rank <= 1 && <span className="tr-d">{text}</span>}
      <span className="tr-c">{spell.fromQuest ? "class quest" : formatMoney(spell.cost)}</span>
    </li>
  );
}

function QuestName({ quest }: { readonly quest: ClassQuest }) {
  return quest.questId ? <WowLink path={`quest=${quest.questId}`}>{quest.name}</WowLink> : quest.name;
}

function ClassQuests({ level }: { readonly level: number }) {
  const passed = classQuests.quests.filter((q) => q.level < level && q.required);
  const upcoming = classQuests.quests.filter((q) => q.level >= level);
  return (
    <div>
      <h3>Druid class quests</h3>
      {passed.length > 0 && (
        <p className="hidnote">
          Already behind you, make sure you did: {passed.map((q) => `${q.name.split(" (")[0]} (${q.level})`).join(", ")}
          .
        </p>
      )}
      {upcoming.length ? (
        <ul className="notes">
          {upcoming.map((q) => (
            <li key={q.name}>
              <b>
                Level {q.level} · <QuestName quest={q} />
              </b>
              <span>
                <Rich text={q.reward} /> Starts: <Rich text={q.start} />
              </span>
              {q.steps.length > 1 && (
                <details className="qsteps-d">
                  <summary>Steps</summary>
                  <ol>
                    {q.steps.map((step) => (
                      <li key={step}>
                        <Rich text={step} />
                      </li>
                    ))}
                  </ol>
                </details>
              )}
              {q.note && (
                <span className="small muted" style={{ display: "block", marginTop: 4 }}>
                  <Rich text={q.note} />
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted">No class quests left.</p>
      )}
    </div>
  );
}

export function Trainer() {
  const [level] = useLevel();
  useWowheadRefresh();
  const levels = trainerLevels.filter((l) => l >= level);

  return (
    <>
      <ClassQuests level={level} />
      <h3>New spells by level</h3>
      <div className="trainer-list">
        <HiddenNote count={trainerLevels.length - levels.length} what="trainer levels are" />
        {levels.map((l) => {
          const spells = spellsAt(l);
          const needed = spells.filter((s) => !isOptional(s));
          const optional = spells.filter(isOptional);
          return (
            <div key={l} className={`tr-lv${l === level ? " now" : ""}`} id={`tr-${l}`}>
              <div className="tr-h">
                <b>Level {l}</b>
                <span>
                  {formatMoney(costOfNeeded(spells))} for the ones you need
                  {l === level && (
                    <>
                      {" · "}
                      <em>your level</em>
                    </>
                  )}
                </span>
              </div>
              {needed.length > 0 && (
                <>
                  <div className="tr-sub">Learn these ({needed.length})</div>
                  <ul className="trl">
                    {needed.map((s) => (
                      <SpellRow key={`${s.name}-${s.rank}`} spell={s} />
                    ))}
                  </ul>
                </>
              )}
              {optional.length > 0 && (
                <>
                  <div className="tr-sub">Optional caster spells ({optional.length})</div>
                  <ul className="trl">
                    {optional.map((s) => (
                      <SpellRow key={`${s.name}-${s.rank}`} spell={s} />
                    ))}
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
