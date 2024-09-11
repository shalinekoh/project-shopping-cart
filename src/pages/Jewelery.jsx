import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";

function Jewelery() {
    const [jewelery, setJewelery] = useState();
    const [selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList, ] = useOutletContext();

    useEffect(() => {
        const fetchImage = async() => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/jewelery")
                const data = await response.json();

                setJewelery(data)
            } catch (error) {
                console.error('Error fetching Jewelery:', error);
            }
        };
        fetchImage();
    }, []);

    const isWishListed = (product) => wishList.some((item) => item.title === product.title)

    if (!jewelery) return "loading";

    return (
        <>
            <h2>Jewelery</h2>
            {jewelery.map((res) => (
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

export default Jewelery
