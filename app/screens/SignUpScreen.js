import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function SignUpScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Signup Screen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}
