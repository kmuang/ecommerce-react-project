import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import ScrollVideo from './components/ScrollVideo'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <ScrollVideo />
      <ProductGrid />
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartProvider>
  )
}

export default App
