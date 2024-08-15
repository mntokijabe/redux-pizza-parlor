import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const addCustomer = (state = [], action) => {
if(action.type === 'ADD_CUSTOMER') {
  let currentCustomer = [action.payload];
  return currentCustomer
}
  return state;
}

const store = createStore(
  combineReducers({
    addCustomer, 
  }),
  applyMiddleware(logger),
);


export default store;
