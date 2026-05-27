import React, { useState, useMemo } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  suggestions?: string[];
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  suggestions = [],
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = useMemo(() => {
    if (!searchTerm) return [];
    return suggestions.filter((s) => s.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 6);
  }, [searchTerm, suggestions]);

  return (
    <div className="controls-container">
      <div className="search-panel">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          className="search-input"
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul className="suggestions-list">
            {filteredSuggestions.map((s) => (
              <li key={s} onMouseDown={() => onSearchChange(s)}>
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="categories-panel">
        <h4>Categories</h4>
        <ul>
          <li className={!selectedCategory ? 'active' : ''} onClick={() => onCategoryChange('')}>All</li>
          {categories.map((category) => (
            <li key={category} className={selectedCategory === category ? 'active' : ''} onClick={() => onCategoryChange(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
