import "./profile.css"
 

const Profile = () => {

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
        <h1>Pritam Kumar 🏆</h1>
        <p>
          <span className="user-name">pritam@1234</span>
        </p>
      </div>
    </div>
  </div>
  );
};

export  { Profile};
