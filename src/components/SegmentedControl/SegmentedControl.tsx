import './SegmentedControl.css'

export interface SegmentedOption<T extends string> { value: T; label: string }

export interface SegmentedControlProps<T extends string> {
  /** Describes the choice for screen readers, e.g. "Price basis". */
  label: string
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
}

/** Pill-shaped choice between a few options; exactly one is always selected.
 *  Origin: the "Edible part / Whole, as bought" price switch above the chart. */
export function SegmentedControl<T extends string>({ label, options, value, onChange }: SegmentedControlProps<T>) {
  return (
    <div className="cg-seg" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={o.value === value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
