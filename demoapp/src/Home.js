import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Link,useNavigate } from "react-router-dom";


const Home = () => {

  const navigateTo = useNavigate();
  
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={()=>navigateTo('SucessLogined')} >Logined</button>
    </>
  );
};
export default Home;
