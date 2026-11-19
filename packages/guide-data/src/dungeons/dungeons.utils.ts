import type { DungeonQuest, DungeonQuestList } from "./dungeons.types.ts";

/** Where a quest is picked up: a place in the world (maybe with map coordinates), or inside the dungeon. */
export type QuestPickup =
  | { readonly inside: true }
  | { readonly inside: false; readonly place: string; readonly zone: string; readonly x?: number; readonly y?: number };

const INSIDE = /^(inside|drops|a random drop)/i;
const COORDS = /\(([\d.]+),\s*([\d.]+)\)\s*$/;
const ROAMING = /,?\s*walks around\s*$/;

/** "Kargath, Badlands (4, 47)" -> { place: "Kargath, Badlands", zone: "Badlands", x: 4, y: 47 } */
export function parseWhere(where: string): QuestPickup {
  if (INSIDE.test(where)) return { inside: true };
  const text = where.replace(ROAMING, "");
  const coords = text.match(COORDS);
  const place = text.replace(/\s*\([^)]*\)\s*$/, "");
  const zone =
    place
      .split(",")
      .map((part) => part.trim())
      .at(-1) ?? place;
  return { inside: false, place, zone, ...(coords ? { x: Number(coords[1]), y: Number(coords[2]) } : {}) };
}

/** One place to visit, with every quest picked up there. */
export interface QuestStop {
  readonly key: string;
  readonly title: string;
  readonly pickup: QuestPickup;
  readonly quests: readonly DungeonQuest[];
}

const INSIDE_KEY = "__inside";

/** Where you go first for a quest: where its chain starts, or where the quest itself is given. */
export const startOf = (quest: DungeonQuest): string => quest.chain?.[0]?.where ?? quest.where;

/** Groups a dungeon's quests by the place you start them (the chain's first step), with the in-dungeon stop last. */
export function questStops(list: DungeonQuestList): QuestStop[] {
  const stops = new Map<string, { title: string; pickup: QuestPickup; quests: DungeonQuest[] }>();
  for (const quest of list.quests) {
    const pickup = parseWhere(startOf(quest));
    const key = pickup.inside ? INSIDE_KEY : pickup.place;
    const stop = stops.get(key) ?? { title: pickup.inside ? `Inside ${list.name}` : pickup.place, pickup, quests: [] };
    stop.quests.push(quest);
    stops.set(key, stop);
  }
  return [...stops]
    .map(([key, stop]) => ({ key, ...stop }))
    .sort((a, b) => Number(a.pickup.inside) - Number(b.pickup.inside));
}

/** The TomTom command that puts a map arrow on a stop, or undefined if it has no coordinates. */
export function wayCommand(pickup: QuestPickup): string | undefined {
  if (pickup.inside || pickup.x === undefined || pickup.y === undefined) return undefined;
  return `/way ${pickup.zone} ${pickup.x} ${pickup.y} ${pickup.place}`;
}
