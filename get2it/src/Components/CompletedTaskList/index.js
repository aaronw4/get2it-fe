import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Route, withRouter, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { updateTask, getTASKS } from '../../actions'

class CompletedTaskList extends React.Component {
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
      if(arrList[i].status === true){
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
          <Form.Text className="taskTitle">COMPLETED TASKS</Form.Text>
        </Form>
        <div>
        <ul>
          {this.state.taskList.map((item, index) => (
            <li className="formStyle" key={index}>
              <Form >
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Text>{item}</Form.Text>
                  <Button className="reUseBtn">Re-Use</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTaskList)