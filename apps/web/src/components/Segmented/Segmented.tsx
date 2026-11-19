interface SegmentedProps<T extends string> {
  readonly options: readonly (readonly [value: T, label: string])[];
  readonly value: T;
  readonly onChange: (value: T) => void;
  readonly label: string;
}

/** A row of buttons where exactly one is selected. */
export function Segmented<T extends string>({ options, value, onChange, label }: SegmentedProps<T>) {
  return (
    <fieldset className="seg" aria-label={label}>
      {options.map(([option, text]) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === value}
          className={option === value ? "on" : ""}
          onClick={() => onChange(option)}
        >
          {text}
        </button>
      ))}
    </fieldset>
  );
}
