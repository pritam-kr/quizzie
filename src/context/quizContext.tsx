import { useReducer, createContext, useContext, useEffect } from "react"
import { typeChildren } from "../allTypes/authTypes"
import {categoriesRef, quizRef} from "../firebase/firebase"
import { DocumentData, getDocs} from "firebase/firestore";


type InitializeAction = {
    type: "INITIALIZE";
};

type QuizInitialStateType = {
    loading: boolean;
    categories: DocumentData ;
    quizzes: DocumentData ;
}


type LoadingAction = {
    type: "SET_LOADING";
    payload: boolean;
}

type GetCategoriesAction = {
    type: "GET_CATEGORY";
    payload: {
        categories: DocumentData 
    }
}

type GetQuizAction = {
    type: "GET_QUIZ";
    payload: {
        quizzes: DocumentData 
    }
}


type QuizzesActions = InitializeAction | LoadingAction | GetCategoriesAction | GetQuizAction

export type QuizContextType = {
    quizState: QuizInitialStateType;
    quizDispatch: React.Dispatch<QuizzesActions>;
};

const quizContext = createContext<QuizContextType>({} as QuizContextType)


const initialState = {
    loading: false,
    categories: [],
    quizzes: []
}


const quizReducer = (state: QuizInitialStateType, action: QuizzesActions) => {

    switch (action.type) {
        
        case "SET_LOADING":
        return {...state, loading: action.payload}

        case "GET_CATEGORY":
        return{...state, categories: action.payload.categories}
        
        default:
        return state;
    }
}


const QuizContextProvider = ({ children }: typeChildren) => {
    const [quizState, quizDispatch] = useReducer(quizReducer, initialState)

    // Getting categories from firebase 
    useEffect(() => {
        (async () => {
            quizDispatch({type: "SET_LOADING", payload: true})

            try {
                let res = await getDocs(categoriesRef);
                const categories: DocumentData | undefined = res.docs.map(ele => {
                  return { ...ele.data(), id: ele.id };
                });

              if(categories){
                quizDispatch({type: "SET_LOADING", payload: false})
                quizDispatch({type: "GET_CATEGORY", payload: {categories}})

              }
              } catch (err) {
                quizDispatch({type: "SET_LOADING", payload: false})
                console.log(err);
                throw Error("something went wrong");
              }
        })()

    }, [])


      // Getting quizzes from firebase 
      useEffect(() => {
        (async () => {
            
            try {
                let res = await getDocs(quizRef);
                const quizzes: DocumentData | undefined = res.docs.map(ele => {
                  return { ...ele.data(), id: ele.id };
                });

                console.log(quizzes)
               
              } catch (err) {
                
                console.log(err);
                throw Error("something went wrong");
              }
        })()

    }, [])


    return (
        <quizContext.Provider value={{ quizState, quizDispatch }}>
            {children}
        </quizContext.Provider>
    )

}



const useQuizContext = () => useContext(quizContext)

export { QuizContextProvider, useQuizContext }