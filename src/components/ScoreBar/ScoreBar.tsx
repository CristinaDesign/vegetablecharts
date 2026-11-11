import './ScoreBar.css'

export interface ScoreBarProps {
  label: string
  value: number
  /** Value that fills the bar completely. Defaults to 100. */
  max?: number
}

/** Horizontal bar showing a score out of a maximum. Origin: the "1 € best buys" ranking. */
export function ScoreBar({ label, value, max = 100 }: ScoreBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="vc-score">
      <span className="vc-score__label">{label}</span>
      <div className="vc-score__track" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
        <div className="vc-score__bar" style={{ width: `${pct}%` }} />
      </div>
      <span className="vc-score__value">{value}</span>
    </div>
  )
}
