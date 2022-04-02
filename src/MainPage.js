import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './JS/HomePage/HomePage';
import TravelPage from './JS/TravelPage/TravelPage';
import TravelDetail from './JS/TravelPage/TravelDetail';
import NewsPage from './JS/NewsPage/NewsPage';
import NewsDetail from './JS/NewsPage/NewsDetail';
import Footer from './JS/Footer/Footer';

import { db } from './firebase-config';
import { collection, getDocs } from '@firebase/firestore'



export default function MainPage() {

    const [travels, settravels] = useState([]);
    const [news, setNews] = useState([]);
    const [homeLogo, setHomeLogo] = useState([]);

    const homeCollectionRef = collection(db, 'home');
    const newsCollectionRef = collection(db, 'news');
    const travelCollectionRef = collection(db, 'travels');

    useEffect(() => {

        const getTravels = async () => {
            const data = await getDocs(travelCollectionRef);
            const traveldata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            // console.log(traveldata)
            settravels(traveldata);
        }

        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            const newsdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setNews(newsdata);
        }

        const getHome = async () => {
            const data = await getDocs(homeCollectionRef);
            const homedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log(homedata[1].homeLogo);
            setHomeLogo(homedata[1].homeLogo)
        }
        getHome();
        getTravels();
        getNews();
    }, [])

    return (
        <div>
            <header></header>
            <body>
                <div>
                    <Router>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />

                            <Route exact path="/travel" element={<TravelPage travels={travels} />} />
                            <Route exact path="/travel/:id" element={<TravelDetail />} />

                            <Route exact path="/news" element={<NewsPage news={news} />} />
                            <Route exact path="/news/:id" element={<NewsDetail />} />

                        </Routes>
                    </Router>
                </div>
            </body>
            <footer>
                <Footer homeLogo={homeLogo}/>
            </footer>
        </div>
    );


}