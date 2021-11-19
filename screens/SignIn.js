import React from "react";
import { View, Text } from "react-native";
import ButtonNative from "../components/ButtonNative";
import Input from "../components/Input";
const SignIn = () => (
  <View>
    <View>
      <Text>Hey,</Text>
      <Text>Login Now.</Text>
      <View>
        <Text>
          If you are new/ <Text>Create New</Text>
        </Text>
      </View>
    </View>
    <View>
      <Input placeholder={"Email"} />
      <Input placeholder={"Password"} secureTextEntry={true} />
      <View>
        <Text>
          Forgot Passcode?/ <Text>Reset</Text>
        </Text>
      </View>
      <View>
        <ButtonNative
          text={"Sign In"}
          textColor={"#fff"}
          borderColor={"#ea4c89"}
          backgroundColor={"#ea4c89"}
        />
      </View>
    </View>
  </View>
);

export default SignIn;
