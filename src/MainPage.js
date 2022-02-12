import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './JS/HomePage/HomePage';
import TravelPage from './JS/TravelPage/TravelPage';
import TravelDetail from './JS/TravelPage/TravelDetail';
import Footer from './JS/Footer/Footer';

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
                            <Route exact path="/traveldetail" element={<TravelDetail />} />

                        </Routes>
                    </Router>
                </body>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }

}