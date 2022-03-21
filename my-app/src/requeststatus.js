import React from "react";

import "./requeststatus.css";

function RequestStatus() {
  return (
    <div className="BigBox">
        <div className="TitleBox">
            <h1>Request Status</h1>
        </div>
        <div className="PEtitlebox">
            <h2>Peer Evaluations:</h2>
        </div>
        <div className="PElist">
        </div>
        <div className="PTOtitlebox">
            <h2>Paid Time Off:</h2>
        </div>
        <div className='PTOlist'>
        </div>
    </div>
  );
}

export default RequestStatus;
