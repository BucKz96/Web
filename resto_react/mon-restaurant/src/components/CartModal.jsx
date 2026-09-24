import { useEffect, useId, useRef } from 'react'
import Button from './Button'
import { formatPrice } from '../utils/formatPrice'

// L'état isOpen (useState) et les lignes CartItem sont à brancher par toi.
// Le dialog natif gère le focus et la navigation au clavier.
export default function CartModal({ isOpen = false, onClose, total = 0, children }) {
  const dialogRef = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <dialog className="cart-modal" ref={dialogRef} aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose?.() }}>
      <div className="cart-modal__heading"><h2 id={titleId}>Votre panier</h2><Button variant="secondary" onClick={onClose} aria-label="Fermer le panier">×</Button></div>
      {children || <p className="muted">Votre panier est vide. Une petite faim ?</p>}
      <div className="cart-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
      <Button onClick={onClose}>Continuer ma sélection</Button>
    </dialog>
  )
}
