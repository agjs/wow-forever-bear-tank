/** Turns guide text into plain text and Wowhead links. Pure, so the same output renders on server and client. */
import type { WowheadLinks } from "@btc/guide-data";

export type TextPart = { readonly text: string; readonly path?: string };

export interface Linker {
  readonly links: WowheadLinks;
  readonly pattern: RegExp | undefined;
}

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Longest names first, so "Dire Bear Form" wins over "Bear Form". Names must stand alone as words. */
export function createLinker(links: WowheadLinks): Linker {
  const names = Object.keys(links).sort((a, b) => b.length - a.length);
  const pattern = names.length
    ? new RegExp(`(?<![\\w])(${names.map(escapeRegExp).join("|")})(?![\\w])`, "g")
    : undefined;
  return { links, pattern };
}

/** Splits text into parts, linking only the first mention of each name. */
export function linkify(text: string, { links, pattern }: Linker): TextPart[] {
  if (!pattern) return [{ text }];
  const parts: TextPart[] = [];
  const seen = new Set<string>();
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const name = match[0];
    const path = links[name];
    if (!path || seen.has(name)) continue;
    seen.add(name);
    if (match.index > last) parts.push({ text: text.slice(last, match.index) });
    parts.push({ text: name, path });
    last = match.index + name.length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}
