import React, { Component } from "react";
import moment from "moment";
import TimePicker from "./TimePicker";

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
		  <h1>Start</h1>
    <form onSubmit={this.handleSubmit}>
    <span><i class="far fa-clock"></i></span>
      <TimePicker value={this.state.value} onChange={this.handleChange} />
	  <br/>
    </form>
	</div>
  );
}

export default TimeSelectForm;
