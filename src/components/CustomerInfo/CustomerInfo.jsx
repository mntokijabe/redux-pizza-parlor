import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import '../App/App.css'

function CustomerInfo() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState('');
    const [customerStreetAddress, setCustomerStreetAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();

        addCustomer();
        if (confirm) {
            // clearFields()
            history.push('/checkout');
        }
    }


    const getRadioValue = () => {
        let ele = document.getElementsByName('method');
        console.log(ele)
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                console.log(ele[i])
            return ele[i].value
        }
    }

    const addCustomer = () => {
        let method = getRadioValue();
        dispatch({
            type: "ADD_CUSTOMER",
            payload: {
                customer_name: customerName,
                street_address: customerStreetAddress,
                city: customerCity,
                zip: Number(customerZip),
                type: method
            }
        })
    }


    return (
        <div >
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit} className='customerInfo'>
                <div className='addressInput'>
                    <div className="addressInput">
                        <input onChange={(e) => setCustomerName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            value={customerName} />
                        <input onChange={(e) => setCustomerStreetAddress(e.target.value)}
                            type="text"
                            placeholder="Street Address"
                            value={customerStreetAddress} />
                        <input onChange={(e) => setCustomerCity(e.target.value)}
                            type="text"
                            placeholder="City"
                            value={customerCity} />
                        <input onChange={(e) => setCustomerZip(e.target.value)}
                            type="text"
                            placeholder="Zip code"
                            value={customerZip} />
                    </div>
                    <div className='method'>
                        <input type="radio" id="method1" name="method" value="Pickup" />
                        <label htmlFor="method1">Pickup</label><br></br>
                        <input type="radio" id="method2" name="method" value="Delivery" />
                        <label htmlFor="method2">Delivery</label><br></br>
                    </div>
                </div>
                <button type="submit" className='next' >Next</button>
            </form>
        </div>

    )
}


export default CustomerInfo;