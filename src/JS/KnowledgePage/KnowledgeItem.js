import { Link } from 'react-router-dom';
import '../../Style/TravelPage/TravelItem.css';


export default function KnowledgeItem(props) {

    const { knowledge } = props;
    const { img, title, id } = knowledge
    return (
        <div className="travel-item-content">

            <img src={img} />
            <h4>{title}</h4>

            <Link
                key={id}
                to={`${id}`}>
                <button className="travel-item-btn">了解更多 →</button>
            </Link>

        </div>
    );
}