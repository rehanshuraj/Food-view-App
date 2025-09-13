import React from "react";
import "../style.css";

function UserLogin() {
  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="form-footer">
        Don’t have an account? <a href="/user-register">Register</a>
      </div>
    </div>
  );
}

export default UserLogin;
