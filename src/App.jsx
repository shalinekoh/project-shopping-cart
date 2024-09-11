import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header'


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([])

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
                    price: product.price,
                    id: crypto.randomUUID()
                }
            ]
        }
    })
}

  return (
    <>
      <Header />
      <Outlet context={[selectedProduct, setSelectedProduct, cart, setCart, handleAddToCart]}/>
    </>
  )
}

export default App
