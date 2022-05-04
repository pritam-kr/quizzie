import React from 'react'
import { Link } from 'react-router-dom'
import {Footer, Dashboard} from "../../component/index"
 
const Home = () => {
    return (
        <div className="main-bar">
            {/* Navigation start */}
            <nav className="navigation">
                <div className="right-side">
                    <ul className="center">
                        <li>
                            <Link to="/login" className="links"><button className="btn btn-primary">Login</button></Link>
                        </li>
                        {/* <li>
                            <Link to="" className="center">
                                <span className="user-name links">Pritam@123</span><img src="/assets/user.png"
                                    className="avatar img-responsive img-rounded avatar-ex-small" alt="user-avatar" />
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
            {/* Navigation end */}

            <Dashboard />

            <Footer />
        </div>
    )
}

export { Home }