import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import SignUpForm from "./screens/SignUpForm";
import Summary from "./screens/Summary";
import SignIn from "./screens/SignIn";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={Home}
    />
    <HomeStack.Screen
      name="SignUpForm"
      component={SignUpForm}
      options={{ title: "Sign Up Form" }}
    />
    <HomeStack.Screen name="Summary" component={Summary} />
    <HomeStack.Screen name="SignIn" component={SignIn} />
  </HomeStack.Navigator>
);

const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home Drawer" component={HomeStackScreen} />
            <Drawer.Screen name="SignUpForm" component={SignUpForm} />
            <Drawer.Screen name="SignIn" component={SignIn} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
