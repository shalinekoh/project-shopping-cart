import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="fixed top-0 w-full bg-white z-50 p-4 shadow-md">
            <div className="flex justify-between items-center">
                {/* Logo and Main Navigation */}
                <div className="flex items-center gap-8">
                    <Link to="/">
                        <h1 className="text-6xl font-logo">ZARR</h1>
                    </Link>
                    <div className="flex gap-6 text-lg">
                        <Link to="women" className="nav-hover">Women</Link>
                        <Link to="men" className="nav-hover">Men</Link>
                        <Link to="jewelery" className="nav-hover">Jewelery</Link>
                    </div>
                </div>

                {/* Secondary Utility Links */}
                <div className="flex gap-6 text-lg">
                    <Link to="wishlist" className="nav-hover">Wish List</Link>
                    <Link className="nav-hover">Search</Link>
                    <Link to="cart" className="nav-hover">Cart</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
