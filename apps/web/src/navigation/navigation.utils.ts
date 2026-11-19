import { SECTIONS, type Section } from "./navigation.constants.ts";

/** Joins the site base ("/wow-forever-bear-tank") and a page slug into a URL with a trailing slash. */
export function pageHref(base: string, slug: string, hash?: string): string {
  const root = base.endsWith("/") ? base : `${base}/`;
  return `${root}${slug ? `${slug}/` : ""}${hash ? `#${hash}` : ""}`;
}

/** Links shared from the original one-page site used "#dq"-style tabs. Returns the page that tab became. */
export const sectionForLegacyHash = (hash: string): Section | undefined =>
  SECTIONS.find((section) => section.legacyHash === hash.replace(/^#/, ""));

export function sectionBySlug(slug: string): Section {
  const section = SECTIONS.find((s) => s.slug === slug);
  if (!section) throw new Error(`Unknown section "${slug}"`);
  return section;
}

/** Link to another section from inside a React island. */
export const sectionHref = (slug: string, hash?: string): string => pageHref(import.meta.env.BASE_URL, slug, hash);
