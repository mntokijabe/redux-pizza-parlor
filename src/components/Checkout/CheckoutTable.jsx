import { useSelector } from "react-redux";


function CheckoutTable() {
    const cart = useSelector(store=> store.cart)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((pizza) => {
                    return (
                        <tr>
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}

export default CheckoutTable;