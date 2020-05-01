import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Impec-Logo-Color.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Impec Group logo" id="header-logo"></img>
      <div id="menu">
        <Link className="menu-option" to="/">
          HOME
        </Link>
        <div className="dropdown">
          <Link className="menu-option About-Us" to="/">
            ABOUT US
          </Link>
          <div className="dropdown-content">
            <Link className="dropdown-option" to="/">
              What We Do
            </Link>
            <Link className="dropdown-option" to="/">
              Our Vision
            </Link>
            <Link className="dropdown-option" to="/">
              Meet the Team
            </Link>
            <Link className="dropdown-option" to="/">
              Our History
            </Link>
            <Link className="dropdown-option" to="/">
              Strategic Alliances
            </Link>
            <Link className="dropdown-option" to="/">
              Visit Us
            </Link>
          </div>
        </div>
        <Link className="menu-option Services" to="/">
          SERVICES
        </Link>
        <Link className="menu-option Case-Studies" to="/">
          CASE STUDIES
        </Link>
        <Link className="menu-option Service-Requests" to="/">
          SERVICE REQUESTS
        </Link>
        <Link className="menu-option Careers" to="/">
          CAREERS
        </Link>
        <Link className="menu-option Contact" to="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
