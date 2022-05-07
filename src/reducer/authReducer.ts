import {InitialStateTypes, AuthAction} from "../allTypes/authTypes"

export const authReducer = (state: InitialStateTypes, action: AuthAction) => {
    switch (action.type) {
  
      case "SET_AUTHENTICATION":
  
        return { ...state, uId: action.payload }
  
      case "USER_LOGOUT":
        return { ...state, uId: action.payload, }
  
      case "SET_LOADING":
        return {...state, loading: action.payload}
  
      default:
        return state;
    }
  };