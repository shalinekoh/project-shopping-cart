import { useState } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from "react-router-dom"
import './App.css'
import Header from './components/header'
import Footer from './components/footer'


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();

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
                    id: crypto.randomUUID(),
                }
            ]
        }
    })
}

const handleViewDetails = (product) => {
  setSelectedProduct(product);
  navigate(`/product/${product.id}`)
}

const handleWishList = (product, isWishListed) => {
  // if wish is already listed, remove from wishlist
  setWishList((currentList) => {
    if (isWishListed) {
      return currentList.filter((item) =>
        item.title !== product.title)
    }
    else {
      return [
        ...currentList,
        product
      ]
    }
  })
}

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <Outlet context={[
        selectedProduct,
        setSelectedProduct,
        cart,
        setCart,
        handleAddToCart,
        handleViewDetails,
        wishList,
        setWishList,
        handleWishList,
        ]}
      />
      <Footer />
    </div>
  )
}

export default App
