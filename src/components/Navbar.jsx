import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInfoCircle,
  faBars,
  faUmbrellaBeach,
  faUtensils,
  faTree,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="nav-container">
        <ul className={`nav-menu ${isDropdownOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faHouse} className="nav-icon" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/paralies" className="nav-link">
              <FontAwesomeIcon icon={faUmbrellaBeach} className="nav-icon" />
              Παραλίες
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/estiatoria" className="nav-link">
              <FontAwesomeIcon icon={faUtensils} className="nav-icon" />
              Εστιατόρια
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/xwria" className="nav-link">
              <FontAwesomeIcon icon={faTree} className="nav-icon" />
              Χωριά
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/panigiria" className="nav-link">
              <FontAwesomeIcon icon={faGuitar} className="nav-icon" />
              Πανηγύρια
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon-menu" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
