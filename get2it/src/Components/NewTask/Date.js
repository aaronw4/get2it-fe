import React from "react";
import Downshift from "downshift";
import Kalendaryo from "kalendaryo";
import Calendar from "./Calender";
import { format } from "date-fns";
import "./NewTask.css";
import { newTaskDate } from '../../actions.js'
import { connect } from 'react-redux'

class Date extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
    }
  }
  render() {
    console.log(this.state.date)

    return (
      <Downshift
        id="date"
        itemToString={date => (date ? format(date, "MM/dd/yyyy") : "")}
        onSelect={date => {
          const newDate = format(date, "MM/dd/yyyy");
          this.setState({ date: newDate });
          newTaskDate(this.state.date)
        }}
        {...this.props}
      >
        {({
          getInputProps,
          getItemProps,
          toggleMenu,
          isOpen,
          selectedItem
        }) => (
          <div className="date-picker-container">
            <input
              {...getInputProps({
                readOnly: true,
                placeholder: "Date",
                onClick: toggleMenu
              })}
            />

            {isOpen ? (
              <Kalendaryo
                startCurrentDateAt={selectedItem}
                selectedItem={selectedItem}
                getItemProps={getItemProps}
                render={Calendar}
              />
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

const mapDispatchToProps = {
  newTaskDate,
};

export default connect(null,mapDispatchToProps)(Date);
