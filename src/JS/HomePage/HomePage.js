import React, { useState, useEffect } from 'react';

import '../../Style/HomePage/HomePage.scss';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import Slideshow from '../Component/Slideshow';
import TravelPage from '../TravelPage/TravelPage';

import Banner from '../../pic/Banner.png';
import { Carousel } from "antd";
import "antd/dist/antd.css";

export default function HomePage(props) {


    const { travels } = props;
    const forwardtravels = travels.slice(0, 3);

    const [banner, setBanner] = useState([]);
    const [homeImg, setHomeImg] = useState([]);
    const [about, setAbout] = useState([]);
    const homeCollectionRef = collection(db, 'home');

    useEffect(() => {

        const getHome = async () => {
            const data = await getDocs(homeCollectionRef);
            const homedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setBanner(homedata[1].banner)
            setHomeImg(homedata[1].homeImg)
            setAbout(homedata[0])
        }
        getHome();

    }, [])



    return (
        <div className='homepage'>

            <img src={Banner} className='homepage-img' />
            <h1>最新消息</h1>

            <Carousel autoplay style={{ width: '70%', margin: '50px auto' }}>
                {banner.map((item) => (
                    <div>
                        <img style={{ width: '100%' }} src={item.image} />
                    </div>
                ))}
            </Carousel>

            <div className='homepage-about'>
                <div className='homepage-about-text'>
                    <h2>關於我們</h2>
                    <p>{about.content}</p>
                </div>
                <img src={about.img} />

            </div>
        </div>
    );


}