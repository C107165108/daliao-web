import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './JS/HomePage/HomePage';

import TravelPage from './JS/TravelPage/TravelPage';
import TravelDetail from './JS/TravelPage/TravelDetail';

import NewsPage from './JS/NewsPage/NewsPage';
import NewsDetail from './JS/NewsPage/NewsDetail';

import KnowledgePage from './JS/KnowledgePage/KnowledgePage';
import KnowledgeDetail from './JS/KnowledgePage/KnowledgeDetail';

import Footer from './JS/Footer/Footer';
import Header from './JS/Header/Header';

import { db } from './firebase-config';
import { collection, getDocs } from '@firebase/firestore'



export default function MainPage() {

    const [travels, settravels] = useState([]);
    const [news, setNews] = useState([]);
    const [homeLogo, setHomeLogo] = useState('');
    const [knowledges, setKnowledges] = useState([]);

    const homeCollectionRef = collection(db, 'home');
    const newsCollectionRef = collection(db, 'news');
    const travelCollectionRef = collection(db, 'travels');
    const knowledgeCollectionRef = collection(db, 'knowledges');

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
            setHomeLogo(homedata[1].homeLogo)
        }

        const getKnowledge = async () => {
            const data = await getDocs(knowledgeCollectionRef);
            const knowledgedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setKnowledges(knowledgedata)
        }

        getHome();
        getTravels();
        getNews();
        getKnowledge();
        
    }, [])

    return (
        <div>



            <Router>
                <Header homeLogo={homeLogo} />
                <Routes>
                    <Route exact path="/" element={<HomePage homeLogo={homeLogo} />} />

                    <Route exact path="/travel" element={<TravelPage travels={travels} />} />
                    <Route exact path="/travel/:id" element={<TravelDetail />} />

                    <Route exact path="/news" element={<NewsPage news={news} />} />
                    <Route exact path="/news/:id" element={<NewsDetail />} />


                   <Route exact path="/knowledge" element={<KnowledgePage knowledges={knowledges} />} />
                    <Route exact path="/knowledge/:id" element={<KnowledgeDetail />} />
                </Routes>
                <Footer homeLogo={homeLogo} />
            </Router>



        </div>
    );


}