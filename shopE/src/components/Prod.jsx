/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from '../context/provider';
import { AiFillStar } from 'react-icons/ai'; // Import the star icon
import '../components/css/prod.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Prod = ({ data }) => {
  const {addToCart, processedObject } = useContext(ShopContext);

  // Find the product in the cart to get its count
  const productInCart = processedObject.products.find((product) => product.id === data.id);
  const count = productInCart ? productInCart.count : 0;



  const { id, name, price, description, image ,reviewCount ,rating  } = data;



  // Generate a random star rating between 1 and 5
  // const rating = getRandomInt(1, 5);

  // Create an array of stars based on the rating
 /* const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} />);
  } */

  return (
    <div className='productBox'>
      
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
  );
};

export default Prod;

