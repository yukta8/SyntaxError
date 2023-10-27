import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import "./Login.css"

export const SignUp=()=>{
    return(

    <main>
  <div className="login-box">
    <div class="container">
      <p class="animated"> Sign Up Now!</p>
    </div>
    <form method="post" action="/register">
      <input type="text" id="name" name="name" placeholder="Enter your Name" required/>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter email " required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password" required
      no/>
      <input
        type="password"
        name="cpassword"
        id="cpassword"
        placeholder="Confirm password" required
      />
      <button type="submit" id="Submit" class="submit">SIGN UP</button>
      Or signup with
        <button class="google-auth"><FcGoogle/> Google</button>
        
      <div class="signup">
        <p>Already have an Account? &nbsp;</p>
        <Link to="/login">Login</Link>
      </div>
    </form>
    <div class="backhome">
    <button class="home"><a href="/home">Home</a></button>
  </div>

  </div>
    
  </main>
    )
}