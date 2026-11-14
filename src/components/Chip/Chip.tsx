import { Icon, type IconName } from '../Icon'
import './Chip.css'

export type ChipTone = 'outline' | 'solid' | 'dashed'

export interface ChipProps {
  /** outline = a fact or a count. solid = a label that stands out. dashed = provisional or estimated. */
  tone?: ChipTone
  /** Optional icon shown before the words. */
  icon?: IconName
  /** Short words. Wrap a number in <b> to show it larger, for example: <b>10</b> questions. */
  children: React.ReactNode
}

/** Small pill of text for a fact, a count or a short label. It is not clickable.
 *  The dashed tone is for provisional or estimated information, and the words must say so:
 *  the dashed line alone never carries the meaning. */
export function Chip({ tone = 'outline', icon, children }: ChipProps) {
  return (
    <span className={tone === 'outline' ? 'cg-chip' : `cg-chip cg-chip--${tone}`}>
      {icon && <Icon name={icon} size={16} />}
      {children}
    </span>
  )
}
