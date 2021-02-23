import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import RootStackScreen from "./app/screens/RootStackScreen";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Silikhe</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>

    // <RootStackScreen>

    // </RootStackScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
