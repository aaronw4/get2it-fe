import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Timer from '../Timer/Timer/Timer';
import styled from 'styled-components';


class Header extends Component {
    constructor(props) {
        super(props);
        this.initialRun = JSON.parse(sessionStorage.getItem("initialRun"));
        this.notifyRan = false;
        this.timeout = null;
        this.notifyList = [];
      }

    render() {
        return (
            <HeaderDiv>
                <Nav>
                    <Menu />
                </Nav>
                <HeaderGreeting>
                    <h2>Good Afternoon, displayName!</h2>
                    <h3>June 9, 2019 5:21 pm CST</h3> {/* March 24, 2020 08:30 PM*/}
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
  ${'' /* justify-content: space-between; */}
  
`;

export default Header;