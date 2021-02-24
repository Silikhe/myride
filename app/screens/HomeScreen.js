import React from "react";
RookStackScreen;
export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="Next Screen"
        onPress={() => navigation.navigate("login")}
      />
    </View>
  );
}
