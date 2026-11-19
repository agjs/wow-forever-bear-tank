import { professions } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { PlainList } from "../../components/TextLists/index.ts";
import { levelTextIncludes } from "../../lib/level/index.ts";
import { ItemName, SkillInput, StepList, TrainerRanks } from "./ProfessionParts.tsx";

const cooking = professions.cooking;

export function Cooking({
  level,
  skill,
  onSkill,
}: {
  readonly level: number;
  readonly skill: number;
  readonly onSkill: (skill: number) => void;
}) {
  return (
    <>
      <div className="ptop">
        <p className="lead">
          Enter your skill to see what to cook next. In Forever almost every cooked food gives the Well Fed buff: 5%
          more experience from kills.
        </p>
        <SkillInput skill={skill} onChange={onSkill} />
      </div>
      <TrainerRanks ranks={cooking.ranks} skill={skill} />
      <h3>What to cook</h3>
      <StepList
        steps={cooking.steps}
        skill={skill}
        render={(step) => (
          <>
            <b>
              <Rich text={step.craft} /> × {step.count}
            </b>
            <span>
              Materials: <Rich text={step.materials} />
            </span>
            {step.materialsFrom && (
              <span>
                Where to get them: <Rich text={step.materialsFrom} />
              </span>
            )}
            <span>
              Recipe: <Rich text={step.recipeFrom} />
            </span>
            {step.note && (
              <span className="muted">
                <Rich text={step.note} />
              </span>
            )}
          </>
        )}
      />
      {cooking.tankFood.length > 0 && (
        <>
          <h3>Best food for your bear</h3>
          <div className="tablewrap">
            <table className="mx farm">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Food</th>
                  <th>What it does</th>
                  <th>Recipe</th>
                </tr>
              </thead>
              <tbody>
                {cooking.tankFood.map((food) => (
                  <tr key={food.name} className={levelTextIncludes(food.levels, level) ? "now" : ""}>
                    <td className="c">{food.levels}</td>
                    <td>
                      <b>
                        <ItemName name={food.name} itemId={food.itemId} origin={food.origin} />
                      </b>
                    </td>
                    <td>
                      <Rich text={food.effect} />
                    </td>
                    <td>
                      <Rich text={food.recipeFrom} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {cooking.foodNote && (
            <p className="small muted">
              <Rich text={cooking.foodNote} />
            </p>
          )}
        </>
      )}
      <Fold title="What's different in WoW: Forever">
        <PlainList items={cooking.changes} />
      </Fold>
      <Fold title="Making gold with Cooking">
        <PlainList items={cooking.gold} />
      </Fold>
      <SourceList sources={cooking.sources} />
    </>
  );
}
