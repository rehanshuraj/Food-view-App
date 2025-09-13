import React from "react";
import "../style.css";

function PartnerLogin() {
  return (
    <div className="form-container">
      <h2>Food Partner Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="form-footer">
        Don’t have an account? <a href="/partner-register">Register</a>
      </div>
    </div>
  );
}

export default PartnerLogin;
