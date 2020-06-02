import React from "react";
import whitelogo from "../../img/Impec-Logo-White.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img src={whitelogo} alt="Impec Group logo" id="footer-logo"></img>
      <ul className="footer-links">
        <p id="bold-footer">Links</p>
        <li>
          <Link className="dropdown-option" to="/covid">
            Return to Work Solutions Post COVID-19
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/staffing">
            Global Staffing and Recruitment
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/strategic-planning">
            Strategic Planning
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/project-management">
            Project Management
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/operations">
            Operations and Site Services
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/sanitization">
            Sanitization and Infection Control
          </Link>
        </li>
        <li>
          <Link className="dropdown-option" to="/workplace-technology">
            Workplace Technology Solutions
          </Link>
        </li>
      </ul>
      <div className="social-contact">
        <p>Follow Us!</p>
        <p>LinkedIn</p>{" "}
      </div>
    </div>
  );
}

export default Footer;
