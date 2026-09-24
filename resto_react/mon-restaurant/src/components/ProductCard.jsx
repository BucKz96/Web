import Button from './Button'
import Tag from './Tag'
import { formatPrice } from '../utils/formatPrice'

// Les callbacks seront fournis par ton application.
export default function ProductCard({ product, quantity = 0, selectedTag = '', onTagClick, onAdd, onRemove }) {
  return (
    <article className="product-card">
      <div className="product-card__visual">
        {product.image ? <img src={product.image} alt={product.title} loading="lazy" /> : <span aria-hidden="true">{product.emoji}</span>}
        <span className="product-card__category">{product.category}</span>
      </div>
      <div className="product-card__body">
        <div className="product-card__heading"><h3>{product.title}</h3><strong>{formatPrice(product.price)}</strong></div>
        <p className="product-card__description">{product.description}</p>
        <div className="tags">{product.tags.map((tag) => <Tag key={tag} label={tag} active={selectedTag === tag} onClick={onTagClick} />)}</div>
        <div className="product-card__actions">
          <Button onClick={() => onAdd?.(product)}>Ajouter au panier</Button>
          {onRemove && <Button variant="secondary" disabled={quantity <= 0} onClick={() => onRemove(product.id)}>Retirer un article</Button>}
        </div>
        {quantity > 0 && <small className="quantity-note">{quantity} dans votre panier</small>}
      </div>
    </article>
  )
}
