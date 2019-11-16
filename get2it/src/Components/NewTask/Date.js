import React from "react";
import Downshift from "downshift";
import Kalendaryo from "kalendaryo";
import Calendar from "./Calender";
import { format } from "date-fns";
import "./NewTask.css";

function Date(props) {
  return (
    <Downshift
      itemToString={date => (date ? format(date, 'yyyy-MM-dd') : "")}
      {...props}
    >
      {({ getInputProps, getItemProps, toggleMenu, isOpen, selectedItem }) => (
        <div className="date-picker-container">
        
        <button  Class="far fa-calendar-alt" />
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
export default Date;
