import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { getErrorMessage } from "../utils";
import { useAuthContext } from "../context/index";
import { loginTypes } from "../allTypes/formTypes"
import { useFirebase } from "./useFirebase";

export const useAuth = () => {
  const navigate = useNavigate();

  const { dispatch } = useAuthContext();
  const { createUserCollection } = useFirebase()


  // Signup form service
  const signupForm = async (
    formData: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
    },
    from: { pathname: string }
  ) => {
    const email = formData.email;
    const password = formData.password;
    const firstName= formData.firstName;
    const lastName = formData.lastName;

    try {

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

     if(user){
      await createUserCollection(user,{firstName, lastName})
      navigate(from, { replace: true });
     }
    } catch (error) {
      if (
        getErrorMessage(error) ===
        "Firebase: Error (auth/email-already-in-use)."
      ) {
        toast.error("Email is already registered. Try to login", {
          position: "top-right",
        });
      } else {
        toast.error("Something went wrong. Try again after some time.", {
          position: "top-right",
        });
      }
    }
  };

  // Login form service
  const loginForm = async (formData: loginTypes, from: { pathname: string }) => {
    const email = formData.email;
    const password = formData.password;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result) {
        toast.success("Successfully User Login", { position: "top-right" })
        navigate(from, { replace: true });
      }

    } catch (error) {
      if (getErrorMessage(error) === "Firebase: Error (auth/wrong-password).") {
        toast.error(
          "Entered email and password credentials doesn't match. Please try again.",
          { position: "top-right" }
        );
      } else if (
        getErrorMessage(error) === "Firebase: Error (auth/user-not-found)."
      ) {
        toast.error("User not found", { position: "top-right" });
      } else {
        toast.error("something went wrong. Try again after some time.", {
          position: "top-right",
        });
      }
    }
  };

  //Logout user service
  const logOutHandler = () => {
    signOut(auth);
    dispatch({ type: "USER_LOGOUT", payload: "", });
    toast.success("user logout", { position: "top-right" });
    localStorage.removeItem("user")
    localStorage.removeItem("uid")
    localStorage.removeItem("username")
    navigate("/")
  };

  return { signupForm, loginForm, logOutHandler };
};
