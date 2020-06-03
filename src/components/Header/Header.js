import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Impec-Logo-Color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <span id="call-us">
        <p>CALL US: 408-330-9350</p>
      </span>
      <img src={logo} alt="Impec Group logo" id="header-logo"></img>
      <FontAwesomeIcon icon="fa-bars" />
      <div className="menu">
        <Link className="menu-option Home" to="/">
          HOME
        </Link>
        <div class="dropdown">
          <Link className="menu-option Services" to="/">
            SERVICES
          </Link>
          <div className="dropdown-content">
            <Link className="dropdown-option" to="/covid">
              Return to Work Solutions Post COVID-19
            </Link>
            <Link className="dropdown-option" to="/staffing">
              Global Staffing and Recruitment
            </Link>
            <Link className="dropdown-option" to="/strategic-planning">
              Strategic Planning
            </Link>
            <Link className="dropdown-option" to="/project-management">
              Project Management
            </Link>
            <Link className="dropdown-option" to="/operations">
              Operations and Site Services
            </Link>
            <Link className="dropdown-option" to="/sanitization">
              Sanitization and Infection Control
            </Link>
            <Link className="dropdown-option" to="/workplace-technology">
              Workplace Technology Solutions
            </Link>
          </div>
        </div>
        <Link className="menu-option Case-Studies" to="/">
          CASE STUDIES
        </Link>
        <Link className="menu-option Careers" to="/">
          CAREERS
        </Link>
        <div class="dropdown">
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
        <Link className="menu-option Contact" to="/">
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default Header;
