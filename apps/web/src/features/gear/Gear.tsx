import { type EnchantBand, type EnchantChoice, enchantPlan, type GearItem } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Icon } from "../../components/Icon/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { Notes } from "../../components/TextLists/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { formatRange, useLevel } from "../../lib/level/index.ts";
import { itemDatabase, useWowheadRefresh } from "../../lib/wowhead/index.ts";
import { enchantBands, SLOTS, slotPlan } from "./gear.utils.ts";

function GearEntry({ item }: { readonly item: GearItem }) {
  return (
    <div className="gi">
      {item.icon && <Icon name={item.icon} />}
      <div>
        <span className="gn">
          <WowLink path={`item=${item.itemId}`} database={itemDatabase(item.confidence)}>
            {item.name}
          </WowLink>
        </span>
        <small>
          {item.stats}
          {item.stats && " · "}
          <Rich text={item.source} />
        </small>
      </div>
    </div>
  );
}

function GearTable({ level }: { readonly level: number }) {
  return (
    <div className="gtable">
      {SLOTS.map((slot) => {
        const { now, next } = slotPlan(slot, level);
        return (
          <div key={slot} className="grow">
            <div className="gs">{slot}</div>
            <div className="gnow">
              {now.length ? (
                now.map((item) => <GearEntry key={item.name} item={item} />)
              ) : (
                <span className="muted small">Nothing from this guide yet. Wear whatever quest reward you have.</span>
              )}
            </div>
            <div className="gnext">
              {next ? (
                <>
                  <span className="glv">Level {next.level}</span>
                  <GearEntry item={next} />
                </>
              ) : (
                <span className="muted small">No later upgrade listed.</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function EnchantName({ choice }: { readonly choice: EnchantChoice }) {
  if (choice.spellId) return <WowLink path={`spell=${choice.spellId}`}>{choice.name}</WowLink>;
  if (choice.itemId) return <WowLink path={`item=${choice.itemId}`}>{choice.name}</WowLink>;
  return <>{choice.name}</>;
}

function EnchantRow({ choice }: { readonly choice: EnchantChoice }) {
  return (
    <li>
      <b>{choice.slot}</b>
      <span>
        <EnchantName choice={choice} />
        {choice.armorKit && <span className="tag q">Armor kit</span>}: <Rich text={choice.effect.replace(/\.$/, "")} />.
        <small className="muted ench-how">
          {choice.howToGet ? (
            <>
              <Rich text={choice.howToGet} />
              {choice.materials && (
                <>
                  {" "}
                  Materials: <Rich text={choice.materials} />.
                </>
              )}
            </>
          ) : (
            <>
              Enchanter needs Enchanting {choice.skill}
              {choice.rareFormula && " and the rare formula"}. Materials: <Rich text={choice.materials} />.
            </>
          )}
          {choice.alternative && (
            <>
              <br />
              Other choice: <Rich text={choice.alternative} />
            </>
          )}
        </small>
      </span>
    </li>
  );
}

function EnchantList({ band }: { readonly band: EnchantBand }) {
  return (
    <ul className="kv">
      {band.choices.map((choice) => (
        <EnchantRow key={`${choice.slot}-${choice.name}`} choice={choice} />
      ))}
    </ul>
  );
}

const bandTitle = (band: EnchantBand) => `Levels ${formatRange(band.levels)}`;

function Enchants({ level }: { readonly level: number }) {
  const bands = enchantBands(enchantPlan.bands, level);
  if (!bands) return null;
  return (
    <>
      <div className="card">
        <div className="label">Now: {bandTitle(bands.current)}</div>
        <EnchantList band={bands.current} />
      </div>
      {bands.later.map((band) => (
        <Fold key={band.levels.min} title={bandTitle(band)}>
          <EnchantList band={band} />
        </Fold>
      ))}
      <Fold title="How enchants work (read once)">
        <Notes items={enchantPlan.rules} />
      </Fold>
      {bands.earlier.length > 0 && (
        <Fold title={`Earlier levels (${bands.earlier.map(bandTitle).join(", ")})`}>
          {bands.earlier.map((band) => (
            <div key={band.levels.min}>
              <h4>{bandTitle(band)}</h4>
              <EnchantList band={band} />
            </div>
          ))}
        </Fold>
      )}
      <SourceList sources={enchantPlan.sources} />
    </>
  );
}

export function Gear() {
  const [level] = useLevel();
  useWowheadRefresh();
  return (
    <>
      <div className="gh">
        <span>Slot</span>
        <span>Wear now</span>
        <span>Next upgrade</span>
      </div>
      <GearTable level={level} />
      <h3>Enchants as you level</h3>
      <p className="lead">
        The best enchant or armor kit for each slot at your level. Older and later levels are folded below.
      </p>
      <Enchants level={level} />
    </>
  );
}
