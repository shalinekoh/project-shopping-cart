import { useParams, useOutletContext } from "react-router-dom";

function Product() {
    const {id } = useParams();
    const [selectedProduct, setSelectedProduct] = useOutletContext();
    if (!selectedProduct ) return "loading";

    return (
        <>
            <img src={selectedProduct.image}></img>
            <p>{selectedProduct.title}</p>
            <p>$ {selectedProduct.price}</p>
            <button type="button">Add to Cart</button>
            <p>{selectedProduct.description}</p>
        </>
    )

}

export default Product
