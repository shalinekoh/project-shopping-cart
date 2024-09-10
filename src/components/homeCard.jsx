import { Link } from "react-router-dom";

function HomeCard({ imgSrc, categoryName }){
    return (
        <div className="homeCard">
                <img className="landscape-img" src={imgSrc} alt={categoryName} />
                <Link to={categoryName}>
                    <button type="button">Shop {categoryName}'s</button>
                </Link>
        </div>
    )
}

export default HomeCard
