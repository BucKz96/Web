export default function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="container nav__inner">
        <a className="brand" href="#">Mon Restaurant<span> • </span></a>
        <a href="#menu">La carte</a>
        <a href="#footer">À propos</a>
      </div>
    </nav>
  )
}
