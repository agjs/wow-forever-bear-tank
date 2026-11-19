import { checkpoints, milestones, talentOrder, talentSummaries, talents } from "@btc/guide-data";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import {
  formatRange,
  MAX_LEVEL,
  MIN_LEVEL,
  plural,
  rankTakenAt,
  talentTakenAt,
  useLevel,
} from "../../lib/level/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { sectionHref } from "../../navigation/index.ts";
import { dungeonsForLevel, isForHorde } from "../dungeons/index.ts";
import { checkpointIndexAt, LootList, nextRouteStep, routeStepAt } from "../road/index.ts";
import { nextTrainerLevel, spellsAt, TrainerCard } from "../trainer/index.ts";

const UPCOMING_MILESTONES = 3;

/** The home page: what to do at your level, right now. */
export function Today() {
  const [level] = useLevel();
  useWowheadRefresh();

  const step = routeStepAt(level);
  const nextStep = step ? nextRouteStep(step) : undefined;
  const talentKey = talentTakenAt(talentOrder, level);
  const talent = talentKey ? talents[talentKey] : undefined;
  const summary = talentKey ? talentSummaries[talentKey] : undefined;
  const trainNow = spellsAt(level).length > 0;
  const checkpoint = checkpoints[checkpointIndexAt(level)];
  const dungeons = dungeonsForLevel(level).filter(isForHorde);
  const upcoming = milestones.filter((m) => m.level > level).slice(0, UPCOMING_MILESTONES);
  const progress = ((level - MIN_LEVEL) / (MAX_LEVEL - MIN_LEVEL)) * 100;

  return (
    <>
      <div className="hero">
        <h1>Level {level}: what to do now</h1>
        <div className="todo">
          {step && (
            <div>
              <span>Quest</span>
              <b>{step.zones}</b>
              <em>{step.hub}</em>
            </div>
          )}
          <div>
            <span>Trainer</span>
            {trainNow ? (
              <>
                <b>Go train</b>
                <em>new spells at {level}</em>
              </>
            ) : (
              <>
                <b>Not yet</b>
                <em>next at {nextTrainerLevel(level) ?? "–"}</em>
              </>
            )}
          </div>
          {talent && talentKey && (
            <div>
              <span>Talent</span>
              <b>
                {summary && <Icon name={summary.icon} className="ico sm" />} {talent.name}{" "}
                {rankTakenAt(talentOrder, level)}/{talent.maxRank}
              </b>
              {summary && <em>{summary.summary}</em>}
            </div>
          )}
        </div>
        <div className="progress">
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="cards2">
        {step && (
          <div className="card">
            <div className="label">Where to quest</div>
            <b className="big">{step.zones}</b>
            <p className="small muted" style={{ margin: "2px 0 8px" }}>
              Quest town: {step.hub}
            </p>
            <p style={{ margin: 0 }}>
              <Rich text={step.how} />
            </p>
            {nextStep && (
              <p className="small muted" style={{ margin: "12px 0 0" }}>
                Next, at {nextStep.levels.min}: <b>{nextStep.zones}</b>
              </p>
            )}
          </div>
        )}
        <TrainerCard level={level} />
      </div>

      {dungeons.length > 0 && (
        <div className="cards2">
          <div className="card">
            <div className="label">Dungeons for your level</div>
            <ul className="dlinks">
              {dungeons.map((d) => (
                <li key={d.key}>
                  <a href={sectionHref("dungeons", d.key)}>{d.name}</a>
                  <span>{formatRange(d.levels)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {checkpoint && checkpoint.items.length > 0 && (
        <div className="card loot">
          <div className="label">Loot worth grabbing</div>
          <LootList items={checkpoint.items} />
        </div>
      )}

      <div className="upcoming">
        {upcoming.map((m) => (
          <div key={m.level} className="mile">
            <Icon name={m.icon} />
            <div>
              <b>
                Lv {m.level} · {m.title}
              </b>
              <span>
                {m.text} · {m.level - level} {plural(m.level - level, "level")} away
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
