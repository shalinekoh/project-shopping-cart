import React, { useEffect, useState } from 'react'
import { useOutletContext } from "react-router-dom";


function Women() {
    const [women, setWomen] = useState()
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
                const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
                const data = await response.json();

                setWomen(data)
            } catch (error) {
                console.error('Error fetching Women Clothing:', error);
            }
        };
        fetchImage();
    }, []);

    const isWishListed = (product) => wishList.some((item) => item.title === product.title)

    if (!women) return "loading";

    return (
        <>
            <h2>Women's Clothing</h2>
            {women.map((res) => (
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

export default Women
