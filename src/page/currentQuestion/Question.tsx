import { useQuizContext } from "../../context/index"
import { Topbar, Footer } from "../../component/index"
import { abcd } from "../../utils/index"
import "./question.css"
import { useNavigate, Link } from "react-router-dom"
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react"
import { DocumentData } from "firebase/firestore";


const Question = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    const { quizState: { currentQuizzes }, quizDispatch } = useQuizContext()
    const { question, a, b, c, d } = currentQuizzes[currentIndex] || {}

    const [currentOption, setCurrentOption] = useState<any>("")

    const options: DocumentData = [a, b, c, d]

    const optionHandler = (eachOption: any) => {
        setCurrentOption(eachOption)
    }


    const nextQuestionHandler = () => {
        if (currentIndex === currentQuizzes.length - 1) {
            navigate("/result")
        }
        setCurrentIndex(currentIndex + 1)
        quizDispatch({ type: "SELECT_OPTION", payload: currentOption })
    }

    const prevQuestionHandler = () => {
        setCurrentIndex(currentIndex - 1)
        
    }
    return (
        <div className="main-bar">
            <Topbar />
            <div className="user-dashboard">
                {currentQuizzes?.length === 0 ? "Explore Quiz" : <div className="categories-section" id="categories-section">
                    <h1 className="Larger-heading section-title space-between">Questions: 0{currentIndex + 1}/5</h1>

                    <div className="question-wrapper">
                        <h2 className="space-between question-title">{question} </h2>

                        <ul className="q-list-wrapper">
                            {options.map((eachOption: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, i: Key | null | undefined) =>
                                <Link to="" onClick={() => optionHandler(eachOption)} key={i}  className="q-list">

                                    {abcd[Number(i)]}. {eachOption}

                                </Link>
                            )}
                        </ul>

                    </div>
                    <div className="btn-wrapper">
                        {currentIndex === 0 ? <button className="btn btn-secondary margin-r">Back</button> : <button
                            onClick={() => prevQuestionHandler()} className="btn btn-secondary margin-r">Prev</button>}
                        <button className="btn btn-primary" onClick={() => nextQuestionHandler()}>Next</button>
                    </div>
                </div>}
            </div>
            <Footer />
        </div>
    )
}

export { Question }