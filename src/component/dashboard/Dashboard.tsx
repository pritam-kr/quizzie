import "./dashboard.css"
import { QuizCard, Loader } from "../../component/index"
import { useQuizContext } from "../../context"

export type CategoryTypes = {
    title: string;
    thumbnail: string;
    about: string;
}

const Dashboard = () => {

    const { quizState: { loading, categories } } = useQuizContext()

    return (
        <div className="user-dashboard">
            <div className="categories-section"  >
                <h1 className="Larger-heading section-title">Quiz Categories</h1>
                <div className="category-wrapper">
                    {loading === true ? <div className="loader-wrapper">
                        <img className="responsive-images" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1650990392/Loading_icon_stoagp.gif" alt="loader" />
                    </div> : categories.map((eachCategory: CategoryTypes, i:string) => <QuizCard key={i} category = {eachCategory}  />)}
                </div>
            </div>
        </div>
    )
}

export { Dashboard }