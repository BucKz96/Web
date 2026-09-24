import { useId } from 'react'

export default function SearchInput({ value = '', onChange }) {
  const id = useId()
  return (
    <div className="field search-field">
      <label htmlFor={id}>Qu’est-ce qui vous ferait plaisir ?</label>
      <input id={id} type="search" placeholder="Un plat, une catégorie, un ingrédient…" value={value}
        onChange={(event) => onChange?.(event.target.value)} />
    </div>
  )
}
