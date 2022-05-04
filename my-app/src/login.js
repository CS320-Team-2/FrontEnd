import React, { useState , Component} from "react";
//import ReactDOM from "react-dom";
import logo from './ukg_logo.png';
import { useNavigate } from 'react-router-dom';

import "./App.css";

function Login() {
    const [errorMessages, error_login] = useState({});
    const [islogin, login_set_true] = useState(false);
    const [ismanager, manager_set_true] = useState(false);
    const [isemp, emp_set_true] = useState(false);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    //For test
    const database = [
      {
        username: "1",
        password: "12345",
        id:"1"
      },
      {
        username: "4321",
        password: "4321",
        id:"2"
      },
      {
        username: "3",
        password: "3",
        id:"3"
      }
    ];
     let currentid = 'Login Successful';
  
    const errors = {
      username: "This user Id does not exit",
      Password: "invalid password",
      ID:"Identification failed"
    };
  
    const login_handle = (event) => {
      event.preventDefault();
  
      fetch('', {
        method: 'POST',
        body: JSON.stringify({
          username : username,
          password : password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => {
            
            if (response.status == 200) {
            let data = response.json();
            if(data.list[0].isManager==0){
              login_set_true(true);
              emp_set_true(true);
            }
            if(data.list[0].isManager==1){
              login_set_true(true);
              manager_set_true(true);            }
              
            } else if(response.status == 500)  {
              error_login({ name: "ID", message: errors.ID});
            }
            else{
              console.log("fetch fail for Login");
            }
          });
        
        
    };
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
  
    const renderForm = (
      <div className="form">
        <form onSubmit={login_handle}>
          <div className="input-container">
            <label>User Id </label>
            <input type="text" name="username" id="username" required onChange={e => setUserName(e.target.value)}/>
            {renderErrorMessage("username")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="text" name="Password" required onChange={e => setPassword(e.target.value)}/>
            {renderErrorMessage("Password")}{renderErrorMessage("ID")}
          </div>
          <div className="button-container">
            <input type="submit" value="Login"/>
          </div>
        </form>
      </div>
    );
  

    return (
      
      <div className="app">
        <div className="login_frame">
          <div className="title">Log In</div>
          <img className="logo"
            src={logo}
            alt='UKG Icon'></img>
          {(() => {
        if (islogin) {
         if(ismanager){
          navigate('/manager/'+username, { state: { id: username}});
         }
         else if(isemp){
          navigate('/employee/'+username, { state: { id: username}});
         }
        } else {
          return (
            renderForm
          )
        }
      })()}   
        </div>
        <label id='copyright'>© 2022 UKG Inc. All rights reserved.</label>
      </div>
    );
  }
  
 // const rootElement = document.getElementById("root");
  //ReactDOM.render(<App />, rootElement);
  export default Login;