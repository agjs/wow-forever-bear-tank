import { checkpoints, talentOrder, talentSummaries, talents } from "@btc/guide-data";
import { HiddenNote } from "../../components/HiddenNote/index.ts";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { formatRange, TALENT_POINTS_AT_60, useLevel } from "../../lib/level/index.ts";
import { isRecordOf, storedValue, useStored } from "../../lib/storage/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { LootList } from "./LootList.tsx";
import { checkpointIndexAt, routeDuring, talentsDuring } from "./road.utils.ts";

const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";
/** Ticked "done when" boxes, keyed "cp<index>" like the original site. */
const doneStore = storedValue<Readonly<Record<string, boolean>>>("done", {}, isRecordOf(isBoolean));

const ranksBy = (key: string, maxLevel: number) =>
  talentOrder.slice(0, Math.min(TALENT_POINTS_AT_60, maxLevel - 9)).filter((k) => k === key).length;

export function Road() {
  const [level] = useLevel();
  const [done, setDone] = useStored(doneStore);
  useWowheadRefresh();
  const current = checkpointIndexAt(level);

  return (
    <>
      <HiddenNote count={current} what={current === 1 ? "stop is" : "stops are"} />
      <ol className="timeline">
        {checkpoints.map((checkpoint, index) => {
          if (index < current) return null;
          const id = `cp${index}`;
          const isDone = done[id] === true;
          const isCurrent = index === current;
          const { min, max } = checkpoint.levels;
          const zones = routeDuring(checkpoint).filter((step) => step.levels.max > level || !isCurrent);
          const taken = talentsDuring(checkpoint);
          return (
            <li key={id} className={`stop${isCurrent ? " current" : ""}${isDone ? " done" : ""}`}>
              <div className="dot">
                {min === max ? (
                  min
                ) : (
                  <>
                    {min}
                    <br />
                    {max}
                  </>
                )}
              </div>
              <details open={isCurrent}>
                <summary>
                  <div className="t">
                    <b>{checkpoint.title}</b>
                    <span>
                      <Rich text={checkpoint.where} />
                    </span>
                  </div>
                  {isCurrent && <span className="now-pill">YOU ARE HERE</span>}
                  <span className="chev">▶</span>
                </summary>
                <div className="body">
                  <div>
                    {zones.length > 0 && (
                      <>
                        <h4>Where to quest, in order</h4>
                        <ul>
                          {zones.map((step) => (
                            <li key={step.zones + step.levels.min}>
                              <b>{formatRange(step.levels)}</b> {step.zones} <span className="muted">({step.hub})</span>
                              <br />
                              <span className="small muted">
                                <Rich text={step.notes} />
                              </span>
                            </li>
                          ))}
                        </ul>
                        <br />
                      </>
                    )}
                    <h4>Do</h4>
                    <ul>
                      <li>
                        <Rich text={checkpoint.train} />
                      </li>
                      {checkpoint.tips.map((tip) => (
                        <li key={tip}>
                          <Rich text={tip} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Talents</h4>
                    {taken.length ? (
                      <div className="tchips">
                        {taken.map((key) => (
                          <span key={key} className="tchip">
                            {talentSummaries[key] && <Icon name={talentSummaries[key].icon} className="ico sm" />}
                            {talents[key]?.name ?? key}{" "}
                            <small>
                              {ranksBy(key, max)}/{talents[key]?.maxRank}
                            </small>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="muted">None</span>
                    )}
                    <h4 style={{ marginTop: 16 }}>Done when</h4>
                    <label className="donebox">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={(event) => setDone({ ...done, [id]: event.target.checked })}
                      />
                      <span>
                        <Rich text={checkpoint.doneWhen} />
                      </span>
                    </label>
                  </div>
                  {checkpoint.items.length > 0 && (
                    <div className="full">
                      <h4>Loot</h4>
                      <LootList items={checkpoint.items} />
                    </div>
                  )}
                </div>
              </details>
            </li>
          );
        })}
      </ol>
    </>
  );
}
