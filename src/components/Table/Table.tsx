import './Table.css'

export interface TableProps {
  /** Column headings. The first column is text (left); the rest are numbers (right). */
  columns: string[]
  rows: (string | number)[][]
  caption?: string
}

/** Data table with right-aligned tabular numbers. Origin: the full data table. */
export function Table({ columns, rows, caption }: TableProps) {
  return (
    <div className="cg-table">
      <table>
        {caption && <caption className="cg-sr-only">{caption}</caption>}
        <thead><tr>{columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  )
}
