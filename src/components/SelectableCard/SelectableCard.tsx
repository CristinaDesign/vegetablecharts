import './SelectableCard.css'

export interface SelectableCardProps {
  title: string
  description?: string
  selected: boolean
  onSelect: () => void
}

/** Card you pick one of. Selected = filled and fully opaque; unselected = faded outline.
 *  Origin: the six variable cards above the chart. */
export function SelectableCard({ title, description, selected, onSelect }: SelectableCardProps) {
  return (
    <button type="button" className="vc-card" aria-pressed={selected} onClick={onSelect}>
      <b>{title}</b>
      {description && <span>{description}</span>}
    </button>
  )
}
