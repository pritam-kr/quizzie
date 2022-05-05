import { Link } from "react-router-dom"
import "./topbar.css"


const Topbar = () => {
  return (
    <nav className="topbar">


      <div className="logo topbar-logo">
        <h1 className="text-xl"><Link to="/">Quizzie</Link></h1>
      </div>

      <div>
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
  )
}

export { Topbar }