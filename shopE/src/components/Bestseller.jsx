/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillStar } from 'react-icons/ai'; 
import React, { useContext } from 'react';
import { ShopContext } from '../context/provider';
import '../components/css/Bestseller.css';


const Bestseller = ({ data }) => {
    const {addToCart, processedObject } = useContext(ShopContext);
    const productInCart = processedObject.products.find((product) => product.id === data.id);
    const count = productInCart ? productInCart.count : 0;
    const { id, name, price, description, image ,reviewCount ,rating } = data;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
     // Generate a random star rating between 1 and 5
   // const rating = getRandomInt(1, 5);

  // Create an array of stars based on the rating

  return (
    <div className='best-sell'>
   
    <img src={image} alt="no img data" />
    <p>${price}</p>
    <h5>{description}</h5>
    <div className='rating'>
    <p>
        {rating} <AiFillStar/>
        {reviewCount}
        </p>
    </div>
    <button onClick={() => addToCart(id)} className='btn-add'>
      Add To cart ({count})
    </button>
  </div>
  )
}

export default Bestseller