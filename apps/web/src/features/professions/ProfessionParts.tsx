import type { Origin, ProfessionRank } from "@btc/guide-data";
import { type ReactNode, useEffect, useState } from "react";
import { Rich } from "../../components/Rich/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { plural } from "../../lib/level/index.ts";
import { itemDatabase } from "../../lib/wowhead/index.ts";
import { clampSkill, MAX_SKILL, type MaterialLine, rankCap, splitRanks, splitSteps } from "./professions.utils.ts";

export function SkillInput({
  skill,
  onChange,
}: {
  readonly skill: number;
  readonly onChange: (skill: number) => void;
}) {
  const [draft, setDraft] = useState(String(skill));
  useEffect(() => setDraft(String(skill)), [skill]);
  const commit = () => onChange(clampSkill(Number(draft)));
  return (
    <label className="skillbox">
      Your skill{" "}
      <input
        type="number"
        min={1}
        max={MAX_SKILL}
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        onBlur={commit}
        onKeyDown={(event) => {
          if (event.key === "Enter") commit();
        }}
      />
    </label>
  );
}

/** An item name linked to Wowhead when the guide knows its ID, otherwise auto-linked text. */
export function ItemName({
  name,
  itemId,
  origin,
}: {
  readonly name: string;
  readonly itemId?: number | undefined;
  readonly origin?: Origin;
}) {
  return itemId ? (
    <WowLink path={`item=${itemId}`} database={itemDatabase(origin)}>
      {name}
    </WowLink>
  ) : (
    <Rich text={name} />
  );
}

export function Materials({ lines }: { readonly lines: readonly MaterialLine[] }) {
  return (
    <div className="mats">
      {lines.map((line) => (
        <span key={line.name} className="mat">
          <b>{line.quantity}</b>{" "}
          {line.itemId ? (
            <WowLink path={`item=${line.itemId}`} className="wh">
              {line.name}
            </WowLink>
          ) : (
            <Rich text={line.name} />
          )}
        </span>
      ))}
    </div>
  );
}

/** Where to learn each trainer rank, with the next one first. */
export function TrainerRanks({
  ranks,
  skill,
  title = "Where to learn each rank",
}: {
  readonly ranks: readonly ProfessionRank[];
  readonly skill: number;
  readonly title?: string;
}) {
  if (!ranks.length) return null;
  const { upcoming, done } = splitRanks(ranks, skill);
  return (
    <div className="card">
      <div className="label">{title}</div>
      {upcoming.length ? (
        <ul className="kv">
          {upcoming.map((rank, index) => (
            <li key={rank.name} className={index === 0 ? "nextrank" : undefined}>
              <b>Skill {rank.skill}</b>
              <span>
                {index === 0 && <em>Next. </em>}
                <b>{rank.name}</b> (up to {rankCap(rank)}): <Rich text={rank.where} />
                {rank.requirement && <span className="muted"> {rank.requirement}</span>}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ margin: 0 }}>You have every rank.</p>
      )}
      {done.length > 0 && (
        <p className="small muted" style={{ margin: "8px 0 0" }}>
          Already behind you: {done.map((rank) => rank.name).join(", ")}.
        </p>
      )}
    </div>
  );
}

interface StepListProps<T extends { readonly from: number; readonly to: number }> {
  readonly steps: readonly T[];
  readonly skill: number;
  readonly render: (step: T) => ReactNode;
}

/** Skill-up steps from your skill on; passed steps can be shown again. */
export function StepList<T extends { readonly from: number; readonly to: number }>({
  steps,
  skill,
  render,
}: StepListProps<T>) {
  const [showPassed, setShowPassed] = useState(false);
  const { passed, left } = splitSteps(steps, skill);
  const row = (step: T, className: string) => (
    <li key={`${step.from}-${step.to}`} className={className}>
      <div className="ps-r">
        {step.from}–{step.to}
        {className === "now" && <em>you are here</em>}
      </div>
      <div className="ps-b">{render(step)}</div>
    </li>
  );
  return (
    <>
      {passed.length > 0 && (
        <button type="button" className="linkbtn" onClick={() => setShowPassed(!showPassed)}>
          {showPassed ? "Hide" : "Show"} the {passed.length} {plural(passed.length, "step")} you've already passed
        </button>
      )}
      <ol className="psteps">
        {showPassed && passed.map((step) => row(step, "past"))}
        {left.map((step) => row(step, skill >= step.from ? "now" : ""))}
      </ol>
      {left.length === 0 && <p className="muted">You've finished this route. Nice.</p>}
    </>
  );
}
