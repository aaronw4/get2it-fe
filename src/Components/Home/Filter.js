import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import Moment from 'react-moment'
import { withRouter } from 'react-router'
import './Home.css'

export const Filter = () => {
    

    
    return (
        <div className='filterButtonsCont'>
            <button>Today</button>
            <button>Tomorrow</button>
            <button>Someday</button>
            <button>Past</button>
        </div>
    )
    
}

const mapStateToProps = state => ({
    userTasks: state.userTasks
})

export default withRouter(connect(mapStateToProps(Filter)))