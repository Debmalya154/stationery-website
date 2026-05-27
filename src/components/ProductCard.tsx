import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountPercent =
    product.originalPrice && product.discountedPrice
      ? Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)
      : 0;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
        {discountPercent > 0 && <div className="discount-badge">{discountPercent}% OFF</div>}
        <button className="wishlist-btn" aria-label={`Add ${product.name} to wishlist`}>
          ♥
        </button>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="stock-qty">{product.stockQuantity !== undefined ? `${product.stockQuantity} left` : ''}</div>
        <div className="product-footer">
          <div className="price-block">
            {product.discountedPrice < product.originalPrice ? (
              <>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="price">₹{product.discountedPrice}</span>
              </>
            ) : (
              <span className="price">₹{product.originalPrice}</span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className="add-btn"
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};
