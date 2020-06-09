import React, { Component } from 'react';


class Header extends Component () {
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
                <div className='header-greeting'>
                    <h2>Good Afternoon, {displayName}!</h2>
                    <h3>{date-goes-here}</h3> {/* March 24, 2020 08:30 PM*/}
                </div>
            </div>
        )
    }
};

export default Header;