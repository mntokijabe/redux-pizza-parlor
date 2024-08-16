import { useDispatch, useSelector } from "react-redux";

function PizzaItem({getPizzas, pizza}) {
    const dispatch = useDispatch();

    const renderDecision = () => {
        return <button>Add Pizza to Cart</button>;
    }


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
    }


    return (
        <div id="pizza-item">
           <img id="pizza-img" src={pizza.image_path} />
           <h3>{pizza.name}</h3>
           <p>{pizza.description}</p>
           <p>{pizza.price}</p>
           <button onClick={addToCart}>Add Pizza to Cart</button>
        </div>
    )
}

export default PizzaItem;