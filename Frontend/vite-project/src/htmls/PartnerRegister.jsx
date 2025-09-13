import React from "react";
import "../style.css"; // same CSS from before

const PartnerRegister = () => {
  
  //here we write a function to handl form submission

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

      <form classsName="auth-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Business Name" required />

        <div className="input-group">
          <input type="text" placeholder="Contact Name" required />
          <input type="tel" placeholder="Phone" required />
        </div>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <input type="text" placeholder="Address" required />
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
