import {v4 as uuidv4} from 'uuid'
import React, { useState } from "react";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.js";
import FeedBackData from "../data/FeedbackData.jsx";
import FeedbackList from "../reviews/FeedbackList.jsx";
import FeedbackStats from "../reviews/FeedbackStats.jsx";
import FeedbackForm from "../reviews/FeedbackForm.jsx";

function HomePage()  {

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
export default HomePage;