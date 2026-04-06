import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [active, setActive] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => { setProducts(data); setLoading(false) })
      .catch(err => { setError(err.message); setLoading(false) })
  }, [])

  const categories = ['All', ...new Set(products.map(p => p.category))]
  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="product-section" id="shop">
      <div className="product-section-inner">
        <div className="section-header">
          <h2>Shop All Products</h2>
          <p>Free shipping on orders over $100</p>
        </div>

        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {loading && <p>Loading products...</p>}
          {error && <p>Error: {error}</p>}
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
