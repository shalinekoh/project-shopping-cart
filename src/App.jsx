import { useState } from 'react'
import { Outlet } from 'react-router'
import './App.css'
import Header from './components/header'


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([])

  return (
    <>
      <Header />
      <Outlet context={[selectedProduct, setSelectedProduct, cart, setCart]}/>
    </>
  )
}

export default App
