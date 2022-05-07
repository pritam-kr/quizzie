import { onAuthStateChanged, } from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { typeChildren, AuthContextType } from "../allTypes/authTypes";
import { auth } from "../firebase/firebase";
import {authReducer} from "../reducer/index"


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
