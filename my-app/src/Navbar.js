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
    <a class="button" href="#popup1"><center>Request Peer Eval</center></a>
      <button>Request PTO</button>
    </div>
    <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div>
    <div id="popup1" class="overlay">
	<div class="popup">
    <div class = "popup-header">
      <h2>Request Performance Review</h2>
    </div>
    <div class = "popup-body">
      <label for="fname">Request To: </label>
      <input type="text" id="fname" name="fname"></input><br></br>
    </div>
    <div className = "submit-button">
          <input type="submit-perf-rev" value="Submit"/>
    </div>
		<a class="close" href="#">&times;</a>
	</div>
</div>

  </div>
  );
}

export default Navbar;