import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home/Home";
function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element ={<Login />} ></Route>
      <Route  path="Signup" element ={<Signup />} ></Route>
      <Route  path="Login" element ={<Login />} ></Route>
      <Route  path="Home" element ={<Home />} ></Route>
    </Routes>
    <ToastContainer/>
    </>
  );
}

export default App;
