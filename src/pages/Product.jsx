import { useOutletContext } from "react-router-dom";

function Product() {
    const [selectedProduct, setSelectedProduct, cart, setCart, handleAddToCart] = useOutletContext();
    if (!selectedProduct ) return "loading";

    return (
        <>
            <img src={selectedProduct.image}></img>
            <p>{selectedProduct.title}</p>
            <p>$ {selectedProduct.price}</p>
            <button type="button" onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
            </button>
            <p>{selectedProduct.description}</p>
        </>
    )

}

export default Product
