import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import axios from "axios";
import '../App/App.css'

function Admin() {
    let [adminList, setAdminList] = useState([]);

    useEffect(() => {
    axios ({
        method: `GET`,
        url: '/api/order'
    }) .then ((response) => {
        setAdminList(response.data);
    }) .catch((error) => {
        console.log(error);
    });
}, [])
    

    
    return (
        <div>
            <h2>Prime Pizza Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>{adminList.map(orders => {
                return (
                    <tr key={orders.id}>
                        <td>{orders.customer_name}</td>
                        <td>{orders.time}</td>
                        <td>{orders.type}</td>
                        <td>{orders.cost}</td>
                    </tr>
                    )
                })}</tbody>
            </table>
        </div>
    )
}

export default Admin;