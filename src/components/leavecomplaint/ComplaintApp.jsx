import React from "react";
import loginImg from "./login.svg";
import "./styles3.scss";

export default class ComplaintApp extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="base-container">
      <div className="header">Lodge complaint</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="loginimage" />
          </div>
          <div className="form">
          <div className="form-group">
              <label htmlFor="roll">Name</label>
              <input type="text" name="roll" placeholder="RollNo" />
            </div>
            <div className="form-group">
              <label htmlFor="RoomNo">RoomNo</label>
              <input type="text" name="RoomNo" placeholder="RoomNo" />
            </div>
            <div className="form-group">
              <label htmlFor="phn">PhoneNo</label>
              <input type="text" name="phn" placeholder="PhoneNo" />
            </div>
            <div className="form-group">
              <label htmlFor="Description">Description</label>
              <input type="text" name="Description" placeholder="Description" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
  }
}
