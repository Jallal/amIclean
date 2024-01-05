
import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from "./components/pages/HomePage.jsx";
import AboutPage from './components/pages/AboutPage.jsx';

function App () {



return (
    <>
    <Routes>
    <Route path ="/" element={<Home/>} />
    <Route path ="/About" element={<AboutPage/>} />
    </Routes>
    </>
);
}

export default App;