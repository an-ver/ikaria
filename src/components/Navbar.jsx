import React, { useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (path) => {
    setIsOpen(false); // Close the menu after navigation
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <button
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        </button>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => navigateTo("/panigiria")}
            >
              Τα Πανιγύρια
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => navigateTo("/paralies")}
            >
              Οι Παραλίες
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => navigateTo("/estiatoria")}
            >
              Τα Εστιατόρια
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={() => navigateTo("/xwria")}>
              Τα Χωριά
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
