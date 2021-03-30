import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Font from "react-native-vector-icons/FontAwesome";
import Fe from "react-native-vector-icons/Feather";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import RootStackScreen from "../screens/RookStackScreen";
// import PassengerStackScreen from "../screens/PassengerStackScreen";
import DriverStackScreen from "../screens/DriverStackScreen";
import PassStack from "../screens/PassStack ";

import { AuthContext } from "./context";

const DrawerT = createDrawerNavigator();

const CustomDrawer = (props, { navigation }) => {
  const paperTheme = useTheme();

  const [isEnabled, setIsEnabled] = useState(false);
  // console.log(isEnabled);

  const switched = () => {
    if (!isEnabled) {
      props.navigation.navigate("Driver");
      // console.log("Hurray");
    } else {
      // props.navigation.navigate("passenger");
      alert("ill");
    }
  };

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/profile-icon.jpg")}
                size={70}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  <DrawerItem
                    icon={({ color, size }) => (
                      <Icon name="phone" color={color} size={size} />
                    )}
                    label="+254 7067 455 81"
                  />
                </Paragraph>
                {/* <Caption style={styles.caption}>Following</Caption> */}
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={28} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("location");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="credit-card-check" color={color} size={size} />
              )}
              label="Payment"
              onPress={() => {
                props.navigation.navigate("available");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Fe name="archive" color={color} size={size} />
              )}
              label="Trips"
              onPress={() => {
                props.navigation.navigate("launcher");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Font name="cog" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate("driverBook");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <View style={styles.preference}>
              {isEnabled ? <Text>Driver</Text> : <Text>Passenger</Text>}
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled ? "#B48900" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={
                  (toggleSwitch,
                  () => {
                    switched();
                    // navigation.navigate("Driver");
                  })
                }
                value={isEnabled}
              />
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const DrawerNavigator = (props) => {
  const paperTheme = useTheme();

  // const { signOut, toggleTheme } = React.useContext(AuthContext);
  return (
    <DrawerT.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <DrawerT.Screen name="Pase" component={RootStackScreen} />
      <DrawerT.Screen name="Driver" component={DriverStackScreen} />
      <DrawerT.Screen name="Other" component={PassStack} />
    </DrawerT.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerNavigator;
