import React from "react";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const  UserRegister =() => {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName  = e.target.fullName.value;
    //console.log("fullname",fullName); -check whether it worls or not
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;


   const response = await axios.post("http://localhost:3000/api/auth/user/register",{
        fullName,
        email,
        phone,
        password

    },{
      //to save cookie 
      withCredentials:true
    })
    console.log(response.data);

    //navigate to login page after successful registration
    navigate("/");
  }


  return (
    <div className="form-container">
      <h2>User Register</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name"  />
        <input type="email" name="email" placeholder="Email"  />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <input type="password" name="password" placeholder="Password"  />
        <button type="submit">Register</button>
      </form>
      <div className="form-footer">
        Already have an account? <a href="/user-login">Login</a>
      </div>
    </div>
  );
}

export default UserRegister;
