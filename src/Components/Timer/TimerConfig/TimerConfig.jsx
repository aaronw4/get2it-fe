import React, { Component } from 'react';

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
      <div className="row">
        <h2 className="text-primary">Set Timer</h2>
        <div className="row control-row">
          <div className="form-group">
            <div className="col-sm-3">
              <label htmlFor="minutes">Minutes</label>
            </div>
            <div className="col-sm-9">
              <input
                id="minutes"
                className="form-control"
                type="number"
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerConfig;