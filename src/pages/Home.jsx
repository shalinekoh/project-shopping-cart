import Header from "../components/header";
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="body">
            {/* <Header /> */}
            <div className="homeCard">
                <img className="landscape-img" src="../photo1.jpeg" alt="Women's Section" />
                <Link to="/women">
                    <button type="button">Shop Women's</button>
                </Link>
            </div>
            <div className="homeCard">
                <img className="landscape-img" src="../photo2.jpeg" alt="Men's Section" />
                <Link to="/men">
                    <button type="button">Shop Men's</button>
                </Link>
            </div>
            <div className="homeCard">
                <img className="landscape-img" src="../photo3.jpeg" alt="Jewelery's Section" />
                <Link to="/jewelery">
                    <button type="button">Shop Jewelery's</button>
                </Link>
            </div>


        </div>
    );
}

export default Home;
