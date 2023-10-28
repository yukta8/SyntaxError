import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import lback from "../../Assets/logback.jpg";

import "./Login.css";
import Navbar from "../Navbar/Navbar";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
        cpassword,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  console.log(email,password,name);
  };

  return (
    <main
      style={{
        backgroundImage: `url(${lback})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="login-box">
        <div className="container">
          <p className="animated"> Sign Up Now!</p>
        </div>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email "
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            no
          />
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="Confirm password"
            required
          />
          <button type="submit" id="Submit" className="submit">
            SIGN UP
          </button>
          Or signup with
          <button className="google-auth">
            <FcGoogle /> Google
          </button>
          <div className="signup">
            <p>Already have an Account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </main>
  );
};
