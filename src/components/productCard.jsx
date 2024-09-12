import { useOutletContext } from "react-router-dom";

function ProductCard({ categoryList }) {
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
        <>
            {categoryList.map((res) => (
                <div key={res.id} className="productCard">
                    <img src={res.image}></img>
                    <button onClick={()=>handleWishList(res, isWishListed(res))}>
                        { isWishListed(res) ? "♥️" : "♡"}
                    </button>
                    <p>{res.title}</p>
                    <p>${res.price}</p>
                    <button type="button" onClick={() => handleViewDetails(res)}>View Details</button>
                    <button type="button" onClick={() => handleAddToCart(res)}>Add to Cart</button>
                </div>
            ))
            }
        </>
    )
}

export default ProductCard
