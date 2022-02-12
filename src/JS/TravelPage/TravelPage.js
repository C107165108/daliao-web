import React from 'react';
import TravelList from './TravelList';
import '../../Style/TravelPage/TravelPage.css'


export default class TravelPage extends React.Component {
    render() {
        return (
            <div className='travel-page-content'>
                <h3 className="travel-page-title">小旅行</h3>
                <div >
                    <TravelList />
                </div>

            </div>
        );
    }

}