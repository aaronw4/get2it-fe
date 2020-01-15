import React from 'react'
import './notification.css'



export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: -100,
    }
  }

  onShow = () => {

  }

  showNotification = () => {
    this.setState({
      top: 16,
    }, () => {
      setTimeout(() => {
        this.setState({
          top: -100,
        })
      }, 5000);
    })
  }

  render() {
    return (
      <>
        <button onClick={this.showNotification} style={{}}>Hey!</button>
        <div className='notificationContainer' style={{top: this.state.top}}>
          <p className='notificationBody'>You've been notified!</p>
        </div>
      </>
    )
  }

}