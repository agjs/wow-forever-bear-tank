import { talentOrder, talentSummaries, talents } from "@btc/guide-data";
import { useState } from "react";
import { HiddenNote } from "../../components/HiddenNote/index.ts";
import { Icon } from "../../components/Icon/index.ts";
import { MIN_LEVEL, TALENT_POINTS_AT_60, talentTakenAt, useLevel } from "../../lib/level/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { SecondSpec } from "./SecondSpec.tsx";
import { TalentDetail } from "./TalentDetail.tsx";
import { TalentTrees } from "./TalentTrees.tsx";
import { EFFECT_FILTERS, FINAL_RANKS, orderProblems, tankRanksAt } from "./talents.utils.ts";

const DEFAULT_DETAIL = "primalBite";
const problems = orderProblems(talentOrder);

function TreeKey() {
  return (
    <div className="key" style={{ gridColumn: "1/-1" }}>
      <span>
        <i style={{ background: "var(--green)" }} />
        Some points spent
      </span>
      <span>
        <i style={{ background: "var(--gold)" }} />
        Fully learned
      </span>
      <span>
        <i className="ring" />
        Gold outline: you'll take it later
      </span>
      <span>Glowing: the talent for your level</span>
      <span>Numbers: points now / max ranks</span>
    </div>
  );
}

export function Talents() {
  const [level] = useLevel();
  const [filter, setFilter] = useState<string | undefined>();
  const [selected, setSelected] = useState<string | undefined>();
  useWowheadRefresh();

  const ranks = tankRanksAt(level);
  const next = talentTakenAt(talentOrder, level);
  const detailKey = selected ?? next ?? DEFAULT_DETAIL;
  const matches = filter ? EFFECT_FILTERS[filter] : undefined;
  const isDimmed = (key: string) => matches !== undefined && !talents[key]?.effects.some(matches);
  const hiddenLevels = Math.min(TALENT_POINTS_AT_60, level - MIN_LEVEL);

  return (
    <>
      <div className="chips">
        <span className="small muted" style={{ alignSelf: "center" }}>
          Show talents that improve:
        </span>
        {Object.keys(EFFECT_FILTERS).map((name) => (
          <button
            key={name}
            type="button"
            className={`chip${filter === name ? " on" : ""}`}
            aria-pressed={filter === name}
            onClick={() => setFilter(filter === name ? undefined : name)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="talent-layout">
        <TalentTrees
          ranks={ranks}
          planned={FINAL_RANKS}
          next={next}
          selected={selected}
          isDimmed={isDimmed}
          onSelect={setSelected}
        >
          <TreeKey />
        </TalentTrees>
        <TalentDetail talentKey={detailKey} rank={ranks[detailKey] ?? 0} />
      </div>

      <h3>Which talent to take at each level</h3>
      <div className="order">
        <HiddenNote count={hiddenLevels} what="levels are" />
        {talentOrder.map((key, index) => {
          const at = index + MIN_LEVEL;
          if (at < level) return null;
          const rank = talentOrder.slice(0, index + 1).filter((k) => k === key).length;
          const summary = talentSummaries[key];
          return (
            <div key={at} className={`ostep${at === level ? " now" : ""}`}>
              <span className="l">{at}</span>
              {summary && <Icon name={summary.icon} className="ico sm" />}
              <div>
                {talents[key]?.name ?? key}
                <br />
                <small>
                  {rank}/{talents[key]?.maxRank}
                </small>
              </div>
            </div>
          );
        })}
      </div>
      <p className="small muted">
        {problems.length
          ? `⚠ ${problems.join(" · ")}`
          : "✓ Checked: 51 points, every row unlocked in time, level requirements (Lacerate 25, Primal Bite 40) and prerequisites met."}
      </p>

      <h3>Second spec (dual spec)</h3>
      <SecondSpec level={level} />
    </>
  );
}
