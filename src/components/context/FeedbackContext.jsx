import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
{
    id: 1,
    text: 'This is review 1 ',
    rating: 5,
},
{
    id: 2,
    text: 'This is review 2',
    rating: 7,
},
{
    id: 3,
    text: 'This is review 3',
    rating: 6,
},
{
    id: 4,
    text: 'This is review 4',
    rating: 9,
}
    ])


const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false
})

    const editFeedback = (item)=> {

        setFeedBackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updatedItem } : item )))
    }


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


    return <FeedbackContext.Provider value={{feedback, deleteFeedback,addFeedback, editFeedback,feedBackEdit,updateFeedback}}>
         {children}</FeedbackContext.Provider>

}

export default FeedbackContext