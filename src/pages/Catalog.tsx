import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { Product } from '../types/Product';

interface CatalogProps {
  products: Product[];
}

export const Catalog: React.FC<CatalogProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('any');

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const suggestions = products.map((p) => p.name);

  const newArrivals = products.filter((p) => p.isNewArrival);
  const clearanceItems = products.filter((p) => p.isClearance);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesAvailability =
          filterAvailability === 'any' || (filterAvailability === 'in' ? product.inStock : !product.inStock);
        return matchesSearch && matchesCategory && matchesAvailability;
      })
      .sort((a, b) => {
        if (sortBy === 'low-high') return a.discountedPrice - b.discountedPrice;
        if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
        return 0;
      });
  }, [products, searchTerm, selectedCategory, sortBy, filterAvailability]);

  return (
    <div className="catalog-page">
      <div className="page-header">
        <h1>Stationery Catalog</h1>
        <p>Browse our collection of quality stationery items</p>
      </div>

      <div className="controls-row">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          suggestions={suggestions}
        />

        <div className="filters-row">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort</option>
            <option value="low-high">Price: Low - High</option>
            <option value="newest">Newest Arrivals</option>
          </select>
          <select value={filterAvailability} onChange={(e) => setFilterAvailability(e.target.value)}>
            <option value="any">Any Availability</option>
            <option value="in">In Stock</option>
            <option value="out">Out of Stock</option>
          </select>
        </div>
      </div>

      {newArrivals.length > 0 && (
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <div className="products-grid">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {clearanceItems.length > 0 && (
        <section className="clearance">
          <h2>Clearance Sale</h2>
          <div className="products-grid">
            {clearanceItems.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

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
