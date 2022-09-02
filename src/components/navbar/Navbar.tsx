import React from "react";
import "./navbar.css";
const Navbar = () => {
  const handleRegister = () => {
    console.log("register clicked");
  };
  const handleLogin = () => {
    console.log("login clicked");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">KTM-Booking</div>
        <div className="navItem">
          <button className="navButton" onClick={handleRegister}>
            Register
          </button>
          <button className="navButton" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
