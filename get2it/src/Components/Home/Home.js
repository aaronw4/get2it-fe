import React from 'react'
import './Home.css'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
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
        <h1 className='count'>2</h1>
        <p className='total'>17</p>
      </div>
      <div className='homeList'>
        <div className='listItem'>
          <div className='iconContainer'><i id='icon' className="icon fas fa-shopping-cart"></i></div>
          <div className='itemContainer'>
            <p className='itemName'>Pick up groceries</p>
            <p className='duration'>9am-10am</p>
          </div>
        </div>
        <div className='listItem'>
          <div className='iconContainer'><i id='icon' className="icon fas fa-heartbeat"></i></div>
          <div className='itemContainer'>
            <p className='itemName'>Go to the dentist</p>
            <p className='duration'>12:30pm-1:30pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(Home)