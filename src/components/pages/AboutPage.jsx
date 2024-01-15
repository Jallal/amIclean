import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import Card from "../shared/Card.jsx"
import {Link} from 'react-router-dom'

function AboutPage(){
 
    
return (
    <div>
        <Header />
      <Card className='about'>
        <h1>About This Project</h1>
        <p>This is a site about leaving feedback for customers</p>
        <Link to='/'> Back To Home</Link>
        </Card>
        <Footer />
    </div>
)
}
export default AboutPage