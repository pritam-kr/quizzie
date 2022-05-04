import React from 'react'
import { Link } from 'react-router-dom'
import { Footer} from "../../component/index"
import * as FaIcons from "react-icons/fa"

const Signup = () => {
  return (
    <>
      <nav className='login-nav'> <div className="logo">
        <h1><Link to="/">Quizzie</Link></h1>
      </div></nav>

      {/* Login Container Start */}
      <div className="container login-container center">
        <form className="form">
          <div className="form-header">
            <h1 className="form-title">Signup</h1>
          </div>

          <div className="input-row">
            <label className="input-label form-label">Email: </label>
            <input type="email" placeholder="example@gmail.com" className="input primary-input" />
          </div>

          <div className="input-row">
            <label className="input-label form-label">Password: <span className="reqired">*</span></label>
            <input type="password" placeholder="********" className="input required-input" required />
          </div>

          <div className="input-row">
            <label className="input-label"><input type="checkbox" className="input checkbox-input" />
              <span className="checkbox-text">Remember me</span></label>
          </div>

          <div className="input-row">
            <button className="btn btn-primary btn-submit">Signup</button>
          </div>

          <div className="form-footer">
            <Link to="/login">
              <p className="paragraph">Already have an account. <FaIcons.FaChevronRight /></p>
            </Link>
          </div>

        </form>
      </div>
      {/* Login Container End */}

      {/* footer section start */}
      <Footer />
      {/*footer section end */}
    </>
  )
}



export { Signup }