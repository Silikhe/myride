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
import phoneScreen from "./phoneScreen";
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

const RootStack = createStackNavigator();
const DriverStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({ navigation }) => (
  <>
    <RootStack.Navigator initialRouteName="SplashScreen" headerMode="none ">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="passenger" component={passengerBook} />
      <RootStack.Screen name="book" component={Book} />
      <RootStack.Screen name="Search" component={searchScreen} />
      <RootStack.Screen name="request" component={request} />
      {/* <RootStack.Screen name="driverBook" component={driverBook} /> */}
      <RootStack.Screen name="location" component={locationScreen} />
      <RootStack.Screen name="available" component={availableDrivers} />
      <RootStack.Screen name="phone" component={phoneScreen} />
      {/* <RootStack.Screen name="map" component={mapScreen} /> */}
      {/* <RootStack.Screen name="DatePick" component={DatePick} /> */}
      {/* <RootStack.Screen
        header="none"
        name="launcher"
        component={LaunchScreen}
      /> */}
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </RootStack.Navigator>
  </>
);

export default RootStackScreen;
