import React from "react";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  View,
} from "react-native";

export default function SplashScreens({ navigation }) {
  setTimeout(() => {
    navigation.navigate("phone");
  }, 3000);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B48900",
  },
  header: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#B48900",
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    backgroundColor: "red",
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
