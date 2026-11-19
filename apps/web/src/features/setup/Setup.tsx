import { addons, keybinds, macros, qualityOfLife } from "@btc/guide-data";
import { CopyButton } from "../../components/CopyButton/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { Notes } from "../../components/TextLists/index.ts";

/** Action bars, settings, habits and the first-login checklist. Static HTML. */
export function QualityOfLife() {
  const { actionBars, settings, habits, checklist, sources } = qualityOfLife;
  return (
    <>
      <h3>Make every bar change with your form</h3>
      <p className="lead" style={{ marginBottom: 12 }}>
        {actionBars.intro}
      </p>
      <ol className="qsteps">
        {actionBars.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="small muted">
        {actionBars.alt} No addon? The "One button" macros below do a different thing in each form.
      </p>
      <h3>Settings to change once</h3>
      <Notes items={settings} />
      <h3>Habits that make leveling smoother</h3>
      <Notes items={habits} />
      <h3>Before you start playing</h3>
      <ul className="check">
        {checklist.map((item) => (
          <li key={item}>
            <span>
              <Rich text={item} />
            </span>
          </li>
        ))}
      </ul>
      <SourceList sources={sources} />
    </>
  );
}

/** Macros with copy buttons (an island: the buttons need JavaScript). */
export function Macros() {
  return (
    <div className="macros">
      {macros.map((macro) => (
        <div key={macro.name} className="macro">
          <div className="mh">
            <b>{macro.name}</b>
            {!macro.tested && (
              <span className="tag c" title="Not yet tested in the Forever client">
                Untested
              </span>
            )}
            <CopyButton text={macro.body} />
          </div>
          <p>
            <Rich text={macro.why} />
          </p>
          <pre>{macro.body}</pre>
        </div>
      ))}
    </div>
  );
}

export function KeybindsAndAddons() {
  return (
    <div className="cards2">
      <div className="card">
        <h3>Keybind layout</h3>
        <div className="keys">
          {keybinds.map((bind) => (
            <div key={bind.key} className="key-row">
              <kbd>{bind.key}</kbd>
              <span>{bind.action}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <h3>Addons</h3>
        <ul className="kv">
          {addons.map((addon) => (
            <li key={addon.name}>
              <b>{addon.name}</b>
              <Rich text={addon.why} />
              {addon.worksInForever && <span className="tag v">Forever-ready</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
