import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import ButtonNative from "../components/ButtonNative";
import Input from "../components/Input";
import { store } from "../store";
import { showToast } from "../utils/Toast";
import {
  ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SUCCESS,
} from "../constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/schema";

const SignIn = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: store?.getState()?.signUpDetailReducer?.signUpDetails?.email || "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = ({ email, password }) => {
    if (
      store.getState().signUpDetailReducer.signUpDetails.email === email &&
      store.getState().signUpDetailReducer.signUpDetails.password === password
    ) {
      navigation.navigate("Dashboard");
      showToast(SUCCESS, SIGN_IN_SUCCESS);
    } else {
      showToast(ERROR, SIGN_IN_ERROR);
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
              placeholder={"Email"}
              errors={errors.email}
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
            title={"Sign In"}
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
