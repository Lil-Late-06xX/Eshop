/* eslint-disable no-unused-vars */
import React from 'react';
import '../components/css/MainContent.css'
import '../components/ShoppingCategoriesDropdown'
import ShoppingCategoriesDropdown from '../components/ShoppingCategoriesDropdown';
import '../components/css/dropdown.css'

function MainContent() {
  return (
    <div className="main">
      {/* Your main content goes here */}
      <ShoppingCategoriesDropdown/>
      <div className="newcollectio">
        <p>Explore our</p> <h4>New Collection</h4> <p>of products and enjoy shopping!</p>
      </div>
      
    </div>
  );
}

export default MainContent;
