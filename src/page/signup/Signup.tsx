import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../component/index";
import * as FaIcons from "react-icons/fa";
import "./signup.css";
import { useState } from "react";
import { regEx } from "../../utils";
import { useAuth } from "../../hooks/index"
import toast from "react-hot-toast";
import {SignupUserType} from "../../allTypes/formTypes"


const Signup = () => {

  type LocationState = {
    from: {
      pathname: string;
    };
  };

  const location = useLocation();
   
  const { from } = (location.state as LocationState) || { from: { pathname: "/" } };
  const { signupForm } = useAuth()
  const [showPassword, setShowPassword] = useState(false);


  const [signupFormData, setSignupFormData] = useState<SignupUserType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checked: false
  });

  //React.MouseEvent for type of onClick event
  const signUpFormHandler = (e: React.MouseEvent) => {
    e.preventDefault();


    if (
      signupFormData.firstName === "" ||
      signupFormData.lastName === "" ||
      signupFormData.email === "" ||
      signupFormData.password === "" ||
      signupFormData.confirmPassword === ""
    ) {
      toast.error("Input field can not be Empty.", { duration: 2000 })
    } else if (signupFormData.password.length < 6) {
      toast.error("Please enter more than six character.", { duration: 2000 })
    } else if (signupFormData.password !== signupFormData.confirmPassword) {
      toast.error("Password does not matched.", { duration: 2000 })
    } else if (!regEx.test(signupFormData.email)) {
      toast.error("Enter a valid email.", { duration: 2000 })
    } else if (signupFormData.checked === false) {
      toast.error("Please checked All terms and condition.", { duration: 2000 })
    } else {
      toast.success("Form successfully submit.", { duration: 2000 })
      //Sending Data to Auth context
      signupForm(signupFormData, from );

      setSignupFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checked: false,
      });
    }


  };

  return (
    <>
      <nav className="login-nav">
        <div className="logo">
          <h1>
            <Link to="/">Quizzie</Link>
          </h1>
        </div>
      </nav>

      {/* Login Container Start */}
      <div className="container signup-container center">
        <form className="form">
          <div className="form-header">
            <h2 className="form-heading">Signup </h2>


          </div>

          <div className="inputs-wrapper">
            <div className="left-wrapper">
              <div className="input-row">
                <label className="input-label form-label">First Name: </label>
                <input
                  type="text"
                  value={signupFormData.firstName}
                  placeholder="Enter First Name"
                  className="input primary-input"
                  onChange={(event) =>
                    setSignupFormData((prev) => ({
                      ...prev,
                      firstName: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="input-row">
                <label className="input-label form-label">
                  Password: <span className="required">*</span>
                </label>
                <input
                  type="password"
                  value={signupFormData.password}
                  placeholder="******"
                  className="input required-input form-password-input"
                  required
                  onChange={(event) =>
                    setSignupFormData((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="right-wrapper">
              <div className="input-row">
                <label className="input-label form-label">Last Name: </label>
                <input
                  type="text"
                  value={signupFormData.lastName}
                  placeholder="Enter Last Name"
                  className="input primary-input"
                  onChange={(event) =>
                    setSignupFormData((prev) => ({
                      ...prev,
                      lastName: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="input-row">
                <label className="input-label form-label">
                  Confirm Password: <span className="required">*</span>
                </label>
                <div className="confirm-Password-input">
                  <input
                    value={signupFormData.confirmPassword}
                    type={!showPassword ? "password" : "text"}
                    placeholder="******"
                    className="input required-input form-password-input "
                    onChange={(event) =>
                      setSignupFormData((prev) => ({
                        ...prev,
                        confirmPassword: event.target.value,
                      }))
                    }
                  />
                  {showPassword ? (
                    <FaIcons.FaEye
                      className="icons eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FaIcons.FaEyeSlash
                      className="icons eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/*Email input filed */}
          <div className="input-row">
            <label className="input-label form-label">
              Email: <span className="required">*</span>
            </label>
            <input
              type="email"
              value={signupFormData.email}
              placeholder="example@gmail.com"
              className="input required-input form-password-input"
              required
              onChange={(event) =>
                setSignupFormData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
          </div>

          {/*checkbox input filed */}
          <div className="input-row checkbox-row">
            <label className="input-label">
              <input
                type="checkbox"
                checked={signupFormData.checked}
                className="input checkbox-input "
                onChange={(event) =>
                  setSignupFormData((prev) => ({
                    ...prev,
                    checked: event.target.checked,
                  }))
                }
              />
              <span className="checkbox-text">
                Accept all terms & conditions
              </span>
            </label>
          </div>

          <div className="input-row">
            <button
              className="btn btn-primary btn-submit text-md"
              onClick={(e) => signUpFormHandler(e)}
            >
              Signup
            </button>
          </div>
          <div className="form-footer">
            <Link to="/login">
              <p className="paragraph center">
                Already an Account.
                <FaIcons.FaChevronRight />
              </p>
            </Link>
          </div>
        </form>
      </div>
      {/* Login Container End */}

      {/* footer section start */}
      <Footer />
      {/*footer section end */}
    </>
  );
};

export { Signup };
