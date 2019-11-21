import React, { Component } from "react";
import "./NewTask.css";
// import 'bulma/css/bulma.css'
import Clock from "./StartTime";
import Date from "./Date";
import EndTime from "./EndTime";
import Label from "./Label";
import Category from "./Category";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { set } from "date-fns";
import $ from "jquery";
import JsxParser from "react-jsx-parser";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: "" };
  }
  // removeicon = () => {
  //   // console.log('removing icon')
  //   $('.icon').remove();
  //   this.setState({
  //     icon: ""
  //   })
  // }
  // saveIcon= event => {
  //   this.removeicon()
  //   // var icontag = $('.addIcon').html();
  //   // // console.log(icontag)
  //   // var iconfix = icontag.replace('<svg id="icon" class="svg-inline--fa fa-heartbeat fa-w-16 iconDropdown" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heartbeat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg><!-- <i id="icon" class="', '');
  //   // console.log(iconfix)
  //   // var iconfixtwo = iconfix.replace(' -->', '')
  //   // console.log(iconfixtwo)
  //   // var iconclass= '<i id="icon" class="icon '
  //   // var iconfixthree = iconclass.concat(iconfixtwo)
  //   // console.log(iconfixthree)
  //   this.setState({
  //     icon: '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
  //   })
  // }

  render() {
    return (
      <div className="app">
        <br />
        <br />
        <h1 className="NewTask-Tittle"> Add New Task</h1>
        <hr className="line" />
        <br />
        {/* <Category/> */}
        <div className="calender-date">
          <div className="startTime">
            <i className="far fa-calendar-alt fa-3x" />
          </div>
          <br />
          <br />

          <Date className="date" />
          <br />
          <br />
        </div>
        <Clock />
        <hr className="line" />

        <EndTime />

        <div className="app"></div>
        <hr className="line" />
        <form>
          <label className="newTaskLableName">
            New Task Name:
            <input className="newTaskInput" type="text" name="name" />
          </label>
        </form>

        <hr className="line" />
        <DropdownButton id="dropdown-item-button">
          <Dropdown.Item
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
              });
            }}
            as="button"
          >
            <i id="icon" className="fas fa-heartbeat iconDropdown"></i>
          </Dropdown.Item>
          <Dropdown.Item
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
              });
            }}
            as="button"
          >
            <i id="icon" className="fas fa-heartbeat iconDropdown"></i>
          </Dropdown.Item>
          <Dropdown.Item
            className="addIcon"
            onClick={() => {
              this.setState({
                icon:
                  '<i id="icon" className="fas fa-heartbeat iconDropdown"></i>'
              });
            }}
            as="button"
          >
            <i id="icon" className="fas fa-heartbeat iconDropdown"></i>
          </Dropdown.Item>
        </DropdownButton>
        {/* <Label /> */}
        <div>
          {/* <JsxParser jsx={this.state.icon} /> */}
        </div>
        <hr className="line" />
      </div>
    );
  }
}

export default NewTask;
