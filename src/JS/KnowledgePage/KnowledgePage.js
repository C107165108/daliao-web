import React from 'react';

import KnowledgeItem from '../KnowledgePage/KnowledgeItem';



export default function KnowledgePage(props) {

    const { knowledges } = props;
 
    return (
        <div className='travel-page-content'>
            <h3 className="travel-page-title">小知識</h3>
            <div className='travel-list-content'>
                {knowledges.map((knowledge) => {
                    return (
                        <KnowledgeItem key={knowledge.id} knowledge={knowledge} />
                    );
                })}
            </div>

        </div>
    );


}