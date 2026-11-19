/** Every name the guide links to Wowhead, built once from @btc/guide-data. */
import {
  campLinks,
  checkpoints,
  extraLinks,
  professionLinks,
  pvpLinks,
  spells,
  talents,
  talentTree,
  type WowheadLinks,
} from "@btc/guide-data";
import { createLinker } from "./linkify.ts";

const ALWAYS_LINKED_TALENTS = new Set(["Lacerate", "Primal Bite"]);

function buildLinks(): WowheadLinks {
  const links: Record<string, string> = { ...extraLinks };
  for (const [name, spell] of Object.entries(spells)) links[name] = `spell=${spell.spellId}`;
  const nodes = [...talentTree.balance, ...talentTree.feral, ...talentTree.restoration];
  for (const node of nodes)
    if (node.maxRank === 1 || ALWAYS_LINKED_TALENTS.has(node.name) || talents[node.key])
      links[node.name] ??= `spell=${node.spellId}`;
  for (const extra of [professionLinks, pvpLinks, campLinks])
    for (const [name, path] of Object.entries(extra)) links[name] ??= path;
  for (const checkpoint of checkpoints)
    for (const item of checkpoint.items)
      if (item.itemId && item.confidence !== "classic" && !/set$/i.test(item.name))
        links[item.name] = `item=${item.itemId}`;
  return links;
}

export const guideLinks = buildLinks();
export const guideLinker = createLinker(guideLinks);
