import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div className="navbar navbar-expand-sm bg-light">
            <nav>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/"><a className="navbar-brand">HOME</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orderPizza"><a className="navbar-brand">ORDER PIZZA</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/customerInfo"><a className="navbar-brand">CUSTOMER INFO</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checkout"><a className="navbar-brand">CHECKOUT</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;