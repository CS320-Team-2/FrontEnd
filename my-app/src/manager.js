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
    <a class="button" href="#popup1" id="asst"><center>Assign Training</center></a>
    <a class="button" href="#popup2" id="list"><center>Employee List</center></a>
    <a class="button" href="#popup3" id="review"><center>Write Review</center></a>
    </div>

    <div classname='TypeOfPage'>
    <h3><center>MANAGER ACCOUNT</center></h3>
    </div>
    <div class="dropdown">
  <a class="user-button">DanielBarskiy</a>
  {/* <a class ="button"><center></center></a> */}
  <div class="dropdown-content">
    <a href="#">32221178</a>
    <a href="#">Logout</a>
    {/* <a href="#">Link 3</a> */}
  </div>
</div>
    {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}
    
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

    <div id="popup3" class="overlay">
    <div class="popup">
    <h2><center>Performance Review</center></h2>
    <a class="close" href="#">&times;</a>
    <div class="content">
        <label for="fname">Send To: </label>
        <input type="text" id="lable1" name="mylable"></input><br></br>
        <p></p>
        <label for="fname">Growth Feedback: </label>
        <ul class="likert">
           <li> A lot </li>
            <li><input type="radio" name="growth" value="1" /></li>
             <li><input type="radio" name="growth" value="2" /></li>
             <li><input type="radio" name="growth" value="3" /></li>
             <li><input type="radio" name="growth" value="4" /></li>
            <li><input type="radio" name="growth" value="5" /></li>
         <li> None </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Kindness Feedback: </label>
        <ul class="likert">
           <li> Very </li>
            <li><input type="radio" name="kind" value="1" /></li>
             <li><input type="radio" name="kind" value="2" /></li>
             <li><input type="radio" name="kind" value="3" /></li>
             <li><input type="radio" name="kind" value="4" /></li>
            <li><input type="radio" name="kind" value="5" /></li>
         <li> None </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Delivery Feedback: </label>
        <ul class="likert">
           <li> Very Well </li>
            <li><input type="radio" name="delivery" value="1" /></li>
             <li><input type="radio" name="delivery" value="2" /></li>
             <li><input type="radio" name="delivery" value="3" /></li>
             <li><input type="radio" name="delivery" value="4" /></li>
            <li><input type="radio" name="delivery" value="5" /></li>
         <li> Needs Improvement </li>
      </ul><br></br>
        <p></p>
        <label for="fname">Overall Feedback: </label>
        <textarea id = "rev-desc" name="rev-desc" rows="5" cols= "47"></textarea>
        <div className="button-container">
            <input type="submit" value="Submit"/>
          </div>
    </div>
  </div>
      </div>
  </div>



 




  <div className="CONT">
    <div className="PTObox">
    <div className="ptoboxed"><h2> PTO Requests:</h2></div>
    <div className="ptolist"> 
      <div className="PTO_component">
        <div className="PTO-TEXT">
        <p>Name : Moe Joe</p>
        <p>From 10/15/2022 To 10/17/2022</p>
        <p>Comment: Vacation with Family</p>
        <p>Type : Personal</p>
        <p>Date and Time Requested : At 09:04:00 AM on 10/13/2022</p>
        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button">Approve</button>
        <button type="button" id="PTO-DENY-button">Deny</button>
        </div>
      </div>
      <div className="PTO_component">
        <div className="PTO-TEXT">
        <p>Name : Joe Doe</p>
        <p>From 11/03/2022 To 11/10/2022</p>
        <p>Comment: Medical leave</p>
        <p>Type : Personal</p>
        <p>Date and Time Requested : At 09:04:00 AM on 10/13/2022</p>
        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button">Approve</button>
        <button type="button" id="PTO-DENY-button">Deny</button>
        </div>
      </div>
      <div className="PTO_component">
        <div className="PTO-TEXT">
        <p>Name : Doe Moe</p>
        <p>From 08/17/2022 To 10/05/2022</p>
        <p>Comment: Business Trip</p>
        <p>Type : Company</p>
        <p>Date and Time Requested : At 10:04:00 PM on 04/13/2022</p>
        </div>
        <div className="PTO-BUTT">
        <button type="button" id="PTO-APPROVE-button">Approve</button>
        <button type="button" id="PTO-DENY-button">Deny</button>
        </div>
      </div>
    </div>
    </div>
    <div className="ATbox">
    <div className="astboxed"><h2> Assigned Training:</h2></div>
    <div className="asstlist"> </div>
    </div>
    </div>
  </div>
  
  );
}

export default Manager;