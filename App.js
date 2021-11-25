import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import DashBoard from "./screens/DashBoard";
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUpForm from "./screens/SignUpForm";
import Summary from "./screens/Summary";
import Todos from "./screens/Todos";
import { store } from "./store";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="SignUpForm"
      component={SignUpForm}
      options={{ title: "Sign Up" }}
    />
    <HomeStack.Screen name="Summary" component={Summary} />
    <HomeStack.Screen
      name="SignIn"
      options={{ title: "Sign In" }}
      component={SignIn}
    />
    <HomeStack.Screen
      options={{ headerShown: false }}
      name="Dashboard"
      component={DashBoard}
    />
    <HomeStack.Screen name="Todos" component={Todos} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
