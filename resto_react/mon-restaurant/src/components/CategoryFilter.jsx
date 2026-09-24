export default function CategoryFilter({ categories = [], selectedCategory = '', onChange }) {
  return (
    <div className="category-list">
      {['', ...categories].map((category) => (
        <button type="button" key={category || 'all'} aria-pressed={selectedCategory === category}
          className={selectedCategory === category ? 'is-active' : ''}
          onClick={() => onChange?.(category)}>
          {category || 'Tout le menu'}<span aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  )
}
