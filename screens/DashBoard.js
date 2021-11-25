import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ButtonNative from "../components/ButtonNative";
import Header from "../components/Header";

export default DashBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header title={"Welcome to the dashboard"} />
      <View>
        <ButtonNative
          style={styles.successButton}
          btnAction={() => navigation.navigate("Todos")}
          title={"Todos"}
        />
      </View>
      <View style={styles.bottomContainer}>
        <ButtonNative
          style={styles.dangerButton}
          btnAction={() => navigation.navigate("Home")}
          title={"Sign Out"}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  successButton: {
    backgroundColor: "green",
    borderColor: "green",
  },
  dangerButton: {
    backgroundColor: "red",
    borderColor: "red",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 15,
    width: "100%",
  },
});
