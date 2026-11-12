import './Switch.css'

export interface SwitchProps {
  /** Visible label next to the switch. Also read by screen readers. */
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  /** Optional icons shown on the knob: off state and on state (e.g. sun / moon). */
  iconOff?: React.ReactNode
  iconOn?: React.ReactNode
  disabled?: boolean
}

/** On/off switch. Origin: the light/dark mode toggle in the Vegetable Chart header. */
export function Switch({ label, checked, onChange, iconOff, iconOn, disabled }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className="cg-switch"
      onClick={() => onChange(!checked)}
    >
      <span className="cg-switch__track">
        <span className="cg-switch__knob">{checked ? iconOn : iconOff}</span>
      </span>
      <span className="cg-switch__label">{label}</span>
    </button>
  )
}
