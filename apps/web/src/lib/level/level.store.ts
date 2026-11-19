import { isNumber, storedValue } from "../storage/index.ts";
import { MIN_LEVEL } from "./level.utils.ts";

/**
 * The player's level, shared by every island on the page and saved in the browser.
 * The server renders at level 10 so every section's full content is in the HTML for search engines.
 */
export const levelStore = storedValue("level", MIN_LEVEL, isNumber);
