/** A threat line, split into the ability's name, an optional note and what it does. */
export interface Threat {
  readonly ability?: string;
  readonly note?: string;
  readonly text: string;
}

/**
 * "Polymorph (level 8): turns you into a sheep" -> ability, note, text.
 * "Frost Nova: roots you" -> ability, text. Anything else is plain text.
 */
export function splitThreat(line: string): Threat {
  const withNote = line.match(/^(.+?) \((.+?)\): (.*)$/);
  if (withNote?.[1] && withNote[2] && withNote[3] !== undefined)
    return { ability: withNote[1], note: withNote[2], text: withNote[3] };
  const plain = line.match(/^([^:]{1,40}): (.*)$/);
  if (plain?.[1] && plain[2] !== undefined) return { ability: plain[1], text: plain[2] };
  return { text: line };
}

/** "Bash: stun a healer" or "Bash (level 14)" -> "Bash" */
export const counterName = (line: string): string => line.split(/[:(]/)[0]?.trim() ?? line;
