import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomeButton";
export default function LaunchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Please Choose one of the options to continue..</Text>
      </View>
      <View>
        <CustomButton
          onPress={() => navigation.navigate("driverBook")}
          title="I AM A DRIVER"
        />
        <CustomButton
          style={{
            backgroundColor: "#000",
          }}
          onPress={() => navigation.navigate("location")}
          title="I AM A PASSANGER"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    // color: "grey",
    marginBottom: 55,
  },
});
