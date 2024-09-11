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
        handleWishList, ] = useOutletContext();

    const isWishListed = (product) => wishList.some((item) => item.title === product.title)

    if (!selectedProduct ) return "loading";

    return (
        <>
            <img src={selectedProduct.image}></img>
            <p>{selectedProduct.title}</p>
            <p>$ {selectedProduct.price}</p>
            <button onClick={()=>handleWishList(selectedProduct, isWishListed(selectedProduct))}>
                { isWishListed(selectedProduct) ? "♥️" : "♡"}
            </button>
            <button type="button" onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
            </button>
            <p>{selectedProduct.description}</p>
        </>
    )

}

export default Product
