import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <ul>
                <Link to="women">Women</Link>
                <Link to="men">Men</Link>
                <Link to="jewelery">Jewelery</Link>
            </ul>
            <ul>
                <Link to="wishlist">Wish List</Link>
                <Link>Search</Link>
                <Link>Cart</Link>
            </ul>
        </>
    )
}

export default Header
