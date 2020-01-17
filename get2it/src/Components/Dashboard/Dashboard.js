import React from 'react';
import './Dashboard.css'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import OnBoarding from '../OnBoarding/index.js'
import Home from '../Home/Home.js'
import Menu from '../Menu/Menu.js'
import NewTask from '../NewTask/NewTask.js'
import EditTaskList from '../editTask/EditTask.js'
import TaskList from '../TaskList/index.js'
import Profile from '../Profile/Profile.js'
import Spinner from '../Spinner/Spinner.js'
import CompletedTaskList from '../CompletedTaskList/index.js'
import Notification, { notify } from '../Notifications/Notification.js'
import { getTASKS } from "../../actions.js";


class Dashboard extends React.Component {

  componentDidMount() {
    
    this.props.getTASKS(this.props.userData.id);
    
    setTimeout(() => {
      
      let i = 0
      const { userTasks } = this.props
      for (; i < userTasks.length;) {
        if (userTasks[i].status === false) {
          notify(
            <div className='notifyContainer'>
              <span className='notifyName'>{userTasks[i].name} </span>
              <span className='notifyText'>is set to begin at </span>
              <span className='notifyStart'>{userTasks[i].start_time} </span>
              <span className='notifyText'>on </span>
              <span className='notifyDate'>{userTasks[i].date}</span>
            </div>
          );
          setTimeout(() => {
            i++
          }, 8000);
        }
      };
    }, 2000);
    
  }

  logout = evt => {

    localStorage.removeItem("token");
    this.props.history.push("/login");
    window.location.reload(false)
  };

  render() {
    console.log(this.props)
    return (
      <>
        {this.props.isLoading ? (
          <Spinner />
        ) : this.props.errorStatus === 401 ? (
          <Alert
            variant="danger"
            className="expired"
            onClose={this.logout}
            dismissible
          >
            <Alert.Heading className="expiredHead">
              Your Session Has Expired!
            </Alert.Heading>
            <p>
              For security purposes your session has expired. Please log back in
              and <span className='expiredGet2It'>Get2It</span>.
            </p>
          </Alert>
        ) : (
          <div className="dashboard">
            <div className="nav">
              <Menu />
            </div>
            <div className="appRoutes">
            <Notification />
              <Route
                path="/onboarding"
                render={props => <OnBoarding {...props} />}
              />

              <Route exact path="/" render={props => <Home {...props} />} />
              <Route path="/NewTask" render={props => <NewTask {...props} />} />
              <Route
                path="/taskList"
                render={props => <TaskList {...props} />}
              />
              <Route path="/taskModal" render={props => <Home {...props} />} />
              <Route path="/profile" render={props => <Profile {...props} />} />
              <Route
                path="/CompletedTaskList"
                render={props => <CompletedTaskList {...props} />}
              />
              <Route
                path="/edittaskModal"
                render={props => <TaskList {...props} />}
              />
              <Route
                path="/EditTaskList"
                render={props => <EditTaskList {...props} />}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userTasks: state.userTasks,
  userData: state.userData,
  isLoading: state.isLoading,
  errorStatus: state.errorStatus,
})

const mapDispatchToProps = {
  getTASKS,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));