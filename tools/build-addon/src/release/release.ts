/** Packages the addon for download: a zip without tests or docs, and a version file the Windows updater reads. */
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VERSION_LINE = /^## Version:\s*(\S+)\s*$/m;

/** Reads `## Version: x.y.z` from the addon's TOC. */
export function readTocVersion(toc: string): string {
  const version = toc.match(VERSION_LINE)?.[1];
  if (!version) throw new Error("The TOC has no '## Version:' line");
  return version;
}

export interface ReleaseOptions {
  /** Folder that contains the addon folder (apps/addon). */
  readonly addonRoot: string;
  readonly addonName: string;
  /** Where the zip and addon-version.txt go (the website's public folder). */
  readonly outDir: string;
}

export function release({ addonRoot, addonName, outDir }: ReleaseOptions): { version: string; zip: string } {
  const version = readTocVersion(readFileSync(join(addonRoot, addonName, `${addonName}.toc`), "utf8"));
  const zip = join(outDir, `${addonName}.zip`);
  rmSync(zip, { force: true });
  execFileSync("zip", ["-qr", zip, addonName, "-x", "*.DS_Store", "*.test.lua", "*.md"], { cwd: addonRoot });
  writeFileSync(join(outDir, "addon-version.txt"), `${version}\n`);
  return { version, zip };
}
