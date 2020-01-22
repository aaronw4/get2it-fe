import React from 'react';
import './Dashboard.css'
import moment from 'moment'
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
import { getTASKS, updateTask } from "../../actions.js";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.notifyRan = []
    this.timeout = null;
    
  }

  time = moment().format("LT");
  today = moment().format("L");
  
  componentDidMount() {
    this._mounted = true
    this.props.getTASKS(this.props.userData.id)
    this.timeout = setTimeout(() => {
      this.runNotify();
    }, 3000);
    this.interval = setInterval(() => {
      this.timeout = this.runNotify()
    }, 60000);
  }
  
  componentWillUnmount() {
    this._mounted = false
    clearTimeout(this.timeout);
    clearInterval(this.interval)
    this.timeout = null;
  }
  

  sift = (name,time) => {
    const todayList = this.props.userTasks.filter(
      task => task.date === this.today && task.status === false
    );
    let notified = todayList.map(task => {
      console.log(task.timeLeft,time)
      if (task.name === name && task.timeLeft >= time) {
        return true
      }else {
        return false
      }
    })
    if (notified.includes(true)) {
      return true;
    } else {
      return false;
    }
  }
  
  runNotify = () => {

    const todayList = this.props.userTasks.filter(
      task => task.date === this.today && task.status === false
    );
    let i = 0;
    todayList.forEach((task,index) => {
      const endTime = moment(task.end_time, 'HH:mm:ss a')
      const currentTime = moment(moment().format("LT"), "HH:mm:ss a");
      const minutesLeft = moment.duration(endTime.diff(currentTime)).asMinutes();
      // const hoursLeft = moment.duration(endTime.diff(currentTime)).asHours();
      console.log(task.name, minutesLeft)
      if (minutesLeft === 60 && this.sift(task.name,60) === false) {
        this.timeout = setTimeout(() => {
          notify(
            <div className="notifyContainer">
              <span className="notifyText">You have </span>
              <span className="notifyEnd">one hour</span>
              <span className="notifyText"> left to complete </span>
              <span className="notifyName">{task.name}</span>
            </div>
          );
        }, i * 6000);
        const payload = {
          timeLeft: minutesLeft
        }
        this.props.updateTask(payload, task.id)
        this.props.getTASKS(this.props.userData.id);

        i++;
      }
      else if (
              (minutesLeft === 30 && this.sift(task.name,30) === false) ||
              (minutesLeft === 10 && this.sift(task.name,10) === false) ||
              (minutesLeft === 5 && this.sift(task.name,5) === false)
            ) {
              this.timeout = setTimeout(() => {
                notify(
                  <div className="notifyContainer">
                    <span className="notifyText">You have </span>
                    <span className="notifyEnd">{minutesLeft} minutes</span>
                    <span className="notifyText"> left to complete </span>
                    <span className="notifyName">{task.name}</span>
                  </div>
                );
              }, i * 6000);
              const payload = {
                timeLeft: minutesLeft
              };
              this.props.updateTask(payload, task.id);
              i++;
            } else if (minutesLeft === 1 && this.sift(task.name,1) === false) {
                    this.timeout = setTimeout(() => {
                      notify(
                        <div className="notifyContainer">
                          <span className="notifyText">You have </span>
                          <span className="notifyEnd">
                            {minutesLeft} minute
                          </span>
                          <span className="notifyText">
                            {" "}
                            left to complete{" "}
                          </span>
                          <span className="notifyName">{task.name}</span>
                        </div>
                      );
                    }, i * 6000);
                    const payload = {
                      timeLeft: minutesLeft
                    };
                    this.props.updateTask(payload, task.id);
                    i++;
                  } else if (minutesLeft <= 0 && this.sift(task.name,-1) === false) {
                            this.timeout = setTimeout(() => {
                              notify(
                                <div className="notifyContainer">
                                  <span className="notifyName">
                                    {task.name}{" "}
                                  </span>
                                  <span className="notifyText">is </span>
                                  <span className="notifyEnd">
                                    OVERDUE!!!{" "}
                                  </span>
                                  <span className="notifyText">
                                    Please update the due date or mark it
                                    complete!
                                  </span>
                                </div>
                              );
                            }, i * 6000);
                            const payload = {
                              timeLeft: minutesLeft
                            };
                            this.props.updateTask(payload, task.id);
                            i++;
                          }
    });
  };

  logout = evt => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
    window.location.reload(false);
  };

  render() {
    console.log(this.props);
    
    
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
              and <span className="expiredGet2It">Get2It</span>.
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
  updateTask,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Dashboard));