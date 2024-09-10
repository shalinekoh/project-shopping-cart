import React, { useEffect, useState } from 'react'

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

    const handleClick = () => {
        console.log("clicked")
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
                    <button type="button" onClick={handleClick}>Add to Cart</button>
                </div>
            ))
            }
        </>
    )
}

export default Women
