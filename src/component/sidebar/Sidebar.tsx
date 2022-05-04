import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"
import * as FaIcons from "react-icons/fa"


const Sidebar = () => {
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
                        <Link to="e">
                            <li className="sidebar-links"> <FaIcons.FaHandsHelping className="sidebar-icon" /> Help & Support
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>

            <div className="sidebar-footer">
                <Link to="e" className="logout-link">
                    <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png" className="avatar img-responsive img-rounded avatar-ex-small"
                        alt="user-avatar" /> <span className="user-name links">Logout </span>
                </Link>
            </div>

        </div>
    );
};

export { Sidebar };
