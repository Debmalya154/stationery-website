import React, { useState } from 'react';
import { Product } from '../types/Product';

interface AdminDashboardProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ products, setProducts }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  const handleSave = () => {
    if (editingId && formData.id) {
      setProducts(
        products.map((p) => (p.id === editingId ? (formData as Product) : p))
      );
      setEditingId(null);
      setFormData({});
    }
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: 'New Product',
      category: 'Accessories',
      originalPrice: 0,
      discountedPrice: 0,
      image: '/images/organizer.svg',
      description: 'New product description',
      inStock: true,
      stockQuantity: 0,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleAddProduct} className="add-product-btn">
          + Add New Product
        </button>
      </div>

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={editingId === product.id ? 'editing' : ''}>
                <td>
                  {editingId === product.id ? (
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td>
                  {editingId === product.id ? (
                    <input
                      type="text"
                      value={formData.category || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td>
                  {editingId === product.id ? (
                    <>
                      <input
                        type="number"
                        value={formData.originalPrice || 0}
                        onChange={(e) =>
                          setFormData({ ...formData, originalPrice: parseFloat(e.target.value) })
                        }
                        placeholder="Original"
                      />
                      <input
                        type="number"
                        value={formData.discountedPrice || 0}
                        onChange={(e) =>
                          setFormData({ ...formData, discountedPrice: parseFloat(e.target.value) })
                        }
                        placeholder="Discounted"
                      />
                    </>
                  ) : (
                    <>
                      {product.discountedPrice < product.originalPrice ? (
                        <span>
                          <s>₹{product.originalPrice}</s> <strong>₹{product.discountedPrice}</strong>
                        </span>
                      ) : (
                        `₹${product.originalPrice}`
                      )}
                    </>
                  )}
                </td>
                <td>
                  {editingId === product.id ? (
                    <>
                      <input
                        type="number"
                        value={formData.stockQuantity || 0}
                        onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value, 10) })}
                        placeholder="Quantity"
                      />
                      <select
                        value={formData.inStock ? 'in-stock' : 'out-of-stock'}
                        onChange={(e) =>
                          setFormData({ ...formData, inStock: e.target.value === 'in-stock' })
                        }
                      >
                        <option value="in-stock">In Stock</option>
                        <option value="out-of-stock">Out of Stock</option>
                      </select>
                    </>
                  ) : (
                    <span className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                      {product.inStock ? `In Stock (${product.stockQuantity ?? '—'})` : 'Out of Stock'}
                    </span>
                  )}
                </td>
                <td>
                  {editingId === product.id ? (
                    <>
                      <button onClick={handleSave} className="save-btn">
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="cancel-btn"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(product)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
