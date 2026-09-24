export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p className="brand">Mon Restaurant</p>
        <p>Une petite faim, un grand plaisir.</p>
        <small>© {new Date().getFullYear()} Mon Restaurant. Tous droits réservés.</small>
      </div>
    </footer>
  )
}
