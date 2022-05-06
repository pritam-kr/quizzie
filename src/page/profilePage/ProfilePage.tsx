import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../context'
import { useFirebase } from '../../hooks'
import { Topbar, Footer } from "../../component/index"
import "./profilePage.css"

const ProfilePage = () => {

  const { getUserInfo } = useFirebase()
  const { state: { uId } } = useAuthContext()
  const [user, setUser] = useState({ email: "", firstName: "", lastName: "" })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function hh() {
    const { email, firstName, lastName } = await getUserInfo(uId) || {}
    setUser({ email: email, firstName: firstName, lastName: lastName })

  }


  useEffect(() => {
    hh()
  }, [uId])


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
                <h1>Name:-  {user?.firstName} {user?.lastName} 🏆</h1>
                <p>
                  <span className="user-name user-email">Email:-  <span className='user-name'>{user?.email}</span></span>
                </p>
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