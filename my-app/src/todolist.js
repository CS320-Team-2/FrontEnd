import React from "react";
import "./todolist.css";

function tocomplete() {
  this.className = this.className.replace( /(?:^|\s)NSitem(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)NSlist(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)IPitem(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)IPlist(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)list-group-item-IP(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)list-group-item-NS(?!\S)/g , '' )
  this.className += " list-group-item-C";
  this.className += " Clist";
  this.className += " Citem";
}

function toNotStarted() {
  this.className = this.className.replace( /(?:^|\s)list-group-item-IP(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)list-group-item-C(?!\S)/g , '' )
  this.className += " list-group-item-NS";
}

function toInProgress() {
  this.className = this.className.replace( /(?:^|\s)list-group-item-C(?!\S)/g , '' )
  this.className = this.className.replace( /(?:^|\s)list-group-item-NS(?!\S)/g , '' )
  this.className += " list-group-item-IP";
}

function ToDoList() {
  return (
    <div className="BigBox">
      <div className="TitleBox">
        <h1>To-Do List</h1>
      </div>
      <div className="IPtitlebox">
        <h2>In-Progress Tasks:</h2>
      </div>
      <div className="IPlist">
        <div className="IPitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <li class="list-group-item-IP">
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button onClick={toInProgress}>In-Progress</button>
                        <button onClick={toNotStarted}>Not Started</button>
                        <button onClick={tocomplete}>Completed</button>
                      </div>
                    </div>
                    <div classname='typeOfTask'>
                      <p>Task: </p>
                    </div>
                  </li>
                  
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="NStitlebox">
        <h2>Not Started Tasks:</h2>
      </div>
      <div className="NSlist">
        <div className="NSitem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
              <div class="ps-content">
                  <li class="list-group-item-NS">
                  
                  </li>
                  
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
      <div className="Ctitlebox">
        <h2>Completed Tasks:</h2>
      </div>
      <div className="Clist">
        <div className="Citem">
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style={{ position: "static" }} class="ps ps--active-y">
                <div class="ps-content">
                  <li class="list-group-item-C">
                  
                  </li>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
