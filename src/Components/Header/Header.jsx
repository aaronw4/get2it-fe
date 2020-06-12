import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Timer from '../Timer/Timer/Timer';


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
            <div className='header'>
                <div className="nav">
                    <Menu />
                </div>
                <div className='header-greeting'>
                    <h2>Good Afternoon, displayName!</h2>
                    <h3>June 9, 2019 5:21 pm CST</h3> {/* March 24, 2020 08:30 PM*/}
                </div>
                <div className='timer'>
                    <Timer />
                </div>
                <div></div>
            </div>
        )
    }
};

export default Header;