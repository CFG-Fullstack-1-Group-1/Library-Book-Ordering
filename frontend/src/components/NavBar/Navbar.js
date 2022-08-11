// Functional imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Aesthetic imports
import { FaBars, FaTimes } from "react-icons/fa";
import whitelogo from "../../../static/images/whitelogo.png";
import "./Navbar.css";

// Make changes to side menu with https://www.youtube.com/watch?v=CXa0f4-dWi4
function Navbar() {
  // This is so we can click on the hamburger (3 lines) and have it show the nav bar when
  // it's clicked in mobile/smaller window mode we're setting it to false right now so that it
  // won't keep showing the side menu if it's not being clicked on.
  const [click, setClick] = useState(false);

  // This is an event listener so that we can use it to activate our clicks and allow the side menu to show up
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // This is the actual layout and design of the website, please make any stylistic changes in Navbar.css and not in here.
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="navbar-whitelogo" src={whitelogo} alt="logo" />
        </Link>

        {/* We've coded this to listen to a click function  and to then respond to it */}
        <div className="hamburger" onClick={handleClick}>
          {/* This will allow us to click and bring the cross out and then revert to the 3 bars if clicked again*/}
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        {/* If clicked, the actual side menu will come up with all the navigation options*/}
        {/* We're telling JS to either display the sidemenu on a click or show the regular navigation bar*/}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
              Search
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/order" className="nav-links" onClick={closeMobileMenu}>
              Order
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className="nav-item">
          <a href="/admin" className="nav-links" onClick={closeMobileMenu}>
            Admin
            <i class="fa-solid fa-user" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
