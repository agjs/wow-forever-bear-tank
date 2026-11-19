import { professions } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { PlainList } from "../../components/TextLists/index.ts";
import { ItemName, SkillInput, StepList, TrainerRanks } from "./ProfessionParts.tsx";

const fishing = professions.fishing;

export function Fishing({ skill, onSkill }: { readonly skill: number; readonly onSkill: (skill: number) => void }) {
  return (
    <>
      <div className="ptop">
        <p className="lead">Enter your skill to see where to fish next. Fishing doesn't use a profession slot.</p>
        <SkillInput skill={skill} onChange={onSkill} />
      </div>
      <TrainerRanks ranks={fishing.ranks} skill={skill} />
      <h3>Where to fish</h3>
      <StepList
        steps={fishing.steps}
        skill={skill}
        render={(step) => (
          <>
            <b>{step.zone}</b>
            <span>
              Where: <Rich text={step.where} />
            </span>
            <span>
              You catch: <Rich text={step.catch} />
            </span>
            {step.note && (
              <span className="muted">
                <Rich text={step.note} />
              </span>
            )}
          </>
        )}
      />
      <Fold title="Fishing poles and lures">
        <ul className="kv">
          {fishing.gear.map((gear) => (
            <li key={gear.name}>
              <b>
                <ItemName name={gear.name} itemId={gear.itemId} origin={gear.origin} />
              </b>
              <Rich text={gear.what} /> <Rich text={gear.where} />
            </li>
          ))}
        </ul>
      </Fold>
      <Fold title="Fish worth catching">
        <ul className="kv">
          {fishing.valuable.map((fish) => (
            <li key={fish.fish}>
              <b>
                <Rich text={fish.fish} />
              </b>
              <Rich text={fish.use} /> <Rich text={fish.where} />
            </li>
          ))}
        </ul>
      </Fold>
      <Fold title="What's different in WoW: Forever">
        <PlainList items={fishing.changes} />
      </Fold>
      <SourceList sources={fishing.sources} />
    </>
  );
}
