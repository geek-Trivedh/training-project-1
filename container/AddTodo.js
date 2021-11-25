import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { ADD_TODO } from "../actions/actionTypes";
import { ERROR, SUCCESS } from "../constants/constants";
import { showToast } from "../utils/Toast";
import Icon from "react-native-vector-icons/FontAwesome5";
const AddTodo = (props) => {
  const [text, setText] = useState("");
  const addTodo = (text) => {
    if (text.trim()) {
      props.dispatch(addTodoAction(text));
      showToast(SUCCESS, "Whooray!! Todo added");
      setText("");
    } else {
      showToast(ERROR, "Can't add empty todo");
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        placeholder={"Eg: Add eggs to the shopping list"}
        onChangeText={setText}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => addTodo(text)}>
        <View style={styles.iconContainer}>
          <Icon name="plus" size={20} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default connect()(AddTodo);

const addTodoAction = (todo) => ({
  type: ADD_TODO,
  todo,
});
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 5,
    height: 50,
    backgroundColor: "#eaeaea",
    flex: 1,
  },
  icon: {
    color: "#de9595",
    padding: 10,
  },
  iconContainer: {
    backgroundColor: "#eaeaea",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
  },
});
