import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStackScreen from "./app/screens/RootStackScreen";

export default function App() {
  return (
    <RootStackScreen>
      <View style={styles.container}>
        <Text>Silikhe</Text>
        <StatusBar style="auto" />
      </View>
    </RootStackScreen>
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
