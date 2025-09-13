import React from "react";
import "../style.css"; // keep your CSS
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PartnerRegister = () => {
  const navigate = useNavigate(); // outside component

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Partner form submitted ✅");
    
    const name = e.target.name.value;
    const contactName = e.target.name.value;
    const phone = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    
    const response = await axios.post("http://localhost:3000/api/auth/partner/register",{
      name,
      contactName,
      phone,
      email,
      password,
      address
    },{
      withCredentials:true
    })
     
    navigate("/create-food")


  };

  return (
    <div className="container">
      <h2>Partner sign up</h2>
      <p className="subtitle">Grow your business with our platform.</p>

      <div className="switch">
        Switch: <a href="/user/register">User</a> ·{" "}
        <a href="/partner/register" style={{ fontWeight: "700" }}>
          Food partner
        </a>
      </div>

      {/* FIXED className */}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Business Name" required />

        <div className="input-group">
          <input type="text" name="contactname" placeholder="Contact Name" required />
          <input type="tel" name="phone" placeholder="Phone" required />
        </div>

        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="text" name="address" placeholder="Address" required />
        <small>Full address helps customers find you faster.</small>

        <button type="submit">Create Partner Account</button>
      </form>

      <div className="footer">
        Already a partner? <a href="/partner/login">Sign in</a>
      </div>
    </div>
  );
};

export default PartnerRegister;
