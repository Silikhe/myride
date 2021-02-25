import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackScreen from "./app/screens/RookStackScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#B48900",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "Bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="login" component={SignInScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
