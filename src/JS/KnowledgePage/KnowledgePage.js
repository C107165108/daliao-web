import React from 'react';

import KnowledgeItem from '../KnowledgePage/KnowledgeItem';
import '../../Style/NewsPage/NewsPage.scss'


export default function KnowledgePage(props) {

    const { knowledges } = props;
 
    return (
        <div className='news-page-content'>
            <h3 className="news-page-title">小知識</h3>
            <div className='news-list-content'>
                {knowledges.map((knowledge) => {
                    return (
                        <KnowledgeItem key={knowledge.id} knowledge={knowledge} />
                    );
                })}
            </div>

        </div>
    );


}