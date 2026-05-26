import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="product-footer">
          <span className="price">₹{product.price}</span>
          <button disabled={!product.inStock} className="add-btn">
            {product.inStock ? 'View Details' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};
