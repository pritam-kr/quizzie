
import "./dashboard.css"
import { QuizCard, Profile } from "../../component/index"


const Dashboard = () => {
    return (
        <div className="user-dashboard">

            <Profile />

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