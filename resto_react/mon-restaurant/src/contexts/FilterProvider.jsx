import { useState } from 'react'
import { FilterContext } from './FilterContext'
import { products } from '../data/products'



const initialFilters = {
  query: '',
  category: '',
  tag: '',
  maxPrice: '',
}

function normalizeText(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export default function FilterProvider({ children }) {

  const [filters, setFilters] = useState(initialFilters)

  function updateFilter(name, value) {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value,
    }))
  }

  function toggleTag(tag) {
    setFilters((previousFilters) => ({
      ...previousFilters,
      tag: previousFilters.tag === tag ? '' : tag,
    }))
  }

  function resetFilters() {
    setFilters(initialFilters)
  }

  const normalizedQuery = normalizeText(filters.query)

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      filters.category === '' ||
      product.category === filters.category

    const matchesTag =
      filters.tag === '' ||
      product.tags.includes(filters.tag)

    const matchesPrice =
      filters.maxPrice === '' ||
      product.price <= Number(filters.maxPrice)

    const searchableText = normalizeText(
      [
        product.title,
        product.category,
        ...product.keywords,
        ...product.tags,
      ].join(' ')
    )

    const matchesQuery =
      searchableText.includes(normalizedQuery)

    return (
      matchesCategory &&
      matchesTag &&
      matchesPrice &&
      matchesQuery
    )
  })

  return (
    <FilterContext.Provider
      value={{
        filters,
        updateFilter,
        toggleTag,
        resetFilters,
        visibleProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
