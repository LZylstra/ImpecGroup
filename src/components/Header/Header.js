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
        <Link className="menu-option" to="/">
          ABOUT US
        </Link>
        <Link className="menu-option" to="/">
          SERVICES
        </Link>
        <Link className="menu-option" to="/">
          CASE STUDIES
        </Link>
        <Link className="menu-option" to="/">
          SERVICE REQUESTS
        </Link>
        <Link className="menu-option" to="/">
          CAREERS
        </Link>
        <Link className="menu-option" to="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
