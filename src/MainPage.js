import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './JS/HomePage/HomePage';
import TravelPage from './JS/TravelPage/TravelPage';


export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <body>
                    <Router>
                        <Routes>
                            <Route exact path="/home" element={<HomePage />} />
                            <Route exact path="/travel" element={<TravelPage />} />
                        </Routes>
                    </Router>
                </body>
                <footer></footer>
            </div>
        );
    }

}