import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"
import "./Login.css";
import axios from "axios";
import lback from "../../Assets/logback.jpg";
import Navbar from "../Navbar/Navbar";

export const Login = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const HandleLogin= async(e)=>{
    e.preventDefault();
 try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  console.log(email,password);
  };
  
  return (
    <main
      style={{
        backgroundImage: `url(${lback})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    <Navbar/>
      <div className="login-box">
        <div className="container">
          <p className="animated">Login Now</p>
        </div>
        <form onSubmit={HandleLogin}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email "
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit" id="Submit" className="submit">
            LOGIN
          </button>
          Or login with
          <button className="google-auth">
            <FcGoogle /> Google
          </button>
          <div className="signin">
            <p>Don't have an Account? &nbsp; </p>
            <Link style={{ color: "blue" }} to="/signup">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
        
      </div>
    </main>
  );
};
