import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard'

function Jewelery() {
    const [jewelery, setJewelery] = useState();

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

    if (!jewelery) return "loading";

    return (
        <>
            <h2>Jewelery</h2>
            <ProductCard categoryList={jewelery} />
        </>
    )
}

export default Jewelery
