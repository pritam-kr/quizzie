import "./dashboard.css"
import { QuizCard, Profile } from "../../component/index"
import { useAuthContext } from "../../context"
 
const Dashboard = () => {

    const {state: {uId}} = useAuthContext()

    return (
        <div className="user-dashboard">

           {uId &&  <Profile />}

            <div className="categories-section"  >
                <h1 className="Larger-heading section-title">Quiz Categories</h1>
                <div className="category-wrapper">
                    <QuizCard />
                    <QuizCard />
                    <QuizCard />
                </div>
            </div>
        </div>
    )
}

export { Dashboard }