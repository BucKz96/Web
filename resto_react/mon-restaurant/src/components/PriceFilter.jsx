import { useId } from 'react'

export default function PriceFilter({ value = '', onChange }) {
  const id = useId()
  return (
    <div className="field">
      <label htmlFor={id}>Prix maximum (€)</label>
      <input id={id} type="number" min="0" step="0.5" placeholder="Sans limite" value={value}
        onChange={(event) => onChange?.(event.target.value)} />
      <small className="muted">Laisse vide pour tous les prix.</small>
    </div>
  )
}
