import React, { useState } from 'react';

import { addDoc } from '@firebase/firestore';

import 'antd/dist/antd.css';
import { Input } from 'antd';

export default function AddKnowledge(props) {

    const { TextArea } = Input;

    const { knowledgeCollectionRef } = props;

    const [knowledgetitle, setknowledgetitle] = useState([]);
    const [knowledgecontent, setknowledgecontent] = useState([]);
    const [knowledgeimg, setknowledgeimgg] = useState([]);
    const [knowledgemainContent, setknowledgemainContent] = useState([]);

    const clear = () => {
        setknowledgetitle([]);
        setknowledgecontent([]);
        setknowledgeimgg([]);
        setknowledgemainContent([]);

    }

    const createnews = async () => {
        await addDoc(knowledgeCollectionRef, { content: knowledgecontent, img: knowledgeimg, title: knowledgetitle, mainContent: knowledgemainContent });
        clear();
        alert('已送出');
    }

    return (
        < >

            <Input placeholder='標題' onChange={(e) => { setknowledgetitle(e.target.value) }} />
            <br />
            <TextArea placeholder='引文' onChange={(e) => { setknowledgemainContent(e.target.value) }} />
            <br />
            <TextArea placeholder='內文' onChange={(e) => { setknowledgecontent(e.target.value) }} />
            <br />
            <Input placeholder='圖片連結' onChange={(e) => { setknowledgeimgg(e.target.value) }} />
            <br />


            <button onClick={createnews}>clicck</button>
        </>
    );
}