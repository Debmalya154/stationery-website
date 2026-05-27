import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface NavigationProps {
  cartCount: number;
  cartItems: Array<{ product: Product; quantity: number }>;
}

export const Navigation: React.FC<NavigationProps> = ({ cartCount, cartItems }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">📝 Stationery Shop</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Catalog</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        </ul>
        <div className="cart-preview-wrapper">
          <button className="cart-icon" type="button">
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
          <div className="cart-dropdown">
            <div className="cart-dropdown-header">Cart Preview</div>
            {cartItems.length === 0 ? (
              <div className="cart-empty">Your cart is empty</div>
            ) : (
              <ul className="cart-items-list">
                {cartItems.map(({ product, quantity }) => (
                  <li key={product.id} className="cart-item">
                    <span>{product.name}</span>
                    <span>{quantity}× ₹{product.discountedPrice}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
