/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import products from '../products';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const [cart, setCart] = useState([]);



  const getTotal = () => {
    // Use reduce to sum the prices of all items in the cart
    const total = cart.reduce((accumulator, prod) => accumulator + prod.price, 0);
  
    return total.toFixed(2); // Format the total to two decimal places
  };
  

  const processedObject = {
    products: cart.reduce((uniqueProducts, product) => {
      const existingProduct = uniqueProducts.find((p) => p.id === product.id);
  
      if (existingProduct) {
        // Increment the count of the existing product
        existingProduct.count += 1;
      } else {
        // Add a new product with a count of 1
        const newProduct = {
          ...product,
          count: 1,
        };
        uniqueProducts.push(newProduct);
      }
  
      return uniqueProducts;
    }, []),
  };



  const addToCart = (itemId) => {
    // Find the product by ID
    const productToAdd = products.find((product) => product.id === itemId);

    if (productToAdd) {
      // Clone the cart and add the product
      const updatedCart = [...cart, productToAdd];
      setCart(updatedCart);
    }
  };

  const removeFromCart = (itemId) => {
    // Find the index of the item to remove
    const itemIndex = cart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Clone the cart, remove the item by index, and set the updated cart
      const updatedCart = [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)];
      setCart(updatedCart);
    
    }
  };



  const contextData = {
    cart,
    addToCart,
    removeFromCart,
    getTotal,
    processedObject
  };

  return (
    <ShopContext.Provider value={contextData}>
      {props.children}
    </ShopContext.Provider>
  );
};
