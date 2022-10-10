import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import   "./Signup/Signupstyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../Home/Home";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateto = useNavigate("");

  const handleLoginsubmit = (e) => {
    debugger
    var userContext =[];
    const LoginData = new FormData(e.target);
    const UserLoginDetails = Object.fromEntries(LoginData.entries());

    if (localStorage.getItem("Users")) {
     userContext = JSON.parse(localStorage.getItem("Users") || "{}");
    }
    for (let i = 0; i < userContext.length; i++) {
      if (userContext[i]["email"] === UserLoginDetails.email &&
        userContext[i]["password"] === UserLoginDetails.password) {
          navigateto("/Home");
        }
    }
  };
  return (
    <>
      <form onSubmit={handleLoginsubmit}>
        <div className="loginBox">
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit">Login</button>
          <p>
            <Link to="/Signup" class="signup__link" href="#">
              {" "}
              Not a member ? Sign up now{" "}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
