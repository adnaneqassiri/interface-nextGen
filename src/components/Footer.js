import React from "react";

import logo from "../images/logo.png";
import logoEnsa from "../images/ensa-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="context">
          <h2>Context</h2>
          <p>
            Dans le cadre d'une école moderne, la communication entre les
            étudiants, les professeurs, et les responsables est essentielle.
          </p>
        </div>
        <div className="footer-links">
          <h2>Links</h2>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="logos">
          <img src={logo} alt="" />
          <img src={logoEnsa} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
