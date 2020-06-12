import React, { Component } from 'react';

//importing components
import Menu from '../Menu/Menu';
import Timer from '../Timer/Timer/Timer';

//importing libraries
import styled from 'styled-components';
import moment from 'react-moment';
import Moment from 'moment';

class Header extends Component {
    constructor(props) {
        super(props);
        this.initialRun = JSON.parse(sessionStorage.getItem("initialRun"));
        this.notifyRan = false;
        this.timeout = null;
        this.notifyList = [];
      }

      time = moment().format('H')
      today = moment().format('L')
      todayList = this.props.userTasks.filter(task => task.date === this.today && task.status === false)
      incompleteTasks = this.props.userTasks.filter(task => task.date < this.today && task.status === false) 
    
    render() {
        const {time, todayList} = this;

        return (
            <HeaderDiv>
                <Nav>
                    <Menu />
                </Nav>
                <HeaderGreeting>
                    {time >= 4 && time < 11 ? (
                        <H2>Good Morning!</H2>
                    ) 
                    :  time >= 11 && time < 16 ? (
                        <H2>Good Afternoon!</H2>
                    ) : (
                        <H2>Good Evening!</H2>
                    )}
                    <H3>{moment().format('LL')}</H3> 
                    <p className="time">
                        <Moment interval={10000} format = "LT" />
                    </p>
                </HeaderGreeting>
                <div className='timer'>
                    <Timer />
                </div>
               
            </HeaderDiv>
        )
    }
};

const HeaderDiv = styled.div`
  font-size: 1rem;
  height: 25vh;
  display: flex;
  flex-direction: row;
  width: 99vw;
  ${'' /* justify-content: space-between; */}
`;

const Nav = styled.div`
  font-size: 1rem;
  height: 25vh;
  width: 3%;
`;

const HeaderGreeting = styled.div`
  font-size: 1rem;
  height: 25vh;
  display: flex;
  flex-direction: column;
  width: 35%;
  margin-left: 2%;
  ${'' /* justify-content: space-between; */}
  
`;

const H2 = styled.h2`
  font-size: 1.6rem;
  margin: 5px;
  color: white;
  font-weight: 500; 
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  color: dark-gray;
  font-weight: 200; 
`;
export default Header;