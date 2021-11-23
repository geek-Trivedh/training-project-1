import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Todos = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Todos;
