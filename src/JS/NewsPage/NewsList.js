import NewsItem from './NewsItem';
import  '../../Style/NewsPage/NewsList.css'

export default function NewsList() {
    return (
        <div className="news-list-content">
            <h3 className="news-list-title">最新消息</h3>

            <NewsItem />
            <NewsItem />
            <NewsItem />

        </div>
    );
}