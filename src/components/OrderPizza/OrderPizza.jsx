import PizzaItem from "../PizzaItem/PizzaItem.jsx";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
function OrderPizza() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getPizzas();
    }, [])

    const getPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
            .then((response) => {
                console.log('response.data is:', response.data)
                const pizzas = response.data;

                dispatch({
                    type: 'SET_PIZZAS',
                    payload: pizzas
                })
            })
            .catch((err) => {
                console.log('error on GET', err)
            })
    }

    const nextStep = () => {
        history.push('/customerInfo');
    }

    const pizzaList = useSelector(store => store.pizzaList)
    return (
        <div id="pizza-list">
            {pizzaList.map((pizza) => {
                return (
                    <PizzaItem
                    key={pizza.id}
                    getPizzas={getPizzas}
                    pizza={pizza} />
                )
            })}
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
export default OrderPizza;