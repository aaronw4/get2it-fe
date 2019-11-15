import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Route, withRouter, Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
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
    var listItem;
    var spacer = "      ";
    for (let i = 0; i < arrList.length;i++) {
      if(arrList[i].status === false){
        listItem = arrList[i].name.concat(spacer).concat(arrList[i].date)
        list.push(listItem)
      
      }
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
          <Form.Text className="taskTitle">TASKS</Form.Text>
        </Form>
        <div>
        <ul>
          {this.state.taskList.map((item, index) => (
            <li className="formStyle" key={index}>
              <Form >
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check onClick={this.toggleComplete} type='checkbox' />
                  <Form.Text>{item}</Form.Text>
                </Form.Group>
              </Form>
            </li>
            
          ))}
        </ul>
        </div>
        <div className="linkStyle">
          <Link
          className="addTaskLink" onClick={this.createTaskList}
          to={{ pathname: "/taskModal", state: { modal: true } }}
        >
          +
        </Link>
        </div>
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