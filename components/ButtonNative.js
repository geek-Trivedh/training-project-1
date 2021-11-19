import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const ButtonNative = (props) => {
  const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderColor: props.borderColor || "#fcdf03",
      backgroundColor: props.backgroundColor || "#fcdf03",
      padding: 15,
      margin: 5,
    },
    btnText: {
      color: props.textColor || "#333",
      fontSize: 20,
      textAlign: "center",
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={props.btnAction}>
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonNative;
