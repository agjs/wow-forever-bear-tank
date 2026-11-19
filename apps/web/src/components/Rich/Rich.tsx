import { guideLinker, type Linker, linkify } from "../../lib/wowhead/index.ts";
import { WowLink } from "../WowLink/index.ts";

interface RichProps {
  readonly text: string | undefined;
  readonly linker?: Linker;
}

/** Guide text with spell, item, NPC and quest names linked to Wowhead (first mention of each). */
export function Rich({ text, linker = guideLinker }: RichProps) {
  if (!text) return null;
  let offset = 0;
  return linkify(text, linker).map((part) => {
    const key = offset;
    offset += part.text.length;
    return part.path ? (
      <WowLink key={key} path={part.path} className="wh">
        {part.text}
      </WowLink>
    ) : (
      <span key={key}>{part.text}</span>
    );
  });
}
