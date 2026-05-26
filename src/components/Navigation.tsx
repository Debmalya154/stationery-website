import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
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
      </div>
    </nav>
  );
};
