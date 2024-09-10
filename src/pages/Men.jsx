import React, { useEffect, useState } from 'react'

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

    const handleClick = () => {
        console.log("clicked")
    }

    if (!men) return "loading";

    return (
        <>
            <h2>Men's Clothing</h2>
            {men.map((res) => (
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

export default Men
