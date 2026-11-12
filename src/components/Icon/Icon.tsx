import { icons, type IconName } from './icons'
import './Icon.css'

export const DEFAULT_ICON_SIZE = 24

export interface IconProps {
  name: IconName
  /** Width and height in px. Default 24. Use 16, 24 or 32. */
  size?: number
  /** Accessible name. If the icon sits next to words that say the same thing, leave this out:
   *  it is then hidden from screen readers. For an icon that stands alone, always set it. */
  label?: string
}

/** Material Design icon (outlined). Takes the colour of the surrounding text (currentColor). */
export function Icon({ name, size = DEFAULT_ICON_SIZE, label }: IconProps) {
  return (
    <svg
      className="cg-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {icons[name].map((d, i) => <path key={i} d={d} />)}
    </svg>
  )
}
