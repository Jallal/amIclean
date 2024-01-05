import {v4 as uuidv4} from 'uuid'
import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import FeedbackItem from "./components/reviews/FeedbackItem.jsx";

import Home from "./components/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.js";
import FeedBackData from "./components/data/FeedbackData.jsx";
import FeedbackList from "./components/reviews/FeedbackList.jsx";
import FeedbackStats from "./components/reviews/FeedbackStats.jsx";
import FeedbackForm from "./components/reviews/FeedbackForm.jsx";

function App () {

  const [feedback, setFeedback] = useState(FeedBackData)

  const deleteFeedback =(id) => {

    console.log('app',id)

    if(window.confirm('Are you sure you want to delete?')){

      setFeedback(feedback.filter((item) => item.id!==id))
    }

  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

return (
    <>
    <Header />
    <div className="main">
    <Routes>
    <Route path ="/" element={<Home/>} />
    </Routes>
    <div className= 'container'>
    <FeedbackForm  handleAdd={addFeedback}/>
    <FeedbackStats  feedback={feedback}/>
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
      </div>
      <Footer />
    </>
);
}

export default App;