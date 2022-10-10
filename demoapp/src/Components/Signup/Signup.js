import React, { useState, useRef, useEffect } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./Signupstyle.css";
import Login from "../Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [displayname, setDisplayname] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    debugger;
    const signupData = new FormData(e.target);
    Adduser(Object.fromEntries(signupData.entries()));
  };
  const Adduser =  (signupdetails) => {
    let userRegdetails = [];
    if (localStorage.getItem("Users")) {
      userRegdetails = JSON.parse(localStorage.getItem("Users") || "{}");
      console.log(userRegdetails);
      userRegdetails = [signupdetails, ...userRegdetails];
    } else {
      userRegdetails = [signupdetails];
    }

    localStorage.setItem("Users", JSON.stringify(userRegdetails));
    alert("User added");
    // toast.success("useradded",{
    //     pauseOnFocusLoss: false}
    // );
    navigate("/Login");
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
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
          <input
            type="password"
            name="password2"
            placeholder="Retype password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <input
            type="text"
            name="displayname"
            placeholder="Displayname"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
          />

          <button className="submit">Sign up</button>
          <ToastContainer />

          <p>
            <Link to="/Login" class="signup__link" href="#"><br/>
              Have already an account ? Login here{" "}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Signup;
