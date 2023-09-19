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
    const { id, name, price, description, image } = data;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
     // Generate a random star rating between 1 and 5
    const rating = getRandomInt(1, 5);

  // Create an array of stars based on the rating
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} />);
  }
  return (
    <div className='best-sell'>
    <h2>{name}</h2>
    <img src={image} alt="no img data" />
    <p>${price}</p>
    <h5>{description}</h5>
    <div className='rating'>
      <p>
        {stars} ({getRandomInt(40,234)} reviews)
      </p>
    </div>
    <button onClick={() => addToCart(id)} className='btn-add'>
      Add To cart ({count})
    </button>
  </div>
  )
}

export default Bestseller