import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faInfoCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const handleSearch = (searchTerm) => {
    // Redirect to a search results page with the search term
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faHouse} className="nav-icon" />
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              About
            </NavLink>
          </li>
          <li className="nav-item ">
            {/* <span className="nav-link" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="nav-icon" />
            </span> */}
            <div className="nav-item-search">
              <SearchInput onSearch={handleSearch} />
            </div>
          </li>

          <li className="nav-item dropdown">
            <span className="nav-link" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faBars} className="nav-icon-menu" />
            </span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <NavLink to="/paralies">Παραλίες</NavLink>
                  </li>
                  <li>
                    <NavLink to="/estiatoria">Εστιατόρια</NavLink>
                  </li>
                  <li>
                    <NavLink to="/xwria">Χωριά</NavLink>
                  </li>
                  <li>
                    <NavLink to="/panigiria">Πανηγύρια</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
