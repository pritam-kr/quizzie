import "./dashboard.css"
import { QuizCard, Profile } from "../../component/index"
import { useAuthContext, useQuizContext } from "../../context"
import { CategoryTypes } from "../../allTypes/categoryTypes"



const Dashboard = () => {
    const { quizState: { loading, categories } } = useQuizContext()
    const {state: {uId}} = useAuthContext()

    return (
        <div className="user-dashboard">
            {uId && <Profile />}
            <div className="categories-section"  >

                <h1 className="Larger-heading section-title">Quiz Categories</h1>
                <div className="category-wrapper"  >
                    {loading === true ? <div className="loader-wrapper">
                        <img className="responsive-images" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1650990392/Loading_icon_stoagp.gif" alt="loader" />
                    </div> : categories.map((eachCategory: CategoryTypes, i: string) => <QuizCard key={i} category={eachCategory} />)}
                </div>
            </div>
        </div>
    )
}

export { Dashboard }