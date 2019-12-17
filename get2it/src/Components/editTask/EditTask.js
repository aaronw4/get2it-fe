import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
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
import { connect } from "react-redux";
import { updateTask } from "../../actions.js";
import { parseWithOptions } from "date-fns/fp";

class EditTaskList extends React.Component {
  constructor(props) {
    super(props);
    const tasks = this.props.userTasks.find(
      tasks => `${tasks.id}` === this.props.match.params.id
    );
    this.state = {
      icon: "",
      date: tasks.date,
      task_name: tasks.name,
      start_time: tasks.start_time,
      end_time: tasks.end_time,
      icon: tasks.task_icon,
      newError: null,
      user_id: tasks.user_id,
      id: tasks.id
    };
  }
 

  newTask = evt => {
    // evt.preventDefault();
    const {task_name, task_icon, user_id, id} = this.state;
    const { date, start_time, end_time} = this.props;
    const payload = {
      date,
      name: task_name,
      start_time,
      end_time,
      user_id,
      id,
      task_icon
    };

    this.props.updateTask(payload, id);

    setTimeout(() => {
      
      this.props.history.push(`/taskList`);
    }, 400);

  };


  addIconOne = event => {
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
    }, () => console.log(this.state.task_name));
    

  };

  addIconOne = event => {
    $("#iconThree").addClass("iconThree");
    $("#iconTwo").addClass("iconTwo");
    $("#iconOne").removeClass("iconOne");
  };
  addIconTwo = event => {
    // console.log("yolo")

    $("#iconOne").addClass("iconOne");
    $("#iconThree").addClass("iconThree");
    $("#iconTwo").removeClass("iconTwo");
  };
  addIconThree = event => {
    // console.log("yolo")

    $("#iconOne").addClass("iconOne");
    $("#iconTwo").addClass("iconTwo");
    $("#iconThree").removeClass("iconThree");
  };

  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    const { task_name } = this.state;
   
    // console.log(this.props)
    return (
      <div className="newTaskContainer">
        <br />
        <h1 className="NewTask-Tittle"> Edit Task</h1>
        {/* <hr className="line" /> */}
        <br />
        {/* <Category/> */}
        <div className="calender-date">
          <div className="startTime">
            <i className="far fa-calendar-alt fa-3x" />
          </div>
          <br />
          <br />

          <Date taskDate={this.state.date} />
          <br />
          <br />
        </div>
        <Clock start_time={this.state.start_time} />
        <hr className="line" />

        <EndTime end_time={this.state.end_time} />

        <div className="app"></div>
        <hr className="line" />
        <div onSubmit={this.handleSubmit}>
          <label to="taskName"  className="newTaskLableName">Task Name:</label>
          <input
            value={task_name}
            id="taskName"
            className="newTaskInput"
            type="text"
            name="task_name"
            onChange={this.changeHandler}
            required
          />
          <label className="newTaskLableName">
            Pick an icon for your task!
          </label>
          <div className="iconDropContainer">
            <div className="displayIcons">
              <div id="iconOne">
                <i
                  id="icon"
                  data-myval="1"
                  className="fas fa-heartbeat iconDropdown"
                ></i>
              </div>
              <div id="iconTwo">
                <i
                  id="icon"
                  data-myval="2"
                  className="fas fa-hospital iconDropdown"
                ></i>
              </div>
              <div id="iconThree">
                <i
                  id="icon"
                  data-myval="3"
                  className="fab fa-accessible-icon iconDropdown"
                ></i>
              </div>
            </div>
            <DropdownButton
              id="dropdown-item-button"
              title=""
              onClick={evt => {
                evt.preventDefault();
              }}
            >
              <Dropdown.Item
                onClick={this.addIcons}
                className="addIcon"
                onClick={() => {
                  this.setState({
                    icon:
                      '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
                  });
                  this.addIconOne();
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
                  this.addIconTwo();
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
                  this.addIconThree();
                }}
                as="button"
              >
                <i
                  id="icon"
                  className="fab fa-accessible-icon iconDropdown"
                ></i>
              </Dropdown.Item>
            </DropdownButton>
            {/* <Label /> */}
            <div>{/* <JsxParser jsx={this.state.icon} /> */}</div>
          </div>
          <hr className="line" />

          {this.state.newError && (
            <p className="error">{this.state.newError}</p>
          )}
          <Button onClick={this.newTask} className="completeBtn-create" type="button">
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  userTasks: state.userTasks,
  date: state.date,
  start_time: state.start_time,
  end_time: state.end_time,
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = {
  updateTask
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditTaskList)
);
