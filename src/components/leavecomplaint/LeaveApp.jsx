import React from "react";
import loginImg from "./login.svg";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default class LeaveApp extends React.Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            <div className="base-container">
            <div className="header">Apply for Leave</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="roll">RollNo</label>
              <input type="text" name="roll" placeholder="RollNo" />
            </div>
            <div className="form-group">
              <label htmlFor="roll">Address</label>
              <input type="text" name="roll" placeholder="RollNo" />
            </div>
            <div className="form-group">
              <label htmlFor="phn">PhoneNo</label>
              <input type="text" name="phn" placeholder="PhoneNo" />
            </div>
            <div className="form-group">
              <label htmlFor="phn">From(date)</label>
              <DatePicker
               selected={this.state.startDate}
               onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phn">To(date)</label>
              <DatePicker
               selected={this.state.startDate}
               onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Apply
          </button>
        </div>
      </div>
          </div>
        </div>
      </div>
    );
  }
}
