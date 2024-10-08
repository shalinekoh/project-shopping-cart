import App from './App'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Jewelery from './pages/Jewelery'
import WishList from './pages/WishList'
import Product from './pages/Product'
import ShoppingCart from './pages/shoppingCart'
import ScrollToTop from './components/ScrollToTop'


const routes = [
    {
        path: "/",
        element: (
            <>
                <ScrollToTop />
                <App />
            </>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "women", element: <Women /> },
            { path: "men", element: <Men /> },
            { path: "jewelery", element: <Jewelery /> },
            { path: "wishlist", element: <WishList /> },
            { path: "product/:id", element: <Product />},
            { path: "cart", element: <ShoppingCart />},
        ],
    },
];

export default routes;
