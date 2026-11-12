import './Disclosure.css'

export interface DisclosureProps { summary: string; children: React.ReactNode; defaultOpen?: boolean }

/** Show/hide section built on the native details element (keyboard and screen reader support for free).
 *  Origin: "Show all data as a table". */
export function Disclosure({ summary, children, defaultOpen }: DisclosureProps) {
  return (
    <details className="cg-disclosure" open={defaultOpen}>
      <summary>{summary}</summary>
      <div className="cg-disclosure__body">{children}</div>
    </details>
  )
}
