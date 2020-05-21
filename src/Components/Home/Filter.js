import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router'
import './Home.css'

const Filter = props => {
    const time = moment().format('H')
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'd').format('L')
    const todayList = props.userTasks.filter(task => task.date === today && task.status === false)
    const tomorrowList = props.userTasks.filter(task => task.date === tomorrow && task.status === false)
    const someday = props.userTasks.filter(task => task.date > tomorrow && task.status === false)
    const incompleteTasks = props.userTasks.filter(task => task.date < today && task.status === false) 
    const pastCompleted = props.userTasks.filter(task => task.date < today)
    
    return (
        <div className='filterButtonsCont'>
            <button>Today</button>
            <button>Tomorrow</button>
            <button>Someday</button>
            <button>Past</button>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        userTasks: state.userTasks
    }    
}

export default withRouter(connect(mapStateToProps)(Filter))