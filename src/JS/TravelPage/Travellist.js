import React from 'react';
import TravelItem from './TravelItem';
import '../../Style/TravelPage/TravelList.css';

export default class TravelList extends React.Component {
    render() {
        return (
            <div className='travel-list-content'>

                <TravelItem />
                <TravelItem />
                <TravelItem />
                <TravelItem />
                <TravelItem />
                <TravelItem />
            </div>
        );
    }

}