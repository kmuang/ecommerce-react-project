import { useCart } from '../context/CartContext'
import './Cart.css'

export default function Cart({ open, onClose }) {
  const { items, total, dispatch } = useCart()

  return (
    <>
      {/* backdrop */}
      <div className={`cart-backdrop${open ? ' visible' : ''}`} onClick={onClose} />

      <aside className={`cart-drawer${open ? ' open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>Your cart is empty</p>
            <button className="continue-btn" onClick={onClose}>Continue shopping</button>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                    <div className="qty-controls">
                      <button onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}>+</button>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch({ type: 'REMOVE', id: item.id })}
                    aria-label="Remove item"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="cart-note">Shipping & taxes calculated at checkout</p>
              <button className="checkout-btn">Checkout →</button>
              <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR' })}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
