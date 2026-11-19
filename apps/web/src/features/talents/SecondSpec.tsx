import { secondSpec } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { Segmented } from "../../components/Segmented/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { PlainList, Steps } from "../../components/TextLists/index.ts";
import { ranksAfter, TALENT_POINTS_AT_60, talentPointsAt } from "../../lib/level/index.ts";
import { isOneOf, storedValue, useStored } from "../../lib/storage/index.ts";
import { TalentTrees } from "./TalentTrees.tsx";
import { nodeByKey } from "./talents.utils.ts";

const SPECS = ["cat", "balance"] as const;
const specStore = storedValue("spec2", "cat", isOneOf(SPECS));
const nameOf = (key: string) => nodeByKey(key)?.name ?? key;

/** The dual-spec build: cat DPS or Balance, spent the way it should be at your level. */
export function SecondSpec({ level }: { readonly level: number }) {
  const [spec, setSpec] = useStored(specStore);
  const build = secondSpec[spec];
  const points = talentPointsAt(level);
  const ranks = ranksAfter(build.order, points);
  const planned = ranksAfter(build.order, TALENT_POINTS_AT_60);
  const now = Object.entries(ranks).map(([key, rank]) => `${nameOf(key)} ${rank}`);
  const later = Object.entries(planned)
    .filter(([key, rank]) => (ranks[key] ?? 0) < rank)
    .map(([key, rank]) => `${nameOf(key)} ${ranks[key] ? `${ranks[key]}→${rank}` : rank}`);

  return (
    <>
      <PlainList items={secondSpec.dualSpecNotes} />
      <Segmented
        label="Second spec"
        options={[
          ["cat", "Feral cat DPS"],
          ["balance", "Balance"],
        ]}
        value={spec}
        onChange={setSpec}
      />
      <div className="card">
        <div className="label">
          {build.title} · {build.pointSplit} at 60
        </div>
        <p style={{ margin: 0 }}>
          <Rich text={build.why} />
        </p>
      </div>
      <div className="card">
        <div className="label">
          Spend your {points} points (level {level}) like this
        </div>
        <p style={{ margin: 0 }}>{now.join(", ")}.</p>
        {later.length > 0 && (
          <p className="small muted" style={{ margin: "8px 0 0" }}>
            As you level: {later.join(", ")}.
          </p>
        )}
      </div>
      <TalentTrees ranks={ranks} planned={planned} />
      <Fold title="Talent notes">
        <PlainList items={build.notes} />
      </Fold>
      <Fold title="What to press">
        <Steps items={build.rotation} />
      </Fold>
      <Fold title="Stats to look for">
        <p>
          <Rich text={build.stats} />
        </p>
      </Fold>
      <SourceList sources={[...build.sources, ...secondSpec.dualSpecSources]} />
    </>
  );
}
