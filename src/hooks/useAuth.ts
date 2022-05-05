import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
 


export const useAuth = () => {


  const navigate = useNavigate()

  const signupForm = async (formData: { email: string; password: string; firstName: string; lastName: string }, from :{pathname: string} ) => {
    const email = formData.email;
    const password = formData.password;
     

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        
      );
      console.log(result);

      navigate(from,{ replace: true })

    } catch (error) {
        console.log(error)
    }
  };

  return { signupForm };
};
