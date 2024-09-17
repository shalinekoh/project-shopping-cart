import { useOutletContext } from "react-router-dom";
import BackIcon from "../components/back";

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
        <div className="flex flex-col h-screen mt-[60px]">
            <div className="flex-grow p-4 md:p-8 lg:p-12 flex flex-col md:flex-row gap-4 items-center justify-center">
                <BackIcon />
                {/* Product Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0">
                    <img
                        src={selectedProduct.image}
                        alt={selectedProduct.title}
                        className="w-full h-80 object-contain rounded-md"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <p className="text-2xl font-semibold mb-2">{selectedProduct.title}</p>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-bold text-gray-700">$ {selectedProduct.price}</p>
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
