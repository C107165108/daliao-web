import React, { useState } from 'react';

import { addDoc } from '@firebase/firestore';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import '../../Style/AddPage/AddPage.scss';

export default function AddNews(props) {

    const { TextArea } = Input;

    const { newsCollectionRef,size } = props;

    const [newContent, setNewContent] = useState([]);
    const [newImg, setNewImg] = useState([]);
    const [newTitle, setNewTitle] = useState([]);

    // const year = new Date().getFullYear();
    // let month = new Date().getMonth() + 1;
    // let date = new Date().getDate();
    // let hours = new Date().getHours();
    // let minutes = new Date().getMinutes();

    const createnews = async () => {
        await addDoc(newsCollectionRef, { content: newContent, img: newImg, title: newTitle })
    }

    return (
        < >
            <Input size={size} placeholder='標題' onChange={(e) => { setNewTitle(e.target.value) }} />
            <br />
            <TextArea size={size} placeholder='內文' onChange={(e) => { setNewContent(e.target.value) }} />
            <br />
            <Input size={size} placeholder='圖片連結' onChange={(e) => { setNewImg(e.target.value) }} />
            <br />
            <button onClick={createnews}>送出</button>
        </>
    );
}