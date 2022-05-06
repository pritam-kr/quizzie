import { Link } from "react-router-dom"
import { useAuthContext } from "../../context"
import "./topbar.css"


const Topbar = () => {

  const { state: { uId } } = useAuthContext()

  return (
    <nav className="topbar">


      <div className="logo topbar-logo">
        <h1 className="text-xl"><Link to="/">Quizzie</Link></h1>
      </div>

      <div>
        <ul className="center">
          <li>
            {uId ? <li>
              <Link to="" className="center">
                <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png" className="avatar img-responsive img-rounded avatar-ex-small" alt="user-avatar" />
              </Link>
            </li> : <Link to="/login" className="links"><button className="btn btn-primary">Login</button></Link>}
          </li>

        </ul>
      </div>


    </nav>
  )
}

export { Topbar }