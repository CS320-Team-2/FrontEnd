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
    <div className="box">
            <div className = "title"> To Do List</div>
                <div className="in_progress"> 
                    <div className='prog_box'>
                        <div className='prog_title'>In Progress </div>
                     </div> 
                 </div>
                <div className="not_started"> 
                    <div className='not_box'> 
                    <div className='not_started_title'> Not Started</div>
                 </div>
                 </div>
                <div className="completed">
                     <div className = 'compl_box'>
                         <div className= 'compl_title'> Completed </div>
                     </div>
                </div>
    </div>
  );
}

const rootElement = document.getElementById("hpageroot");
ReactDOM.render(<hpage />, rootElement);

export default hpage;
