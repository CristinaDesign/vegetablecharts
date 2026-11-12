import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = the one main action; secondary = everything else; link = low-emphasis text action. */
  variant?: 'primary' | 'secondary' | 'link'
}

/** Button. Note: the prototype had no standalone button, so this is derived from its
 *  card/pill style (2px ink border, brown ink, leaf-green focus ring). Review it. */
export function Button({ variant = 'primary', className = '', ...rest }: ButtonProps) {
  return <button type="button" className={`cg-btn cg-btn--${variant} ${className}`} {...rest} />
}
