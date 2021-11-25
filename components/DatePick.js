import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DatePicker from "react-native-date-picker";

const styles = StyleSheet.create({
  error: {
    color: "red",
    paddingLeft: 20,
  },
});
const DatePick = (props) => (
  <View>
    <DatePicker
      mode={props.mode || "date"}
      maximumDate={props.maximumDate || new Date("2000-12-12")}
      minimumDate={props.minimumDate || new Date("1900-12-12")}
      date={props.date || new Date()}
      onDateChange={props.onDateChange}
    />
    {props.errors && <Text style={styles.error}>{props.errors.message}</Text>}
  </View>
);

export default DatePick;
