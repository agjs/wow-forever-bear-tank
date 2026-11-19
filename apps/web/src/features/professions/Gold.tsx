import { type GoldBand, gold } from "@btc/guide-data";
import { Fold } from "../../components/Fold/index.ts";
import { Rich } from "../../components/Rich/index.ts";
import { SourceList } from "../../components/SourceList/index.ts";
import { Notes, PlainList } from "../../components/TextLists/index.ts";
import { formatRange } from "../../lib/level/index.ts";

function Band({ band }: { readonly band: GoldBand }) {
  return (
    <>
      {band.sell.length > 0 && (
        <>
          <h4>Sell</h4>
          <PlainList items={band.sell} />
        </>
      )}
      {band.farm.length > 0 && (
        <>
          <h4 style={{ marginTop: 14 }}>Where to earn</h4>
          <PlainList items={band.farm} />
        </>
      )}
      {band.saveFor && (
        <p className="small" style={{ marginTop: 12 }}>
          <b>Save for:</b> <Rich text={band.saveFor} />
        </p>
      )}
    </>
  );
}

export function Gold({ level }: { readonly level: number }) {
  const [current, ...later] = gold.bands.filter((band) => band.levels.max >= level);
  return (
    <>
      <p className="lead">
        Early Forever prices are still settling, so check the auction house before you sell in bulk.
      </p>
      <h3>Your mount</h3>
      <Notes items={gold.mountSummary} />
      {current && (
        <>
          <h3>Making gold at levels {formatRange(current.levels)}</h3>
          <div className="card">
            <Band band={current} />
          </div>
        </>
      )}
      {later.map((band) => (
        <Fold key={band.levels.min} title={`Levels ${formatRange(band.levels)}`}>
          <Band band={band} />
        </Fold>
      ))}
      <Fold title="Good to know">
        <Notes items={gold.general} />
      </Fold>
      <SourceList sources={gold.sources} />
    </>
  );
}
