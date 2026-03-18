import ScrollVideo from './components/ScrollVideo'
import './App.css'

// main app layout — add new sections/components below ScrollVideo
// to build out the rest of the store (product grid, cart, footer, etc)

function App() {
  return (
    <>
      {/* scroll-animated hero background — scrubs through the skateboard animation */}
      <ScrollVideo />

      {/* placeholder section — swap this out with product grid, categories, etc */}
      <section className="content-section">
        <h2>Featured Products</h2>
        <p>Products coming soon...</p>
      </section>

      {/* add more sections here as needed:
        <ProductGrid />
        <About />
        <Footer />
      */}
    </>
  )
}

export default App
