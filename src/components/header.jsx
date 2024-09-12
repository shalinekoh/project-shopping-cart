import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                {/* Logo and Main Navigation */}
                <div className="flex items-center gap-8">
                    <Link to="/">
                        <h1 className="text-6xl font-logo">ZARR</h1>
                    </Link>
                    <div className="flex gap-6 text-lg">
                        <Link to="women">Women</Link>
                        <Link to="men">Men</Link>
                        <Link to="jewelery">Jewelery</Link>
                    </div>
                </div>

                {/* Secondary Utility Links */}
                <div className="flex gap-6 text-lg">
                    <Link to="wishlist">Wish List</Link>
                    <Link>Search</Link>
                    <Link to="cart">Cart</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
