//React Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//library/framework imports
import styled from 'styled-components';
import moment from 'moment';
import Moment from 'react-moment';

//component imports
import Menu from '../Menu/Menu';
import Timer from '../Timer/Timer/Timer';

class Header extends Component {
    constructor(props) {
      super(props)
      this.state = {
        _mounted: null
      }
    };
  
    componentDidMount() {
      this.setState({
        _mounted: true
      })
    };
  
    componentWillUnmount() {
      this.setState({
        _mounted: false
      });
    };

    time = moment().format('H')
    today = moment().format('L')
    todayList = this.props.userTasks.filter(task => task.date === this.today && task.status === false)
    incompleteTasks = this.props.userTasks.filter(task => task.date < this.today && task.status === false)

    render() {
      const {time, todayList} = this

      return (
          <HeaderDiv>
              <Nav>
                  <Menu />
              </Nav>
              <div>
                  {time >= 4 && time < 11 ? (
                    <h2 className="greeting">Good Morning</h2>
                  ) : time >= 11 && time < 16 ? (
                    <h2 className="greeting">Good Afternoon</h2>
                  ) : (
                    <h2 className="greeting">Good Evening</h2>
                   )}
                  <div className="today">
                    <p className="date">{moment().format("LL")}</p>
                    <p className="time">
                    <Moment interval={10000} format="LT" />
                    </p>
                  </div>
                </div>
              <div className='timer'>
                  <Timer />
              </div>
              <Link className="countLink" to="/taskList">
                <div className="countContainer">
                  <h1 className="count">{todayList.length}</h1>
                  <p className="total">{this.props.userTasks.length}</p>
                </div>
              </Link>
          </HeaderDiv>
        )
    }
};

const HeaderDiv = styled.div`
  font-size: 1rem;
  height: 12vh;
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-around;
`;

const Nav = styled.div`
  font-size: 1rem;
  heigh: 10vh;
  width: 3%;
`;

const HeaderGreeting = styled.div`
  font-size: 0.9rem;
  height: 12vh;
  display: flex;
  flex-direction: column;
  width: 35%;
  ${'' /* justify-content: space-between; */}
  
`;

const H2 = styled.h2`
  font-size: 1.7rem;
 color: white;
 font-weight: 500;
  
`;

const H3 = styled.h2`
  font-size: 1.7rem;
 color: white;
 font-weight: 500;
  
`;

export default Header;