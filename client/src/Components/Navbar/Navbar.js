import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../Assets/aboutus.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const locator = useLocation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav">
      <Link to="/">
        <img src={logo} alt="STC" className="nav-logo" />
      </Link>
      <div className="nav-links" ref={navRef}>
        <Link
          to="/"
          className={
            locator.pathname === "/" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Home
        </Link>
        <Link
          to="/groups"
          className={
            locator.pathname === "/groups" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Groups
        </Link>
        <Link
          to="/events"
          className={
            locator.pathname === "/events" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Events
        </Link>
        <Link
          to="/team"
          className={
            locator.pathname === "/team" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          Team
        </Link>
        {/* changes */}
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          <ImCross />{" "}
        </button>
      </div>
      <button onClick={showNavbar} className="nav-btn nav-open-btn">
        <FaBars />{" "}
      </button>
    </div>
  );
};

export default Navbar;
