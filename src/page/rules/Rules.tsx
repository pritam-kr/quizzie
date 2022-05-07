import { Link, useParams } from "react-router-dom"
import { Topbar, Profile, Footer } from "../../component/index"
import "./rules.css"
 
const Rules = () => {

    const {category} = useParams()

    return (
        <div className="main-bar">
            <Topbar />
            <div className="user-dashboard">
                <Profile />

                <div className="categories-section" id="categories-section">
                        <h1 className="Larger-heading section-title">Quiz Rules</h1>
                        <ul className="rules">
                            <li className="rule-list text-md">The Total number of question is Five.</li>
                            <li className="rule-list text-md">Each question is of Five point.</li>
                            <li className="rule-list text-md">You'll get One minute to answer all questions.</li>
                            <li className="rule-list text-md">If you gives all answered correctly. You'll be get Money Prize.</li>
                            <li className="rule-list text-md">If you're not score 50% of question. You'll be kick out.</li>
                        </ul>
                        
                        <div className="rules-btn-wrapper">
                            <Link to="/"> 
                            <button className="btn btn-secondary margin-r">Back</button> 
                            </Link>
                            <Link to="/"><button className="btn btn-primary">Start</button></Link>
                        </div>
                    </div>

            </div>
            <Footer />
        </div>
    )
}

export { Rules }