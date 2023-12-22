import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

import Home from "./components/HomePage.jsx";

function App () {
return (
    <>
    <div className="main">
    <Routes>
    <Route path ="/" element={<Home/>} />
    </Routes>
      </div>
    </>
);
}

export default App;