import { useAuthContext } from "../../context";
import "./profile.css"
 
const Profile = ( ) => {

  const {user} =  useAuthContext()

  return (
     <div className="user-profile-Section">
    <div className="userimage-wrapper">
      <img
        src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png"
        alt="profile-img"
        className="avatar img-responsive avatar-ex-lagre user-image"
      />
    </div>
    <div className="userbio-wrapper">
      <div className="user-info">
        <h1> {user?.firstName} {user?.lastName} 🏆</h1>
        <p>
          <span className="user-name">{user?.email}</span>
        </p>
      </div>
    </div>
  </div>
  );
};

export  { Profile};
