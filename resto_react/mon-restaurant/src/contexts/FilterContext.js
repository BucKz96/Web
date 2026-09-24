import { createContext } from 'react'

export const FilterContext = createContext(null)

// État suggéré : { query: '', category: '', tag: '', maxPrice: '' }
// '' signifie « aucune restriction ». 0 est un vrai prix.
