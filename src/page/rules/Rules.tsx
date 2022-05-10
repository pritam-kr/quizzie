import { Link, useParams, useNavigate } from "react-router-dom"
import { Topbar, Footer } from "../../component/index"

import "./rules.css"

const Rules = () => {
    const navigate = useNavigate()
    const { category } = useParams()
    const quizHandler = () => {
        navigate("/question")
    }

    return (
        <div className="main-bar">
            <Topbar />
            <div className="user-dashboard">
                <div className="categories-section rule-section"  >
                    <div>
                        <h1 className="Larger-heading section-title">Quiz Rules for {category}</h1>
                        <ul className="rules">
                            <li className="rule-list text-md">The Total number of question is Five.</li>
                            <li className="rule-list text-md">Each question is of 10 point.</li>
                            <li className="rule-list text-md">No time limit to solve question</li>
                            <li className="rule-list text-md">If you gives all answered correctly. You'll  in top on leaderboard.</li>
                            <li className="rule-list text-md">Happy Learning </li>
                        </ul>

                    </div>

                    <div className="rules-btn-wrapper">
                        <Link to="/">
                            <button className="btn btn-secondary margin-r">Quiz</button>
                        </Link>
                        <button className="btn btn-primary" onClick={() => quizHandler()}>Start</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export { Rules }