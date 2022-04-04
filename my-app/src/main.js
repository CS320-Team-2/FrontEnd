import React from "react";
import Navbar from "./Navbar";
import Home from "./hpage";
import RequestStatus from "./requeststatus";
import "./main.css";

function Main() {
    return(
        <div>
            <Navbar/>
            <div className="CONT"> 
                <div className="todolist">
                <Home/>
                </div>
                <div className="reqstatus">
                <RequestStatus/>
                </div>
            </div>
        </div>
    );
}

export default Main;
