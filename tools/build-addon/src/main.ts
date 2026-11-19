/**
 * Builds the Bear Tank Codex addon:
 *   1. writes apps/addon/BearTankCodex/Data/*.lua from @btc/guide-data
 *   2. zips the addon into apps/web/public/BearTankCodex.zip and writes addon-version.txt next to it
 *   3. publishes the Windows updater (tools/updater/update.ps1) next to them
 * Run with: pnpm build:addon
 */
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import * as guide from "@btc/guide-data";
import { addonDataFiles } from "./addonData/addonData.ts";
import { luaDataFile } from "./lua/serialize.ts";
import { release } from "./release/release.ts";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../../..");
const ADDON_NAME = "BearTankCodex";
const ADDON_ROOT = join(ROOT, "apps/addon");
const DATA_DIR = join(ADDON_ROOT, ADDON_NAME, "Data");
const PUBLIC_DIR = join(ROOT, "apps/web/public");

mkdirSync(DATA_DIR, { recursive: true });
mkdirSync(PUBLIC_DIR, { recursive: true });

const files = addonDataFiles({ ...guide, dungeonList: guide.dungeons });
for (const { file, entries } of files) writeFileSync(join(DATA_DIR, file), luaDataFile(entries));

const { version, zip } = release({ addonRoot: ADDON_ROOT, addonName: ADDON_NAME, outDir: PUBLIC_DIR });
copyFileSync(join(ROOT, "tools/updater/update.ps1"), join(PUBLIC_DIR, "update.ps1"));

const quests = guide.dungeonQuests.reduce((n, d) => n + d.quests.length, 0);
console.log(`Addon data: ${files.length} files (${guide.dungeonQuests.length} dungeons, ${quests} quests).`);
console.log(`Release ${version}: ${relative(ROOT, zip)}`);
