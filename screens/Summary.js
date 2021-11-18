import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Summary = ({ route, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    view: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
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
  return (
    <SafeAreaView style={styles.container}>
      {route.params &&
        Object.keys(route.params).map((el, i, arr) => (
          <View style={styles.view} key={i}>
            <Text style={styles.key}>{arr[i]}</Text>
            <Text style={styles.key}>:</Text>
            <Text style={styles.key}>{route.params[el]}</Text>
          </View>
        ))}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>Edit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Summary;
