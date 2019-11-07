import React from 'react';
import './Dashboard.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

class Dashboard extends React.Component {

  logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    props.history.push('/login')
  }

  render() {

    return (

      <div className="dashboard">

        <button className='logOutButton' onClick={this.logout}>Logout</button>

        {this.props.isLoading ? <p className='loading'>Loading...</p> :
            <div className='appRoutes'>
              <p>TEMP MESSAGE (remove later)</p>
              {/* <Route exact path='/' render={props => <Home {...props} />} /> */}

            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // userData: state.userData,
  isLoading: state.isLoading,
})

export default withRouter(connect(mapStateToProps)(Dashboard));