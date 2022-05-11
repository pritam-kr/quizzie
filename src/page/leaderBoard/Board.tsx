import { Topbar, Footer } from "../../component/index";
import { useQuizContext } from "../../context";
import "./board.css";
const Board = () => {
    const { leaderBoard } = useQuizContext();
    const sortedData = [...leaderBoard].sort((a:any, b:any) => b.score - a.score)

    
    return (
        <div className="main-bar">
            <Topbar />
            <div className="user-dashboard">
                <div className="categories-section leaderboard-section">
                    <h1 className="Larger-heading section-title space-between">
                        Leaderboard
                    </h1>

                    <div>
                        <div className="board-table ">
                            <div className="board-box board-heading">
                                <h2> Name </h2>
                            </div>
                            <div className="board-box board-heading">
                                <h2> Email </h2>
                            </div>
                            <div className="board-box board-heading">
                                <h2> Score</h2>
                            </div>
                        </div>

                        { sortedData?.map(
                            (each: {
                                firstName: string;
                                lastName: string;
                                email: string;
                                score: number;
                            }) => {
                                return (
                                    <div className="board-table">
                                        <div className="board-box">
                                            <p>
                                                {each.firstName} {each.lastName}
                                            </p>
                                        </div>
                                        <div className="board-box">
                                            <p>{each.email}</p>
                                        </div>
                                        <div className="board-box">
                                            <p>{each.score}</p>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export { Board };
