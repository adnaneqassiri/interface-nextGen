import React from "react";
import logo from "../images/logo.png";
import man from "../images/man-icon-1.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <p>NEXTGEN</p>
          <img src={logo} alt="Logo" />
        </div>
        <div className="right-side">
          <NavLink to="/login" activeClassName="active">
            LOGIN
          </NavLink>
          <div className="profile-icon">
            <img src={man} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
