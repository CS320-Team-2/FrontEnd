import React, { useState, useEffect } from "react";
import logo from "./ukg_logo.png";
import "./App.css";
// import { useState } from 'react';
import axios from 'axios'
import {App,App2} from "./username_db";

function Navbar() {
  let web = document.location.href;
  const te = web.split("/");
  let employee = te[4];
  let ab = employee.split("#")[0];
  const [managerID, setmanagerID] = useState("");
  const [formdataPTO, setformdataPTO] = useState({emp_id: ab, manager_id: "", type:"", start_date:"", end_date:"", additional_info:"", approved: 0});
  const [performanceData, setperformanceData] = useState({from_employee: ab, to_employee: "", delivery: "", kindness: "", growth: "", comments: ""});
  const [performanceData2, setperformanceData2] = useState({from_employee: ab, to_employee: 0, delivery: 0, kindness: 0, growth: 0, comments: ""});
  useEffect(() => {
    async function getManagerID(){
      const res = await axios.get('http://localhost:3000/employees/'+ab);
      setmanagerID(res.data.list[0].manager_id);
    }
    if(managerID === ""){
      getManagerID();
    }
    else{
      setformdataPTO({...formdataPTO,manager_id:managerID});
    }
  }, [managerID]);
  
  
  async function handleSubmit(){
    console.log(formdataPTO);
    const res = await axios.post('http://localhost:3000/pto/', formdataPTO)
    console.log(res)
  }

  async function handlePerformaceSubmit(){
    console.log(performanceData);
    const res = await axios.post('http://localhost:3000/performance/', performanceData)
    console.log(res)
  }

  async function handlePerformaceSubmit2(){
    console.log(performanceData2);
    const res = await axios.post('http://localhost:3000/performance/', performanceData2)
    console.log(res)
  }

  return (
    <div className="Navbar">
      <div className="logoImage">
        <img className="logo" src={logo} alt="UKG Icon"></img>
      </div>
      <div className="middle">
        <a class="button" href="#popup1">
          <center>Request Peer Eval</center>
        </a>
        <a class="button" href="#popup2">
          <center>Request PTO</center>
        </a>
        <a class="button" href="#popup3" id="review">
          <center>Write Review</center>
        </a>
        <a class="button" href="#popup5" id="inbox">
          <center>Inbox</center>
        </a>
      </div>
      <div classname="TypeOfPage">
        {/* <a class="button" href="#popup4" id="logout">Logout</a> */}
        {/* <h3>AHHHH </h3> */}

        <h3> EMPLOYEE ACCOUNT </h3>
      </div>

      <div class="dropdown">
        <a class="user-button">
          {" "}
          <App />
        </a>
        {/* <a class ="button"><center></center></a> */}
        <div class="dropdown-content">
          
          <a href="http://localhost:3000/"> Logout </a>
          {/* <a href="#">Logout</a> */}
          {/* <a href="#">Link 3</a> */}
        </div>
      </div>
    {/* <div classname='TypeOfPage'> */}
    {/* <a class="button" href="#popup4" id="logout">Logout</a> */}
    {/* <h3>AHHHH </h3> */}
    {/* <p> EMPLOYEE ACCOUNT </p> */}
    {/* </div> */}
  <div class="dropdown">
  <a class="user-button"> <App/></a>
  {/* <a class ="button"><center></center></a> */}
  <div class="dropdown-content">
    <a href="#"> User ID: <App2/> </a>
    <a href = 'http://localhost:3001/'> Logout </a>
    {/* <a href="#">Logout</a> */}
    {/* <a href="#">Link 3</a> */}
  </div>
</div>
      {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}
                <div id="popup5" class="overlay">
        <div class="popup">
        <h2><center>BOX</center></h2>
        <a class="close" href="#">&times;</a>
          <div class="content">
            <div className="elist">
            <ul class="list1 responsive green-checkmarks">


            </ul>
                </div>
            </div>
          </div>
      </div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <a class="close" href="#">
            &times;
          </a>
          <div class="popup-header">
            <h2>
              <center>Request Peer Evaluation</center>
            </h2>
          </div>
          <div class="popup-body">
            <label for="fname">Request To: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setperformanceData2({...performanceData2, to_employee : e.target.value})}}></input>
            <br></br>
          </div>
          <div className="button-container">
            <input type="submit" value="Submit" onClick={handlePerformaceSubmit2}/>
          </div>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
      <div id="popup2" class="overlay">
        <div class="popup">
          <h2>
            <center>PTO Request</center>
          </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <label for="fname">Type: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setformdataPTO({...formdataPTO, type : e.target.value})}} ></input>
            <br></br>
            <p></p>
          </div>
          <div class="popup-body">
            <label for="sdate">Start Date: </label>
            <input type="date" id="sdate" name="sdate" onChange={(e)=>{setformdataPTO({...formdataPTO, start_date : e.target.value})}}></input>
            <br></br>
          </div>
          <div class="popup-body">
            <label for="edate">End Date: </label>
            <input type="date" id="edate" name="edate" onChange={(e)=>{setformdataPTO({...formdataPTO, end_date : e.target.value})}}></input>
            <br></br>
          </div>
          <div class="popup-body">
            <label for="comments">Additional Comments(Optional): </label>
            <input type="text" id="comments" name="comments" onChange={(e)=>{setformdataPTO({...formdataPTO, additional_info : e.target.value})}}></input>
            <br></br>
          </div>
          <div className="button-container">
            <input type="submit" value="Submit" onClick={handleSubmit}/>
          </div>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
      <div id="popup3" class="overlay">
        <div class="popup">
          <h2>
            <center>Performance Review</center>
          </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <label for="fname">Send To: </label>
            <input type="text" id="lable1" name="mylable" onChange={(e)=>{setperformanceData({...performanceData, to_employee : e.target.value})}}></input>
            <br></br>
            <p></p>
            <label for="fname">Growth Feedback: </label>
            <ul class="likert">
              <li> None </li>
              <li>
                <input type="radio" name="growth" value="1" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="2" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="3" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="4" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="growth" value="5" onClick={(e)=>{setperformanceData({...performanceData, growth : e.target.value})}}/>
              </li>
              <li> A lot </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Kindness Feedback: </label>
            <ul class="likert">
              <li> None </li>
              <li>
                <input type="radio" name="kind" value="1" onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="2"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="3"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="4"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="kind" value="5"  onClick={(e)=>{setperformanceData({...performanceData, kindness : e.target.value})}}/>
              </li>
              <li> Very </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Delivery Feedback: </label>
            <ul class="likert">
              <li> Needs Improvement </li>
              <li>
                <input type="radio" name="delivery" value="1"  onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="2" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="3" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="4" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li>
                <input type="radio" name="delivery" value="5" onClick={(e)=>{setperformanceData({...performanceData, delivery : e.target.value})}}/>
              </li>
              <li> Very Well </li>
            </ul>
            <br></br>
            <p></p>
            <label for="fname">Overall Feedback: </label>
            <textarea
              id="rev-desc"
              name="rev-desc"
              rows="5"
              cols="47"
              onChange={(e)=>{setperformanceData({...performanceData, comments : e.target.value})}}
            ></textarea>
            <div className="button-container">
              <input type="submit" value="Submit" onClick={handlePerformaceSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;