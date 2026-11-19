import type { Dungeon } from "@btc/guide-data";
import { useEffect, useState } from "react";
import { Rich } from "../../components/Rich/index.ts";
import { formatRange, useLevel } from "../../lib/level/index.ts";
import { useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { byStartLevel, dungeonsForLevel, isNewInForever } from "./dungeons.utils.ts";

const ALL = byStartLevel();

function RichList({ items, className }: { readonly items: readonly string[]; readonly className: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

function DungeonView({ dungeon, fits }: { readonly dungeon: Dungeon; readonly fits: boolean }) {
  return (
    <article className="dview">
      <header>
        <div>
          <h3>{dungeon.name}</h3>
          <span>
            {dungeon.where} · level {formatRange(dungeon.levels)}
          </span>
        </div>
        {fits && <span className="now-pill">YOUR LEVEL</span>}
      </header>
      {dungeon.foreverNote && (
        <p className="fnote">
          <span className="tag v">Forever</span> <Rich text={dungeon.foreverNote} />
        </p>
      )}
      {dungeon.questNotes.length > 0 && (
        <>
          <h4>Pick up before you go</h4>
          <RichList items={dungeon.questNotes} className="dq" />
        </>
      )}
      {dungeon.route.length > 0 && (
        <>
          <h4>Tank route</h4>
          <ol className="droute">
            {dungeon.route.map((step) => (
              <li key={step}>
                <Rich text={step} />
              </li>
            ))}
          </ol>
        </>
      )}
      {dungeon.bosses.length > 0 && (
        <>
          <h4>Bosses</h4>
          <div className="dbosses">
            {dungeon.bosses.map((boss, index) => (
              <div key={boss.name} className="boss">
                <div className="bn">
                  <i>{index + 1}</i>
                  <b>{boss.name}</b>
                </div>
                {boss.abilities.length > 0 && (
                  <div className="abl">
                    {boss.abilities.map((ability) => (
                      <span key={ability}>
                        <Rich text={ability} />
                      </span>
                    ))}
                  </div>
                )}
                {boss.tank && (
                  <p>
                    <Rich text={boss.tank} />
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      {dungeon.dangers.length > 0 && (
        <>
          <h4>Watch out</h4>
          <RichList items={dungeon.dangers} className="dtips" />
        </>
      )}
      {dungeon.loot && dungeon.loot.length > 0 && (
        <>
          <h4>Notable loot</h4>
          <RichList items={dungeon.loot} className="dq" />
        </>
      )}
      {dungeon.confidence === "low" && (
        <p className="small muted" style={{ marginTop: 16 }}>
          Early Forever data with few sources, so double-check in game.
        </p>
      )}
    </article>
  );
}

/** Dungeon list (outleveled ones hidden) and the selected dungeon's cheat sheet. Open one with #key. */
export function Dungeons() {
  const [level] = useLevel();
  const [selected, setSelected] = useState<string | undefined>();
  useEffect(() => {
    const fromHash = decodeURIComponent(location.hash.slice(1));
    if (fromHash) setSelected(fromHash);
  }, []);
  useWowheadRefresh();

  const fits = new Set(dungeonsForLevel(level).map((d) => d.key));
  const open = ALL.filter((d) => d.levels.max >= level);
  const dungeon = open.find((d) => d.key === selected) ?? open.find((d) => fits.has(d.key)) ?? open[0] ?? ALL.at(-1);
  if (!dungeon) return null;

  const select = (key: string) => {
    setSelected(key);
    history.replaceState(null, "", `#${key}`);
  };

  return (
    <div className="dgrid" id="dgrid">
      <nav className="dlist" aria-label="Dungeons">
        {ALL.length > open.length && (
          <p className="hidnote">{ALL.length - open.length} dungeons you've outleveled are hidden.</p>
        )}
        {open.map((d) => (
          <button
            key={d.key}
            type="button"
            className={[d.key === dungeon.key ? "on" : "", fits.has(d.key) ? "fit" : ""].filter(Boolean).join(" ")}
            aria-current={d.key === dungeon.key}
            onClick={() => select(d.key)}
          >
            <span>{d.name}</span>
            <em>{formatRange(d.levels)}</em>
            {isNewInForever(d) && <i className="new">NEW</i>}
          </button>
        ))}
      </nav>
      <DungeonView dungeon={dungeon} fits={fits.has(dungeon.key)} />
    </div>
  );
}
