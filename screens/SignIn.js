import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import ButtonNative from "../components/ButtonNative";
import Input from "../components/Input";
import { store } from "../store/store";

const SignIn = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: store?.getState()?.signUpDetails?.email || "",
      password: "",
    },
  });

  const onSubmit = ({ email, password }) => {
    if (
      store.getState().signUpDetails.email === email &&
      store.getState().signUpDetails.password === password
    ) {
      navigation.navigate("Dashboard");
    } else {
      setError("password", {
        type: "manual",
        message: "Email and password does not match",
      });
    }
  };
  return (
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
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              errors={errors.email}
              placeholder={"Email"}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              placeholder={"Password"}
              secureTextEntry={true}
              errors={errors.password}
            />
          )}
          name="password"
        />
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
            btnAction={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;
