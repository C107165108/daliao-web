import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Table, Select } from 'antd';

export default function EditPage(props) {

    const { Option } = Select;
    const { news, travels, knowledges } = props;

    console.log(knowledges)

    const newscolumns = [
        {
            title: '標題',
            dataIndex: 'title',
            key: 'title',
            width: 200,
        },
        {
            title: '內文',
            dataIndex: 'content',
            key: 'content',
        },
        {
            title: '圖片',
            dataIndex: 'img',
            key: 'img',
            render: img => <img src={img} style={{ width: 100 }} />,
        },
        {
            title: 'Action',
            key: 'operation',
            width: 100,
            render: () => <a>編輯</a>,
        },
    ]


    const [ischange, setChange] = useState('new');
    const onUploadhange = ischange => { setChange(ischange) };

    const postClass = (ischange) => {
        switch (ischange) {
            case 'travel': return <Table pagination={{ pageSize: 3 }} columns={newscolumns} dataSource={travels} />; break;
            case 'new': return <Table pagination={{ pageSize: 3 }} columns={newscolumns} dataSource={news} />; break;
            case 'knowledge': return <Table pagination={{ pageSize: 3 }} columns={newscolumns} dataSource={knowledges} />; break;
        }
    };

    return (
        <div style={{ width: '70%', margin: '120px auto 40px auto', }}>

            <Select
                value={ischange}
                onChange={onUploadhange}
                className="edit-select"
                style={{ marginBottom: 20 }}>

                <Option value='travel'>小旅行</Option>
                <Option value='new'>最新消息</Option>
                <Option value='knowledge'>小知識</Option>
            </Select>

            {postClass(ischange)}
        </div>
    );
}