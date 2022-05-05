import React, { createContext, useContext, useReducer } from "react";

import { typeChildren } from "../allTypes/authTypes";

type InitialStateTypes = {
  loading: boolean;
  error: string;
  uId: string;
  isAuthenticated: boolean;
};

type AuthenticationAction = {
  type: "SET_AUTHENTICATION";
  payload: {
    isAuthenticated: boolean;
    uid: string;
  };
};

type ErrorAction = {
  type: "SET_ERROR";
  payload: {
    error: string;
  };
};

type InitializeAction = {
  type: "INITIALIZE";
};

type AuthAction = AuthenticationAction | InitializeAction | ErrorAction;

type AuthContextType = {
  state: InitialStateTypes;
  dispatch: React.Dispatch<AuthAction>;
};




const authContext = createContext({} as AuthContextType);

const initialState = {
  loading: false,
  error: "",
  uId: "",
  isAuthenticated: false,
};

const authReducer = (state: InitialStateTypes, action: AuthAction) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, error: "Got error" };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: typeChildren) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuthContext = () => useContext(authContext);

export { AuthContextProvider, useAuthContext };
