import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import updateTask from '../../actions'

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

  // complete = event => {
  //   if(querySelector(input[type=checkbox]:checked)){
  //     upd()
  //   } else {
  //     check()
  //   }


  
  render() {
    return (
      <div>
        <Form>
          <Button onClick={this.createTaskList} variant="primary" type="submit">
            <span>&#10003;</span>
          </Button>
          <Form.Text>TASKS</Form.Text>
        </Form>
        <ul>
          {this.state.taskList.map((item, index) => (
            <li key={index}>
              <Form>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check onClick={this.complete} type='checkbox' />
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

export default connect(mapStateToProps)(TaskList);