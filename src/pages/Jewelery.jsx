import React, { useEffect, useState } from 'react'

function Jewelery() {
    const [jewelery, setJewelery] = useState()

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

    const handleClick = () => {
        console.log("clicked")
    }

    if (!jewelery) return "loading";

    return (
        <>
            <h2>Jewelery</h2>
            {jewelery.map((res) => (
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

export default Jewelery
