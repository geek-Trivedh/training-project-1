import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#333",
    fontSize: 18,
  },
});
export default Header;
