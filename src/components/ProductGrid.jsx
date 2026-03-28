import { useState } from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'
import './ProductGrid.css'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function ProductGrid() {
  const [active, setActive] = useState('All')

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
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
