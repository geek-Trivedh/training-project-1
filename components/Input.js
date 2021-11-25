import React from "react";
import { TextInput, StyleSheet, View, Text, Keyboard } from "react-native";

const styles = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 5,
    margin: 5,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  lockedInput: {
    color: "green",
  },
  error: {
    color: "red",
    paddingLeft: 20,
  },
});

const Input = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry || false}
        editable={props.editable == false ? false : true}
        selectTextOnFocus={props.selectTextOnFocus == false ? false : true}
        underlineColorAndroid="transparent"
        onBlur={Keyboard.dismiss}
      />
      {props.errors && <Text style={styles.error}>{props.errors.message}</Text>}
    </View>
  );
};
export default Input;
