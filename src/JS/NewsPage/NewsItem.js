import { Link } from 'react-router-dom';
import '../../Style/NewsPage/NewsItem.css';


export default function NewsItem(props) {

    const { newitem } = props;
  

    return (
        <div className="news-item-content">

            <div className="news-item-content-text">

                {/* <p className="news-item-time">
                    {newitem.date.toDate().getFullYear().toString()}/
                    {newitem.date.toDate().getMonth().toString()}/
                    {newitem.date.toDate().getDate().toString()}
                </p> */}

                <div className="news-item-article">
                    <h4 className="news-item-title">{newitem.title}</h4>
                    <p className="news-item-p">{newitem.content}</p>
                    <Link
                        key={newitem.id}
                        to={`${newitem.id}`}>
                        <p className="news-item-a">read more</p>
                    </Link>
                </div>

            </div>

            <div className="news-item-content-img">
                <img
                    className="news-item-img"
                    src={newitem.img}>
                </img>
            </div>

        </div>
    );
}