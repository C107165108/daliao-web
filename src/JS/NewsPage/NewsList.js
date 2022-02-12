import NewsItem from './NewsItem';
import '../../Style/NewsPage/NewsList.css'

export default function NewsList() {
    return (
        <div className="news-list-content">
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    );
}