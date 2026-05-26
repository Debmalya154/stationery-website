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
    price: 49,
    image: '/images/pen.svg',
    description: 'Smooth writing ballpoint pen with blue ink',
    inStock: true,
  },
  {
    id: '2',
    name: 'Lined Notebook',
    category: 'Notebooks',
    price: 149,
    image: '/images/notebook.svg',
    description: 'A4 lined notebook, 100 pages',
    inStock: true,
  },
  {
    id: '3',
    name: 'Sticky Notes Set',
    category: 'Accessories',
    price: 87,
    image: '/images/sticky-notes.svg',
    description: 'Colorful sticky notes, pack of 5',
    inStock: true,
  },
  {
    id: '4',
    name: 'Desk Highlighter',
    category: 'Markers',
    price: 75,
    image: '/images/highlighter.svg',
    description: 'Neon yellow highlighter marker',
    inStock: false,
  },
  {
    id: '5',
    name: 'Pencil Set',
    category: 'Pencils',
    price: 225,
    image: '/images/pencil-set.svg',
    description: 'Professional graphite pencil set',
    inStock: true,
  },
  {
    id: '6',
    name: 'Desk Organizer',
    category: 'Storage',
    price: 325,
    image: '/images/organizer.svg',
    description: 'Desktop organizer with compartments',
    inStock: true,
  },
];

function App() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Catalog products={products} />} />
            <Route path="/admin" element={<AdminDashboard products={products} setProducts={setProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
