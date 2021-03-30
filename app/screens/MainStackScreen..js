import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import LaunchScreen from "./LaunchScreen";
import mapScreen from "./mapScreen";
import DatePick from "./DatePick";

const MainStack = createStackNavigator();

const MainStackScreen = ({ navigation }) => (
  <MainStack.Navigator headerMode="float">
    <MainStack.Screen
      name="SplashScreen"
      title="Awesome app"
      component={SplashScreen}
    />
    <MainStack.Screen name="mapScreen" component={mapScreen} />
    <MainStack.Screen name="DatePick" component={DatePick} />
    <MainStack.Screen name="launcher" component={LaunchScreen} />
    {/* <MainStack.Screen name="SignInScreen" component={SignInScreen} /> */}
    {/* <MainStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
  </MainStack.Navigator>
);

export default MainStackScreen;
