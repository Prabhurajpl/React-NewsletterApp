import React from "react";
import { NavLink } from "react-router-dom";

const navlinkstyle = ({ isActive })=>{
    return {
      fontWeight : isActive ? 'bold' :'normal',
      textDecoration : isActive ? 'none' : 'underline'
    }
}


const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink  to ='/'>Home</NavLink>
        <NavLink  to ='/about'>About</NavLink>

      </nav>
    </>
  );
};

export default Navbar;
