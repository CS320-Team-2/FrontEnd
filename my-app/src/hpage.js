import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from './ukg_logo.png';

import "./hpage.css";

function hpage() {

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  return (
    <div className="titlebox">
	<h1>  To Do List</h1>
</div>
<div className="progboxed">
	<h2> In Progress Tasks:</h2>
</div>
<div className="proglist"> </div>

	<div className="notstartboxed">
	<h2> Not Started Tasks:</h2>
</div>
	<div className = 'notstartlist'> </div>
	<div className="completedboxed">
	<h2> Completed Tasks:</h2>
</div>
<div className = 'completedlist'> </div>
  );
}

export default hpage;
