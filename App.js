import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import SignUpForm from "./screens/SignUpForm";
import Summary from "./screens/Summary";
import SignIn from "./screens/SignIn";
import { store, persistor } from "./store/store";
import DashBoard from "./screens/DashBoard";

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
    <HomeStack.Screen name="Dashboard" component={DashBoard} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeStackScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
