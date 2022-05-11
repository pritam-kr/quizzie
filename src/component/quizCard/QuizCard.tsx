
import { useNavigate } from "react-router-dom"
import { CategoryTypes } from "../../allTypes/categoryTypes"
import { useQuizContext } from "../../context/quizContext"
import "./quizCard.css"

type props = {
    category: CategoryTypes
}

type categoryType = {
    category: string
}

const QuizCard: React.FC<props> = ({ category }) => {

    const { quizState: { quizzes }, quizDispatch } = useQuizContext()


    const navigate = useNavigate()

    const playNowHandler = (categoryTitle: string) => {
        navigate(`/rule/${categoryTitle}`)

        const categoryBasedQuiz = quizzes?.filter((each: categoryType) => each.category.toLowerCase() === categoryTitle.toLowerCase())

        type answerType = {
            ans: string
        }

        //Getting answers of filter quizzes
        const allAnswer = categoryBasedQuiz?.map((each: answerType) => each.ans)
         quizDispatch({type: "SET_ANSWERS", payload: allAnswer})

        quizDispatch({ type: "GET_FILTER_QUIZ", payload: categoryBasedQuiz })

    }

    return (
        <div className="vertical-card quiz-card">
            <img className="card-img" src={category.thumbnail} alt={category.title} />
            <div className="card-content">
                <h2 className="card-title">{category.title}</h2>

                <p className="paragraph quiz-description">
                    {category.about}
                </p>
            </div>
            <div className="card-footer">
                <div className="card-footer-buttons">
                    <button className="btn btn-primary btn-play" onClick={() => playNowHandler(category.title)}>Play
                        Now</button>
                </div>
                <div className="card-footer-icons-wrapper">
                    <p className="footer-icon">
                        <i className="fas fa-share-alt card-icons"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export { QuizCard }