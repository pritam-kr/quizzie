import { useReducer, createContext, useContext, useEffect, useState } from "react"
import { typeChildren } from "../allTypes/authTypes"
import { QuizContextType} from "..//allTypes/quizTypes"
import { categoriesRef, db, quizRef } from "../firebase/firebase"
import { DocumentData, getDocs, collection, onSnapshot } from "firebase/firestore";
import {quizReducer,  initialState} from "../reducer/index"
import { useAuthContext } from "./authContext";
 

const quizContext = createContext<QuizContextType>({} as QuizContextType)

 
const QuizContextProvider = ({ children }: typeChildren) => {



    const [quizState, quizDispatch] = useReducer(quizReducer, initialState) 
    const [leaderBoard, setLeaderBoard] = useState<any>([])

    const {user} = useAuthContext()

    //Data for specific user
    const data = leaderBoard.filter((each: {email:string}) => each.email === user.email)
    //Total score of the Specific user
    const totalScoreOfUser = data.reduce((sum: number, currentValue: any ) => sum + currentValue.score, 0)


    // Getting categories from firebase 
    useEffect(() => {
        (async () => {
            quizDispatch({ type: "SET_LOADING", payload: true })

            try {
                let res = await getDocs(categoriesRef);
                const categories: DocumentData | undefined = res.docs.map(ele => {
                    return { ...ele.data(), id: ele.id };
                });

                if (categories) {
                    quizDispatch({ type: "SET_LOADING", payload: false })
                    quizDispatch({ type: "GET_CATEGORY", payload: { categories } })

                }
            } catch (err) {
                quizDispatch({ type: "SET_LOADING", payload: false })
                console.log(err);
                throw Error("something went wrong");
            }
        })()

    }, [])

    //Getting leader board data
    useEffect(() => {
        onSnapshot(collection(db, "leaderBoard"), (snapshot) => {
        setLeaderBoard(snapshot.docs.map((doc) => ({ ...doc.data() })))
       })
    }, [])

    // Getting quizzes from firebase 
    useEffect(() => {
        (async () => {

            try {
                let res = await getDocs(quizRef);
                const quizzes: DocumentData | undefined = res.docs.map(ele => {
                    return { ...ele.data(), id: ele.id };
                });

                if (quizzes) {
                     
                    quizDispatch({ type: "GET_QUIZ", payload: { quizzes } })
                }

            } catch (err) {
                console.log(err);
                throw Error("something went wrong");
            }
        })()

    }, [])


    return (
        <quizContext.Provider value={{ quizState, quizDispatch, leaderBoard,  totalScoreOfUser}}>
            {children}
        </quizContext.Provider>
    )

}
const useQuizContext = () => useContext(quizContext)

export { QuizContextProvider, useQuizContext }