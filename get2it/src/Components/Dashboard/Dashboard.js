import React from 'react';
import './Dashboard.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import OnBoarding from '../OnBoarding/index.js'

class Dashboard extends React.Component {

  logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {

    return (

      <div className="dashboard">
        <div className='nav'>
          <button className='logOutButton' onClick={this.logout}>Logout</button>
        </div>

        {this.props.isLoading ? <p className='loading'>Loading...</p> :
            <div className='appRoutes'>
              <Route path='/onboarding' render={props => <OnBoarding {...props} />} />

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