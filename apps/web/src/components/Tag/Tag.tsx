import type { ItemConfidence, Origin } from "@btc/guide-data";

const CONFIDENCE: Readonly<Record<ItemConfidence, readonly [className: string, label: string]>> = {
  confirmed: ["v", "Confirmed"],
  quest: ["q", "Quest"],
  classic: ["c", "Classic"],
};

/** Shows whether an item's stats are confirmed for Forever, come from a quest, or are Classic data. */
export function ConfidenceTag({ confidence }: { readonly confidence: ItemConfidence }) {
  const [className, label] = CONFIDENCE[confidence];
  return <span className={`tag ${className}`}>{label}</span>;
}

/** Marks a fact as confirmed for Forever or carried over from Classic. */
export function OriginTag({ origin }: { readonly origin: Origin | undefined }) {
  if (origin === "forever") return <span className="tag v">Forever</span>;
  if (origin === "classic") return <span className="tag c">Classic</span>;
  return null;
}
