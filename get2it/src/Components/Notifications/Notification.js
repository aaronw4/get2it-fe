import React from 'react'
import './notification.css'



export default class Notification extends React.Component {
  


  render() {
    return (
      <div className='notificationContainer'>
        <p className='notificationBody'>You've been notified!</p>
      </div>
    )
  }

}