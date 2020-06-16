import React from 'react';
import './Home.css';
import 'react-router-modal/css/react-router-modal.css';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import moment from 'moment';
import NewTaskModal from './NewTaskModal.js';
import Filter from './Filter';
import Timer from '../Timer/Timer/Timer';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _mounted: null
    }
  }

  componentDidMount() {
    this.setState({_mounted: true});
  };

  componentWillUnmount() {
    this.setState({_mounted: false});
  }

  time = moment().format('H')
  today = moment().format('L')
  todayList = this.props.userTasks.filter(task => task.date === this.today && task.status === false)
  incompleteTasks = this.props.userTasks.filter(task => task.date < this.today && task.status === false) 

  render() {
    const { todayList } = this

    return ( 
      <div className="home">
        <div className="homeList">          
          <Filter/>
          <div className='listContainer'>
            {todayList.length !== 0 && this.props.filteredTasks.length === 0 ? (
              <div>
                <h3>{this.props.timePeriod}</h3>
                {(todayList.map((task, index) => {
                  return (
                    <div className="listItem" key={index}>
                      <div className="itemContainer">
                        <p className="itemName">{task.name}</p>
                        <p className="duration">
                          {task.start_time}-{task.end_time}
                        </p>
                      </div>
                    </div>
                  )
                })) }
              </div>
            ) : 
            this.props.timePeriod === 'Today' && this.props.filteredTasks.length === 0 ? (
              <div className="noTaskContainer"> 
                <h3>{this.props.timePeriod}</h3>            
                <p>Or add a new task!</p>
                <Link
                  id="addTaskLink"
                  to={{ pathname: "/taskModal", state: { modal: true } }}
                >
                  +
                </Link>
                <Timer />
              </div>
            ) : (
              <div>
                <h3>{this.props.timePeriod}</h3>
                {this.props.filteredTasks.map((task) => {
                  return (
                    <div key={task.id}>
                      {task.status === false && task.date < this.today ? 
                        <p className='Alert'>{task.name}</p>
                        :
                        <p>{task.name}</p>
                      }
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <Route
          path="/taskModal"
          render={props => <NewTaskModal {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userTasks: state.userTasks,
  filteredTasks: state.filteredTasks,
  userData: state.userData,
  isLoading: state.isLoading,
  timePeriod: state.timePeriod
})

export default withRouter(
  connect(
      mapStateToProps
  )(Home)
)