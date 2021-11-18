import React from "react";

import DatePicker from "react-native-date-picker";
const DatePick = (props) => (
  <DatePicker
    mode={props.mode || "date"}
    maximumDate={props.maximumDate || new Date("2000-12-12")}
    minimumDate={props.minimumDate || new Date("1900-12-12")}
    date={props.date || new Date()}
    onDateChange={props.onDateChange}
  />
);

export default DatePick;
