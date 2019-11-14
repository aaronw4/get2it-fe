import React from 'react'
import JsxParser from 'react-jsx-parser'
import './Home.css'
import 'react-router-modal/css/react-router-modal.css'
import { connect } from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom'
import moment from 'moment'
import Moment from 'react-moment'
import NewTaskModal from './NewTaskModal.js'

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  time = moment().format('H')
  today = moment().format('L')
  todayList = this.props.userTasks.filter(task => task.date === this.today && task.status === false)
  incompleteTasks = this.props.userTasks.filter(task => task.status === false)
  
  render() {
    const {time, todayList} = this
    return (
      <div className='home'>
        {time >= 4 && time < 11 ? <h2 className='greeting'>Good morning</h2> 
          : time >= 11 && time < 16 ? <h2 className='greeting'>Good afternoon</h2> : <h2 className='greeting'>Good evening</h2>}
        <div className='today'>
          <p className='date'>{moment().format('LL')}</p>
          <p className='time'>
            <Moment interval={10000} format='LT' />
          </p>
        </div>
        <Link className='countLink' to='/taskList'>
          <div className='countContainer'>
            <h1 className='count'>{todayList.length}</h1>
            <p className='total'>{this.props.userTasks.length}</p>
          </div>
        </Link>
        <div className='homeList'>
          {
            todayList.map((task, index) => {
              return (
                <div className='listItem' key={index}>
                  <div className='iconContainer'><JsxParser jsx={task.task_icon} /></div>
                  <div className='itemContainer'>
                    <p className='itemName'>{task.name}</p>
                    <p className='duration'>{task.start_time}-{task.end_time}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        
        <Link className='addTaskLink' to={{pathname:'/taskModal', state: {modal: true}}}>+</Link>
  
        <Route path='/taskModal' render={props => <NewTaskModal {...props} />} />
  
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userTasks: state.userTasks,
  userData: state.userData,
  isLoading: state.isLoading,
})


export default withRouter(connect(mapStateToProps)(Home))
