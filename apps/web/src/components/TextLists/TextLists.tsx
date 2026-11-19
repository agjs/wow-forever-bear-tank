import type { TitledText } from "@btc/guide-data";
import { Rich } from "../Rich/index.ts";

/** Bold title with an explanation, one per row. */
export function Notes({ items }: { readonly items: readonly TitledText[] }) {
  return (
    <ul className="notes">
      {items.map((item) => (
        <li key={item.title}>
          <b>{item.title}</b>
          <span>
            <Rich text={item.text} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** A bulleted list of guide sentences. */
export function PlainList({ items }: { readonly items: readonly string[] }) {
  if (!items.length) return null;
  return (
    <ul className="plist">
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

/** Numbered steps to follow in order. */
export function Steps({
  items,
  className = "steps",
}: {
  readonly items: readonly string[];
  readonly className?: string;
}) {
  return (
    <ol className={className}>
      {items.map((item) => (
        <li key={item}>
          <Rich text={item} />
        </li>
      ))}
    </ol>
  );
}
