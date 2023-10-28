import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

import "./Login.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async () => {
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
  };

  return (
    <main>
      <div className="login-box">
        <div class="container">
          <p class="animated"> Sign Up Now!</p>
        </div>
        <form method="post" action="">
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
          <button type="submit" id="Submit" class="submit" onClick={handleSignup}>
            SIGN UP
          </button>
          Or signup with
          <button class="google-auth">
            <FcGoogle /> Google
          </button>
          <div class="signup">
            <p>Already have an Account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
        <div class="backhome">
          <button class="home">
            <a href="/home">Home</a>
          </button>
        </div>
      </div>
    </main>
  );
};
