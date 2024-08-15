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
  return state;
}

const cartTotal = (state=0, action) => {
  if (action.type === 'ADD_CART_TOTAL'){
    let cartTotal = Math.round((state + Number(action.payload))*100)/100;
    return cartTotal;
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzaList,
    cart,
    cartTotal
  }),
  applyMiddleware(logger),
);


export default store;
