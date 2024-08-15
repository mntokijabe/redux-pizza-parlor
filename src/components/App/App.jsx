import React from 'react';
import axios from 'axios';

import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import OrderPizza from '../OrderPizza/OrderPizza.jsx';

function App() {
const cartTotal = useSelector(store => store.cartTotal)
let cartDisplay = () => {
  let cartRender = '';
  if (cartTotal > 0) {
  cartRender = <h2>Cart: ${cartTotal}</h2>;
  return cartRender;
} else {
  cartRender = '';
  return cartRender;
}
}
const cartRender = cartDisplay();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <div>
          {cartRender}
        </div>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <OrderPizza />
    </div>
  );
}

export default App;
