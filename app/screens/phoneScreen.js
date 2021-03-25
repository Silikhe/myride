import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
export default function phoneScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const userPhone = () => {
    () => navigation.navigate("location");
    // alert(phoneNumber);
    fetch("http://192.168.122.1/myride/api/api/phone", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var myJSON = JSON.stringify(responseJson);

        if (myJSON != { phoneNumber: { phoneNumber: phoneNumber } }) {
          navigation.navigate("SignUpScreen");
          // alert("Yess");
        } else {
          navigation.navigate("SignInScreen");
        }
        // if {"phoneNumber":{"phoneNumber":"+254706745581"}}) {
        //   showMessage("Something is bad", "This username is already taken");
        // } else {
        //   this.props.navigator.push({
        //     name: "contacts",
        //     password: this.state.password,
        //     id: id,
        //     username: this.state.username,
        //   });
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //end
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    setPhoneNumber(val);
    if (val.includes("+254")) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        check_textInputChange: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Enter phone number to continue</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Phone Number</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="+254 706 745581"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <View>
              <Feather name="check-circle" color="green" size={20} />
            </View>
          ) : null}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => userPhone()}
            style={[
              styles.signIn,
              {
                borderColor: "#B48900",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#B48900",
                },
              ]}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B48900",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 120,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
