import React from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-bootstrap-time-picker";

var now = moment();
var dateInSec = 0;
var timeInSec = 0;
export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: now,
      time: 0,
      startTime: now.hour() + ":" + now.minutes()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.compute = this.compute.bind(this);
    let roundofftime = now.minutes() % 2;
    console.log(
      "current minuts",
      now.minutes(),
      " round off val ",
      roundofftime
    );
  }

  handleChange(selectedDateTime) {
    var currentDate = moment(new Date(), "DD/MM/YYYY");
    var selectedDate = moment(new Date(selectedDateTime._d), "DD/MM/YYYY");
    var duration = moment.duration(selectedDate.diff(currentDate));
    var durationInSec = this.convertSecond(duration._data);
    console.log(
      "currentDatetime Obj",
      currentDate,
      "selectedDatetime Obj",
      selectedDate,
      "Duration Obj ",
      duration,
      "Converted Seconds",
      durationInSec
    );
    if (durationInSec > 0) {
      this.setState({
        startTime: "00:00"
      });
    } else {
      this.setState({
        startTime: now.hour() + ":" + now.minutes()
      });
    }
    this.setState({
      startDate: selectedDateTime
    });
    dateInSec = durationInSec;
    this.compute();
  }
  convertSecond(durationData) {
    return (
      durationData.hours * 60 * 60 +
      durationData.minutes * 60 +
      durationData.seconds
    );
  }

  handleTime(selectedTime) {
    var now = moment();
    var currentTimeInSeconds =
      now.hour() * 60 * 60 + now.minutes() * 60 + now.seconds();

    var timeDiffInSec = selectedTime - currentTimeInSeconds;
    console.log(
      "Selected time in seconds ",
      selectedTime,
      " Current time in seconds ",
      currentTimeInSeconds,
      "Time diff in seconds"
    );

    this.setState({
      time: selectedTime
    });
    timeInSec = timeDiffInSec;
    this.compute();
  }

  compute() {
    let finalSec = timeInSec + dateInSec;
    console.log(
      "computed value ",
      finalSec,
      " time ",
      timeInSec,
      " date ",
      dateInSec
    );
  }

  render() {
    return (
      <div className="block_container">
        <div className="bloc2">
		<h1>start</h1>
		<button Class="far fa-clock" />
          <TimePicker
            start={this.state.startTime}
            end="23:59"
            step={20}
            onChange={this.handleTime}
            value={this.state.time}
            initialValue="00:00"
          />
        </div>
      </div>
    );
  }
}

export default Clock;


