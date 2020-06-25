import React, { Component } from 'react';
import styled from 'styled-components';

class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newBaseTime = this.props.baseTime;

    if (e.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(e.target.value, 10), 'minutes');
    if (e.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div >    
        <label htmlFor="minutes">Set Timer</label>   
        <MinInput
          id="minutes"
          className="form-control"
          type="number"
          defaultValue={this.props.baseTime.get('minutes')}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TimerConfig;

const MinInput = styled.input `
  font-size: 0.8rem;
  width: 3rem;
  margin: 0;
`