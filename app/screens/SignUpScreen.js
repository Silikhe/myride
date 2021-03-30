import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function SignUpScreen({ navigation, route }) {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = React.useState();
  // setId(1);
  // alert(id);

  const userLogin = (props) => {
    // alert("ok");
    fetch("http://192.168.122.1/myride/api/api/login", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // alert(responseJson);
        //here we will get our id
        var id = 1;
        var myJSON = JSON.stringify(responseJson);
        console.log(myJSON);
        if (responseJson === true) {
          Alert.alert("Confirm Your login details and Try again");
        } else {
          navigation.push("location", {
            id: id,
          });
        }
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
    setUsername(val);
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setPassword(val);
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>SignIn to take a ride</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="Your Username"
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

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 25,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="red" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate("location")}
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
              Register
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => userLogin()}
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
              Sign In
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 17,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
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
