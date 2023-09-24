/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ShopContext } from '../context/provider';
import { Link } from "react-router-dom"







const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal, processedObject  } = useContext(ShopContext);
  const tot = getTotal();

  const stripePay = async () => {
    const lineItems = processedObject.products.map((prod) => ({
      price: parseFloat(prod.price).toFixed(2),
      quantity: prod.count,
      name: prod.name,
    }));

    try {
      const response = await fetch('https://climbing-boundless-warrior.glitch.me/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: lineItems }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.assign(data.url); // Forwarding user to Stripe
      }
    } catch (error) {
      console.error('Error while processing payment:', error);
    }
  };

  return (
    <div className="bigCheckout">
      {cart.length === 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <div className="checkout">
          <section>
          {processedObject.products.map((prod) => (
            <div className='miniSection' key={prod.id}>
              <h2>{prod.name}</h2>
              <img src={prod.image} alt="" />
              <h2>${prod.price}</h2>
              <p>{prod.description}</p>
              <div className="countHandler">
                <button onClick={() => removeFromCart(prod.id)}> - </button>
                <h2>{prod.count}</h2>
                <button onClick={() => addToCart(prod.id)}> + </button>
              </div>
            </div>
          ))}
          </section>
        
          <h1>Total : {tot.toFixed(2)} $</h1>
          <div className="checkoutBtn">
            <button><Link className="links" to="/" > Continue shopping</Link></button>
            <button onClick={stripePay}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
