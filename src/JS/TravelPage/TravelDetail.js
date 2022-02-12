import '../../Style/TravelPage/TravelDetail.css';

export default function TravelDetail() {
    return (
        <div className="travel-detail-content">

            <div className="travel-detail-img-content">
                <img
                    className="travel-detail-img"
                    src="https://i.pinimg.com/564x/ff/4f/c5/ff4fc52ca34866abffca582cfe65890c.jpg">
                </img>
            </div>

            <div className="travel-detail-introduce-content">
                <div>
                    <h4 className="travel-detail-introduce-title">大寮三紅微旅行．乎您紅紅紅</h4>
                </div>
                <div className="travel-detail-introduce-p-box">
                    <p className="travel-detail-introduce-p">
                        大寮有三紅：紅豆、紅糖、紅磚窯，
                        來走一趟，包您紅紅紅，整年紅運、財運來！

                        大寮盛產紅豆，品質優良，取得履歷、有機認證；
                        日治時期山仔頂製糖所開啟在地糖的歷史，其中，黑糖又稱紅糖；
                        磚窯廠生產紅磚，大寮共益磚窯經市府列為歷史建築。

                        有紅豆餅DIY、有紅糖佐味的紅豆湯品嚐，還有紅磚窯老故事，
                        身心靈兼顧，走過路過千萬別錯過囉！</p>
                </div>
            </div>

            <div className="travel-detail-information-content">

            </div>

        </div>
    );
}