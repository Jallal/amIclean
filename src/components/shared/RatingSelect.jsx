import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"



function RatingSelect({select}){

const [selected, setSelected] = useState()
const {feedBackEdit} = useContext(FeedbackContext)


useEffect(

    () => {
        setSelected(feedBackEdit.item.rating)

    },[feedBackEdit]
)

const handleChange = (e) => { 
    console.log(e.currentTarget.value)
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
}

    return(


<ul className='rating'>
<li>
    <input type='radio' id='num1' name='rading'  value='1' onChange={handleChange} checked={selected === 1} />  
    <label htmlFor='num1'>1</label>
</li>
<li>
    <input type='radio' id='num2' name='rading'  value='2' onChange={handleChange} checked={selected === 2} />  
    <label htmlFor='num2'>2</label>
</li>
<li>
    <input type='radio' id='num3' name='rading'  value='3' onChange={handleChange} checked={selected === 3} />  
    <label htmlFor='num3'>3</label>
</li>
<li>
    <input type='radio' id='num4' name='rading'  value='4' onChange={handleChange} checked={selected === 4} />  
    <label htmlFor='num4'>4</label>
</li>
<li>
    <input type='radio' id='num5' name='rading'  value='5' onChange={handleChange} checked={selected === 5} />  
    <label htmlFor='num5'>5</label>
</li>
<li>
    <input type='radio' id='num6' name='rading'  value='6' onChange={handleChange} checked={selected === 6} />  
    <label htmlFor='num6'>6</label>
</li>
<li>
    <input type='radio' id='num7' name='rading'  value='7' onChange={handleChange} checked={selected === 7} />  
    <label htmlFor='num7'>7</label>
</li>
<li>
    <input type='radio' id='num8' name='rading'  value='8' onChange={handleChange} checked={selected === 8} />  
    <label htmlFor='num8'>8</label>
</li>
<li>
    <input type='radio' id='num9' name='rading'  value='9' onChange={handleChange} checked={selected === 9} />  
    <label htmlFor='num9'>9</label>
</li>
<li>
    <input type='radio' id='num10' name='rading'  value='10' onChange={handleChange} checked={selected === 10} />  
    <label htmlFor='num10'>10</label>
</li>
</ul>


    )

}

export default RatingSelect