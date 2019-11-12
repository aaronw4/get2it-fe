import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {taskList:[]
    }
  }

  createTaskList = event => {
    const arrList = ["Kill the cat", "Kill the cat", "Kill the cat"];
    for (const i = 0; i < arrList.length;i++) {
      this.state.taskList.push("<Form><Form.Group controlId='formBasicCheckbox'><Form.Check type='checkbox' /></Form.Group><Form.Text>" + arrList[i] + "</Form.Text></Form>");
    };
    console.log(this.state[0]);
  };

  
  render() {
    return (
      <div>
        <Form>
          <Button variant="primary" type="submit">
            <span>&#10003;</span>
          </Button>
          
        </Form>
        <ul>
          {this.state.taskList.map(item => (
            <li key={item}>{item}</li>
            
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
