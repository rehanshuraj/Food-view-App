import React from "react";
import "../style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin=() => {
  const navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
   


   const response = await axios.post("http://localhost:3000/api/auth/user/login",{
        
        email,
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
      <h2>User Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="form-footer">
        Don’t have an account? <a href="/user-register">Register</a>
      </div>
    </div>
  );
}

export default UserLogin;
