import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import profileScreen from "./profileScreen";
import bookScreen from "./bookScreen";

const PassStackT = createStackNavigator();

const PassStack = ({ navigation }) => (
  <>
    <PassStackT.Navigator initialRouteName="SplashScreen" headerMode="none ">
      <PassStackT.Screen name="profile" component={profileScreen} />
    </PassStackT.Navigator>
  </>
);

export default PassStack;
