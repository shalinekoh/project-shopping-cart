import React, { useEffect, useState } from 'react'
import { useOutletContext, useNavigate } from "react-router-dom";


function Women() {
    const [women, setWomen] = useState()
    const [selectedProduct, setSelectedProduct] = useOutletContext();
    const navigate = useNavigate()

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

    const handleAddToCart = (product) => {
        console.log("add to cart", product)
        setSelectedProduct(product)
    }

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        navigate('/product')
    }
    if (!women) return "loading";

    return (
        <>
            <h2>Women's Clothing</h2>
            {women.map((res) => (
                <div key={res.id} className="productCard">
                    <img src={res.image}></img>
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
