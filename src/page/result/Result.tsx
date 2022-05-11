import { useQuizContext, useAuthContext } from "../../context";
import { Footer, Topbar } from "../../component/index";
import "./result.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../hooks";
import { useState } from "react";

const Result = () => {
  const { setLeaderBoardData } = useFirebase();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  const { user } = useAuthContext();

  const {
    quizState: { currentQuizzes, selectedOption }
  } = useQuizContext();

  const getScore = () => {
    let score = 0;

    for (let i = 0; i < currentQuizzes.length; i++) {
      if (currentQuizzes[i].ans === selectedOption[i]) {
        score = score + 10;
      }
    }

    return score;
  };

  type eachQuestionType = {
    question: string;
    a: string;
    b: string;
    c: string;
    d: string;
    ans: string;
    i: Number;
    options: string[];
  };

  const leaderBoardHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>

  ) => {

    event.preventDefault()
    const leaderBoardInfo = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      score: score,
    };

    setLeaderBoardData(leaderBoardInfo);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  };

  const scoreHandler = () => {
    const result = getScore();
    setScore(result);
  };

  return (
    <div className="main-bar">
      <Topbar />

      <div className="user-dashboard">
        <div className="categories-section rule-section">
          <h1 className="Larger-heading section-title space-between">
            Result: {score}/50
            <div>
              <button
                className="btn btn-primary btn-score-check"
                onClick={() => scoreHandler()}
              >
                Score Check
              </button>
            </div>
          </h1>

          <div className="question-wrapper">
            {currentQuizzes?.map(
              (eachQuestion: eachQuestionType, indx: number) => {
                return (
                  <div key={+indx}>
                    <h2 className="question-title">
                      {indx + 1}. {eachQuestion.question}
                    </h2>
                    <ul className="q-list-wrapper">
                      {eachQuestion.options.map((each, i) => (
                        <li
                          key={i}
                          className={`${
                            each === eachQuestion.ans
                              ? "q-list correct-ans"
                              : "q-list"
                          }  ${
                            each === selectedOption[indx] &&
                            each !== eachQuestion.ans
                              ? "q-list wrong-ans"
                              : "q-list"
                          }`}
                        >
                          <label>{each}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>

          <div className="btn-wrapper">
            <button
              className="btn btn-primary"
              onClick={(event) => leaderBoardHandler(event)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export { Result };
