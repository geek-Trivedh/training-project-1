import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddTodo from "../container/AddTodo";
import Footer from "./Footer";
import { connect } from "react-redux";
import CheckBox from "react-native-check-box";

import { REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes";
import Icon from "react-native-vector-icons/FontAwesome5";
import { showToast } from "../utils/Toast";
import { ERROR } from "../constants/constants";

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
  const [todoFilter, setTodoFilter] = useState(todos);
  useEffect(() => {
    return setTodoFilter(todos);
  }, [todos]);

  const completedTodosFilter = () => {
    setTodoFilter(() => todos.filter((todo) => todo.completed));
  };
  const notCompletedTodosFilter = () => {
    setTodoFilter(() => todos.filter((todo) => !todo.completed));
  };
  const clearAllFilters = () => {
    setTodoFilter(() => todos);
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CheckBox
              style={{ padding: 10 }}
              onClick={() => toggleTodo(item.id)}
              isChecked={item.completed}
              checkBoxColor={"#fadadd"}
              uncheckedCheckBoxColor={"#707070"}
            />
            <Text
              style={{
                ...styles.text,
                fontFamily: "Hind Madurai",
                opacity: item.completed ? 0.3 : 1,
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
            >
              {item.todo}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          showToast(ERROR, "Deleted Successfully");
          deleteTodo(item.id);
        }}
      >
        <Icon name="trash-alt" size={20} />
      </TouchableOpacity>
      {/* <Button onPress={() => deleteTodo(item.id)} title={"delete"} /> */}
    </View>
  );
  return (
    <View style={styles.screen}>
      <View style={styles.todoContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Todos</Text>
        </View>
        <AddTodo />
        <View style={styles.todoListContainer}>
          <FlatList
            data={todoFilter}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
      <Footer style={styles.footer}>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => completedTodosFilter()}>
            <Icon name="check" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => notCompletedTodosFilter()}>
            <Icon name="times" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clearAllFilters()}>
            <Icon name="ban" size={20} />
          </TouchableOpacity>
        </View>
      </Footer>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) =>
    dispatch({
      type: TOGGLE_TODO,
      id,
    }),
  deleteTodo: (id) =>
    dispatch({
      type: REMOVE_TODO,
      id,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  todoContainer: {
    marginHorizontal: 15,
  },
  input: {
    borderColor: "#333",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  headerContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  header: {
    fontSize: 52,
    fontFamily: "Dosis",
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "100%",
    padding: 15,
  },
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
