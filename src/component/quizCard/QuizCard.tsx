

const QuizCard = () => {
    return (
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
    )
}

export { QuizCard }