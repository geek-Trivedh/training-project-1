import React from "react";
import { View, StyleSheet } from "react-native";

const Footer = (props) => (
  <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    padding: 20,
    backgroundColor: "#fff",
  },
});

export default Footer;
