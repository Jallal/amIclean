import {Navigate, useNavigate, useParams} from 'react-router-dom'

function PostId(){

    const params = useParams()
    //const status = 404
    const navigate = useNavigate()

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    if(status === 404){
        return <Navigate to='/notFound' />
    }

    return (
    <div>
        <button onClick={onClick}>Click here</button>
    {/* <h1> Post {params.id}</h1>
    <h1> Post {params.name}</h1> */}
    </div>
    )
    
}
export default PostId