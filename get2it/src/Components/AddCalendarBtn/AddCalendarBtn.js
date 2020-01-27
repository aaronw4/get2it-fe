import React, { Component } from "react"
import AddToCalendar from "react-add-to-calendar"
import moment from "moment"
let items = [{ google: "Google" }]
class AddToCalendarBtn extends Component {
  state = {
    event: {
      title: this.props.title,
      description: "",
      location: "",
      startTime: moment().format(),
      endTime: moment().endOf("day")
    }
  }

  render() {
    return (
      <span style={{ color: "white" }}>
        <AddToCalendar
          event={this.state.event}
          displayItemIcons={false}
          listItems={items}
        />
      </span>
    )
  }
}
export default AddToCalendarBtn
