
import '../../../Style/TravelPage/TravelDetail//TravelInformation.css';

export default function TravelInformation(props) {

    const { informationSubtitle } = props;
    const { information } = props;


    return (
        <div className="travel-information-content">

           
            <div className="travel-information-content-box">

                <div className="travel-information-subtitle-box">
                    <h5 className="travel-information-subtitle">{informationSubtitle}</h5>
                </div>

                <div className="travel-information-p-box">
                    <p className="travel-information-p">
                        {information}
                    </p>
                </div>


            </div>

        </div>
    );
}