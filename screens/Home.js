import React from "react";
import { Text, StyleSheet, View } from "react-native";

import ButtonNative from "../components/ButtonNative";
import Header from "../components/Header";

export default Home = ({ navigation }) => (
  <View style={styles.screen}>
    <Header title={"Welcome to the app"} />
    <View style={styles.body}>
      <View style={styles.buttonContainer}>
        <ButtonNative
          style={styles.button}
          title="Sign Up"
          btnAction={() =>
            navigation.navigate("SignUpForm", { name: "Sign Up Form" })
          }
        />
        <ButtonNative
          style={styles.button}
          title="Sign In"
          btnAction={() =>
            navigation.navigate("SignIn", { name: "Sign In Form" })
          }
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    maxWidth: "80%",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
});
