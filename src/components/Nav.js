import React from "react";
import logo from "../images/logo.png";
import man from "../images/man-icon-1.png";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <p>NEXTGEN</p>
          <img src={logo} alt="" />
        </div>
        <div className="right-side">
          <button>LOG OUT</button>
          <div className="profile-icon">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
