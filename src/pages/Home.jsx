import './Home.css';
import HomeCard from '../components/homeCard';

function Home() {
    return (
        <div className="body">
            <HomeCard imgSrc="/photo1.jpeg" categoryName="women"/>
            <HomeCard imgSrc="/photo2.jpeg" categoryName="men"/>
            <HomeCard imgSrc="/photo3.jpeg" categoryName="jewelery"/>
        </div>
    );
}

export default Home;
