import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import ProductList from './components/ProductList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path='/'
          element=<ProductList
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        />
        <Route
          path='/category/:category'
          element={
            <ProductList cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path='/cart'
          element=<Cart cartItems={cartItems} setCartItems={setCartItems} />
        />
        <Route
          path='/checkout'
          element={
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        {/* <Route path='/thankyou' element={ThankYou} />
         */}
        <Route path='/thankyou' element={<ThankYou />} />
      </Routes>
    </>
  );
};

export default App;
