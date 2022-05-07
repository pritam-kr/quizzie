//type of context children
export type typeChildren = {
  children: React.ReactNode | string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
};

export type InitialStateTypes = {
  loading: boolean;
  error: string;
  uId: string;
  isAuthenticated: boolean;
};


export type AuthenticationAction = {
  type: "SET_AUTHENTICATION";
  payload: string;
};

export type InitializeAction = {
  type: "INITIALIZE";
};

export type UserLogout = {
  type: "USER_LOGOUT";
  payload: string;
};

export type LoadingAction = {
  type: "SET_LOADING";
  payload: boolean
}

export type AuthAction = AuthenticationAction | InitializeAction | UserLogout | LoadingAction;

export type AuthContextType = {
  state: InitialStateTypes;
  dispatch: React.Dispatch<AuthAction>;
};
