import './LegendMarker.css'

export interface LegendMarkerProps {
  /** solid = official data; estimated = dashed double ring. */
  kind: 'official' | 'estimated'
  label: string
}

/** Small dot plus label explaining a chart marker. Origin: the chart legend. */
export function LegendMarker({ kind, label }: LegendMarkerProps) {
  return (
    <span className="vc-legend">
      <i className={kind === 'estimated' ? 'vc-legend__dot vc-legend__dot--est' : 'vc-legend__dot'} aria-hidden="true" />
      {label}
    </span>
  )
}
