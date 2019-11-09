import React from 'react'
import './Home.css'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import moment from 'moment'

function Home(props) {
  console.log(moment().format('LT'))

  return (
    <div className='home'>
      <div className='today'>
        <p className='date'>{moment().format('LL')}</p>
        <p className='time'>{moment().format('LT')}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(Home)