import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { updateTask } from '../../actions'
import { getTASKS, deleteTask } from '../../actions'
import $ from "jquery";
// build task component and set up state
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // add tasklist to state
    this.state = {
      taskList: [],
      updatedList: []
    };
  }
  event;

  // build function to add tasks to state
  createTaskList = event => {
    // event.preventDefault();
    // pull tasks from props
    const arrList = this.props.userTasks.filter(
      task => task.status === false 
    );
    const list = [];
    var listItem;
    var spacer = "      ";
    // loop through each task and post them to state
    for (let i = 0; i < arrList.length; i++) {
      list.push(arrList[i]);
    }
    this.setState({
      taskList: list
    });
  };
  
  
 
  
  check = (item) => {
    $('.checkBox').toggleClass("checkBoxChecked")
    var task = item;
    // var checkbox = $(this).find(".checkBox")
    console.log(this.item)
      // item.status !== item.status
      // console.log(checkbox)
      // switch(checkbox.is(':checked')){
      //   case true:  
      //   $(this).find(".checkBox").removeClass('complete')
      //   $(this).find(".checkBox").addClass('complete')
      //   break;
      //   case false: $(this).find(".checkBox").removeClass('complete')

      //   }

        
       
      // } else {
      //   this.setState({
      //     updatedList: this.arr2.filter(item => item != task )
      //   })
      
        // return
        // $("#checkBox").removeClass('complete')
        // $("#checkBox").removeClass('notcomplete')
        // $("#checkBox").addClass('notcomplete')
      
     
      // console.log(this.arr2)
    
  }
  complete = () => {
 var arr2 = [];
    $('.checkBoxChecked').push(arr2)
    //   this.state.updatedList.map(task => {
    //   task.status = true
    //   console.log(task.status)
    //   this.prop.updateTask(task, task.id) 
    // })
    //   this.setState({
    //     taskList: this.props.userTasks.filter(task => task.status === false)
    //   })
    this.setState({
      updatedList: this.arr2
    });

    console.log(this.state.updatedList)
    }
    

  deleted = (id) => {
    this.props.deleteTask(id);
    this.setState({
      taskList: this.props.getTASKS(this.props.userData.id)
    })
  };

  componentDidMount(){
    this.createTaskList()
  }
  // render content to page
  render() {
    
    return (
      <div>
        <Form>
          <Form.Text className="taskTitle">TASK LIST</Form.Text>
        </Form>
        <div className="taskListContainer">
          {/* for each item on the state tasklist create a task link on the page */}
          <ul>
            {this.state.taskList.map((item, index) => (
              <li key={index}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <div  className="check checkBox" onClick={() => this.check(item)} type="checkbox">

                    </div>
                    {/* <Form.Check  id="checkBox" onClick={() => this.check(item)} type="checkbox" /> */}
                    <Form.Text>{item.name}</Form.Text>
                    <Button
                      className="reUseBtn"
                      onClick={() => this.deleted(item.id)}
                    >
                      Delete
                    </Button>
                  </Form.Group>
                </Form>
              </li>
            ))}
          </ul>
          <div className="completeBtn">
          <Button onClick={() => this.complete()}>Complete</Button>
        </div>
        </div>
        
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => ({
  userData: state.userData,
  userTasks: state.userTasks
})
const mapDispatchToProps = {
  updateTask,
  getTASKS,
  deleteTask,
 }
// export the Component
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
