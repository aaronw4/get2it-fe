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
import EditCompletedTaskList from '../editCompletedTask/EditTask'
import TaskList from '../TaskList/index.js'
import Profile from '../Profile/Profile.js'
import Spinner from '../Spinner/Spinner.js'
import CompletedTaskList from '../CompletedTaskList/index.js'
import Notification, { notify } from '../Notifications/Notification.js'
import { getTASKS, updateTask } from "../../actions.js";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.initialRun = JSON.parse(sessionStorage.getItem("initialRun"));
    this.notifyRan = false;
    this.timeout = null;
    this.notifyList = [];
  }

  time = moment().format("LT");
  today = moment().format("L");

  componentDidMount() {
    this._mounted = true;
    this.props.getTASKS(this.props.userData.id);
    // this.timeout = setTimeout(() => {
    //   this.runNotify();
    // }, 3000);
    this.interval = setInterval(() => {
      console.log(this.initialRun)
      this.timeout = this.runNotify();
    }, 5000);
  }

  componentWillUnmount() {
    this._mounted = false;
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.timeout = null;
    if (this.notifyList.length > 0) {
      this.notifyList.forEach(task => {
        this.props.updateTask(task.payload, task.id);
      });
    }
  }


  sift = (name, time) => {
    const todayList = this.props.userTasks.filter(
      task => task.date === this.today && task.status === false
      );
      let notified = todayList.map(task => {
        const endTime = moment(task.end_time, "HH:mm:ss a");
        const currentTime = moment(moment().format("LT"), "HH:mm:ss a");
        const minutesLeft = moment
        .duration(endTime.diff(currentTime))
        .asMinutes();
        const makeList = (name) => {
          if (this.initialRun === null) {
            this.initialRun = []
            return false
          }else {

            for (let i = 0; i < this.initialRun.length; i++) {
              if (this.initialRun[i].name === name) {
                return true
              }
              else if (undefined) {
                return false
              }else {
                return false
              }
            }
          }
        }
        let nameInList = makeList(name)
        console.log(nameInList);
        // console.log(task.name === name, minutesLeft <= time);
        if (task.name === name && minutesLeft !== time && nameInList !== false && nameInList !== undefined) {
          return true;
        } else {
          return false;
        }
      });
      // console.log(this.initialRun.includes(name));
    console.log(this.initialRun)

    if (this.initialRun === null) {
      return false
    }else {

      if (this.initialRun.length === 0) {
        let initRun = todayList.map(task => {
          return false
        })
        if (notified.includes(true) || initRun.includes(true)) {
          return true;
        } else {
          return false;
        }
      }else {
        let initRun = this.initialRun.map(task => {
          console.log(task.time, time);
          if (task.name === name && task.time === time) {
            return true
          }else {
            return false
          }
        })
        if (notified.includes(true) || initRun.includes(true)) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  runNotify = () => {
    const todayList = this.props.userTasks.filter(
      task => task.date === this.today && task.status === false
    );
    let i = 1;
    todayList.forEach((task, index) => {
      const endTime = moment(task.end_time, "HH:mm:ss a");
      const currentTime = moment(moment().format("LT"), "HH:mm:ss a");
      const minutesLeft = moment
        .duration(endTime.diff(currentTime))
        .asMinutes();
      // const hoursLeft = moment.duration(endTime.diff(currentTime)).asHours();
      
      console.log(task.name, task.timeLeft);
      if (minutesLeft === 60 && this.sift(task.name, 60) === false) {
        const payload = {
          timeLeft: minutesLeft
        };
        this.notifyList.push({ id: task.id, payload });

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
        this.initialRun = [
          ...this.initialRun,
          {
            name: task.name,
            time: 60
          }
        ]
        this.notifyRan = true;
        // this.props.getTASKS(this.props.userData.id);

        i++;
      } else if (
        (minutesLeft === 30 && this.sift(task.name, 30) === false) ||
        (minutesLeft === 10 && this.sift(task.name, 10) === false) ||
        (minutesLeft === 5 && this.sift(task.name, 5) === false)
      ) {
        const payload = {
          timeLeft: minutesLeft
        };
        this.notifyList.push({ id: task.id, payload });

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
        this.initialRun = [
          ...this.initialRun,
          {
            name: task.name,
            time: minutesLeft
          }
        ];
        this.notifyRan = true;
        i++;
      } else if (minutesLeft === 1 && this.sift(task.name, 1) === false) {
        const payload = {
          timeLeft: minutesLeft
        };
        this.notifyList.push({ id: task.id, payload });

        this.timeout = setTimeout(() => {
          notify(
            <div className="notifyContainer">
              <span className="notifyText">You have </span>
              <span className="notifyEnd">{minutesLeft} minute</span>
              <span className="notifyText"> left to complete </span>
              <span className="notifyName">{task.name}</span>
            </div>
          );
        }, i * 6000);
        this.initialRun = [
          ...this.initialRun,
          {
            name: task.name,
            time: 1
          }
        ];
        this.notifyRan = true;
        i++;
      } else if (minutesLeft <= 0 && this.sift(task.name, -1) === false) {
        const payload = {
          timeLeft: minutesLeft
        };
        this.notifyList.push({id: task.id, payload})
        
        this.timeout = setTimeout(() => {
          notify(
            <div className="notifyContainer">
              <span className="notifyName">{task.name} </span>
              <span className="notifyText">is </span>
              <span className="notifyEnd">OVERDUE!!! </span>
              <span className="notifyText">
                Please update the due date or mark it complete!
              </span>
            </div>
          );
        }, i * 6000);
        this.initialRun = [
          ...this.initialRun,
          {
            name: task.name,
            time: -1
          }
        ];
        this.notifyRan = true;
        // this.props.getTASKS(this.props.userData.id);
        i++;
      } else if (task.timeLeft === null && this.sift(task.name, minutesLeft)) {
        const payload = {
          timeLeft: minutesLeft
        };
        this.notifyList.push({ id: task.id, payload });

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
        this.initialRun = [
          ...this.initialRun,
          {
            name: task.name,
            time: minutesLeft
          }
        ];
        this.notifyRan = true;
        i++;
      }
    });

    sessionStorage.setItem('initialRun', JSON.stringify(this.initialRun))
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
                path="/CompletedtaskModal"
                render={props => <CompletedTaskList {...props} />}
              />
              <Route
                path="/EditTaskList"
                render={props => <EditTaskList {...props} />}
              />
              <Route
                path="/EditCompletedTaskList"
                render={props => <EditCompletedTaskList {...props} />}
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