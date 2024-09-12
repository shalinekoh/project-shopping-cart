import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList] = useOutletContext();

    const handleMinus = (id) => {
        const quantity = cart.find((item) => item.id === id).quantity - 1;
        setCart((currentCart) => {
            if (quantity < 1) {
                return currentCart.filter((item) => item.id !== id);
            } else {
                return currentCart.map((item) => (
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ));
            }
        });
    }

    const handlePlus = (id) => {
        const quantity = cart.find((item) => item.id === id).quantity + 1;
        setCart((currentCart) => {
            if (quantity <= 10) {
                return currentCart.map((item) => (
                    item.id === id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ));
            }
        });
    }

    return (
        <div className="min-h-screen mt-24 bg-gray-100 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Nothing in cart</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white md:w-1/2 mx-auto border rounded-lg shadow-md p-4 mb-4 flex items-center">
                            <img
                                src={item.imgUrl}
                                alt={item.title}
                                className="w-32 h-32 object-fit rounded-md mr-4"
                            />
                            <div className="flex-1 ">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-lg font-bold text-gray-700 mb-2">${Math.round(item.quantity * item.price * 100) / 100}</p>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleMinus(item.id)}
                                        className="bg-gray-300 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-400"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        min="0"
                                        max="10"
                                        className="text-center border rounded-md w-12"
                                        onChange={e => e.target.value}
                                    />
                                    <button
                                        onClick={() => handlePlus(item.id)}
                                        className="bg-gray-300 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-400"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                ))}
                </div>
            )}
            <div className="flex flex-col bg-white md:w-1/2 mx-auto border rounded-lg shadow-md p-4 mt-6">
                <p className="flex text-lg font-semibold mb-2">ORDER SUMMARY | {cart.reduce((acc, item) => acc + item.quantity, 0)} ITEM(S)</p>

                <div className="flex justify-between text-lg font-bold text-gray-700 mb-4">
                    <span >Total Amount: </span>
                    <span>${Math.round(cart.reduce((acc, item) => acc + (item.quantity * item.price), 0) * 100) / 100}</span>
                </div>
                <button
                    className="btn"
                >
                    CHECK OUT
                </button>
            </div>
        </div>
    );
}

export default ShoppingCart;
