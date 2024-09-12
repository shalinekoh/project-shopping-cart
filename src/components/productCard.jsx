import { useOutletContext } from "react-router-dom";

function ProductCard({ categoryList, categoryName }) {
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList, ] = useOutletContext();


    const isWishListed = (product) => wishList.some((item) => item.title === product.title)

    return (
        <div className="mb-6 mx-6 min-h-screen">
            <h2 className="text-3xl font-bold mt-28 mb-6 text-center">{categoryName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryList.map((res) => (
                <div key={res.id} className="productCard p-4 bg-white border rounded-lg shadow-md">
                    <img src={res.image} alt={res.title} className="w-full h-64 object-contain rounded-md mb-4" />

                    <div className="flex justify-between items-center mb-2">
                    <button
                        onClick={() => handleWishList(res, isWishListed(res))}
                        className="text-2xl hover:scale-110 text-red-800"
                    >
                        {isWishListed(res) ? "♥️" : "♡"}
                    </button>
                    <p className="font-semibold text-lg">${res.price}</p>
                    </div>

                    <p className="font-medium text-md mb-2 h-16 overflow-hidden">{res.title}</p>

                    <div className="flex flex-col space-y-2">
                    <button
                        type="button"
                        onClick={() => handleViewDetails(res)}
                        className="btn"
                    >
                        View Details
                    </button>

                    <button
                        type="button"
                        onClick={() => handleAddToCart(res)}
                        className="btn"
                    >
                        Add to Cart
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard
