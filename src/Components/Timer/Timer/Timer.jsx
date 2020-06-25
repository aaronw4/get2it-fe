import React, { Component } from 'react';

//importing libraries
import moment from 'moment';
import styled from 'styled-components';

//importing components
import TimerDisplay from '../TimerDisplay/TimerDisplay';
import TimerButton from '../TimerButton/TimerButton';
import TimerConfig from '../TimerConfig/TimerConfig';

//importing state for Timer
import * as timerState from '../timerState';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      //setting the timer to default to 25 minutes
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      timerState: timerState.NOT_SET,
      timer: null,
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState: timerState.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerState.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    });
  }

  reduceTimer() {
    if (this.state.currentTime.get('hours') === 0
          && this.state.currentTime.get('minutes') === 0
          && this.state.currentTime.get('seconds') === 0) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime,
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerState.COMPLETE,
      timer: null,
    });
  }

  render() {

    return (

      <TimerContainer>

        <TimerPartA>
          <TimerDisplay
            currentTime={this.state.currentTime}
            timerState={this.state.timerState}
          />
          <TimerButton
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            timerState={this.state.timerState}/>
        </TimerPartA>

        <TimerPartB>
          {
          (this.state.timerState !== timerState.RUNNING)
            &&
            (<TimerConfig
              baseTime={this.state.baseTime}
              setBaseTime={this.setBaseTime}
            />)
        }
          </TimerPartB>

      </TimerContainer>    
    );
  }
}

const TimerContainer = styled.div`
  font-size: 0.8rem;
  color: white;
  font-weight: 300; 
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150 px;
  margin-top: 10%;
`;

const TimerPartA = styled.div`
  margin-left: 1rem;
`;

const TimerPartB = styled.div`
  margin-right: 1rem;
  margin-top: 2%;
`;
export default Timer;