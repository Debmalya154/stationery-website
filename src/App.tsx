import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Catalog } from './pages/Catalog';
import { AdminDashboard } from './pages/AdminDashboard';
import { Product } from './types/Product';
import './App.css';

// Sample product data
const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Blue Ballpoint Pen',
    category: 'Pens',
    originalPrice: 59,
    discountedPrice: 49,
    image: '/images/pen.svg',
    description: 'Smooth writing ballpoint pen with blue ink',
    inStock: true,
    stockQuantity: 120,
    isNewArrival: true,
    rating: 4.2,
    reviews: [],
  },
  {
    id: '2',
    name: 'Lined Notebook',
    category: 'Notebooks',
    originalPrice: 149,
    discountedPrice: 149,
    image: '/images/notebook.svg',
    description: 'A4 lined notebook, 100 pages',
    inStock: true,
    stockQuantity: 60,
  },
  {
    id: '3',
    name: 'Sticky Notes Set',
    category: 'Accessories',
    originalPrice: 100,
    discountedPrice: 87,
    image: '/images/sticky-notes.svg',
    description: 'Colorful sticky notes, pack of 5',
    inStock: true,
    stockQuantity: 200,
    isClearance: true,
  },
  {
    id: '4',
    name: 'Desk Highlighter',
    category: 'Markers',
    originalPrice: 75,
    discountedPrice: 75,
    image: '/images/highlighter.svg',
    description: 'Neon yellow highlighter marker',
    inStock: false,
    stockQuantity: 0,
  },
  {
    id: '5',
    name: 'Pencil Set',
    category: 'Pencils',
    originalPrice: 250,
    discountedPrice: 225,
    image: '/images/pencil-set.svg',
    description: 'Professional graphite pencil set',
    inStock: true,
    stockQuantity: 35,
    isNewArrival: true,
  },
  {
    id: '6',
    name: 'Desk Organizer',
    category: 'Storage',
    originalPrice: 350,
    discountedPrice: 325,
    image: '/images/organizer.svg',
    description: 'Desktop organizer with compartments',
    inStock: true,
    stockQuantity: 15,
  },
];

function App() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cartItems, setCartItems] = useState<Array<{ product: Product; quantity: number }>>([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div className="app">
        <Navigation cartCount={cartCount} cartItems={cartItems} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Catalog products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/admin" element={<AdminDashboard products={products} setProducts={setProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
