
import React, { useState, useEffect } from 'react';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import Slideshow from '../Component/Slideshow';

export default function HomePage() {

  

    const [banner, setBanner] = useState([]);
    const homeCollectionRef = collection(db, 'home');

    useEffect(() => {



        const getHome = async () => {
            const data = await getDocs(homeCollectionRef);
            const homedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            setBanner(homedata[0].banner)
        }
        getHome();

    }, [])



    return (
        <div>
            map
            <h3>最新活動資訊</h3>
            <Slideshow carouseldata={banner} width='100vh' height='50vh' />
        </div>
    );


}