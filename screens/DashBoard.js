import React from "react";
import { View, StyleSheet } from "react-native";

import ButtonNative from "../components/ButtonNative";
import Header from "../components/Header";

export default DashBoard = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Header title={"Welcome to the dashboard"} />
      <View>
        <ButtonNative
          style={styles.button}
          btnAction={() => navigation.navigate("Home")}
          title={"Todos"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    backgroundColor: "green",
  },
});
