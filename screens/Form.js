import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
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
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    // navigation.navigate("Summary", data);
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
  return (
    <SafeAreaView style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="Your first name"
            value={value}
            errors={errors.firstName}
            setValue={setValue}
          />
        )}
        name="firstName"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="Your last name"
            value={value}
            errors={errors.lastName}
            setValue={setValue}
          />
        )}
        name="lastName"
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="Your full name"
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
          <View>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Date of Birth
            </Text>
            <DatePick
              errors={errors.date}
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
    </SafeAreaView>
  );
}
