import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { ShopContext } from '../context/provider';
import './css/header.css'; // You can create a CSS file for styling




function Header() {
  const { cart } = useContext(ShopContext);
  const arrayLength = cart.length;

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
        <input type="text" className="header__searchInput" />
        <button className="header__searchIcon fas fa-search">Search items</button>
        </div>


      {/* Navigation */}
      <div className="header__nav">
        {/* Sign in */}
        <Link className="links header__option" to="/" >Sign in  </Link>



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



