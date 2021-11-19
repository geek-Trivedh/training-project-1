import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import schema from "../utils/schema";
import Input from "../components/Input";
import DatePick from "../components/DatePick";

export default function SignUpForm({ navigation }) {
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
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    navigation.navigate("Summary", data);
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
    },

    heading: {
      fontSize: 24,
      fontWeight: "700",
      margin: 10,
      textAlign: "center",
    },
    signUpButton: {
      borderWidth: 1,
      borderColor: "#007bff",
      backgroundColor: "#007bff",
      padding: 15,
      margin: 5,
    },
    signUpText: {
      color: "#fff",
      fontSize: 20,
      textAlign: "center",
    },
  });
  console.log(`${getValues("firstName")}`);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>Full Name : {`${watch("firstName")} ${watch("lastName")}`}</Text>
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

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
