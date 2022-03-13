import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Navbar from "./Navbar";
import Main from "./main";
import React from "react";
import Manager from "./manager";
import RS from "./requeststatus";
import "./App.css";



function App(){
  return (
    <div className="App">
    <BrowserRouter>
      
      <Routes>
      <Route exact path='/' element={< Login />}></Route>
      <Route exact path='/main' element={< Main />}></Route>
      <Route exact path='/manager' element={< Manager />}></Route>
      <Route exact path='/123' element={< RS />}></Route>
      </Routes>
      </BrowserRouter>
      
      </div>
    );
}
//<Route exact to="/main"  component={[Main,Navbar]}/>
export default App;

