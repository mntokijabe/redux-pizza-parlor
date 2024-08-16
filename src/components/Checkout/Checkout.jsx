import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutTable from "./CheckoutTable";


function Checkout(){
    const customerInfo = useSelector(store=> store.customerInfo)
    const cartTotal = useSelector(store=> store.cartTotal)
    const cart = useSelector(store=> store.cart)
    const history = useHistory();
    const dispatch = useDispatch();

   
    const handleCheckout=() => {
        let allPizzas= cart.map((pizza) => (
                {id: pizza.id, quantity: pizza.quantity}
            ))
        
        const postData = {
            customer_name: customerInfo[0].customer_name,
            street_address: customerInfo[0].street_address,
            city: customerInfo[0].city,
            zip: customerInfo[0].zip,
            total: cartTotal,
            type: customerInfo[0].type,
            pizzas: allPizzas
        }
        console.log(postData)
        axios({
            method: 'POST',
            url: '/api/order',
            data: postData
        })
        .then((response) => {
            alert('Your order has been placed! Happy Eating!');
            clearData();
            history.push('/home') 
        })
        .catch((error) => {
            console.log('there was a POST /api/order error',error);
        })
    }
    

    const clearData = () => {
        dispatch({
            type: 'EMPTY_CART',
            payload: []
        })
        dispatch({
            type: 'CLEAR_CUSTOMER',
            payload: []
        })
        dispatch({
            type: 'CLEAR_CART_TOTAL',
            payload: []
        })
    }

    return (
        <div>
            <h2> Step 3: Checkout</h2>
            <div className='showCustomerInfo'>
                <div>
                {customerInfo[0].customer_name}
                {customerInfo[0].street_address}
                <span>{customerInfo[0].city} {customerInfo[0].zip}</span>
                </div>
                <div>
                    For {customerInfo[0].type}
                </div>
            </div>
            <div>
                <CheckoutTable />
            </div>
            <div className="totalCheckout">
                Total: {cartTotal}
                <button className="checkout" onClick={handleCheckout}>Checkout</button>
            </div>



        </div>



    )
}

export default Checkout;