import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import FeedbackList from "../reviews/FeedbackList.jsx";
import FeedbackStats from "../reviews/FeedbackStats.jsx";
import FeedbackForm from "../reviews/FeedbackForm.jsx";

function HomePage()  {

    // const [feedback, setFeedback] = useState(FeedBackData)


        return (
            <>
                <Header />
                <div className="main">
                <div className= 'container'>
                <FeedbackForm />
                <FeedbackStats  />
                <FeedbackList />
                </div>
                </div>
                <Footer />
            </>
);
}
export default HomePage;