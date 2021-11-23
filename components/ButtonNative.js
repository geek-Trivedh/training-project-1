import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const ButtonNative = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.btnAction}
    >
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#007bff",
    backgroundColor: "#007bff",
    padding: 15,
    margin: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
export default ButtonNative;
