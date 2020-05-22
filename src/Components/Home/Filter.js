import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router'
import {updateFilteredTask} from '../../actions'
import './Home.css'

export const Filter = props => {
    const time = moment().format('H')
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'd').format('L')
    const todayList = props.userTasks.filter(task => task.date === today && task.status === false)
    const tomorrowList = props.userTasks.filter(task => task.date === tomorrow && task.status === false)
    const someday = props.userTasks.filter(task => task.date > tomorrow && task.status === false)
    const incompleteTasks = props.userTasks.filter(task => task.date < today && task.status === false) 
    const pastCompleted = props.userTasks.filter(task => task.date < today)

    function handleClick(filter) {
        props.updateFilteredTask(filter)
    }
    
    return (
        <div className='filterButtonsCont'>
            <button onClick={() => handleClick(today)}>Today</button>
            <button onClick={() => handleClick(tomorrow)}>Tomorrow</button>
            <button onClick={handleClick(someday)}>Someday</button>
            <button>Past</button>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        userTasks: state.userTasks
    }    
}

const mapDispatchToProps = {
    updateFilteredTask
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Filter)
)