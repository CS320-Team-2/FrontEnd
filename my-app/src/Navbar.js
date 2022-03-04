import React from "react";
import logo from './ukg_logo.png';
import "./App.css";

function Navbar() {
  return (
  <div className="Navbar">
    <div className="logoImage">
      <img className="logo"
        src={logo}
        alt='UKG Icon'></img>
    </div>
    <div className="middle">
      <button>Create Task</button>
      <button>Request Peer Eval</button>
      <button>Request PTO</button>
    </div>
    <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div>
  </div>
  );
}

export default Navbar;