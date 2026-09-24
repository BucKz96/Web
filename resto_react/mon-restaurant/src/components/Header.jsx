// Passe <Cart ... /> dans children lorsque tu branches le panier.
export default function Header({ children }) {
  return (
    <header className="hero">
      <div className="container hero__inner">
        <div className="hero__actions">{children}</div>
        <p className="eyebrow">FAIT AVEC ENVIE · SERVI AVEC LE SOURIRE</p>
        <h1>Mon Restaurant</h1>
        <p>Les classiques que vous aimez, à la carte.</p>
      </div>
    </header>
  )
}
