import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase-config';
import { collection, getDocs } from '@firebase/firestore'


export default function KnowledgeDetail() {

    const urlPath = useParams();
    const KnowledgeId = urlPath.id;

    const [targetKnowledges, setTargetKnowledges] = useState([]);

    const knowledgeCollectionRef = collection(db, 'knowledges');

    useEffect(() => {

        const getKnowledge = async () => {

            const data = await getDocs(knowledgeCollectionRef);
            const knowledgedata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            const target = knowledgedata.find(knowledge => knowledge.id === KnowledgeId);
            setTargetKnowledges(target);
        }

        getKnowledge();

    }, [])


    const { title, img ,mainContent,content} = targetKnowledges;

    return (
        <div>

            <h3>{title}</h3>
            <img src={img} />
            <p>{mainContent}</p>
            <p>{content}</p>
        </div>
    );
}