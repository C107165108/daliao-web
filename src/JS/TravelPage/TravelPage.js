import React from 'react';

import TravelItem from './TravelItem';
import '../../Style/TravelPage/TravelPage.css'


export default function TravelPage(props) {


    const { travels } = props;

    return (
        <div className='travel-page-content'>
            <h3 className="travel-page-title">小旅行</h3>
            <div className='travel-list-content'>
                {travels.map((travel) => {
                    return (
                        <TravelItem key={travel.id} travel={travel} />
                    );
                })}
            </div>

        </div>
    );


}