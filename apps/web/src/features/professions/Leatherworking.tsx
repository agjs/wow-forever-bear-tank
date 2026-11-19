import { type CraftStep, professions } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { PlainList } from "../../components/TextLists/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { ItemName, Materials, SkillInput, StepList, TrainerRanks } from "./ProfessionParts.tsx";
import { expandSubcrafts, materialsFor, splitSteps, subcraftsUsed, totalMaterials } from "./professions.utils.ts";

const lw = professions.leatherworking;

function CraftStepBody({ step }: { readonly step: CraftStep }) {
  const lines = materialsFor(step);
  return (
    <>
      <b>
        <WowLink path={`spell=${step.spellId}`} className="wh">
          {step.craft}
        </WowLink>{" "}
        × about {step.count}
      </b>
      <span className="muted">
        Each one needs{" "}
        {step.reagents.map((r, index) => (
          <span key={r.name}>
            {index > 0 && ", "}
            {r.quantity}{" "}
            <WowLink path={`item=${r.itemId}`} className="wh">
              {r.name}
            </WowLink>
          </span>
        ))}
        . In total:
      </span>
      <Materials lines={totalMaterials(lines)} />
      {subcraftsUsed(lines, lw.subcrafts).map((sub) => (
        <span key={sub.name} className="muted">
          Make each{" "}
          <WowLink path={`spell=${sub.spellId}`} className="wh">
            {sub.name}
          </WowLink>{" "}
          from{" "}
          {sub.reagents.map((r, index) => (
            <span key={r.name}>
              {index > 0 && " and "}
              {r.quantity}{" "}
              <WowLink path={`item=${r.itemId}`} className="wh">
                {r.name}
              </WowLink>
            </span>
          ))}
          . {sub.note}
        </span>
      ))}
      <span>
        Recipe: <Rich text={step.recipeFrom} />
      </span>
      {step.note && (
        <span className="muted">
          <Rich text={step.note} />
        </span>
      )}
    </>
  );
}

export function Leatherworking({
  skill,
  onSkill,
}: {
  readonly skill: number;
  readonly onSkill: (skill: number) => void;
}) {
  const { left } = splitSteps(lw.steps, skill);
  const rawTotals = totalMaterials(expandSubcrafts(left.flatMap(materialsFor), lw.subcrafts));
  return (
    <>
      <div className="ptop">
        <p className="lead">
          Enter your skill. You'll see what to craft next and what to collect for the rest of the way to 300.
        </p>
        <SkillInput skill={skill} onChange={onSkill} />
      </div>
      <TrainerRanks ranks={lw.ranks} skill={skill} />
      {left.length > 0 && (
        <div className="card">
          <div className="label">Collect this for the rest of the route</div>
          <Materials lines={rawTotals} />
          <p className="small muted" style={{ margin: "8px 0 0" }}>
            Raw materials, with hides already counted for the cured hides you'll make. Craft counts are estimates.
          </p>
        </div>
      )}
      <h3>What to craft</h3>
      <StepList steps={lw.steps} skill={skill} render={(step) => <CraftStepBody step={step} />} />
      {lw.usefulCrafts.length > 0 && (
        <div className="card">
          <div className="label">Crafts worth making for your bear</div>
          <ul className="kv">
            {lw.usefulCrafts.map((craft) => (
              <li key={craft.name}>
                <b>
                  <ItemName name={craft.name} itemId={craft.itemId} origin={craft.origin} />
                </b>
                Skill {craft.skill}. <Rich text={craft.why} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <Fold title="What's different in WoW: Forever">
        <PlainList items={lw.changes} />
      </Fold>
      <Fold title="Making gold with Leatherworking">
        <PlainList items={lw.gold} />
      </Fold>
      <SourceList sources={lw.sources} />
    </>
  );
}
