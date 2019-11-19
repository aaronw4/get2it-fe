import React, { Component } from "react";
import moment from "moment";
import TimePicker from "./TimePicker";
import './NewTask.css'

class TimeSelectForm extends Component {
  state = {
    value: moment()
  };

  handleChange = value => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    alert(moment(this.state.value).format("hh:mm a"));
  };

  render = () => (
    <div>
      <h1>End</h1>
    <form className="TimeForm" onSubmit={this.handleSubmit}>
    <span><i class="far fa-clock fa-4x"></i></span>
      <TimePicker className="form" value={this.state.value} onChange={this.handleChange} />
      <br />
    </form>
    </div>
  );
}

export default TimeSelectForm;
