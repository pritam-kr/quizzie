
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"
import * as FaIcons from "react-icons/fa"
import { useAuth } from "../../hooks/index"
import { useAuthContext } from "../../context";


const Sidebar = () => {

    const { logOutHandler } = useAuth()
    const { state: { uId } } = useAuthContext()


    const signOutHandler = () => {
        logOutHandler()
    }



    const getActiveStyle = ({ isActive }: any) => ({
        color: isActive ? "var(--primary-color)" : ""
    })


    return (
        <div className="side-bar">

            <div className="sidebar-main">
                <div className="side-bar-header">
                    <div className="logo">
                        <h1 className="text-xl"><Link to="/">Quizzie</Link></h1>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <NavLink to="/" style={getActiveStyle} className="sidebar-links">
                            <FaIcons.FaHome className="sidebar-icon" /> Home

                        </NavLink>

                        <NavLink to="/quiz-category" style={getActiveStyle} className="sidebar-links">
                             <FaIcons.FaQuestion className="sidebar-icon" /> Quiz Category 
                        </NavLink>

                        <ul className="sub-menu">
                            <li className="quiz-category-name">Marvel Quiz</li>
                            <li className="quiz-category-name">JavaScript Quiz</li>
                            <li className="quiz-category-name">HTML Quiz</li>
                        </ul>

                        <NavLink to="/leader-board" style={getActiveStyle} className="sidebar-links">
                             <FaIcons.FaDatabase className="sidebar-icon" /> Leaderboard 
                        </NavLink>
                    </ul>
                </div>

            </div>

            <div className="sidebar-footer">
                <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png" className="avatar img-responsive img-rounded avatar-ex-small"
                    alt="user-avatar" /> {uId ? <span onClick={() => signOutHandler()} className="user-name links">Logout </span> : <Link to="/login"><span className="user-name links">Login </span></Link>}
            </div>

        </div>
    );
};

export { Sidebar };
