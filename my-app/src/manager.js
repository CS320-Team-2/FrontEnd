import React, { useState, useEffect } from "react";
import logo from "./ukg_logo.png";
import "./App.css";
import "./elist.css";
import "./hpage.css";
import PTO from "./PTO";
import Elist from "./emp_list";

function Manager() {
  // const [isclickfromlist, click_set_true] = useState(false);
  // this.displayData = [];
  // this.handleChange = this.handleChange.bind(this);

  let web = document.location.href;
  const te = web.split("/");
  let manager = te[4];
  let ab = manager.split("#")[0];

  // Manager Write Review
  const[sendTo, setSendTo] = useState("");
  const [writeRevList, setWriteRevList] = useState([
    ["empID", "growthF", "kindF", "delivF", 0],
    ["empID2", "growthF", "kindF", "delivF", 1]
  ]);
  const [growthFeed, setGrowthFeed] = useState("");
  const [kindFeed, setKindFeed] = useState("");
  const[delivFeed, setDelivFeed] = useState("");
  const[empID, setEmpID] = useState(0);


  const [as_to, setas_to] = useState("");
  const [as_url, setas_url] = useState("");
  const [ATlist, setATlist] = useState([
    ["emp-id", "url", "2022-5-1-13-00", "end_date", 0],
    ["emp-id2", "url2", "start_date2", "end_date2", 1],
    ["emp-id", "url", "start_date", "end_date", 2],
  ]);
  const [start_date, set_start_date] = useState("");
  const [end_date, set_end_date] = useState("");
  const [id, set_id] = useState(0);

  useEffect(() => {
    // TODO: Call Database API to get database info
    GetATbox();
    getWriteRev();
  }, []);

  function GetATbox() {
    let url = "localhost:3000/assignedtraining/manager/" + ab;
    fetch(url) //
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("doesn t fetch");
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        let temp = [];
        for (let i in data.list) {
          let dataTemp = [
            data.list[i].emp_id,
            data.list[i].training_link,
            data.list[i].start_date,
            data.list[i].end_date,
            data.list[i].completed,
          ];
          set_id(i);
          temp.push(dataTemp);
        }
        setATlist(temp);
      });
  }

  const assign_handle = (event) => {
    event.preventDefault();
    //POST for ATlist
    const te = as_to.split("/");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        emp_id: te,
        attributes: {
          training_link: as_url,
          manager_id: ab,
          completed: 0,
          start_date: start_date,
          end_date: end_date,
          id: id,
          additional_info: "",
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let temp = [];
        for (let i in data.ATlists) {
          let dataTemp = [
            data.ATlists[i].manager_id,
            data.ATlists[i].trainto,
            data.ATlists[i].trainurl,
          ];
          temp.push(dataTemp);
        }
        setATlist(temp);
      });
    console.log(as_to + as_url);
  };

  // Manager Write Review:
  function getWriteRev(){
    let url = "localhost:3000/writereview/manager/";
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("fetch failed");
        throw new Error("Something went wrong");
      } 
    })
    .then((dataWR) => {
      let tempData = [];
      for(i in dataWR.list) {
        let tempDataWR = [
          dataWR.list[i].empID,
          dataWR.list[i].growthFeed,
          dataWR.list[i].kindFeed,
          dataWR.list[i].delivFeed,
        ];
        setEmpID(i);
        tempData.push(tempDataWR);
      }
      setWriteRevList(tempData);
    });
  }

  const writeRevHandle = (event) => {
    event.preventDefault();
    //POST for WriteReviewList
    const te = sendTo.split("/");
    fetch(, {
      method: "POST",
      body: JSON.stringify({
        empID: te,
        attributes: {
          growthFeed: growthFeed,
          kindFeed: kindFeed,
          delivFeed: delivFeed,
          manager_id: ab,
          id: id,
          additional_info: "",
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((dataWR) => {
        let tempData = [];
        for (let i in dataWR.writeRevLists) {
          let tempDataWR = [
            dataWR.writeRevLists[i].manager_id,
          ];
          temp.push(tempDataWR);
        }
        setATlist(tempData);
      });
    console.log(sendTo);
  };


  return (
    <div className="Page">
      <div className="Navbar">
        <div className="logoImage">
          <img className="logo" src={logo} alt="UKG Icon"></img>
        </div>
        <div className="middle">
          <a class="button" href="#popup1" id="asst">
            <center>Assign Training</center>
          </a>
          <a class="button" href="#popup2" id="list">
            <center>Employee List</center>
          </a>
          <a class="button" href="#popup3" id="review">
            <center>Write Review</center>
          </a>
        </div>

        <div classname="TypeOfPage">
          <h3>
            <center>MANAGER ACCOUNT</center>
          </h3>
        </div>
        <div class="dropdown">
          <a class="user-button">DanielBarskiy</a>
          {/* <a class ="button"><center></center></a> */}
          <div class="dropdown-content">
            <a href="#">32221178</a>
            <a href="http://localhost:3000/"> Logout </a>
            {/* <a href="#">Link 3</a> */}
          </div>
        </div>
        {/* <div className="user">
      <p>DanielBarskiy</p>
      <p>32221178</p>
    </div> */}

        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>
              <center>BOX</center>
            </h2>
            <a class="close" href="#">
              &times;
            </a>
            <div class="content">
              <form onSubmit={assign_handle}>
                <label for="fname">Train to: </label>
                <input
                  type="text"
                  id="lable1"
                  name="mylable"
                  onChange={(e) => setas_to(e.target.value)}
                />
                <br></br>
                <p></p>
                <label for="fname">Link: </label>
                <input
                  type="text"
                  id="lable2"
                  name="lable2"
                  onChange={(e) => setas_url(e.target.value)}
                />
                <br></br>
                <p></p>
                <label for="fname">Start date: </label>
                <input
                  type="text"
                  id="lable3"
                  name="lable3"
                  onChange={(e) => set_start_date(e.target.value)}
                />
                <br></br>
                <p></p>
                <label for="fname">End date: </label>
                <input
                  type="text"
                  id="lable4"
                  name="lable4"
                  onChange={(e) => set_end_date(e.target.value)}
                />
                <br></br>

                <div className="button-container">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="popup2" class="overlay">
          <div class="popup">
            <h2>
              <center>BOX</center>
            </h2>
            <a class="close" href="#">
              &times;
            </a>
            <div class="content">
              <div className="elist">
                <ul class="list1 responsive green-checkmarks">
                  <Elist />
                </ul>
              </div>
            </div>
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
              <input type="text" id="lable1" name="mylable"></input>
              <br></br>
              <p></p>
              <label for="fname">Growth Feedback: </label>
              <ul class="likert">
                <li> A lot </li>
                <li>
                  <input type="radio" name="growth" value="1" />
                </li>
                <li>
                  <input type="radio" name="growth" value="2" />
                </li>
                <li>
                  <input type="radio" name="growth" value="3" />
                </li>
                <li>
                  <input type="radio" name="growth" value="4" />
                </li>
                <li>
                  <input type="radio" name="growth" value="5" />
                </li>
                <li> None </li>
              </ul>
              <br></br>
              <p></p>
              <label for="fname">Kindness Feedback: </label>
              <ul class="likert">
                <li> Very </li>
                <li>
                  <input type="radio" name="kind" value="1" />
                </li>
                <li>
                  <input type="radio" name="kind" value="2" />
                </li>
                <li>
                  <input type="radio" name="kind" value="3" />
                </li>
                <li>
                  <input type="radio" name="kind" value="4" />
                </li>
                <li>
                  <input type="radio" name="kind" value="5" />
                </li>
                <li> None </li>
              </ul>
              <br></br>
              <p></p>
              <label for="fname">Delivery Feedback: </label>
              <ul class="likert">
                <li> Very Well </li>
                <li>
                  <input type="radio" name="delivery" value="1" />
                </li>
                <li>
                  <input type="radio" name="delivery" value="2" />
                </li>
                <li>
                  <input type="radio" name="delivery" value="3" />
                </li>
                <li>
                  <input type="radio" name="delivery" value="4" />
                </li>
                <li>
                  <input type="radio" name="delivery" value="5" />
                </li>
                <li> Needs Improvement </li>
              </ul>
              <br></br>
              <p></p>
              <label for="fname">Overall Feedback: </label>
              <textarea
                id="rev-desc"
                name="rev-desc"
                rows="5"
                cols="47"
              ></textarea>
              <div className="button-container">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="CONT">
        <PTO />

        <div className="ATbox">
          <div className="astboxed">
            <h2> Assigned Training:</h2>
          </div>
          <div className="asstlist">
            {ATlist.map((element, index) => {
              //[0.emp_id,1.training_link,2.start_date,3.end_date,4.completed,];

              if (element[4] == 0) {
                return (
                  <>
                    <div className="ATlist_not_start">
                      <p>
                        <h6>
                          Send to : <br />
                          <div className="element">{element[0]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Train link : <br />{" "}
                          <div className="element">{element[1]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Start date : <br />
                          <div className="element">{element[2]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          End date : <br />{" "}
                          <div className="element">{element[3]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Status : <br />{" "}
                          <div className="element">Not Started</div>
                        </h6>
                      </p>
                    </div>
                  </>
                );
              } else if (element[4] == 1) {
                return (
                  <>
                    <div className="ATlist_Progress">
                      <p>
                        <h6>
                          Send to : <br />
                          <div className="element">{element[0]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Train link : <br />
                          <div className="element">{element[1]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Start date : <br />
                          <div className="element">{element[2]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          End date : <br />
                          <div className="element">{element[3]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Status : <br />
                          <div className="element">In Progress</div>
                        </h6>
                      </p>
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div className="ATlist_finish">
                      <p>
                        <h6>
                          Send to : <br />
                          <div className="element">{element[0]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Train link : <br />
                          <div className="element">{element[1]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Start date : <br />
                          <div className="element"> {element[2]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          End date : <br />
                          <div className="element">{element[3]}</div>
                        </h6>
                      </p>
                      <p></p>
                      <p></p>
                      <p>
                        <h6>
                          Status : <br />{" "}
                          <div className="element">Finished</div>
                        </h6>
                      </p>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manager;
