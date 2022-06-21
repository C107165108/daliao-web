import React, { useState } from 'react';

import { addDoc, serverTimestamp } from '@firebase/firestore';
import { fg } from '../../firebase-config';

import 'antd/dist/antd.css';
import { Input } from 'antd';
import '../../Style/AddPage/AddPage.scss';


export default function AddNews(props) {

    const { TextArea } = Input;

    const { newsCollectionRef, size } = props;

    const [newContent, setNewContent] = useState([]);
    const [newImgUrl, setNewImgUrl] = useState([]);
    const [newTitle, setNewTitle] = useState([]);
    const [newImg, setNewImg] = useState(null);



    const handleChangeFile = (e) => {
        console.log(e.target.files[0])
        const file = e.target.files[0]
        const storageRef = fg.storage().ref()
        const fileref = storageRef.child(file.name)
        fileref.put(file).then(() => {
            console.log(file.name)
        })
    }

    const createnews = async () => {
        await addDoc(newsCollectionRef, { content: newContent, img: newImgUrl, title: newTitle, date: serverTimestamp() });


    }

    return (
        < >
            <img
                src={newImg ? newImg : 'https://react.semantic-ui.com/images/wireframe/image.png'}
                style={{ width: 300 }} />
            <label>
                <input type="file" style={{ display: 'none' }} onChange={handleChangeFile} ></input>
                <div style={{ backgroundColor: '#aaa', padding: 16, width: 200, textAlign: 'center' }}>
                    <span >上傳圖片</span>
                </div>
            </label>

            <Input size={size} placeholder='標題' onChange={(e) => { setNewTitle(e.target.value) }} />
            <br />
            <TextArea size={size} placeholder='內文' onChange={(e) => { setNewContent(e.target.value) }} />
            <br />
            <Input size={size} placeholder='圖片連結' onChange={(e) => { setNewImgUrl(e.target.value) }} />
            <br />
            <button onClick={createnews}>送出</button>
        </>
    );
}