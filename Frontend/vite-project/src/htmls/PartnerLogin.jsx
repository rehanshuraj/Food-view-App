import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

function PartnerLogin() {
  const navigate = useNavigate(); // outside component
  const  submitHandler=(e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = axios.post("http://localhost:3000/api/auth/partner/login",{
      email,
      password
    },{
      withCredentials:true
    });


    console.log(response.data);

    navigate("/create-food")

  }
  
  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form className="auth-form" onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="form-footer">
        Don’t have an account? <a href="/partner-register">Register</a>
      </div>
    </div>
  );
}

export default PartnerLogin;
