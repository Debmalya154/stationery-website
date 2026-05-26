import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { Product } from '../types/Product';

interface CatalogProps {
  products: Product[];
}

export const Catalog: React.FC<CatalogProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="catalog-page">
      <div className="page-header">
        <h1>Stationery Catalog</h1>
        <p>Browse our collection of quality stationery items</p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">No products found</div>
        )}
      </div>
    </div>
  );
};
