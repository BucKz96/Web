export const initialState = []

// SQUELETTE DU DÉFI : les actions ne font encore rien.
// Ne modifie jamais state ou ses objets directement.
export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // TODO : action.product. Déjà présent → +1 ; sinon nouvelle ligne.
      return state
    case 'REMOVE_ITEM':
      // TODO : action.productId. Absent → inchangé ; quantité 1 → supprimer ; sinon −1.
      return state
    default:
      return state
  }
}
