import { useEffect, useState } from "react";
import { MAX_LEVEL, MIN_LEVEL, useLevel } from "../../lib/level/index.ts";

/** The level picker in the header. Every section on the site follows it. */
export function LevelStepper() {
  const [level, setLevel] = useLevel();
  const [draft, setDraft] = useState(String(level));
  useEffect(() => setDraft(String(level)), [level]);

  return (
    <fieldset className="stepper" aria-label="Your level">
      <button type="button" aria-label="Level down" onClick={() => setLevel(level - 1)}>
        −
      </button>
      <div className="lv">
        <small>LEVEL</small>
        <input
          type="number"
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          inputMode="numeric"
          aria-label="Your character level"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={() => setLevel(Number(draft))}
          onKeyDown={(event) => {
            if (event.key === "Enter") setLevel(Number(draft));
          }}
        />
      </div>
      <button type="button" aria-label="Level up" onClick={() => setLevel(level + 1)}>
        +
      </button>
    </fieldset>
  );
}
