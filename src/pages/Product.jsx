import { useOutletContext } from "react-router-dom";

function Product() {
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList] = useOutletContext();

    const isWishListed = (product) => wishList.some((item) => item.title === product.title)

    if (!selectedProduct) return "loading";

    return (
        <div className="h-screen mx-auto max-w-4xl p-4 bg-white border rounded-lg shadow-md flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center max-w-3xl w-full">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="w-full h-80 object-contain rounded-md"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <p className="text-2xl font-semibold mb-2">{selectedProduct.title}</p>
                    <div className="flex justify-between mb-4">
                        <p className="text-lg font-bold text-gray-700 mr-4">$ {selectedProduct.price}</p>
                        <button
                            onClick={() => handleWishList(selectedProduct, isWishListed(selectedProduct))}
                            className="text-2xl hover:scale-110 text-red-800 focus:outline-none"
                        >
                            {isWishListed(selectedProduct) ? "♥️" : "♡"}
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => handleAddToCart(selectedProduct)}
                        className="btn"
                    >
                        Add to Cart
                    </button>

                    <p className="text-gray-600 mt-6">{selectedProduct.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;
