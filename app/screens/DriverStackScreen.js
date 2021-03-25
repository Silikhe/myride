import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import SplashScreen from "./SplashScreen";
import searchScreen from "./searchScreen";
import locationScreen from "./locationScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import LaunchScreen from "./LaunchScreen";
import mapScreen from "./mapScreen";
import availableDrivers from "./availableDrivers";
import DatePick from "./DatePick";
import Book from "./bookScreen";
import driverBook from "./driverBook";
import passengerBook from "./passengerBook";
import request from "./request";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// import drawer from "./drawer";
// import availableDrivers from "./availableDrivers";

const DriverStack = createStackNavigator();

const DriverStackScreen = ({ navigation }) => (
  <>
    <DriverStack.Navigator initialRouteName="SplashScreen" headerMode="none ">
      <DriverStack.Screen name="driverBook" component={driverBook} />
    </DriverStack.Navigator>
  </>
);

export default DriverStackScreen;
