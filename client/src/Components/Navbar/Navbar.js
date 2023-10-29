import React, { useRef, useState } from "react";
import "./navbar.css";
import logo from "../../Assets/logo2.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsChatSquareHeartFill } from "react-icons/bs";
import {BiSolidLogInCircle} from "react-icons/bi";

const Navbar = () => {
  const locator = useLocation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav">
      <Link to="/" style={ {textDecoration: "none"} }>
        <img src={logo} alt="STC" className="nav-logo" />
      </Link>
      <div className="nav-links" ref={navRef}>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={
            locator.pathname === "/" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          <BiSolidHomeHeart />
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to="/login"
          id="log"
          className={
            locator.pathname === "/login" ? "nav-link nav-acitve" : "nav-link"
          }
        >
          <BiSolidLogInCircle />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/discussionforum"
          className={
            locator.pathname === "/discussionforum"
              ? "nav-link nav-acitve"
              : "nav-link"
          }
        >
          <BsChatSquareHeartFill />
        </Link>

        <Avatar className="avtar" id="basic-button"></Avatar>
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
