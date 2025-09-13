import React from "react";
import "../style.css";
import axios from "axios";

const  UserRegister =() => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName  = e.target.fullName.value;
    //console.log("fullname",fullName); -check whether it worls or not
    const email = e.target.email.value;
    const password = e.target.password.value;

    axios.post("http://localhost:3000/api/auth/user/register",{
          fullName,
          email,
          password
    })
  }


  return (
    <div className="form-container">
      <h2>User Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" id="fullName" placeholder="Full Name"  />
        <input type="email" id="email" placeholder="Email"  />
        <input type="password" id="password" placeholder="Password"  />
        <button type="submit">Register</button>
      </form>
      <div className="form-footer">
        Already have an account? <a href="/user-login">Login</a>
      </div>
    </div>
  );
}

export default UserRegister;
