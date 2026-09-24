import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { products, categories, tags } from './data/products'
import SidebarBlock from './components/SidebarBlock'
import CategoryFilter from './components/CategoryFilter'
import PriceFilter from './components/PriceFilter'
import TagFilter from './components/TagFilter'
import SearchInput from './components/SearchInput'
import { useContext } from 'react'
import { FilterContext } from './contexts/FilterContext'
import Button from './components/Button'


export default function App() {

  const {
    filters,
    updateFilter,
    toggleTag,
    resetFilters,
  } = useContext(FilterContext)

  const visibleProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(filters.query.trim().toLowerCase())
  )

  return (
    <>
      <Header />
      <Nav />

      <main id="menu" className="container menu-layout">
        <Sidebar>
          <SidebarBlock title="Catégories">
          <CategoryFilter
            categories={categories}
            selectedCategory={filters.category}
            onChange={(category) => updateFilter('category', category)}
          />
          </SidebarBlock>

          <SidebarBlock title="Votre budget">
          <PriceFilter
            value={filters.maxPrice}
            onChange={(value) => updateFilter('maxPrice', value)}
          />
          </SidebarBlock>

          <SidebarBlock title="Ingrédients et envies">
          <TagFilter
            tags={tags}
            selectedTag={filters.tag}
            onChange={toggleTag}
          />
          </SidebarBlock>
          <Button variant="secondary" onClick={resetFilters}>
            Réinitialiser les filtres
          </Button>
        </Sidebar>

        <section aria-labelledby="menu-title">
          <h2 id="menu-title">Notre carte</h2>

          <SearchInput
            value={filters.query}
            onChange={(value) => updateFilter('query', value)}
          />
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedTag={filters.tag}
                onTagClick={toggleTag}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}