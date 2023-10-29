import React, { useRef } from "react";
import "./navbar.css";
import logo from "../../Assets/logo2.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
// import Avatar from "@mui/material/Avatar";
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { BiSolidLogInCircle } from "react-icons/bi";
import Cookies from "js-cookie";
import axios from "axios";

const Navbar = () => {
  const locator = useLocation();
  const navRef = useRef();
  const navigate = useNavigate();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const handleLogout = async () => {
    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout successful",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Cookies.remove("authToken");
      const resp = await axios.get("/auth/logout");
      // navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  const isAuthenticated = Cookies.get("authToken") ? true : false;
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
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
        {isAuthenticated ? (
          <Link
            // to="/"
            style={{ textDecoration: "none" }}
            className="nav-link"
            onClick={handleLogout}
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            className={
              locator.pathname === "/login" ? "nav-link nav-acitve" : "nav-link"
            }
          >
            <BiSolidLogInCircle />
          </Link>
        )}
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
        {/* <Avatar className="avtar" id="basic-button"></Avatar> */}
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
