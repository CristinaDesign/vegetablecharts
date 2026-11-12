import { Icon, type IconName } from '../Icon'
import './Banner.css'

export type BannerVariant = 'error' | 'warning' | 'success' | 'info'

export interface BannerProps {
  variant: BannerVariant
  /** Short heading. Optional, but recommended when the message has more than one sentence. */
  title?: string
  /** The message itself: say what happened and what to do next. */
  children: React.ReactNode
  /** If given, a close button appears. The page decides what happens on close. */
  onDismiss?: () => void
}

const iconFor: Record<BannerVariant, IconName> = {
  error: 'error', warning: 'warning', success: 'check_circle', info: 'info',
}

/** Message banner. Always shows an icon and words together, so the status never depends on colour alone.
 *  Errors are announced to screen readers immediately; the others politely. */
export function Banner({ variant, title, children, onDismiss }: BannerProps) {
  return (
    <div className={`cg-banner cg-banner--${variant}`} role={variant === 'error' ? 'alert' : 'status'}>
      <span className="cg-banner__icon"><Icon name={iconFor[variant]} /></span>
      <div className="cg-banner__body">
        {title && <strong className="cg-banner__title">{title}</strong>}
        <div>{children}</div>
      </div>
      {onDismiss && (
        <button type="button" className="cg-banner__close" onClick={onDismiss} aria-label="Dismiss message">
          <Icon name="close" />
        </button>
      )}
    </div>
  )
}
