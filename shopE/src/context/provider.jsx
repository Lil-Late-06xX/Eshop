/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import data from '../amazon_results'
import Bdata from '../best-sellers'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

  const [cart, setCart] = useState([]);


  // Convert the data object into an array of arrays
const dataArray = Object.values(data);

// Flatten the array of arrays to get a single array of all objects
const flattenedArray = dataArray.flat();



// Convert the data object into an array of arrays
const BdataArray = Object.values(Bdata);

// Flatten the array of arrays to get a single array of all objects
const BflattenedArray = BdataArray.flat();


const mergedArray = [...flattenedArray, ...BflattenedArray];




  const getTotal = () => {
    // Use reduce to sum the prices of all items in the cart
    const total = cart.reduce((accumulator, prod) => accumulator + prod.price, 0);
  
    return total; // Format the total to two decimal places
  };
  

  const processedObject = {
    products: cart.reduce((uniqueProducts, flattenedArray) => {
      const existingProduct = uniqueProducts.find((p) => p.id === flattenedArray.id);
  
      if (existingProduct) {
        // Increment the count of the existing product
        existingProduct.count += 1;
      } else {
        // Add a new product with a count of 1
        const newProduct = {
          ...flattenedArray,
          count: 1,
        };
        uniqueProducts.push(newProduct);
      }
  
      return uniqueProducts;
    }, []),
  };



  const addToCart = (itemId) => {
    // Find the product by ID
    const productToAdd = mergedArray.find((product) => product.id === itemId);

    if (productToAdd) {
      // Clone the cart and add the product
      const updatedCart = [...cart, productToAdd];
      setCart(updatedCart);
    }
  };




  const removeFromCart = (itemId) => {
    // Find the index of the item to remove in the cart
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
    processedObject,
    mergedArray
  };

  return (
    <ShopContext.Provider value={contextData}>
      {props.children}
    </ShopContext.Provider>
  );
};
