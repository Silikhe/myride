import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export default function SignInScreen({ navigation }) {
  // send data

  // const [isSubmit, setSubmit] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  //Set visibility
  function Vissibility(props) {
    const [isVisible, setIsVisible] = useState(true);
    const [children, setChildren] = useState(props.children);

    useEffect(() => {
      setChildren(props.children);
      setIsVisible(true);
      setTimer(props.delay);
    }, [props.children]);

    const setTimer = (delay) => {
      setTimeout(() => setIsVisible(false), delay);
    };

    return isVisible ? <div>{children}</div> : <span />;
  }

  const userRegister = (prop) => {
    fetch("http://192.168.122.1/myride/api/api/register", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        var myJSON = JSON.stringify(responseJson);
        if (responseJson == false) {
          Alert.alert("Check your email for Variffication");

          // navigation.navigate("location");
        } else {
          Alert.alert("Correct your cridentials and try again");
        }
        //else {
        //   // navigation.navigate("location");
        //   Alert.alert("This username or email address has already been taken");
        // }
        // Alert.alert(JSON);
        // navigation.navigate("location");
        // setTimeout(
        //   () => setMessage({ message: "Yeey will dissapear in 2 sec" }),
        //   2000
        // );
        // Alert.alert(myJSON);
        // console.log(myJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //end

  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    setUsername(val);
    if (val.length >= 3) {
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

  const onEmailChange = (val) => {
    setEmail(val);
    if (val.includes("@" && ".com")) {
      setData({
        ...data,
        email: val,
        check_textInputChang: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChang: false,
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
        <Text style={styles.text_header}>Signup to continue</Text>
      </View>
      <View style={styles.footer}>
        {/* <Text style={styles.text_footer}>{message}</Text> */}
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
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="envelope" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            onChangeText={(val) => onEmailChange(val)}
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
          {data.check_textInputChang ? (
            <View>
              <Feather name="check-circle" color="green" size={20} />
            </View>
          ) : null}
        </View>

        {/* <Text
          style={[
            styles.text_footer,
            {
              marginTop: 25,
            },
          ]}
        >
          Phone Number
        </Text> */}
        {/* <View style={styles.action}>
          <FontAwesome name="phone" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="Your Phone number"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
        </View> */}

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
          <TouchableOpacity
            onPress={() => {
              userRegister();
            }}
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpScreen")}
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
    paddingBottom: "10%",
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
    marginTop: 12,
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
    marginTop: 8,
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
