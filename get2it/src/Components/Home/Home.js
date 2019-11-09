import React from 'react'
import './Home.css'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import moment from 'moment'

function Home(props) {
  const time = moment().format('H')

  return (
    <div className='home'>
      {time > 4 && time < 11 ? <h2 className='greeting'>Good morning</h2> 
        : time >= 11 && time < 4 ? <h2 className='greeting'>Good afternoon</h2> : <h2 className='greeting'>Good evening</h2>}
      <div className='today'>
        <p className='date'>{moment().format('LL')}</p>
        <p className='time'>{moment().format('LT')}</p>
      </div>
      <div className='countContainer'>
        <h1 className='count'>8</h1>
        <p className='total'>17</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(Home)