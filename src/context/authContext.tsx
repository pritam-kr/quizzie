import { onAuthStateChanged, } from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { typeChildren, AuthContextType } from "../allTypes/authTypes";
import { auth } from "../firebase/firebase";
import { useFirebase } from "../hooks";
import { authReducer } from "../reducer/index"


const authContext = createContext({} as AuthContextType);


const initialState = {
  loading: false,
  error: "",
  uId: "",
  isAuthenticated: false,
  user: ""
};


const AuthContextProvider = ({ children }: typeChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Doing to keep user info on state 
  const { getUserInfo } = useFirebase()
  const [user, setUser] = useState({ email: "", firstName: "", lastName: "" })

  //Getting current user data from firebase
  async function setUserInfo() {
    const { email, firstName, lastName } = await getUserInfo(state.uId) || {}
    setUser({ email: email, firstName: firstName, lastName: lastName })
  }

  useEffect(() => {
    setUserInfo()
  }, [state])

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        (user?.uid && localStorage.setItem("uid", JSON.stringify(user?.uid)))
        dispatch({ type: "SET_AUTHENTICATION", payload: user.uid })
      }
    })

  }, [])


  return (
    <authContext.Provider value={{ state, dispatch, user  }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
