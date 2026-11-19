import type { CheckpointItem } from "@btc/guide-data";
import { Rich } from "../../components/Rich/index.ts";
import { ConfidenceTag } from "../../components/Tag/index.ts";
import { WowLink } from "../../components/WowLink/index.ts";
import { itemDatabase } from "../../lib/wowhead/index.ts";

export function LootList({ items }: { readonly items: readonly CheckpointItem[] }) {
  return (
    <div className="items">
      {items.map((item) => (
        <div key={item.name} className="item">
          {item.itemId ? (
            <WowLink path={`item=${item.itemId}`} database={itemDatabase(item.confidence)}>
              {item.name}
            </WowLink>
          ) : (
            item.name
          )}
          <small>
            <ConfidenceTag confidence={item.confidence} />
            <Rich text={item.source} />
          </small>
        </div>
      ))}
    </div>
  );
}
