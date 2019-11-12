import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state= {taskList:[]
    }
  }
  event

  createTaskList = event => {
    event.preventDefault();
    const arrList = ["Kill the cat", "Kill the cat", "Kill the cat"];
    const list =[]
    for (let i = 0; i < arrList.length;i++) {
      list.push(arrList[i])
    };
    console.log(list)
    this.setState({
      taskList: list
    })
  };


  
  render() {
    return (
      <div>
        <Form>
          <Button onClick={this.createTaskList} variant="primary" type="submit">
            <span>&#10003;</span>
          </Button>
          
        </Form>
        <ul>
          {this.state.taskList.map((item, index) => (
            <li key={index}><Form><Form.Group controlId='formBasicCheckbox'><Form.Check type='checkbox' /></Form.Group><Form.Text>{item}</Form.Text></Form></li>
            
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData
})

export default connect(mapStateToProps)(TaskList);
