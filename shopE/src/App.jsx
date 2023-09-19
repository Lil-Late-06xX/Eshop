/* eslint-disable no-unused-vars */
import Header from './components/Header'
import React from 'react';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import {  BrowserRouter as  Router , Routes , Route } from "react-router-dom"
import './css/App.css'
import './Pages/css/cart.css'
import { ShopContextProvider } from './context/provider';

function App() {


  return (
    <>
  <ShopContextProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Shop/>}  ></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          
        </Router>
  </ShopContextProvider>
    </>
  )
}

export default App
