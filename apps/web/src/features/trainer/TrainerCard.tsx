import { formatMoney } from "../../lib/format/index.ts";
import { TrainerSpellName } from "./TrainerSpellName.tsx";
import { costOfNeeded, isOptional, nextTrainerLevel, spellsAt } from "./trainer.utils.ts";

/** What the trainer has for you now, or at your next visit. */
export function TrainerCard({ level }: { readonly level: number }) {
  const now = spellsAt(level);
  const next = nextTrainerLevel(level);
  const shown = now.length ? now : next !== undefined ? spellsAt(next) : [];
  const needed = shown.filter((s) => !isOptional(s));
  const optional = shown.filter(isOptional);

  return (
    <div className="card">
      <div className="label">Trainer</div>
      <p className="tr-go">
        {now.length ? (
          <>
            <b>Go train now.</b> {formatMoney(costOfNeeded(now))}
          </>
        ) : (
          <>
            <b>Nothing new at {level}.</b> {next !== undefined ? `Next visit: level ${next}.` : "You know every spell."}
          </>
        )}
      </p>
      <ul className="trmini">
        {needed.map((s) => (
          <li key={`${s.name}-${s.rank}`}>
            <span>
              <TrainerSpellName spell={s} />
            </span>
            <span className="tr-c">{s.fromQuest ? "quest" : formatMoney(s.cost)}</span>
          </li>
        ))}
      </ul>
      {optional.length > 0 && (
        <p className="small muted" style={{ margin: "8px 0 0" }}>
          Optional: {optional.map((s) => s.name).join(", ")}
        </p>
      )}
    </div>
  );
}
