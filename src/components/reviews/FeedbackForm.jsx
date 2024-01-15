import {useState,useContext,useEffect} from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import RatingSelect from '../shared/RatingSelect'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackForm({}) {

const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')
const {addFeedback,feedBackEdit, updateFeedback} = useContext(FeedbackContext)

useEffect(() => {
    if(feedBackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedBackEdit.item.text)
        setRating(feedBackEdit.item.rating)

    }
}, [feedBackEdit])


const handleTextChange= (e) => {
    if(text === ''){
        setBtnDisabled(true)
        setMessage(null)
    } else if(text !== '' && text.trim().length<=10){
        setBtnDisabled(true)
        setMessage('Text must be at least 10 characters')
    } else{
        setBtnDisabled(false)
        setMessage(null)
    }
//console.log(e.target.value)
setText(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
     const newFeedback ={
        text ,
        rating
     }
     if(feedBackEdit.edit === true){
        
        updateFeedback(feedBackEdit.item.id,newFeedback)
     }else {
        addFeedback(newFeedback)
     }      
     setText('')
    }

}
    return (
<Card> 
<form   onSubmit={handleSubmit}> 
    <h2>How would you rate your service with us?</h2>
    <RatingSelect  select={(rating) => setRating(rating)}/>
    <div className='imput-group'>

        <input onChange={handleTextChange} type="text" placeholder="Write a review"  value={text}></input>
        <Button type='submit' isDisabled={btnDisabled}> Send</Button>
    </div>
          {message && <div className='message'>{message}</div>}
    </form>

</Card>

    )



}
export default FeedbackForm