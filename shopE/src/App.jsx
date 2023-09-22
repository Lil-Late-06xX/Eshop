/* eslint-disable no-unused-vars */
import Header from './components/Header'
import React from 'react';
import Shop from './Pages/Shop';
import Singin from './Pages/Singin';
import Cart from './Pages/Cart';
import {  BrowserRouter as  Router , Routes , Route } from "react-router-dom"
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
            <Route path='/signin' element={<Singin/>}></Route>
          </Routes>
          
        </Router>
  </ShopContextProvider>
    </>
  )
}

export default App
