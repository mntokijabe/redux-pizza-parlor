import React from 'react';
import axios from 'axios';
import './App.css';
import Nav from '../Nav/Nav.jsx';
// import Checkout from '...Checkout/Checkout.jsx';
// import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
// import OrderPizza from '../OrderPizza/OrderPizza.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Nav />
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/orderPizza">
              <OrderPizza />
          </Route>
          <Route exact path="/customerInfo">
              <CustomerInfo />
          </Route>
          <Route exact path="/checkout">
              <Checkout />
          </Route>
      </Router>

  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
