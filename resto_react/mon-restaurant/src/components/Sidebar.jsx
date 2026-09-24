// Assemble les différents blocs en les passant dans children.
export default function Sidebar({ children }) {
  return <aside className="sidebar" aria-label="Filtres du menu">{children}</aside>
}
