import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function PizzaItem({getPizzas, pizza}) {
    const [buttonDecision, setButtonDecision] = useState(true)
    const dispatch = useDispatch();
let cart = useSelector(store => store.cart)
let buttonAction = true;
let decidedButton;

    const addToCart = () =>{
        let cartTotaltoAdd = pizza.price;
        let pizzaToAdd = {id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1}
        
        dispatch({
            type: 'ADD_CART_TOTAL',
            payload: cartTotaltoAdd
        })

        dispatch({
            type: 'ADD_TO_CART',
            payload: pizzaToAdd
        })
        setButtonDecision(false);
    }

    const removeFromCart = () => {
        let pizzatoRemove = pizza.id
        let cartTotaltoRemove = pizza.price

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: pizzatoRemove
        })

        dispatch({
            type: 'REMOVE_CART_TOTAL',
            payload: cartTotaltoRemove
        })
        setButtonDecision(true);
    }

    return (
        <div id="pizza-item">
           <img id="pizza-img" src={pizza.image_path} />
           <h3>{pizza.name}</h3>
           <p>{pizza.description}</p>
           <p>{pizza.price}</p>
           {buttonDecision ? <button onClick={addToCart}>Add to Cart</button> : <button onClick={removeFromCart}>Remove From Cart</button>}
        </div>
    )
}

export default PizzaItem;