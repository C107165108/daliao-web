import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../Style/TravelPage/TravelDetail.css';

import TravelInformation from './TravelDetail/TravelInformation';
import Slideshow from '../Component/Slideshow';


import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore'


export default function TravelDetail() {

    const urlPath = useParams();
    const travelId = urlPath.id;

    const [targetTravels, setTargetTravels] = useState([]);
    const [information, setInformation] = useState([]);
    const [detailimg, setDetailimg] = useState([]);

    const newsCollectionRef = collection(db, 'travels');

    useEffect(() => {

        const getTravels = async () => {

            const data = await getDocs(newsCollectionRef);
            const traveldata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const target = traveldata.find(travel => travel.id === travelId)

            setTargetTravels(target);
            setInformation(target.information);
            setDetailimg(target.detailImage)
            console.log(target.detailImage)
        }

        getTravels();

    }, [])




    const { title, subTitle, img, content } = targetTravels;
    const { remark, price, time, place } = information

    return (
        <div className="travel-detail-content">

            <button className="travel-detail-signup-btn">
                <p className="travel-detail-signup-p">我要</p>
                <p className="travel-detail-signup-p">報名</p>
                <p className="travel-detail-signup-arrow">→</p>
            </button>

            <div className="travel-detail-img-content">

                <img
                    className="travel-detail-img"
                    src={img}>
                </img>

            </div>

            <div className="travel-detail-introduce-content">
                <div>
                    <h4 className="travel-detail-introduce-title">{title}</h4>
                </div>
                <div className="travel-detail-introduce-p-box">
                    <p className="travel-detail-introduce-p">
                        {content}</p>
                </div>
            </div>

            {detailimg ? <Slideshow carouseldata={detailimg} width='120vh'height='80vh'/> : ''}

            <div className="travel-detail-information-content">
                <h4 className="travel-information-title">活動資訊</h4>
                <TravelInformation information={time} informationSubtitle='活動時間' />
                <TravelInformation information={place} informationSubtitle='活動地點' />
                <TravelInformation information={price} informationSubtitle='活動費用' />
                {remark ? <TravelInformation information={remark} informationSubtitle='備註' /> : ''}

            </div>

        </div>
    );
}