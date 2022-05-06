

import { useLocation, Navigate } from "react-router-dom";
import { typeChildren } from "../allTypes/authTypes"
import { useAuthContext } from "../context";

export const PrivateRoute = ({ children }: any) => {

    // const {state: {uId}} = useAuthContext()
    const uId = JSON.parse(localStorage.getItem("uid") || "{}") || null

    const location = useLocation();

    return typeof uId === "string"? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
