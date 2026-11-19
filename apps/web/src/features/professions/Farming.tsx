import { type FarmingSpot, professions } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { OriginTag } from "../../components/Tag/index.ts";
import { levelTextIncludes } from "../../lib/level/index.ts";
import { SkillInput, TrainerRanks } from "./ProfessionParts.tsx";

const lw = professions.leatherworking;

function SpotTable({ spots, level }: { readonly spots: readonly FarmingSpot[]; readonly level: number }) {
  return (
    <div className="tablewrap">
      <table className="mx farm">
        <thead>
          <tr>
            <th>Leather</th>
            <th>Level</th>
            <th>Zone</th>
            <th>What to skin</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot) => (
            <tr
              key={spot.material + spot.zone + spot.levels}
              className={levelTextIncludes(spot.levels, level) ? "now" : ""}
            >
              <td>
                <b>
                  <Rich text={spot.material} />
                </b>
              </td>
              <td className="c">{spot.levels}</td>
              <td>{spot.zone}</td>
              <td>
                <Rich text={spot.where} />
              </td>
              <td>
                <Rich text={spot.note} /> <OriginTag origin={spot.origin} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Farming({
  level,
  skill,
  onSkill,
}: {
  readonly level: number;
  readonly skill: number;
  readonly onSkill: (skill: number) => void;
}) {
  const fits = lw.farming.filter((spot) => levelTextIncludes(spot.levels, level));
  const rest = lw.farming.filter((spot) => !levelTextIncludes(spot.levels, level));
  return (
    <>
      <div className="ptop">
        <p className="lead">Your Skinning skill decides which ranks you still need.</p>
        <SkillInput skill={skill} onChange={onSkill} />
      </div>
      <TrainerRanks ranks={lw.skinningRanks} skill={skill} title="Skinning: where to learn each rank" />
      <p className="lead">
        Where to skin leather at your level ({level}). You can skin a creature if your Skinning skill is about 5 times
        its level.
      </p>
      {fits.length ? (
        <SpotTable spots={fits} level={level} />
      ) : (
        <p className="muted">No spot listed for exactly level {level}. See all spots below.</p>
      )}
      <Fold title="All farming spots, every level">
        <SpotTable spots={rest} level={level} />
      </Fold>
      <SourceList sources={lw.sources} />
    </>
  );
}
