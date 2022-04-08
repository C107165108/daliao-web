import React, { useState } from 'react';

import { addDoc } from '@firebase/firestore';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import '../../Style/AddPage/AddPage.scss';

export default function AddNews(props) {

    const { TextArea } = Input;

    const { newsCollectionRef } = props;

    const [newContent, setNewContent] = useState([]);
    const [newImg, setNewImg] = useState([]);
    const [newTitle, setNewTitle] = useState([]);

    const createnews = async () => {
        await addDoc(newsCollectionRef, { content: newContent, img: newImg, title: newTitle })
    }

    return (
        < >
            <Input placeholder='標題' onChange={(e) => { setNewTitle(e.target.value) }} />
            <br />
            <TextArea placeholder='內文' onChange={(e) => { setNewContent(e.target.value) }} />
            <br />
            <Input placeholder='圖片連結' onChange={(e) => { setNewImg(e.target.value) }} />
            <br />
            <button onClick={createnews}>clicck</button>
        </>
    );
}