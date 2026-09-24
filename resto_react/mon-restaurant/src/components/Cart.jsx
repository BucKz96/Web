import Button from './Button'

export default function Cart({ count = 0, onOpen }) {
  return <Button variant="light" onClick={onOpen} aria-label={`Ouvrir le panier, ${count} article${count > 1 ? 's' : ''}`} aria-haspopup="dialog">Panier <span className="cart-count">{count}</span></Button>
}
