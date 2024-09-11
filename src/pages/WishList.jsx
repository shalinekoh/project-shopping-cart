import { useOutletContext } from "react-router-dom";

function WishList() {
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList, ] = useOutletContext();

    console.log(wishList)
    const handleRemove = (product) => {
        setWishList((currentList) => currentList.filter((item) => item.title !== product.title))
    }
    const handleAdd = (product) => {
        // add to cart and remove from wishlist
        handleAddToCart(product);
        handleRemove(product);
    }

    if (wishList.length === 0) return "Nothing in cart"

    return (
        <div className="wishlist">
            <h2>Wishlist</h2>
                {wishList.map((item) => (
                    <div key={item.id} className="wishlistItem">
                        <img src={item.image} />
                        <h3>{item.title}</h3>
                        <button onClick={() => handleRemove(item)}>Remove</button>
                        <button onClick={() => handleAdd(item)}>Add to Cart</button>
                    </div>
                    ))
                }
        </div>
    )
}

export default WishList
