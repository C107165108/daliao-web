import React, { useState } from 'react';

import '../../Style/EditPage/EditPage.scss';

import EditNews from '../EditPage/EditNews';
import EditKnowledge from '../EditPage/EditKnowledge';
import EditTravel from '../EditPage/EditTravel';

import 'antd/dist/antd.css';
import { Select } from 'antd';



export default function EditPage(props) {

    const { newsCollectionRef, knowledgeCollectionRef, travelCollectionRef } = props;

    const { Option } = Select;

    const [ischange, setChange] = useState('new');

    const onUploadhange = ischange => { setChange(ischange) };

    const postClass = (ischange) => {
        switch (ischange) {
            case 'travel': return <EditTravel travelCollectionRef={travelCollectionRef} />; break;
            case 'new': return <EditNews newsCollectionRef={newsCollectionRef} />; break;
            case 'knowledge': return <EditKnowledge knowledgeCollectionRef={knowledgeCollectionRef} />; break;
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