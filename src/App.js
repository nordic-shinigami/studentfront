import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navigation/NavigationBar';
import Sidebar from './components/navigation/Sidebar';
// import { Register } from './components/register/Register';
import Notice from "./components/notice/Notice";
import LeaveApp from "./components/leavecomplaint/LeaveApp";
import ComplaintApp from "./components/leavecomplaint/ComplaintApp";
import Occupants from "./components/studentlist/Occupants";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar /> 
        
        <div className="container">
        <Switch>
          <Route exact path="/Register" component={Occupants} />
          <Route exact path="/Complaint" component={ComplaintApp} />
          <Route exact path="/Leave" component={LeaveApp} />
          <Route exact path="/NoticeBoard" component={Notice} />
          {/* <Route path="/Nomatch" component={Occupants} /> */}
          {/* <Route component={} /> */}
        </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
