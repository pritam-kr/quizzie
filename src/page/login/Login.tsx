import { Link, useLocation } from "react-router-dom";
import { Footer, Loader } from "../../component/index";
import "./login.css";
import * as FaIcons from "react-icons/fa";
import { useAuth } from "../../hooks/index"
import React, { useState } from "react";
import toast from "react-hot-toast";
import { regEx } from "../../utils";
import { useAuthContext } from "../../context";


//Types for login inputs
export type loginTypes = {
    email: string
    password: string
}

const Login = () => {

    const { loginForm } = useAuth()
    const { state: { loading } } = useAuthContext()

    //Types for location 
    type LocationState = {
        from: {
            pathname: string;
        };
    };

    const location = useLocation();
    const { from } = (location.state as LocationState) || { from: { pathname: "/" } };



    const [loginFormData, setLoginFormData] = useState<loginTypes>({ email: "", password: "" })

    const loginFormHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        if (loginFormData.email === "" || loginFormData.password === "") {
            toast.error("Input field can not be empty.", { position: "top-right" })
        } else if (!regEx.test(loginFormData.email)) {
            toast.error("Enter valid Email.", { position: "top-right" })
        } else {
            loginForm(loginFormData, from)
        }

    }

    return (
        <>
            <nav className="login-nav">
                {" "}
                <div className="logo">
                    <h1>
                        <Link to="/">Quizzie</Link>
                    </h1>
                </div>
            </nav>

            {/* Login Container Start */}
            <div className="container login-container center">
                <form className="form login-form">
                    {loading &&  <Loader />}
                    <div className="form-header">
                        <h1 className="form-title">Login</h1>
                    </div>

                    <div className="input-row">
                        <label className="input-label form-label">Email:* </label>
                        <input
                            value={loginFormData.email}
                            type="email"
                            placeholder="example@gmail.com"
                            className="input primary-input"
                            onChange={(event) =>
                                setLoginFormData((prev) => ({
                                    ...prev,
                                    email: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>

                    <div className="input-row">
                        <label className="input-label form-label">
                            Password: <span className="reqired">*</span>
                        </label>
                        <input
                            value={loginFormData.password}
                            type="password"
                            placeholder="********"
                            className="input required-input"
                            required

                            onChange={(event) =>
                                setLoginFormData((prev) => ({
                                    ...prev,
                                    password: event.target.value,
                                }))
                            }
                        />
                    </div>

                    <div className="input-row">
                        <button className="btn btn-primary btn-submit" onClick={(e) => loginFormHandler(e)}>Login</button>
                    </div>

                    <div className="form-footer">
                        <Link to="/signup" >
                            <p className="paragraph center">
                                Create an Account.
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

export { Login };
