/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { ShopContext } from '../context/provider';
import './css/header.css'; // You can create a CSS file for styling
import Prod from '../components/Prod'
import { useState } from "react";




function Header() {
  const { cart , mergedArray} = useContext(ShopContext);
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [searchResults, setSearchResults] = useState([]);
  const arrayLength = cart.length;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to log the input field value when the button is clicked
  const handleButtonClick = () => {
    const lowerCaseInputValue = inputValue.toLowerCase(); // Convert input to lowercase
    const results = mergedArray.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseInputValue)
    ); // Convert item name to lowercase and check for inclusion
    setSearchResults(results);
    setShowModal(true);
    setInputValue('');
  };
  











  return (
    <div className="header">
      {/* Amazon logo */}
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="Amazon Logo"
      />

        {/* Search bar */} 
        <div className="input">
        <input type="text" value={inputValue} onChange={handleInputChange} className="header__searchInput" />
        <button onClick={handleButtonClick} className="header__searchIcon fas fa-search">Search items...</button>
        </div>

        {showModal && (
  <div className="modal modal-show">
    <div className="modal-content">
      <div className="prodmodel">
        {searchResults.length === 0 ? (
          <h1>No results found.</h1>
        ) : (
          searchResults.map((result) => (
            <Prod key={result.id} data={result} />
          ))
        )}
      </div>
      <button className="closebtn" onClick={() => setShowModal(false)}>Close</button>
    </div>
  </div>
)}




      {/* Navigation */}
      <div className="header__nav">
        {/* Sign in */}
        <Link className="links header__option" to="/signin" >Sign in  </Link>



        <div className="header__option">
          <Link className="links" to="/" > Shop</Link>
        </div>

        {/* Cart */}
        <div className="header__optionCart">
          <i className="header__cartIcon fas fa-shopping-cart"></i>
          <div className="cartcount">
          <Link className="links"  to="/cart" > <AiOutlineShoppingCart  size={35}/></Link>
          <p>({arrayLength})</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;



