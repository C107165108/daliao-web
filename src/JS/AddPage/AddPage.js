import React, { useState } from 'react';

import '../../Style/AddPage/AddPage.scss';

import AddNews from './AddNews';
import AddKnowledge from './AddKnowledge';
import AddTravel from './AddTravel';

import 'antd/dist/antd.css';
import { Select } from 'antd';

export default function AddPage(props) {

    const { Option } = Select;

    const { newsCollectionRef, knowledgeCollectionRef, travelCollectionRef } = props;

    const size  = "large";

    const [ischange, setChange] = useState('new');
    const onUploadhange = ischange => { setChange(ischange) };


    const postClass = (ischange) => {
        switch (ischange) {
            case 'travel': return <AddTravel travelCollectionRef={travelCollectionRef} size={size}/>; break;
            case 'new': return <AddNews newsCollectionRef={newsCollectionRef} size={size}/>; break;
            case 'knowledge': return <AddKnowledge knowledgeCollectionRef={knowledgeCollectionRef} size={size}/>; break;
        }
    };

    return (
        <div className="edit-page">

            <div className='edit-page-from'>
                <Select
                    value={ischange}
                    onChange={onUploadhange}
                    className="edit-select">

                    <Option value='travel'>小旅行</Option>
                    <Option value='new'>最新消息</Option>
                    <Option value='knowledge'>小知識</Option>
                </Select>
                <br />
                {postClass(ischange)}
            </div>

        </div>
    );
}