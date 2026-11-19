import { pvp, spells, trainerSpellInfo } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { Notes, PlainList } from "../../components/TextLists/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { levelTextIncludes, useLevel } from "../../lib/level/index.ts";
import { isString, storedValue, useStored } from "../../lib/storage/index.ts";
import { classIcon, guideLinks, useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { counterName, splitThreat } from "./pvp.utils.ts";

const MAX_DANGER = 5;
const SKULLS = [1, 2, 3, 4, 5] as const;
const classStore = storedValue<string | null>("pvpCls", null, (v): v is string | null => v === null || isString(v));

function Skulls({ danger }: { readonly danger: number }) {
  return (
    <span className="skulls" title={`Danger ${danger} of ${MAX_DANGER}`}>
      {SKULLS.map((skull) => (
        <i key={skull} className={skull <= danger ? undefined : "off"} />
      ))}
    </span>
  );
}

function AbilityName({ name }: { readonly name: string }) {
  const path = guideLinks[name];
  return path ? (
    <WowLink path={path} className="wh">
      {name}
    </WowLink>
  ) : (
    name
  );
}

export function Pvp() {
  const [level] = useLevel();
  const [selected, setSelected] = useStored(classStore);
  useWowheadRefresh();

  const current = pvp.classes.find((c) => c.className === selected) ?? pvp.classes[0];
  const tools = pvp.feral.byLevel.find((note) => levelTextIncludes(note.levels, level));

  return (
    <>
      <div className="label">Who are you fighting?</div>
      <div className="clsrow">
        {pvp.classes.map((c) => (
          <button
            key={c.className}
            type="button"
            className={c === current ? "on" : ""}
            aria-pressed={c === current}
            onClick={() => setSelected(c.className)}
          >
            <Icon name={classIcon(c.className)} alt={c.className} />
            <span>{c.className}</span>
            <Skulls danger={c.danger} />
          </button>
        ))}
      </div>

      {current && (
        <div className="card matchup">
          <div className="mu-h">
            <Icon name={classIcon(current.className)} className="ico lg" alt={current.className} />
            <div>
              <h3>{current.className}</h3>
              <div className="small muted">
                Danger {current.danger}/{MAX_DANGER} <Skulls danger={current.danger} />
              </div>
            </div>
          </div>
          <div className="cards2">
            <div>
              <div className="label">Watch out for</div>
              <ul className="plist fear">
                {current.threats.map((line) => {
                  const threat = splitThreat(line);
                  return (
                    <li key={line}>
                      {threat.ability && (
                        <>
                          <b>
                            <AbilityName name={threat.ability} />
                          </b>
                          {threat.note && <span className="muted small"> ({threat.note})</span>}:{" "}
                        </>
                      )}
                      <Rich text={threat.text} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="label">Your plan</div>
              <ol className="plist plan">
                {current.plan.map((step) => (
                  <li key={step}>
                    <Rich text={step} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {current.counters.length > 0 && (
            <>
              <div className="label" style={{ marginTop: 16 }}>
                Buttons that matter here
              </div>
              <div className="mats">
                {current.counters.map((line) => {
                  const name = counterName(line);
                  const icon = trainerSpellInfo[name]?.icon ?? spells[name]?.icon;
                  return (
                    <span key={line} className="mat">
                      {icon && <Icon name={icon} />} <AbilityName name={name} />
                    </span>
                  );
                })}
              </div>
            </>
          )}
          {current.byLevel && (
            <p className="small" style={{ margin: "14px 0 0" }}>
              <b>As you level:</b> <Rich text={current.byLevel} />
            </p>
          )}
          {current.foreverNote && (
            <p className="small" style={{ margin: "8px 0 0" }}>
              <span className="tag v">Forever</span> <Rich text={current.foreverNote} />
            </p>
          )}
        </div>
      )}

      {tools && (
        <div className="card">
          <div className="label">Your PvP tools at level {level}</div>
          <p style={{ margin: 0 }}>
            <Rich text={tools.text} />
          </p>
        </div>
      )}

      <h3>Playing Feral in PvP</h3>
      {pvp.feral.summary && (
        <p className="lead" style={{ marginBottom: 14 }}>
          <Rich text={pvp.feral.summary} />
        </p>
      )}
      <Notes items={pvp.feral.tips} />
      <Fold title="Talents for PvP">
        <p>
          <Rich text={pvp.feral.talents} />
        </p>
      </Fold>
      <Fold title="General PvP tips">
        <Notes items={pvp.general} />
      </Fold>
      <Fold title="How PvP works in WoW: Forever">
        <PlainList items={pvp.basics} />
      </Fold>
      <Fold title="Alliance races and their racials">
        <ul className="kv">
          {pvp.allianceRaces.map((race) => (
            <li key={race.race}>
              <b>{race.race}</b>
              <Rich text={race.racials} />
            </li>
          ))}
        </ul>
      </Fold>
      <Fold title="Your tools at every level">
        <ul className="kv">
          {pvp.feral.byLevel.map((note) => (
            <li key={note.levels}>
              <b>{note.levels}</b>
              <Rich text={note.text} />
            </li>
          ))}
        </ul>
      </Fold>
      <SourceList sources={pvp.sources} />
    </>
  );
}
