import React from "react";
import {NavLink,Link } from "react-router-dom";


const Header = () => {
  return (
    <>
<nav className="navbar bg-dark">
  <div className="container-fluid justify-content-space-around ">
    <Link className="navbar-brand fs-3 fw-bold text-light" to="/">Adil Brother's</Link>
   

<div>
              <NavLink
                to="/"
                className="text-light fw-bold text-decoration-none me-4"
              >
                Home
              </NavLink>
   
              <NavLink
                to="/Mirpurkhas"
                className="text-light fw-bold text-decoration-none me-4"
              >
                Mipurkhas
              </NavLink>
           
           
              <NavLink
                to="/Karachi"
                className="text-light fw-bold text-decoration-none me-4"
              >
               Karachi
              </NavLink>
           
    
              </div>
  </div>
</nav>
    </>
  );
};

export default Header;
