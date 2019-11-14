import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { updateTask, getTASKS } from '../../actions'

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
    const arrList = this.props.userTasks;
    const list =[]
    for (let i = 0; i < arrList.length;i++) {
      list.push(arrList[i].name)
    };
    console.log(list)
    this.setState({
      taskList: list
    })
  };

  toggleComplete = event => {
    if (this.state.userTasks = true){
      this.state.userTasks = false;
    } else {
      this.state.userTasks = true
    }
  }
  create = event => {
    event.preventDefault();
    console.log('click');
    this.props.getTASKS()

  };

  
  render() {
    return (
      <div>
        <Form>
          <Button onClick={this.createTaskList} variant="primary" type="submit">
            <span>&#10003;</span>
          </Button>
          <Button onClick={this.create} variant="primary" type="submit">
            <span></span>
          </Button>
          
          <Form.Text>TASKS</Form.Text>
        </Form>
        <ul>
          {this.state.taskList.map((item, index) => (
            <li value={this.state.task.id} key={index}>
              <Form>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check onClick={this.toggleComplete} type='checkbox' />
                  <Form.Text>{item}</Form.Text>
                </Form.Group>
              </Form>
            </li>
            
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  userTasks: state.userTasks
})
const mapDispatchToProps = {
  updateTask,
  getTASKS
 }

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)