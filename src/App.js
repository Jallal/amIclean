
import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from "./components/pages/HomePage.jsx";
import AboutPage from './components/pages/AboutPage.jsx';
import PostId from "./components/pages/PostId.jsx";
import { FeedbackProvider } from "./components/context/FeedbackContext.jsx";

function App () {
return (
    <>
    <FeedbackProvider> 
    <Routes>
    <Route path ="/" element={<Home/>} />
    <Route path ="/About" element={<AboutPage/>} />
    {/* <Route path ="/post/:id/:name" element={<PostId/>} /> */}
    <Route path ="/post" element={<PostId/>} />
    </Routes>
    </FeedbackProvider>
    </>
);
}

export default App;