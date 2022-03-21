import React from "react";
import Navbar from "./Navbar";
import Home from "./hpage";
import RequestStatus from "./requeststatus";

function Main() {
    return(
        <div>
            <Navbar/>
            <Home/>
            <RequestStatus/>
        </div>
    );
}

export default Main;
