import { talentOrder, talentSummaries, talents, talentTreeNames } from "@btc/guide-data";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { levelsTaking, plural } from "../../lib/level/index.ts";
import { FINAL_RANKS, improves, nodeByKey } from "./talents.utils.ts";

const MAX_STARS = 5;

interface TalentDetailProps {
  readonly talentKey: string;
  readonly rank: number;
}

/** The side panel on the talent page: plain summary, in-game text, when to take it and why. */
export function TalentDetail({ talentKey, rank }: TalentDetailProps) {
  const node = nodeByKey(talentKey);
  if (!node) return null;
  const talent = talents[talentKey];
  const levels = levelsTaking(talentOrder, talentKey);
  const shownRank = Math.max(1, rank);
  const affects = improves(talentKey);
  const prerequisite = node.requires ? nodeByKey(node.requires) : undefined;
  const planned = FINAL_RANKS[talentKey];

  return (
    <aside className="tdetail">
      <div className="hd">
        <Icon name={node.icon} className="ico lg" />
        <div>
          <b>
            <WowLink path={`spell=${node.spellId}`}>{node.name}</WowLink>
          </b>
          <span>
            {talentTreeNames[node.tree]} · {node.maxRank} {plural(node.maxRank, "rank")}
          </span>
        </div>
      </div>
      {talentSummaries[talentKey] && <p className="big">{talentSummaries[talentKey].summary}</p>}
      <div className="gametip">
        <small>In-game text, rank {shownRank}</small>
        {node.descriptions[shownRank - 1]}
        {node.maxRank > 1 && rank < node.maxRank && (
          <>
            <small>
              At {node.maxRank}/{node.maxRank}
            </small>
            {node.descriptions[node.maxRank - 1]}
          </>
        )}
      </div>
      <dl>
        {talent && (
          <>
            <dt>For a tank</dt>
            <dd>
              <span className="stars">
                {"★".repeat(talent.tankValue)}
                {"☆".repeat(MAX_STARS - talent.tankValue)}
              </span>
            </dd>
          </>
        )}
        <dt>You have</dt>
        <dd>
          {rank} of {node.maxRank}
          {planned ? ` · plan: ${planned}` : " · not in this build"}
        </dd>
        {levels.length > 0 && (
          <>
            <dt>Take at</dt>
            <dd>level {levels.join(", ")}</dd>
          </>
        )}
        {affects.length > 0 && (
          <>
            <dt>Improves</dt>
            <dd>{affects.join(", ")}</dd>
          </>
        )}
        {prerequisite && (
          <>
            <dt>Needs</dt>
            <dd>{prerequisite.name} fully learned first</dd>
          </>
        )}
      </dl>
      {talent?.why && (
        <div className="why">
          <Rich text={talent.why} />
        </div>
      )}
    </aside>
  );
}
