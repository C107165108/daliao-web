import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore'


export default function NewsDetail() {

    const urlPath = useParams();
    const travelId = urlPath.id;
    console.log(travelId);

    const [targetNews, setTargetNews] = useState([]);
    const [date,setDate]= useState([]);

    const newsCollectionRef = collection(db, 'news');

    useEffect(() => {


        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            const newsdata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const target=newsdata.find(travel => travel.id === travelId)
           
            setTargetNews(target);
            setDate(target.date);
            console.log(target.date)
        }

   
        getNews();

    }, [])

    const { title, img, content } = targetNews;

    return (
        <div >

            <h3>{title}</h3>
            <img src={img}/>
            <p>{content}</p>
            <p>{date.seconds}</p>
            {/* <p >
                    {date.toDate().getFullYear().toString()}/
                    {date.toDate().getMonth().toString()}/
                    {date.toDate().getDate().toString()}
                </p> */}

        </div>
    );
}