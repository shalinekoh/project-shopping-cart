import React, { useEffect, useState } from 'react'
import { useOutletContext, useNavigate } from "react-router-dom";
import { Outlet } from 'react-router'


function Women() {
    const [women, setWomen] = useState()
    const [selectedProduct, setSelectedProduct, cart, setCart] = useOutletContext();
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
        alert("Added to cart")
        console.log(cart)
        setCart((currentCart) => {
            const itemExists = currentCart.find((item) => item.title === product.title);

            if (itemExists) {
                return currentCart.map((item) =>
                        item.title === product.title
                        ? {...item, quantity: item.quantity + 1}
                        : item )

            }
            else {
                return [
                    ...currentCart,
                    {
                        imgUrl: product.image,
                        title: product.title,
                        quantity: 1,
                        id: crypto.randomUUID()
                    }
                ]
            }
        })
    }

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        navigate(`/product/${product.id}`)
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
