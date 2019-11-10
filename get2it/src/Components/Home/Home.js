import React from 'react'
import JsxParser from 'react-jsx-parser'
import './Home.css'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
import moment from 'moment'
import Moment from 'react-moment'

function Home(props) {
  const time = moment().format('H')
  const today = moment().format('L')
  const todayList = props.userTasks.filter(task => task.date === today)
  console.log(todayList)

  return (
    <div className='home'>
      {time >= 4 && time < 11 ? <h2 className='greeting'>Good morning</h2> 
        : time >= 11 && time < 16 ? <h2 className='greeting'>Good afternoon</h2> : <h2 className='greeting'>Good evening</h2>}
      <div className='today'>
        <p className='date'>{moment().format('LL')}</p>
        <p className='time'>
          <Moment interval={20000} format='LT' />
        </p>
      </div>
      <div className='countContainer'>
        <h1 className='count'>{todayList.length}</h1>
        <p className='total'>{props.userTasks.length}</p>
      </div>
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
    </div>
  )
}

const mapStateToProps = state => ({
  userTasks: state.userTasks,
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(Home)