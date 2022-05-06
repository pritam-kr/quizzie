import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"
import * as FaIcons from "react-icons/fa"
import { useAuth } from "../../hooks/index"
import { useAuthContext } from "../../context";


const Sidebar = () => {

    const { logOutHandler } = useAuth()
    const {state: {uId}} = useAuthContext()


    const signOutHandler = () => {
        logOutHandler()
    }

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
                        <Link to="/">
                            <li className="sidebar-links"> <FaIcons.FaHome className="sidebar-icon" /> Home
                            </li>
                        </Link>

                        <Link to="#categories-section">
                            <li className="sidebar-links">  <FaIcons.FaQuestion className="sidebar-icon" /> Quiz Category</li>

                            <ul className="sub-menu">
                                <li className="quiz-category-name">Marvel Quiz</li>
                                <li className="quiz-category-name">JavaScript Quiz</li>
                                <li className="quiz-category-name">HTML Quiz</li>
                            </ul>
                        </Link>
                    </ul>
                </div>

            </div>

            <div className="sidebar-footer">
                <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png" className="avatar img-responsive img-rounded avatar-ex-small"
                    alt="user-avatar" /> {uId ? <span onClick={() => signOutHandler()} className="user-name links">Logout </span> :<Link to="/login"><span className="user-name links">Login </span></Link>}
            </div>

        </div>
    );
};

export { Sidebar };