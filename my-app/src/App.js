import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from './ukg_logo.png';
import Navbar from "./Navbar";

import "./App.css";

function App() {
  const [errorMessages, error_login] = useState({});
  const [islogin, login_set_true] = useState(false);

  //For test
  const database = [
    {
      username: "1234",
      password: "12345"
    },
    {
      username: "4321",
      password: "4321"
    }
  ];


  const errors = {
    username: "This user Id does not exit",
    Password: "invalid password"
  };

  const login_handle = (event) => {
    event.preventDefault();

    var { username, Password } = document.forms[0];

    const login_info = database.find((user) => user.username === username.value);

    if (login_info) {
      if (login_info.password !== Password.value) {
        error_login({ name: "Password", message: errors.Password });
      } else {
        login_set_true(true);
      }
    } else {
      error_login({ name: "username", message: errors.username });
    }
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
          <input type="text" name="username" required />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="Password" required />
          {renderErrorMessage("Password")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <Navbar />
      <div className="login_frame">
        <div className="title">Log In</div>
        <img className="logo"
          src={logo}
          alt='UKG Icon'></img>
        {islogin ? <div>Logged in</div> : renderForm}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;