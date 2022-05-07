
import { useNavigate } from "react-router-dom"
import { CategoryTypes } from "../dashboard/Dashboard"
import "./quizCard.css"

type props = {
    category: CategoryTypes
}



const QuizCard: React.FC<props> = ({ category }) => {

    const navigate = useNavigate()

    const playNowHandler = (categoryTitle:string) => {
        navigate(`/rule/${categoryTitle}`)
    }

    return (
        <div className="vertical-card quiz-card">
            <img className="card-img" src= {category.thumbnail} alt={category.title} />
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