import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'

function Men() {
    const [men, setMen] = useState()

    useEffect(() => {
        const fetchImage = async() => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
                const data = await response.json();

                setMen(data)
            } catch (error) {
                console.error('Error fetching Men Clothing:', error);
            }
        };
        fetchImage();
    }, []);

    if (!men) return "loading";

    return (
        <>
            <h2>Men's Clothing</h2>
            <ProductCard categoryList={men} />
        </>
    )
}

export default Men
