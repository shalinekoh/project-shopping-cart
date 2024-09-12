import './Home.css';
import { Link } from "react-router-dom";
import HomeCard from '../components/homeCard';

function Home() {
    return (
        <div className="body">
            <img className="landscape-img" src="/photo1.jpeg" alt="Home" />
            <Link to='women'>
                <button type="button">Shop Now</button>
            </Link>
        </div>
    );
}

export default Home;
