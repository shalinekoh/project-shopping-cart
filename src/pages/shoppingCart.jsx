import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
    const [selectedProduct, setSelectedProduct, cart, setCart] = useOutletContext();

    const handleMinus = (id) => {
        const quantity = cart.find((item) => item.id === id).quantity - 1;
        setCart((currentCart) => {

            if (quantity < 1){
                return currentCart.filter((item) => item.id !== id)
            } else {
                return currentCart.map((item) => (
                        item.id === id
                        ? {...item, quantity: item.quantity - 1}
                        : item));
            }
        })
    }

    const handlePlus = (id) => {
        const quantity = cart.find((item) => item.id === id).quantity + 1;
        setCart((currentCart) => {
            if (quantity <= 10){
                return currentCart.map((item) => (
                        item.id === id
                        ? {...item, quantity: item.quantity + 1}
                        : item));
            }
        })
    }

    if (!cart) return "Loading...";
    if (cart.length === 0) return "Nothing in cart";
    return (
        <div className="cart">
            {cart.map((item) => (
                <div key={item.id} className="cartItem">
                    <img src={item.imgUrl} />
                    <h2>{item.title}</h2>
                    <div className="quantity">
                        <button onClick={() => handleMinus(item.id)}>-</button>
                        <input type="number" value={item.quantity} min="0" max="10"
                        onChange={e=> e.target.value}
                        />
                        <button onClick={() => {handlePlus(item.id)}}>+</button>
                    </div>

                </div>
                ))
            }
        </div>
    )
}

export default ShoppingCart