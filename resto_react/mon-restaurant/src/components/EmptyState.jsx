import Button from './Button'

export default function EmptyState({ onReset }) {
  return <div className="empty-state"><h2>Aucun plat trouvé</h2><p>Essayez un autre ingrédient ou un budget plus large.</p><Button variant="secondary" onClick={onReset}>Réinitialiser les filtres</Button></div>
}
