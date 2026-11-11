import './Select.css'

export interface SelectOption { value: string; label: string }
export interface SelectProps {
  /** Describes the dropdown for screen readers. */
  label: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

/** Dropdown. Origin: the variable picker shown on phones in the Vegetable Chart. */
export function Select({ label, options, value, onChange, disabled }: SelectProps) {
  return (
    <select className="vc-select" aria-label={label} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}
