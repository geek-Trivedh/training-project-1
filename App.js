import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CreateAccount, SignIn, Profile, Home,Search,Details,Search2 } from './screens/MultiScreens';
import SignUpForm from './components/Form';
import Summary from './components/Summary'

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const SignUpStack = createNativeStackNavigator();

const HomeStackScreen = ()=>(
  <HomeStack.Navigator>
    <HomeStack.Screen  options={{headerShown: false}} name="Home" component={Home} />
    <HomeStack.Screen name="SignUpForm" component={SignUpForm} options={{title:"Sign Up Form"}} />
   <HomeStack.Screen name="Summary" component={Summary} />
   
  </HomeStack.Navigator>
)
// const SignUpStackScreen = ()=>(
//   <SignUpStack.Navigator >
//     <SignUpStack.Screen name="SignUpForm" component={SignUpForm} />
//     <SignUpStack.Screen name="Summary" component={Summary} />
//   </SignUpStack.Navigator>
// )

const SearchStackScreen = ()=>(
  <SearchStack.Navigator>
    <SearchStack.Screen  name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
)
const ProfileStackScreen =()=>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsScreen = ()=>(
  <Tabs.Navigator>
  <Tabs.Screen options={{headerShown: false}} name="Home Tab" component={HomeStackScreen} />
  <Tabs.Screen  name="Search" component={SearchStackScreen} />
</Tabs.Navigator>
)

const App = ()=>{
  return (
   <NavigationContainer>
    <Drawer.Navigator >
      <Drawer.Screen  name="Home Drawer" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  {/* <SignUpStackScreen /> */}

  </NavigationContainer>
  )
}

export default App;