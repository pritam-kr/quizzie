import React from "react";

const Sidebar = () => {
  return (
    <div className="side-bar">

            <div className="sidebar-main">
                <div className="side-bar-header">
                    <div className="logo">
                        <h1><a href="/index.html">Quizzie</a></h1>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <a href="/index.html">
                            <li> <span className="material-icons-outlined sidebar-icon">
                                    home
                                </span> Home
                            </li>
                        </a>
                        <a href="e">
                            <li><span className="material-icons-outlined sidebar-icon">
                                    leaderboard
                                </span> Leader Board
                            </li>
                        </a>
                        <a href="#categories-section">
                            <li> <span className="material-icons-outlined sidebar-icon">
                                    quiz
                                </span> Quiz
                            </li>
                        </a>
                        <a href="e">
                            <li><span className="material-icons-outlined sidebar-icon">
                                    contact_support
                                </span> Help & Support
                            </li>
                        </a>
                    </ul>
                </div>

            </div>

            <div className="sidebar-footer">
                <a href="e" className="logout-link">
                    <img src="/assets/user.png" className="avatar img-responsive img-rounded avatar-ex-small"
                        alt="user-avatar" /> <span className="user-name links">Logout </span>
                </a>
            </div>

        </div>
  );
};

export  {Sidebar};
