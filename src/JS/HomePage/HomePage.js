import React, { useState, useEffect } from 'react';

import '../../Style/HomePage/HomePage.scss';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import Slideshow from '../Component/Slideshow';
import TravelPage from '../TravelPage/TravelPage';

import Banner from '../../pic/Banner.png';

export default function HomePage(props) {


    const { travels } = props;
    const forwardtravels = travels.slice(0, 3);

    const [banner, setBanner] = useState([]);
    const [homeImg, setHomeImg] = useState([]);
    const homeCollectionRef = collection(db, 'home');

    useEffect(() => {

        const getHome = async () => {
            const data = await getDocs(homeCollectionRef);
            const homedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setBanner(homedata[1].banner)
            setHomeImg(homedata[1].homeImg)
        }
        getHome();

    }, [])



    return (
        <div className='homepage'>
            <img src={Banner} className='homepage-img'/>

            {/* <h3>最新活動資訊</h3> */}
            {/* <Slideshow carouseldata={banner} width='100vh' height='50vh' /> */}


            {/* <TravelPage travels={forwardtravels} /> */}
        </div>
    );


}