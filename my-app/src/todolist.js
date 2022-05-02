import React,{useState,useEffect,Component,Fragment} from 'react'
import "./todolist.css";

function tocomplete() {
  window.location.href = 'http://localhost:3000/employee/4321/complete'
  // this.className = this.className.replace(/(?:^|\s)NSitem(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)NSlist(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)IPitem(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)IPlist(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)list-group-item-IP(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)list-group-item-NS(?!\S)/g, '')
  // this.className += " list-group-item-C";
  // this.className += " Clist";
  // this.className += " Citem";
}

function toNotStarted() {
  // this.className = this.className.replace(/(?:^|\s)list-group-item-IP(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)list-group-item-C(?!\S)/g, '')
  // this.className += " list-group-item-NS";
}

function toInProgress() {
  // this.className = this.className.replace(/(?:^|\s)list-group-item-C(?!\S)/g, '')
  // this.className = this.className.replace(/(?:^|\s)list-group-item-NS(?!\S)/g, '')
  // this.className += " list-group-item-IP";
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
                    <div classname='TypeOfPage'>
                      <todoh3>Task: Peer Eval</todoh3>
                    </div>
                    <div classname='Requester'>
                      <h4>Requester: Sean Darras</h4>
                    </div>
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                        <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                        <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item-IP">
                    <div classname='TypeOfPage'>
                      <todoh3>Task: Training</todoh3>
                    </div>
                    <div classname='link'>
                      <h4>Link: </h4>
                      <url><a href='http://localhost:3000/employee/4321/training1'>Training 1</a></url>
                    </div>
                    <div class="tododropdown">
                      <a class="todouser-button">Status</a>
                      <div class="tododropdown-content">
                        <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                        <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                        <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                      </div>
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

//Peer Eval Request Template
                    // <div classname='TypeOfPage'>
                    //   <todoh3>Task: Peer Eval</todoh3>
                    // </div>
                    // <div classname='Requester'>
                    //   <h4>Requester: Sean Darras</h4>
                    // </div>
                    // <div class="tododropdown">
                    //   <a class="todouser-button">Status</a>
                    //   <div class="tododropdown-content">
                    //     <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                    //     <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                    //     <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                    //   </div>
                    // </div>

//Training Template
                    // <div classname='TypeOfPage'>
                    //   <todoh3>Task: Training</todoh3>
                    // </div>
                    // <div classname='link'>
                    //   <h4>Link: </h4>
                    //   <url><a href='http://localhost:3000/main/4321/training1'>Training 1</a></url>
                    // </div>
                    // <div class="tododropdown">
                    //   <a class="todouser-button">Status</a>
                    //   <div class="tododropdown-content">
                    //     <button type="button" class="IPbutton" onClick={toInProgress}>In-Progress</button>
                    //     <button type="button" class="NSbutton" onClick={toNotStarted}>Not Started</button>
                    //     <button type="button" class="Cbutton" onClick={tocomplete}>Completed</button>
                    //   </div>
                    // </div>