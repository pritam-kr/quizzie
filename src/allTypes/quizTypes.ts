import {CategoryTypes} from "./categoryTypes"
import { DocumentData } from "firebase/firestore";
export type props = {
    category: CategoryTypes
}

export type categoryType = {
    category : string
}



//Quiz context types

export type InitializeAction = {
    type: "INITIALIZE";
};

export type QuizInitialStateType = {
    loading: boolean;
    categories: DocumentData;
    quizzes: DocumentData;
    currentQuizzes: DocumentData;
    selectedOption: any  ;
    answers: DocumentData

}

export type LoadingAction = {
    type: "SET_LOADING";
    payload: boolean;
}

export type GetCategoriesAction = {
    type: "GET_CATEGORY";
    payload: {
        categories: DocumentData
    }
}

export type GetQuizAction = {
    type: "GET_QUIZ";
    payload: {
        quizzes: DocumentData
    }
}


export type GetFilterQuiz = {
    type: "GET_FILTER_QUIZ";
    payload: {
        currentQuizzes: DocumentData
    }
}


export type SetAnswers = {
    type: "SET_ANSWERS";
    payload: {
        answers: DocumentData
    }
}


export type SelectedOptionType = {
    type: "SELECT_OPTION";
    payload: {
        selectedOption: any 
    }
}

export type ResetSelectOption = {
    type: "RESET_SELECT_OPTION",
    payload : {
        selectedOption: []
    }
}


export type QuizzesActions = InitializeAction | LoadingAction | GetCategoriesAction | GetQuizAction | GetFilterQuiz | SetAnswers | SelectedOptionType|ResetSelectOption  


export type QuizContextType = {
    quizState: QuizInitialStateType;
    quizDispatch: React.Dispatch<QuizzesActions>;
    leaderBoard: any
};