import React, { Component } from "react";
import "./NewTask.css";
// import 'bulma/css/bulma.css'
import Clock from "./StartTime";
import Date from "./Date";
import EndTime from "./EndTime";
import Label from "./Label";
import Category from "./Category";
import Dropdown from 'react-bootstrap'


class NewTask extends React.Component {
  constructor(props) {
    super(props);


  }

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
        <br />

        <div className="app">
          
          <br />
          {/* <ToDoTask toDoTasks={this.state.toDoTasks} deleteItem={this.deleteItem.bind(this)} saveItem={this.saveItem.bind(this)} toggleComplete={this.toggleComplete.bind(this)} /> */}
        </div>
        <br />
        <hr className="line" />
        <Label />
        <hr className="line" />
      </div>
    );
  }
}

export default NewTask;
