import React, { Component } from "react";
import "./NewTask.css";
// import 'bulma/css/bulma.css'
import Clock from "./StartTime";
import Date from "./Date";
import EndTime from "./EndTime";
import Label from "./Label";
import Category from "./Category";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { set } from "date-fns";
import $ from "jquery";
import JsxParser from "react-jsx-parser";

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      taskName: ""
    };
  }
  addIcons = event => {
    // console.log("yolo")
    $("#iconOne").addClass("iconOne");
    $("#iconTwo").addClass("iconTwo");
    $("#iconThree").addClass("iconThree");
    // $('#iconOne').removeClass("iconOne")
  };

  changeHandler = evt => {
    evt.preventDefault();

    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  

  render() {
    return (
      <div className="app">
        <br />
        <br />
        <h1 className="NewTask-Tittle"> Add New Task</h1>
        <hr className="line" />
        <br />
        {/* <Category/> */}
        <div className="calender-date">
          <div className="startTime">
            <i className="far fa-calendar-alt fa-3x" />
          </div>
          <br />
          <br />

          <Date className="date" />
          <br />
          <br />
        </div>
        <Clock />
        <hr className="line" />

        <EndTime />

        <div className="app"></div>
        <hr className="line" />
        <form>
          <label className="newTaskLableName">
            New Task Name:
            <input className="newTaskInput" type="text" name="taskName" onChange={this.changeHandler} />
          </label>
        </form>

        <hr className="line" />
        <div className="displayIcons">
          <div id="iconOne">
            <i id="icon" className="fas fa-heartbeat iconDropdown"></i>
          </div>
          <div id="iconTwo">
            <i id="icon" className="fas fa-hospital iconDropdown"></i>
          </div>
          <div id="iconThree">
            <i id="icon" className="fab fa-accessible-icon iconDropdown"></i>
          </div>
        </div>
        <DropdownButton id="dropdown-item-button">
          <Dropdown.Item
            onClick={this.addIcons}
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
              });
              this.addIcons();
            }}
            as="button"
          >
            <i id="icon" className="fas fa-heartbeat iconDropdown"></i>
          </Dropdown.Item>
          <Dropdown.Item
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fas fa-hospital iconDropdown"></i>'
              });
              this.addIcons();
            }}
            as="button"
          >
            <i id="icon" className="fas fa-hospital iconDropdown"></i>
          </Dropdown.Item>
          <Dropdown.Item
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fab fa-accessible-icon iconDropdown"></i>'
              });
              this.addIcons();
            }}
            as="button"
          >
            <i id="icon" className="fab fa-accessible-icon iconDropdown"></i>
          </Dropdown.Item>
        </DropdownButton>
        {/* <Label /> */}
        <div>{/* <JsxParser jsx={this.state.icon} /> */}</div>
        <hr className="line" />
        <div>
          <Button className="completeBtn">Complete</Button>
        </div>
      </div>
    );
  }
}

export default NewTask;
