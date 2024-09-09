import App from './App'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Jewelery from './pages/Jewelery'
import WishList from './pages/WishList'


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "women", element: <Women /> },
            { path: "men", element: <Men /> },
            { path: "jewelery", element: <Jewelery /> },
            { path: "wishlist", element: <WishList /> },
        ],
    },
];

export default routes;
