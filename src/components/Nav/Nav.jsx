import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div id="nav-bar">
            <div id="nav-shell">
            <div className="nav-btn">
                <Link to="/">HOME</Link>
            </div>
            <div className="nav-btn">
                <Link to="/orderPizza">ORDER PIZZA</Link>
            </div>
            <div className="nav-btn">
                <Link to="/customerInfo">CUSTOMER INFO</Link>
            </div>
            <div className="nav-btn">
                <Link to="/checkout">CHECKOUT</Link>
            </div>
            </div>
        </div >
    )
}

export default Nav;