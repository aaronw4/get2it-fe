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
              <HeaderGreeting>
                  <H2>Good Afternoon, displayName!</H2>
                  <H3>June 9, 2019 5:21 pm CST</H3> {/* March 24, 2020 08:30 PM*/}
              </HeaderGreeting>
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