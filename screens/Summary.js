import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
const Summary = ({ route, navigation, signUpDetails }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "stretch",
    },
    view: {
      margin: 10,
      padding: 5,
      borderWidth: 1,
      borderColor: "#333",
      borderRadius: 5,
    },
    key: {
      fontSize: 18,
    },
    button: {
      borderWidth: 1,
      borderColor: "#fcdf03",
      backgroundColor: "#fcdf03",
      padding: 15,
      margin: 5,
    },
    btnText: {
      color: "#333",
      fontSize: 20,
      textAlign: "center",
    },
  });
  // const { firstName, lastName, fullName, dob, number, email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text>Full Name : {signUpDetails.fullName}</Text>
      </View>
      <View style={styles.view}>
        <Text>
          Date of birth :{" "}
          {`${signUpDetails.dob.split(" ").slice(0, 4).join(" ")}`}
        </Text>
      </View>
      <View style={styles.view}>
        <Text>Number : {`${signUpDetails.number}`}</Text>
      </View>
      <View style={styles.view}>
        <Text>Email : {`${signUpDetails.email}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  console.log("STATE", state);
  return {
    signUpDetails: state.signUpDetails,
  };
};
export default connect(mapStateToProps, null)(Summary);
