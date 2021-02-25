import React from "react";
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

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Signup to continue</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>User</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#c4c4c4" size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
          <Feather name="check-circle" color="#B48900" size={2} />
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
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
          <Feather name="eye-off" color="red" size={2} />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 25,
            },
          ]}
        >
          Phone Number
        </Text>
        <View style={styles.action}>
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
          <Feather name="lock" color="#B48900" size={2} />
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
            secureTextEntry={true}
            placeholder="Your Password"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: "#c4c4c4",
              },
            ]}
          />
          <Feather name="check-circle" color="#B48900" size={2} />
        </View>
        <View style={styles.button}>
          {/* <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("launcher")}
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
              Sign Up
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
