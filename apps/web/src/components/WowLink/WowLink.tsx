import type { ReactNode } from "react";
import { wowheadUrl } from "../../lib/wowhead/index.ts";

interface WowLinkProps {
  /** Wowhead path such as "item=123", "spell=456", "npc=7" or "quest=8". */
  readonly path: string;
  readonly database?: "forever" | "classic";
  readonly className?: string;
  readonly children: ReactNode;
}

export function WowLink({ path, database = "forever", className, children }: WowLinkProps) {
  return (
    <a href={wowheadUrl(path, database)} target="_blank" rel="noopener" className={className}>
      {children}
    </a>
  );
}
