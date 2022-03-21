import React,{useState} from "react";
import logo from './ukg_logo.png';
import "./App.css";
import "./hpage.css";

function Manager() {
    const [isclickfromlist, click_set_true] = useState(false);

  return (
      <div className="Page">
  <div className="Navbar">
    <div className="logoImage">
      <img className="logo"
        src={logo}
        alt='UKG Icon'></img>
    </div>
    <div className="middle">
    <a class="button" href="#popup1" id="asst"><center>Assign trainning</center></a>
    <a class="button" href="#popup2" id="list"><center>Employee List</center></a>
    </div>
    <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div>
    
    <div id="popup1" class="overlay">
	    <div class="popup">
		<h2><center>BOX</center></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
            <label for="fname">Train to: </label>
            <input type="text" id="lable1" name="mylable"></input><br></br>
            <p></p>
            <label for="fname">Link: </label>
            <input type="text" id="lable2" name="lable2"></input><br></br>

            <div className="button-container">
            <input type="submit" value="Submit"/>
            </div>
	    </div>
	</div>
    
</div>

    <div id="popup2" class="overlay">
	    <div class="popup">
		<h2><center>BOX</center></h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
            <div className="elist">
                
                </div>
	    </div>
	    </div>
    
    </div>

  </div>
  <div className="CONT">
    <div className="PTObox">
    <div className="ptoboxed"><h2> PTO Requests:</h2></div>
    <div className="ptolist"> </div>
    </div>
    <div className="ATbox">
    <div className="astboxed"><h2> Assigned trainning:</h2></div>
    <div className="asstlist"> </div>
    </div>
    </div>
  </div>
  
  );
}

export default Manager;