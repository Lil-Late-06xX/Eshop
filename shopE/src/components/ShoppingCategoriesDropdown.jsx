/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ShoppingCategoriesDropdown = () => {
  // Define shopping categories (you can replace these with your own categories)
  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Toys',
  ];

  // Initialize state to store the selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="shopping-dropdown">
      <label htmlFor="categorySelect">Categories:</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
         <option value="">-- Select Category --</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <p className="selected-category"> <h1>Shop split to categories coming Soon...</h1>Selected Category: {selectedCategory}</p>
      )}
    </div>
  );
};

export default ShoppingCategoriesDropdown;






 