import Button from './Button'
import { formatPrice } from '../utils/formatPrice'

// Une ligne : { product: { id, title, price, ... }, quantity: 2 }
export default function CartItem({ item, onAdd, onRemove }) {
  const { product, quantity } = item
  return (
    <li className="cart-item">
      <div><h3>{product.title}</h3><small>{formatPrice(product.price)} / unité</small></div>
      <div className="quantity-control">
        <Button variant="secondary" disabled={quantity <= 0} aria-label={`Retirer un ${product.title}`} onClick={() => onRemove?.(product.id)}>−</Button>
        <span aria-label="Quantité">{quantity}</span>
        <Button variant="secondary" aria-label={`Ajouter un ${product.title}`} onClick={() => onAdd?.(product)}>+</Button>
      </div>
      <strong>{formatPrice(product.price * quantity)}</strong>
    </li>
  )
}
