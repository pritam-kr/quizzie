 
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div className="user-dashboard">

            <div className="user-profile-Section">
                <div className="userimage-wrapper">
                    <img src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651587060/user_ma86ud.png" alt="profile-img"
                        className="avatar img-responsive avatar-ex-lagre user-image" />
                </div>
                <div className="userbio-wrapper">
                    <div className="user-info">
                        <h1>Pritam Kumar 🏆</h1>
                        <p><span className="user-name">pritam@1234</span></p>
                        <p className="paragraph bio">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                            quisquam.
                        </p>
                    </div>
                    <div className="achievement-wrapper">
                        <h2 className="sub-headings">Achievement</h2>
                    </div>
                </div>
            </div>

            <div className="categories-section"  >
                <h1 className="Larger-heading section-title">Quiz Categories</h1>
                <div className="category-wrapper">
                    <div className="vertical-card quiz-card">
                        <img className="card-img" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651586989/html_ceoupt.jpg" alt="" />
                        <div className="card-content">
                            <h2 className="card-title">Marvel Quiz</h2>
                            <h3 className="card-author">by Pritam Kumar</h3>
                            <p className="paragraph quiz-description">
                                Visit ten places on our planet that are undergoing the
                                biggest changes today.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="card-footer-buttons">
                                <a href="/Pages/rules.html"> <button className="btn btn-primary btn-play">Play
                                    Now</button> </a>
                            </div>
                            <div className="card-footer-icons-wrapper">
                                <p className="footer-icon">
                                    <i className="fas fa-share-alt card-icons"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-card quiz-card">
                        <img className="card-img" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651586989/html_ceoupt.jpg" alt="" />
                        <div className="card-content">
                            <h2 className="card-title">JavaScript Quiz</h2>
                            <h3 className="card-author">by Pritam Kumar</h3>
                            <p className="paragraph quiz-description">
                                Visit ten places on our planet that are undergoing the
                                biggest changes today.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="card-footer-buttons">
                                <a href="/Pages/rules.html"> <button className="btn btn-primary btn-play">Play
                                    Now</button> </a>
                            </div>
                            <div className="card-footer-icons-wrapper">
                                <p className="footer-icon">
                                    <i className="fas fa-share-alt card-icons"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-card quiz-card">
                        <img className="card-img" src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1651586989/html_ceoupt.jpg" alt="" />
                        <div className="card-content">
                            <h2 className="card-title">HTML Quiz</h2>
                            <h3 className="card-author">by Pritam Kumar</h3>
                            <p className="paragraph quiz-description">
                                Visit ten places on our planet that are undergoing the
                                biggest changes today.
                            </p>
                        </div>
                        <div className="card-footer">
                            <div className="card-footer-buttons">
                                <a href="/Pages/rules.html"><button className="btn btn-primary btn-play">Play
                                    Now</button></a>
                            </div>
                            <div className="card-footer-icons-wrapper">
                                <p className="footer-icon">
                                    <i className="fas fa-share-alt card-icons"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }