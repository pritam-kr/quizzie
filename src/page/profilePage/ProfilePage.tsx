import { useAuthContext } from '../../context'
import { Topbar, Footer } from "../../component/index"
import "./profilePage.css"
import { useAuth } from '../../hooks'

const ProfilePage = () => {

  const {user} = useAuthContext()
  const {logOutHandler} = useAuth()

  return (
    <>
      <div className="main-bar " >
        {/*  Topbar start */}
        <Topbar />
        {/*  Topbar end */}
        <div className="user-dashboard" style={{ height: "80vh" }}>
          <div className=" userProfile-section ">
            <div className="userimage-wrapper">
              <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png"
                alt="profile-img"
                className="avatar img-responsive avatar-ex-lagre user-image"
              />
            </div>
            <div className="userbio-wrapper">
              <div className="user-info">
                <h1>Name:- {user?.firstName} {user?.lastName}🏆</h1>
                <p>
                  <span className="user-name user-email">Email:- {user?.email} <span className='user-name'> </span></span>

                </p>
                <button className='btn btn-secondary btn-logout' onClick={() => logOutHandler()}>Logout</button>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export { ProfilePage }