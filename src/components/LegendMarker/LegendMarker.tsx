import './LegendMarker.css'

export interface LegendMarkerProps {
  /** solid = official data; estimated = dashed double ring. */
  kind: 'official' | 'estimated'
  label: string
}

/** Small dot plus label explaining a chart marker. Origin: the chart legend. */
export function LegendMarker({ kind, label }: LegendMarkerProps) {
  return (
    <span className="cg-legend">
      <i className={kind === 'estimated' ? 'cg-legend__dot cg-legend__dot--est' : 'cg-legend__dot'} aria-hidden="true" />
      {label}
    </span>
  )
}
