import React from "react";
import { Text, Button } from "react-native";
import ScreenContainer from "./ScreenContainer";
export default Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Welcome to the app</Text>
    <Button
      title="Sign Up"
      onPress={() =>
        navigation.navigate("SignUpForm", { name: "Sign Up Form" })
      }
    />
    <Button
      title="Sign In"
      onPress={() => navigation.navigate("SignIn", { name: "Sign In Form" })}
    />
  </ScreenContainer>
);
