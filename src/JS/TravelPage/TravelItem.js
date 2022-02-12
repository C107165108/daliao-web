import '../../Style/TravelPage/TravelItem.css';

export default function TravelItem() {
    return (
        <div className="travel-item-content">
            <img
                className="travel-item-img"
                src="https://i.pinimg.com/564x/ff/4f/c5/ff4fc52ca34866abffca582cfe65890c.jpg">
            </img>
            <h4 className="travel-item-title">鳳梨小旅行</h4>
            <p className="travel-item-time">10/16、17</p>
            <button className="travel-item-btn">了解更多 →</button>
        </div>
    );
}