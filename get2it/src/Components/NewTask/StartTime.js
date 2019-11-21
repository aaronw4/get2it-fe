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
      <h1 className="Title2" > START</h1>
	  <div className="startTime">
		  
    <form onSubmit={this.handleSubmit}>
    <i class="far fa-clock fa-3x"></i>
      <TimePicker value={this.state.value} onChange={this.handleChange} />
	  <br/>
    </form>
	</div>
  </div>
  );
}

export default TimeSelectForm;
