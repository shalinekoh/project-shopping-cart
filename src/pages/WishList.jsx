import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import BackIcon from "../components/back";

function WishList() {
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList] = useOutletContext();

    const handleRemove = (product) => {
        setWishList((currentList) => currentList.filter((item) => item.title !== product.title))
    }

    const handleAdd = (product) => {
        // add to cart and remove from wishlist
        handleAddToCart(product);
        handleRemove(product);
    }

    return (
        <div className="min-h-screen mt-24 bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Wishlist</h2>
            {wishList.length === 0 ? (
                <div>
                    <p className="text-lg text-center text-gray-600">Nothing in wishlist</p>
                    <Link to="/women" className="flex justify-center mt-4 text-lg text-gray-600 hover:underline">Go Shopping</Link>
                </div>
            ) : (
                <div className="space-y-6 flex flex-col">
                    <BackIcon />
                    {wishList.map((item) => (
                        <div key={item.id} className="bg-white md:w-1/2 mx-auto border rounded-lg shadow-md p-4 flex items-center space-x-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-32 h-32 object-contain rounded-md"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 hover:cursor-pointer" onClick={() => handleViewDetails(item)}>{item.title}</h3>
                                <p className="text-lg font-bold text-gray-700 mb-2">$ {item.price}</p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => handleRemove(item)}
                                        className="bg-red-700 text-white py-2 px-4 hover:bg-white hover:text-red-700 transition duration-200"
                                    >
                                        Remove
                                    </button>
                                    <button
                                        onClick={() => handleAdd(item)}
                                        className="btn"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WishList;
