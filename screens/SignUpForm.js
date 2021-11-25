import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";

import Input from "../components/Input";
import DatePick from "../components/DatePick";
import ButtonNative from "../components/ButtonNative";
import * as message from "../constants/constants";
import { showToast } from "../utils/Toast";
import { signUpSchema } from "../utils/schema";
import { saveSignUpDetailsAction } from "../actions";

function SignUpForm(props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      fullName: "",
      dob: new Date("2000-12-12"),
    },
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    props.dispatch(saveSignUpDetailsAction(data));
    props.navigation.navigate("SignIn");
    showToast(message.SUCCESS, message.ACC_CREATED, message.SIGN_IN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>
            Full Name :{" "}
            <Text style={styles.fullName}>{`${watch("firstName")} ${watch(
              "lastName"
            )}`}</Text>
          </Text>
        </View>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => {
                onChange(text);
                setValue(
                  "fullName",
                  `${getValues("firstName")} ${getValues("lastName")}`
                );
              }}
              placeholder="Your first name"
              value={value}
              errors={errors.firstName}
            />
          )}
          name="firstName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(text) => {
                onChange(text);
                setValue(
                  "fullName",
                  `${getValues("firstName")} ${getValues("lastName")}`
                );
              }}
              placeholder="Your last name"
              value={value}
              errors={errors.lastName}
            />
          )}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              placeholder="Full Name"
              value={value}
              errors={errors.fullName}
              editable={false}
              selectTextOnFocus={false}
            />
          )}
          name="fullName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(email) => {
                return onChange(email.toLowerCase());
              }}
              placeholder="Your email"
              value={value}
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
              placeholder="password"
              value={value}
              errors={errors.password}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              placeholder="Confirm password"
              value={value}
              errors={errors.confirmPassword}
              secureTextEntry={true}
            />
          )}
          name="confirmPassword"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={(number) => {
                const cleanNumber = number.replace(/[^0-9]/g, "");
                return onChange(cleanNumber);
              }}
              placeholder="Mobile number"
              value={value}
              errors={errors.number}
            />
          )}
          name="number"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ textAlign: "center", fontSize: 18 }}>
                Date of Birth
              </Text>
              <DatePick
                errors={errors.dob}
                mode={"date"}
                onDateChange={onChange}
                date={value}
              />
            </View>
          )}
          name="dob"
        />
        <ButtonNative
          style={{}}
          btnAction={handleSubmit(onSubmit)}
          title={"Sign Up"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  fullName: {
    color: "green",
  },
});

export default connect()(SignUpForm);
