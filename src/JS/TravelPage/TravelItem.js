import { Link } from 'react-router-dom';
import '../../Style/TravelPage/TravelItem.css';


export default function TravelItem(props) {

    const { travel } = props;

    return (
        <div className="travel-item-content">

            <img
                className="travel-item-img"
                src={travel.img}>
            </img>

            <h4 className="travel-item-title">{travel.title}</h4>

            <p className="travel-item-time">10/16、17</p>

            <Link
                key={travel.id}
                to={`${travel.id}`}>
                <button className="travel-item-btn">了解更多 →</button>
            </Link>

        </div>
    );
}