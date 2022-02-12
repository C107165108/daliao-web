import '../../Style/NewsPage/NewsItem.css'
export default function NewsItem() {
    return (
        <div className="news-item-content">

            <div className="news-item-content-text">

                <p className="news-item-time">2022/02/01</p>

                <div className="news-item-article">
                    <h4 className="news-item-title">虎哩健康平安好運來🐯</h4>
                    <p className="news-item-p">先祝大家虎年快樂🐯
                        新年到了，就要來搶頭香啦！
                        有沒有跟親朋好友拜個年呀🙏🏻</p>
                    <a className="news-item-a">read more</a>
                </div>

            </div>

            <div className="news-item-content-img">
                <img
                    className="news-item-img"
                    src="https://i.pinimg.com/564x/ff/4f/c5/ff4fc52ca34866abffca582cfe65890c.jpg">
                </img>
            </div>

        </div>
    );
}