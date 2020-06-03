import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router'
import {updateFilteredTask, timePeriod} from '../../actions'
import './Home.css'

export const Filter = props => {
    const today = moment().format('L')
    const tomorrow = moment().add(1, 'd').format('L')
    const todayList = props.userTasks.filter(task => task.date === today && task.status === false)
    const tomorrowList = props.userTasks.filter(task => task.date === tomorrow && task.status === false)
    const somedayList = props.userTasks.filter(task => task.date > tomorrow && task.status === false)
    const pastList = props.userTasks.filter(task => task.date < today)
    const incompleteTasks = props.userTasks.filter(task => task.date < today && task.status === false) 
    const pastCompleted = props.userTasks.filter(task => task.date < today)

    function handleClick(filter, string) {
        props.updateFilteredTask(filter);
        props.timePeriod(string)
    }
    
    return (
        <div className='filterButtonsCont'>
            <button onClick={() => handleClick(todayList, 'Today')}>Today</button>
            <button onClick={() => handleClick(tomorrowList, 'Tomorrow')}>Tomorrow</button>
            <button onClick={() => handleClick(somedayList, 'Beyond Tomorrow')}>Beyond</button>
            <button onClick={() => handleClick(pastList, 'Past')}>Past</button>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        userTasks: state.userTasks,
        timePeriod: state.timePeriod
    }    
}

const mapDispatchToProps = {
    updateFilteredTask,
    timePeriod
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Filter)
)