import React from "react";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
import "./Login.css";

export const Login = () => {
  return (
    <main>
      <div className="login-box">
      <div className="container">
        <p className="animated">Login Now</p>
      </div>
      <form method="post" action="">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email "
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <button type="submit" id="Submit" className="submit">
          LOGIN
        </button>
        Or login with
        <button className="google-auth"><FcGoogle/> Google</button>
        <div className="signin">
          <p>Don't have an Account? &nbsp; </p>
          <Link style={{color:"blue"}} to="/signup"> Sign Up</Link>
        </div>
      </form>
      <div class="backhome">
        <button className="home">
          <a href="/home">Home</a>
        </button>
      </div>
      </div>
    </main>
  );
};
