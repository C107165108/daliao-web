import NewsList from './NewsList';
import '../../Style/NewsPage/NewsPage.css';


export default function NewsPage() {
    return (
        <div className="news-page-content">
            <h3 className="news-list-title">最新消息</h3>
            <NewsList />

        </div>
    );
}