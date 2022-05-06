import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { typeChildren, InitialStateTypes, AuthAction, AuthContextType } from "../allTypes/authTypes";
import { auth } from "../firebase/firebase";


const authContext = createContext({} as AuthContextType);

const userInfo = JSON.parse(localStorage.getItem("user") || "{}") || null
const uId = JSON.parse(localStorage.getItem("uid") || "{}") || null

const initialState = {
  loading: false,
  error: "",
  uId: "",
  isAuthenticated: false,
  user:  ""
};

const authReducer = (state: InitialStateTypes, action: AuthAction) => {
  switch (action.type) {

    case "SET_AUTHENTICATION":

      return { ...state, uId: action.payload }

    case "USER_LOGOUT":
      return { ...state, uId: action.payload, }

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: typeChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        (user?.uid && localStorage.setItem("uid", JSON.stringify(user?.uid)))
        dispatch({ type: "SET_AUTHENTICATION", payload:   user.uid  })
      }

    })

  }, [])


  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
