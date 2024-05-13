import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';

import Contacts from './components/Contacts.jsx';
import Portfolio from './components/portfolio.jsx';
import Soon from './components/Soon.jsx';
import Error404 from './components/Error404.jsx';
const App = () => {
    return (
       <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<Portfolio/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/soon" element={<Soon/>} />
                <Route  path="*" element={<Error404/>}/>
            </Routes>
       </Router>
    );
};

export default App;

