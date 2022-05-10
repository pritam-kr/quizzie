import { useAuthContext, useQuizContext } from "../../context";
import "./profile.css"
 
const Profile = ( ) => {

  const {user} =  useAuthContext()
  const {totalScoreOfUser} = useQuizContext()

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
        {totalScoreOfUser === 0 ? <p className="user-name" style={{marginTop: "1rem"}}>Your Total Score is 0 </p> : <p className="user-name" style={{marginTop: "1rem"}}>Your Total score is {totalScoreOfUser}</p>}
      </div>
    </div>
  </div>
  );
};

export  { Profile};
