import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div className="navbar navbar-expand-sm bg-light">
            <nav>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderPizza">ORDER PIZZA</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/customerInfo">CUSTOMER INFO</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checkout">CHECKOUT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;