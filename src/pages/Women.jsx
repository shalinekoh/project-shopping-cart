import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'

function Women() {
    const [women, setWomen] = useState()

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

    if (!women) return "loading";

    return (
        <>
            <h2>Women's Clothing</h2>
            <ProductCard categoryList={women} />
        </>
    )
}

export default Women
