import { camps } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { Notes, Steps } from "../../components/TextLists/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";

const ItemLink = ({ name, itemId }: { readonly name: string; readonly itemId?: number | undefined }) =>
  itemId ? <WowLink path={`item=${itemId}`}>{name}</WowLink> : name;

/** Camps, Waylaid Crates and Craftsman's Writs. Nothing here depends on your level, so it renders as static HTML. */
export function Camps() {
  return (
    <>
      <h3>Camps</h3>
      <div className="card">
        <div className="label">How a camp works</div>
        <Steps items={camps.campSteps} />
      </div>
      <div className="card">
        <div className="label">Which item to place</div>
        <Notes items={camps.whichItemToPlace} />
      </div>
      {camps.professionItems.map((group) => (
        <Fold key={group.profession} title={`Your ${group.profession} camp items`}>
          <ul className="kv">
            {group.items.map((item) => (
              <li key={item.name}>
                <b>Skill {item.skill}</b>
                <span>
                  <ItemLink name={item.name} itemId={item.itemId} />: <Rich text={item.effect} />
                  <small className="muted ench-how">
                    Make it from: <Rich text={item.materials} />. <Rich text={item.source} />
                  </small>
                </span>
              </li>
            ))}
          </ul>
        </Fold>
      ))}
      <Fold title="Campfire kits">
        <ul className="kv">
          {camps.campfireKits.map((kit) => (
            <li key={kit.name}>
              <b>{kit.slots} items</b>
              <span>
                <ItemLink name={kit.name} itemId={kit.itemId} />: <Rich text={kit.howToGet} />
              </span>
            </li>
          ))}
        </ul>
      </Fold>

      <h3>Waylaid Crates (Merchant's Favor)</h3>
      <div className="card">
        <div className="label">How crates work</div>
        <Steps items={camps.crateSteps} />
      </div>
      <div className="card">
        <div className="label">Crates you can fill with your own skins</div>
        <Notes items={camps.cratesYouCanFill} />
      </div>

      <h3>Craftsman's Writs (reputation)</h3>
      <div className="card">
        <Steps items={camps.writSteps} />
        <p className="small muted" style={{ margin: "8px 0 0" }}>
          <Rich text={camps.reputationNote} />
        </p>
      </div>

      <h3>What to buy</h3>
      <div className="card">
        <div className="label">Your plan</div>
        <Steps items={camps.plan} />
      </div>
      <Fold title="Everything worth buying with Merchant's Favor">
        <ul className="kv">
          {camps.merchantFavorRewards.map((reward) => (
            <li key={reward.name}>
              <b>{reward.cost}</b>
              <span>
                <ItemLink name={reward.name} itemId={reward.itemId} />: <Rich text={reward.effect} />
              </span>
            </li>
          ))}
        </ul>
      </Fold>
      <SourceList sources={camps.sources} />
    </>
  );
}
