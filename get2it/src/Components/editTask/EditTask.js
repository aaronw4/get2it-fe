import React from "react";
import { withRouter } from "react-router-dom";
import "../NewTask/NewTask.css";
import Clock from "./StartTime";
import Date from "./Date";
import EndTime from "./EndTime";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import $ from "jquery";
import { connect } from "react-redux";
import { updateTask } from "../../actions.js";

class EditTaskList extends React.Component {
  constructor(props) {
    super(props)
    const tasks = this.props.userTasks.find(
      tasks => `${tasks.id}` === this.props.match.params.id
    )
    this.state = {
      icon1: false,
      icon2: false,
      icon3: false,
      date: tasks.date,
      task_name: tasks.name,
      start_time: tasks.start_time,
      end_time: tasks.end_time,
      icon: tasks.task_icon,
      newError: null,
      user_id: tasks.user_id,
      id: tasks.id
    }
  }

  newTask = evt => {
    const { task_name, task_icon, user_id, id } = this.state;
    const { date, start_time, end_time } = this.props;
    const payload = {
      date,
      name: task_name,
      start_time,
      end_time,
      user_id,
      id,
      task_icon
    }

    this.props.updateTask(payload, id)

    setTimeout(() => {
      this.props.history.push(`/taskList`)
    }, 400)
  }

  changeHandler = evt => {
    evt.preventDefault()

    this.setState(
      {
        [evt.target.name]: evt.target.value
      },
      () => console.log(this.state.task_name)
    )
  }
  iconCheck = () => {
    if (this.state.icon === "") {
      // console.log("NO ICON")
      this.setState({
        icon1: false,
        icon2: false,
        icon3: false,
      })
    } else if (
      this.state.icon ===
      '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
    ) {
      // console.log("icon one")
      this.setState({
        icon1: false,
        icon2: true,
        icon3: true,
      })
    } else if (
      this.state.icon ===
      '<i id="icon" className="fas fa-hospital iconDropdown"></i>'
    ) {
      // console.log("icon two")
      this.setState({
        icon1: true,
        icon2: false,
        icon3: true,
      })
    } else if (
      this.state.icon ===
      '<i id="icon" className="fab fa-accessible-icon iconDropdown"></i>'
    ) {
      // console.log("icon three")
      this.setState({
        icon1: true,
        icon2: true,
        icon3: false,
      })
    } else {
      console.log("not working")
    }
  }

  refreshPage = () => {
    window.location.reload(false)
  }
  componentDidMount(){
    this.iconCheck()
  }
  render() {
    const { task_name, date } = this.state
    return (
      <div className="newTaskContainer">
        <br />
        <h1 className="NewTask-Tittle"> Edit Task</h1>
        <br />
        <div className="calender-date">
          <div className="startTime">
            <i className="far fa-calendar-alt fa-3x" />
          </div>
          <br />
          <br />
          <Date taskDate={this.state.date} />
          <br />
          <br />
          <div>
            <input
              onChange={this.changeHandler}
              type="text"
              value={date}
              id=""
            />
          </div>
        </div>
        <Clock start_time={this.state.start_time} />
        <hr className="line" />
        <EndTime end_time={this.state.end_time} />

        <div className="app" />
        <hr className="line" />
        <div onSubmit={this.handleSubmit}>
          <label to="taskName" className="newTaskLableName">
            Task Name:
          </label>
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
              <div id="iconOne" hidden={this.state.icon1}>
                <i
                  id="icon"
                  data-myval="1"
                  className="fas fa-heartbeat iconDropdown"
                />
              </div>
              <div id="iconTwo" hidden={this.state.icon2}>
                <i
                  id="icon"
                  data-myval="2"
                  className="fas fa-hospital iconDropdown"
                />
              </div>
              <div id="iconThree" hidden={this.state.icon3}>
                <i
                  id="icon"
                  data-myval="3"
                  className="fab fa-accessible-icon iconDropdown"
                />
              </div>
            </div>
            <DropdownButton
              id="dropdown-item-button"
              title=""
              onClick={evt => {
                evt.preventDefault()
              }}
            >
              <Dropdown.Item
                // onClick={this.addIcons}
                className="addIcon"
                onClick={() => {
                  this.setState({
                    icon:
                      '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>',
                    icon1: false,
                    icon2: true,
                    icon3: true
                  })
                  // this.addIconOne()
                }}
                as="button"
              >
                <i id="icon" className="fas fa-heartbeat iconDropdown" />
              </Dropdown.Item>
              <Dropdown.Item
                className="addIcon"
                onClick={() => {
                  this.setState({
                    icon:
                      '<i id="icon" className="fas fa-hospital iconDropdown"></i>',
                    icon1: true,
                    icon2: false,
                    icon3: true
                  })
                }}
                as="button"
              >
                <i id="icon" className="fas fa-hospital iconDropdown" />
              </Dropdown.Item>
              <Dropdown.Item
                className="addIcon"
                onClick={() => {
                  this.setState({
                    icon:
                      '<i id="icon" className="fab fa-accessible-icon iconDropdown"></i>',
                    icon1: true,
                    icon2: true,
                    icon3: false
                  })
                  // this.addIconThree()
                }}
                as="button"
              >
                <i id="icon" className="fab fa-accessible-icon iconDropdown" />
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <hr className="line" />

          {this.state.newError && (
            <p className="error">{this.state.newError}</p>
          )}
          <Button
            onClick={this.newTask}
            className="completeBtn-create"
            type="button"
          >
            Save
          </Button>
        </div>
      </div>
    )
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
})

const mapDispatchToProps = {
  updateTask
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditTaskList)
)
