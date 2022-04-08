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

    const createnews = async () => {
        await addDoc(knowledgeCollectionRef, { content: knowledgecontent, img: knowledgeimg, title: knowledgetitle, mainContent: knowledgemainContent })
    }

    return (
        < >

            <Input placeholder='knowledgetitle' onChange={(e) => { setknowledgetitle(e.target.value) }} />
            <br />
            <TextArea placeholder='knowledgemainContent' onChange={(e) => { setknowledgemainContent(e.target.value) }} />
            <br />
            <TextArea placeholder='knowledgecontent' onChange={(e) => { setknowledgecontent(e.target.value) }} />
            <br />
            <Input placeholder='knowledgeimg' onChange={(e) => { setknowledgeimgg(e.target.value) }} />
            <br />


            <button onClick={createnews}>clicck</button>
        </>
    );
}