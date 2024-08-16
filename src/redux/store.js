import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaList = (state=[], action) => {
    if (action.type === 'SET_PIZZAS') {
      return action.payload
    }
    return state;
}

const cart = (state=[], action) => {
  if (action.type === 'ADD_TO_CART') {
      let newCart = [...state, action.payload]
      return newCart;
  }
  else if (action.type === 'EMPTY_CART'){
    let cartTotal= action.payload;
    return cartTotal;  
  }
  return state;
}

const cartTotal = (state=0, action) => {
  if (action.type === 'ADD_CART_TOTAL'){
    let cartTotal = Math.round((state + Number(action.payload))*100)/100;
    return cartTotal;
  }
  else if (action.type === 'CLEAR_CART_TOTAL'){
    let cartTotal= action.payload;
    return cartTotal;  
  }
  return state;
}

const customerInfo = (state = [], action) => {
if(action.type === 'ADD_CUSTOMER') {
  let currentCustomer = [action.payload];
  return currentCustomer
}
else if (action.type === 'CLEAR_CUSTOMER'){
  let cartTotal= action.payload;
  return cartTotal;  
}
  return state;
}

const store = createStore(
  combineReducers({
    pizzaList,
    cart,
    cartTotal,
    customerInfo, 
  }),
  applyMiddleware(logger),
);


export default store;
