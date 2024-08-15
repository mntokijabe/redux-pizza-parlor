import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const pizzaList = (state=[], action) => {
    if (action.type === 'SET_PIZZAS') {
      return action.payload
    }
    return state;
}

const store = createStore(
  combineReducers({
    pizzaList,
  }),
  applyMiddleware(logger),
);


export default store;
