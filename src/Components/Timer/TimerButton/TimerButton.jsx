import React, { Component } from 'react';

import * as timerState from '../timerState';

class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerState.NOT_SET)
      return (<button className="btn btn-success center-block" onClick={this.props.startTimer}>Start</button>);

    if (this.props.timerState === timerState.RUNNING)
      return (<button className="btn btn-danger center-block" onClick={this.props.stopTimer}>Interrupt</button>);

    if (this.props.timerState === timerState.COMPLETE)
      return (<button className="btn btn-info center-block" onClick={this.props.stopTimer}>Reset</button>);
  }

  render() {
    return (
      <div className="row">
        {this.getButton()}
      </div>
    );
  }
}

export default TimerButton;