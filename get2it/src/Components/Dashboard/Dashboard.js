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
import { getTASKS } from "../../actions.js";


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getTASKS(this.props.userData.id);
  }

  render() {
    return (
      <>
        {() => {
          if(this.props.isLoading) {
            return (
              <Spinner />
            )
          }else if (this.props.errorStatus === 401) {
            return (
              <Alert variant="danger" onClose={() => this.props.history.push('/login')} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>
              </Alert>
            )
          }else {
            return (
              <div className="dashboard">
              <div className="nav">
                <Menu />
              </div>
              <div className="appRoutes">
                <Route
                  path="/onboarding"
                  render={props => <OnBoarding {...props} />}
                />

                <Route exact path="/" render={props => <Home {...props} />} />
                <Route path="/NewTask" render={props => <NewTask {...props} />} />
                <Route path="/taskList" render={props => <TaskList {...props} />} />
                <Route path="/taskModal" render={props => <Home {...props} />} />
                <Route path="/profile" render={props => <Profile {...props} />} />
                <Route path="/CompletedTaskList" render={props => <CompletedTaskList {...props} />} />
                <Route path="/edittaskModal" render={props => <TaskList {...props} />} />
                <Route path="/EditTaskList" render={props => <EditTaskList {...props} />} />

              </div>
            </div>
            )
          }
        }}
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