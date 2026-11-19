import { talentTree, talentTreeNames } from "@btc/guide-data";
import type { ReactNode } from "react";
import { Icon } from "../../components/Icon/index.ts";
import { plural } from "../../lib/level/index.ts";
import { wowheadUrl } from "../../lib/wowhead/index.ts";
import { TREE_BACKGROUND, TREES } from "./talents.utils.ts";

type Ranks = Readonly<Record<string, number>>;

interface TalentTreesProps {
  /** Ranks you have now. */
  readonly ranks: Ranks;
  /** Ranks the build has at 60. */
  readonly planned: Ranks;
  /** The talent for your level (glows). */
  readonly next?: string | undefined;
  readonly selected?: string | undefined;
  /** Talents to fade out (filter on the talent page). */
  readonly isDimmed?: (key: string) => boolean;
  /** Without it, talents link to Wowhead instead of opening the detail panel. */
  readonly onSelect?: (key: string) => void;
  /** Rendered after the trees, inside the same grid (for a legend). */
  readonly children?: ReactNode;
}

const sum = (keys: readonly string[], ranks: Ranks) => keys.reduce((total, key) => total + (ranks[key] ?? 0), 0);

export function TalentTrees({ ranks, planned, next, selected, isDimmed, onSelect, children }: TalentTreesProps) {
  return (
    <div className="trees">
      {TREES.map((tree) => {
        const nodes = talentTree[tree];
        const keys = nodes.map((n) => n.key);
        const have = sum(keys, ranks);
        return (
          <div
            key={tree}
            className="tree"
            style={{
              "--bg": `url(https://wow.zamimg.com/images/wow/talents/backgrounds/classic/${TREE_BACKGROUND[tree]}.jpg)`,
            }}
          >
            <header>
              <b>{talentTreeNames[tree]}</b>
              <span>
                {have} {plural(have, "point")} now · {sum(keys, planned)} at 60
              </span>
            </header>
            <div className="tgrid">
              {nodes.map((node) => {
                const parent = node.requires ? nodes.find((n) => n.key === node.requires) : undefined;
                if (!parent) return null;
                const on = (ranks[parent.key] ?? 0) >= parent.maxRank;
                return (
                  <i
                    key={`arrow-${node.key}`}
                    className={`arrow${on ? " on" : ""}`}
                    style={{ gridColumn: node.column + 1, gridRow: `${parent.row + 1} / ${node.row + 2}` }}
                  />
                );
              })}
              {nodes.map((node) => {
                const rank = ranks[node.key] ?? 0;
                const className = [
                  "tn",
                  rank >= node.maxRank ? "max" : rank ? "have" : "",
                  planned[node.key] ? "plan" : "",
                  node.key === next ? "next" : "",
                  isDimmed?.(node.key) ? "dim" : "",
                  node.key === selected ? "sel" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                const style = { gridRow: node.row + 1, gridColumn: node.column + 1 };
                const content = (
                  <>
                    <Icon name={node.icon} className="" alt={node.name} />
                    <span className="pts">
                      {rank}/{node.maxRank}
                    </span>
                  </>
                );
                return onSelect ? (
                  <button
                    key={node.key}
                    type="button"
                    className={className}
                    style={style}
                    title={node.name}
                    onClick={() => onSelect(node.key)}
                  >
                    {content}
                  </button>
                ) : (
                  <a
                    key={node.key}
                    className={className}
                    style={style}
                    title={node.name}
                    href={wowheadUrl(`spell=${node.spellId}`)}
                    target="_blank"
                    rel="noopener"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
      {children}
    </div>
  );
}
